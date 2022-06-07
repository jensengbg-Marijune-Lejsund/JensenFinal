<script>
import NavBar from './components/NavBar.vue';
import BlueFoot from './components/Footer.vue';

export default {
  components: {
    NavBar,
    BlueFoot,
  },
};
</script>

<template>
  <div>
    <NavBar></NavBar>
    <RouterView></RouterView>
    <BlueFoot></BlueFoot>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;800&family=Raleway:wght@300;400;500&display=swap');

body {
  background-color: #fdedde;
}

p,
h2 {
  font-family: 'Raleway', sans-serif;
  margin: 10px;
  line-height: 1.8;
}

.title {
  margin: 0 auto;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  font-size: 4rem;
  padding: 2rem;
  font-weight: 600;
  color: #0975ff;
  margin-top: 20px;
}
</style>
