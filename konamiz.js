var Konamiz = (function(){
  
  function addEvent(obj, eventName, callback){
    if (obj.addEventListener){
        obj.addEventListener(eventName, callback, false);
    } else if (obj.attachEvent){
        obj.attachEvent("on"+eventName, function(e){ return callback.call(obj, e); });
    }
  }

  function getCustomSuit(suit){
    var _suit = '';
    for (var i = 0; i < suit.length; i++) {
      var _keyCode = suit[i].toUpperCase();
      if(typeof SPECIAL_KEYCODES[_keyCode] !== 'undefined'){
        _suit += SPECIAL_KEYCODES[_keyCode];
      }
      else{
        _suit += _keyCode.charCodeAt(0);
      }
    }
    return _suit;
  }

  var SPECIAL_KEYCODES = {
    'SPACE' : 32,
    'ENTER' : 13,
    'UP' : 38,
    'DOWN' : 40,
    'LEFT' : 37,
    'RIGHT' : 39
  };

  var konamizSuit = '3838404037393739666513';

  return function(suit){
    var myOnStart = function(){};
    var myOnStop = function(){};
    var mySuit = (suit instanceof Array && suit.length > 0) ? getCustomSuit(suit) : konamizSuit;
    var myCurrentSuit = '';
    (function(that){
      addEvent(document, 'keydown', function(e){
        myCurrentSuit += e.keyCode;
        if(myCurrentSuit === mySuit){
          myCurrentSuit = '';
          if(!that.isStarted){
            that.start();
          }
          else{
            that.stop();
          }
        }
        else if(mySuit.indexOf(myCurrentSuit) === -1){
          myCurrentSuit = e.keyCode + '';
        }
      });
    })(this);
    this.isStarted = false;
    this.onStart = function(fn){
      myOnStart = fn;
      return this;
    };
    this.onStop = function(fn){
      myOnStop = fn;
      return this;
    };
    this.start = function(){
      myOnStart.call(this);
      this.isStarted = true;
      return this;
    };
    this.stop = function(){
      myOnStop.call(this);
      this.isStarted = false;
      return this;
    };
  }
})();
