/*
  jsc.js
  lt88

  Created by stephen on 2018/1/18.
  Copyright © 2018年 Facebook. All rights reserved.
*/

// var event = new Event('RNJSBridgeReady');
// document.dispatchEvent(event);

;(function(){
  window.$jsc = {
    _events:[],

    /**
     * 回调启动web
     */
    bootstrap:function(cb){
      if (cb) cb();
    },

    /**
     * 监听事件
     */
    on:function(eventName, func) {
      $jsc._events.push({name:eventName,cb:func});
    },

    /**
     * 执行事件
     */
    emit:function(eventName,args) {
      let eventModel = $jsc._events.find(e=>e.name == eventName);
      if (eventModel) eventModel.cb(args);
    },

    native: {
      exec:function(apiName,args){
        let request = "jsc://exit.app";
        document.location = request;
      }
    },

    back:function(msg) {
      alert(msg)
    }
  };

})();
