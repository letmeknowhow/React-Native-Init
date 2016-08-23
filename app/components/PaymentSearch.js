/**
 *  Class: PaymentSearch
 *  Author: Niu Xiaoyu
 *  Date: 16/5/9.
 *  Description:
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  Platform
} from 'react-native';
import CommonHeader from './CommonHeader';
import Picker from 'react-native-picker';
const styles = StyleSheet.create({
  page: {
    flex: 1,
    //backgroundColor: '#f3f2f3',
    //paddingHorizontal: 5,
  },
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    alignItems: 'center',
    //paddingHorizontal: 5,
    marginHorizontal: 5,
    //paddingVertical: 10,
    padding: 10
  },
  label: {
    width: 100
  },
  dataInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    //height: 50,
    paddingHorizontal: 5,
    marginRight: 5,

  },
  searchButton: {
    backgroundColor: '#399CE8',
    height: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5
  }
});

function createMockData() {
  return {
    '水费': ['焦作水务'],
    '燃气费': ['焦作中燃']
  };
}

export default class PaymentSearch extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        payType: '水费',
        agent: '焦作水务'
      };
    }

  render() {
    return (
      <View style={[styles.page, {marginTop: Platform.OS === 'ios' ? 20 : 0}]}>
        <CommonHeader data={this.props.data} />
        <View style={[styles.container, {borderTopRightRadius: 5, borderTopLeftRadius: 5}]}>
          <Text style={styles.label}>缴费类型:</Text>
          <TouchableOpacity style={[styles.dataInput, {height: 29, justifyContent: 'center'}]} onPress={this._onPressHandle.bind(this)}>
            <Text>{this.state.payType + ' - ' + this.state.agent}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container, {borderBottomRightRadius: 5, borderBottomLeftRadius: 5, borderTopWidth: 0}]}>
          <Text style={styles.label}>用户编号:</Text>
          <TextInput style={[styles.dataInput, {fontSize: 14}]} placeholder="请输入用户编号" />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={{color: '#FFF'}}>查询</Text>
        </TouchableOpacity>
        <Picker
          ref={picker => this.picker = picker}
          style={{height: 260}}
          showMask={true}
          showDuration={300}
          pickerData={createMockData()}
          selectedValue={['水费', '焦作水务']}
          onPickerDone={(pickedValue) => {
            this.setState({
              payType: pickedValue[0],
              agent: pickedValue[1]
            });
          }}
        />
      </View>
    );
  }

  _onPressHandle() {
    this.picker.toggle();
  }
}


//function createDateData(){
//  let date = {};
//  for(let i=1950;i<2050;i++){
//    let month = {};
//    for(let j = 1;j<13;j++){
//      let day = [];
//      if(j === 2){
//        for(let k=1;k<29;k++){
//          day.push(k+'日');
//        }
//      }
//      else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
//        for(let k=1;k<32;k++){
//          day.push(k+'日');
//        }
//      }
//      else{
//        for(let k=1;k<31;k++){
//          day.push(k+'日');
//        }
//      }
//      month[j+'月'] = day;
//    }
//    date[i+'年'] = month;
//  }
//  return date;
//};