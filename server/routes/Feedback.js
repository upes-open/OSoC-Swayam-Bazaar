const express = require('express')
const {createFeedback,getFeedback} = require('../controller/feedbackcontroller')

const requireAuthuser = require('../middleware/requireAuthuser')
const router = express.Router()

router.use(requireAuthuser)

// controller functions
router.post("/feedback", createFeedback)
router.get("/feed", getFeedback )

module.exports = router


