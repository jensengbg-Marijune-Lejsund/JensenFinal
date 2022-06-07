<script>
import chat from '../assets/chat.png';
import phone from '../assets/phone.png';
import linked from '../assets/linked.png';
import mail from '../assets/mail.png';

export default {
  data: function() {
    return {
      chat: chat,
      phone: phone,
      linked: linked,
      mail: mail,
    };
  },
};
</script>

<template>
  <div class="info" id="info">
    <div class="title">Contact</div>
    <div class="info__wrapper">
      <div class="info__card">
        <img class="contactImage" v-bind:src="chat" />
        <h2>Chat with us.</h2>
        <p>0123 456 678</p>
      </div>
      <div class="info__card">
        <img class="contactImage" v-bind:src="phone" />
        <h2>Call us.</h2>
        <p>0850 345 987</p>
      </div>
      <div class="info__card">
        <img class="contactImage" v-bind:src="linked" />
        <h2>Follow us.</h2>
        <p>LinkedInLink</p>
      </div>
      <div class="info__card">
        <img class="contactImage" v-bind:src="mail" />
        <h2>Email us.</h2>
        <p>learnpoint@lp.se</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 50px;
}

.info__card {
  height: 300px;
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

.info__card h2 {
  font-family: 'Raleway', sans-serif;
  padding: 3px;
  text-align: center;
  margin-bottom: 0;
}

.info__card p {
  font-family: 'Raleway', sans-serif;
  text-align: center;
  font-size: 20px;
}

.info__card:hover {
  transform: scale(1.075);
  transition: 0.3s ease-in;
}

.contactImage {
  width: 8rem;
  display: flex;
  justify-content: center;
  margin-left: 60px;
}
</style>
