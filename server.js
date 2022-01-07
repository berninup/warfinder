const express = require('express');
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override')


app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'))



const PORT = process.env.PORT
app.listen(PORT, () => console.log('here'))