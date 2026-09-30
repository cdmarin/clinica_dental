// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// Importa tus componentes-vista desde la carpeta "components"
import Home from '../components/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
