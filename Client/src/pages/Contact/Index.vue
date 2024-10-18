<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1 class="title">Contact Us</h1>
    <h2 class="subtitle">We'd love to hear from you</h2>

    <form>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Your name">
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Your email">
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Your message"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  max-height: 80vh; /* Set a maximum height */
  overflow-y: auto; /* Make it scrollable if content exceeds max height */
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #333;
  font-size: 2.5em;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
}

.subtitle {
  text-align: center;
  color: #555;
  font-size: 1.5em;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
}

.field {
  margin-bottom: 15px;
}

.label {
  font-size: 1.1em;
  color: #333;
}

.input, .textarea {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  width: 100%;
  padding: 10px;
  font-size: 1.2em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
</style>