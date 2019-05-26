const express = require('express')
const router = express.Router()
const page_vec = require('../controller/vec_controller')

router.get('/get_company_pageVec',
    page_vec.get_company_pageVec(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)
router.get('/get_vec_pageVec',
    page_vec.get_vec_pageVec(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)


module.exports = router