<template>
    <div class="login-page">
      <h1>Login</h1>
      <div v-if="users.length > 0" class="user-list">
        <h2>Select Your Profile</h2>
        <ul>
          <li v-for="user in users" :key="user.id" @click="selectUser(user)">
            {{ user.firstName }} {{ user.lastName }}
          </li>
        </ul>
      </div>
      <div v-else class="loading">
        <p>Loading profiles...</p>
      </div>
  
      <!-- Password Modal -->
      <div v-if="selectedUser" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h2>Enter Password for {{ selectedUser.firstName }}</h2>
          <input type="password" v-model="password" placeholder="Password" />
          <button @click="login">Login</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAll } from '@/models/users';  // Adjust the import according to your folder structure
  import type { User } from '@/models/users';  // Import the User type
  import { useLoggedInUser } from '@/models/useLoggedInUser';
  
  const users = ref<User[]>([]);
  const selectedUser = ref<User | null>(null);
  const password = ref('');
  const router = useRouter();
  const { setLoggedInUser } = useLoggedInUser();
  
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
  
  const selectUser = (user: User) => {
    selectedUser.value = user;
  };
  
  const closeModal = () => {
    selectedUser.value = null;
    password.value = '';
  };
  
  const login = () => {
    if (password.value) {
      setLoggedInUser({
        id: selectedUser.value!.id,
        name: selectedUser.value!.firstName,
        picture: selectedUser.value!.profilePic,
        adminAccess: selectedUser.value!.adminAccess
      });
      router.push('/');
    } else {
      alert('Please enter a password.');
    }
  };
  </script>
  
  <style scoped>
  .login-page {
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
  
  /* Modal Styles */
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 1.5em;
    cursor: pointer;
  }
  
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>