const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@foryou-media.llkkvee.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('Database is succesfully reached');
})
.catch((err)=>{
    console.log(err);
});