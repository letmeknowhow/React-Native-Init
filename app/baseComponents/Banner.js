/**
 *  Class: Banner
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 轮播图
 */
import React, { Component } from 'react';
import { Dimensions, View, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
//import SwiperIOS from 'react-native-swiper';
import SwiperAndroid from './react-native-page-swiper/index';
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
    if (Platform.OS === 'ios') {
      return (
        <View style={this.props.style}>
          <SwiperAndroid style={styles.banner} showsButtons={false} height={this.props.height}
                     dot={<View style={{backgroundColor: 'gray', width: 20, height: 3, borderRadius: 0, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                     activeDot={<View style={{backgroundColor: '#FFF', width: 20, height: 3, borderRadius: 0, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                     paginationStyle={{bottom: 0 }} autoplay={this.props.autoPlay}>
            {this.renderHot(this.props.source)}
          </SwiperAndroid>
        </View>
      );
    } else {
      return (
        <View style={styles.banner}>
          <SwiperAndroid style={styles.wrapper} activeDotColor="red">
            {this.renderHot(this.props.source)}
          </SwiperAndroid>
        </View>
      );
    }
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
