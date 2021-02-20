const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

const key = require('./config/keys.js').MongoURI

require('./config/passport.js')(passport)

var path = require('path');

mongoose.connect(
    key,
    {
        useNewUrlParser: true ,
        useUnifiedTopology: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3300

app.use(expressLayouts)
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:false}))

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use('/',require('./routes/index'))
app.use('/users',require('./routes/user'))

app.listen(PORT,(error)=>{
    if(error)
        return console.log(error)
    console.log("Server up on "+ PORT)
})