const express = require('express');
const bodyParser = require('body-parser');
 
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.get('/ping',(req,res)=>{
    return res.json({message:`Admin service is alive`})
})
app.use('/api', apiRouter);

// last middleware to handle errors
app.use(errorHandler)

app.listen(PORT,async ()=>{
    console.log(`Server is listening on port ${PORT}`);
    await connectToDB();
    console.log('Connected to the database');
})