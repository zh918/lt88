//
//  RCTWebView+Custom.h
//  lt88
//
//  Created by stephen on 2018/1/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <React/RCTWebView.h>

@interface RCTWebView (Custom)
- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType;

- (NSMutableDictionary<NSString *, id> *)baseEvent;

//- (BOOL)webView:(RCTWebView *)webView
//shouldStartLoadForRequest:(NSMutableDictionary<NSString *, id> *)request
//   withCallback:(RCTDirectEventBlock)callback;

@end
