const express = require('express')
const router = express.Router()
const page_cp = require('../controller/cp_controller')

router.get('/get_company_pageCp',
    page_cp.get_company_pageCp(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)
router.get('/get_cp_award_pageCp',
    page_cp.get_cp_award_pageCp(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)

module.exports = router