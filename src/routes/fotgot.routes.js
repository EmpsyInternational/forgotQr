const { FORGOT } = require('../global/_var')

/******** DEPENDENCY  *******/

const express = require('express');
const route = express.Router()

/******** CONTROLLER *******/

const getInfoController = require('../controllers/getInfo.Controller.js')

/******** ROUTER *********/

route.post(FORGOT, getInfoController.forgot)


module.exports= route