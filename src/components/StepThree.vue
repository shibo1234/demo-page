<script>
import {ref} from 'vue'
import { ElMessage } from 'element-plus'
export default {

  setup(props,{emit}) {
    const firstName = ref('');
    const lastName = ref('')
    const goBack = ()=>{
      emit('changeCurrent',{current:2,progress:40})
    }
    const goNext = ()=>{
      if(!firstName.value || !lastName.value){
        return ElMessage({
                  message: 'Please enter your firstName and lastName',
                  type: 'warning',
                })
      }
      emit('changeCurrent',{current:4,progress:80})
    }
    return {
      firstName,
      lastName,
      goBack,
      goNext
    }
  }

}
</script>

<template>
  <div class="step-three">
    <el-card class="box-card">
      <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
      <div class="content">
        <div class="title">What's your name?</div>
        <div class="desc">
          Please enter your full name as it appears on your Driver`s License or Passport.
        </div>
        <div class="input">
          <el-input class="first-name" v-model="firstName" placeholder="First Name" />
          <el-input v-model="lastName" placeholder="Last Name" />
        </div>
        <div class="btn"><el-button @click="goNext" type="primary" round > &nbsp; &nbsp; &nbsp;Press enter &nbsp; &nbsp; &nbsp;<el-icon ><Right /></el-icon></el-button></div>
      </div>
  </el-card>
  </div>
</template>

<style  lang="less">
  .step-three{
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .box-card{
      width: 50%;
      .el-card__body{
        display: flex;
        align-items: center;
        justify-content: center;
        .arrow{
          width: 50px;
          .back{
            font-size: 30px;
            font-weight: 600;
            cursor: pointer;
          }
        }
      }
      .title{
        font-size: 40px;
        font-weight: 700;
        text-align: center;
      }
      .desc{
        font-size: 16px;
        color: #666;
        margin-bottom: 30px;
      }
      .input{
        display: flex;
        .first-name{
          margin-right: 10px;
        }
      }
      .btn{
        padding-top: 30px;
        text-align: center;
      }
    }
  }
</style>