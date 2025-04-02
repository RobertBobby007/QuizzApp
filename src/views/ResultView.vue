<template>
    <div>
      <h2>Výsledek kvízu</h2>
      <p>Správně zodpovězeno: {{ store.correctAnswers }} / {{ store.totalQuestions }}</p>
      <div class="progress-bar">
        <div class="progress" :style="{ width: progressPercentage + '%' }">
          {{ Math.round(progressPercentage) }}%
        </div>
      </div>
      <button @click="restartQuiz">Zkusit znovu</button>
    </div>
</template>

<script>
import { useQuizStore } from '../stores/quizStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useQuizStore();
    const router = useRouter();

    function restartQuiz() {
      store.resetQuiz();
      router.push('/');
    }

    const progressPercentage = (store.correctAnswers / store.totalQuestions) * 100;

    return { store, restartQuiz, progressPercentage };
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 20px 0;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #28a745;
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>