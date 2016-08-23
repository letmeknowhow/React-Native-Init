/**
 *  Class: ButtonList
 *  Author: Niu Xiaoyu
 *  Date: 16/4/3.
 *  Description:
 */
import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  //page: {margin: 15},
  button: {
    height: 50,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#E7E7E7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 15
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 20
  }
});
export default class ButtonList extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={[styles.page, this.props.style]}>
        {this.renderButton(this.props.buttons, this.props.actions, this.props.buttonType, this.props.renderButton)}
      </View>
    );
  }

  renderButton(buttons, action, buttonType, renderFn) {
    return buttons.map((button) => {
      if (renderFn) {
        return renderFn(button);
      } else {
        return (
          <TouchableOpacity key={button.id} style={[styles.button, buttonType]}
                            onPress={() => { if (action) action({data: button.text}); } }>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {button.uri && <Image style={styles.icon} source={button.uri}/>}
              <Text style={{fontSize: 16}}>{button.text}</Text>
            </View>
            <Text>{'>'}</Text>
          </TouchableOpacity>
        );
      }
    });
  }
}