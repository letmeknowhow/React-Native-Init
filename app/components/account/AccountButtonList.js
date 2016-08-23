/**
 *  Class: AccountButtonList
 *  Author: Niu Xiaoyu
 *  Date: 16/4/3.
 *  Description:
 */
import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Actions = require('react-native-router-flux').Actions;
const buttonHeight = 35;
const styles = StyleSheet.create({
  //page: {margin: 15},
  button: {
    height: buttonHeight,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#E7E7E7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 15
  },
  font: {
    fontSize: 14
  },
});
export default class AccountButtonList extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={[{height: this.props.buttons.length * buttonHeight}, this.props.style]}>
        {this.renderButton(this.props.buttons, this.props.action)}
      </View>
    );
  }

  renderButton(buttons, action) {
    return buttons.map((button) => {
      if(button.clickable) {
        return (
          <TouchableOpacity key={button.id} style={styles.button} activeOpacity={0.8}
                onPress={this.setButtonAction(button.text)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.font}>{button.text}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.font,{color: button.amountColor}]}>{this.formatMoney(button.amount)}</Text>
              <Text>{'  >'}</Text>
            </View>
          </TouchableOpacity>
        );
      } else {
        return (
          <View key={button.id} style={styles.button}
                onPress={this.setButtonAction(button.text)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.font}>{button.text}</Text>
            </View>
            <Text style={[styles.font,{color: button.amountColor}]}>{this.formatMoney(button.amount)}</Text>
          </View>
        );
      }
    });
  }

  setButtonAction(text) {
    let action;
    switch (text){
      case '活期结算户':
        action = Actions.demandDepositSearch;
        break;
      case '定期结算户':
        action = Actions.fixedDepositSearch;
        break;
      default:
    }
    return action;
  }

  formatMoney(money) {
    if (/[^0-9\.]/.test(money)) return money;
    money = money.replace(/^(\d*)$/, "$1.");
    money = (money + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    money = money.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(money)) {
      money = money.replace(re, "$1,$2");
    }
    money = money.replace(/,(\d\d)$/, ".$1");
    return '' + money.replace(/^\./, "0.");
  }
}