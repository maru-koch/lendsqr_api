
exports.validate =(req, res, request) => {
    request.map((item) => {
        if (!req.body.hasOwnProperty(item)) {
            res.send(`${item} is required`)
        }
    })
    next()
}