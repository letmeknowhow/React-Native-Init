/**
 *  Class: Demand2Fixed
 *  Author: Niu Xiaoyu
 *  Date: 16/5/6.
 *  Description: 活期账户查询
 */

const MOCKDATA_1 = [
  {id: 0, text: '当前账户', amount: '1234********6789', amountColor: 'black', clickable: false},
  {id: 1, text: '余额', amount: '123456', amountColor: 'black', clickable: false},
  {id: 2, text: '存期', amount: '六个月', amountColor: 'black', clickable: true},
  {id: 3, text: '转存方式:', amount: '到期后连本带息转存', amountColor: 'black', clickable: true},
  {id: 4, text: '转账金额', amount: '123', amountColor: 'black', clickable: false},
  {id: 5, text: '取款密码', amount: '******', amountColor: 'black', clickable: false},
];

import React, { Component } from 'react';

import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
const Actions = require('react-native-router-flux').Actions;
import AccountButtonList from './AccountButtonList';
import CommonHeader from './../CommonHeader';

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3',
      marginTop: Platform.OS === 'ios' ? 20 : 0,
      paddingHorizontal: 5
    },
    header: {
      height: 40,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    debit: {
      margin: 5,
      backgroundColor: '#399CE8',
      borderRadius: 5,
      paddingTop: 3,
      borderWidth: 1,
      borderColor: '#E7E7E7'
    },
    searchButton: {
      backgroundColor: '#399CE8',
      height: 30,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    comment: {
      fontSize: 12,
      color: 'gray',
      marginHorizontal: 5,
      marginBottom: 3,
      lineHeight: 15
    }
  }
);

export default class Demand2Fixed extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={styles.page}>
        <CommonHeader data={this.props.data} />
        <AccountButtonList style={{marginBottom: 10}} buttons={MOCKDATA_1}/>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={{color: '#FFF'}}>确定</Text>
        </TouchableOpacity>
        <Text style={styles.comment}>说明:</Text>
        <Text style={styles.comment}>说明1说明1说明1说明1说明1说明1说明1说明1说明1说明1说明1
          说明1说明1说明1说明1说明1说明1说明1说明1说明1说明1说明1</Text>
        <Text style={styles.comment}>说明2说明2说明2说明2说明2说明2说明2说明2说明2说明2说明2
          说明2说明2说明2说明2说明2说明2说明2说明2说明2说明2说明2</Text>
      </View>
    );
  }
}