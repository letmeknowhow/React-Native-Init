/**
 *  Class: Calendar
 *  Author: Niu Xiaoyu
 *  Date: 16/9/11.
 *  Description:
 */
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CalendarPicker from '../component/CalendarPicker/CalendarPicker';

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  selectedDate: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000'
  },
  calendarTextStyle: {
    color: '#000',
    fontFamily: 'Arial'
  }
});

export default class Calendar extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      date: new Date()
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  // 渲染
  render() {
    return (
      <View>
        <CalendarPicker
          selectedDate={this.state.date}
          onDateChange={this.onDateChange}
          screenWidth={Dimensions.get('window').width}
          weekdays = {['一', '二', '三', '四', '五', '六', '日']}
          months = {['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
          nextTitle={'下月'}
          previousTitle={'上月'}
          startFromMonday={true}
          selectedDayColor={'#E12518'}
          textStyle={styles.calendarTextStyle}
          selectedDayTextColor={'#FFFFFF'}
          style={{}} />

        <Text style={styles.selectedDate}> Date: { this.state.date.toString() } </Text>
      </View>
    );
  }

  onDateChange(date) {
    this.setState({ date });
  }
}