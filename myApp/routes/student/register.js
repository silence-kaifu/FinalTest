const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../../sql/db');
const $sql = require('../../sql/sqlMap');

const connection = mysql.createConnection(db.mysql);
connection.connect();
const sql = $sql.user.register;

router.post('/', (req, res, next) => {
    let account = req.body.username;
    let password = req.body.password;
    connection.query(sql, [account, account, password, 0], (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        //通过insertID判断是否重复注册
        if (result.insertId) {
            res.json({
                status: '0',
                msg: '新用户注册成功',
                result: result
            });
        } else {
            res.json({
                status: '1',
                msg: '此用户注册过',
                result: result
            });
        }
    })
});

module.exports = router;
