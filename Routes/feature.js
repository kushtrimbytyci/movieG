const express = require('express')
const router = express.Router()
const {getFeatures} = require('../Controllers/feature')
router.route('/featured').get(getFeatures)

module.exports = router;