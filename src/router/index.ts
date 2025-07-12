import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AwardView from '../views/AwardView.vue'
import ContactView from '../views/ContactView.vue'
import SponsorView from '../views/SponsorView.vue'
import PlayerView from '../views/PlayerView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/awards',
    name: 'Awards',
    component: AwardView,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactView,
  },
  {
    path: '/sponsorship',
    name: 'Sponsorship',
    component: SponsorView,
  },
  {
    path: '/player/:id',
    name: 'Player',
    component: PlayerView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
