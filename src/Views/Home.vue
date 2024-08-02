<template>
    <div>
        啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
    </div>
</template>

<script>
import {
    getSalesTableList,
    getSalesTab,
    getLuyouTberber
} from "@/api/shark";
import store from '@/store'
import TableLabel from '../data/TableLabel'
import CountData from '../data/CountData'
import { getData } from '../api/index'
import * as echarts from 'echarts'


// echarts的配置数据
import order from '../data/echartsData/order'
import user from '../data/echartsData/user'
import video from '../data/echartsData/video'

export default {
    data() {
        return {
            TableData: [],
            TableLabel,
            CountData
        }
    },
    methods: {
        priceFormate(price) {
            return "￥" + price
        },
        getlist() {
            const query = {
                phone: "13461335374"

            }
            getSalesTab(query).then(res => {
                // console.log(res);

            })

        },
        getData() {
            let token = this.$store.getters.token
            // console.log(token, "6666666666666");
            let query = {
                token: this.$store.getters.token
            }
            getLuyouTberber(query).then(res => {
                console.log(res);
                this.$store.commit('setMenu', res.userMenuList)
                this.$store.commit('addMenu', this.$router)
            })


        }
    },
    mounted() {
        this.getlist()
        this.getData()

    }
}
</script>

<style lang="less" scoped>
.user {
    // 垂直居中
    display: flex;
    align-items: center;

    // 外边距:分割线距离loginInfo的距离
    margin-bottom: 20px;
    // 内边距:分割线距离User的距离
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }

    .userInfo {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #999999;
        }
    }
}

.loginInfo {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;

        span {
            color: #666666;
            margin-left: 60px;
        }
    }
}

.num {
    display: flex;
    // 要换行
    flex-wrap: wrap;
    // 从头到尾均匀排列
    justify-content: space-between;
    margin-left: 20px;

    .el-card {
        width: 32%;
        margin-bottom: 20px;

        .icon {
            width: 80px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 30px;
            color: #fff;
        }

        .details {
            // 竖着排且居中
            display: flex;
            flex-direction: column;
            justify-content: center;

            margin-left: 15px;

            .price {
                font-size: 30px;
                margin-bottom: 10px;
                line-height: 30px;
                height: 30px;
            }

            .desc {
                font-size: 14px;
                color: #999;
                text-align: center;
            }
        }
    }
}

.graph {
    display: flex;
    // 两个靠边
    justify-content: space-between;
    margin-top: 20px;

    .el-card {
        width: 49%;
    }
}
</style>