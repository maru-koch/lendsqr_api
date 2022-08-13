const _ = require('underscore')
const AppError = require('../config/error')

exports.validateTransaction = (req, next) => {

  const request = ["transactionType", "amount", "user_id", "account_id"]

  request.map((item) => {
    if (!req.body[item]) return next(new AppError(`${item} is required`, 400))
  })
    if (req.body.amount <= 0){
        return next(new AppError("Amount cannot be zero or less", 400))
    };
    
  next()
}
