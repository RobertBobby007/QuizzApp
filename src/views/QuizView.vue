<template>
    <div v-if="question">
      <QuizQuestion :question="question" @answered="answer" />
    </div>
    <div v-else class="quiz-completed">
      <h2>Kvíz dokončen!</h2>
      <button @click="goToResults">Zobrazit výsledek</button>
    </div>
  </template>
  
  <script>
  import { useQuizStore } from '../stores/quizStore';
  import { useRouter } from 'vue-router';
  import { computed, onMounted } from 'vue';
  import QuizQuestion from '../components/QuizQuestion.vue';
  
  export default {
    components: { QuizQuestion },
    setup() {
      const store = useQuizStore();
      const router = useRouter();
  
      const question = computed(() => store.filteredQuestions[store.currentQuestionIndex]);
  
      function answer(isCorrect) {
        store.answerQuestion(isCorrect);
      }
  
      function goToResults() {
        router.push('/result');
      }
  
      onMounted(() => {
        store.loadQuestions(); // Načte otázky podle vybrané kategorie
      });
  
      return { question, answer, goToResults };
    }
  };
  </script>
  <style scoped>
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  .quiz-completed {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  </style>
