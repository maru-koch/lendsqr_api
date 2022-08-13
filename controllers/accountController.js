const bank = require("../services/bank")
const db = require("../config/db");


exports.create = async(req, res, next)=>{
    const {user_id, bankCode, accountType} = req.body;
    const user = db.select('*').from("users").where(user_id)
    if (!user){
        return res.status(404).json({message: 'User does not exist'})
    }else{
        const accountNumber = generateAccountNumber(user)
        const account = db("accounts").insert({user_id, accountNumber, accountType, balance})
        return res.status(200).json({message: 'Account successfully created', data: account})
    }
}

exports.remove =async(req, res, next)=>{
    //
}