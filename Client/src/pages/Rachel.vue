<template>
    <div class="profile-container">
      <h1>Rachel's Exercise Data</h1>
      <div class="exercise-section">
        <h2>Today</h2>
        <ul>
          <li v-for="(exercise, index) in todayExercises" :key="index">{{ exercise }}</li>
        </ul>
      </div>
      <div class="exercise-section">
        <h2>This Week</h2>
        <ul>
          <li v-for="(exercise, index) in weekExercises" :key="index">{{ exercise }}</li>
        </ul>
      </div>
      <div class="exercise-section">
        <h2>All Time</h2>
        <ul>
          <li v-for="(exercise, index) in allTimeExercises" :key="index">{{ exercise }}</li>
        </ul>
      </div>
      <div class="log-exercise-section">
        <h2>Log New Exercise</h2>
        <form @submit.prevent="addExercise">
          <input v-model="newExercise" placeholder="Enter exercise" required />
          <select v-model="exerciseCategory">
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="allTime">All Time</option>
          </select>
          <button type="submit">Add Exercise</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RachelProfile',
    data() {
      return {
        todayExercises: ['Running: 5 km', 'Yoga: 30 minutes'],
        weekExercises: ['Running: 25 km', 'Yoga: 3 hours', 'Swimming: 2 hours'],
        allTimeExercises: ['Running: 500 km', 'Yoga: 50 hours', 'Swimming: 20 hours'],
        newExercise: '',
        exerciseCategory: 'today'
      };
    },
    methods: {
      addExercise() {
        if (this.exerciseCategory === 'today') {
          this.todayExercises.push(this.newExercise);
        } else if (this.exerciseCategory === 'week') {
          this.weekExercises.push(this.newExercise);
        } else if (this.exerciseCategory === 'allTime') {
          this.allTimeExercises.push(this.newExercise);
        }
        this.newExercise = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .profile-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .exercise-section {
    margin-bottom: 20px;
  }
  
  h2 {
    color: #555;
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background-color: #fff;
    margin: 5px 0;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .log-exercise-section {
    margin-top: 30px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  input, select, button {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #007BFF;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>