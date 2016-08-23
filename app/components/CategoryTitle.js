/**
 *  Class: CategoryTitle
 *  Author: Niu Xiaoyu
 *  Date: 16/4/3.
 *  Description:
 */
import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

const styles = {
  page: {
    height: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10
  }
};
export default class CategoryTitle extends Component {

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={[styles.page, this.props.style]}>
        <View style={{width: 8, height: 15, backgroundColor: 'red'}} />
        <Text style={{marginLeft: 10}}>{this.props.title}</Text>
      </View>
    );
  }
}