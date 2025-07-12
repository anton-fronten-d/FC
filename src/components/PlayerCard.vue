<template>
  <div class="player-card" @click="goToPlayer">
    <div class="player-image">
      <div class="player-avatar">
        <img class="player-avatar" :src="player.img1" alt="Player.jpg" />
      </div>
      <div class="player-rating">{{ player.rating }}</div>
    </div>

    <div class="player-info">
      <h3 class="player-name">{{ player.name }}</h3>
      <p class="player-position">{{ player.position }}</p>
      <div class="player-stats">
        <span>Возраст: {{ player.age }}</span>
        <span>№{{ player.number }}</span>
      </div>
    </div>

    <div class="card-glow"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  player: {
    type: Object,
    required: true,
  },
})

const goToPlayer = () => {
  router.push(`/player/${props.player.id}`)
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

.player-card {
  position: relative;
  @include card-base;
  cursor: pointer;
  @include card-hover;
  overflow: hidden;

  .card-glow {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 212, 255, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 1rem;
  }

  &:hover {
    border-color: $hover-border;

    .card-glow {
      opacity: 1;
    }
  }
}

.player-image {
  position: relative;
  margin-bottom: 1rem;

  .player-avatar {
    width: 100%;
    height: 22rem;
    background: linear-gradient(135deg, #9c27b0, #00d4ff);
    border-radius: 0.75rem;
    @include flex-center;
    font-size: 4rem;
    object-fit: cover;
  }

  .player-rating {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: $secondary-gradient;
    color: #000;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: bold;
  }
}

.player-info {
  text-align: center;

  .player-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .player-position {
    color: $text-accent;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .player-stats {
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 0.875rem;
    color: $text-secondary;
  }
}
</style>
