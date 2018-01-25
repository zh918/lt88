import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, ScrollView,WebView,TouchableOpacity,NativeModules,NativeEventEmitter,DeviceEventEmitter} from 'react-native'
import Styles from '../../styles/web.webview.style'
import {Navigation} from 'react-native-navigation'
import Toast from '../../components/Toast'
import Base from '../Base'
import CustomWebView from '../../components/WebView'

// 1:第一步 引用native包
const notificationModules = NativeModules.RNNotification;
const jscEventEmit = new NativeEventEmitter(notificationModules);


class WbView extends Base {
    constructor(props) {
      super(props);
      this.wb = null;
      this.timeoutId = null;
    }

    componentWillMount() {
      let _this = this;
      // 2:第二步 添加监听事件，便于native触发listener事件
      // ios
      // jscEventEmit.addListener('rntest',function(info){
      //   // _this.props.navigator.pop({animated: true,animationType: 'fade'});
      //   Navigation.startSingleScreenApp({screen: {screen: 'lt.login'}});
      // });

      // android
      DeviceEventEmitter.addListener('rntest',function(info){
        // alert('rntest' + info)
        Navigation.startSingleScreenApp({screen: {screen: 'lt.login'}});
      });

    }

    componentDidMount() {

    }

    render() {
      return (
          <View style={Styles.container}>
            <ScrollView style={Styles.container_scroll}>
              <CustomWebView
                ref={wb=>{this.wb = wb;}}
                style={Styles.webview}
                source={{uri: this.props.source.url}} />
            </ScrollView>
          </View>
      );
    }

}

WbView.navigatorStyle = {
  navBarHidden:true
}

const mapStateToProps = (state, props) => {
  return {
      source:{
        url:'http://192.168.6.179:9008/#/info'
      }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions:function() {
      console.log('hello')
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WbView)
