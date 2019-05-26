const express = require('express')
const router = express.Router()
const page_school = require('../controller/school_controller')

router.get('/get_schoolcontact_pageSchool',
    page_school.get_schoolcontact_pageSchool(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)
router.get('/get_schoolcontact_all_pageSchool',
    page_school.get_schoolcontact_all_pageSchool(),
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: 'ดึงข้อมูลสำเร็จ',
            result: req.result
        })
    }
)


module.exports = router