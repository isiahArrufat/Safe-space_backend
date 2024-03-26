const express = require('express')
const user = express.Router()
const {findUserByUsername} = require("../queries/users")

const { authenticateToken } = require('../middlewares/authenticateToken')

user.get('/', authenticateToken, async (req, res) => {
  res.json({ message: 'User controller' })
})

user.get('/:username', async (req, res) => {
  const { username } = req.params
  const user = await findUserByUsername(username)
  console.log("USER",user)
  if(user[0]){
    res.status(200).json(user);
} else {
    res.status(500).json({ error: "user not found"})
}
})

module.exports = user
