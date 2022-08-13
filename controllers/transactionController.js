
const db = require('../config/db')

exports.transact=async(req, res, next)=>{

    // performs credit and debit transaction

    const {transactionType, amount, user_id, account_id} = req.body;
    const user = await db("users").first("*").where({id:user_id})
    if (!user){
        res.status(404).json({message:"User does not exist"})
    }
    const account = await db("accounts").first("*").where({id:account_id})

    if (!account){
        res.status(404).json({message:"Account does not exist"})
    }else{
        let balance = account.balance
        console.log(balance)

    if (transactionType === "credit"){
        balance = amount + balance
        const update = await db("accounts").update({balance})
       
        console.log(update)
       console.log("update")
        res.status(200).json({message:`account successfully credited with ${amount} naira`})
        }

    // }else if (transactionType === "debit"){
    //     db("accounts").update({balance:-amount})
    //     res.status(200).json({message:`accounted successfully debited with ${amount} naira`})
    // }
    
    }
    
    res.status(404).json({message:"Invalid transaction"})
}