<template>
  <nav class="navbar">
    <div class="left-section">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/ExerciseDatabase">Exercise Database</router-link></li> 
        <li v-if="loggedInUser"><router-link to="/Social">Social</router-link></li> 
      </ul>
    </div>
    <div v-if="loggedInUser" class="user-info">
      <img :src="loggedInUser.picture" alt="User Picture" class="user-picture" />
      <router-link :to="'/ExercisePage'">{{ loggedInUser.name }}</router-link>
      <router-link to="/Profile" class="profile-management-link">Profile Management</router-link>
      <button @click="logoutUser" class="logout-button">Sign Out</button>
    </div>
    <div v-if="loggedInUser && loggedInUser.adminAccess" class="admin-link">
      <router-link to="/Admin">Admin</router-link>
    </div>
    <div v-else-if="!loggedInUser" class="login-link">
      <router-link to="/Login" class="login-button">Login</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useLoggedInUser } from '@/models/useLoggedInUser';

const { loggedInUser, setLoggedInUser, clearLoggedInUser } = useLoggedInUser();
const router = useRouter();

onMounted(() => {
  // Ensure loggedInUser is reactive
  const storedUser = sessionStorage.getItem('loggedInUser');
  if (storedUser) {
    setLoggedInUser(JSON.parse(storedUser));
  }
});

const logoutUser = () => {
  clearLoggedInUser();
  router.push('/');
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
}

.left-section {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 10px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-picture {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.logout-button {
  background-color: #ff2525;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.logout-button:hover {
  background-color: #ff0000;
}

.admin-link {
  margin-left: 20px;
}

.profile-management-link {
  padding: 5px 10px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.profile-management-link:hover {
  background-color: #0056b3;
}

.login-link {
  margin-left: 20px;
}

.login-button {
  padding: 5px 10px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
