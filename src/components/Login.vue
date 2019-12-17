<template>
    <div class="login_container">
        <div class="login_box">
            <div class="img_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!-- 登录表单区 -->
            <el-form ref="loginFormRef" status-icon class="from_box" :model="loginForm" :rules="loginFormRules">
                <!-- 用户名 -->
                <el-form-item  prop="username">
                    <el-input prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
                </el-form-item>
                <!-- 密码 -->
                 <el-form-item prop="password">
                    <el-input type="password" prefix-icon="el-icon-lock" v-model="loginForm.password"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                 <el-form-item class="button_box">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="danger" @click="restLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 11, message: '长度为3到9个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 3, max: 11, message: '长度为3到9个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //   重置表单
    restLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    // 登录
    login () {
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) {
          this.$message.error('登录失败！')
          return
        }
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token', this.loginForm)
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login_container{
    background: #2b4b6b;
    height: 100%;
}
.login_box{
    width: 400px;
    height: 300px;
    background: white;
   position: absolute;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   margin: auto;
}
.img_box{
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    box-shadow: 0 0 10px #ddd;
    border-radius: 50%;
    position: absolute;
    padding: 10px;
    left: 50%;
    transform: translate(-50%,-50%);
    background: white;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: white;
    }
}
.from_box{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0  20px;
    box-sizing: border-box;
}
.button_box{
    text-align: center;
}
</style>
