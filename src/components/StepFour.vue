<script>
import {ref} from 'vue'
import img_1 from '../assets/images/img_1.png';
import img_2 from '../assets/images/img_2.png'
export default {
  setup(props,{emit}) {
    const textList=ref([
        {
          title:'As an individual',
          desc:'An account to manage my personal investments',
          src:img_1
        },
        {
          title:'As an entity',
          desc:'An account to manage investments for company I own or belong to',
          src:img_2
        }
      ])
      const goBack = ()=>{
      emit('changeCurrent',{current:3,progress:25})
    }
    const goNext=(index)=>{
      let current
      if(index===0){
        current = 5
      }
      if(index===1){
        current = 6
      }
      emit('changeCurrent',{current,progress:500/12})
    }
    return {
      textList,
      goBack,
      goNext,
    }
  }
}
</script>

<template>
  <div class="step-four">
    <el-card class="box-card">
      <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
      <div class="content">
        <div class="title">How will you be investing?</div>
        <div class="desc">
          Tell us what type of account you'd like to open.
        </div>
        <el-card @click="goNext(index)" class="el-card card-item" v-for="(item,index) in textList" :key="item.title" shadow="always"> 
          <div class="content">
            <div class="left">
              <img :src="item.src" alt="">
            </div>
            <div class="right">
              <div class="title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </div>
        </el-card>
        <div class="btn">
          <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
        </div>
      </div>
  </el-card>
  </div>
</template>

<style  lang="less">
  .step-four{
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
     .el-card{
      margin-bottom: 20px;
      cursor: pointer;
      .el-card__body {
        display: unset;
      }
      .content{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: left;
        .left{
          img{
            display: block;
            width: 48px;
          }
        }
        .right{
          flex: 1;
          padding-right: 20px;
          .title{
            text-align: left;
            font-size: 18px;
            font-weight: 700;
          }
          .desc{
            font-size: 16px;
          }
        }
      }
     }
      .btn{
        padding-top: 30px;
        text-align: center;
      }
    }
  }
  @media (min-width: 768px) {
    .step-four{
    align-items: center;
    .box-card{
      width: 50%!important;
      .content{
        .left{
          margin-right: 20px;
          margin-left: 30px;
        }
      }
    }
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
@media screen and (min-width: 501px), screen and (max-width: 767px) {
  .step-four{
    align-items: center;
    .box-card{
      width: 80%;
      .content{
        .left{
          margin-right: 20px;
          margin-left: 30px;
        }
      }
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
@media (max-width:500px){
  .step-four{
    overflow: auto;
    align-items: baseline;
    .card-item{
      margin: 0 10px;
      .content{
        padding: 10px;
        .desc{
          margin-bottom: 0;
        }
      }
    }
    .box-card{
      width: 100%;
      height: calc(100vh - 70px);
      margin-top: 0px;
      .content{
        // padding: 10px 10px 0 10px;
        .left{
          margin-left: 0;
        }
      }
      .el-card__body{
        padding: 0;
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