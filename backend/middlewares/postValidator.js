const {check} = require('express-validator')


exports.postValidator = [
    check('title').trim().not().isEmpty().withMessage('Post title is missing '),
    check('title').trim().not().isEmpty().withMessage('Post title is missing '),
]