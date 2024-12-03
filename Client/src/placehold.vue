<template>
    <div class="user-list">
        <h1 class="title">User List</h1>

        <!-- Search and Filter Controls -->
        <div class="filters">
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Search users..."
                class="search-input"
            />
            <select v-model="selectedRole" class="role-select">
                <option value="">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
        </div>

        <!-- Add User Form -->
        <div class="add-user">
            <h2>Add User</h2>
            <input v-model="newUser.firstName" placeholder="Name" />
            <input v-model="newUser.email" placeholder="Email" />
            <select v-model="newUser.adminAccess">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
            <button @click="addUser">Add User</button>
        </div>

        <!-- User List -->
        <ul class="user-items">
            <li v-for="user in filteredUsers" :key="user.id" class="user-item">
                <div class="user-card">
                    <h3 class="user-name">{{ user.firstName }} </h3>
                    <p class="user-email">{{ user.email }}</p>
                    <p class="user-role">Role: <strong>{{ user.adminAccess ? 'Admin' : 'User' }}</strong></p>
                    <button @click="deleteUser(user.id)">Delete</button>
                    <button @click="editUser(user.id)">Edit</button>
                </div>
            </li>
        </ul>

        <!-- Edit User Form -->
        <div v-if="editingUser" class="edit-user">
          <h2>Edit User</h2>
          <input v-model="editingUser.firstName" placeholder="First Name" />
          <input v-model="editingUser.lastName" placeholder="Last Name" />
          <input v-model="editingUser.email" placeholder="Email" />
          <input v-model="editingUser.profilePic" placeholder="Profile Picture URL" />
          <select v-model="editingUser.adminAccess">
            <option :value="true">Admin</option>
            <option :value="false">User</option>
          </select>
          <button @click="updateUser">Update User</button>
          <button @click="cancelEdit">Cancel</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAll, create, remove, getById, update } from '@/models/users';  // Adjust the import according to your folder structure
import type { User } from '@/models/users';  // Import the User type

export default defineComponent({
    data() {
        return {
            users: [] as User[],  // Store users here
            searchQuery: '',  // Bind to search input
            selectedRole: '',  // Bind to role filter
            newUser: { firstName: '', lastName:'' ,email: '', profilePic:'', adminAccess: false },  // New user data
            editingUser: null as User | null  // User being edited
        };
    },
    mounted() {
        this.fetchUsers();  // Fetch users when the component mounts
    },
    computed: {
        filteredUsers() {
      // Filter users based on search query
      return this.users.filter(user => {
        const matchesSearch = user.firstName.toLowerCase().includes(this.searchQuery.toLowerCase())|| 
       user.lastName.toLowerCase().includes(this.searchQuery.toLowerCase())||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesSearch;
      });
        }
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await getAll();
                this.users = response.data;  // Store users in the component state
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        },
        async addUser() {
            try {
                const response = await create(this.newUser as User);
                this.users.push(response.data);  // Add the new user to the list
                this.newUser = { firstName: '', lastName:'' ,email: '', profilePic:'', adminAccess: false };  // Reset the form
            } catch (error) {
                console.error("Error adding user:", error);
            }
        },
        async deleteUser(id: number) {
            try {
                await remove(id);
                this.users = this.users.filter(user => user.id !== id);  // Remove the user from the list
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        },
        async editUser(id: number) {
            try {
                const response = await getById(id);
                this.editingUser = response.data;  // Set the user to be edited
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        },
        async updateUser() {
            if (!this.editingUser) return;

            try {
                const response = await update(this.editingUser);
                const index = this.users.findIndex(user => user.id === this.editingUser!.id);
                if (index !== -1) {
                    this.users.splice(index, 1, response.data);  // Update the user in the list
                }
                this.editingUser = null;  // Reset the editing state
            } catch (error) {
                console.error("Error updating user:", error);
            }
        },
        cancelEdit() {
            this.editingUser = null;  // Reset the editing state
        }
    }
});
</script>

<style scoped>
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

/* Search and Filter Controls */
.filters {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.search-input {
    width: 70%;
    padding: 8px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.role-select {
    width: 25%;
    padding: 8px;
    font-size: 1em;
    border: 1px solid #000000;
    border-radius: 5px;
}

/* Add User Form */
.add-user {
    margin-bottom: 20px;
}

.add-user input,
.add-user select {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.add-user button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.add-user button:hover {
    background-color: #0056b3;
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

/* Hover Effect for User Items */
.user-item:hover {
    background-color: #f1f1f1;
    transform: scale(1.02);
}

/* User Card */
.user-card {
    width: 100%;
    display: flex;
    flex-direction: column;
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

/* Role Level */
.user-role {
    font-size: 1.1em;
    color: #ff2525; /* Change the color to blue */
}

/* Add padding to the last item to avoid double borders */
.user-items li:last-child {
    border-bottom: none;
}

.role-select {
    width: 25%;
    padding: 8px;
    font-size: 1em;
    border: 1px solid #000000;
    border-radius: 5px;
    color: #333;
}
</style>
