let db = require('../connect/dbConfig')

exports.get_schoolcontact_pageSchool = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM schoolcontact where id = '1'`,
            (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}
exports.get_schoolcontact_all_pageSchool = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM schoolcontact`,
            (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}

