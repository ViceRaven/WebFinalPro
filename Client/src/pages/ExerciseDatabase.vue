<template>
  <div>
    <input v-model="searchQuery" placeholder="Search exercises..." />
    <select v-model="sortKey">
      <option value="title">Title</option>
      <option value="difficulty">Difficulty</option>
    </select>
    <ul>
      <li v-for="exercise in filteredExercises" :key="exercise.id">
        <h3>{{ exercise.title }}</h3>
        <p>{{ exercise.description }}</p>
        <p>Difficulty: {{ exercise.difficulty }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import supabase from '/Users/ziares/WebProCW/WebFinalPro/Server/model/supabase.js';

export default {
  data() {
    return {
      exercises: [],
      searchQuery: '',
      sortKey: 'title',
    };
  },
  computed: {
    filteredExercises() {
      return this.exercises
        .filter(exercise => 
          exercise.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          exercise.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
        .sort((a, b) => {
          if (this.sortKey === 'title') {
            return a.title.localeCompare(b.title);
          } else if (this.sortKey === 'difficulty') {
            return a.difficulty.localeCompare(b.difficulty);
          }
          return 0;
        });
    },
  },
  async created() {
    const { data, error } = await supabase
      .from('exercises')
      .select('*');

    if (error) {
      console.error('Error fetching exercises:', error);
    } else {
      this.exercises = data;
    }
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>