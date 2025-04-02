import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    category: null,
    questions: [],
    currentQuestionIndex: 0,
    correctAnswers: 0,
  }),
  getters: {
    totalQuestions(state) {
      return state.questions.filter(q => q.category === state.category).length;
    },
    filteredQuestions(state) {
      return state.questions.filter(q => q.category === state.category);
    }
  },
  actions: {
    setCategory(category) {
      this.category = category;
      this.correctAnswers = 0;
      this.currentQuestionIndex = 0;
    },
    loadQuestions() {
      this.questions = [
        { text: 'Kolik je 2+2?', category: 'Matematika', options: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false }
          ]
        },
        { text: 'Kolik je 5*6?', category: 'Matematika', options: [
            { text: '30', correct: true },
            { text: '28', correct: false },
            { text: '32', correct: false }
          ]
        },
        { text: 'Kolik je 12/4?', category: 'Matematika', options: [
            { text: '2', correct: false },
            { text: '3', correct: true },
            { text: '4', correct: false }
          ]
        },
        { text: 'Kolik je 9-3?', category: 'Matematika', options: [
            { text: '5', correct: false },
            { text: '6', correct: true },
            { text: '7', correct: false }
          ]
        },
        {text: 'Kolike je 3*3?', category: 'Matematika', options: [
            { text: '6', correct: false },
            { text: '7', correct: false },
            { text: '9', correct: true }
          ]
        },
        { text: 'Kolik je 10+15?', category: 'Matematika', options: [
            { text: '25', correct: true },
            { text: '20', correct: false },
            { text: '30', correct: false }
          ]
        },
        { text: 'Hlavní město Francie?', category: 'Historie', options: [
            { text: 'Berlín', correct: false },
            { text: 'Paříž', correct: true },
            { text: 'Londýn', correct: false }
          ]
        },
        { text: 'Kdy začala první světová válka?', category: 'Historie', options: [
            { text: '1914', correct: true },
            { text: '1918', correct: false },
            { text: '1939', correct: false }
          ]
        },
        { text: 'Kdo byl první prezident USA?', category: 'Historie', options: [
            { text: 'Abraham Lincoln', correct: false },
            { text: 'George Washington', correct: true },
            { text: 'Thomas Jefferson', correct: false }
          ]
        },
        { text: 'Kdy byla podepsána Deklarace nezávislosti USA?', category: 'Historie', options: [
            { text: '1776', correct: true },
            { text: '1783', correct: false },
            { text: '1804', correct: false }
          ]
        },
        { text: 'Kdo byl Napoleon Bonaparte?', category: 'Historie', options: [
            { text: 'Francouzský císař', correct: true },
            { text: 'Ruský car', correct: false },
            { text: 'Italský král', correct: false }
          ]
        },
        { text: 'Kdy skončila druhá světová válka?', category: 'Historie', options: [
            { text: '1945', correct: true },
            { text: '1939', correct: false },
            { text: '1950', correct: false }
          ]
        },
        { text: 'Kdo napsal knihu Válka s Mloky?', category: 'Literatura', options: [
            { text: 'Karel Čapek', correct: true },
            { text: 'Božena Němcová', correct: false },
            { text: 'Jaroslav Hašek', correct: false }
          ]
        },
        { text: 'Kdo napsal knihu Babička?', category: 'Literatura', options: [
            { text: 'Božena Němcová', correct: true },
            { text: 'Karel Čapek', correct: false },
            { text: 'Jaroslav Hašek', correct: false }
          ]
        },
        { text: 'Kdo napsal knihu Osudy dobrého vojáka Švejka?', category: 'Literatura', options: [
            { text: 'Jaroslav Hašek', correct: true },
            { text: 'Karel Čapek', correct: false },
            { text: 'Božena Němcová', correct: false }
          ]
        },
        { text: 'Kdo napsal knihu Máj?', category: 'Literatura', options: [
            { text: 'Karel Hynek Mácha', correct: true },
            { text: 'Karel Čapek', correct: false },
            { text: 'Božena Němcová', correct: false }
          ]
        },
        { text: 'Kdo napsal knihu Anna Karenina?', category: 'Literatura', options: [
            { text: 'Lev Tolstoj', correct: true },
            { text: 'Fjodor Dostojevskij', correct: false },
            { text: 'Anton Pavlovič Čechov', correct: false }
          ]
        },
        { text: 'Kdo napsal knihu Pán prstenů?', category: 'Literatura', options: [
            { text: 'J.R.R. Tolkien', correct: true },
            { text: 'C.S. Lewis', correct: false },
            { text: 'George R.R. Martin', correct: false }
          ]
        }
      ];
    },
    answerQuestion(isCorrect) {
      if (isCorrect) {
        this.correctAnswers++;
      }
      this.currentQuestionIndex++;
    },
    resetQuiz() {
      this.currentQuestionIndex = 0;
      this.correctAnswers = 0;
    }
  }
});
