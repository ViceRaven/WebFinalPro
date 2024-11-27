<!-- src/components/ExerciseList.vue -->
<template>
    <div class="exercise-list">
      <h1>Exercise List</h1>
      
      <!-- Search Bar -->
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search for exercises"
        @input="fetchExercises"
        class="search-input"
      />
  
      <!-- Display exercises -->
      <div v-if="loading">Loading...</div>
      <div v-if="error" class="error">{{ error }}</div>
      
      <ul v-if="exercises.length">
        <li v-for="exercise in exercises" :key="exercise.id" class="exercise-item">
          <h2>{{ exercise.name }}</h2>
          <p>{{ exercise.description }}</p>
          <p><strong>Category:</strong> {{ exercise.category }}</p>
          <p><strong>Duration:</strong> {{ exercise.duration }} seconds</p>
        </li>
      </ul>
  
      <div v-else>No exercises found</div>
    </div>
  </template>
  
  <script>
  import supabase from '../supabase';
  
  export default {
    data() {
      return {
        exercises: [],        // List of exercises from Supabase
        searchTerm: '',        // User's search input
        loading: false,        // Loading state
        error: null,           // Error state
      };
    },
    methods: {
      async fetchExercises() {
        this.loading = true;
        this.error = null;
  
        try {
          // Query Supabase for exercises, applying search filter
          const { data, error } = await supabase
            .from('exercises')
            .select('*')
            .ilike('name', `%${this.searchTerm}%`);  // Use 'ilike' for case-insensitive search
  
          if (error) throw error;
  
          this.exercises = data;  // Update the exercises list
        } catch (err) {
          this.error = 'Error fetching exercises: ' + err.message;
        } finally {
          this.loading = false;
        }
      },
    },
    created() {
      this.fetchExercises();  // Fetch exercises when the component is created
    },
  };
  </script>
  
  <style scoped>
  .exercise-list {
    padding: 20px;
  }
  
  .search-input {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 400px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .exercise-item {
    margin-bottom: 20px;
  }
  
  .error {
    color: red;
  }
  
  h2 {
    margin: 0;
    font-size: 20px;
  }
  
  p {
    margin: 5px 0;
  }
  </style>
  