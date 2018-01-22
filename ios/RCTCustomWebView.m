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

#import <JavascriptCore/JavaScriptCore.h> 

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
    
    NSString *msg = @"原生组件消息；通过web来触发拉起";
    UIAlertView * alertView=[[UIAlertView alloc] initWithTitle:@"web触发native消息" message:msg delegate:nil cancelButtonTitle:@"关闭" otherButtonTitles:nil, nil];
    [alertView show];
    
    // 这里将直接调用rn订阅的js事件。即native=》rn
    RCTBridge *_bridge = [[RCTBridge alloc] init];
  
    NSNumber *reactTag = [NSNumber numberWithInteger:1];
    //    [_bridge.eventDispatcher sendTextEventWithType:(RCTTextEventTypeSubmit) reactTag:reactTag text:@"rntest" key:@"rntest" eventCount:1];
    //
    
//    [_bridge enqueueJSCall:@"RCTDeviceEventEmitter"
//                    method:@"emit"
//                      args:@[@"rntest"]
//                completion:NULL];
//
   JSContext *context = [_webView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];
//    RCTBridge *_bridge = [context.currentContext _bridge]; 这里存在问题，如何获取当前_bridge是关键了。
    
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

@end
