<script>
import {ref,onMounted} from 'vue'
import { ElMessage } from 'element-plus'
export default {

  setup(props,{emit}) {
    const email = ref('');
    const emailRepeat = ref('');
    const goBack = ()=>{
      emit('changeCurrent',{current:8,progress:700/12})
    }
    const goNext = ()=>{
      if(!email.value){
        return ElMessage({
                  message: 'Please enter your Email',
                  type: 'warning',
                })
      }
      if(!emailRepeat.value){
        return ElMessage({
                  message: 'Please repeat enter your Email',
                  type: 'warning',
                })
      }
      if(email.value!==emailRepeat.value){
        return ElMessage({
                  message: 'The two entered email addresses are inconsistent',
                  type: 'warning',
                })
      }
      sessionStorage.setItem('email',email.value)
      sessionStorage.setItem('emailRepeat',email.value)
      emit('changeCurrent',{current:10,progress:75})
    }
    onMounted(() => {
      const cacheEmail = sessionStorage.getItem('email')
      const cacheEmailRepeat = sessionStorage.getItem('emailRepeat')
      if(cacheEmail){
        email.value = cacheEmail
      }
      if(cacheEmailRepeat){
        emailRepeat.value = cacheEmailRepeat
      }
    })
    return {
      email,
      emailRepeat,
      goBack,
      goNext
    }
  }

}
</script>

<template>
  <div class="step-nine">
    <el-card class="box-card">
      <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
      <div class="content">
        <div class="title">Where can we reach you?</div>
        <div class="desc">
          Help us stay connected by providing us with your e-mail address. We'll share important updates, investment opportunities, and personalized insights. 
        </div>
        <div class="input">
          <el-input v-model="email" placeholder="Email" />
        </div>
        <div class="input" v-if=" /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)">
          <el-input v-model="emailRepeat" placeholder="Re-enter email" />
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
  .step-nine{
    height: 90vh;
    display: flex;
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
        text-align: center;
      }
      .desc{
        font-size: 16px;
        color: #666;
        margin-bottom: 30px;
      }
      .input{
        margin-bottom: 10px;
        
      }
      .btn{
        padding-top: 30px;
        text-align: center;
      }
    }
  }
  @media (min-width: 768px) {
    .step-nine{
    align-items: center;
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
  .step-nine{
    align-items: center;
    .box-card{
      width: 80%;
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
@media (max-width:500px){
  .step-nine{
    overflow: auto;
    align-items:baseline;
    .box-card{
      width: 100%;
     margin-top: 0px;
     height: calc(100vh - 70px);
     .arrow{
      display: none;
     }
     .content{
      .desc,.input{
        padding: 0 20px;
        margin-top: 20px;
      }
     }
     .btn{
      .arrow{
        display: block;
        width: 100vw!important;
         text-align: center;
         margin-top: 20px;
      }
     }
  }
  }
  
}
</style>