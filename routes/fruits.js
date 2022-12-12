const express = require('express');
const router = express.Router();  

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    }
];

// set up CRUD API endpoints for fruit

router.get('/', (req,res) => {
    res.json(fruits);
})
router.post('/', (req,res) => {
    fruits.push(req.body);
    res.json(fruits);
})
router.put('/:id', (req,res) => {
    fruits[req.params.id-1] = req.body;
    res.json(fruits);
})
router.delete('/:id', (req,res) => {
    fruits.splice(req.body.id-1,1);
    res.json(fruits);
})

module.exports = router;