const express = require('express');
const port = 3000;
const app = express();

const mongoose = require('mongoose');

const RES = require('./COMMON_RES');
const uri = RES.uri;

const svModel = require('./studentModel');

const apiMobile = require('./api');
app.use('/api', apiMobile);

app.get('/', async (req, res) => {
    await mongoose.connect(uri);

    let sinhviens = await svModel.find();

    console.log(sinhviens);

    res.send(sinhviens);
})

app.get('/add_sv', async (req, res) => {
    await mongoose.connect(uri);
  
    arrNewSv = [];
  
    arrNewSv.push({
      name: 'Tran Phuong Anh',
      tuoi: 24,
      mssv: 'PH14523',
      daRaTruong: false
    });
    
    let kq = await svModel.insertMany(arrNewSv);
  
    console.log(kq);
  
    let sinhviens = await svModel.find();
  
    res.send(sinhviens);
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

module.exports = app;


