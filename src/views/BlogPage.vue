<script>
import code from '../assets/code.avif';
import meeting from '../assets/meeting.avif';
import social from '../assets/social.avif';

export default {
  data: function() {
    return {
      code: code,
      meeting: meeting,
      social: social,
    };
  },
};
</script>

<template>
  <div class="blog">
    <div class="title">Blog</div>
    <div class="blog__wrapper">
      <div class="blog__card">
        <img class="blogImage" v-bind:src="code" />
        <div class="bloginfo">
          <p>May 1, 2022</p>
          <h1>Coding is the Future</h1>
          <p class="post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            inventore aperiam nesciunt nisi ullam dicta, placeat vero quibusdam
            incidunt sunt ipsa numquam officia error voluptate alias. Veniam
            laborum sequi omnis?
          </p>
          <div>
            <RouterLink class="readMore" to="/blogpost">Read More</RouterLink>
          </div>
        </div>
      </div>
      <div class="blog__card">
        <img class="blogImage" v-bind:src="meeting" />
        <div class="bloginfo">
          <p>April 20, 2022</p>
          <h1>Meeting online now?</h1>
          <p class="post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            inventore aperiam nesciunt nisi ullam dicta, placeat vero quibusdam
            incidunt sunt ipsa numquam officia error voluptate alias. Veniam
            laborum sequi omnis?
          </p>
          <div>
            <RouterLink class="readMore" to="/blogpost2">Read More</RouterLink>
          </div>
        </div>
      </div>
      <div class="blog__card">
        <img class="blogImage" v-bind:src="social" />
        <div class="bloginfo">
          <p>April 03, 2022</p>
          <h1>Social Media Today</h1>
          <p class="post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            inventore aperiam nesciunt nisi ullam dicta, placeat vero quibusdam
            incidunt sunt ipsa numquam officia error voluptate alias. Veniam
            laborum sequi omnis?
          </p>
          <div>
            <RouterLink class="readMore" to="/blogpost3">Read More</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="more"><button>More Blog Posts</button></div>
  </div>
</template>

<style scoped>
button,
.readMore {
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  border: none;
  padding: 15px 32px;
  background-color: #0975ff;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-right: 20px;
  float: right;
}

.more {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.blog__wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.blog__card {
  margin: 20px;
  height: 300px;
  width: 1000px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 5px 5px 3px grey;
  transition: 0.3s ease-in;
}

.blog__card:hover {
  transform: scale(1.075);
  transition: 0.3s ease-in;
}

.blog__card h1 {
  font-family: 'Nunito', sans-serif;
  margin-left: 5px;
}

.blogImage {
  object-fit: cover;
  width: 300px;
  height: auto;
  border-radius: 10px;
  padding: 10px;
}
</style>
