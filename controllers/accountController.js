const Error = require('../config/error')
const Bank = require("../services/bank")
const db = require("../config/db");
const uuid = require('uuid5');



exports.create = async( req, res, next)=>{

    // creates a new account for an existing user

    const {user_id, bankCode, accountType} = req.body;
    const user =  await db("users").first("*").where({id:user_id})
    if (!user){
        return res.status(404).json({message: 'User does not exist'})
    }else{
        const bank = new Bank()
        let accountNumber = bank.generateAccountNumber()
        // const bankCode = bank.bankCode
        const balance = 0;
        const account = db.insert({user_id, accountNumber, accountType, balance}).into("accounts").returning("*").then((accountDetails)=>{
            res.status(201).json({message:"account sucessfully created", accountDetails})
        })
    }
}

exports.getDetails =async(req, res, next)=>{

    // fetches the account details of the specified user
        
    const user_id = req.params.user_id;
    
    if (!user_id){
        return next(new Error("user id is required", 404))
    }
    const account = await db("accounts").first("*").where({user_id})
    if(!account){
        return next(new Error("No existing account for the specified user", 404))
    }
    res.status(200).json({message:"account retrieved successfully", account})
}

exports.checkBalance= async(req, res, next)=>{
    const accountNumber = req.body.accountNumber
    console.log(accountNumber)
    const account = await db("accounts").first("*").where({accountNumber})
    if (!account){
        res.status(404).json({message:"Account not found"})
    }
    res.status(200).json({message:`Account balance is ${account.balance} naira`, balance: account.balance})
}

