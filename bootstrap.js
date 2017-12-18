import {Provider} from 'react-redux'
import {Navigation} from 'react-native-navigation'

import './src/common/global'
import { registerScreens } from './src/routes'
import * as configActions from './src/redux/reducers/config/actions'
import store from './src/redux/store/configureStore'

import IconHelper from './src/common/IconHelper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
var iconRock = null;

registerScreens(store, Provider);

export default class Bootstrap {
  constructor() {
    FontAwesome.getImageSource('rocket', 30).then((source) => { iconRock = source}).then(result=>{
      store.subscribe(this.onStoreUpdate.bind(this));
      store.dispatch(configActions.configLoad());  
    });
    // store.subscribe(this.onStoreUpdate.bind(this));
    // store.dispatch(configActions.configLoad());

  }

  onStoreUpdate() {
    const state = store.getState();
    this.startApp(state.config.start);
  }

  startApp(start) {
    switch (start) {
      case 'login':
        console.log('start app login');
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'lt.login'
          },
          passProps: {
            name:'stephen',
            num: 1234,
            cb: function() {
              return 'Hello from a function!';
            }
          }
        });


        break;
      case 'boot_animate':
        console.log('引导动画');
        break;
      default:
        console.log('直接抵达根目录');
        // Navigation.startSingleScreenApp({
        //   screen: {
        //     screen: 'lt.home'
        //   },
        //   passProps: {
        //     name:'stephen',
        //     num: 1234,
        //     cb: function() {
        //       return 'Hello from a function!';
        //     }
        //   }
        // });

        Navigation.startTabBasedApp({
        tabs: [
            {
              label: 'One',
              screen: 'lt.home',
              title: 'Screen One',
              icon: iconRock
            },
            {
              label: 'Two',
              screen: 'lt.login',
              title: 'Screen Two',
              icon: iconRock
            },
            {
              label: 'three',
              screen: 'lt.home',
              title: 'Screen One',
              icon: iconRock
            },
            {
              label: 'four',
              screen: 'lt.login',
              title: 'Screen Two',
              icon: iconRock
            }
          ],
          tabStyle:{
            navBarHidden:true
          },
          appStyle:{
            forceTitlesDisplay:true,
            tabBarTranslucent:true,
            tabBarBackgroundColor:'#0f2362',
            tabBarButtonColor:'#fff',
            tabBarSelectedButtonColor:'blue',
            tabBarLabelColor:'red'
          }
        });


    }
  }
}
