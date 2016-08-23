/**
 *  Class: ConfigMenu
 *  Author: Niu Xiaoyu
 *  Date: 16/2/16.
 *  Description:
 */
const MockData_1 = [
  {id: 0, uri: require('../../assets/icons/mine/xxzx.png'), text: '登录密码修改'},
  {id: 1, uri: require('../../assets/icons/mine/cydz.png'), text: '限额设置'},
  {id: 2, uri: require('../../assets/icons/mine/cylk.png'), text: '用户名设置'}
];
const MockData_2 = [
  {id: 0, uri: require('../../assets/icons/mine/gywm.png'), text: '账号保护'},
  {id: 1, uri: require('../../assets/icons/mine/qb.png'), text: '预留信息设置'},
  {id: 2, uri: require('../../assets/icons/mine/sz.png'), text: '交易密码修改'}
];
const MockData_3 = [
  {id: 0, uri: require('../../assets/icons/mine/qb.png'), text: '手势密码'},
  {id: 1, uri: require('../../assets/icons/mine/sz.png'), text: '短信提醒管理'},
];
const MockData_4 = [
  {id: 0, uri: require('../../assets/icons/mine/sz.png'), text: '检查更新'},
];
import React, { Component } from 'react';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

import ButtonList from '../components/ButtonList';
import ModalBox from '../baseComponents/ModalBox';
const Actions = require('react-native-router-flux').Actions;

const window = Dimensions.get('window');
const myPortrait = require('../../assets/icons/config.png');
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#CCC9C9',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#FFF',
    width: 210
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  name: {
    fontSize: 16
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    backgroundColor: '#fff'
  },
  button: {
    height: 30,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#E7E7E7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingHorizontal: 15
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 20
  }
});

export default class ConfigMenu extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        progress: false,
      };
    }
  // 渲染
  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={myPortrait}/>
          <Text style={styles.name}>设置</Text>
        </View>
        <ButtonList style={{width: 210}}
                    buttonType={{height: 30, backgroundColor: 'transparent'}}
                    buttons={MockData_1} />
        <ButtonList style={{width: 210, marginTop: 10}}
                    buttonType={{height: 30, backgroundColor: 'transparent'}}
                    buttons={MockData_2} />
        <ButtonList style={{width: 210, marginTop: 10}}
                    buttonType={{height: 30, backgroundColor: 'transparent'}}
                    buttons={MockData_3} />
        <ButtonList style={{width: 210, marginTop: 10}}
                    buttons={MockData_4}  renderButton={this.renderButton.bind(this)}/>
        <ModalBox style={[styles.modal]} swipeToClose={false} position={"center"} ref={"downloadBox"}>
          <View style={styles.message}>
            <Text>{this.state.syncMessage}</Text>
            {this.state.progress && (
              <Text>{this.state.progress.receivedBytes} / {this.state.progress.totalBytes}</Text>)}
          </View>
          <View style={{width: window.width / 3, backgroundColor: 'transparent'}}>

          </View>
        </ModalBox>
      </View>
    );
  }

  renderButton(button) {
    return (
      <TouchableOpacity key={button.id} style={[styles.button]}
                        onPress={this.getAction(button.text)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.icon} source={button.uri}/>
          <Text style={{fontSize: 16}}>{button.text}</Text>
        </View>
        <Text>{'>'}</Text>
      </TouchableOpacity>
    );
  }

  getAction(button) {
    let action;
    switch (button) {
      case '检查更新':
        action = this.check4Update.bind(this);
        break;
      default:
    }
    return action;
  }

  check4Update() {


  }
}
