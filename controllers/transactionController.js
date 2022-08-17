
const db = require('../config/db')
const bankAccount = require('../controllers/accountController')

exports.transact=async(req, res, next)=>{

    // performs credit and debit transaction
    // the account is funded if transactionType is "credit", else it is debited if "debit"

    const {transactionType, amount, user_id, accountNumber} = req.body;
    const user = await db("users").first("*").where({id:user_id})
    if (!user){
        res.status(404).json({message:"User does not exist"})
    }
    const account = await db("accounts").first("*").where({accountNumber})

    if (!account){
        res.status(404).json({message:"Account does not exist"})
    }
    
    let accountBalance = parseInt(account.balance)
  
    try{
        if (transactionType === "credit"){
        newBalance = amount + accountBalance
        await db("accounts").update({balance:newBalance})
        res.status(200).json({message:`account successfully credited with ${amount} naira`, currentBalance: newBalance})
        }

    else if (transactionType === "debit"){

        if (amount > accountBalance){
            res.status(400).json({message:"Insufficient balance"})
        }else{
            const newBalance = accountBalance - amount
            db("accounts").update({balance:newBalance})
            res.status(200).json({message:`accounted successfully debited with ${amount} naira`, balance: newBalance})
        }
    }
    }catch (err) {
        console.log(err)
    }
    
    res.status(404).json({message:"Invalid transaction"})
    }
    

exports.transfer= async(req, res, next)=>{
    const {user_id, senderAccountNumber, receiverAccountNumber, amount}= req.body;
    const user = await db("users").first("*").where({id: user_id})
    console.log(user)
    if (!user){
        res.status(404).json({message:"User does not exist"})
    }
    const sender_account = await db("accounts").first("*").where({accountNumber: senderAccountNumber})
    const receiver_account = await db("accounts").first("*").where({accountNumber: receiverAccountNumber})

    if (!sender_account | !receiver_account){
        res.send({message:"Please provide a valid account Number"})
    }

    if (amount > parseInt(sender_account.balance)){
        res.status(400).json({message:"You do not have sufficient funds"})
    }
    
    let sender_balance = parseInt(sender_account.balance) - amount
    let receiver_balance = parseInt(receiver_account.balance) + amount

    res.status(200).json({success:true, message:`you've successfully transfered ${amount} to ${receiver_account.user_id}`, balance: sender_balance})

    
}
