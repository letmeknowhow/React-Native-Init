/**
 *  Class: ProductDetail
 *  Author: Niu Xiaoyu
 *  Date: 16/4/1.
 *  Description:
 */
const Mock_HTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Hello Static World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            font: 62.5% arial, sans-serif;
            background: #ccc;
        }
        h1 {
            padding: 45px;
            margin: 0;
            text-align: center;
            color: #ff081c;
        }
    </style>
</head>
<body>
    <h1>你好! 港中旅!</h1>
    <h1>这是一个html页面</h1>
    <h1 id="info-from-native"></h1>
    <h1><input type="button" value="点击获得当前页面信息" onclick="getNativeInfo()"></h1>
    <script type="text/javascript">
        function getNativeInfo() {
            if (WebViewBridge) {
                WebViewBridge.send("getNativeInfo");
            };
        }
    </script>
</body>
</html>
`;

const injectScript = `
  (function () {
                    if (WebViewBridge) {

                      WebViewBridge.onMessage = function (message) {
                        if (message === "hello from react-native") {
                          WebViewBridge.send("got the message inside webview");
                        } else {
                          document.getElementById("info-from-native").innerHTML=message
                        }
                      };

                      WebViewBridge.send("hello from webview");
                    };
                  }());
`;

import React, { Component } from 'react';

import { View, Text, StyleSheet, Platform, TouchableOpacity, WebView } from 'react-native';
//import WebViewBridge from 'react-native-webview-bridge';
import CommonHeader from '../CommonHeader';

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3'
    },

  }
);
export default class ProductDetail extends Component {
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

  onBridgeMessage(message){
    const { webviewbridge } = this.refs;

    switch (message) {
      case "hello from webview":
        webviewbridge.sendToBridge("hello from react-native");
        break;
      case "got the message inside webview":
        console.log("we have got a message from webview! yeah");
        break;
      case "getNativeInfo":
        webviewbridge.sendToBridge(this.props.data);
        break;
    }
  }

  // 渲染
  render() {
    return (
      <View style={[styles.page, {marginTop: Platform.OS === 'ios' ? 20 : 0}]}>
        <CommonHeader data={this.props.data} />
        <WebView
          ref='webviewbridge'
          automaticallyAdjustContentInsets={false}
          style={{flex: 1}}
          //source={{uri: 'http://www.baidu.com'}}
          source={{html: Mock_HTML}}
          javaScriptEnabled={true}
          //startInLoadingState={true}
          //scalesPageToFit={true}
          onBridgeMessage={this.onBridgeMessage.bind(this)}
          injectedJavaScript={injectScript}
        />
      </View>
    );
  }
}