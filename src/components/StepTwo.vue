<script>
import {ref} from 'vue'
export default {
  setup(props,{emit}){
    const textList = ref([
        {
          title:'Add your personal details',
          desc:'Let us get to know you better for a personalized experience.'
        },{
          title:'Create your account',
          desc:'Unlock the full potential of our platform by setting up your unique account.'
        },{
          title:'Access your dashboard',
          desc:'Take control of your journey as you explore your personalized.'
        },{
          title:'Fund your portfolio',
          desc:'Begin your investing journey watch your portfolio grow with just a few clicks.'
        }
      ])
      const goBack = ()=>{
        emit('changeCurrent',{current:1,progress:20})
      }
      const goNext = ()=>{
        emit('changeCurrent',{current:3,progress:60})
      }
      return {
        textList,
        goBack,
        goNext
      }
  }
}
</script>

<template>
  <div class="step-two">
    <el-card class="box-card">
      <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
      <div class="content">
        <div class="title">Let's get you set up!</div>
        <div class="item" v-for="(item,idx) in textList" :key="item.title">
          <div class="title">
            <div :class="`icon icon_${idx}`">{{ idx+1 }}</div>
            <div class="text">{{ item.title }}</div>
          </div>
          <div class="desc">{{ item.desc }}</div>
        </div>
        <div class="btn"><el-button @click="goNext" type="primary" round> &nbsp; &nbsp; &nbsp;Let's get started &nbsp; &nbsp; &nbsp;</el-button></div>
      </div>
  </el-card>
  </div>
</template>

<style  lang="less">
  .step-two{
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
            width: 25px;
            height: 25px;
            border-radius: 50%;
            margin-right: 10px;
            font-size: 14px;
            color: #c7a164;
            text-align: center;
            line-height: 25px;
            font-weight: 600;
           background-color: #fdf3d3;
           
          }
          .icon_0{
              background-color: brown;
              color: #fff;
          }
          .text{
            font-weight: 600;
          }
        }
        .desc{
          text-indent: 35px;
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
  }
</style>