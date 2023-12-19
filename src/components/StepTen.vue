<script>
import {ref,onMounted} from 'vue';
import { ElMessage } from 'element-plus'
export default {
  
  setup(props,{emit}){
    const checked = ref(false)
    const name = ref(null)
    const country = ref(null)
    const money = ref(null)
    const email = ref(null)
    const entityLegalName = ref(null)
      const goBack = ()=>{
        emit('changeCurrent',{current:9,progress:200/3})
      }
      const goNext = ()=>{
        if(!checked.value){
          return ElMessage({
                  message: 'Please check agreements',
                  type: 'warning',
                })
        }
          emit('changeCurrent',{current:11,progress:100})
      }
      // // const redirectToTerms = () => {
      //   window.location.href = 'URL_FOR_TERMS_OF_SERVICE'; 
      // }
      // const redirectToPrivacy = () => {
      //   window.location.href = 'URL_FOR_TERMS_OF_SERVICE';
      // }
      onMounted(() => {
        const cacheName = sessionStorage.getItem('name')
        const parsedName = cacheName?JSON.parse(cacheName):{}
        const cacheCountry = sessionStorage.getItem('country')
        const cacheMoney = sessionStorage.getItem('money')
        const cacheEmail = sessionStorage.getItem('email')
        const cacheEntityLegalName = sessionStorage.getItem('entityLegalName')
        name.value = cacheEntityLegalName || `${parsedName.firstName} ${parsedName.lastName}` 
        country.value = cacheCountry
        money.value = cacheMoney
        email.value = cacheEmail
        entityLegalName.value = cacheEntityLegalName
        console.log(entityLegalName.value)
      })
      return {
        name,
        country,
        money,
        email,
        entityLegalName,
        checked,
        goBack,
        goNext,
      }
  }
}
</script>

<template>
  <div class="step-ten">
    <el-card class="box-card">
      <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
      <div class="content">
        <div class="title"> Did we get it right? </div>
        <div class="desc">
          Take a moment to review the information you provided. We want to ensure it's accurate and that we've captured your details correctly. 
        </div>
        <div class="content-wrapper">
          <div class="item">
            <div class="label">{{entityLegalName?"Entity Legal name":'Legal name'}}</div>
            <div class="value">{{name}}</div>
          </div>
          <div class="item">
            <div class="label">Country of Residence</div>
            <div class="value">{{ country }}</div>
          </div>
          <div class="item">
            <div class="label">Investment Objective / Amount</div>
            <div class="value">Retriement / ${{ money }}</div>
          </div>
          <div class="item">
            <div class="label">Email Address</div>
            <div class="value">{{ email }}</div>
          </div>
        </div>
        <div class="checkbox">
          <el-checkbox v-model="checked" size="large">
            <div class="text">
              <!-- I agree to the <span>Terms of Service</span>
              and
              <span>Privacy Policy</span> -->
              I agree to the 
              <a href="https://public.selbylanedigital.com/pages/internal/terms-of-service.html" target="_blank" class="link">Terms of Service</a>
              and
              <a href="https://public.selbylanedigital.com/pages/internal/privacy-policy.html" target="_blank" class="link">Terms of Service</a>
            </div>
            </el-checkbox>
        </div>
        <div class="btn">
          <el-button @click="goNext" type="primary" round> &nbsp; &nbsp; &nbsp;Continue &nbsp; &nbsp; &nbsp;</el-button>
          <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
        </div>
      </div>
  </el-card>
  </div>
</template>

<style  lang="less">
  .step-ten{
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .box-card{
      .el-card__body{
        .arrow{
          width: 50px;
          .back{
            font-size: 30px;
            font-weight: 600;
            cursor: pointer;
          }
        }
        .content{
          .desc{
        font-size: 16px;
        color: #666;
        margin-bottom: 30px;
      }
      .content-wrapper{
        border: 1px solid#ca8a4b;
        margin: 10px;
        border-radius: 4px;;
        .item{
          padding: 15px;
          border-bottom: 1px solid#ca8a4b;
          &:last-child{
            border: none;
          }
          .label{
            font-weight: 600;
          }
        }
      }
        }
      }
      .title{
        font-size: 30px;
        font-weight: 700;
        text-align: center;
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
      .checkbox{
        margin-left: 10px;
        .text{
          color:#333;
          a{
            color: #ca8a4b;
            font-weight: 700;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .step-ten{
      .box-card{
      width: 50%!important;
      .arrow{
        display: block;
      }
      .btn{
        .arrow{
          display: none;
        }
      }
  }
    }
 
  
}
@media screen and (min-width: 501px), screen and (max-width: 767px) {
  .step-ten{
    .box-card{
      width: 80%;
      .arrow{
        display: block;
      }
      .btn{
        .arrow{
          display: none;
        }
      }
  }
  .el-card__body{
    display: flex!important;
    align-items: center!important;
    justify-content: center!important;
  }
  }
  
}
@media (max-width:500px){
  .step-ten{
    overflow: auto;
    align-items: baseline;
    .box-card{
      width: 100%;
      margin-top: 0px!important;
      height: calc(100vh - 70px);
      overflow: auto;
      .content{
      .desc,.input{
        padding: 0 20px;
      }
     }
     .arrow{
      display: none;
     }
     .btn{
      .arrow{
        display: block;
        width: 100%;
         margin-top: 20px;
      }
     }
  }
  }
  
}
</style>