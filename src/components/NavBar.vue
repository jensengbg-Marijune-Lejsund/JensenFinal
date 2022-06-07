<script>
import logoImage from '../assets/newlogo.png';

export default {
  data: function() {
    return {
      logoImage: logoImage,
    };
  },
  methods: {
    logout() {
      this.$store.commit('logout');
    },
  },
};
</script>

<template>
  <nav>
    <div class="navbar">
      <RouterLink class="learnpoint__logo" to="/"
        ><img class="navLogo" v-bind:src="logoImage"
      /></RouterLink>
      <div class="grow"></div>
      <RouterLink class="nav__links" to="/">Home</RouterLink>
      <RouterLink class="nav__links" to="/team">Team</RouterLink>
      <RouterLink class="nav__links" to="/contact">Contact</RouterLink>
      <RouterLink class="nav__links" to="/pricing">Pricing</RouterLink>
      <RouterLink class="nav__links" to="/blogpage">Blog</RouterLink>
      <RouterLink
        v-if="!this.$store.state.loggedIn"
        class="nav__links"
        to="/signin"
        >Sign In</RouterLink
      >
      <RouterLink v-else class="nav__links" to="/" @click="logout"
        >Log Out</RouterLink
      >
    </div>
  </nav>
</template>

<style scoped>
.nav__links {
  text-decoration: none;
  padding: 14px 16px;
  float: right;
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  color: white;
  display: block;
  float: right;
}

.nav__links:hover {
  color: black;
}

.navbar {
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: #0975ff;
  justify-content: end;
}

.navLogo {
  height: 35px;
  margin-top: 5px;
}

.grow {
  flex-grow: 1;
}
</style>
