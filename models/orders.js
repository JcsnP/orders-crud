const db = require('../util/database');

module.exports = class Orders {
    constructor(orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber) {
        this.orderNumber = orderNumber;
        this.orderDate = orderDate;
        this.requiredDate = requiredDate;
        this.shippedDate = shippedDate;
        this.status = status;
        this.comments = comments;
        this.customerNumber = customerNumber;
    }

    // search
    static fetchAll() {
        return db.execute('SELECT * FROM orders');
    }

    // insert
    insert() {
        console.log(this);
        return db.execute(
            'INSERT INTO `orders`(`orderNumber`, `orderDate`, `requiredDate`, `shippedDate`, `status`, `comments`, `customerNumber`) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [this.orderNumber, this.orderDate, this.requiredDate, this.shippedDate, this.status, this.comments, this.customerNumber]
        );
    }

    // getUpdate
    static findById(id) {
        console.log(this);
        return db.execute('SELECT * FROM orders WHERE orders.orderNumber = ?', [id]);
    }

    // update
    update() {
        console.log(this);
        return db.execute(
            'UPDATE `orders` SET `orderDate`=?,`requiredDate`=?,`shippedDate`=?,`status`=?,`comments`=?,`customerNumber`=? WHERE orderNumber=?',
            [this.orderDate, this.requiredDate, this.shippedDate, this.status, this.comments, this.customerNumber, this.orderNumber]
        );
    }

    // delete
    static deleteById(id) {
        return db.execute('DELETE FROM orders WHERE orders.orderNumber = ?', [id]);
    }
};