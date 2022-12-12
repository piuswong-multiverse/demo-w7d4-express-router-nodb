// Define the API for users

const express = require('express')
// create express router
const router = express.Router(); 

router.get('/', (req, res) => {
    res.send("GET request heard from users router!");
})


module.exports = router;