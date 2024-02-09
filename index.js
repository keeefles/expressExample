import express from 'express'
// const express = require('express')

/* HTTP Methods: 
get: retrieve data
post: submitting the data
put: puts in a new request to change the data?
patch: is faster than put
delete:
*/

// create an express app then set up a router.
const app = express()
const port = ++process.env.PORT || 4000

// routers
app.get('/', (req, res) =>{
    res.json({
        status: res.statusCode,
        msg: "You're home"
    })
})
app.get('/', (req, res) =>{
    res.json({
        status: res.statusCode,
        msg: "About Page"
    })
})
app.all('*', (req, res) =>{
    res.json({
        status: 404,
        msg: "Error 404"
    })
})

app.listen(port)

// middleware