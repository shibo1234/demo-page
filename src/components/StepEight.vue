<script>
import {ref,onMounted} from 'vue'
import { ElMessage } from 'element-plus'
export default {

  setup(props,{emit}) {
    const amountMoney = ref('');
    const isAmountValid = ref(false);
    const goBack = ()=>{
      emit('changeCurrent',{current:7,progress:50})
    }
    const goNext = ()=>{
        const numericValue = amountMoney.value.replace(/\$/g, '').replace(/,/g, ''); 
        if (!numericValue) {
            return ElMessage({
                message: 'Please enter an amount',
                type: 'warning',
            });
        }
        sessionStorage.setItem('money',amountMoney.value)
      emit('changeCurrent',{current:9,progress:200/3})
    console.log("点击")
    }
    const validateInput = () => {
          // Remove commas and keep only numeric digits
        const numericValue = amountMoney.value.replace(/,/g, '');

        // Parse the numeric value as a floating-point number
        const parsedValue = parseFloat(numericValue);

        // Check if the parsedValue is a valid number (not NaN)
        if (!isNaN(parsedValue)) {
        // Format the numeric value with commas for thousands
        const formattedValue = parsedValue.toLocaleString();
        
        // Update the input with the formatted value
        amountMoney.value = formattedValue;

        // Check if the numeric value is a valid number
        isAmountValid.value = /^\d+$/.test(numericValue);
        } else {
        // If not a valid number, set the input to the original value without formatting
            amountMoney.value = '';
            isAmountValid.value = false;
        }
    };
    onMounted(() => {
      const money = sessionStorage.getItem('money')
      if(money){
        amountMoney.value = money
      }
    })
    return {
      amountMoney,
      isAmountValid,
      goBack,
      goNext,
      validateInput,
    }
  }

}
</script>

<template>
  <div class="step-eight">
    <el-card class="box-card">
      <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
      <div class="content">
        <div class="title">How much do you want to invest?</div>
        <div class="desc">
            Let us know the investment amount you had in mind to kickstart your financial journey.
        </div>
        <div class="input">
          <el-input class="amount-money" v-model="amountMoney" placeholder='0' @input=validateInput>
            <template #prepend>
                <div style="pointer-events: none;">$</div>
            </template>
        </el-input>
        </div>
        <div class="btn">
            <el-button @click="goNext" type="primary" placeholder="0"> 
                &nbsp; &nbsp; &nbsp;Press enter &nbsp; &nbsp; &nbsp;<el-icon ><Right /></el-icon>
            </el-button>
            <div class="arrow"><el-icon @click="goBack" class="back"><Back /></el-icon></div>
        </div>
      </div>
      
  </el-card>
  </div>
</template>

<style  lang="less">
  .step-eight{
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
        .amount-money{
          margin-right: 10px;
        }
      }
      .btn{
        padding-top: 30px;
        text-align: center;
      }
    }
  }
  @media (min-width: 768px) {
    .step-eight{
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
  .step-eight{
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
  .step-eight{
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
        margin: 20px;
      }
     .arrow{
      display: none;
     }
     .btn{
      .arrow{
        width: 100%;
        display: block;
         margin-top: 20px;
      }
     }
  }
  }
}
</style>