/**
 *  Class: Payment
 *  Author: Niu Xiaoyu
 *  Date: 16/5/9.
 *  Description:
 */
import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import CommonHeader from './CommonHeader';
const styles = StyleSheet.create({
  page: {
    flex: 1,
    //backgroundColor: '#f3f2f3',
    //paddingHorizontal: 5,
  },
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    alignItems: 'center',
    //paddingHorizontal: 5,
    marginHorizontal: 5,
    //paddingVertical: 10,
    padding: 10
  },
  label: {
    width: 100
  },
  dataInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    //height: 50,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  searchButton: {
    backgroundColor: '#399CE8',
    height: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5
  }
});

export default class Payment extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View  style={[styles.page, {marginTop: Platform.OS === 'ios' ? 20 : 0}]}>
        <CommonHeader data={this.props.data} />
        <View style={[styles.container, {borderTopRightRadius: 5, borderTopLeftRadius: 5}]}>
          <Text style={styles.label}>缴费类型:</Text>
          <Text style={{color: '#399CE8'}}>{this.props.feeType}</Text>
        </View>
        <View style={[styles.container, {borderBottomRightRadius: 5, borderBottomLeftRadius: 5, borderTopWidth: 0}]}>
          <Text style={styles.label}>{this.props.label}</Text>
          <TextInput style={styles.dataInput} placeholder={this.props.placeHolder} />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={{color: '#FFF'}}>下一步</Text>
        </TouchableOpacity>
      </View>
    );
  }
}