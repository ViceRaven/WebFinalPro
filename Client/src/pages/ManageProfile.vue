<template>
    <div>
        <h1>Manage Profile Page</h1>
        <p>This is a dummy text to confirm that the Manage Profile page is working.</p>
        
        <form @submit.prevent="updateProfile">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="profile.username">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="profile.email">
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="profile.password">
            </div>
            <button type="submit">Update Profile</button>
        </form>
        
        <button @click="signOut">Sign Out</button>
    </div>
</template>

<script>
export default {
    name: 'ManageProfile',
    data() {
        return {
            profile: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        updateProfile() {
            // Logic to update the profile
            console.log('Profile updated:', this.profile);
        },
        signOut() {
            // Logic to sign out the user
            console.log('User signed out');
        }
    }
}
</script>

<style scoped>
h1 {
    color: #333;
}
form {
    margin-top: 20px;
}
form div {
    margin-bottom: 10px;
}
button {
    margin-top: 10px;
}
</style>