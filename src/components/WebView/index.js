import React, { Component, PropTypes } from 'react';
import { WebView, requireNativeComponent, NativeModules } from 'react-native';
const { CustomWebViewManager } = NativeModules;

export default class CustomWebView extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
      ...WebView.propTypes, 
  };

  render() {
    return (
      <WebView
        {...this.props}
        nativeConfig={
          {component: RCTCustomWebView,props: this.props,viewManager: CustomWebViewManager}
        }
      />
    );
  }

  _onNavigationCompleted = (event) => {
    const { onNavigationCompleted } = this.props;
    onNavigationCompleted && onNavigationCompleted(event);
  }

}

const RCTCustomWebView = requireNativeComponent(
  'RCTCustomWebView',
  CustomWebView,
  WebView.extraNativeComponentConfig
);

// const RCTCustomWebView = requireNativeComponent('RCTCustomWebView', CustomWebView);
