import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator';
import WebAPI from '../../libs/WebAPI';

@autobind
class Region2Store {
  @observable region2Source = [];

  constructor() {
    //reaction(()=>this.counter, this.increaseTotal);
  }

  getSource() {
    /**
     * http请求远程图片
     */
    WebAPI.getRegion2()
      .then((data) => {
        this.region2Source = data.json || [];
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new Region2Store();
