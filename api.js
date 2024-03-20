
const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const uri = 'mongodb+srv://duylh17:GsF3hosYpAQxZAHl@cluster0.0n8qgpd.mongodb.net/md18305';

const svModel = require('./studentModel');

router.get('/', async (req, res) => {
    await mongoose.connect(uri);

    let sinhviens = await svModel.find();

    console.log(sinhviens);

    res.send(sinhviens);

    
})


module.exports = router;


