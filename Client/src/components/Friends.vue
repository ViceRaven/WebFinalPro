<template>
    <div class="friends-wrapper">
      <h1>Friends' Activities</h1>
      <ul>
        <li v-for="friend in friends" :key="friend.name">
          <h2>{{ friend.name }}</h2>
          <ul>
            <li v-for="activity in friend.activities" :key="activity.id">
              {{ activity.name }} - {{ activity.date }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FriendsActivities',
    data() {
      return {
        friends: [
          {
            name: 'John',
            activities: [
              { id: 1, name: 'Cycling', date: '2023-01-03' },
              { id: 2, name: 'Hiking', date: '2023-01-04' }
            ]
          },
          {
            name: 'Jane',
            activities: [
              { id: 3, name: 'Yoga', date: '2023-01-05' },
              { id: 4, name: 'Running', date: '2023-01-06' }
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .friends-wrapper {
    padding: 20px;
  }
  </style>