let db = require('../connect/dbConfig')

exports.addAdmin = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addAdvantage = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO advantage(id,detail )
            VALUES(null,'${obj_value.detail}')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addAward = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO cp_award(id,title, detail) 
            VALUES(null,'${obj_value.title}','${obj_value.detail}')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addCallus = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO callus(id,name,position,phone) 
            VALUES(null,'${obj_value.name}','${obj_value.position}','${obj_value.phone}')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addCompany = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO company(id,name,fullname,detail,logo,image,vision,philo) 
            VALUES(null,'${obj_value.name}','${obj_value.fullname}','${obj_value.detail}','${obj_value.logo}','${obj_value.image}','${obj_value.vision}','${obj_value.philo}')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addCompanyDVE = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addcourse = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addDVE = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addHome = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addimg2 = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addimg3 = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addProfile = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addQulity = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addschool = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addVEC = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
exports.addVEC2 = () => {
    return (req, res, next) => {
        const obj_value = req.body
        db.query(
            `INSERT INTO admin(id,name, personalid,empcode,status) 
            VALUES(null,'${obj_value.name}','${obj_value.personalid}','${obj_value.empcode}','supperAdmin')`,
            (err, result) => {
                if (err) throw err
                next();
            }
        )
    }
}
