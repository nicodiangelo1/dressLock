// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const state = {
  token: localStorage.getItem('token') || '',
  user: null,
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_AUTH(state) {
    state.token = '';
    state.user = null;
  },
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  async login({ commit }, credentials) {
    try {
      //TODO Cambiar esto cuando se cree un backend
      //const response = await axios.post('/api/login', credentials);
      //const token = response.data.token;
      //const user = response.data.user;
      const token = "tokenHola";
      const user = "userHola";
      localStorage.setItem('token', token);
      commit('SET_TOKEN', token);
      commit('SET_USER', user);
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('CLEAR_AUTH');
  },
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  getUser: (state) => state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
