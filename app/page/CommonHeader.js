/**
 *  Class: CommonHeader
 *  Author: Niu Xiaoyu
 *  Date: 16/4/6.
 *  Description:
 */
import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Actions = require('react-native-router-flux').Actions;
const backIcon = require('../../assets/icons/arrow_left.png');
const styles = StyleSheet.create({
  page: {
    height: 30,
    paddingLeft: 5,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  back_button: {
    width: 30,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  back_img: {
    height: 30,
    width: 30
  }
});
export default class CommonHeader extends Component {
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={styles.page}>
        <TouchableOpacity style={{width: 30, alignItems: 'center', backgroundColor: 'transparent'}} onPress={Actions.pop}>
          <Image style={styles.back_img} source={backIcon} />
        </TouchableOpacity>
        <Text style={{flex: 1, textAlign: 'center', marginRight: 15}}>
          {this.props.data}
        </Text>
      </View>
    );
  }
}