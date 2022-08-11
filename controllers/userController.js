const db = require('../config/db')

exports.signup = async (req, res, next) => {
    // user signs up for new account
  try {
    const {email, password} = req.body
    const hash = await bcrypt.hashSync(password, 10)
    const [user] = await db('user').insert({email, hash}).returning('*')
    req.session.user = user
    res.json(user)
  } catch (err) {
    if (err) {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
}

exports.login = async (req, res, next) => {
    // user logs into account
  try {
    const {email, password} = req.body
    const user = await db('user').first('*').where({email})
    if (!user) {
      console.log('No such user found:', req.body.email)
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
