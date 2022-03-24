const express = require('express');

const router = express.Router();

const orderController = require('../controller/orders');

// search
router.get('/search', orderController.getSearch);       // หาข้อมูลทั้งหมดในตาราง

// insert
router.post('/insert', orderController.postAdd);        // เพิ่มข้อมูลในตาราง

// getUpdate
router.get('/update/:id', orderController.getUpdate);   // ดึงข้อมูลด้วยไอดี

// update
router.post('/update', orderController.postUpdate);     // แก้ไขข้อมูลในตาราง

// delete
router.get('/delete/:id', orderController.setDelete);   // ลบข้อมูลออกจากตาราง

exports.routes = router;