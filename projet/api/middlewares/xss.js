const { sanitize } = require('indicative/sanitizer')

module.exports = (req, res, next) => {

    const sanitizers = {}

    for (const key in req.body) {
        sanitizers[key] = 'strip_tags'
    }
    sanitize(req.body, sanitizers)

    for (const key in req.require) {
        sanitizers[key] = 'strip_tags'
    }
    sanitize(req.require, sanitizers)
    next()
}