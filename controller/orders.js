const Orders = require('../models/orders');

// search
exports.getSearch = (req, res, next) => {

    Orders.fetchAll().then(([orders, field]) => {
        console.log("Get all orders");
        res.json({
            data: orders,
            result: true
        })
    }).catch((err) => {
        res.json({
            data: err,
            result: false
        })
    });
}

// insert
exports.postAdd = (req, res, next) => {
    console.log(req.body);
    const { orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber } = req.body;
  
    const order = new Orders(orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber);
    order.insert()
        .then(() => {
            console.log('Created Order');
            res.status(200).json({
                result: true,
                message: "success"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(200).json({
                result: false,
                message: err
            });
        });
};

// getUpdate
exports.getUpdate = (req, res, next) => {
    console.log(req.params);
    const { id } = req.params;

    Orders.findById(id)
        .then(([orders, fieldData]) => {
            console.log('Get order');
            res.status(200).json({
                response: {
                    data: orders[0],
                    result: true
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(200).json({
                response: {
                    result: false,
                    message: err
                }
            });
        });
};

// update
exports.postUpdate = (req, res, next) => {
    console.log(req.body);
    const { orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber } = req.body;

    const order = new Orders(orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber);
    order.update()
        .then(() => {
            console.log('Update order');
            res.status(200).json({
                result: true,
                message: "success"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(200).json({
                result: false,
                message: err
            });
        });
};

// delete
exports.setDelete = (req, res, next) => {
    console.log(req.params);
    const { id } = req.params;

    Orders.deleteById(id)
        .then(() => {
            console.log('Delete order');
            res.status(200).json({
                result: true,
                message: "success"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(200).json({
                result: false,
                message: err
            });
        });
};