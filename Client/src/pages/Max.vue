<template>
    <div class="container">
      <h1>Max's Exercise Data</h1>
      <div class="card">
        <h2>Today</h2>
        <ul>
          <li v-for="exercise in todayExercises" :key="exercise.id">{{ exercise.name }} - {{ exercise.duration }} mins</li>
        </ul>
      </div>
      <div class="card">
        <h2>This Week</h2>
        <ul>
          <li v-for="exercise in weekExercises" :key="exercise.id">{{ exercise.name }} - {{ exercise.duration }} mins</li>
        </ul>
      </div>
      <div class="card">
        <h2>All Time</h2>
        <ul>
          <li v-for="exercise in allTimeExercises" :key="exercise.id">{{ exercise.name }} - {{ exercise.duration }} mins</li>
        </ul>
      </div>
      
      <div class="card">
        <h2>Log New Exercise</h2>
        <form @submit.prevent="addExercise">
          <div class="field">
            <label for="name">Exercise Name:</label>
            <input type="text" v-model="newExercise.name" required>
          </div>
          <div class="field">
            <label for="duration">Duration (mins):</label>
            <input type="number" v-model="newExercise.duration" required>
          </div>
          <button type="submit">Add Exercise</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MaxExerciseData',
    data() {
      return {
        todayExercises: [
          { id: 1, name: 'Running', duration: 30 },
          { id: 2, name: 'Cycling', duration: 45 }
        ],
        weekExercises: [
          { id: 1, name: 'Running', duration: 30 },
          { id: 2, name: 'Cycling', duration: 45 },
          { id: 3, name: 'Swimming', duration: 60 },
          { id: 4, name: 'Yoga', duration: 40 }
        ],
        allTimeExercises: [
          { id: 1, name: 'Running', duration: 30 },
          { id: 2, name: 'Cycling', duration: 45 },
          { id: 3, name: 'Swimming', duration: 60 },
          { id: 4, name: 'Yoga', duration: 40 },
          { id: 5, name: 'Hiking', duration: 120 },
          { id: 6, name: 'Weightlifting', duration: 50 }
        ],
        newExercise: {
          name: '',
          duration: ''
        }
      };
    },
    methods: {
      addExercise() {
        const newId = this.allTimeExercises.length + 1;
        const exercise = { id: newId, ...this.newExercise };
        this.todayExercises.push(exercise);
        this.weekExercises.push(exercise);
        this.allTimeExercises.push(exercise);
        this.newExercise.name = '';
        this.newExercise.duration = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.5em;
  }
  
  h2 {
    color: #555;
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.5em;
  }
  
  .card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
    padding: 10px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
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
  
  input[type="text"], input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 20px;
    background: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  button:hover {
    background: #0056b3;
  }
  </style>