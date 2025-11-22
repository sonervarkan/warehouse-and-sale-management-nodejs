const mysql2=require("mysql2");
const app=require("../app");


const conn=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"your password",
    database:"your database"
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("Database connected...");
});


module.exports=conn;
