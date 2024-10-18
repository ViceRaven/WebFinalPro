<template>
    <div>
        <p>This is a dummy text to verify the page works.</p>
        <h1>Chloe's Exercise Data</h1>
        <div>
            <h2>Today</h2>
            <ul>
                <li>Running: {{ exerciseData.today.running }}</li>
                <li>Yoga: {{ exerciseData.today.yoga }}</li>
            </ul>
        </div>
        <div>
            <h2>This Week</h2>
            <ul>
                <li>Running: {{ exerciseData.thisWeek.running }}</li>
                <li>Yoga: {{ exerciseData.thisWeek.yoga }}</li>
                <li>Swimming: {{ exerciseData.thisWeek.swimming }}</li>
            </ul>
        </div>
        <div>
            <h2>All Time</h2>
            <ul>
                <li>Running: {{ exerciseData.allTime.running }}</li>
                <li>Yoga: {{ exerciseData.allTime.yoga }}</li>
                <li>Swimming: {{ exerciseData.allTime.swimming }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChloeProfile',
    data() {
        return {
            exerciseData: {
                today: {
                    running: '5 km',
                    yoga: '30 minutes'
                },
                thisWeek: {
                    running: '25 km',
                    yoga: '3 hours',
                    swimming: '2 hours'
                },
                allTime: {
                    running: '500 km',
                    yoga: '50 hours',
                    swimming: '20 hours'
                }
            }
        };
    }
};
</script>

<style scoped>
h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
}

h2 {
    font-size: 1.5em;
    margin-top: 1em;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 0.5em 0;
}
</style>