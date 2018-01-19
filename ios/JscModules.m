//
//  JscModules.m
//  lt88
//
//  Created by stephen on 2018/1/19.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

@implementation JscModules

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[@"sayHello"];
}



@end
