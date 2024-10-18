<template>
    <div class="admin-wrapper">
      <h1>Admin Area</h1>
      <div class="user-list">
        <h2>Users</h2>
        <ul>
          <li v-for="user in users" :key="user.name">
            {{ user.name }} ({{ user.role }})
            <button @click="editUser(user)">Edit</button>
            <button @click="deleteUser(user)">Delete</button>
          </li>
        </ul>
        <button @click="addUser">Add User</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminArea',
    data() {
      return {
        users: [
          { name: 'Max', role: 'admin' },
          { name: 'Andy', role: 'user' },
          { name: 'David', role: 'user' }
        ]
      };
    },
    methods: {
      addUser() {
        // Logic to add a new user
      },
      editUser() {
        // Logic to edit a user
      },
      deleteUser() {
        // Logic to delete a user
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-wrapper {
    padding: 20px;
  }
  
  .user-list {
    margin-top: 20px;
  }
  
  button {
    margin-left: 10px;
  }
  </style>