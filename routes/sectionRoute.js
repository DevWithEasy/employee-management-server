const { createSection, getSections, updateSection, deleteSection } = require('../controllers/sectionControllers')
const upload = require('../middlewares/upload')
const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create', verifyToken,upload.single('image'),createSection)
router.put('/update/:id', verifyToken,updateSection)
router.delete('/delete/:id', verifyToken,deleteSection)
router.get('/',verifyToken,getSections)

module.exports = router