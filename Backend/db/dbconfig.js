const mysqul2 = require('mysql2');
const dbconnection = mysqul2.createPool({
    user:"evangadi_admin",
    database:"evangadi-db",
    host:"localhost",
    password:"123456",
    connectionLimit:10
})



// dbconnection.execute("select 'test'", (err,result)=>{
//     if(err){
// console.log(err.message);
//     }else

//  console.log(result);

// })

module.exports = dbconnection.promise()