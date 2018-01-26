import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, ScrollView,WebView,TouchableOpacity,NativeModules,NativeEventEmitter,DeviceEventEmitter,Platform} from 'react-native'
import Styles from '../../styles/web.webview.style'
import {Navigation} from 'react-native-navigation'
import Toast from '../../components/Toast'
import Base from '../Base'
import CustomWebView from '../../components/WebView'

// 1:第一步 引用native包
const notificationModules = NativeModules.RNNotification;
const jscEventEmit = new NativeEventEmitter(notificationModules);
// const customEventEmit = (Platform.OS === 'ios') ? jscEventEmit : DeviceEventEmitter;

class WbView extends Base {
    constructor(props) {
      super(props);
      this.wb = null;
      this.customEventEmit = (Platform.OS === 'ios') ? jscEventEmit : DeviceEventEmitter;
    }

    componentWillMount() {
      let _this = this;
      let len = !_this.customEventEmit._subscriber._subscriptionsForType.rntest ? 0 : _this.customEventEmit._subscriber._subscriptionsForType.rntest.length
      console.log('========>',len);
      if (len == 0) {
        _this.customEventEmit.addListener('rntest',function(info){
          _this.props.navigation.navigate('ProductDetails');
        });
      }
    }

    componentDidMount() {

    }

    componentWillUnmount() {
      alert('componentWillUnmount')
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
