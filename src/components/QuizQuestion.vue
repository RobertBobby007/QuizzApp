<template>
    <div v-if="question" class="quiz-container">
      <h2 class="question">{{ question.text }}</h2>
      <div class="options">
        <button v-for="option in question.options" 
                :key="option.text" 
                @click="selectAnswer(option.correct)">
          {{ option.text }}
        </button>
      </div>
    </div>
</template>

<script>
export default {
  props: ['question'],
  emits: ['answered'],
  setup(props, { emit }) {
    function selectAnswer(isCorrect) {
      emit('answered', isCorrect);
    }

    return { selectAnswer };
  }
};
</script>

<style scoped>
.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh; 
}

.question {
  margin-bottom: 20px; 
}

.options {
  display: flex;
  flex-direction: row; 
  gap: 10px;
}

.options button {
  background-color: #a2cfff;
  
  cursor: pointer;
  display: block;
  margin: 0 auto; 
  padding: 10px;
}

.options button:hover {
  background-color: #268fff;
}
</style>
