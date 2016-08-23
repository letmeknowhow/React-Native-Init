/**
 *  Class: FixedDepositSearch
 *  Author: Niu Xiaoyu
 *  Date: 16/5/6.
 *  Description: 定期账户查询
 */

const MOCKDATA_1 = [
  {id: 0, text: '当前账号', amount: '1234********5678', amountColor: 'black', clickable: false},
];
const MOCKDATA_2 = [
  {id: 0, text: '整存整取户明细:', amount: ' ', amountColor: 'black', clickable: false},
  {id: 1, text: '币种', amount: '人民币', amountColor: 'black', clickable: false},
  {id: 2, text: '余额', amount: '88888.88 元', amountColor: 'black', clickable: false},
  {id: 3, text: '利率', amount: '1.5500%', amountColor: 'black', clickable: false},
  {id: 4, text: '状态', amount: '活动', amountColor: 'black', clickable: false},
  {id: 5, text: '定期序号', amount: 'a0017', amountColor: 'black', clickable: false},
  {id: 6, text: '存期', amount: '六个月', amountColor: 'black', clickable: false},
  {id: 7, text: '起息日', amount: '2016-01-01', amountColor: 'black', clickable: false},
  {id: 8, text: '到期日', amount: '2016-07-01', amountColor: 'black', clickable: false}
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
      justifyContent: 'center'
    }
  }
);

export default class FixedDepositSearch extends Component {
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
        <CommonHeader data="定期结算户" />
        <AccountButtonList style={{marginBottom: 10}} buttons={MOCKDATA_1}/>
        <AccountButtonList style={{marginBottom: 10}} buttons={MOCKDATA_2}/>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={{color: '#FFF'}}>交易查询</Text>
        </TouchableOpacity>
      </View>
    );
  }
}