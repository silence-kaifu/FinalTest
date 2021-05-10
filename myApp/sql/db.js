const mysql = require('mysql');

exports.base = (sql,data,callback) => {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root1234',
        database : 'kity'
    });

    connection.connect();

    connection.query(sql,data,function (error,result,fields) {
        if(error) throw error;
        callback(result);
        console.log("数据库连接成功！")
    });

    connection.end();
}
