let db = require('../connect/dbConfig')

exports.get_company_pageCp = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM company where id = '1'`, (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}
exports.get_cp_award_pageCp = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM cp_award`, (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}