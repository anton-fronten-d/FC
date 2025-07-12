<template>
  <div class="sponsorship-page">
    <div class="page-header">
      <h1 class="page-title sponsorship-title">СПОНСОРСТВО</h1>
      <div class="page-line sponsorship-line"></div>
      <p class="page-subtitle">Станьте частью легенды ПЫРИК FC</p>
    </div>

    <div class="sponsorship-content">
      <div class="why-section">
        <h2 class="why-title">Почему ПЫРИК FC?</h2>
        <div class="why-grid">
          <div class="why-item">
            <div class="why-icon">🏆</div>
            <h3 class="why-item-title">Успех</h3>
            <p class="why-item-text">Множество побед и титулов</p>
          </div>
          <div class="why-item">
            <div class="why-icon">👥</div>
            <h3 class="why-item-title">Аудитория</h3>
            <p class="why-item-text">Миллионы фанатов по всему миру</p>
          </div>
          <div class="why-item">
            <div class="why-icon">⚡</div>
            <h3 class="why-item-title">Инновации</h3>
            <p class="why-item-text">Современный подход к футболу</p>
          </div>
        </div>
      </div>

      <div class="packages-section">
        <div class="package-card champion">
          <h3 class="package-title">Пакет "Чемпион"</h3>
          <ul class="package-features">
            <li>• Логотип на форме команды</li>
            <li>• Реклама на стадионе</li>
            <li>• Упоминание в соцсетях</li>
            <li>• VIP места на матчах</li>
          </ul>
          <div class="package-price">от 500,000₽</div>
        </div>

        <div class="package-card legend">
          <h3 class="package-title">Пакет "Легенда"</h3>
          <ul class="package-features">
            <li>• Все из пакета "Чемпион"</li>
            <li>• Название стадиона</li>
            <li>• Эксклюзивные мероприятия</li>
            <li>• Персональный менеджер</li>
          </ul>
          <div class="package-price">от 2,000,000₽</div>
        </div>
      </div>

      <div class="sponsor-cta">
        <button @click="contactSponsor" class="sponsor-btn">Стать спонсором</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const contactSponsor = () => {
  alert(
    'Спасибо за интерес! Заполните форму на странице "Контакты" и наш менеджер свяжется с вами в ближайшее время.',
  )
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

.sponsorship-page {
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

.sponsorship-title {
  @include gradient-text($sponsorship-gradient);
}

.page-line {
  @include page-line;
}

.sponsorship-line {
  background: $sponsorship-line;
}

.page-subtitle {
  @include page-subtitle;
}

.sponsorship-content {
  max-width: 75rem;
  margin: 0 auto;
}

.why-section {
  @include card-base;
  border: 1px solid rgba(168, 85, 247, 0.3);
  margin-bottom: 2rem;

  .why-title {
    font-size: 2rem;
    font-weight: bold;
    color: #a855f7;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .why-item {
    text-align: center;

    .why-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .why-item-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .why-item-text {
      color: $text-secondary;
    }
  }
}

.packages-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.package-card {
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid;

  &.champion {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2));
    border-color: rgba(168, 85, 247, 0.3);

    .package-title {
      color: #a855f7;
    }

    .package-price {
      color: #a855f7;
    }
  }

  &.legend {
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2));
    border-color: rgba(236, 72, 153, 0.3);

    .package-title {
      color: #ec4899;
    }

    .package-price {
      color: #ec4899;
    }
  }

  .package-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .package-features {
    list-style: none;
    margin-bottom: 1.5rem;

    li {
      color: $text-secondary;
      margin-bottom: 0.5rem;
    }
  }

  .package-price {
    font-size: 2rem;
    font-weight: bold;
  }
}

.sponsor-cta {
  text-align: center;
}

.sponsor-btn {
  background: $sponsorship-gradient;
  color: $text-primary;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #9333ea, #db2777);
    transform: scale(1.05);
  }
}
</style>
