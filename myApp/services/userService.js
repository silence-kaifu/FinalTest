const db = require('./../sql/db');

// const api = require('./../../vueProject/src/global/api');
exports.login = (req,res,next) => {
    console.log("进入post路由");
    console.log(req.body);
    let account = req.body.username;
    let password = req.body.password;
    console.log(req.proxy);
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
