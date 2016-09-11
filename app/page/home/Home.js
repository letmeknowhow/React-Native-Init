/**
 *  Class: Home
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 首页
 */

import React, { Component } from 'react';
import { View, StyleSheet, Platform, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
//style
import NativeTachyons from 'react-native-style-tachyons';
import {styles as s} from 'react-native-style-tachyons';
NativeTachyons.build({
  /* REM parameter it optional, default is 16 */
  rem: deviceWidth > 340 ? 12 : 10
}, StyleSheet);

import Banner from '../../component/Banner';
import Button from '../../component/Button';
import CategoryTitle from '../CategoryTitle';
import GridView from '../../component/GridView';
const Actions = require('react-native-router-flux').Actions;
import SceneHeader from '../../component/SceneHeader';

import PageSwiper from '../../component/react-native-page-swiper/index';
import {observer} from 'mobx-react/native';

const MOCKDATA_ICON1 = [
  {name: '账户查询', icon: require('../../../assets/icons/zhcx.png')},
  {name: '跨行转账', icon: require('../../../assets/icons/khzz.png')},
  {name: '卡卡转账', icon: require('../../../assets/icons/kkzz.png')},
  {name: '生活缴费', icon: require('../../../assets/icons/shjf.png')},
  {name: '个人中心', icon: require('../../../assets/icons/grzx.png')},
  {name: '行内转账', icon: require('../../../assets/icons/hnzz.png')},
  {name: '活期转定期', icon: require('../../../assets/icons/hqzdq.png')},
  {name: '日历', icon: require('../../../assets/icons/tzlc.png')},
];

const MOCKDATA_ICON2 = [
  {name: '我的账户', icon: require('../../../assets/icons/wdzh.png')},
  {name: '转账汇款', icon: require('../../../assets/icons/hnzz.png')},
  {name: '跨行归集', icon: require('../../../assets/icons/khgj.png')},
  {name: '资金管理', icon: require('../../../assets/icons/zjgl.png')},
  {name: '投资理财', icon: require('../../../assets/icons/tzlc.png')},
  {name: '生活缴费', icon: require('../../../assets/icons/shjf.png')},
  {name: '个人中心', icon: require('../../../assets/icons/grzx.png')},
  {name: '小额循环贷', icon: require('../../../assets/icons/kkzz.png')},
];

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3',
      paddingHorizontal: 5
    },
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
      width: 35
    },
  }
);

@observer
export default class Home extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    this.store = this.props.store.home;
    this.state = {
    };
  }

  componentDidMount() {
    //const homeStore = this.props.store.home;
    this.store.banner.getSource();
    this.store.region2.getSource();
  }

  // 渲染
  render() {
    const store = this.props.store;
    return (
        <View style={[styles.page]}>
          <SceneHeader sceneStore={store.sidemenu} title="首页" />
          <ScrollView
            scrollsToTop={true}
            showsVerticalScrollIndicator={false}
            directionalLockEnabled={true}>
            <Banner
              style={styles.banner}
              source={store.home.banner.bannerSource}
              height={140}
              autoPlay={true}
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
            <View style={{height: 3, marginVertical: 5, backgroundColor: 'gray'}} />
            <CategoryTitle title="旅游推荐"/>
            <View style={{marginHorizontal: 5}}>
              {this.renderRegion2(store.home.region2.region2Source)}
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
      <Button key={item.name} style={[styles.button]} onPress={() => {this.getAction(item.name); } }>
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
      case '日历':
        Actions.calendar({data: button});
        break;
      default:

    }
  }

  renderRegion1(item) {
    return (
      <TouchableOpacity key={item.id} style={styles.region1} onPress={() => Actions.productDetail({data: item.text, url: item.url})}>
        <Image style={{flex: 1, width: deviceWidth / 2 - 10}} source={item.uri} resizeMode={'stretch'} >
          <Text style={styles.nestedText}>
            {item.text}
          </Text>
        </Image>
      </TouchableOpacity>
    );
  }

  renderRegion2(source) {
    return source.map((item) => {
      let bgColor = {backgroundColor: 'green'};
      if (item.category === '跟团游') {
        bgColor = {backgroundColor: 'orange'};
      }
      return (
        <TouchableOpacity key={item.id} onPress={() => Actions.productDetail({data: item.title, url: item.url})}
                          style={{height: 80, width: deviceWidth - 10, flexDirection: 'row', marginVertical: 3}}>
          <Image style={{width: 80, height: 80}} source={{uri: item.uri}}>
            <Text style={[styles.nestedText2, bgColor]}>{item.category}</Text>
          </Image>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={[s.fw7, s.f5]}>{item.title}</Text>
            <Text style={[s.f6]}>{item.text}</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
              <Text style={[s.f5]}>{`出发地: ${item.starting}`}</Text>
              <Text style={[{color: 'red'}, s.f4]}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }
}