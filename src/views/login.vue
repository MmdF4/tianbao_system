<template>
  <div>
    <div class="backgroud">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="front">
      <div class="xuanze" style="text-align:center">
        <el-radio-group v-model="labelPosition" size="big">
          <el-radio-button label="l1">我是学生</el-radio-button>  
          <el-radio-button label="l2">我是院校</el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin: 20px;"></div>
      <div v-if="labelPosition == 'l1'">
        <el-form label-width="80px" :model="formLabelAlign">
          <el-form-item label="学号:">
            <el-input placeholder="请输入学号" v-model="formLabelAlign.num"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input type="password" placeholder="请输入密码" v-model="formLabelAlign.spassword"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align:center">
          <el-button @click="getindex()" type="primary" :loading="false">登录</el-button>
        </div>
      </div>
      <div v-if="labelPosition == 'l2'">
        <el-form label-width="80px" :model="formLabelAlign">
          <el-form-item label="管理账号:">
            <el-input placeholder="请输入管理账号" v-model="formLabelAlign.adminnum"></el-input>
          </el-form-item>
          <el-form-item label="管理密码:">
            <el-input placeholder="请输入管理密码" type="password" v-model="formLabelAlign.password"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align:center">
          <el-button @click="getindex()" type="primary" :loading="false">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        imgSrc: require('../assets/log3.jpg'),
        labelPosition: '',
        formLabelAlign: {
          num: '',
          spassword: '',
          adminnum: '',
          password: ''
        }
          // sShow:false,
          // cShow:true
      };
    },
    methods: {
      // sChange(){
      //   this.sShow = true,
      //   this.cShow = false
      // },
      // cChange(){
      //   this.cShow = true,
      //   this.sShow = false
      // }
      getindex(){
        this.$router.push('/')
      }
    }
}
</script>

<style>
  .backgroud{
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
  }
  .front{
    z-index: 1;
    position: absolute;
    border: 1px solid black;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 40px;
    left: 180px;
    top: 560px;
    background-color:rgba(209, 208, 208, 0.4)
  }
</style>