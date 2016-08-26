/**
 *  Class: Banner
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 轮播图
 */
import React, { Component } from 'react';
import { Dimensions, View, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Swiper from './react-native-page-swiper/index';
const Actions = require('react-native-router-flux').Actions;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  banner: {
    overflow: 'hidden',
    //marginBottom: 10,
    backgroundColor: '#FFF'
  },
});

class Banner extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  //use swiper start
  render() {
    return (
      <View style={this.props.style}>
        <Swiper activeDotColor="red" autoPlay={this.props.autoPlay} duration={this.props.duration}>
          {this.renderHot(this.props.source)}
        </Swiper>
      </View>
    );
  }

  renderHot(source) {
    return source.map((item) => {
      let imageSource;
      if (typeof item.uri === 'string') {
        imageSource = {uri: item.uri};
      } else {
        imageSource = item.uri;
      }
      return (
        <TouchableOpacity key={item.id} onPress={() => Actions.productDetail({data: `来自banner${item.id}`, url: item.url})}>
          <Image
            source={imageSource}
            style={{width: deviceWidth, height: this.props.height, resizeMode: Image.resizeMode.stretch}}/>
        </TouchableOpacity>
      );
    });
  }
  //use swiper end
}

export default Banner;
