!function(e,r){"object"==typeof exports?module.exports=exports=r(require("./core.js")):"function"==typeof define&&define.amd?define(["./core"],r):r(e.CryptoJS)}(this,function(e){return function(r){var t=e,o=t.lib,n=o.WordArray,i=o.Hasher,s=t.algo,a=[],c=[];!function(){function e(e){return 4294967296*(e-(0|e))|0}for(var t=2,o=0;o<64;)(function(e){for(var t=r.sqrt(e),o=2;o<=t;o++)if(!(e%o))return!1;return!0})(t)&&(o<8&&(a[o]=e(r.pow(t,.5))),c[o]=e(r.pow(t,1/3)),o++),t++}();var f=[],h=s.SHA256=i.extend({_doReset:function(){this._hash=new n.init(a.slice(0))},_doProcessBlock:function(e,r){for(var t=this._hash.words,o=t[0],n=t[1],i=t[2],s=t[3],a=t[4],h=t[5],u=t[6],l=t[7],d=0;d<64;d++){if(d<16)f[d]=0|e[r+d];else{var _=f[d-15],p=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,v=f[d-2],H=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;f[d]=p+f[d-7]+H+f[d-16]}var y=a&h^~a&u,w=o&n^o&i^n&i,A=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),S=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),g=l+S+y+c[d]+f[d],m=A+w;l=u,u=h,h=a,a=s+g|0,s=i,i=n,n=o,o=g+m|0}t[0]=t[0]+o|0,t[1]=t[1]+n|0,t[2]=t[2]+i|0,t[3]=t[3]+s|0,t[4]=t[4]+a|0,t[5]=t[5]+h|0,t[6]=t[6]+u|0,t[7]=t[7]+l|0},_doFinalize:function(){var e=this._data,t=e.words,o=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[14+(n+64>>>9<<4)]=r.floor(o/4294967296),t[15+(n+64>>>9<<4)]=o,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=i._createHelper(h),t.HmacSHA256=i._createHmacHelper(h)}(Math),e.SHA256});