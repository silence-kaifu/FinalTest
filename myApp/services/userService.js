const db = require('./../sql/db');
const api = require('./../../vueProject/src/global/api');
exports.login = (req,res,next) => {
    let loginForm = api.api.login;
    console.log(loginForm);
    let sql = 'SELECT * FROM tab_stu WHERE name=? and password=?';
    let data = [loginForm.username,loginForm.password];
    db.base(sql,data,(response)=>{
        if (response.length == 0) {
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
        }
    })
}