<template>
    <div>
        <h1>Rachel's Exercise Data</h1>
        <div>
            <h2>Today</h2>
            <ul>
                <li>Running: 5 km</li>
                <li>Yoga: 30 minutes</li>
            </ul>
        </div>
        <div>
            <h2>This Week</h2>
            <ul>
                <li>Running: 25 km</li>
                <li>Yoga: 3 hours</li>
                <li>Swimming: 2 hours</li>
            </ul>
        </div>
        <div>
            <h2>All Time</h2>
            <ul>
                <li>Running: 500 km</li>
                <li>Yoga: 50 hours</li>
                <li>Swimming: 20 hours</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RachelProfile'
}
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