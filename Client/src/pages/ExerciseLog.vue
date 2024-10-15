

<template>
  <form id="exercise-form">
    <input type="text" id="exercise" placeholder="Exercise" required>
    <input type="number" id="duration" placeholder="Duration (minutes)" required>
    <button type="submit">Add Exercise</button>
  </form>
  <ul id="exercise-list"></ul>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>