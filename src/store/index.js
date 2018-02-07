import Vue from 'Vue';
import Vuex from 'Vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mode: 'make',
    title: '',
    itemBg: '#ddd',
    itemCont: this.initItemCont(),
  }
})
