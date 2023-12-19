<script>
export default {
  data(){
    return {
      title: "Please sign in"
    }
  }
}
</script>

<template>
  <div class="sign-page">
    <h1 class="title">{{ title }}</h1>
    <p class="content">
      sign
    </p>
  </div>
</template>

<style scoped>
.sign-page {
  text-align: center;
}

.sign-page.title {
  display: flex;
  align-items: center;
  justify-content: center; /* Add this line to center horizontally */
  font-size: large;
  color: black;
}

.sign-page.content {
  /* font-size: large; */
  color: black;
}
</style>