require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const BankModel = require('./models/bank.models');


const app = express();


app.use(bodyparser.json());

const options = { useNewUrlParser: true, useUnifiedTopology: true}
// mongoose.conn

async function mongoConnect (){
  
   await mongoose.connect(      process.env.MONGODB_URL,      options,      () => console.log('connected to db')      )
   }
app.get("/",async (req, res) => {
  try {
    const banks = await BankModel.find();
    res.status(200).send(banks);
  } catch (error) {
    res.status(500).send({
      message: `error : ${error.message}`,
    });
  }
});


app.listen(process.env.PORT, () =>{
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${process.env.PORT}`),
  mongoConnect()
}
);