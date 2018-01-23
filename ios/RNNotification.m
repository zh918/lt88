//
//  RNNotification.m
//  lt88
//
//  Created by stephen on 2018/1/23.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNNotification.h"
@implementation RNNotification

RCT_EXPORT_MODULE();

+ (id)allocWithZone:(NSZone *)zone {
  static RNNotification *sharedInstance = nil;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    sharedInstance = [super allocWithZone:zone];
  });
  return sharedInstance;
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"rntest"];
}

- (void)sendNotificationToReactNative
{
  [self sendEventWithName:@"rntest" body:@{@"name": @"stephen"}];
}

@end
