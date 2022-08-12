const db = require('../config/db')
const bcrypt = require('bcrypt')

exports.signup = async (req, res, next) => {
    // user signs up for new account
   console.log(req.body)
  try {
    const {firstName, lastName, phone, email, password} = req.body
    const hash = await bcrypt.hashSync(password, 10)
    // console.log(hash)
    // // const [user] = await db('user').insert()
    db.insert({email, firstName, lastName, phone, email}).into('users').returning('*').then(data =>{
      res.status(200).json({message:"registation successful", data:data});
    })
  }catch (err) {
    if (err) {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
}

exports.login = async (req, res, next) => {
    // user logs into account
    console.log(req.body)
  try {
    const {email, password} = req.body
    const user = await db('user').first('*').where({email})
    if (!user) {
      console.log('User does not exist:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      const validPass = await bcrypt.compare(password, user.hash)
      if (validPass) {
        req.session.user = user
        res.json(user)
      } else {
        console.log('Incorrect password for user:', email)
        res.status(401).send('Wrong username and/or password')
      }
    }
  } catch (err) {
    next(err)
  }
}
