<script>
import {ref} from 'vue';
import { ElMessage } from 'element-plus'
export default {
  setup(props,{emit}) {
    const entityLegalName = ref('');
    const goBack = ()=>{
      emit('changeCurrent',{current:4,progress:80})
    }
    const goNext = ()=>{
      if(!entityLegalName.value){
        return ElMessage({
                  message: 'Please enter your entity name',
                  type: 'warning',
                })
      }
      console.log(entityLegalName.value)
    }
    return {
      entityLegalName,
      goBack,
      goNext
    }
  }
}
</script>

<template>
  <div class="step-six">
    <el-card class="box-card">
      <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
      <div class="content">
        <div class="title">What`s your entity name</div>
        <div class="desc">
          Please enter the full legal name of the entity.
        </div>
        <div class="input">
          <el-input v-model="entityLegalName" placeholder="Entity legal name" />
        </div>
        <div class="btn"><el-button @click="goNext" type="primary" round > &nbsp; &nbsp; &nbsp;Press enter &nbsp; &nbsp; &nbsp;<el-icon ><Right /></el-icon></el-button></div>
      </div>
  </el-card>
  </div>
</template>

<style  lang="less">
  .step-six{
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
        .content{
          width: 70%;
        }
      }
      .title{
        font-size: 40px;
        font-weight: 700;
        text-align: left;
      }
      .desc{
        font-size: 16px;
        color: #666;
        margin-bottom: 30px;
      }
      .input{
        display: flex;
        justify-content:flex-start;
      }
      .btn{
        padding-top: 30px;
        text-align: center;
      }
    }
  }
</style>