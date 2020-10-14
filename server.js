const express = require('express');
const StockXAPI = require('stockx-api');
const BodyParser = require('body-parser');
require('./data/autoBid-db');
require('dotenv').config();

app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extend: true }));

cors = require('cors');
app.use(cors());

const stockX = new StockXAPI();


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
app.listen(port, () => console.log("Backend server listening on port:" + port));