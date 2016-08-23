import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator';

@autobind
class Region1Store {
  @observable region1Source = [];

  constructor() {
    //reaction(()=>this.counter, this.increaseTotal);
  }

  getSource() {
    const MockUrl = '../../../assets/HelloWorld.html';
    this.region1Source = [
      {id: '1', uri: require('../../../assets/banner/1.png'), text: '鑫盛理财', url: MockUrl},
      {id: '2', uri: require('../../../assets/banner/2.png'), text: 'A理财', url: MockUrl},
      {id: '3', uri: require('../../../assets/banner/3.png'), text: 'B理财', url: MockUrl},
      {id: '4', uri: require('../../../assets/banner/4.png'), text: 'C理财', url: MockUrl}
    ];
  }
}

export default new Region1Store();
