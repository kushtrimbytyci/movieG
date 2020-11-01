const express = require('express')
const router = express.Router()
const {user,addMessage,getMessages} = require('../Controllers/usersm')

router.route('/').post(user).put(addMessage)
router.route('/messages').get(getMessages)
module.exports = router