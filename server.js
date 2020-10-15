const express = require('express');
const StockXAPI = require('stockx-api');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');
const jwt = require('jsonwebtoken');


require('dotenv').config();

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(expressValidator());

cors = require('cors');
app.use(cors());

const stockX = new StockXAPI();

// db
require('./data/autoBid-db');

// Controllers
require('./controllers/auth.js')(app);


app.get("/", async (req, res) => {
    try {
        console.log('Logging in...');

        await stockX.login({
            user: 'dkudrat@gmail.com',
            password: 'Uyghur@1424'
        });

        console.log('Successfully logged in!');

        const productList = await stockX.newSearchProducts('jordan 11');
        console.log(productList[0]);

        // const product = await stockX.fetchProductDetails('https://stockx.com/adidas-yeezy-boost-700-magnet');
        // console.log('product', product)
        // res.send({ product: product });
    }
    catch(err) {
        console.log('Error: ', err);
    }
});



port = process.env.PORT;
app.listen(port, () => {
    console.log(`Backend server listening on localhost:${port}`);
});

module.exports = app;