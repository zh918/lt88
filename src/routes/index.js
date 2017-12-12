// 配置路由信息
import { Navigation } from 'react-native-navigation'

import Login from '../views/Login/Login'
import Home from '../views/Home/Home'

export const registerScreens = (store, Provider) => {
  Navigation.registerComponent('lt.login', () => Login, store, Provider);
  Navigation.registerComponent('lt.home', () => Home, store, Provider);
}
