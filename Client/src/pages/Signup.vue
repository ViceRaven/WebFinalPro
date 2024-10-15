<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);
const username = ref('');
const password = ref('');

const router = useRouter();

const handleSignup = () => {
    // Here you would typically send the data to your backend to create the account
    // For this example, we'll just set isLoggedIn to true
    isLoggedIn.value = true;
};

const goToProfile = () => {
    router.push({ name: 'ManageProfile' });
};
</script>

<template>
    <div class="login-wrapper">
        <div v-if="isLoggedIn" class="logged-in">
            <button @click="goToProfile">Manage Profile</button>
        </div>
        <div v-else class="signup-container">
            <h1 class="title">Sign Up</h1>
            <form @submit.prevent="handleSignup" class="signup-form">
                <div class="form-group">
                    <label for="username">Email:</label>
                    <input type="text" id="username" v-model="username" required />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
/* CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    background-color: #f0f0f0; /* Optional: background color for the page */
}

.login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
}

.signup-container {
    width: 29em; /* Adjust the width as needed */
    max-width: 29em; /* Optional: max-width to limit the width */
    padding: 20px;
    border: 1px solid #ccc; /* Explicitly set border color */
    border-radius: 4px;
    background-color: #fff; /* Ensure background color is set */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add box-shadow for a polished look */
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%; /* Adjust the width as needed */
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc; /* Explicitly set border color */
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.signup-link {
    margin-top: 15px;
    text-align: center;
}

.signup-link a {
    color: #007BFF;
    text-decoration: none;
}

.signup-link a:hover {
    text-decoration: underline;
}

.logged-in {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
