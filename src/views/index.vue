<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img src="../../static/logo.png" width="90px" height="70px">
          <img src="../../static/title.png" width="200px" height="70px">
          <div class="login-icon"> 
            <img src="../../static/tubiao.png" class="el-icon-cherry" @click="getlogin()">
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="black" text-color="white" active-text-color="white">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">喵星日报</el-menu-item>
              <el-menu-item index="3">勇喵事迹</el-menu-item>
              <el-menu-item index="4">喵星竞赛</el-menu-item>
              <el-menu-item index="5">技能选题</el-menu-item>
              <el-menu-item index="6">攻占星球选择</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getlogin() {
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang='less'>
  // .el-menu-demo{
  //   background-color:black;
  //   text-color: white;
  //   active-text-color: white;
  // }
  .el-menu-item{
    font-size: 20px;
    padding: 0 50px;
  }
  .el-menu-demo{
    display: flex;
    justify-content: center;
    padding: 0 40px;
    &:last-child{
      font-size: 20px;
      height: 60px;
      line-height: 20px;
      padding: 0 20px;
    }
  }
  // .el-menu-demo{
  //   height: 40px;
  //   line-height: 40px;
  //   padding: 0 20px;
  // }
  .login-icon{
    float: right;
    width: 190px;
  }
  .el-icon-cherry{
    height: 70px;
    width: 70px;
    // width: 100%;
    // font-size: 50px;
    // text-align: center;
  }
  // .title-icon{
  //   width: 100%;
  //   font-size: 12px;
  // }
  .el-row {
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #ffffff;
    padding: 5px;
    margin: 5px;
    position: relative;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>