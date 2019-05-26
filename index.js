var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const version = '/api/v1'
var port = process.env.PORT || 3013
var logger = require('morgan')
var moment = require('moment')
var fs = require('fs')
var mm = moment()
var date = mm.utc().format('DD-MM-YYYY')
var time = mm.utc().format('HH: mm: ss')

app.use(bodyParser.urlencoded({
    extended: true,
    limit: "50mb"
}))
app.use(bodyParser.json({
    extended: true,
    limit: "50mb"
}))

app.use(logger('dev'))
var accessLogStream = fs.createWriteStream(`${__dirname}/logs/${date}.log`, {
    flags: 'a'
})
var configlog = `[${time}] [ip]: :remote-addr :remote-user [method]: :method [url]: :url HTTP/:http-version [status]: :status [response-time]: :response-time ms [client]: :user-agent`
app.use(logger(configlog, {
    stream: accessLogStream
}))
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization, X-Access-Token')
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Pass to next layer of middleware
    next()
});
// var insert = require('./routes/insert')
var index = require('./routes/page_index')
var cp = require('./routes/page_cp')
var dve = require('./routes/page_dve')
var vec = require('./routes/page_vec')
var school = require('./routes/page_school')
// app.use("/insert", insert)
app.use(version + '/index', index)
app.use(version + '/cp', cp)
app.use(version + '/dve', dve)
app.use(version + '/vec', vec)
app.use(version + '/school', school)

app.listen(port, () => {
    console.log("Server start on port : " + port);
})