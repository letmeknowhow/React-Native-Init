import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator';

@autobind
class Region2Store {
  @observable region2Source = [];

  constructor() {
    //reaction(()=>this.counter, this.increaseTotal);
  }

  getSource() {
    const MockUrl = '../../../assets/HelloWorld.html';
    this.region2Source = [
      {
        id: '1', uri: require('../../../assets/banner/1.png'),
        title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
        text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
        starting: '焦作',
        price: '￥1999.0起',
        category: '跟团游',
        url: MockUrl
      },
      {
        id: '2', uri: require('../../../assets/banner/2.png'),
        title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
        text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
        starting: '深圳',
        price: '￥599.0起',
        category: '自助游',
        url: MockUrl
      },
      {
        id: '3', uri: require('../../../assets/banner/3.png'),
        title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
        text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
        starting: '大连',
        price: '￥2999.0起',
        category: '自助游',
        url: MockUrl
      },
      {
        id: '4', uri: require('../../../assets/banner/4.png'),
        title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
        text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
        starting: '焦作',
        price: '￥999.0起',
        category: '跟团游',
        url: MockUrl
      },
      {
        id: '5', uri: require('../../../assets/banner/1.png'),
        title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
        text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
        starting: '郑州',
        price: '￥1999.0起',
        category: '自助游',
        url: MockUrl
      },
      {
        id: '6', uri: require('../../../assets/banner/2.png'),
        title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
        text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
        starting: '北京',
        price: '￥1999.0起',
        category: '跟团游',
        url: MockUrl
      },
      {
        id: '7', uri: require('../../../assets/banner/3.png'),
        title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
        text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
        starting: '珠海',
        price: '￥699.0起',
        category: '跟团游',
        url: MockUrl
      },
      {
        id: '8', uri: require('../../../assets/banner/4.png'),
        title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
        text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
        starting: '天津',
        price: '￥3999.0起',
        category: '自助游',
        url: MockUrl
      }
    ];
  }
}

export default new Region2Store();
