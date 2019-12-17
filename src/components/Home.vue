<template>
  <div class="home_container">
    <el-container>
        <!-- 左侧导航栏 -->
        <el-aside class="aside_box" width="200px">
          <div class="title_box">ddd</div>
        </el-aside>
      <el-container>
        <!-- header -->
        <el-header class="header_box">
          <el-button @click="logout" type="info">退出</el-button>
        </el-header>
        <!-- 右侧功能页面 -->
        <el-main class="main_box">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.home_container{
  width: 100%;
}
.main_box{
  background: yellow;
  height: calc(100vh - 100px);
}
.header_box{
  width: 100%;
  height: 60px !important;
  background: red;
}
.body_box{
  width: 100%;
  background:  green;
}
.aside_box{
  width: 200px;
  height: 100vh;
  background: orange;
  .title_box{
    width: 100%;
    height: 600px;
    background: red;
  }
}
</style>
