<script>
import {ref,onMounted} from 'vue'
import img_4 from '../assets/images/img_4.png'
export default {
  setup(props,{emit}){
    const imgUrl = ref(img_4)
    const userEmail = ref(null)
    onMounted(() => {
      userEmail.value = sessionStorage.getItem('email')
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      let W = window.innerWidth;
      let H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
        let mp = 200; 
        let particles = [];
        for (let i = 0; i < mp; i++) {
          particles.push({
            x: Math.random() * W,
            y: Math.random() * H, 
            r: Math.random() * 18 + 1, 
            d: Math.random() * mp, 
            color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.8)",
            tilt: Math.floor(Math.random() * 5) - 5
          });
        }

        function draw() {
          ctx.clearRect(0, 0, W, H);
          for (let i = 0; i < mp; i++) {
            let p = particles[i];
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color; 
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + p.tilt + p.r / 2, p.y + p.tilt);
            ctx.stroke(); 
          }

          update();
        }

        let angle = 0;

        function update() {
          angle += 0.01;
          for (let i = 0; i < mp; i++) {
            let p = particles[i];
            p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
            // p.x += Math.sin(angle) * 2;
            if (p.x > W + 5 || p.x < -5 || p.y > H) {
              if (i % 3 > 0) 
              {
                particles[i] = {
                  x: Math.random() * W,
                  y: -10,
                  r: p.r,
                  d: p.d,
                  color: p.color,
                  tilt: p.tilt
                };
              }
            }
          }
        }
        setInterval(draw, 50);
        sessionStorage.removeItem('values')
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('country')
        sessionStorage.removeItem('money')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('entityLegalName')
        sessionStorage.removeItem('emailRepeat')
    })
    return {
      imgUrl,
      userEmail
    }
  }
}
</script>

<template>
  <div class="step-eleven">
    <canvas id="canvas"></canvas>
    <div class="xin">
      <div class="img">
      <img :src="imgUrl" alt="">
    </div>
    <div class="title">
      <div class="text"> Congratulations. </div>
      <div class="text"> Welcome to Selby Lane Capital. </div>
    </div>
    <div class="desc">
      We're excited to embark on this journey together. 
    </div>
    <div class="next">
      <div class="title">
        What's next?
      </div>
      <div class="desc">
        To access your personalized dashboard, simply click the link in the email sent to: 
      </div>
      <div class="email">{{ userEmail }}</div>
    </div>
    </div>
  </div>
</template>

<style  lang="less">
  .step-eleven{
    padding-top: 50px;
    #canvas{
      position: fixed;
      top: 0;
      left: 0;
    }
    .xin{
      
      margin: 0 auto;
      .img{
      display: flex;
      justify-content: center;
      img{
        display: block;
        width: 80px;
        height: 80px;
      }
    }
    .title{
      margin-top: 30px;
      .text{
        color: #0C3458;
        font-weight: 700;
        font-size: 30px;
        text-align: center;
      }
    }
    .desc{
      font-size: 16px;
      color: #555c68;
      text-align: center;
      margin-bottom: 30px;
    }
    .next{
      .title{
        color: #0C3458;
        font-weight: 700;
        font-size: 30px;
        text-align: center;
      
    }
    .desc{
      font-size: 16px;
      color: #555c68;
      text-align: center;
      margin-bottom: 10px;
    }
    .email{
      color: #ca8a4b;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
    }
    }
    }
 
  }
  @media (min-width: 768px) {
    .step-eleven{
      .xin{
        width: 402px;
      }
    }
 
  
}
@media screen and (min-width: 501px), screen and (max-width: 767px) {
  .step-eleven{
    .xin{
        width: 402px;
      }
  }
  
}
@media (max-width:500px){
  .step-eleven{
    .xin{
        width: 339px;
      }
  }
  
}
</style>