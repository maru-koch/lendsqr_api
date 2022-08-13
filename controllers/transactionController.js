
const db = require('../config/db')

exports.transact=async(req, res, next)=>{
    const {transactionType, amount, user_id, account_id} = req.body;

    const user = db("users").first("*").where({user_id})
    if (!user){
        res.status(404).json({message:"User does not exist"})
    }
    const account = db("accounts").first("*").where({account_id, user_id})
    if (!account){
        res.status(404).json({message:"Account does not exist"})
    }

    if (TransactionType === "credit"){
        account.update({balance: balce + amount})
        res.status(200).json({message:"account successfully credited", balance:account.balance})
    }else if (TransactionType === "debit"){
        account.update({balance: balce - amount})
        res.status(200).json({message:"accounted successfully debited"})
    }
    
    res.status(404).json({message:"Invalid transaction"})
}