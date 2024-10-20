<template>
    <div :style="{ backgroundColor: profile.backgroundColor }" class="container">
      <h1>Manage Profile Page</h1>
      <p>Welcome, {{ profile.username }}!</p>
      
      <form @submit.prevent="updateProfile">
        <div class="field">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="profile.username">
        </div>
        <div class="field">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="profile.email">
        </div>
        <div class="field">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="profile.password">
        </div>
        <div class="field">
          <label for="backgroundColor">Background Color:</label>
          <input type="color" id="backgroundColor" v-model="profile.backgroundColor">
        </div>
        <button type="submit">Update Profile</button>
      </form>
      
      <button @click="signOut">Sign Out</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { maxProfile, chloeProfile, rachelProfile, UserProfile } from '@/data/UserData';
  
  export default defineComponent({
    name: 'ManageProfile',
    setup() {
      const profile = reactive<UserProfile>({ ...maxProfile }); // Change this to dynamically load the correct profile
  
      const updateProfile = () => {
        // Logic to update the profile
        console.log('Profile updated:', profile);
      };
  
      const signOut = () => {
        // Logic to sign out the user
        console.log('User signed out');
      };
  
      return {
        profile,
        updateProfile,
        signOut
      };
    }
  });
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #333;
  }
  
  form {
    margin-top: 20px;
  }
  
  .field {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="text"], input[type="email"], input[type="password"], input[type="color"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>