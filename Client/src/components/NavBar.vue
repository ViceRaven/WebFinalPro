<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);
const user = ref(null); // Replace this with your actual user authentication logic

// Example of setting user data (this should be replaced with actual authentication logic)
user.value = { name: 'John Doe' }; // Comment this line out when integrating with real authentication
</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
           :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <RouterLink to="/" class="navbar-item">Home</RouterLink>
          <RouterLink to="/products" class="navbar-item">Exercise Log</RouterLink>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <RouterLink to="/about" class="navbar-item">
                About
              </RouterLink>
              <RouterLink to="/jobs" class="navbar-item">
                Jobs
              </RouterLink>
              <RouterLink to="/contact" class="navbar-item">
                Contact
              </RouterLink>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <template v-if="user">
                <RouterLink to="/ManageProfile" class="button is-primary">
                  Manage Profile
                </RouterLink>
              </template>
              <template v-else>
                <RouterLink to="/login" class="button is-light">
                  Log in
                </RouterLink>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid blue;
}
</style>
