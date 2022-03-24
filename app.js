const express = require('express');

const app = express();
app.use(express.json());

const orders = require("./routes/orders");

// fix error CORS
app.use((req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/orders", orders.routes);

app.listen(8081, () => {
    console.log("app listenning at http://127.0.0.1:8081")
})