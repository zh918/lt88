//
//  RNNotification.h
//  lt88
//
//  Created by stephen on 2018/1/23.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>
#import <Foundation/Foundation.h>

@interface RNNotification : RCTEventEmitter <RCTBridgeModule>
- (void)sendNotificationToReactNative;
@end
