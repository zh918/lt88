// 数据视图层基础类
import React, { Component } from 'react'
import {Navigation} from 'react-native-navigation'
import {BackHandler} from 'react-native'

export default class Base extends Component  {
  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
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

}
