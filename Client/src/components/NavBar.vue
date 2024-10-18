<template>
  <nav class="navbar">
    <div class="left-section">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li class="dropdown">
          <span>Users</span>
          <ul class="dropdown-content">
            <li @click="loginUser('Rachel', 'https://i.redd.it/dy6aw0azuicc1.jpeg')"><router-link to="/rachel">Rachel</router-link></li>
            <li @click="loginUser('Max', 'https://upload.wikimedia.org/wikipedia/en/2/20/MaxCaulfield.png')"><router-link to="/max">Max</router-link></li>
            <li @click="loginUser('Chloe', 'https://upload.wikimedia.org/wikipedia/en/9/95/ChloePriceLifeIsStrange.png')"><router-link to="/chloe">Chloe</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-if="loggedInUser" class="user-info">
      <img :src="loggedInUser.picture" alt="User Picture" class="user-picture" />
      <span>{{ loggedInUser.name }}</span>
      <button @click="logoutUser" class="logout-button">Sign Out</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const loggedInUser = ref<{ name: string, picture: string } | null>(null);
const router = useRouter();

function loginUser(name: string, picture: string) {
  loggedInUser.value = { name, picture };
}

function logoutUser() {
  loggedInUser.value = null;
  router.push('/');
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  flex-wrap: wrap; /* Ensure the navbar wraps properly */
}

.left-section {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 20px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav-links li {
  color: white;
  position: relative;
}

.nav-links li a {
  color: white;
  text-decoration: none;
}

.nav-links li a:hover {
  text-decoration: underline;
}

.dropdown {
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #444;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content li {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content li a {
  color: white;
}

.dropdown-content li:hover {
  background-color: #555;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.user-info {
  display: flex;
  align-items: center;
  color: white;
}

.user-picture {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.logout-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
}

.logout-button:hover {
  background-color: #d32f2f;
}
</style>