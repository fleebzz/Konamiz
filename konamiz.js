var Konamiz = (function(){
  
  function addEvent(obj, eventName, callback){
    if (obj.addEventListener){
        obj.addEventListener(eventName, callback, false);
    } else if (obj.attachEvent){
        obj.attachEvent("on"+eventName, function(e){ return callback.call(obj, e); });
    }
  }

  var konamizSuit = '3838404037393739666513';

  return function(){
    var myIsStarted = false;
    var myOnStart = function(){};
    var myOnStop = function(){};
    var mySuit = '';
    (function(that){
      addEvent(document, 'keydown', function(e){
        mySuit += e.keyCode;
        if(mySuit === konamizSuit){
          myIsStarted = true;
          myOnStart();
        }
        else if(konamizSuit.indexOf(mySuit) === -1){
          mySuit = '';
        }
      });
    })(this);
    this.onStart = function(fn){
      myOnStart = fn;
      return this;
    };
    this.onStop = function(fn){
      myOnStop = fn;
      return this;
    };
    this.start = function(){
      if(!myIsStarted){
        myIsStarted = true;
        myOnStart();
      }
      return this;
    };
    this.stop = function(){
      if(myIsStarted){
        myIsStarted = false;
        myOnStop();
      }
      return this;
    };
  }
})();

Konamiz.prototype.tata = 'tata';