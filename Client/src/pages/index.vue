<template>
  <div class="container">
    <h1 class="shadow">Welcome to Your Online Exercise Tracker!</h1>
    
    <div class="data-section">
      <h2>This Week's Summary</h2>
      <div class="data-container">
        <p><strong>Miles Ran:</strong> {{ thisWeekData.milesRan }} miles</p>
        <p><strong>Total Time:</strong> {{ thisWeekData.time }} minutes</p>
        <p><strong>Calories Burned:</strong> {{ thisWeekData.caloriesBurned }} kcal</p>
      </div>
    </div>

    <div class="data-section">
      <h2>Today's Summary</h2>
      <div class="data-container">
        <p><strong>Miles Ran:</strong> {{ todayData.milesRan }} miles</p>
        <p><strong>Total Time:</strong> {{ todayData.time }} minutes</p>
        <p><strong>Calories Burned:</strong> {{ todayData.caloriesBurned }} kcal</p>
      </div>
    </div>

    <div class="data-section">
<<<<<<< HEAD
      <h2>All-Time Summary</h2>
=======
      <h2>Total Among Users </h2>
>>>>>>> real-project-work-branch
      <div class="data-container">
        <p><strong>Miles Ran:</strong> {{ allTimeData.milesRan }} miles</p>
        <p><strong>Total Time:</strong> {{ allTimeData.time }} minutes</p>
        <p><strong>Calories Burned:</strong> {{ allTimeData.caloriesBurned }} kcal</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseIndex',
  data() {
    return {
      profile: {
        name: '',
        email: ''
      },
      profileCreated: false,
      thisWeekData: { milesRan: 0, time: 0, caloriesBurned: 0 },
      todayData: { milesRan: 0, time: 0, caloriesBurned: 0 },
      allTimeData: { milesRan: 0, time: 0, caloriesBurned: 0 }
    };
  },
  methods: {
    createProfile() {
      this.profileCreated = true;
    },
    editProfile() {
      this.profileCreated = false;
    },
    fetchData() {
      // Simulate fetching data for Chloe, Max, and Rachel
      const data = {
        Chloe: {
          thisWeekData: { milesRan: 20, time: 120, caloriesBurned: 1200 },
          todayData: { milesRan: 5, time: 30, caloriesBurned: 300 },
          allTimeData: { milesRan: 200, time: 1200, caloriesBurned: 12000 }
        },
        Max: {
          thisWeekData: { milesRan: 25, time: 150, caloriesBurned: 1500 },
          todayData: { milesRan: 6, time: 35, caloriesBurned: 350 },
          allTimeData: { milesRan: 250, time: 1500, caloriesBurned: 15000 }
        },
        Rachel: {
          thisWeekData: { milesRan: 30, time: 180, caloriesBurned: 1800 },
          todayData: { milesRan: 7, time: 40, caloriesBurned: 400 },
          allTimeData: { milesRan: 300, time: 1800, caloriesBurned: 18000 }
        }
      };

      // Calculate totals
      const totals = {
        thisWeekData: { milesRan: 0, time: 0, caloriesBurned: 0 },
        todayData: { milesRan: 0, time: 0, caloriesBurned: 0 },
        allTimeData: { milesRan: 0, time: 0, caloriesBurned: 0 }
      };

      for (const user of Object.values(data)) {
        totals.thisWeekData.milesRan += user.thisWeekData.milesRan;
        totals.thisWeekData.time += user.thisWeekData.time;
        totals.thisWeekData.caloriesBurned += user.thisWeekData.caloriesBurned;

        totals.todayData.milesRan += user.todayData.milesRan;
        totals.todayData.time += user.todayData.time;
        totals.todayData.caloriesBurned += user.todayData.caloriesBurned;

        totals.allTimeData.milesRan += user.allTimeData.milesRan;
        totals.allTimeData.time += user.allTimeData.time;
        totals.allTimeData.caloriesBurned += user.allTimeData.caloriesBurned;
      }

      this.thisWeekData = totals.thisWeekData;
      this.todayData = totals.todayData;
      this.allTimeData = totals.allTimeData;
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style scoped>
.container {
<<<<<<< HEAD
  /* width: 100%; */
=======
  width: 100%;
>>>>>>> real-project-work-branch
  min-height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: url('https://st3.depositphotos.com/1765561/14853/i/450/depositphotos_148533399-stock-photo-modern-gym-with-dumbbell-set.jpg') no-repeat center center fixed;
  background-size: cover;
  border-radius: 8px;
}

h1 {
  text-align: center;
  color: #fff;
  font-size: 3em;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.data-section {
  margin-bottom: 30px;
  width: 100%;
  max-width: 600px;
}

h2 {
  color: #fff;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.data-container {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

p {
  margin: 0;
  font-size: 1.1em;
  color: #333;
}
</style>