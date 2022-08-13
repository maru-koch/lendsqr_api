const db = require('../config/db')
const bcrypt = require('bcrypt')

exports.signup = async (req, res, next) => {

    // user signs up for new account

  try {
    const {firstName, lastName, phone, email, password} = req.body
    const hash = await bcrypt.hashSync(password, 10)
    db.insert({email, firstName, lastName, phone, email, password:hash}).into('users').returning('*').then(user =>{
      res.status(201).json({message:"registation successful"});
    })
  }catch (err) {
    if (err) {
      res.status(401).json({message: 'User already exists'})
    } else {
      next(err)
    }
  }
}

exports.login = async (req, res, next) => {

    // user logs into account with email and password
    
    console.log(req.body)
  try {
    const {email, password} = req.body
    const user = await db('users').first('*').where({email})
    console.log(user)
    if (!user) {
      console.log('User does not exist:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      const validPass = await bcrypt.compare(password, user.password)
      if (validPass) {
        res.status(200).json({message:"login successful", user})
      } else {
        console.log('Incorrect password for user:', email)
        res.status(401).send('Wrong username and/or password')
      }
    }
  } catch (err) {
    next(err)
  }
}
