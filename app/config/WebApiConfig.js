/**
 *  Class: WebApiConfig
 *  Author: Niu Xiaoyu
 *  Date: 16/2/16.
 *  Description: 请求配置项
 */

import global from '../config/global';

export default {
  baseurl: '',
  api: [
    {
      name: 'getBanner',
      method: 'get',
      url: global.webApiURL + '/banner.json',
      desc: 'xxx'
    },
    {
      name: 'getRegion2',
      method: 'get',
      url: global.webApiURL + '/region2.json',
      desc: 'xxx'
    }
  ]
};
