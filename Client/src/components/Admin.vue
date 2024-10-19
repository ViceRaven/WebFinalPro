<template>
  <div class="admin-wrapper">
    <h1>Admin Area</h1>
    <div class="user-list">
      <h2>Users</h2>
      <ul>
        <li v-for="(user, index) in users" :key="user.name">
          {{ user.name }} ({{ user.role }})
          <button @click="editUser(index)">Edit</button>
          <button @click="deleteUser(index)">Delete</button>
        </li>
      </ul>
      <div class="add-user">
        <input v-model="newUserName" placeholder="Enter user name" />
        <select v-model="newUserRole">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button @click="addUser">Add User</button>
      </div>
    </div>
  </div>
</template>

<script>
import { userStore } from '@/data/userStore';

export default {
  name: 'AdminArea',
  data() {
    return {
      users: userStore.users,
      newUserName: '',
      newUserRole: 'user'
    };
  },
  methods: {
    addUser() {
      if (this.newUserName.trim() !== '') {
        const newUser = {
          name: this.newUserName,
          role: this.newUserRole
        };
        userStore.addUser(newUser);
        this.newUserName = '';
        this.newUserRole = 'user';
      }
    },
    editUser(index) {
      const newName = prompt('Enter new name:', this.users[index].name);
      const newRole = prompt('Enter new role:', this.users[index].role);
      if (newName && newRole) {
        userStore.editUser(index, newName, newRole);
      }
    },
    deleteUser(index) {
      userStore.deleteUser(index);
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

.add-user {
  margin-top: 20px;
}

.add-user input, .add-user select {
  margin-right: 10px;
}
</style>