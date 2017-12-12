import React from 'react'
import { View,Text,ScrollView,TouchableOpacity,AlertIOS,Platform,Modal } from 'react-native'
import Styles from '../styles/layoutDefault.style' 
import Ionicons from 'react-native-vector-icons/Ionicons' 

export default class LayoutDefault extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isShowModal:true
		};
	}

	 _onPressForLogo(e) {
	 	let p = Platform.OS == 'android' ? '安卓的':'苹果的';
	 	AlertIOS.prompt('plain text entry' + p); 
	 }

	render() {
		const children = this.props.children;

		return (
				<View style={Styles.container}>
					<View style={Styles.topState}>
						<TouchableOpacity style={Styles.topStateLeft} onPress={this._onPressForLogo}><Ionicons name="logo-freebsd-devil" size={20} color="#fff" /></TouchableOpacity>
						<View style={Styles.topStateTitle}><Text>测试系统</Text></View> 
						<View style={Styles.topStateRight}><Ionicons name="logo-freebsd-devil" size={20} color="#fff" /></View> 
					</View> 
					<View style={Styles.content}>
						{children}  
					</View>
					<View style={Styles.footer}>
						<TouchableOpacity style={Styles.topStateLeft} onPress={this._onPressForLogo}><Text>底部菜单</Text></TouchableOpacity>
					</View> 
				</View>
			    );
	}
}