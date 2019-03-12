import axios from 'axios';
class HttpRequest {
  constructor (baseUrl = '') {
    this.baseUrl = baseUrl;
    this.queue = {};
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      data: { // 可以添加公共的参数
      }
    };
    return config;
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      return config;
    }, error => {
      return Promise.reject(error);
    });
    // 响应拦截
    instance.interceptors.response.use(res => {
      const {
        data,
        status,
        headers
      } = res;
      return {
        data,
        status,
        headers
      };
    }, error => {
      return Promise.reject(error);
    });
  }
  request (optionsIn) {
    const instance = axios.create();
    let options = this.getInsideConfig();
    if (optionsIn.data) {
      Object.assign(optionsIn.data, options.data);
    } else {
      optionsIn.data = options.data;
    }
    Object.assign(options, optionsIn);
    this.interceptors(instance, options.url);
    let request = instance(options);

    // console.log('ajax', JSON.stringify(options.data))
    return new Promise((resolve, reject) => {
      request.then(({
        status,
        data,
        headers
      }) => {
        if (Number(headers['x-error-code']) === 0) {
          resolve(data);
        } else if (Number(headers['x-error-code']) === 302) {
          window.location.href = data;
        } else {
          return Promise.reject(data);
        }
      }).catch((error) => {
        console.warn(error);
        reject(error);
      });
    });
  }
}
export default HttpRequest;
