/**
 * 弹出消息框
 * 使用方式：toast.message('消息内容'); toast.message('消息内容',2000,'icon');toast.message('消息内容',-1);toast.hide()
 * 疑问：如何通过上述方式直接把组件插入到当前渲染界面中显示？ 这肯定和web方式是不一样的。但是呢，又没有人写原生
 */
import React, { Component} from 'react';
import { View } from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import ToastContainer, {positions, durations} from './ToastContainer';

 class Toast extends Component {
     static displayName = 'Toast';
     static propTypes = ToastContainer.propTypes;
     static positions = positions;
     static durations = durations;

     static show = (message, options = {position: positions.BOTTOM, duration: durations.SHORT}) => {
         return new RootSiblings(<ToastContainer
             {...options}
             visible={true}
         >
             {message}
         </ToastContainer>);
     };

     static hide = toast => {
         if (toast instanceof RootSiblings) {
             toast.destroy();
         } else {
             console.warn(`Toast.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof toast}\` instead.`);
         }
     };

     _toast = null;

     componentWillMount = () => {
         this._toast = new RootSiblings(<ToastContainer
             {...this.props}
             duration={0}
         />);
     };

     componentWillReceiveProps = nextProps => {
         this._toast.update(<ToastContainer
             {...nextProps}
             duration={0}
         />);
     };

     componentWillUnmount = () => {
         this._toast.destroy();
     };

     render() {
         return null;
     }
 }



 export {
     RootSiblings as Manager
 };
 export default Toast;
