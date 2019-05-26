const express = require('express')
const router = express.Router()
const insertUtil = require('../controller/insert_controller')
const validateUtil = require('../controller/validate_controller')

router.post('/addAdmin',
    validateUtil.validate_addAdmin(),
    insertUtil.addAdmin(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addAdvantage',
    validateUtil.validate_addAdvantage(),
    insertUtil.addAdvantage(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addAward',
    validateUtil.validate_addAward(),
    insertUtil.addAward(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addCallus',
    validateUtil.validate_addCallus(),
    insertUtil.addCallus(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addCompany',
    validateUtil.validate_addCompany(),
    insertUtil.addCompany(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addCompanyDVE',
    validateUtil.validate_addCompanyDVE(),
    insertUtil.addCompanyDVE(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addcourse',
    validateUtil.validate_addcourse(),
    insertUtil.addcourse(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addDVE',
    validateUtil.validate_addDVE(),
    insertUtil.addDVE(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addHome',
    validateUtil.validate_addHome(),
    insertUtil.addHome(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addimg2',
    validateUtil.validate_addimg2(),
    insertUtil.addimg2(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addimg3',
    validateUtil.validate_addimg3(),
    insertUtil.addimg3(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addProfile',
    validateUtil.validate_addProfile(),
    insertUtil.addProfile(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addQulity',
    validateUtil.validate_addQulity(),
    insertUtil.addQulity(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addschool',
    validateUtil.validate_addschool(),
    insertUtil.addschool(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addVEC',
    validateUtil.validate_addVEC(),
    insertUtil.addVEC(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })
router.post('/addVEC2',
    validateUtil.validate_addVEC2(),
    insertUtil.addVEC2(),
    (req, res) => {
        res.status(200).json({
            "success": true,
            message: 'เพิ่มสำเสร็จแล้ว',
        })
    })

module.exports = router