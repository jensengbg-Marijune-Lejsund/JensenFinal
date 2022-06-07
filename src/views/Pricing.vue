<script>
import pricing from '../assets/pricing.png';

export default {
  data: function() {
    return {
      pricing: pricing,
    };
  },
};
</script>

<template>
  <div>
    <div class="pricing">
      <div class="title">Pricing</div>
      <img class="price" v-bind:src="pricing" />
    </div>
  </div>
</template>

<style scoped>
.price {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  padding: 3rem;
}
</style>
