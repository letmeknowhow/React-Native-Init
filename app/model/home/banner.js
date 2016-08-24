import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator';
import WebAPI from '../../libs/WebAPI';

@autobind
class BannerStore {
  @observable bannerSource = [];

  constructor() {
    //reaction(()=>this.counter, this.increaseTotal);
  }

  getSource() {
    /**
     * http请求远程图片
     */
    WebAPI.getBanner()
      .then((data) => {
        this.bannerSource = data.json || [];
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new BannerStore();
