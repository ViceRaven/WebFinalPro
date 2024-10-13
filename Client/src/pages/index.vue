<template>
  <div class="container">
    <h1>Welcome to your online exercise tracker!</h1>
    <form id="exercise-form">
      <input type="text" id="exercise" placeholder="Exercise" required>
      <input type="number" id="duration" placeholder="Duration (minutes)" required>
      <button type="submit">Add Exercise</button>
    </form>
    <ul id="exercise-list"></ul>
  </div>
</template>

<script>
export default {
  name: 'Index'
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
  text-align: left;
  color: #333;
  font-size: 5em;
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
</style>