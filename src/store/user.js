import { getSalesTableList, logoutApi, getUserInfoApi } from "../api/index"
import { getStore, removeStore, setStore } from '../utils/storage';

export default {
    state: () => ({
        token: getStore("token") || "",
        username: getStore('username') || '',
        roles: getStore('roles') || ""
    }),
    mutations: {

        SET_TOKEN(state, token) {
            state.token = token;
            setStore('token', state.token);

        },
        SET_USERNAME(state, username) {
            state.username = username;
        },
        SET_ROLES(state, roles) {
            state.roles = roles;
        },
    },
    actions: {
        // login({ commit, dispatch }, data) {
        //     return new Promise((resolve, reject) => {
        //         loginApi(data).then(res => {
        //             // 保存token到store   
        //             console.log(res);
        //             if (res.error === 1) {
        //                 // 登录失败，返回一个包含错误信息的对象
        //                 reject({ message: '登录失败' });
        //             } else {
        //                 commit('SET_TOKEN', res.token);
        //                 // 在本地存储token
        //                 setStore('token', res.token);
        //                 dispatch('getUserInfo');
        //                 resolve();
        //             }
        //         })
        //             .catch(err => {
        //                 reject(err);
        //             })
        //     })
        // },
        // 退出登录
        logout({ commit }, data) {
            return new Promise((resolve, reject) => {
                logoutApi(data).then(res => {
                    console.log(res.data);
                    // 退出登录，清空token和username
                    commit('SET_TOKEN', '');
                    commit('SET_USERNAME', '');
                    // 在本地存储username
                    removeStore('token');
                    removeStore('username');
                    resolve();
                })
                    .catch(err => {
                        reject(err);
                    })
            })
        },
        // 保存本地 name
        // getUserInfo({ commit }, data) {
        //     return new Promise((resolve, reject) => {
        //         getUserInfoApi(data).then(res => {
        //             console.log('=======');
        //             console.log(data);
        //             console.log(res);
        //             // 保存username到store
        //             commit('SET_USERNAME', res.data.username);
        //             // 在本地存储username
        //             setStore('username', res.data.username);
        //             setStore('roles', res.data.roles[0]);
        //             resolve();
        //         })
        //             .catch(err => {
        //                 reject(err);
        //             })
        //     })
        // },

    }
    
}