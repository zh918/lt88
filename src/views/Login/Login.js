// 登录
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, Image,TouchableHighlight,TouchableOpacity } from 'react-native'
import Styles from '../../styles/login.style'

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isSend:true,
        mobile:props.mobile,
        code:null,
        second:60
      };
      this.intervalId = null;
      console.log('传入数据', props,this.state);
    }

    componentDidMount() {
      console.log('componentDidMount');
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
    }

    componentWillReceiveProps(nextProps) {
      console.log('current props:', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate',nextProps,nextState);
      return true;
    }

    render() {
        return (
            <View style={Styles.container}>
              <Image
                style={Styles.container_bg}
                source={require('../../assets/images/login_bg1334.jpg')}
              />
              <Image
                style={Styles.logo}
                source={require('../../assets/images/donglebao__logo.png')}
              />

              <View style={Styles.form}>
                <View style={Styles.form_row}>
                  <TextInput style={Styles.form_row_input}
                             placeholderTextColor="#ccc"
                             placeholder="请输入手机号"
                             keyboardType="numeric"
                             onChangeText={this._handleChangeMobile.bind(this)}
                             value={this.state.mobile}></TextInput>
                </View>
                <View style={Styles.form_row}>
                  <TextInput style={Styles.form_row_input}
                             placeholderTextColor="#ccc"
                             placeholder="请输入验证码"
                             onChangeText={this._handleChangeCode.bind(this)}
                             value={this.state.code}></TextInput>
                  <TouchableHighlight style={Styles.form_row_send}>
                    {
                      this.state.isSend ?
                      <Text style={Styles.form_row_send_text} onPress={this._handleSendCode.bind(this)}>获取验证码</Text>
                      : <Text style={Styles.form_row_send_text}>{this.state.second}秒</Text>
                    }

                  </TouchableHighlight>
                </View>
              </View>

              <View style={Styles.operate}>
                {
                  this.state.mobile && this.state.code ?
                  <TouchableOpacity style={Styles.btn_submit_enabled} onPress={this._handleSubmit.bind(this)}>
                    <Text style={Styles.btn_submit_text_enabled}>登录</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={Styles.btn_submit_disable}>
                    <Text style={Styles.btn_submit_text_disable}>登录</Text>
                  </TouchableOpacity>
                }

                <Text style={Styles.agreement}>点击登录，表示您已同意 <Text style={Styles.agreement_link}>动了保服务协议</Text></Text>

              </View>


            </View>
        );
    }

    _handleSendCode() {
      let _this = this;
      _this.setState({isSend:false});
      if (_this.intervalId == null) {
        _this.intervalId = setInterval(function () {
          if (_this.state.second > 0) {
            _this.setState({second:--_this.state.second});
          }
          else {
            _this.setState({isSend:!_this.state.isSend,second:60});
            window.clearInterval(_this.intervalId);
            _this.intervalId = null;
          }
        }, 1000);
      }
    }

    _handleChangeMobile(val) {
      this.setState({mobile:val});
    }

    _handleChangeCode(val) {
      this.setState({code:val});
    }

    _handleSubmit() {
      console.log('提交数据',this.state);
      this.props.actions();
      this.props.navigator.push({
        screen: 'lt.home',
        title: '首页'
      });
    }
}

Login.navigatorStyle = {
	navBarHidden:true
}

const mapStateToProps = (state,props) => {
  console.log('mapStateTopProps',state,props);
  return {mobile:props.name}
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch',dispatch);
  return {
    actions:function(){
      console.log('mapDispatchToProps hello');
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)


// todo 这一层view就代替了containers层。把数据和行为都注入进去
