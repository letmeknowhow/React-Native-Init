/**
 *  Class: AppAuthToken
 *  Author: Niu Xiaoyu
 *  Date: 16/2/16.
 *  Description: 用户登录验证
 */

import store from 'react-native-simple-store';

class AppAuthToken {

  // 构造
  constructor() {

  }

  storeSessionToken(access_token, nhic) {
    let datetime = Date.now().toString();
    return store.save('SESSION_TOKEN_KEY', {
      access_token: access_token,
      nhic: nhic,
      tokenTime: datetime
    });
  }

  getSessionToken(access_token, nhic) {
    let datetime = Date.now().toString();
    if(access_token && nhic){
      return store.save('SESSION_TOKEN_KEY', {
        access_token: access_token,
        nhic: nhic,
        tokenTime: datetime
      }).then(() => {
        return store.get('SESSION_TOKEN_KEY');
      });
    }
    return store.get('SESSION_TOKEN_KEY');
  }
  
  updateSessionTokenTime(time) {
    return getSessionToken().then(data => {
      return store.update('SESSION_TOKEN_KEY',{
        access_token: data.access_token,
        nhic: data.nhic,
        tokenTime: time
      });
    });
  }
  
  // 删除sessiontoken
  deleteSessionToken() {
    return store.delete('SESSION_TOKEN_KEY');
  }

}
let appAuthToken = new AppAuthToken();
export default appAuthToken;
