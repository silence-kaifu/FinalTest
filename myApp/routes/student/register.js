var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../../sql/db');
var $sql = require('../../sql/sqlMap');

var connection = mysql.createConnection(db.mysql);
connection.connect();
var sql = $sql.user.register;

router.post('/',(req, res, next) => {
    var account = req.body.username;
    var password = req.body.password;
    connection.query(sql,[account,account,password,0], (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        //通过insertID判断是否重复注册
        if(result.insertId) {
            res.json({
                status: '0',
                msg: '新用户注册成功',
                result: result
            });
        }
        else {
            res.json({
                status: '1',
                msg: '此用户注册过',
                result: result
            });
        }
    })
});

module.exports = router;
