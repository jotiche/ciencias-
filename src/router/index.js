import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CrossWord from '../views/Crossword.vue'
import LetterSoup from '../views/LetterSoup.vue'
import MemoryGame from '../views/MemoryGame.vue'
import Ahorcado from '../views/Ahorcado.vue'
import Memorama from '../views/Memorama.vue'
import Submenu from '../views/Submenu.vue'
import Eligepersonaje from '../views/Eligepersonaje.vue'
import Puntaje from '../views/Puntaje.vue'
import Juegos from '../views/Juegos.vue'
import Video1 from '../views/Video1.vue'
import Video2 from '../views/Video2.vue'
import Video3 from '../views/Video3.vue'
import Video4 from '../views/Video4.vue'
import Video5 from '../views/Video5.vue'
import Video6 from '../views/Video6.vue'
import Felicidades from '../views/Felicidades.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crossword',
    name: 'crossword',
    component: CrossWord,
    meta: { layout: "default" }
  },
  {
    path: '/soup',
    name: 'soup',
    component: LetterSoup,
    meta: { layout: "default" }
  },
  {
    path: '/puntaje',
    name: 'puntaje',
    component: Puntaje,
    meta: { layout: "default" }
  },
  {
    path: '/memory',
    name: 'memorygame',
    component: MemoryGame,
    meta: { layout: "default" }
  }, {
    path: '/ahorcado',
    name: 'ahorcado',
    component: Ahorcado,
    meta: { layout: "default" }
  }, {
    path: '/memorama',
    name: 'memorama',
    component: Memorama,
    meta: { layout: "default" }
  }, {
    path: '/submenu',
    name: 'submenu',
    component: Submenu,
    meta: { layout: "default" }
  }, {
    path: '/eligepersonaje',
    name: 'eligepersonaje',
    component: Eligepersonaje,
    meta: { layout: "default" }
  },  {
    path: '/juegos',
    name: 'juegos',
    component: Juegos,
    meta: { layout: "default" }
  },  {
    path: '/video1',
    name: 'video1',
    component: Video1,
    meta: { layout: "default" }
  },   {
    path: '/video2',
    name: 'video2',
    component: Video2,
    meta: { layout: "default" }
  },   {
    path: '/video3',
    name: 'video3',
    component: Video3,
    meta: { layout: "default" }
  },   {
    path: '/video4',
    name: 'video4',
    component: Video4,
    meta: { layout: "default" }
  },   {
    path: '/video5',
    name: 'video5',
    component: Video5,
    meta: { layout: "default" }
  },   {
    path: '/video6',
    name: 'video6',
    component: Video6,
    meta: { layout: "default" }
  },    {
    path: '/felicidades',
    name: 'felicidades',
    component: Felicidades,
    meta: { layout: "default" }
  }, 
  
  
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
