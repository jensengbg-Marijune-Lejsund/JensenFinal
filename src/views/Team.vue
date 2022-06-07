<script>
import manOne from '../assets/man1.jpeg';
import manTwo from '../assets/man2.jpeg';
import womanOne from '../assets/woman1.avif';
import womanTwo from '../assets/woman2.avif';

export default {
  data: function() {
    return {
      manOne: manOne,
      manTwo: manTwo,
      womanOne: womanOne,
      womanTwo: womanTwo,
    };
  },
};
</script>

<template>
  <div class="team" id="team">
    <div class="title">Our Team</div>
    <div class="team__wrapper">
      <div class="team__card">
        <img class="teamImage" v-bind:src="manOne" />
        <h2>Tom Haverford</h2>
        <p>Design Lead</p>
      </div>
      <div class="team__card">
        <img class="teamImage" v-bind:src="womanOne" />
        <h2>Tina Napoleon</h2>
        <p>Technology</p>
      </div>
      <div class="team__card">
        <img class="teamImage" v-bind:src="manTwo" />
        <h2>Bert Andernie</h2>
        <p>Junior Developer</p>
      </div>
      <div class="team__card">
        <img class="teamImage" v-bind:src="womanTwo" />
        <h2>Ann Perkins</h2>
        <p>Interships</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 50px;
}

.team__card {
  height: 325px;
  width: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 5px 5px 3px grey;
  transition: 0.3s ease-in;
  margin-bottom: 70px;
  margin-left: 50px;
  margin-top: 50px;
}

.team__card h2 {
  font-family: 'Raleway', sans-serif;
  padding: 3px;
  text-align: center;
  margin-bottom: 0;
}

.team__card p {
  font-family: 'Nunito', sans-serif;
  text-align: center;
  font-size: 20px;
}

.team__card:hover {
  transform: scale(1.075);
  transition: 0.3s ease-in;
}
</style>
