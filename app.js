require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 3333

app.get('/', async(req, res) => {
    res.status(200).send('Bem vindo!')
})

app.listen(port, function () {
    console.log('Server listening on port', this.address().port)
})