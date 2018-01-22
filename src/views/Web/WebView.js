import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, ScrollView,WebView,TouchableOpacity,NativeModules,NativeEventEmitter} from 'react-native'
import Styles from '../../styles/web.webview.style'
import {Navigation} from 'react-native-navigation'
import Toast from '../../components/Toast'
import Base from '../Base'
import CustomWebView from '../../components/WebView'

const jscModules = NativeModules.JscModules;
const jscEventEmit = new NativeEventEmitter(jscModules);


class WbView extends Base {
    constructor(props) {
      super(props);
      this.wb = null;
      this.timeoutId = null;
    }

    componentWillMount() {
      debugger
      jscEventEmit.addListener('rntest',function(){
        alert('rntest rn');
      })
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
