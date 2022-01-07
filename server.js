const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const methodOverride = require('method-override');
const indexRouter = require('./controllers');
const morgan = require('morgan')


app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'))

app.use(indexRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log('here'))