const express = require("express"); // here you import express

const app = express();// here you initialize the application 
const port = 8000;

require("./server/config/mongoose.config");//here you're letting your server know about your DB

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );// need these 2 lines in order to use .post method

require('./server/routes/jokes.routes')(app);// here you're letting your server know about your routes 


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );