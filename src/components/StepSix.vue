<script>
import {ref,onMounted} from 'vue';
import { ElMessage } from 'element-plus'
export default {
  setup(props,{emit}) {
    const entityLegalName = ref('');
    const goBack = ()=>{
      emit('changeCurrent',{current:4,progress:100/3})
    }
    const goNext = ()=>{
      if(!entityLegalName.value){
        return ElMessage({
                  message: 'Please enter your entity name',
                  type: 'warning',
                })
      }
      sessionStorage.setItem('entityLegalName',entityLegalName.value)
      console.log(entityLegalName.value)
      sessionStorage.removeItem('name')
      emit('changeCurrent',{current:5.1,progress:50})
    }
    onMounted(() => {
      const cacheName = sessionStorage.getItem('entityLegalName')
      if(entityLegalName) {
        entityLegalName.value = cacheName
      }
    })
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
        <div class="title">What's your entity name</div>
        <div class="desc">
          Please enter the full legal name of the entity.
        </div>
        <div class="input">
          <el-input v-model="entityLegalName" placeholder="Entity legal name" />
        </div>
        <div class="btn">
          <el-button @click="goNext" type="primary" round > &nbsp; &nbsp; &nbsp;Press enter &nbsp; &nbsp; &nbsp;<el-icon ><Right /></el-icon></el-button>
          <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
        </div>
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
        font-size: 30px;
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
  @media (min-width: 768px) {
    .step-six{
      .box-card{
      width: 50%!important;
      .arrow{
        display: block;
      }
  }
  .btn{
    .arrow{
      display: none;
    }
  }
    }
 
  
}
@media screen and (min-width: 501px), screen and (max-width: 767px) {
  .step-six{
    .box-card{
      width: 80%;
      .arrow{
        display: block;
      }
  }
  .el-card__body{
    display: flex!important;
    align-items: center!important;
    justify-content: center!important;
  }
  .btn{
    .arrow{
      display: none;
    }
  }
  }
  
}
@media (max-width:500px){
  .step-six{  
    overflow: auto;
    align-items: baseline;
    .box-card{
      width: 100%;
      margin-top: 0px!important;
      height: calc(100vh - 70px);
      .el-card__body{
        width: 100vw;
        padding: 0;
      }
      .content{
        .item{
          padding: 0 20px;
        }
      }
     .arrow{
      display: none;
     }
     .input{
      margin: 0 20px;
     }
     .btn{
      .arrow{
        display: block;
        width: 100vw;
         margin-top: 20px;
         text-align: center;
      }
     }
  }
  }
}
</style>