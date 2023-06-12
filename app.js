require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 3333

app.listen(port, function () {
    console.log('Server listening on', this.address().address + this.address().port)
})