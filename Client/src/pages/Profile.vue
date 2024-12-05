<template>
    <div class="user-list">
      <h1 class="title">My Profile</h1>
  
      <!-- User Profile Section -->
      <div v-if="currentUser" class="user-item">
        <div class="user-card">
          <img :src="currentUser.profilePic || '/default-profile.png'" alt="Profile Picture" class="profile-pic" />
          <h3 class="user-name">{{ currentUser.firstName }} {{ currentUser.lastName }}</h3>
          <p class="user-email">{{ currentUser.email }}</p>
          <p class="user-role">Role: <strong>{{ currentUser.adminAccess ? 'Admin' : 'User' }}</strong></p>
          
          <!-- Edit Profile Button -->
          <button @click="startEditing" class="edit-profile-btn">Edit Profile</button>
        </div>
      </div>
  
      <!-- Edit Profile Form -->
      <div v-if="isEditing && currentUser" class="edit-user">
        <h2>Edit Profile</h2>
        <input v-model="editingUser.firstName" placeholder="First Name" />
        <input v-model="editingUser.lastName" placeholder="Last Name" />
        <input v-model="editingUser.email" placeholder="Email" />
        <input v-model="editingUser.profilePic" placeholder="Profile Picture URL" />
        
        <div class="edit-buttons">
          <button @click="updateProfile" class="update-btn">Update Profile</button>
          <button @click="cancelEdit" class="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { getById, update } from '@/models/users';
  import type { User } from '@/models/users';
  import { useLoggedInUser } from '@/models/useLoggedInUser';
  
  export default defineComponent({
    setup() {
      const { loggedInUser } = useLoggedInUser();
      const currentUser = ref<User | null>(null);
      const isEditing = ref(false);
      const editingUser = ref<User | null>(null);
  
      const fetchCurrentUser = async () => {
        try {
          const response = await getById(loggedInUser.value.id);
          currentUser.value = response.data;
        } catch (error) {
          console.error("Error fetching current user:", error);
        }
      };
  
      const startEditing = () => {
        if (currentUser.value) {
          editingUser.value = { ...currentUser.value };
          isEditing.value = true;
        }
      };
  
      const updateProfile = async () => {
        if (!editingUser.value) return;
  
        try {
          const response = await update(editingUser.value);
          
          // Update the current user with the response data
          currentUser.value = response.data;
          
          // Update session storage with new user info
          sessionStorage.setItem('loggedInUser', JSON.stringify(currentUser.value));
          
          // Reset editing state
          isEditing.value = false;
          editingUser.value = null;
        } catch (error) {
          console.error("Error updating user:", error);
          alert("Failed to update profile. Please try again.");
        }
      };
  
      const cancelEdit = () => {
        isEditing.value = false;
        editingUser.value = null;
      };
  
      onMounted(() => {
        fetchCurrentUser();
      });
  
      return {
        currentUser,
        isEditing,
        editingUser,
        startEditing,
        updateProfile,
        cancelEdit
      };
    }
  });
  </script>
  
  <style scoped>
  /* The existing styles remain the same as in the original component */
  /* Global Styles */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
  }
  
  /* User List Container */
  .user-list {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  /* Title Styles */
  .title {
    text-align: center;
    color: #333;
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  /* User Items List */
  .user-items {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  /* Individual User Item */
  .user-item {
    padding: 15px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
  }
  
  /* User Card */
  .user-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  /* User Name */
  .user-name {
    font-size: 1.5em;
    color: #2c3e50;
    margin: 0;
    font-weight: bold;
  }
  
  /* User Email */
  .user-email {
    font-size: 1em;
    color: #7f8c8d;
    margin: 0;
  }
  
  /* User Role */
  .user-role {
    font-size: 1.1em;
    color: #ff2525;
  }
  
  /* Profile Picture */
  .profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
  }
  
  /* Edit Profile Button */
  .edit-profile-btn {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .edit-profile-btn:hover {
    background-color: #0056b3;
  }
  
  /* Edit User Form */
  .edit-user {
    margin-top: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .edit-user input {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .edit-buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .update-btn {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #28a745;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .update-btn:hover {
    background-color: #218838;
  }
  
  .cancel-btn {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #6c757d;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .cancel-btn:hover {
    background-color: #545b62;
  }
  </style>