// 数据视图层基础类
import React, { Component } from 'react'
import {Navigation} from 'react-native-navigation'
import {BackHandler,AppState,NetInfo} from 'react-native'

const flagFirst = true;

export default class Base extends Component  {
  constructor(props) {
    super(props)

    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    if (AppState._eventHandlers.change.size == 0) {
      AppState.addEventListener('change', this._handleAppStateChange.bind(this));
    }

    if (flagFirst){
      NetInfo.isConnected.addEventListener('connectionChange',this._handleConnectionChange.bind(this));
      flagFirst = false;
    }

  }

  _onNavigatorEvent(event) {

    switch (event.id) {
      case 'willAppear':
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', ()=>{
          // if (this.backPressed && this.backPressed > 0) {
          //   // this.props.navigator.popToRoot({ animated: false });
          //   this.props.navigator.pop({animated:true})
          //   return false;
          // }

          // this.backPressed = 1;
          // this.props.navigator.push({
          //   screen: 'lt.login',

          // });

          Navigation.startSingleScreenApp({
            screen:{
              screen:'lt.login'
            }
          })
          return true;

        });
        break;
      default:

    }
  }

  /**
   * 前后台切换
   */
  _handleAppStateChange(nextAppState) {
    if (!AppState.currentState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
    }
    else if (nextAppState === 'background') {
      // todo
    }
  }

  /**
   * 网络变化
   */
  _handleConnectionChange(connectionInfo) {
    console.log('当前网络状态为======》',connectionInfo);
     NetInfo.getConnectionInfo().then((connectionInfo) => {
       console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
     });

     NetInfo.isConnected.fetch().then(isConnected => {
       console.log('First, is ' + (isConnected ? 'online' : 'offline'));
     });
  }
}
