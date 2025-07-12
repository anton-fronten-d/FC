<template>
  <div class="contacts-page">
    <div class="page-header">
      <h1 class="page-title contacts-title">КОНТАКТЫ</h1>
      <div class="page-line contacts-line"></div>
      <p class="page-subtitle">Свяжитесь с ПЫРИК FC</p>
    </div>

    <div class="contacts-content">
      <div class="contact-info">
        <h2 class="contact-section-title">Контактная информация</h2>
        <div class="contact-items">
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span class="contact-text">г. Москва, ул. Футбольная, 1</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <span class="contact-text">+7 (111) 111-11-11</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">✉️</span>
            <span class="contact-text">info@пырик.fc</span>
          </div>
        </div>

        <div class="social-section">
          <h3 class="social-title">Социальные сети</h3>
          <div class="social-links">
            <div class="social-link vk">VK</div>
            <div class="social-link telegram">TG</div>
            <div class="social-link youtube">YT</div>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <h2 class="contact-section-title">Написать нам</h2>
        <form @submit.prevent="submitForm" class="form">
          <input v-model="form.name" type="text" placeholder="Ваше имя" class="form-input" />
          <input v-model="form.email" type="email" placeholder="Email" class="form-input" />
          <textarea
            v-model="form.message"
            placeholder="Сообщение"
            rows="4"
            class="form-textarea"
          ></textarea>
          <button type="submit" class="form-submit">Отправить сообщение</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  alert('Сообщение отправлено!')
  form.value = { name: '', email: '', message: '' }
}
</script>

<style lang="scss" scoped>
@use '../assets/variables' as *;
@use '../assets/mixins' as *;

.contacts-page {
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

.contacts-title {
  @include gradient-text($contacts-gradient);
}

.page-line {
  @include page-line;
}

.contacts-line {
  background: $contacts-line;
}

.page-subtitle {
  @include page-subtitle;
}

.contacts-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.contact-info,
.contact-form {
  @include card-base;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.contact-section-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #10b981;
  margin-bottom: 1.5rem;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .contact-icon {
    font-size: 1.25rem;
    color: #10b981;
  }

  .contact-text {
    color: $text-secondary;
  }
}

.social-section {
  .social-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #10b981;
    margin-bottom: 1rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    @include flex-center;
    color: $text-primary;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &.vk {
      background: #4c75a3;
      &:hover {
        background: #5a87ba;
      }
    }

    &.telegram {
      background: #0088cc;
      &:hover {
        background: #0099dd;
      }
    }

    &.youtube {
      background: #ff0000;
      &:hover {
        background: #ff1a1a;
      }
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #334155;
  border: 1px solid #475569;
  border-radius: 0.5rem;
  color: $text-primary;
  font-size: 1rem;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #10b981;
  }
}

.form-submit {
  width: 100%;
  background: $contacts-gradient;
  color: $text-primary;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #059669, #2563eb);
    transform: translateY(-2px);
  }
}
</style>
