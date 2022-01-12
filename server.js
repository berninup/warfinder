const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const methodOverride = require('method-override');
const indexRouter = require('./controllers/indexRouter');
const factionRouter = require('./controllers/factionRouter')
const abilityRouter = require('./controllers/abilityRouter')
const deleteRouter = require('./controllers/deleteRouter')
const updateRouter = require('./controllers/updateRouter')
const newRouter = require('./controllers/newRouter')
const newAbilityRouter = require('./controllers/newAbilityRouter')
const showRouter = require('./controllers/showRouter')
const morgan = require('morgan');
const { application } = require('express');


app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));
app.use(express.static('public'))

app.use(indexRouter)
app.use(factionRouter)
app.use(abilityRouter)
app.use(deleteRouter)
app.use(updateRouter)
app.use(newRouter)
app.use(newAbilityRouter)
app.use(showRouter)

mongoose.connect(process.env.DATABASE_URL)

const PORT = process.env.PORT
app.listen(PORT, () => console.log('here'))