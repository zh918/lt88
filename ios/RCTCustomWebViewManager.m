//
//  RCTCustomWebViewManager.m
//  lt88
//
//  Created by stephen on 2018/1/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RCTCustomWebViewManager.h"
#import "RCTCustomWebView.h"

@interface RCTCustomWebViewManager () <RCTWebViewDelegate>

@end

@implementation RCTCustomWebViewManager { }

RCT_EXPORT_MODULE()

- (UIView *)view
{
  RCTCustomWebView *webView = [RCTCustomWebView new];
  webView.delegate = self;
  return webView;
}

//RCT_EXPORT_VIEW_PROPERTY(onNavigationCompleted, RCTDirectEventBlock)
//RCT_EXPORT_VIEW_PROPERTY(finalUrl, NSString)

@end
