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
    <div class="container">
        <div v-if="isLoggedIn" class="logged-in">
            <button @click="goToProfile">Manage Profile</button>
        </div>
        <div v-else>
            <h1 class="title">Sign Up</h1>
            <form @submit.prevent="handleSignup" class="signup-form">
                <div>
                    <label for="username">Email:</label>
                    <input type="text" id="username" v-model="username" required />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

.signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.signup-form div {
    margin-bottom: 20px;
}

.signup-form input {
    width: 300px;
    height: 40px;
    font-size: 18px;
    padding: 5px;
}

.signup-form button {
    width: 150px;
    height: 40px;
    font-size: 18px;
}

.logged-in {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>