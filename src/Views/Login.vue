<template>
    <div class="homenuner">
        <video src="https://p1-ad.adkwai.com/udata/pkg/kuaijiedan/juxing_official_video.mp4"
            style="width: 100%;height: 100%;object-fit: cover;position: absolute;top: 0;left: 0;z-index: -1;"
            autoplay="autoplay" loop="loop" muted="muted"></video>
        <el-form ref="form" class="login_container" :model="login" status-icon :rules="rules" label-width="70px">
            <!-- h3要放在里面:只能有一个根,且title也是表单的一部分 -->
            <h3 class="login_title">柠檬鲨管理后台</h3>
            <!-- prop对应rules里的键 -->
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="login.phone" autocomplete="off"></el-input>

            </el-form-item>
            <el-form-item label="验证码" prop="smsCode">
                <el-input type="password" v-model="login.password" autocomplete="off"></el-input>
                <el-button class="YzMshu" type="warning" @click="startCountdown" v-show="showTime">
                    发送
                </el-button>
                <el-button class="YzMshu" type="warning" v-show="!showTime">
                    {{ getTime }}
                </el-button>
            </el-form-item>

            <el-form-item>
                <el-button @click="submit" type="primary" style="margin-left:30px;margin-top:10px">登录</el-button>
                <el-button @click="submitlistTanr" type="primary"
                    style="margin-left:30px;margin-top:10px">取消</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
import Cookie from 'js-cookie'
import { getMenu } from '../api/index'
import {
    getSalesTableList,
    getSalesTab,


    getLuyouTberber
} from "@/api/shark";
export default {
    data() {
        return {
            showTime: true,
            getTime: 60,
            timer: "",
            // 登陆数据
            login: {
                phone: '18770010802',
                smsCode: "123456" //验证码
            },
            rules: {
                phone: [
                    {
                        required: true,
                        message: "手机号码不能为空",
                        trigger: "blur",
                        max: 11,
                    },
                    //   {
                    //     pattern: /^1[3456789]\d{9}$/,
                    //     message: "手机号码格式不正确",
                    //     trigger: "blur",
                    //   },
                ],
                smsCode: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' }
                ]
            }
        }
    },

    methods: {
        startCountdown() {
            this.submitlist()
            let timer = setInterval(() => {
                this.getTime -= 1;

                if (this.getTime <= 0) {
                    clearInterval(timer);
                    this.showTime = true;
                    this.getTime = 60;
                }
            }, 1000);

            this.showTime = false;
        },

        // 调用接口
        submitlist() {
            let query = {
                phone: this.login.phone
            }
            getSalesTab(query).then(res => {
                console.log(res);

            })

        },
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {

                    let query = {
                        userPhone: this.login.phone,
                        smsCode: this.login.smsCode
                    }
                    getSalesTableList(query).then(res => {
                        console.log(res);
                        let restoken = res.data.token
                        console.log(restoken);
                        this.$store.commit("SET_TOKEN", restoken)
                        this.$router.push('/home')


                    })
                    // 传入表单数据
                    // getMenu(this.login).then((data) => {
                    //     console.log(data, 'menu');
                    //     if (data.data.code === 20000) {
                    //         // 记录cookie
                    //         // Cookie.set('token', data.data.data.token)
                    //         // 设置菜单
                    //         this.$store.commit('setMenu', data.data.userMenuList)
                    //         // // 动态添加路由
                    //         // this.$store.commit('addMenu', this.$router)
                    //         // 跳转到首页
                    //     } else {
                    //         // 验证失败的弹窗
                    //         this.$message.error(data.data.data.message);
                    //     }
                    // })


                }
            })
        },
        submitlistTanr() {
            this.login.phone = ""
            this.login.phone = ""
        },
    }
}
</script>

<style lang="less" scoped>
.homenuner {}

.login_container {
    width: 500px;
    border: 1px solid #eaeaea;

    .YzMshu {
        margin: 0px 20px;
    }

    // 居中
    margin: 180px auto;

    padding: 35px 35px 15px 35px;

    // 让padding在width里面
    box-sizing: border-box;

    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 25px #cac6c6;

    .login_title {
        color: #505458;
        // 左右居中
        text-align: center;
        margin-bottom: 40px;
    }

    .el-input {
        width: 198px;
    }
}
</style>