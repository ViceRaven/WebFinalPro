<template>
    <div class="activities-wrapper">
      <h1>My Activities</h1>
      <ul>
        <li v-for="activity in activities" :key="activity.id">
          {{ activity.name }} - {{ activity.date }}
          <button @click="editActivity(activity)">Edit</button>
          <button @click="deleteActivity(activity)">Delete</button>
        </li>
      </ul>
      <button @click="addActivity">Add Activity</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyActivities',
    data() {
      return {
        activities: [
          { id: 1, name: 'Running', date: '2023-01-01' },
          { id: 2, name: 'Swimming', date: '2023-01-02' }
        ]
      };
    },
    methods: {
      addActivity() {
        // Logic to add a new activity
      },
      editActivity() {
        // Logic to edit an activity
      },
      deleteActivity() {
        // Logic to delete an activity
      }
    }
  };
  </script>
  
  <style scoped>
  .activities-wrapper {
    padding: 20px;
  }
  
  button {
    margin-left: 10px;
  }
  </style>