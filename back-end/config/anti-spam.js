let ip = {}

const antiSpamming = (req, res, next) => {
    if(!ip[req.connection.remoteAddress]) {
        ip[req.connection.remoteAddress] = 0
    }

    if(++ip[req.connection.remoteAddress] > 14) {
        res.status(429)
        res.json({
            type:  'too many requests',
            value: 'too many requests',
        })
    } else {
        next()
    }
}

const start = () => {
    setInterval(() => {
        ip = {}
    }, 100000)
}

module.exports = {
    middleware: antiSpamming,
    start
}