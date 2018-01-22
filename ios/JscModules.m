//
//  NSObject+JscModules.m
//  lt88
//
//  Created by stephen on 2018/1/19.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "JscModules.h"

@implementation JscModules

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[@"rntest",@"back"];
}

//- (void)tellJS {
//  [self sendEventWithName:@"sayHello" body:@"Hello"];
//}

@end
