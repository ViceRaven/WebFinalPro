<template>
    <div class="login-wrapper">
        <div class="login-container">
           
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" v-model="email" required />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" v-model="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <div class="signup-link">
                <p>Don't have an account? <router-link to="/signup">Create one</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await fetch('https://your-api-endpoint/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                });

                if (!response.ok) {
                    throw new Error('Login failed');
                }

                const data = await response.json();
                console.log('Login successful:', data);
                // Redirect to another page or perform other actions upon successful login
            } catch (error) {
                console.error('Error during login:', error);
                alert('Login failed. Please check your credentials and try again.');
            }
        }
    }
};
</script>

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

.login-container {
    max-width: 29em;
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
    width: 100%;
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
</style>