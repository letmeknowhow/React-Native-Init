/**
 *  Class: MoneyTransfer
 *  Author: Niu Xiaoyu
 *  Date: 16/5/6.
 *  Description: 活期账户查询
 */

const MockData_1 = [
  {id: 0, text: '户名:', amount: '张三', amountColor: 'black', clickable: false},
  {id: 1, text: '账号', amount: '8888 8888 8888 8888', amountColor: 'black', clickable: false},
  {id: 2, text: '银行', amount: '**银行', amountColor: 'black', clickable: true}
];

const MockData_2 = [
  {id: 0, text: '转出账户', amount: '6666 8888 8888 8888', amountColor: 'black', clickable: false},
  {id: 1, text: '余额', amount: '12345', amountColor: 'black', clickable: false},
  {id: 2, text: '转出金额', amount: '123', amountColor: 'black', clickable: false}
];

const MockData_3 = [
  {id: 0, text: '短信通知:', amount: '138 8888 8888', amountColor: 'black', clickable: false},
  {id: 1, text: '转账附言', amount: '转账', amountColor: 'black', clickable: false},
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
      marginBottom: 10,
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

export default class MoneyTransfer extends Component {
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
        <AccountButtonList style={{marginBottom: 10}} buttons={MockData_1}/>
        <AccountButtonList style={{marginBottom: 10}} buttons={MockData_2}/>
        <AccountButtonList style={{marginBottom: 10}} buttons={MockData_3}/>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={{color: '#FFF'}}>下一步</Text>
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