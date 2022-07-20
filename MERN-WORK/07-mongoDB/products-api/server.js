const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

require('./server/config/product.config');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );// need these 2 lines in order to use .post method
app.use(cors());

require('./server/routes/product.routes')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`) );