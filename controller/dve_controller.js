let db = require('../connect/dbConfig')

exports.get_company_pageDve = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM company where id = '3'`,
            (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}
exports.get_dve_pageDve = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM dve`,
            (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}

