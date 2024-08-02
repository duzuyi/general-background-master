import Vue from "vue";
import Vuex from 'vuex';
import tab from './tab';

import user from './user';

Vue.use(Vuex)
// const store = new Vuex.Store({
//     getters: {
//          token: state => state.user.token,
//          username: state => state.user.username,
//          roles:state=>state.user.roles
//     },
//     modules: {
//          tab,
//          user
//     }
// })
// 创建Vuex实例并导出
export default new Vuex.Store({
    getters: {
        token: state => state.user.token,
       
    },
    modules: {
        tab,
        user
    }
})
