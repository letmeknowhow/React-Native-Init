import React, { Component } from 'react';
import {Scene, Router, TabBar, Modal, Schema, Actions} from 'react-native-mobx';
import { View, Navigator, Text, StyleSheet, Platform, Image, Alert, BackAndroid } from 'react-native';

import codePush from 'react-native-code-push';

import ModalBox from '../baseComponents/ModalBox';
//model
import CTSAppStore from '../model';

//侧边菜单
import Drawer from './Drawer';

/** 主tab 四页*/
import Home from '../components/home/Home';
import Financial from '../components/financial/Container';
import Order from '../components/order/Container';
import Mine from '../components/mine/Container';

import ProductDetail from '../components/product/ProductDetail';

//账户总览
import AccountSummary from '../components/account/AccountSummary';
import DemandDepositSearch from '../components/account/DemandDepositSearch';
import FixedDepositSearch from '../components/account/FixedDepositSearch';
import MoneyTransfer from '../components/account/MoneyTransfer';

//定期转活期
import Demand2Fixed from '../components/account/Demand2Fixed';
//缴费
import Payment from '../components/Payment';
import PaymentSearch from '../components/PaymentSearch';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    marginBottom: 0,
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});
const TAB_TITLE_HOME = '首页';
const TAB_TITLE_FINANCIAL = '理财';
const TAB_TITLE_ORDER = '出行';
const TAB_TITLE_MINE = '我的';

if (Platform.OS === 'android') {
  BackAndroid.addEventListener('hardwareBackPress', () => {
    if (!Actions.pop()) {
      Alert.alert('提示', '确定要退出应用吗?',
        [
          {text: '取消'},
          {text: '退出', onPress: () => BackAndroid.exitApp()}
        ]
      );
    }
    return true; // 返回true,不退出程序
  });
}

class TabIcon extends React.Component {

  render() {
    let uri;
    switch (this.props.title) {
      case TAB_TITLE_HOME:
        uri = require('../../assets/icons/Home.png');
        break;
      case TAB_TITLE_FINANCIAL:
        uri = require('../../assets/icons/financial.png');
        break;
      case TAB_TITLE_ORDER:
        uri = require('../../assets/icons/Order.png');
        break;
      default:
        uri = require('../../assets/icons/Mine.png');
    }
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={uri} style={{width: 25, height: 25, tintColor: this.props.selected ? '#2897EC' : null}}/>
        <Text
          style={{color: this.props.selected ? '#2897EC' : 'black', fontSize: 12, marginTop: 3}}>{this.props.title}</Text>
      </View>
    );
  }
}

class Application extends Component {

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      progress: false,
    };
  }

  componentWillMount() {
    let self = this;
    codePush.sync(
      {
        updateDialog: {
          title: '升级提醒',
          optionalUpdateMessage: '有一个可用的更新 是否需要安装?',
          optionalInstallButtonLabel: '马上更新',
          optionalIgnoreButtonLabel: '暂不更新'
        },
        installMode: codePush.InstallMode.IMMEDIATE,
      },
      (syncStatus) => {
        switch (syncStatus) {
          case codePush.SyncStatus.CHECKING_FOR_UPDATE:
            self.setState({
              syncMessage: '正在检查更新.'
            });
            break;
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            self.setState({
              syncMessage: '正在下载.'
            });
            this.refs.downloadBox.open();
            break;
          case codePush.SyncStatus.AWAITING_USER_ACTION:
            self.setState({
              syncMessage: 'Awaiting user action.'
            });
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            self.setState({
              syncMessage: '正在安装.'
            });
            this.refs.downloadBox.close();
            break;
          case codePush.SyncStatus.UP_TO_DATE:
            self.setState({
              syncMessage: '更新版本号到最新',
              progress: false
            });
            break;
          case codePush.SyncStatus.UPDATE_IGNORED:
            self.setState({
              syncMessage: 'Update cancelled by user.',
              progress: false
            });
            break;
          case codePush.SyncStatus.UPDATE_INSTALLED:
            self.setState({
              syncMessage: '更新已经安装,下次重启后应用更新内容',
              progress: false
            });
            break;
          case codePush.SyncStatus.UNKNOWN_ERROR:
            self.setState({
              syncMessage: '一个未知错误',
              progress: false
            });
            break;
          default:

        }
      },
      (progress) => {
        self.setState({
          progress
        });
      }
    );
  }

  render() {

    return (
      <View style={{flex: 1}}>
        <Router hideNavBar={true} store={CTSAppStore} sceneStyle={{backgroundColor: '#F7F7F7'}}>
          <Scene key="root" hideNavBar={true}>
            <Scene key="productDetail" component={ProductDetail}/>
            <Scene key="accountSummary" component={AccountSummary} title="账户查询"/>
            <Scene key="demandDepositSearch" component={DemandDepositSearch}/>
            <Scene key="fixedDepositSearch" component={FixedDepositSearch}/>
            <Scene key="moneyTransfer" component={MoneyTransfer}/>
            <Scene key="demand2Fixed" component={Demand2Fixed}/>
            <Scene key="payment" component={Payment}/>
            <Scene key="paymentSearch" component={PaymentSearch}/>
            <Scene key="drawer" component={Drawer} sceneStore={CTSAppStore} initial={true}>
              <Scene
                key="tabBar"
                tabs
                default="home"
                tabBarStyle={styles.tabBarStyle}
                tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
              >
                <Scene key="home" schema="tab" initial={true} component={Home} title={TAB_TITLE_HOME} hideNavBar={true}
                       icon={TabIcon}/>
                <Scene key="financial" schema="tab" component={Financial} title={TAB_TITLE_FINANCIAL} hideNavBar={true}
                       icon={TabIcon}/>
                <Scene key="order" schema="tab" component={Order} title={TAB_TITLE_ORDER} hideNavBar={true}
                       icon={TabIcon}/>
                <Scene key="mine" schema="tab" component={Mine} title={TAB_TITLE_MINE} hideNavBar={true}
                       icon={TabIcon}/>
              </Scene>
            </Scene>
          </Scene>
        </Router>
        <ModalBox style={[styles.modal]} swipeToClose={false} position={"center"} ref={"downloadBox"}>
          <View>
            <Text>{this.state.syncMessage}</Text>
            {this.state.progress && (
              <Text>{this.state.progress.receivedBytes} / {this.state.progress.totalBytes}</Text>)}
          </View>
        </ModalBox>
      </View>
    );
  }
}

export default Application;