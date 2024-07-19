const app = require('express')
const { CreateVisaDetail, GetAllVisaDetail, deleteSingleVisaDetail } = require('../Controllers/VisaDetail.Controller')
const { createVisaApplication, getAllVisaApplication, deleteSingleVisaApplication, updateVisaApplication } = require('../Controllers/VisaApplication.Controller')
const router = app.Router()

router.post('/createVisaDetail',CreateVisaDetail)
router.get('/getVisaDetail',GetAllVisaDetail)
router.delete('/deleteSingleVisaDetail/:_id',deleteSingleVisaDetail)

router.post('/createVisaApplication',createVisaApplication)
router.get('/getAllVisaApplication',getAllVisaApplication)
router.delete('/deleteSingleVisaApplication/:_id',deleteSingleVisaApplication)
router.put('/updateSingleVisaApplication/:_id',updateVisaApplication)

module.exports = router