const express = require('express')
const router  = express.Router()

const helper = require('../helper')

// get models
const Joke = require('../models/joke-model')

// GET / Get all jokes.
router.get('/', async (req, res) => {
    const jokes = await Joke.filteredFind({})
    res.json(jokes)
})

// POST / Add new joke.
router.post('/', async (req, res) => {
    const joke = new Joke({
        message: req.body.message
    })
    
    const data = await joke.save()
    res.json(data)
})

// GET /:id Get joke by id.
router.get('/:id', async (req, res) => {
    try {
        const joke = await Joke.filteredFindById(req.params.id)
        res.json(joke)
    } catch(err) {
        res.status(404)
        res.send('NOT FOUND')
    }
})

// DELETE /:id Delete joke.
router.delete('/:id', async (req, res) => {
    try {
        await Joke.softDelete({
            _id: req.params.id
        })
        res.send('DELETED')
    } catch(err) {
        res.status(404)
        res.send('NOT FOUND')
    }
})

// POST /:id/like Like a joke.
router.post('/:id/like', async (req, res) => {
    if(!req.session.user_id) {
        req.session.user_id = helper.randomString(8)
    }

    try {
        const joke = await Joke.filteredFindById(req.params.id)
        
        let like = joke.likes.find(id => id === req.session.user_id)
        if(!like) {
            joke.likes.push(req.session.user_id)
        } else {
            res.send('EXISTING LIKE')
        }

        joke.dislikes = joke.dislikes.filter(id => id !== req.session.user_id)
        await joke.save()
        res.json(joke)
    } catch(err) {
        res.status(404)
        res.send('NOT FOUND')
    }
})

// POST /:id/dislike Dislike a joke.
router.post('/:id/dislike', async (req, res) => {
    if(!req.session.user_id) {
        req.session.user_id = helper.randomString(8)
    }

    try {
        const joke = await Joke.filteredFindById(req.params.id)
        
        let dislike = joke.dislikes.find(id => id === req.session.user_id)
        if(!dislike) {
            joke.dislikes.push(req.session.user_id)
        } else {
            res.send('EXISTING DISLIKE')
        }

        joke.likes = joke.likes.filter(id => id !== req.session.user_id)
        await joke.save()
        res.json(joke)
    } catch(err) {
        res.status(404)
        res.send('NOT FOUND')
    }
})

// POST /reset Reset session data of user to do the anti-spamming test
router.post('/reset', (req, res) => {
    if(req.session.user_id) {
        delete req.session.user_id
    }

    res.send('SUCCESS')
})

module.exports = router
 