<template>
  <div class="awards-page">
    <div class="page-header">
      <h1 class="page-title awards-title">НАШИ НАГРАДЫ</h1>
      <div class="page-line awards-line"></div>
      <p class="page-subtitle">Трофеи и достижения ПЫРИК FC</p>
    </div>

    <div class="awards-grid">
      <AwardCard v-for="award in awards" :key="award.id" :award="award" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAwardsStore } from '../stores/awards'
import AwardCard from '../components/AwardCard.vue'

const awardsStore = useAwardsStore()
const awards = computed(() => awardsStore.awards)
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

.awards-page {
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

.awards-title {
  @include gradient-text($awards-gradient);
}

.page-line {
  @include page-line;
}

.awards-line {
  background: $awards-line;
}

.page-subtitle {
  @include page-subtitle;
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 75rem;
  margin: 0 auto;
}
</style>
