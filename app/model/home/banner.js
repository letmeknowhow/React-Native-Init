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
    const MockUrl = '../../../assets/HelloWorld.html';
    this.bannerSource = [
      {id: '1', uri: require('../../../assets/banner/1.png'), url: MockUrl},
      {id: '2', uri: require('../../../assets/banner/2.png'), url: MockUrl},
      {id: '3', uri: require('../../../assets/banner/3.png'), url: MockUrl},
      {id: '4', uri: require('../../../assets/banner/4.png'), url: MockUrl}
    ];

    /**
     * http请求远程图片
     */
    //WebAPI.banners({columnId:784})
    //.then((data) => {
    //  const bannerList = data.json.columnIssueList;
    //  this.bannerSource = bannerList.map((banner, ind) => {
    //    return {
    //      id: ind,
    //      uri: banner.picUrl,
    //      url: banner.link
    //    };
    //  });
    //});
  }
}

export default new BannerStore();
