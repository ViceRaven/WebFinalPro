<template>
  <div>
    <h1>Exercise List</h1>

    <!-- Exercise List -->
    <ul>
      <li v-for="exercise in exercises" :key="exercise.id">
        <div>
          <h3>{{ exercise.title }}</h3>
          <p>{{ exercise.description }}</p>
          <p>Difficulty: {{ exercise.difficulty }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { api } from "/Users/ziares/WebProCW/WebFinalPro/Client/src/models/myFetch";  // Adjust the import according to your folder structure

export default {
  data() {
    return {
      exercises: [] as { id: number; title: string; description: string; difficulty: string }[],  // Store exercises here
    };
  },
  mounted() {
    this.fetchExercises();  // Fetch exercises when the component mounts
  },
  methods: {
    async fetchExercises() {
      try {
        const response = await api<{ data: any[] }>("exercises");  // Fetch exercises from backend
        this.exercises = response.data;  // Store fetched exercises in the component state
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Optional styling */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

h3 {
  margin: 0;
}

p {
  margin: 5px 0;
}
</style>
