import axios from 'axios';

/**
 *
 */
interface IFConfig {
    headers: {
        Authorization: string;
        'Content-Type': string;
    };
}
const defaultConfig: IFConfig = {
    headers: {
        Authorization: '1',
        'Content-Type': 'application/json',
    },
};

interface IRequestParam {
    url: string;
    data?: any;
    config?: any;
}
/**
 *  公共post请求
 *  @param url 接口地址
 *  @param data 请求参数
 *  @param config 请求配置
 *
 */
export const post = ({ url, data, config }: IRequestParam): any => {
    return axios
        .post(url, data, (config = defaultConfig))
        .then(res => res.data)
        .catch(err => console.log(err));
};
/**
 *  公共get请求
 *  @param url 接口地址
 *  @param data 请求参数
 *  @param config 请求配置
 *
 */
export const get = ({ url, data, config = defaultConfig }: IRequestParam): any => {
    return axios
        .get(`${url}${data ? data : ''}`, config)
        .then(res => res.data)
        .catch(err => console.log(err));
};
