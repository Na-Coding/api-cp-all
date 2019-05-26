var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.PORT || 7777
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

// var insert = require('./routes/insert')
var index = require('./routes/page_index')
var cp = require('./routes/page_cp')
var dve = require('./routes/page_dve')
var vec = require('./routes/page_vec')
var school = require('./routes/page_school')


// app.use("/insert", insert)
app.use('/index', index)
app.use('/cp', cp)
app.use('/dve', dve)
app.use('/vec', vec)
app.use('/school', school)





app.listen(port, () => {
    console.log("Server start on port : " + port);
})