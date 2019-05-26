let db = require('../connect/dbConfig')

exports.get_about_pageIndex = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM home`, (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}
exports.get_advantage_pageIndex = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM advantage`, (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}
exports.get_gallery_pageIndex = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM gallery`, (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}
exports.get_company_pageIndex = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM company`, (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}
exports.get_course_pageIndex = () => {
    return (req, res, next) => {
        let data = []
        let data2 = []
        let obj = []
        let par = null
        db.query(
            `SELECT * FROM course`, (err, result) => {
                if (err) throw err
                result.map((e) => {
                    data.push({ describe: e.describe })
                    data2.push({
                        title: e.title,
                        detail: e.detail
                    })
                })
                obj.push({ data: data, data2: data2 })
                req.result = obj
                next()
            }
        )
    }
}
exports.get_quality_pageIndex = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM quality`, (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}
exports.get_callus_pageIndex = () => {
    return (req, res, next) => {
        db.query(
            `SELECT * FROM callus`, (err, result) => {
                if (err) throw err
                req.result = result
                next()
            }
        )
    }
}

