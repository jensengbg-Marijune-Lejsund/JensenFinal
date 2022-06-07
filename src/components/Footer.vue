<script>
import connect from '../assets/connect.png';

export default {
  data: function() {
    return {
      connect: connect,
    };
  },
};
</script>

<template>
  <footer>
    <div class="footer__wrapper">
      <div class="footer__card">
        <h2>Learnpoint</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea culpa
          itaque reiciendis, ratione a temporibus odio ipsum cupiditate
          perferendis, explicabo neque, veniam optio tempora aspernatur
          obcaecati recusandae quas ipsa tempore.
        </p>
      </div>
      <div class="footer__card">
        <h2>Contacts</h2>
        <p>012 3456 789</p>
        <p>Box 7</p>
        <p>Stockholm</p>
        <p>learnpoint@lp.se</p>
      </div>
      <div class="footer__card">
        <h2>Links</h2>
        <RouterLink class="foot__links" to="/">Home</RouterLink>
        <RouterLink class="foot__links" to="/team">Team</RouterLink>
        <RouterLink class="foot__links" to="/contact">Contact</RouterLink>
        <RouterLink class="foot__links" to="/pricing">Pricing</RouterLink>
        <RouterLink class="foot__links" to="/blogpage">Blog</RouterLink>
      </div>
      <div class="footer__card">
        <h2>Connect with Us</h2>
        <img class="footerConnect" v-bind:src="connect" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: #0975ff;
  color: white;
  padding: 6px;
}

.footer__card h2 {
  font-family: 'Nunito', sans-serif;
  font-weight: 450;
  font-size: 30px;
}

.footer__card {
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.footer__card p {
  font-size: 15px;
  display: flex;
}

.foot__links {
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footerConnect {
  width: 100%;
  margin-left: -10px;
  cursor: pointer;
}
</style>
