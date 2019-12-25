/*
 * Konami-JS ~
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 * Version: 1.6.2 (7/17/2018)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 */
var Konami=function(c){var k={a:function(o,t,fn,ro){if(o.addEventListener){o.addEventListener(t,fn,false);}else if(o.attachEvent){o["e"+t+fn]=fn;o[t+fn]=function(){o["e"+t+fn](window.event,ro);};o.attachEvent("on"+t,o[t+fn]);}},r:function(o,n,c){if(o.removeEventListener){o.removeEventListener(n,c);}else if(o.attachEvent){o.detachEvent(n);}},i:"",p:"38384040373937396665",k:function(e,ro){if(ro){k=ro;}k.i+=e?e.keyCode:event.keyCode;if(k.i.length>k.p.length){k.i=k.i.substr((k.i.length-k.p.length));}if(k.i===k.p){k.c(k._);k.i='';e.preventDefault();return false;}},l:function(l){this._=l;this.a(document,"keydown",this.k,this);this.i.l(l);},u:function(){this.r(document,'keydown',this.k);this.i.u();},c:function(l){window.location=l},i:{x:0,y:0,u:0,v:0,t:false,c:false,o:"",k:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP"],i:[],c:function(l){k.c(l);},m:function(e){if(e.touches.length===1&&k.i.c===true){var touch=e.touches[0];k.i.u=touch.pageX;k.i.v=touch.pageY;k.i.t=false;k.i.c=false;k.i.d();}},e:function(){k.i.i.push(k.i.d());if(k.i.i.length>k.i.k.length){k.i.i.shift();}if(k.i.i.length===k.i.k.length){var m=true;for(var i=0;i<k.i.k.length;i++){if(k.i.i[i]!==k.i.k[i]){m=false;}}if(m){k.i.c(k._);}}},s:function(e){k.i.x=e.changedTouches[0].pageX;k.i.y=e.changedTouches[0].pageY;k.i.t=true;k.i.c=true;},l:function(l){this.o=this.k;k.a(document,"touchmove",this.m);k.a(document,"touchend",this.e,false);k.a(document,"touchstart",this.s);},u:function(){k.r(document,'touchmove',this.m);k.r(document,'touchend',this.e);k.r(document,'touchstart',this.s);},d:function(){x=Math.abs(this.x-this.u);y=Math.abs(this.y-this.v);x=((this.x-this.u)<0)?"RIGHT":"LEFT";t=((this.y-this.v)<0)?"DOWN":"UP";r=(x>y)?x:t;r=(this.t===true)?"TAP":r;return r;}}};typeof c==="string"&&k.l(c);if(typeof c==="function"){k.c=c;k.l();}return k;};if(typeof module!=='undefined'&&typeof module.exports!=='undefined'){module.exports=Konami;}else{if(typeof define==='function'&&define.amd){define([],function(){return Konami;});}else{window.Konami=Konami;}}
