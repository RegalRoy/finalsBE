const express = require('express');
const cors = require('cors')
const port = 3000;
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json())

//set up db
const uri = 'mongodb+srv://cruzroyregal:Today.123@cluster0.5a7kwjj.mongodb.net/DB1'
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true   });
mongoose.connection.once('open', ()=>{console.log('connected to mongoose')})

//route
const bookRouter = require('./routes/books')

app.use('/books', bookRouter);

app.listen(port, ()=>{console.log('server running')})