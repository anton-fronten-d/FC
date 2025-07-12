<template>
  <div class="award-card">
    <div class="award-icon">{{ award.icon }}</div>
    <h3 class="award-title">{{ award.title }}</h3>
    <p class="award-year">{{ award.year }}</p>
    <p class="award-description">{{ award.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  award: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

.award-card {
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2));
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(251, 191, 36, 0.3);
  text-align: center;
  @include card-hover;

  .award-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .award-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fbbf24;
    margin-bottom: 0.5rem;
  }

  .award-year {
    color: #f59e0b;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .award-description {
    color: $text-secondary;
  }
}
</style>
