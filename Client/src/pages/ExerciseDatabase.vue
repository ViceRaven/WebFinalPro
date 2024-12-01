<template>
  <div class="exercise-list">
    <h1 class="title">Exercise List</h1>

    <!-- Search and Filter Controls -->
    <div class="filters">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search exercises..."
        class="search-input"
      />
      <select v-model="selectedDifficulty" class="difficulty-select">
        <option value="">All Difficulties</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>

    <!-- Exercise List -->
    <ul class="exercise-items">
      <li v-for="exercise in filteredExercises" :key="exercise.id" class="exercise-item">
        <div class="exercise-card">
          <h3 class="exercise-title">{{ exercise.title }}</h3>
          <p class="exercise-description">{{ exercise.description }}</p>
          <p class="exercise-difficulty">Difficulty: <strong>{{ exercise.difficulty }}</strong></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { api } from "@/models/myFetch";  // Adjust the import according to your folder structure

export default {
  data() {
    return {
      exercises: [] as { id: number; title: string; description: string; difficulty: string }[],  // Store exercises here
      searchQuery: '',  // Bind to search input
      selectedDifficulty: '',  // Bind to difficulty filter
    };
  },
  mounted() {
    this.fetchExercises();  // Fetch exercises when the component mounts
  },
  computed: {
    filteredExercises() {
      // Filter exercises based on search query and difficulty
      return this.exercises.filter(exercise => {
        const matchesSearch = exercise.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                              exercise.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesDifficulty = this.selectedDifficulty ? exercise.difficulty === this.selectedDifficulty : true;

        return matchesSearch && matchesDifficulty;
      });
    }
  },
  methods: {
    async fetchExercises() {
      try {
        const response = await api<{ data: any[] }>("exercises");
        console.log(response.data);  // Log the data to check if it's reversed
        this.exercises = response.data;  // Store exercises in the component state
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Global Styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
}

/* Exercise List Container */
.exercise-list {
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

.difficulty-select {
  width: 25%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #000000;
  border-radius: 5px;
}

/* Exercise Items List */
.exercise-items {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Individual Exercise Item */
.exercise-item {
  padding: 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

/* Hover Effect for Exercise Items */
.exercise-item:hover {
  background-color: #f1f1f1;
  transform: scale(1.02);
}

/* Exercise Card */
.exercise-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Exercise Title */
.exercise-title {
  font-size: 1.5em;
  color: #2c3e50;
  margin: 0;
  font-weight: bold;
}

/* Exercise Description */
.exercise-description {
  font-size: 1em;
  color: #7f8c8d;
  margin: 0;
}

/* Difficulty Level */
.exercise-difficulty {
  font-size: 1.1em;
  color: #ff2525; /* Change the color to blue */
}

/* Add padding to the last item to avoid double borders */
.exercise-items li:last-child {
  border-bottom: none;
}

.difficulty-select {
  width: 25%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #333;
}
</style>
