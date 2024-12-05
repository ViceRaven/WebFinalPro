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
import { defineComponent } from 'vue';
import { getAll, create, remove, getById, update } from '@/models/users';
import type { User } from '@/models/users';

export default defineComponent({
  data() {
    return {
      currentUser: null as User | null,
      isEditing: false,
      editingUser: null as User | null
    };
  },
  mounted() {
    this.fetchCurrentUser();
  },
  methods: {
    async fetchCurrentUser() {
      try {
        // Assuming there's a method to get the logged-in user
        const response = await getAll(); // This might need to be replaced with a getCurrentUser method
        
        // In a real-world scenario, you'd typically have a way to identify the logged-in user
        // For this example, we'll just take the first user
        if (response.data && response.data.length > 0) {
          this.currentUser = response.data[0];
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    },
    
    startEditing() {
      if (this.currentUser) {
        this.editingUser = { ...this.currentUser };
        this.isEditing = true;
      }
    },
    
    async updateProfile() {
      if (!this.editingUser) return;

      try {
        const response = await update(this.editingUser);
        console.log('Updated user:', response.data);
        
        // Update the current user with the response data
        this.currentUser = response.data;
        
        // Reset editing state
        this.isEditing = false;
        this.editingUser = null;
      } catch (error) {
        console.error("Error updating user:", error);
        // Optionally, show an error message to the user
        alert("Failed to update profile. Please try again.");
      }
    },
    
    cancelEdit() {
      this.isEditing = false;
      this.editingUser = null;
    }
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