<script>
export default {
  data: function() {
    return {
      errorMessage: '',
      uname: '',
      psw: '',
    };
  },
  methods: {
    login() {
      console.log('logged in');

      for (let i = 0; i < this.$store.state.user.length; i++) {
        if (this.uname === this.$store.state.user[i].uname) {
          if (this.psw === this.$store.state.user[i].psw) {
            this.$store.commit('login', i);
          } else {
            this.errorMessage = 'Incorrect username and/or password';
          }
        }
      }
    },
  },
};
</script>

<template>
  <div>
    <div v-if="this.$store.state.loggedIn">
      <div class="welcome">
        <h1 class="welcome__text">
          Welcome to Learnpoint, {{ this.$store.state.currentUser.uname }} !
        </h1>
        <p class="welcome__blurb">
          Here at Learnpoint, orem ipsum dolor sit amet consectetur adipisicing
          elit. Temporibus error veniam, accusamus dolores expedita saepe sequi
          tempora reprehenderit quisquam illo. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Temporibus error veniam, accusamus
          dolores expedita saepe sequi tempora reprehenderit quisquam illo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          error veniam, accusamus dolores expedita saepe sequi tempora
          reprehenderit quisquam illo.
        </p>
        <div class="welcome__bottom">
          <RouterLink class="homebtn" to="/">Home</RouterLink>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="title">Sign In</div>
      <form action="action_page.php" method="post">
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            v-model="uname"
            required
          />
          <label for="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            v-model="psw"
            required
          />

          <button type="button" @click="login">Login</button>
          <div class="error">
            <p>{{ errorMessage }}</p>
          </div>
        </div>

        <div class="container__bottom">
          <RouterLink class="cancelbtn" to="/">Cancel</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 15px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.welcome {
  margin-top: 50px;
  height: 500px;
}

.welcome__text {
  margin: 0 auto;
  text-align: center;
  color: #0975ff;
  font-family: 'Nunito', sans-serif;
}

.welcome__blurb {
  margin: 0 auto;
  text-align: center;
  width: 600px;
  padding: 50px;
}

.error {
  margin: 0 auto;
  text-align: center;
  color: #e99b0a;
}

button {
  background-color: #0975ff;
  color: white;
  padding: 14px 20px;
  margin: 20px 0;
  border: none;
  cursor: pointer;
  width: 30%;
  border-radius: 5px;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn:hover,
.homebtn:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  border-radius: 5px;
  background-color: #e99b0a;
  text-decoration: none;
  color: white;
  font-family: 'Raleway', sans-serif;
}

.homebtn {
  background-color: #0975ff;
  width: auto;
  padding: 10px 18px;
  border-radius: 5px;

  text-decoration: none;
  color: white;
  font-family: 'Raleway', sans-serif;
}

.container {
  padding: 75px;
  width: 500px;
  margin: 0 auto;
  text-align: center;
}

.container__bottom,
.welcome__bottom {
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  width: 500px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
}

label {
  font-family: 'Raleway', sans-serif;
}
</style>
