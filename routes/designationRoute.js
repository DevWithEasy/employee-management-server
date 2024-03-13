const { createDesignation, updateDesignation, deleteDesignation, getDesignations } = require('../controllers/designationControllers')
const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create', verifyToken, createDesignation)
router.put('/update/:id', verifyToken, updateDesignation)
router.delete('/delete/:id', verifyToken, deleteDesignation)
router.get('/', getDesignations)

module.exports = router