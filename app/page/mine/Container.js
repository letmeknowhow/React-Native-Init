/**
 *  Class: container
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 手机银行
 */

const MOCKDATA_ICON = [
  {name: '手机充值', icon: require('../../../assets/icons/sjcz.png')},
  {name: '电费缴费', icon: require('../../../assets/icons/dfjf.png')},
  {name: '水费缴费', icon: require('../../../assets/icons/sfjf.png')},
  {name: '燃气缴费', icon: require('../../../assets/icons/rqjf.png')},
  {name: '缴费查询', icon: require('../../../assets/icons/jfcx.png')},
  {name: ''},
];

import React, { Component } from 'react';

import { View, Text, StyleSheet, Platform, ScrollView, Image } from 'react-native';
const Actions = require('react-native-router-flux').Actions;
import Button from '../../component/Button';
import GridView from '../../component/GridView';
import SceneHeader from '../../component/SceneHeader';

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3',
      //marginTop: Platform.OS === 'ios' ? 20 : 0,
      paddingHorizontal: 5
    },
    header: {
      height: 40,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 2
    },
    button: {flex: 1, margin: 0, borderWidth: 1, borderColor: '#f3f2f3', height: 100, borderRadius: 0, backgroundColor: '#FFF'},
  }
);

export default class Container extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const store = this.props.store.sidemenu;
    return (
      <View style={styles.page}>
        <SceneHeader sceneStore={store} title="我的" />
        <ScrollView
          scrollsToTop={true}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}>
          <GridView style={{flex: 1}}
                    items={MOCKDATA_ICON}
                    itemsPerRow={3}
                    scrollEnabled={false}
                    rowHeight={100}
                    renderItem={this.renderItem.bind(this)}
          />
        </ScrollView>
      </View>
    );
  }

  renderItem(item) {
    let buttonStyle = [];
    if (item.name && item.icon) {
      buttonStyle = [styles.button];
    } else {
      buttonStyle = [styles.button, {backgroundColor: 'transparent'}];
    }
    return (
      <Button key={item.name} style={buttonStyle} onPress={() => {this.getAction(item.name);}} >
        <Image style={{height: 40, width: 40}} source={item.icon} />
        <Text style={{marginTop: 10}}>
          {item.name}
        </Text>
      </Button>
    );
  }

  getAction(button) {
    switch (button) {
      case '手机充值':
        Actions.payment({data: button, feeType: '手机缴费', label: '手机号码:', placeHolder: '请输入手机号码'});
        break;
      case '电费缴费':
        Actions.payment({data: button, feeType: '电费', label: '用户编号:', placeHolder: '请输入用户编号'});
        break;
      case '水费缴费':
        Actions.payment({data: button, feeType: '水费', label: '用户编号:', placeHolder: '请输入用户编号'});
        break;
      case '燃气缴费':
        Actions.payment({data: button, feeType: '燃气费', label: '用户编号:', placeHolder: '请输入用户编号'});
        break;
      case '缴费查询':
        Actions.paymentSearch({data: button});
        break;
      default:
    }

  }
}