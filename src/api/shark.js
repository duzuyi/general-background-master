import request from '@/utils/axios'
export function getSalesTableList(query) {
    // 登录
    return request({
        url: 'nms-marketing/modules/user/login',
        method: 'post',
        data: query,
    })
}

export function getSalesTab(query) {
    return request({
        url: 'nms-marketing/sms/send',
        method: 'get',
        params: query,
    })
}

export  function getLuyouTberber(query){
    return request({
        url: 'nms-marketing/modules/menu/nav',
        method: 'get',
        params: query,
    })
}