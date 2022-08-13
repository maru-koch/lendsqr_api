

exports.isValidAccount=(req, res, next) => {
    const accountNumber = req.body.accountNumber;
    if (accountNumber.length !== 10){
        res.send({message:"Invalid account number"})
    }
    next ()
}