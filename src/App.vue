<template>
  <div class="app">
    <VHeader />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import VHeader from './components/VHeader.vue'
</script>

<style lang="scss">
@use './assets/variables' as *;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: $dark-bg;
  font-family: 'Arial', sans-serif;
  color: $text-primary;
}

.main-content {
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
}
</style>
