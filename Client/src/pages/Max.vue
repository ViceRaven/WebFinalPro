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
        
        <h2>Log New Exercise</h2>
        <form @submit.prevent="addExercise">
            <div>
                <label for="name">Exercise Name:</label>
                <input type="text" v-model="newExercise.name" required>
            </div>
            <div>
                <label for="duration">Duration (mins):</label>
                <input type="number" v-model="newExercise.duration" required>
            </div>
            <button type="submit">Add Exercise</button>
        </form>
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
            ],
            newExercise: {
                name: '',
                duration: ''
            }
        };
    },
    methods: {
        addExercise() {
            const newId = this.allTimeExercises.length + 1;
            const exercise = { id: newId, ...this.newExercise };
            this.todayExercises.push(exercise);
            this.weekExercises.push(exercise);
            this.allTimeExercises.push(exercise);
            this.newExercise.name = '';
            this.newExercise.duration = '';
        }
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
form {
    margin-top: 20px;
}
form div {
    margin-bottom: 10px;
}
label {
    margin-right: 10px;
}
button {
    padding: 5px 10px;
}
</style>
