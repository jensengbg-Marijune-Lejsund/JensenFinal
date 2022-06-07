<script>
import announcements from '../assets/announcements.png';
import assignments from '../assets/assignments.png';
import grading from '../assets/grading.png';
import heart from '../assets/heart2.png';
import logoImage from '../assets/logo.png';

export default {
  data: function() {
    return {
      logoImage: logoImage,
      announcements: announcements,
      assignments: assignments,
      grading: grading,
      heart: heart,
    };
  },
};
</script>

<template>
  <div class="home">
    <div class="hero">
      <div class="title">Learnpoint</div>
      <h2>Integrated LMS and SIS</h2>
      <p class="call__us">Need help now? Call us directly at 0123 345 323</p>
      <h2>
        Create programs, write announcements, enroll students, hand out
        assignments, and assess student work. All in one place.
      </h2>
    </div>
    <div class="sections">
      <div class="section">
        <img class="homeCard" v-bind:src="announcements" />
      </div>
      <div class="section">
        <img class="homeCard" v-bind:src="assignments" />
      </div>
      <div class="section"><img class="homeCard" v-bind:src="grading" /></div>
    </div>

    <div class="demo">
      <h2>Want to know more?</h2>
      <p>
        Would you like a demo, ask a question, or perhaps just talk to us? We'd
        be happy to hear from you.
      </p>
      <p>Write to us at info@learnpoint.se</p>
      <img class="heart" v-bind:src="heart" />
    </div>
  </div>
</template>

<style>
.sections {
  margin: 0 auto;
  text-align: center;
  max-width: 1500px;
}

.section img {
  width: 100%;
}

.demo {
  margin: 0 auto;
  text-align: center;
  max-width: 700px;
  background-color: #0975ff;
  border: #0975ff solid;
  border-radius: 20px;
  color: white;
  margin-bottom: 35px;
}

.demo h2 {
  font-size: 40px;
}

.demo p {
  font-size: 25px;
}

.heart {
  width: 100px;
  margin-bottom: 1rem;
}

.hero {
  margin: 0 auto;
  text-align: center;
  line-height: 1.4;
  font-size: 20px;
  font-weight: 800;
  max-width: 1100px;
  padding: 0;
}

.call__us {
  color: #0975ff;
}
</style>
