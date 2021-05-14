// 数据库连接配置
module.exports = {
    mysql: {
        host: 'localhost',
        user: 'root', // 数据库账号
        password: 'root1234', // 数据库密码
        database: 'qmks', // 数据库名称
        port: '3306' // 端口
    }
}


// exports.base = (sql,data,callback) => {
//     var connection = mysql.createConnection({
//         host : 'localhost',
//         user : 'root',
//         password : 'root1234',
//         database : 'qmks'
//     });
//
//     connection.connect();
//     connection.query(sql,data,function (error,result,fields) {
//         if(error)
//             throw error
//         callback(result);
//         console.log("数据库连接成功！")
//     });
//
//     connection.end();
// }
