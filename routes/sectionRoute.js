const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create', verifyToken)
router.put('/update/:id', verifyToken)
router.delete('/delete/:id', verifyToken)
router.get('/',)

module.exports = router