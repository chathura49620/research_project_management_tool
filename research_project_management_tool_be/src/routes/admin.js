/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const userController = require('../controller/admin/users');

const router = express.Router();

router.get('/get-room', userController.getRoom);

router.post('/add-user', userController.postAddUser);

module.exports = router;
