<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  userInitials: {
    type: String,
    default: 'JD',
  },
});

const emit = defineEmits(['avatar-click']);

const route = useRoute();
const router = useRouter();

const navLinks = [
  { label: 'Menu', name: 'menu' },
  { label: 'Inbox', name: 'inbox' },
  { label: 'Events', name: 'events' },
];

function isActive(name) {
  return route.name === name;
}

function goTo(name) {
  router.push({ name });
}

function handleAvatarClick() {
  emit('avatar-click');
}
</script>

<template>
  <div class="topbar">
    <div class="topbar-brand">
      <div class="topbar-logo">ADNU</div>
      <div class="topbar-title">
        ATENEO DE NAGA UNIVERSITY<span>Intramurals 2026</span>
      </div>
    </div>

    <div class="topbar-nav">
      <a
        v-for="link in navLinks"
        :key="link.name"
        :class="{ active: isActive(link.name) }"
        @click="goTo(link.name)"
      >
        {{ link.label }}
      </a>
    </div>

    <div class="topbar-actions">
      <div class="avatar" @click="handleAvatarClick">
        {{ userInitials }}
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap');

.topbar {
  background: #1a1f5e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: 'Inter', sans-serif;
  color: #ffffff;
}

.topbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.topbar-logo {
  width: 42px;
  height: 36px;
  border-radius: 8px;
  background: #2d2fa8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  flex-shrink: 0;
}

.topbar-title {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 11px;
  line-height: 1.2;
  letter-spacing: 0.5px;
}

.topbar-title span {
  display: block;
  color: #9ea3c8;
  font-size: 10px;
  font-weight: 500;
}

.topbar-nav {
  display: flex;
  gap: 4px;
}

.topbar-nav a {
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #9ea3c8;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
}

.topbar-nav a:hover,
.topbar-nav a.active {
  background: #2d2fa8;
  color: #ffffff;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #4b4fd9;
  border: 2px solid #00c9b1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 640px) {
  .topbar-nav {
    display: none;
  }
}
</style>