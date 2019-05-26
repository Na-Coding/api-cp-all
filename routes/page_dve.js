const express = require('express')
const router = express.Router()
const page_dev = require('../controller/dve_controller')

router.get('/get_company_pageDve',
    page_dev.get_company_pageDve(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)
router.get('/get_dve_pageDve',
    page_dev.get_dve_pageDve(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)


module.exports = router