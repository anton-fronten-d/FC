<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="nav-logo">
        <div class="logo-icon">П</div>
        <span class="logo-text">ПЫРИК FC</span>
      </router-link>

      <!-- Navigation Links -->
      <div class="nav-links" :class="{ 'nav-open': mobileMenuOpen }">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-menu-btn">☰</button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { path: '/', name: 'Главная' },
  { path: '/about', name: 'О нас' },
  { path: '/awards', name: 'Награды' },
  { path: '/contacts', name: 'Контакты' },
  { path: '/sponsorship', name: 'Спонсорство' },
]
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

.navbar {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid $border-color;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.nav-logo {
  @include flex-center;
  gap: 0.75rem;
  text-decoration: none;

  .logo-icon {
    width: 2.5rem;
    height: 2.5rem;
    background: $primary-gradient;
    border-radius: 50%;
    @include flex-center;
    color: #000;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: bold;
    @include gradient-text($primary-gradient);
  }
}

.nav-links {
  display: flex;
  gap: 2rem;

  @include mobile {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    padding: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;

    &.nav-open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
}

.nav-link {
  color: $text-secondary;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: $text-primary;
    background: rgba(255, 255, 255, 0.1);
  }

  &.router-link-active {
    background: $primary-gradient;
    color: $text-primary;
  }
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: $text-primary;
  font-size: 1.5rem;
  cursor: pointer;

  @include mobile {
    display: block;
  }
}
</style>
