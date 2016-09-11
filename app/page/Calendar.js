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
          weekdays = {['Mon', 'Tue', 'Wed', 'Th', 'Fri', 'Sat', 'Sun']}
          months = {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
          nextTitle={'Next'}
          previousTitle={'Previous'}
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