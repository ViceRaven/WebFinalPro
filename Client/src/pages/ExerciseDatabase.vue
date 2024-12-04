<template>
  <div class="exercise-list">
    <h1 class="title">Exercise Database</h1>

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

    <!-- Add Exercise Form -->
    <div class="add-exercise">
      <h2>Add Exercise</h2>
      <input v-model="newExercise.title" placeholder="Title" />
      <input v-model="newExercise.description" placeholder="Description" />
      <select v-model="newExercise.difficulty">
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <button @click="addExercise">Add Exercise</button>
    </div>

    <!-- Exercise List -->
    <ul class="exercise-items">
      <li v-for="exercise in filteredExercises" :key="exercise.id" class="exercise-item">
        <div class="exercise-card">
          <h3 class="exercise-title">{{ exercise.title }}</h3>
          <p class="exercise-description">{{ exercise.description }}</p>
          <p class="exercise-difficulty">Difficulty: <strong>{{ exercise.difficulty }}</strong></p>
          <button @click="deleteExercise(exercise.id)">Delete</button>
          <button @click="editExercise(exercise.id)">Edit</button>
        </div>
        <!-- Edit Exercise Form -->
        <div v-if="editingExercise && editingExercise.id === exercise.id" class="edit-exercise">
          <h2>Edit Exercise</h2>
          <input v-model="editingExercise.title" placeholder="Title" />
          <input v-model="editingExercise.description" placeholder="Description" />
          <select v-model="editingExercise.difficulty">
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <button @click="updateExercise">Update Exercise</button>
          <button @click="cancelEdit">Cancel</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAll, create, remove, getById, update } from '@/models/exercise';  // Adjust the import according to your folder structure
import type { Exercise } from '@/models/exercise';  // Import the Exercise type

export default defineComponent({
  data() {
    return {
      exercises: [] as Exercise[],  // Store exercises here
      searchQuery: '',  // Bind to search input
      selectedDifficulty: '',  // Bind to difficulty filter
      newExercise: { title: '', description: '', difficulty: 'Easy' },  // New exercise data
      editingExercise: null as Exercise | null  // Exercise being edited
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
        const response = await getAll();
        this.exercises = response.data;  // Store exercises in the component state
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    },
    async addExercise() {
      if (!this.newExercise.title.trim() || !this.newExercise.description.trim()) {
        alert("Title and Description cannot be empty.");
        return;
      }

      try {
        const response = await create(this.newExercise as Exercise);
        this.exercises.push(response.data);  // Add the new exercise to the list
        this.newExercise = { title: '', description: '', difficulty: 'Easy' };  // Reset the form
      } catch (error) {
        console.error("Error adding exercise:", error);
      }
    },
    async deleteExercise(id: number) {
      try {
        await remove(id);
        this.exercises = this.exercises.filter(exercise => exercise.id !== id);  // Remove the exercise from the list
      } catch (error) {
        console.error("Error deleting exercise:", error);
      }
    },
    async editExercise(id: number) {
      try {
        const response = await getById(id);
        this.editingExercise = response.data;  // Set the exercise to be edited
      } catch (error) {
        console.error("Error fetching exercise:", error);
      }
    },
    async updateExercise() {
      if (!this.editingExercise) return;

      try {
        const response = await update(this.editingExercise);
        const index = this.exercises.findIndex(exercise => exercise.id === this.editingExercise!.id);
        if (index !== -1) {
          this.exercises.splice(index, 1, response.data);  // Update the exercise in the list
        }
        this.editingExercise = null;  // Reset the editing state
      } catch (error) {
        console.error("Error updating exercise:", error);
      }
    },
    cancelEdit() {
      this.editingExercise = null;  // Reset the editing state
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

/* Add Exercise Form */
.add-exercise {
  margin-bottom: 20px;
}

.add-exercise input,
.add-exercise select {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-exercise button {
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-exercise button:hover {
  background-color: #0056b3;
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

/* Edit Exercise Form */
.edit-exercise {
  margin-top: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Add padding to the last item to avoid double borders */
.exercise-items li:last-child {
  border-bottom: none;
}
</style>