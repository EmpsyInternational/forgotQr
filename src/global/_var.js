require('dotenv').config()

/********* SERVER ********/

const PORT   =   process.env.PORT

/********* DATABASE *********/

const PG_USER = process.env._USER
const PG_NAME = process.env._NAME
const PG_PASS = process.env._PASS
const PG_HOST = process.env._HOST

/*********** KEY **********/

const KEY  =   process.env.KEY


/************ ROUTES *********/

const FORGOT  = process.env.FORGOT

module.exports = {
    //server
    PORT,
    //database
    PG_USER,
    PG_NAME,
    PG_PASS,
    PG_HOST,
    //key
    KEY,
    //routes
    FORGOT,
}