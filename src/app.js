const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const mongoose = require('mongoose')
const Concept = require('../models/Concept')

const key = require('../config/keys.js').MongoURI
const dirViews = path.join(__dirname,'../template/views')
const dirPublic = path.join(__dirname,'../public')

mongoose.connect(
    key,
    {
        useNewUrlParser: true ,
        useUnifiedTopology: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.set('views', dirViews)
app.set('view engine', 'hbs')
app.use(express.static(dirPublic))

app.get('/add',(req,res)=>{
    res.render('add.hbs')
})

app.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})

app.get('/view',(req,res)=>{
    res.render('view')
})

app.get('/login',(req,res)=>{
    res.render('main')
})

app.post('/addnote',(req,res)=>{
    const {Title,InstituteName, CourseName, content, examples} = req.query
    console.log(req.query)
    const newConcept = new Concept({
        Title,
        InstituteName, 
        CourseName, 
        content, 
        examples})
        newConcept.save()
        .then( concept =>{
            console.log("Created")
        })
        .catch(err=>console.log(err))
})


app.listen(3000,(error)=>{
    if(error)
        console.log(error)
    else
        console.log('Server is up on port 3000')
})