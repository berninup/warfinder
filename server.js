const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const methodOverride = require('method-override');
const indexRouter = require('./controllers/indexRouter');
const factionRouter = require('./controllers/factionRouter')
const abilityRouter = require('./controllers/abilityRouter')
const newRouter = require('./controllers/newRouter')
const morgan = require('morgan')


app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'))

app.use(indexRouter)
app.use(factionRouter)
app.use(abilityRouter)
app.use(newRouter)

mongoose.connect(process.env.DATABASE_URL)

const PORT = process.env.PORT
app.listen(PORT, () => console.log('here'))