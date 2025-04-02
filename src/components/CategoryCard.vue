<template>
    <div class="category-card" @click="$emit('click')">
      <h3>{{ name }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: ['name']
  };
  </script>
  
  <style scoped>
  .category-card {
    padding: 20px;
    background: lightblue;
    cursor: pointer;
    text-align: center;
    width: 150px;
  }
  </style>
  