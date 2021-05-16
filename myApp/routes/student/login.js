const express = require('express');
const router = express.Router();
const mysql = require('mysql')
const db = require('../../sql/db')
const $sql = require('../../sql/sqlMap')

const connection = mysql.createConnection(db.mysql)
connection.connect()
// 登录验证语句
const sql = $sql.user.consfirm

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
