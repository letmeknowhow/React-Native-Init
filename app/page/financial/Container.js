/**
 *  Class: Container
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 首页
 */

const MockUrl = '../../../assets/HelloWorld.html';
const MOCKDATA_BANNER = [
  //{id: '1', uri: require('../../../assets/banner/usa.png'), url: {uri: 'http://pr.mangocity.com/us_trip/?zy=mgs_jx'}},
  {id: '1', uri: require('../../../assets/banner/3.png'), url: MockUrl},
  {id: '2', uri: require('../../../assets/banner/4.png'), url: MockUrl},
  {id: '3', uri: require('../../../assets/banner/1.png'), url: MockUrl},
  {id: '4', uri: require('../../../assets/banner/2.png'), url: MockUrl}
];
const MOCKDATA_REGION1 = [
  {id: '1', title: '鑫盛理财(2016年第68期)', start: '50,000.00', duration: '33', expected: '4.3%', raise: '2016-05-06至2016-05-12', url: MockUrl},
  {id: '2', title: '鑫盛理财(2016年第69期)', start: '50,000.00', duration: '90', expected: '4.2%', raise: '2016-05-06至2016-05-12', url: MockUrl},
  {id: '3', title: '鑫盛理财(2016年第70期)', start: '50,000.00', duration: '364', expected: '4.2%', raise: '2016-05-06至2016-05-12', url: MockUrl},
  {id: '4', title: '鑫盛理财(2016年第71期)', start: '50,000.00', duration: '30', expected: '4.2%', raise: '2016-05-10至2016-05-16', url: MockUrl},
];
const MOCKDATA_REGION2 = [
  {
    id: '1', uri: require('../../../assets/banner/1.png'),
    title: `"权威人士"重磅发声 透露赚钱方向`,
    text: '中国经济将走"L"型",有哪些机会可以赚钱?',
    category: '理财三板斧',
    url: MockUrl
  },
  {
    id: '2', uri: require('../../../assets/banner/2.png'),
    title: `证监会严控定增 跨界虚拟产业被禁`,
    text: '叫停上市公司跨界从事互联网金融,游戏,影视,VR四个行业的定增',
    category: '要闻直击',
    url: MockUrl
  },
  {
    id: '3', uri: require('../../../assets/banner/3.png'),
    title: `深圳加码保障房 土地供应倚重存量`,
    text: '深圳"十三五"计划新增保障房35万套,相当于"十二五"实际供应量的3倍',
    category: '要闻直击',
    url: MockUrl
  },
  {
    id: '4', uri: require('../../../assets/banner/1.png'),
    title: `"权威人士"重磅发声 透露赚钱方向`,
    text: '中国经济将走"L"型",有哪些机会可以赚钱?',
    category: '理财三板斧',
    url: MockUrl
  },
  {
    id: '5', uri: require('../../../assets/banner/2.png'),
    title: `证监会严控定增 跨界虚拟产业被禁`,
    text: '叫停上市公司跨界从事互联网金融,游戏,影视,VR四个行业的定增',
    category: '要闻直击',
    url: MockUrl
  },
  {
    id: '6', uri: require('../../../assets/banner/3.png'),
    title: `深圳加码保障房 土地供应倚重存量`,
    text: '深圳"十三五"计划新增保障房35万套,相当于"十二五"实际供应量的3倍',
    category: '要闻直击',
    url: MockUrl
  },
  {
    id: '7', uri: require('../../../assets/banner/1.png'),
    title: `"权威人士"重磅发声 透露赚钱方向`,
    text: '中国经济将走"L"型",有哪些机会可以赚钱?',
    category: '理财三板斧',
    url: MockUrl
  },
  {
    id: '8', uri: require('../../../assets/banner/2.png'),
    title: `证监会严控定增 跨界虚拟产业被禁`,
    text: '叫停上市公司跨界从事互联网金融,游戏,影视,VR四个行业的定增',
    category: '要闻直击',
    url: MockUrl
  },
  {
    id: '9', uri: require('../../../assets/banner/3.png'),
    title: `深圳加码保障房 土地供应倚重存量`,
    text: '深圳"十三五"计划新增保障房35万套,相当于"十二五"实际供应量的3倍',
    category: '要闻直击',
    url: MockUrl
  },
];

