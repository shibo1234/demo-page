<script>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(props,{emit}){
    const router = useRouter();  
    const textList = ref([
        {
          title:'World-class investment offerings in VC and PE',
          desc:'Access exclusive opportunities, unlocking potential for impressive returns and portfolio diversification.'
        },{
          title:'Seamless user experience',
          desc:'Elegant and streamlined onboarding process that takes minutes instead of days of weeks.'
        },{
          title:'Breaking barriers',
          desc:'Start investing with lower minimums, opening up opportunities like never before.'
        },{
          title:'Uncompromising secure',
          desc:'Harness the power of technology on one of the most secure platforms available.'
        }
      ])
      const goNext = ()=>{
      emit('changeCurrent',{current:2,progress:100/6})
    }
    const goSign = ()=>{
      router.push('/sign')
    }
    return {
      textList,
      goNext,
      goSign
    }
  }
}
</script>

<template>
  <div class="step-one">
    <el-card class="box-card">
    <div class="title">Welcome.</div>
    <div class="item" v-for="item in textList" :key="item.title">
      <div class="title">
        <div class="icon"></div>
        <div class="text">{{ item.title }}</div>
      </div>
      <div class="desc">{{ item.desc }}</div>
    </div>
    <div class="btn"><el-button @click="goNext" type="primary" round> &nbsp; &nbsp; &nbsp;Continue &nbsp; &nbsp; &nbsp;</el-button></div>
    <div class="sign"><span>Already have an account?</span><span @click="goSign">Sign In.</span> </div>
  </el-card>
 <div class="sector"></div>
  </div>
</template>

<style lang="less" scoped>
.step-one{
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .box-card{
      .title{
        font-size: 30px;
        font-weight: 700;
        text-align: center;
      }
      .item{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        .title{
          display: flex;
          align-items: center;
          text-align: left;
          font-size: 18px;
          .icon{
            width: 10px;
            height: 10px;
            background-color: brown;
            border-radius: 50%;
            margin-right: 15px;
          }
          .text{
            font-weight: 600;
            flex: 1;
          }
        }
        .desc{
          padding-left: 35px;
        }
      }
      .btn{
        padding-top: 30px;
        text-align: center;
      }
      .sign{
        padding-top: 30px;
        font-size: 16px;
        text-align: center;
        span{
          font-weight: 700;
          &:last-child{
            color: brown;
            display: inline-block;
            margin-left: 5px;
            cursor: pointer;
          }
        }
      }
    }
    .sector{
      position: fixed;
      border-radius: 50%;
      background-color:#c18c56;
      
    }
  }
@media (min-width: 768px) {
  .step-one{
    .box-card{
      width: 50%!important;
  }
  .sector{
    width: 272px!important;
    height: 272px!important;
    bottom:-136px!important;
    right: -136px!important;
  }
  }
  
}
@media screen and (min-width: 501px), screen and (max-width: 767px) {
  .step-one{
    .box-card{
      width: 80%;
  }
  .sector{
    width: 150px;
    height: 150px;
    bottom:-75px;
    right: -75px;
  }
  }
}
@media (max-width:500px){
  .step-one{
    overflow: auto;
    .box-card{
    width: 100%;
    margin-top: 90px;
   
    .sign{
      padding-bottom: 20px;
      span{
        font-weight: normal!important;
        font-size: 14px!important;
      }
    }
  }
  .item{
      padding : 0 20px;
  }
  .sector{
    width: 150px;
    height: 150px;
    bottom:-75px;
    right: -75px;
  }
  }
}
  
</style>