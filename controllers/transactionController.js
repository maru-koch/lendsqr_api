
const db = require('../config/db')
const bankAccount = require('../controllers/accountController')

exports.transact=async(req, res, next)=>{

    // performs credit and debit transaction

    const {transactionType, amount, user_id, accountNumber} = req.body;
    const user = await db("users").first("*").where({id:user_id})
    if (!user){
        res.status(404).json({message:"User does not exist"})
    }
    const account = await db("accounts").first("*").where({accountNumber})

    if (!account){
        res.status(404).json({message:"Account does not exist"})
    }
    
    let balance = account.balance

    if (transactionType === "credit"){
        balance = amount + balance
        await db("accounts").update({balance})
        res.status(200).json({message:`account successfully credited with ${amount} naira`})
        }

    else if (transactionType === "debit"){
        if (amount > balance){
            res.status(400).json({message:"Insufficient balance"})
        }else{
            balance = balance - amount
            db("accounts").update({balance})
            res.status(200).json({message:`accounted successfully debited with ${amount} naira`, balance:bankAccount.checkBalance(req, res, next)})
        }
    }
    res.status(404).json({message:"Invalid transaction"})
    }
    