import React, { Component } from 'react';
import { View, StyleSheet, Platform, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
import Banner from '../../component/Banner';
import Button from '../../component/Button';
import CategoryTitle from '../CategoryTitle';
import GridView from '../../component/GridView';
import ButtonList from '../ButtonList';
import SceneHeader from '../../component/SceneHeader';
const Actions = require('react-native-router-flux').Actions;

import PageSwiper from '../../component/react-native-page-swiper/index';

const MOCKDATA_ICON1 = [
  {name: '我的资产', icon: require('../../../assets/icons/zhcx.png')},
  {name: '自选产品', icon: require('../../../assets/icons/khzz.png')},
  {name: '财经早晚餐', icon: require('../../../assets/icons/kkzz.png')},
  {name: '权威解读', icon: require('../../../assets/icons/shjf.png')},
  {name: '基金排行', icon: require('../../../assets/icons/grzx.png')},
  {name: '理财产品', icon: require('../../../assets/icons/hnzz.png')},
  {name: '精选产品', icon: require('../../../assets/icons/hqzdq.png')},
  {name: '产品大全', icon: require('../../../assets/icons/tzlc.png')},
];

const MOCKDATA_ICON2 = [
  {name: '银证转账', icon: require('../../../assets/icons/wdzh.png')},
  {name: '风险评估', icon: require('../../../assets/icons/hnzz.png')},
  {name: '凭证式国债', icon: require('../../../assets/icons/khgj.png')},
  {name: '大额存单', icon: require('../../../assets/icons/zjgl.png')},
  {name: '鑫盛理财', icon: require('../../../assets/icons/tzlc.png')},
  {name: '纸黄金白银', icon: require('../../../assets/icons/shjf.png')},
  {name: '金银收藏品', icon: require('../../../assets/icons/grzx.png')},
  {name: '定期存款', icon: require('../../../assets/icons/kkzz.png')},
];


const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3',
      paddingHorizontal: 5,
    },
    header: {
      height: 40,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    logoContainer: {height: 50, alignItems: 'center', marginTop: Platform.OS === 'ios' ? 20 : 0, flexDirection: 'row'},
    banner: {height: 140, overflow: 'hidden', marginBottom: 10},
    button: {flex: 1, margin: 0, borderWidth: 1, borderColor: '#f3f2f3', height: 70, borderRadius: 0, backgroundColor: '#FFF'},
    region1: {flex: 1, margin: 2, borderWidth: 0, height: 160, alignItems: 'stretch', justifyContent: 'center'},
    nestedText: {
      marginLeft: 12,
      marginTop: 140,
      backgroundColor: 'transparent',
      color: 'white'
    },
    nestedText2: {
      color: 'white',
      fontSize: 10,
      padding: 2,
      //width: 35
    },
    button_reg: {
      height: 90,
      flexDirection: 'row',
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: '#E7E7E7',
      //alignItems: 'center',
      //justifyContent: 'space-between',
      backgroundColor: '#FFF',
      paddingHorizontal: 5
    },
  }
);

export default class Container extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染
  render() {
    const store = this.props.store.sidemenu;
    return (
      <View style={[styles.page]}>
        <SceneHeader sceneStore={store} title="理财" />
        <ScrollView
          scrollsToTop={true}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}>
          <Banner
            style={styles.banner}
            source={MOCKDATA_BANNER}
            height={140}
            autoPlay={false}
          />
          <PageSwiper style={styles.wrapper}>
            <GridView style={{flex: 1}}
                      items={MOCKDATA_ICON1}
                      itemsPerRow={4}
                      scrollEnabled={false}
                      rowHeight={70}
                      renderItem={this.renderItem.bind(this)}
            />
            <GridView style={{flex: 1}}
                      items={MOCKDATA_ICON2}
                      itemsPerRow={4}
                      scrollEnabled={false}
                      rowHeight={70}
                      renderItem={this.renderItem.bind(this)}
            />
          </PageSwiper>

          <CategoryTitle title="投资热点"/>
          <ButtonList buttons={MOCKDATA_REGION1} renderButton={this.renderRegion1.bind(this)} />
          <View style={{height: 3, marginVertical: 5, backgroundColor: 'gray'}} />
          <CategoryTitle title="财经资讯"/>
          <View style={{marginHorizontal: 5}}>
            {this.renderRegion2()}
          </View>
          <View style={{marginHorizontal: 5, height: 70, alignItems: 'center'}}>
            <Text>全部加载完成</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderItem(item) {
    return (
      <Button key={item.name} style={[styles.button]} onPress={() => {this.getAction(item.name);}}>
        <Image style={{height: 30, width: 30}} source={item.icon} />
        <Text style={{marginTop: 3}}>
          {item.name}
        </Text>
      </Button>
    );
  }

  getAction(button) {
    switch (button) {
      case '账户查询':
        Actions.accountSummary({data: button});
        break;
      case '跨行转账':
        Actions.moneyTransfer({data: button});
        break;
      case '卡卡转账':
        Actions.moneyTransfer({data: button});
        break;
      case '行内转账':
        Actions.moneyTransfer({data: button});
        break;
      case '活期转定期':
        Actions.demand2Fixed({data: button});
        break;
      default:

    }
  }

  renderRegion1(item) {
    return (
      <TouchableOpacity key={item.id} style={styles.button_reg} onPress={() => Actions.productDetail({data: item.title, url: item.url})}>
        <View style={{width: 70, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 18, color: 'red'}}>{`${item.expected}`}</Text>
          <Text style={{fontSize: 10, color: 'red'}}>预期收益</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'space-between', paddingVertical: 5}}>
          <Text style={{fontSize: 16}}>{item.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12, marginRight: 5}}>认购起点(元): </Text>
            <Text style={{fontSize: 16, color: 'red'}}>{item.start}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12, marginRight: 5}}>期限(天): </Text>
            <Text style={{fontSize: 16, color: 'red'}}>{item.duration}</Text>
          </View>
          <Text style={{fontSize: 12}}>{`筹集期: ${item.raise}`}</Text>
        </View>
        <View style={{width: 30, alignItems: 'flex-end', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, color: 'gray'}}>{`>`}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderRegion2() {
    return MOCKDATA_REGION2.map((item) => {
      let bgColor = {backgroundColor: 'green'};
      if (item.category === '要闻直击') {
        bgColor = {backgroundColor: 'orange'};
      }
      return (
        <TouchableOpacity key={item.id} onPress={() => Actions.productDetail({data: item.title, url: item.url})}
                          style={{height: 80, width: deviceWidth - 10, flexDirection: 'row', marginVertical: 3, backgroundColor: '#fff'}}>
          <Image style={{width: 80, height: 80}} source={item.uri}>
            <Text style={[styles.nestedText2, bgColor]}>{item.category}</Text>
          </Image>
          <View style={{flex: 1, marginHorizontal: 10, paddingVertical: 3}}>
            <Text style={{fontWeight: '400', fontSize: 13, marginBottom: 8}}>{item.title}</Text>
            <Text style={{fontWeight: '200', fontSize: 12}}>{item.text}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }
}