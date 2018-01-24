// 个人中心
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Image,TouchableHighlight,TouchableOpacity } from 'react-native'
import Styles from '../../styles/member.center.style'
import Base from '../Base'
import {Navigation} from 'react-native-navigation'


class About extends Base {
    constructor(props) {
      super(props);
      console.log('About===========',props)
    }

    render() {
      return (
          <View style={Styles.container}>
            <Text>hello member</Text>
            <TouchableOpacity style={Styles.btn_router} onPress={this._jumpToWeb.bind(this)}>
              <Text style={Styles.btn_router_text}>跳转到网页</Text>
            </TouchableOpacity>
          </View>
      );
    }

    _jumpToWeb() {
      Navigation.startSingleScreenApp({screen: {screen: 'lt.web.webview'}});

    }


}

About.navigatorStyle = {
  navBarHidden:true
}

const mapStateToProps = (state, props) => {
  return {
    login:state.login
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
)(About)
