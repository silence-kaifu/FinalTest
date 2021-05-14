var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var db = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(db.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.user.consfirm

router.post('/', function (req, res, next) {
    var account = req.body.username;
    var password = req.body.password
    connection.query(sql, [account, password], (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        if (result.length) {
            res.json({
                status: '0',
                msg: '用户名密码正确可以登录',
                result: result
            });
            console.log(result);
        } else {
            res.json({
                status: '1',
                msg: '用户名或密码错误',
                result: ''
            });
        }
    })
});

module.exports = router;
