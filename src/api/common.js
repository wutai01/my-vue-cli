import axios from '@/utils/api.request';

// 获取menu
export function getMenu (data = {}) {
  return axios.request({
    url: '/api/menu',
    data: data,
    method: 'get'
  });
};
