import { createStore } from 'vuex';

const mutations = {
    login(state, user) {
      state.loggedIn = true;
      state.currentUser = state.user[user];
    },
    logout(state) {
      state.loggedIn = false;
      state.currentUser = '';
    },
  },
  state = {
    loggedIn: false,
    currentUser: '',
    user: [
      { id: 1, uname: 'Marijune', psw: 'password' },
      { id: 2, uname: 'Jennie', psw: 'cats' },
      { id: 3, uname: 'Tova', psw: 'bonde' },
      { id: 4, uname: 'Sam', psw: 'minecraft' },
    ],
  };

export default createStore({ mutations, state });
