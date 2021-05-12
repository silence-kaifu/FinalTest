import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';
import qs from 'qs'





let loading: any;

const startLoading = () => {

    interface Options {
        lock: boolean;
        text: string;
        background: string;
    };

    const options: Options = {
        lock: true,
        text: "加载中...",
        background: 'rgba(0,0,0,0.7)'
    }
    loading = ElLoading.service(options);
}

const endLoading = () => {
    loading.close();
}

// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // 加载
    startLoading();
    return config;
})


// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
    // 结束loading
    endLoading();
    return response;
}, error => {
    // 结束loading
    endLoading();
    // 错误提醒
    return Promise.reject(error);
})
//axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.transformRequest = [obj => Qs.stringify(obj)]

export default axios;