<script>
import code from '../assets/code.avif';

export default {
  data: function() {
    return {
      code: code,
    };
  },
};
</script>
<template>
  <div>
    <div class="first__blog">
      <p>May 01, 2022</p>

      <h1 class="blog__title">Coding is the Future.</h1>
      <p>Tom Haverford</p>
      <img class="blog__picture" v-bind:src="code" />
      <p class="blog__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
        repellat. Ea et voluptate neque accusantium mollitia! Ex neque eaque
        quasi dolore doloremque esse nam! In modi aperiam odio deserunt
        provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        possimus aperiam quos alias voluptate quisquam, atque culpa consectetur
        saepe enim eaque blanditiis dolorum, ut incidunt minima placeat laborum
        debitis eligendi. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga possimus aperiam quos alias voluptate quisquam, atque culpa
        consectetur saepe enim eaque blanditiis dolorum, ut incidunt minima
        placeat laborum debitis eligendi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga possimus aperiam quos alias voluptate quisquam,
        atque culpa consectetur saepe enim eaque blanditiis dolorum, ut incidunt
        minima placeat laborum debitis eligendi.
      </p>
      <p class="blog__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus
        aperiam quos alias voluptate quisquam, atque culpa consectetur saepe
        enim eaque blanditiis dolorum, ut incidunt minima placeat laborum
        debitis eligendi. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga possimus aperiam quos alias voluptate quisquam, atque culpa
        consectetur saepe enim eaque blanditiis dolorum, ut incidunt minima
        placeat laborum debitis eligendi.
      </p>

      <img src="images/share.png" alt="" class="share" />
    </div>
  </div>
</template>

<style scoped>
.first__blog {
  background-color: white;
  width: 800px;
  height: auto;
  margin: 40px auto;
  margin-top: 50px;
  box-shadow: 5px 5px 3px grey;
  padding: 20px;
  border-radius: 5px;
}

.first__blog h1 {
  font-family: 'Nunito', sans-serif;
  margin-left: 5px;
}
</style>
