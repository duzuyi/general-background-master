import axios from 'axios';
import { Message } from 'element-ui';

import store from '@/store'
import router from '@/router';
const instance = axios.create({
    // baseURL: process.env.VUE_APP_BASE_URL,
    baseURL: 'http://123.56.249.232',
});

// 添加请求拦截器: 请求发送之前做一些设置
instance.interceptors.request.use(
    function (config) {
        // console.log('config: ', config);
        // console.log(store.token);
        if (store.getters.token) {
            console.log(store.getters.token);

            config.headers = {
                'Authorization':  store.getters.token, //携带权限参数
            };
        }
        // 在发送请求之前做些什么
        Message({
            message: '请求数据...',
            duration: 0,
        });
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器: 响应之后做一些设置
instance.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么： 数据响应成功 then
        // console.log('response.data: ', response.data);
        Message.closeAll();
        // Message({
        //     message: '响应成功',
        //     type: 'success',
        // });
        const res = response.data
        // 发请求的权限验证：只有token存在并且有效才能访问的接口
        // token异常：token错误，token失效等，去登录页面重新登录，获取新的token
        if (res.err_no == 101) {
            // router.currentRoute 获取当前路由信息对象

            router.push({
                name: 'login',
                query: { redirect: router.currentRoute.fullPath }
            })

        }
        return res;
    },
    function (error) {
        // 对响应错误做点什么：数据响应失败 catch
        console.log('error: ', error);

        return Promise.reject(error);
    }
);

export default instance;
