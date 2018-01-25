//
//  RCTCustomWebView.m
//  lt88
//
//  Created by stephen on 2018/1/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RCTCustomWebView.h"
#import "RCTWebView+Custom.h"
#import <React/RCTEventDispatcher.h>
#import <React/RCTBridgeDelegate.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>

#import <JavascriptCore/JavaScriptCore.h>
#import "RNNotification.h"

@interface RCTCustomWebView ()

@property (nonatomic, copy) RCTDirectEventBlock onLoadingStart;
@property (nonatomic, copy) RCTDirectEventBlock onLoadingFinish;
@property (nonatomic, copy) RCTDirectEventBlock onLoadingError;
@property (nonatomic, copy) RCTDirectEventBlock onShouldStartLoadWithRequest;
@property (nonatomic, copy) RCTDirectEventBlock onMessage;

@end

@implementation RCTCustomWebView {
  UIWebView *_webView;
}

- (instancetype)initWithFrame:(CGRect)frame {
  if ((self = [super initWithFrame:frame])) {
    // by stephen 注入jsc对象
    _webView = [[self subviews] firstObject];
    [self injectJavaScriptToGlobal:@""];
  }
  return self;
}

- (void)webViewDidFinishLoad:(UIWebView *)webView {
  // by stephen 2018/1/19 主要为了衔接webview，打通交互能力
  // 1.触发RNJSBridgeReady，表示页面已经准备好，可以进一步注入相关数据
  NSString *readyJs = @"var event = new Event('RNJSBridgeReady');document.dispatchEvent(event);";
  [self execJS:readyJs];
  
  // 2.执行onCreate，onResume页面订阅事件，注入相关数据
  [self emit:@"onCreate" eventData:@"这是create监听触发"];
  [self emit:@"onResume" eventData:@"这是resume监听触发"];
}

- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request
 navigationType:(UIWebViewNavigationType)navigationType
{
  // by stephen 2018/1/19 这里为了拦截处理webview中js的exec请求，从而调用native相关事件
  NSURL *url = [request URL];
  NSString* schema = [[url scheme] lowercaseString];
  if ([schema isEqualToString:@"jsc"]) {
    // 执行相关js命令 todo 这里需要对jsc命令进行解析分发执行
    NSString *test = @"$jsc.back(88)";
    [self execJS:test];
    
//    NSString *msg = @"原生组件消息；通过web来触发拉起";
//    UIAlertView * alertView=[[UIAlertView alloc] initWithTitle:@"web触发native消息" message:msg delegate:nil cancelButtonTitle:@"关闭" otherButtonTitles:nil, nil];
//    [alertView show];
    
    RNNotification *notification = [RNNotification allocWithZone: nil];
    [notification sendNotificationToReactNative];
    return NO;
  }
  
  return YES;
}

// 注册js到全局，便于webview与native沟通
-(void)injectJavaScriptToGlobal:(NSString *)script
{
  
//  JSContext *context = [_webView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];
  JSContext *context = [_webView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];
  
  if (context == nil) return;
  
  NSString *path = [[[NSBundle mainBundle] resourcePath] stringByAppendingPathComponent:@""];
  NSBundle *resBundle = [NSBundle bundleWithPath:path];
  NSString *jsPath = [[resBundle bundlePath] stringByAppendingPathComponent:@"jsc.js"];
  NSString *js = [NSString stringWithContentsOfFile:jsPath encoding:NSUTF8StringEncoding error:nil];
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [self execJS:js];
  });
  
}

// 执行js
- (void)execJS:(NSString*)script{
  if ([NSThread isMainThread]) {
    [_webView stringByEvaluatingJavaScriptFromString:script];
  }else {
    dispatch_sync(dispatch_get_main_queue(), ^ {
      
      [_webView stringByEvaluatingJavaScriptFromString:script];
      
    });
  }
}

// 触发页面订阅的事件
-(void)emit:(NSString*)eventName eventData:(NSString*)eventData {
  NSString *eventJs = [NSString stringWithFormat:@"$jsc.emit('%@','%@')",eventName, eventData];
  [self execJS:eventJs];
}

@end
