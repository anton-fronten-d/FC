<template>
  <div class="home-page">
    <div class="hero-section">
      <h1 class="hero-title">ПЫРИК FC</h1>
      <div class="hero-line"></div>
      <p class="hero-subtitle">Выберите игрока для просмотра детальной информации</p>
    </div>

    <div class="players-grid">
      <PlayerCard v-for="player in players" :key="player.id" :player="player" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePlayersStore } from '../stores/players'
import PlayerCard from '../components/PlayerCard.vue'

const playersStore = usePlayersStore()
const players = computed(() => playersStore.players)
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

.home-page {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-section {
  @include page-header;
}

.hero-title {
  @include page-title;
}

.hero-line {
  @include page-line;
}

.hero-subtitle {
  @include page-subtitle;
}

.players-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 75rem;
  margin: 0 auto;

  @include mobile {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
