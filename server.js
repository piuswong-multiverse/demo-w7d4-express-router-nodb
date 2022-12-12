// Server for API to handle getting User data
const express = require('express');
const usersRouter = require('./routes/users');

const app = express();

// set up endpoints
// use router as middleware
app.use('/users', usersRouter);


const port = 3000;
app.listen(port, () => {
    console.log(`Server live at http://localhost:${port}`)
})

