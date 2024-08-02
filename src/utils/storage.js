// 存储LocalStorage
export const setStore = (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}
// 获取LocalStorage
export const getStore = name => {
    if (!name) return
    return window.localStorage.getItem(name)
}
// 获取LocalStorage JSON 对象
export const getStoreJSON = name => {
    if (!name) return
    const v = window.localStorage.getItem(name)
    if (!v) return
    return JSON.parse(v)
}
// 删除LocalStorage
export const removeStore = name => {
    if (!name) return
    return window.localStorage.removeItem(name)
}