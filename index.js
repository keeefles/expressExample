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
// express.Router() is the middleware
// app.get() is for the whole application
// for more specificity, make use of router.get()
// to specify what you're using, make use of app.use()
const app = express()
const router = express.Router()
app.use(router)
const port = ++process.env.PORT || 4000

// routers: express
router.get('^/$|/express', display, (req, res) =>{
    res.json({
        status: res.statusCode,
        msg: "You're home"
    })
})
app.get('/', (req, res) =>{
// redirects to the home page.
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

/*
middleware is the software that lies between the OS and the applications. it facilitates communication and data exchange between the OS and the applications.

1. request parsing and validation: 
helps in understanding and checking imcoming requests. It makes sure the data follows the set of rules and that it's in the right shape to be used by the application.

2. authentication and authorization: 
It does this by checking if they have the proper permissions or credentials. This keeps sensitive information safe from unauthorized access.

3. rate limiting and throtttling: 
It keeps an eye on how many requests are coming in and slows them down if there are too many. This ensures that the API runs smoothly for everyone and protects it from being overloaded or attacked.

4. logging and monitoring: 
records details about requests and responses, like when they happened and what they contained. This information helps keep track of how the API is used, find and fix problems, and make sure everything is secure and follows the rules.

5. caching: 
saves often-requested data so it can be quickly provided to users without having to fetch it from the main system each time. This speeds up the API and makes it more efficient.

6. response formattting and transformation: 
adjusts API responses to meet certain standards or change them into different formats like JSON or XML. This makes sure the API always provides data in a consistent way that's easy for clients to understand and use.

7. error handling and exception management: 
catches and deals with errors that happen while requests are being processed. It sends back clear and consistent messages to clients, letting them know what went wrong. This helps maintain a smooth experience for users even when things don't go as planned.

*/

function display(req, res, next) {
    console.log("Hello there!");
    next()
}

/*
- router middleware
- static file
- class
- MVC (Model View Controller)
*/