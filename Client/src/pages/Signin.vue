<template>
  <div class="signin-page">
    <h1>Sign In</h1>
    <div v-if="users.length > 0" class="user-list">
      <h2>Select Your Profile</h2>
      <ul>
        <li v-for="user in users" :key="user.id" @click="signIn(user)">
          {{ user.firstName }} {{ user.lastName }}
        </li>
      </ul>
    </div>
    <div v-else class="loading">
      <p>Loading profiles...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAll } from '@/models/users';  // Adjust the import according to your folder structure
import type { User } from '@/models/users';  // Import the User type

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

const signIn = (user: User) => {
  // Store logged-in user info in sessionStorage
  sessionStorage.setItem('loggedInUser', JSON.stringify({
    name: user.firstName,
    picture: user.profilePic,
    adminAccess: user.adminAccess
  }));
  // Navigate to the home page or any other page
  router.push('/');
};
</script>

<style scoped>
.signin-page {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.user-list {
  margin-top: 20px;
}

.user-list h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.user-list ul {
  list-style-type: none;
  padding: 0;
}

.user-list li {
  padding: 10px;
  margin: 5px 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.user-list li:hover {
  background-color: #e0e0e0;
}

.loading {
  font-size: 1.2em;
  color: #666;
}
</style>