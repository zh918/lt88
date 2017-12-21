// 个人中心
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Image,TouchableHighlight,TouchableOpacity } from 'react-native'
import Styles from '../../styles/member.center.style'

class Center extends Component {
    constructor(parms) {
      super(parms);

    }

    render() {
      return (
          <View style={Styles.container}>
            <Image style={Styles.container_baseinfo_bg} source={require('../../assets/images/member/picture_bg_user.png')} />
            <View style={Styles.baseinfo}>
                <View style={Styles.title_view}><Text style={Styles.title}>个人中心</Text></View>
                <View style={Styles.info}>
                  <View style={Styles.col1}></View>
                  <View style={Styles.col2}>
                      <Text style={Styles.row1}>千手千手</Text>
                      <Text style={Styles.row2}>lt_888</Text>
                      <Text style={Styles.row3}>8</Text>
                  </View>
                  <View style={Styles.col3}><TouchableOpacity><Text>复制推广链接</Text></TouchableOpacity></View>
                </View>

                <View style={Styles.balance}>
                  <View style={Styles.balance_col1}>
                    <Text style={Styles.font24}>余额</Text>
                    <Text style={Styles.font42}>$88,888.08</Text>
                  </View>
                  <View Styles={Styles.balance_col2}>
                    <Text style={Styles.font24}>积分</Text>
                    <Text style={Styles.font42}>100</Text>
                  </View>
                </View>
            </View>

            <View style={Styles.menu_fast}>

            </View>
            <View style={Styles.menus}>

            </View>

          </View>
      );
    }


}

Center.navigatorStyle = {
  navBarHidden:true
}

const mapStateToProps = (state, props) => {
  return {}
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
)(Center)
