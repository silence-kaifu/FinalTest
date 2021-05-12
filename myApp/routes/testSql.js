var db = require('./../sql/db');
const res = require("express");
let sql = 'SELECT * FROM tab_stu WHERE account=? and password=?';
let data = [44120,123456];
console.log(data);
db.base(sql,data,(response)=>{
    if (1) {
        res.json({
            status:'1',
            msg:'无此结果',
            result:''
        });
    }else {
        res.json({
            status:'0',
            msg:'查询成功',
            result: response[0]
        });
        console.log(response[0]);
    }
})
