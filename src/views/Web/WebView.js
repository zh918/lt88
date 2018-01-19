import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, ScrollView,WebView,TouchableOpacity } from 'react-native'
import Styles from '../../styles/web.webview.style'
import {Navigation} from 'react-native-navigation'
import Toast from '../../components/Toast'
import Base from '../Base'

class WbView extends Base {
    constructor(props) {
      super(props);
      this.wb = null;
      this.timeoutId = null;
    }

    render() {
      return (
          <View style={Styles.container}>
            <ScrollView style={Styles.container_scroll}>
              <WebView
                ref={wb=>{this.wb = wb;}}
                style={Styles.webview}
                onLoadEnd={this._onLoad.bind(this)}
                source={{uri: this.props.source.url}}/>
            </ScrollView>
          </View>
      );
    }

    _onLoad() {
      let _this = this;


      // _this.timeoutId = setTimeout(function () {
      //
      //   _this.wb.injectJavaScript = ()=>{
      //     // eval(`$jsc.emit("onCreated",${info})`);
      //     // $jsc.emit("onCreated",info);
      //     alert(134)
      //   };
      // }, 2*1000);

      // _this.wb.injectedJavaScript = "alert(1)"

        // _this.wb.injectJavaScript = function() {
        //   debugger
        //   alert(1)
        // }



        _this.timeoutId = setTimeout(function () {

          _this.wb.injectJavaScript = _this._cbInject();

        }, 2*1000);
        // _this.wb.injectJavaScript = _this._cbInject();
    }

    _cbInject() {
      let info = {
        name:'demo',
        data:[1,2,3,4,5,6],
        obj:{
          info:{
            name:'child',
            data:[33,33,33]
          }
        }
      };
      // Navigation.startSingleScreenApp({screen: {screen: 'lt.login'}});
      // debugger
      // this.wb.$jsc.emit("onCreated",134);

      // window.$jsc.emit("onCreated",1234);
      // var UIManager = require('UIManager');
      // var RCTWebViewManager = require('NativeModules').WebViewManager;
      // var s = require('NativeModules');
      // eval("javascript:(function(window) {window.$jsc.back(1);})(window);");
      // debugger
      // UIManager.dispatchViewManagerCommand(
      //   this.getWebViewHandle(),
      //   UIManager.RCTWebView.Commands.goBack,
      //   null
      // );
      // this.wb.$jsc.emit("onCreated",1234);

      window.$j = {};
      window.$j.jump = ()=>{
        Navigation.startSingleScreenApp({screen: {screen: 'lt.login'}});
      }


    }

}

WbView.navigatorStyle = {
  navBarHidden:true
}

const mapStateToProps = (state, props) => {
  return {
      source:{
        url:'http://192.168.6.179:9007/#/info'
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
