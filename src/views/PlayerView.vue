<template>
  <div class="player-detail-page">
    <div v-if="player" class="fifa-card">
      <div class="fifa-header">
        <span class="fifa-club">ПЫРИК FC</span>
      </div>

      <div class="fifa-rating">{{ player.rating }}</div>

      <div class="fifa-player">
        <div class="fifa-avatar">
          <img class="fifa-avatar" :src="player.img2" alt="Player.jpg" />
        </div>
        <h2 class="fifa-name">{{ player.name }}</h2>
        <p class="fifa-position">{{ player.position }}</p>
      </div>

      <div class="fifa-basic-stats">
        <div class="fifa-stat">
          <span class="fifa-stat-label">ВОЗРАСТ</span>
          <span class="fifa-stat-value">{{ player.age }}</span>
        </div>
        <div class="fifa-stat">
          <span class="fifa-stat-label">НОМЕР</span>
          <span class="fifa-stat-value">{{ player.number }}</span>
        </div>
      </div>

      <div class="fifa-detailed-stats">
        <div v-for="stat in player.stats" :key="stat.name" class="fifa-stat-row">
          <span class="fifa-stat-name">{{ stat.name }}</span>
          <div class="fifa-stat-bar">
            <div class="fifa-stat-fill" :style="{ width: stat.value + '%' }"></div>
          </div>
          <span class="fifa-stat-number">{{ stat.value }}</span>
        </div>
      </div>

      <div class="fifa-info">
        <h3 class="fifa-info-title">ИНФОРМАЦИЯ</h3>
        <p class="fifa-info-text">{{ player.description }}</p>
      </div>

      <router-link to="/" class="fifa-back-btn">← Назад к команде</router-link>
    </div>

    <div v-else class="not-found">
      <h2>Игрок не найден</h2>
      <router-link to="/" class="back-link">Вернуться на главную</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePlayersStore } from '../stores/players'

const playersStore = usePlayersStore()

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const player = computed(() => playersStore.getPlayerById(props.id))
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

.player-detail-page {
  @include flex-center;
  min-height: 80vh;
  padding: 1rem;
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

.fifa-card {
  position: relative;
  background: linear-gradient(135deg, #1e3a8a, #7c3aed, #312e81);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 4px solid #fbbf24;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  max-width: 28rem;
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @include mobile {
    padding: 1.5rem;
  }
}

.fifa-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background: $secondary-gradient;
  border-radius: 1rem 1rem 0 0;
  @include flex-center;

  .fifa-club {
    color: #000;
    font-weight: bold;
    font-size: 1.125rem;
  }
}

.fifa-rating {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 4rem;
  height: 4rem;
  background: $secondary-gradient;
  border-radius: 50%;
  @include flex-center;
  border: 4px solid $text-primary;
  color: #000;
  font-weight: bold;
  font-size: 1.25rem;
}

.fifa-player {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;

  .fifa-avatar {
    width: 8rem;
    height: 8rem;
    margin: 0 auto;
    background: linear-gradient(135deg, #00d4ff, #a855f7);
    border-radius: 50%;
    @include flex-center;
    font-size: 4rem;
    object-fit: cover;
  }

  .fifa-name {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .fifa-position {
    color: #fbbf24;
    font-weight: 600;
    font-size: 1.125rem;
  }
}

.fifa-basic-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.fifa-stat {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 0.75rem;
  text-align: center;

  .fifa-stat-label {
    display: block;
    color: #fbbf24;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .fifa-stat-value {
    display: block;
    font-size: 1.25rem;
    font-weight: bold;
  }
}

.fifa-detailed-stats {
  margin-bottom: 1.5rem;
}

.fifa-stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  .fifa-stat-name {
    color: $text-secondary;
    font-size: 0.875rem;
    min-width: 80px;
  }

  .fifa-stat-bar {
    width: 6rem;
    height: 0.5rem;
    background: #374151;
    border-radius: 9999px;
    overflow: hidden;
    margin: 0 0.5rem;

    .fifa-stat-fill {
      height: 100%;
      background: linear-gradient(to right, #10b981, #fbbf24);
      transition: width 0.5s ease;
    }
  }

  .fifa-stat-number {
    color: $text-primary;
    font-size: 0.875rem;
    font-weight: bold;
    width: 2rem;
    text-align: right;
  }
}

.fifa-info {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;

  .fifa-info-title {
    color: #fbbf24;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .fifa-info-text {
    color: $text-secondary;
    font-size: 0.875rem;
  }
}

.fifa-back-btn {
  display: block;
  width: 100%;
  background: linear-gradient(135deg, #00d4ff, #a855f7);
  color: $text-primary;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #0ea5e9, #9333ea);
    transform: scale(1.05);
  }
}

.not-found {
  text-align: center;
  color: $text-primary;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .back-link {
    color: $text-accent;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
