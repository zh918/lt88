
;(function(window){
  window.$jsc = {
    _events:[],

    on:function(eventName, func) {
      this._events.push({name:eventName,cb:func});
    },
    emit:function(eventName,args) {
      var len = this._events.length;
      for (var i=0; i<len; i++) {
        var eventModel = this._events[i];
        if (eventModel.name == eventName) eventModel.cb(args);
      }
    },
    native: {
      exec:function(apiName,args){
        var request = "jsc://exit.app";
        document.location = request;
      }
    },
    back:function(msg) {
      alert(msg)
    }
  };

})(window);