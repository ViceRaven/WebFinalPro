<template>
    <div class="admin-page">
      <h1>User Management</h1>
      <div class="user-list">
        <h2>Users</h2>
        <ul>
          <li v-for="(user, index) in users" :key="user.id">
            <input v-model="user.name" @change="editUser(user)" />
            <button @click="deleteUser(index)">Delete</button>
          </li>
        </ul>
      </div>
      <div class="add-user">
        <h2>Add User</h2>
        <input v-model="newUserName" placeholder="Enter user name" />
        <button @click="addUser">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          { id: 1, name: 'Max' },
          { id: 2, name: 'Chloe' }
        ],
        newUserName: ''
      };
    },
    methods: {
      addUser() {
        if (this.newUserName.trim() !== '') {
          const newUser = {
            id: this.users.length + 1,
            name: this.newUserName
          };
          this.users.push(newUser);
          this.newUserName = '';
          this.updateNavbarUsers();
        }
      },
      editUser(user) {
        console.log(`User ${user.id} name changed to ${user.name}`);
        this.updateNavbarUsers();
      },
      deleteUser(index) {
        this.users.splice(index, 1);
        this.updateNavbarUsers();
      },
      updateNavbarUsers() {
        this.$emit('update-users', this.users);
      }
    },
    mounted() {
      this.updateNavbarUsers();
    }
  };
  </script>
  
  <style scoped>
  .admin-page {
    padding: 20px;
  }
  
  .user-list, .add-user {
    margin-bottom: 20px;
  }
  
  button {
    margin-left: 10px;
  }
  </style>