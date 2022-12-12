// Define the API for users

const express = require('express')
// create express router
const router = express.Router(); 


// data
let users = [
    {
        name: "User 1",
        age: 21
    },
    {
        name: "User 2",
        age: 27
    },
    {
        name: "User 3",
        age: 34
    },
    {
        name: "User 4",
        age: 45
    }
]

router.get('/', (req, res) => {
    res.json(users);
})

router.post('/', (req, res) => {
    users.push(req.body);
    res.json(users);
})

router.put('/:id', (req, res) => {
    users[req.params.id - 1] = req.body;
    res.json(users);
})

router.delete('/:id', (req, res) => {
    users.splice(req.params.id - 1, 1);
    res.json(users);
})


module.exports = router;