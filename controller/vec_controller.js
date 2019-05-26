let db = require('../connect/dbConfig')

exports.get_company_pageVec = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM company where id = '2'`,
            (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}
exports.get_vec_pageVec = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM vec`,
            (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}

