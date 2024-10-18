<template>
    <div>
        <h1>Max's Exercise Data</h1>
        <h2>Today</h2>
        <ul>
            <li v-for="exercise in todayExercises" :key="exercise.id">{{ exercise.name }} - {{ exercise.duration }} mins</li>
        </ul>
        <h2>This Week</h2>
        <ul>
            <li v-for="exercise in weekExercises" :key="exercise.id">{{ exercise.name }} - {{ exercise.duration }} mins</li>
        </ul>
        <h2>All Time</h2>
        <ul>
            <li v-for="exercise in allTimeExercises" :key="exercise.id">{{ exercise.name }} - {{ exercise.duration }} mins</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MaxExerciseData',
    data() {
        return {
            todayExercises: [
                { id: 1, name: 'Running', duration: 30 },
                { id: 2, name: 'Cycling', duration: 45 }
            ],
            weekExercises: [
                { id: 1, name: 'Running', duration: 30 },
                { id: 2, name: 'Cycling', duration: 45 },
                { id: 3, name: 'Swimming', duration: 60 },
                { id: 4, name: 'Yoga', duration: 40 }
            ],
            allTimeExercises: [
                { id: 1, name: 'Running', duration: 30 },
                { id: 2, name: 'Cycling', duration: 45 },
                { id: 3, name: 'Swimming', duration: 60 },
                { id: 4, name: 'Yoga', duration: 40 },
                { id: 5, name: 'Hiking', duration: 120 },
                { id: 6, name: 'Weightlifting', duration: 50 }
            ]
        };
    }
};
</script>

<style scoped>
h1, h2 {
    color: #333;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin: 5px 0;
}
</style>
