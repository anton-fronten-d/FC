<template>
  <div class="about-page">
    <div class="page-header">
      <h1 class="page-title">О НАС</h1>
      <div class="page-line"></div>
      <p class="page-subtitle">Познакомьтесь с легендами ПЫРИК FC</p>
    </div>

    <div class="biography-section">
      <div v-for="player in players" :key="player.id" class="biography-card">
        <div class="bio-avatar">
          <div class="bio-image">
            <img class="bio-image" :src="player.img2" alt="Player.jpg" />
          </div>
          <div class="bio-rating">{{ player.rating }}</div>
        </div>

        <div class="bio-content">
          <h2 class="bio-name">{{ player.name }}</h2>
          <p class="bio-position">{{ player.position }} • №{{ player.number }}</p>
          <p class="bio-text">{{ player.biography }}</p>

          <div class="bio-stats">
            <div class="stat-item">
              <span class="stat-label">ВОЗРАСТ</span>
              <span class="stat-value">{{ player.age }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">ГОЛЫ</span>
              <span class="stat-value">{{ player.goals }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">МАТЧИ</span>
              <span class="stat-value">{{ player.matches }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePlayersStore } from '../stores/players'

const playersStore = usePlayersStore()
const players = computed(() => playersStore.players)
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

.about-page {
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

.page-header {
  @include page-header;
}

.page-title {
  @include page-title;
}

.page-line {
  @include page-line;
}

.page-subtitle {
  @include page-subtitle;
}

.biography-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 64rem;
  margin: 0 auto;
}

.biography-card {
  @include card-base;
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @include mobile {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }
}

.bio-avatar {
  flex-shrink: 0;
  position: relative;

  .bio-image {
    width: 8rem;
    height: 8rem;
    background: linear-gradient(135deg, #00d4ff, #a855f7);
    border-radius: 50%;
    @include flex-center;
    font-size: 4rem;
    object-fit: cover;
  }

  .bio-rating {
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: $secondary-gradient;
    color: #000;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: bold;
  }
}

.bio-content {
  flex: 1;

  .bio-name {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .bio-position {
    color: $text-accent;
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  .bio-text {
    color: $text-secondary;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
}

.bio-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.stat-item {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 0.75rem;
  text-align: center;

  .stat-label {
    display: block;
    color: #fbbf24;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .stat-value {
    display: block;
    font-size: 1.125rem;
    font-weight: bold;
  }
}
</style>
