<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px 0;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  box-sizing: border-box;
}

nav {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

a {
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: #0056b3;
}

/* Responzivní pravidla */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 15px 0;
  }

  nav {
    gap: 10px;
    justify-content: center;
  }

  a {
    font-size: 14px;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  a {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>