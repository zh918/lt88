// 数据视图层基础类
import React, { Component } from 'react'
import {Navigation} from 'react-native-navigation'
import {BackHandler} from 'react-native'

export default class Auth extends Component  {
  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'bottomTabSelected' || event.id === 'bottomTabReselected') {
      if (!this.props.login.isLogin) // 条件
      {
        Navigation.startSingleScreenApp({
          screen: {
              screen: 'lt.login'
          }
        });
      }
      else {
        // 这里可以统一清空路由堆栈信息，直接跳转到指定路由即可；当然也可以什么都不做
      }
    }
  }

}
