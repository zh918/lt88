/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import LayoutDefault from '../../layouts/LayoutDefault'

const instructions = Platform.select({
  ios: '这是ios平台',
  android: '这是android平台'
});

export default class Home extends Component<{}> {
  render() {
    return (
      <LayoutDefault>
        <View>
          <Text>
            这里是<FontAwesome name="rocket" size={30} color="#900" />
          </Text>
          <Text>
            To get started, edit App.js
          </Text>
          <Text >
            {instructions}
          </Text>
          <Text>
            这里是
          </Text>
        </View>
      </LayoutDefault>



    );
  }
}

Home.navigatorStyle = {
	navBarHidden:true
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
