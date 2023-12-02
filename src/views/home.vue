<script>
import {ref,onMounted} from 'vue';
import StepOne from '../components/StepOne.vue';
import StepTwo from '../components/StepTwo.vue';
import StepThree from '../components/StepThree.vue';
import StepFour from '../components/StepFour.vue';
import StepFive from '../components/StepFive.vue';
import StepSix from '../components/StepSix.vue'
export default {
  name:'home',
  components:{
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    StepSix
  },
  setup(){
    const progress = ref(20);
    const current = ref(1);
    const changeCurrent = (values)=>{
        current.value = values.current
        progress.value = values.progress
        const data = {
          current:values.current,
          progress:values.progress
        }
        sessionStorage.setItem('values',JSON.stringify(data))
      }
      onMounted(() => {
        let values = sessionStorage.getItem('values')
        if(values){
          values = JSON.parse(values)
          current.value = values.current
          progress.value = values.progress
        }
      })
      return {
        progress,
        current,
        changeCurrent
      }
  }
}
</script>

<template>
  <div class="nav">
    <div class="wrapper">
      <div class="item">SELBY</div>
      <div class="item">LANE</div>
      <div class="item">CAPITAL</div>
    </div>
  </div>
   <el-progress :percentage="progress" :show-text="false" striped striped-flow :stroke-linecap="square" :stroke-width="10" indeterminate :duration="50" />
   <StepOne v-if="current === 1" @changeCurrent="changeCurrent"/>
   <StepTwo v-if="current === 2" @changeCurrent="changeCurrent"/>
   <StepThree v-if="current === 3" @changeCurrent="changeCurrent"/>
   <StepFour v-if="current === 4" @changeCurrent="changeCurrent"/>
   <StepFive v-if="current === 5" @changeCurrent="changeCurrent"/>
   <StepSix v-if="current === 6" @changeCurrent="changeCurrent"/>
</template>

<style lang="less">
  .nav{
    height: 60px;
    background-color: #163453;
    margin-bottom: 0px;
    color: #fff;
    line-height: 15px;
    padding: 8px 0 0 20px;
  }
  .el-progress-bar__outer {
    border-bottom-left-radius: 0 !important;
    border-top-left-radius: 0 !important;
  }
  .el-progress-bar__inner.el-progress-bar__inner--indeterminate.el-progress-bar__inner--striped.el-progress-bar__inner--striped-flow {
    border-bottom-left-radius: 0 !important;
    border-top-left-radius: 0 !important;
  }
</style>