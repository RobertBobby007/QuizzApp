<template>
  <div class="category-container">
    <button v-for="category in categories" :key="category"
        @click="selectCategory(category)">
      {{ category }}
    </button>
  </div>
</template>

<script>
import { useQuizStore } from '../stores/quizStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useQuizStore();
    const router = useRouter();

    const categories = ['Matematika', 'Historie', 'Literatura']; 

    function selectCategory(category) {
      store.setCategory(category);
      router.push('/quiz');
    }

    return { categories, selectCategory };
  }
};
</script>

<style scoped>
/* Kontejner pro kategorie */
.category-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
}

/* Styl tlačítek */
button {
  margin: 5px;
  padding: 15px 25px;
  font-size: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* Responzivní pravidla */
@media (max-width: 1024px) {
  .category-container {
    flex-wrap: wrap;
    gap: 15px;
  }

  button {
    font-size: 18px;
    padding: 12px 20px;
  }
}

@media (max-width: 768px) {
  .category-container {
    flex-direction: column;
    gap: 15px;
  }

  button {
    font-size: 16px;
    padding: 10px 18px;
  }
}

@media (max-width: 480px) {
  button {
    font-size: 14px;
    padding: 8px 15px;
  }
}
</style>