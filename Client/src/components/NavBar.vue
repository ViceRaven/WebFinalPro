<template>
  <nav class="navbar">
    <div class="left-section">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/About">About</router-link></li>
        <li><router-link to="/Contact/Index">Contact</router-link></li>
        <li><router-link to="/ExerciseDatabase">Exercise Database</router-link></li> <!-- Link to Exercise Database page -->
        <li v-if="loggedInUser"><router-link to="/Social">Social</router-link></li> <!-- Conditionally display Social link -->
        <li class="dropdown">
          <span>Users</span>
          <ul class="dropdown-content">
            <li v-for="user in users" :key="user.id" @click="handleUserClick(user)">
              {{ user.firstName }}
            </li>
          </ul>
        </li>
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
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAll } from '@/models/users';
import type { User } from '@/models/users';

const loggedInUser = ref<{ name: string, picture: string, adminAccess: boolean } | null>(null);
const users = ref<User[]>([]);
const router = useRouter();

const fetchUsers = async () => {
  try {
    const response = await getAll();
    users.value = response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

onMounted(() => {
  fetchUsers();
});

const handleUserClick = (user: User) => {
  if (loggedInUser.value) {
    alert("Please sign out before changing users.");
    return;
  }
  loggedInUser.value = { name: user.firstName, picture: user.profilePic, adminAccess: user.adminAccess };
  router.push({ name: 'ExercisePage', params: { userId: user.id } });
};

const logoutUser = () => {
  loggedInUser.value = null;
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

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  color: #333;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content li {
  padding: 12px 16px;
  cursor: pointer;
}

.dropdown-content li:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
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
</style>