<template>
  <div id="login-wrapper">
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div class="login-box">
      <h2>区块链学院学分系统</h2>
      <form :model="ruleForm" :rules="rules" ref="ruleFormsss">
        <div class="user-box">
          <input
            autocomplete="new-password"
            type="text"
            name=""
            v-model="ruleForm.username"
            required=""
            key="username-v3"
          />
          <label>账号</label>
        </div>
        <div class="user-box">
          <input
            autocomplete="new-password"
            type="password"
            name=""
            v-model="ruleForm.password"
            required=""
            key="password-v3"
          />
          <label>密码</label>
        </div>
        <a href="#" style="left:200px;" @click="submitForm">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          登录
        </a>
        <a href="#" style="left:200px;" @click="register">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          注册
        </a>
      </form>
    </div>
  </div>
  <div>

  </div>
</template>
<script lang="ts">
import router from '@/router/index';
import { ElMessage } from 'element-plus';
import {api} from '../../global/api';
//import {useRouter} from 'vue-router';
import qs from 'qs';
import {computed,ref,defineComponent, getCurrentInstance, onMounted, reactive, toRefs,unref} from "vue";
import { Store } from "vuex";
import store from "@/store/index";
export default {
  setup(props:any) {
    const ruleFormsss = ref(null);
    const {ctx}:any =getCurrentInstance();
   // const router=useRouter();
    // 定义变量
    const ruleForm = reactive({
      username: '',
      password: ''
    })

    const rules = {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
      ]
    }
    const post=()=>{ ctx.$axios.post(api.login, qs.stringify(ruleForm)) // 网络请求
        .then((result:any) => {
          //前后端连接成功
          console.log("前后端连接成功")
          //打印返回结果
          console.log("打印返回结果")
          console.log(result)
          //打印返回结果状态，有没有正确匹配到用户

          console.log(result.data.status)
          //打印返回用户的类型
          console.log(result.data.result.power)
          const msg = result.data.msg;
          //打印返回结果状态，
           if(result.data.status == 1) {
             ElMessage.error(msg);
           }
          else{
             console.log(msg)
            ElMessage.success({
              message:msg,type:'success'});
            window.location.href="http://localhost:8080";
          }






        }).catch(() => {
          //console.log(qs.stringify(ruleForm))
          //window.location.href="http://localhost:8080/home";
          console.log("no")
          const msg = "登录失败！请稍后尝试！";
          ElMessage.error(msg);
          })}



    const submitForm = async () => {
      const form = unref(ruleFormsss);
      if (!form) return
      try {
        // await form.validate(undefined)
        //执行post
        post();
        //数据打印
        console.log(ruleForm)
        //
       console.log("submit")
        const { username, password, } = ruleForm;
        console.log(username, password)


      } catch (error) {
      }
    }

    const register=()=>{
      window.location.href = '/register';
    }
    return {
      post,
      ruleForm,
      rules,
      submitForm,
      ruleFormsss,
      register
    }
  }


}
</script>
<style scoped>
#login-wrapper {
  /* background: linear-gradient(#141e30, #243b55); */
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100%;
  overflow: hidden;
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
