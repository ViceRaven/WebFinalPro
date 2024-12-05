<template>
  <div class="social-page">
    <h1>Social Page</h1>
    
    <!-- Post Status Section -->
    <div class="post-status">
      <textarea v-model="newStatus" placeholder="What's on your mind?"></textarea>
      <button @click="postStatus">Post</button>
    </div>

    <!-- Exercise Posts Feed -->
    <div class="status-feed">
      <h2>Exercise Posts</h2>
      <div v-for="post in exercisePosts" :key="post.id" class="post">
        <div class="post-content">
          <p>{{ post.content }}</p>
          <small>Posted by: {{ post.user }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialPage',
  data() {
    return {
      newStatus: '',
      exercisePosts: [
        { id: 1, content: 'Just finished a 5k run!', user: 'Frank' },
        { id: 2, content: 'Did 50 push-ups today!', user: 'Rachel' },
        { id: 3, content: 'Completed a 10k run!', user: 'Max' },
        { id: 4, content: 'Yoga session for 1 hour!', user: 'Chloe' },
        // Add more sample posts here
      ],
    };
  },
  methods: {
    postStatus() {
      if (this.newStatus.trim() !== '') {
        this.exercisePosts.push({
          id: this.exercisePosts.length + 1,
          content: this.newStatus,
          user: 'You', // Placeholder name for the current user
        });
        this.newStatus = '';
      }
    },
  },
};
</script>

<style scoped>
.social-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 2.5em;
}

.post-status {
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1em;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1em;
}

button:hover {
  background-color: #0056b3;
}

.status-feed {
  margin-top: 20px;
}

h2 {
  color: #333;
  margin-bottom: 15px;
  font-size: 2em;
}

.post {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-content {
  flex: 1;
}

.post p {
  margin: 0 0 10px;
  font-size: 1.1em;
}

.post small {
  color: #666;
  font-size: 0.9em;
}
</style>