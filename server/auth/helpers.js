const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(12)
    const password_digest = await bcrypt.hash(password, salt)
    return password_digest

  } catch (err) {
    console.log('ERROR', err);
  }
}

const comparePasswords = async (candidatePassword, password_digest) => {
  try {
    const match = await bcrypt.compare(candidatePassword, password_digest)
    return match

  } catch (err) {
    console.log('ERROR', err)
  }
}

const loginRequired = (req, res, next) => {
  if (req.user) {
    return next()
  }

  res.status(401).json({
    payload: null,
    message: "You need to be logged in to access this route",
    error: true
  })
}


module.exports = {
  hashPassword,
  comparePasswords,
  loginRequired
}
