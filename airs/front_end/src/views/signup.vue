<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const fname = ref('');
const lname = ref('');
const sid = ref('');
const email = ref('');
const dept = ref('');
const year = ref('');
const password = ref('');

function handleSignup() {
  if (
    !fname.value.trim() ||
    !lname.value.trim() ||
    !sid.value.trim() ||
    !email.value.trim() ||
    !dept.value ||
    !year.value ||
    !password.value.trim()
  ) {
    alert('Please fill in all required fields.');
    return;
  }

  // TODO: replace with real API call to back_end
  router.push('/main');
}

function goToLogin() {
  router.push('/login');
}

function goToLanding() {
  router.push('/');
}
</script>

<template>
  <div id="page-signup" class="page">
    <div class="auth-page">
      <div class="auth-card">
        <div class="logo-row">
          <div class="topbar-logo">ADNU</div>
          <div class="topbar-title">
            ATENEO DE NAGA UNIVERSITY<span>Intramurals 2026</span>
          </div>
        </div>
        <h2>Create Account</h2>
        <p class="sub">Register to join your department's intramural team.</p>

        <div class="form-row">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" v-model="fname" placeholder="Juan" />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" v-model="lname" placeholder="dela Cruz" />
          </div>
        </div>

        <div class="form-group">
          <label>Student ID</label>
          <input type="text" v-model="sid" placeholder="2026-00000" />
        </div>

        <div class="form-group">
          <label>Email Address</label>
          <input
            type="email"
            v-model="email"
            placeholder="juan@student.adnu.edu.ph"
          />
        </div>

        <div class="form-group">
          <label>Department</label>
          <select v-model="dept">
            <option value="">Select Department</option>
            <option>IT</option>
            <option>CS</option>
            <option>IS</option>
            <option>DIA</option>
          </select>
        </div>

        <div class="form-group">
          <label>Year Level</label>
          <select v-model="year">
            <option value="">Select Year Level</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" placeholder="••••••••" />
        </div>

        <button class="btn-primary full-width" @click="handleSignup">
          Create Account
        </button>

        <div class="auth-link">
          Already have an account? <a @click="goToLogin">Sign in here</a>
        </div>
        <div class="auth-link mt-12">
          <a @click="goToLanding">← Back to home</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap');

.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  color: #ffffff;
}

.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(160deg, #0d0f2b 0%, #131640 100%);
  padding: 24px;
  width: 100%;
}

.auth-card {
  background: #1a1f5e;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 36px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
}

.auth-card .logo-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
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

.auth-card h2 {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.auth-card p.sub {
  color: #9ea3c8;
  font-size: 13px;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #9ea3c8;
  margin-bottom: 6px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 11px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  transition: border-color 0.2s;
  outline: none;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #4b4fd9;
}

.form-group select option {
  background: #1a1f5e;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.btn-primary {
  background: linear-gradient(135deg, #2d2fa8, #4b4fd9);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 13px 32px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 20px rgba(75, 79, 217, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(75, 79, 217, 0.55);
}

.full-width {
  width: 100%;
}

.mt-12 {
  margin-top: 12px;
}

.auth-link {
  font-size: 13px;
  color: #9ea3c8;
  text-align: center;
  margin-top: 16px;
}

.auth-link a {
  color: #5b8cff;
  cursor: pointer;
  text-decoration: none;
}

.auth-link a:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>