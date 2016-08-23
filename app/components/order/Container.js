/**
 *  Class: container
 *  Author: Niu Xiaoyu
 *  Date: 16/5/11.
 *  Description: 出行
 */

const MockData = [
  {id: 0, text: '跟团游', uri: require('../../../assets/icons/gty.png')},
  {id: 1, text: '自助游', uri: require('../../../assets/icons/zzy.png')},
  {id: 2, text: '游轮', uri: require('../../../assets/icons/yl.png')},
  {id: 3, text: '门票', uri: require('../../../assets/icons/mp.png')},
  {id: 4, text: '酒店', uri: require('../../../assets/icons/jd.png')},
  {id: 5, text: '机票', uri: require('../../../assets/icons/jp.png')},
  {id: 6, text: '包团', uri: require('../../../assets/icons/bt.png')},
  {id: 7, text: '团购', uri: require('../../../assets/icons/tg.png')},
];

import React, { Component } from 'react';

import { View, Text, StyleSheet, Platform } from 'react-native';
const Actions = require('react-native-router-flux').Actions;
import ButtonList from '../ButtonList';
import SceneHeader from '../../baseComponents/SceneHeader';

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3',
      paddingHorizontal: 5
    },
    header: {
      height: 40,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    }
  }
);

export default class Container extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  render() {
    const store = this.props.store.sidemenu;
    return (
      <View style={styles.page}>
        <SceneHeader sceneStore={store} title="出行" />
        <ButtonList style={{flex: 1}} buttons={MockData} />
      </View>
    );
  }
}