import { createRouter, createWebHistory } from 'vue-router';
import CategoryView from '../views/CategoryView.vue';
import QuizView from '../views/QuizView.vue';
import ResultView from '../views/ResultView.vue';

const routes = [
  { path: '/', component: CategoryView },
  { path: '/quiz', component: QuizView },
  { path: '/result', component: ResultView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
