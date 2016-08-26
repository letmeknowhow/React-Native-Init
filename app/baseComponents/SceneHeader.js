/**
 *  Class: SceneHeader
 *  Author: Niu Xiaoyu
 *  Date: 16/8/12.
 *  Description:
 */
import React, { Component } from 'react';

import { View, Image, Text, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

//style
import NativeTachyons from 'react-native-style-tachyons';
import {styles as s} from 'react-native-style-tachyons';
NativeTachyons.build({
  /* REM parameter it optional, default is 16 */
  rem: deviceWidth > 340 ? 12 : 10
}, StyleSheet);

const logo = require('../../assets/logo_text.png');
const myPortrait = require('../../assets/icons/config.png');

const styles = StyleSheet.create(
  {
    items: {
      flex: 1,
      marginLeft: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      height: 40,
      marginBottom: 3,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Platform.OS === 'ios' ? 20 : 0,
      flexDirection: 'row'
    }
  }
);

export default class SceneHeader extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const item = this.props.title ?
      (<View style={[styles.items, {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}]}>
        <Text style={[s.f3]}>{this.props.title}</Text>
      </View>)
      : (<Image style={[styles.items, {resizeMode: Image.resizeMode.contain}]} source={logo}/>);
    return (
      <View style={styles.logoContainer}>
        {item}
        <TouchableOpacity style={{width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}}
                          onPress={() => this.props.sceneStore.switchSidemenu(true)}>
          <Image style={{height: 25, resizeMode: Image.resizeMode.contain}} source={myPortrait} />
        </TouchableOpacity>
      </View>
    );
  }
}