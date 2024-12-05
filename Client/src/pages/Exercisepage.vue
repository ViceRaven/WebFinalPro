<template>
  <div class="container">
    <h1> Exercise Data</h1>
    <div class="card">
      <h2>Today</h2>
      <ul>
        <li v-for="(exercise, index) in todayExercises" :key="exercise.id">
          {{ exercise.name }} - {{ exercise.duration }} {{ exercise.unit }}
          <div class="buttons">
            <button @click="editExercise('today', index)">Edit</button>
            <button @click="deleteExercise('today', index)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="card">
      <h2>This Week</h2>
      <ul>
        <li v-for="(exercise, index) in weekExercises" :key="exercise.id">
          {{ exercise.name }} - {{ exercise.duration }} {{ exercise.unit }}
          <div class="buttons">
            <button @click="editExercise('week', index)">Edit</button>
            <button @click="deleteExercise('week', index)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="card">
      <h2>All Time</h2>
      <ul>
        <li v-for="(exercise, index) in allTimeExercises" :key="exercise.id">
          {{ exercise.name }} - {{ exercise.duration }} {{ exercise.unit }}
          <div class="buttons">
            <button @click="editExercise('allTime', index)">Edit</button>
            <button @click="deleteExercise('allTime', index)">Delete</button>
          </div>
        </li>
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
          <label for="duration">Duration:</label>
          <input type="number" v-model="newExercise.duration" required>
        </div>
        <button type="submit">{{ editIndex !== null ? 'Update Exercise' : 'Add Exercise' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChloeExerciseData',
  data() {
    return {
      todayExercises: [
        { id: 1, name: 'Running', duration: 5, unit: 'miles' },
        { id: 2, name: 'Yoga', duration: 30, unit: 'mins' }
      ],
      weekExercises: [
        { id: 1, name: 'Running', duration: 25, unit: 'miles' },
        { id: 2, name: 'Yoga', duration: 180, unit: 'mins' },
        { id: 3, name: 'Swimming', duration: 120, unit: 'laps' }
      ],
      allTimeExercises: [
        { id: 1, name: 'Running', duration: 500, unit: 'miles' },
        { id: 2, name: 'Yoga', duration: 3000, unit: 'mins' },
        { id: 3, name: 'Swimming', duration: 1200, unit: 'laps' }
      ],
      newExercise: {
        name: '',
        duration: '',
        unit: ''
      },
      editIndex: null,
      editCategory: ''
    };
  },
  methods: {
    addExercise() {
      if (this.editIndex !== null) {
        this.updateExercise();
      } else {
        const newId = this.allTimeExercises.length + 1;
        const exercise = { id: newId, ...this.newExercise, unit: this.getUnit(this.newExercise.name) };
        this.todayExercises.push(exercise);
        this.weekExercises.push(exercise);
        this.allTimeExercises.push(exercise);
        this.newExercise.name = '';
        this.newExercise.duration = '';
        this.newExercise.unit = '';
      }
    },
    editExercise(category, index) {
      this.editCategory = category;
      this.editIndex = index;
      const exercise = this[`${category}Exercises`][index];
      this.newExercise.name = exercise.name;
      this.newExercise.duration = exercise.duration;
      this.newExercise.unit = exercise.unit;
    },
    updateExercise() {
      const exercise = { ...this.newExercise, id: this[`${this.editCategory}Exercises`][this.editIndex].id, unit: this.getUnit(this.newExercise.name) };
      this[`${this.editCategory}Exercises`].splice(this.editIndex, 1, exercise);
      this.newExercise.name = '';
      this.newExercise.duration = '';
      this.newExercise.unit = '';
      this.editIndex = null;
      this.editCategory = '';
    },
    deleteExercise(category, index) {
      this[`${category}Exercises`].splice(index, 1);
    },
    getUnit(exerciseName) {
      if (exerciseName.toLowerCase() === 'running') {
        return 'miles';
      } else if (exerciseName.toLowerCase() === 'swimming') {
        return 'laps';
      } else {
        return 'mins';
      }
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buttons {
  display: flex;
  gap: 10px;
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

button + button {
  margin-left: 10px;
}
</style>