<template>
  <div class="home_container">
    <el-container>
        <!-- 左侧导航栏 -->
        <el-aside class="aside_box"  :style="widthStyle">
          <div class="title_box">
            <img src="../assets/logo.png" alt=""/>
            <div class="title_content">后台管理</div>
          </div>
            <!-- 菜单 -->
            <div>
            <el-menu
              unique-opened=ture
              :collapse="isCollapse"
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#001529"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu :index="index" v-for="(item, index) in homeMenu" :key="index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item :index="index + '-' + index1" v-for="(item1, index1) in item.children" :key="index1">{{ item1.name }}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </el-aside>
      <el-container>
        <!-- header -->
        <el-header class="header_box">
          <el-row :gutter="24">
            <el-col :span="6">
              <div class="grid-content">
                <i :class="iconFont" @click="menuSwitch"></i>
              </div>
            </el-col>
            <el-col :span="18"><div class="grid-content">
              <el-dropdown @command="handleCommand" class="dropdown_box">
                <span class="el-dropdown-link">
                  <img  src="../assets/logo.png" alt="头像">
                  {{userInfo.username? userInfo.username : "lzh"}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-setting" command="a">账号设置</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-refresh-left" command="b">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div></el-col>
          </el-row>
        </el-header>
        <!-- 右侧功能页面 -->
        <el-main class="main_box">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import homeMenu from '../router/menu'
export default {
  data () {
    return {
      isCollapse: false,
      iconFont: 'el-icon-s-fold',
      widthStyle: {
        width: '200px'
      },
      userInfo: {},
      homeMenu: homeMenu
    }
  },
  beforeCreate: function () {
    console.log(this)
    const userInfo1 = window.sessionStorage.getItem('token')
    // this.$message(userInfo1)
    this.userInfo = JSON.parse(userInfo1)
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    menuSwitch () {
      if (this.isCollapse) {
        this.iconFont = 'el-icon-s-unfold'
        this.isCollapse = false
        this.widthStyle = {
          width: '200px'
        }
      } else {
        this.iconFont = 'el-icon-s-fold'
        this.isCollapse = true
        this.widthStyle = {
          width: '64px'
        }
      }
    },
    handleCommand (command) {
      if (command === 'b') {
        this.logout()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home_container{
  width: 100%;
}
.main_box{
  height: calc(100vh - 100px);
}
.header_box{
  padding: 0;
  width: 100%;
  height: 60px !important;
  background: white;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
  overflow: hidden;
  .grid-content {
    padding: 0;
    margin: 0;
    height: 60px;
    i {
      font-size: 26px;
      line-height: 60px;
      margin-left: 10px;
    }
  }
  .dropdown_box{
    width: 150px;
    height: 100%;
    float: right;
    padding-right: 20px;
    text-align:  right;
    .el-dropdown-link {
      cursor: pointer;
      color:  black;
      font-size: 20px;
      display: flex;
      align-items: center;
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 5px;
        border: 1px solid  gray;
        box-sizing: border-box;
        background: black;
      }
      i{
        font-size: 16px;
      }
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}
.body_box{
  width: 100%;
  background:  green;
}
.aside_box{
  height: 100vh;
  background: #001529;
  .title_box{
    width: 100%;
    height: 60px;
    line-height: 60px;
    overflow: hidden;
    background: #002140;
    img{
      width: 50px;
      height: 50px;
      margin-top: 5px;
      margin-left: 7px;
      overflow: hidden;
    }
    .title_content{
      width: 136px;
      height: 60px;
      float: right;
      line-height: 60px;
      text-align: left;
      font-size: 20px;
      font-weight: 700;
      color: white;
    }

  }
  // 导航菜单栏
  .el-menu-vertical-demo{
    box-sizing: content-box;
    border: none;
  }
}
</style>
