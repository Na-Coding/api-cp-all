const express = require('express')
const router = express.Router()
const page_index = require('../controller/index_controller')

router.get('/get_about_pageIndex',
    page_index.get_about_pageIndex(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)
router.get('/get_advantage_pageIndex',
    page_index.get_advantage_pageIndex(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)
router.get('/get_gallery_pageIndex',
    page_index.get_gallery_pageIndex(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)
router.get('/get_company_pageIndex',
    page_index.get_company_pageIndex(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)
router.get('/get_course_pageIndex',
    page_index.get_course_pageIndex(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)
router.get('/get_quality_pageIndex',
    page_index.get_quality_pageIndex(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)
router.get('/get_callus_pageIndex',
    page_index.get_callus_pageIndex(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)





module.exports = router
