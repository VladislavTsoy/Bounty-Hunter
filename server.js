const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 7000
const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

app.use('/bounty', require('./routes/bountyRoutes'))

mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASS}@ds119853.mlab.com:19853/bounty-hunter`, {useNewUrlParser: true})
    .then(() => console.log('Successfully connected to MongoDB server'))
    .catch(err => console.log(err))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Web Server Live: port ${PORT}`)
}) 