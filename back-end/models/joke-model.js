const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    joke: {
        type:    String,
        default: '',
    },
    likes:      Array,
    dislikes:   Array,
    created_at: {
        type:    Date,
        default: Date.now,
    },
    deleted_at: {
        type:    Date,
        default: null,
    },
})

const Joke = mongoose.model('Joke', schema)

// find only jokes with null deleleted_at
Joke.filteredFind = args => {
    return Joke.find({
        ...args,
        deleted_at: { $eq: null }
    })
}

// find only one joke by using id
Joke.filteredFindById = id => {
    return new Promise(async (resolve, reject) => {
        try {
            const jokes = await Joke.filteredFind({
                _id: id
            })
    
            if(jokes.length > 0) {
                resolve(jokes[0])
            } else {
                reject('NOT FOUND')
            }
        } catch(err) {
            reject(err)
        }
    })
}

// assign deleted_at with current datetime
Joke.softDelete = args => {
    return new Promise(async (resolve, reject) => {
        const jokes = await Joke.filteredFind(args)
        
        if(jokes.length === 0) {
            reject('Joke not found')
        }

        try {
            const data = await Joke.updateOne(
                args,
                { $set: { deleted_at: new Date } }
            )
            resolve(data)
        } catch(err) {
            reject(err)
        }
    })
}

module.exports = Joke
