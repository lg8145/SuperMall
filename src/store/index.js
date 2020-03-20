import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  cartList: [],
  adminInfo: {
		avatar: '~assets/img/default.jpg',//~assets/img/common/top.png
	},
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
