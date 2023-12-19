<script>
import {ref,onMounted} from 'vue';
import Countries from '../assets/country';
import { ElMessage } from 'element-plus'
export default {
  setup(props,{emit}) {
    const address=ref('')
    const loading=ref(false)
    const options=ref([])
    const list=ref([])
    const countries=ref(Countries)
    onMounted(() => {
      list.value = countries.value.map((item) => {
        return { value: item, label: item}
      })
      const country = sessionStorage.getItem('country')
      if(country){
        address.value=country
      }
    })
    const remoteMethod = (query)=>{
      if (query) {
        loading.value = true
        setTimeout(() => {
          loading.value = false
          options.value = list.value.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        options.value = []
      }
    }
    const goBack = ()=>{
      emit('changeCurrent',{current:4,progress:100/3})
    }
    const goNext=()=>{
      if(!address.value){
        return ElMessage({
                  message: 'Please enter your country',
                  type: 'warning',
                })
      }
      sessionStorage.setItem('country',address.value)
      sessionStorage.removeItem('entityLegalName')
      emit('changeCurrent',{current:7,progress:50})
    }
   return {
    address,
    loading,
    options,
    list,
    countries,
    remoteMethod,
    goBack,
    goNext
   }
  }
}
</script>

<template>
  <div class="step-five">
    <el-card class="box-card">
      <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
      <div class="content">
        <div class="title">Where do you live?</div>
        <div class="desc">
          Please provide us with your country of residence, enabling us to ensure compliance with local regulations.
        </div>
        <div class="input">
          <el-select
            v-model="address"
            filterable
            remote
            reserve-keyword
            placeholder="Please enter a keyword"
            :remote-method="remoteMethod"
            :loading="loading"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
            </el-select>
        </div>
        <div class="btn">
          <el-button @click="goNext" type="primary" round > &nbsp; &nbsp; &nbsp;Press enter &nbsp; &nbsp; &nbsp;<el-icon ><Right /></el-icon></el-button>
          <div class="btn">
    <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
  </div></div>
      </div>
  </el-card>
  </div>
</template>

<style  lang="less">
  .step-five{
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
        .content{
          width: 70%;
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
    .step-five{
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
  .step-five{
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
  .step-five{
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
     .btn{
      .arrow{
        display: inline;
         margin-top: 20px;
      }
     }
  }
  }
}
</style>