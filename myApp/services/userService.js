const db = require('./../sql/db');

// const api = require('./../../vueProject/src/global/api');
exports.register = (req,res,next) => {
    console.log("进入注册post路由");
    console.log(req.body);
    let account = req.body.username;
    let password = req.body.password;
    //let sql = 'SELECT * FROM tab_stu WHERE account=? and password=?';
    let sql = 'insert into tab_stu(name, account, password, power) values(?,?,?,0)';
    let data = [account,account,password];
    console.log(data);
    db.base(sql,data,(response)=>{
        if (response.length == 0) {
            console.log(1);
            res.json({
                status:'1',
                msg:'无此结果',
                result:''
            });
        }else {
            console.log(response[0]);
            res.json({
                status:'0',
                msg:'查询成功',
                result: response[0]
            });
        }
    })
}

exports.login = (req,res,next) => {
    console.log("进入post路由");
    console.log(req.body);
    let account = req.body.username;
    let password = req.body.password;
    let sql = 'SELECT * FROM tab_stu WHERE account=? and password=?';
    let data = [account,password];
    console.log(data);
    db.base(sql,data,(response)=>{
        if (response.length == 0) {
            res.json({
                status:'1',
                msg:'无此结果',
                result:''
            });
        }else {
            console.log(response[0]);
            res.json({
                status:'0',
                msg:'查询成功',
                result: response[0]
            });
        }
    })
}
