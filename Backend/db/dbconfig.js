const mysqul2 = require('mysql2');
const dbconnection = mysqul2.createPool({
    user:process.env.USER,
    database:process.env.DATABASE,
    host:"localhost",
    password:process.env.PASSWORD,
    connectionLimit:10
})



module.exports = dbconnection.promise()