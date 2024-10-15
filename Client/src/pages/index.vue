<template>
  <div class="container">
    <h1 class="shadow">Welcome to your online exercise tracker!</h1>
    
    
    <!-- Profile Display and Management -->
    <div v-if="profileCreated" class="profile">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {{ profile.name }}</p>
      <p><strong>Email:</strong> {{ profile.email }}</p>
      <button @click="editProfile">Edit Profile</button>
    </div>
    
    <form id="exercise-form">
      <input type="text" id="exercise" placeholder="Exercise" required>
      <input type="number" id="duration" placeholder="Duration (minutes)" required>
      <button type="submit">Add Exercise</button>
    </form>
    <ul id="exercise-list"></ul>
    
    <h2>Example Exercises</h2>
    <ul>
      <li v-for="exercise in exercises" :key="exercise.id">
        {{ exercise.name }} - {{ exercise.duration }} minutes
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      profile: {
        name: '',
        email: ''
      },
      profileCreated: false
    };
  },
  methods: {
    createProfile() {
      this.profileCreated = true;
    },
    editProfile() {
      this.profileCreated = false;
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

h1 {
  text-align: center;
  color: #333;
  font-size: 5em;
  font-family: 'Roboto', sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, button {
  padding: 10px;
  font-size: 16px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#exercise-list {
  margin-top: 20px;
}

#exercise-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}
.profile {
  margin-top: 20px;
  padding: 10px;
  background-color: #e9ecef;
  border-radius: 8px;
}
</style>

