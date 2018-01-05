// 个人中心
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Image,TouchableHighlight,TouchableOpacity } from 'react-native'
import Styles from '../../styles/member.center.style'
import Auth from '../Base/Auth'

class About extends Component {
    constructor(props) {
      super(props);
      console.log('About===========',props)
    }

    render() {
      return (
          <View style={Styles.container}>
            <Text>hello member</Text>
          </View>
      );
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
