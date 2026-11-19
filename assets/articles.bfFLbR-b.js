import{L as Sc,_ as Cc,c as Pt,F as bc,d as Ft,e as Dc,f as Nc,h as kc,i as ma,j as xc,u as Mc,k as Oc,m as Lc,n as Fc,o as Uc,q as qc,C as jc,s as mo,S as Bc,t as zc}from"./firebase-client.DPGP7YwB.js";var po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,pa;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function _(){}_.prototype=p.prototype,T.F=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(I,y,A){for(var g=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)g[Et-2]=arguments[Et];return p.prototype[y].apply(I,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,p,_){_||(_=0);const I=Array(16);if(typeof p=="string")for(var y=0;y<16;++y)I[y]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(y=0;y<16;++y)I[y]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],y=T.g[2];let A=T.g[3],g;g=p+(A^_&(y^A))+I[0]+3614090360&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+I[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+I[2]+606105819&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+I[3]+3250441966&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(A^_&(y^A))+I[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+I[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+I[6]+2821735955&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+I[7]+4249261313&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(A^_&(y^A))+I[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+I[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+I[10]+4294925233&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+I[11]+2304563134&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(A^_&(y^A))+I[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+I[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+I[14]+2792965006&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+I[15]+1236535329&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(y^A&(_^y))+I[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+I[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+I[11]+643717713&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+I[0]+3921069994&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^A&(_^y))+I[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+I[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+I[15]+3634488961&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+I[4]+3889429448&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^A&(_^y))+I[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+I[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+I[3]+4107603335&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+I[8]+1163531501&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^A&(_^y))+I[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+I[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+I[7]+1735328473&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+I[12]+2368359562&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(_^y^A)+I[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+I[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+I[11]+1839030562&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+I[14]+4259657740&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^A)+I[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+I[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+I[7]+4139469664&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+I[10]+3200236656&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^A)+I[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+I[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+I[3]+3572445317&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+I[6]+76029189&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^A)+I[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+I[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+I[15]+530742520&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+I[2]+3299628645&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(y^(_|~A))+I[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+I[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+I[14]+2878612391&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+I[5]+4237533241&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~A))+I[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+I[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+I[10]+4293915773&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+I[1]+2240044497&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~A))+I[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+I[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+I[6]+2734768916&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+I[13]+1309151649&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~A))+I[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+I[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+I[2]+718787259&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+y&4294967295,T.g[3]=T.g[3]+A&4294967295}n.prototype.v=function(T,p){p===void 0&&(p=T.length);const _=p-this.blockSize,I=this.C;let y=this.h,A=0;for(;A<p;){if(y==0)for(;A<=_;)i(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<p;)if(I[y++]=T.charCodeAt(A++),y==this.blockSize){i(this,I),y=0;break}}else for(;A<p;)if(I[y++]=T[A++],y==this.blockSize){i(this,I),y=0;break}}this.h=y,this.o+=p},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;p=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=p&255,p/=256;for(this.v(T),T=Array(16),p=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)T[p++]=this.g[_]>>>I&255;return T};function o(T,p){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;const _=[];let I=!0;for(let y=T.length-1;y>=0;y--){const A=T[y]|0;I&&A==p||(_[y]=A,I=!1)}this.g=_}var l={};function h(T){return-128<=T&&T<128?o(T,function(p){return new a([p|0],p<0?-1:0)}):new a([T|0],T<0?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return E;if(T<0)return N(f(-T));const p=[];let _=1;for(let I=0;T>=_;I++)p[I]=T/_|0,_*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return N(m(T.substring(1),p));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(p,8));let I=E;for(let A=0;A<T.length;A+=8){var y=Math.min(8,T.length-A);const g=parseInt(T.substring(A,A+y),p);y<8?(y=f(Math.pow(p,y)),I=I.j(y).add(f(g))):(I=I.j(_),I=I.add(f(g)))}return I}var E=h(0),V=h(1),S=h(16777216);r=a.prototype,r.m=function(){if(x(this))return-N(this).m();let T=0,p=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);T+=(I>=0?I:4294967296+I)*p,p*=4294967296}return T},r.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(x(this))return"-"+N(this).toString(T);const p=f(Math.pow(T,6));var _=this;let I="";for(;;){const y=Tt(_,p).g;_=G(_,y.j(p));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=y,k(_))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},r.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(let p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function x(T){return T.h==-1}r.l=function(T){return T=G(this,T),x(T)?-1:k(T)?0:1};function N(T){const p=T.g.length,_=[];for(let I=0;I<p;I++)_[I]=~T.g[I];return new a(_,~T.h).add(V)}r.abs=function(){return x(this)?N(this):this},r.add=function(T){const p=Math.max(this.g.length,T.g.length),_=[];let I=0;for(let y=0;y<=p;y++){let A=I+(this.i(y)&65535)+(T.i(y)&65535),g=(A>>>16)+(this.i(y)>>>16)+(T.i(y)>>>16);I=g>>>16,A&=65535,g&=65535,_[y]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(T,p){return T.add(N(p))}r.j=function(T){if(k(this)||k(T))return E;if(x(this))return x(T)?N(this).j(N(T)):N(N(this).j(T));if(x(T))return N(this.j(N(T)));if(this.l(S)<0&&T.l(S)<0)return f(this.m()*T.m());const p=this.g.length+T.g.length,_=[];for(var I=0;I<2*p;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let y=0;y<T.g.length;y++){const A=this.i(I)>>>16,g=this.i(I)&65535,Et=T.i(y)>>>16,ae=T.i(y)&65535;_[2*I+2*y]+=g*ae,Q(_,2*I+2*y),_[2*I+2*y+1]+=A*ae,Q(_,2*I+2*y+1),_[2*I+2*y+1]+=g*Et,Q(_,2*I+2*y+1),_[2*I+2*y+2]+=A*Et,Q(_,2*I+2*y+2)}for(T=0;T<p;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=p;T<2*p;T++)_[T]=0;return new a(_,0)};function Q(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function J(T,p){this.g=T,this.h=p}function Tt(T,p){if(k(p))throw Error("division by zero");if(k(T))return new J(E,E);if(x(T))return p=Tt(N(T),p),new J(N(p.g),N(p.h));if(x(p))return p=Tt(T,N(p)),new J(N(p.g),p.h);if(T.g.length>30){if(x(T)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=V,I=p;I.l(T)<=0;)_=St(_),I=St(I);var y=ct(_,1),A=ct(I,1);for(I=ct(I,2),_=ct(_,2);!k(I);){var g=A.add(I);g.l(T)<=0&&(y=y.add(_),A=g),I=ct(I,1),_=ct(_,1)}return p=G(T,y.j(p)),new J(y,p)}for(y=E;T.l(p)>=0;){for(_=Math.max(1,Math.floor(T.m()/p.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=f(_),g=A.j(p);x(g)||g.l(T)>0;)_-=I,A=f(_),g=A.j(p);k(A)&&(A=V),y=y.add(A),T=G(T,g)}return new J(y,T)}r.B=function(T){return Tt(this,T).h},r.and=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)&T.i(I);return new a(_,this.h&T.h)},r.or=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)|T.i(I);return new a(_,this.h|T.h)},r.xor=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)^T.i(I);return new a(_,this.h^T.h)};function St(T){const p=T.g.length+1,_=[];for(let I=0;I<p;I++)_[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(_,T.h)}function ct(T,p){const _=p>>5;p%=32;const I=T.g.length-_,y=[];for(let A=0;A<I;A++)y[A]=p>0?T.i(A+_)>>>p|T.i(A+_+1)<<32-p:T.i(A+_);return new a(y,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,pa=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Yt=a}).apply(typeof po<"u"?po:typeof self<"u"?self:typeof window<"u"?window:{});var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ga,un,_a,Xn,ds,ya,Ta,Ea;(function(){var r,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qn=="object"&&Qn];for(var u=0;u<s.length;++u){var c=s[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var n=e(this);function i(s,u){if(u)t:{var c=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var v=s[d];if(!(v in c))break t;c=c[v]}s=s[s.length-1],d=c[s],u=u(d),u!=d&&u!=null&&t(c,s,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(u){var c=[],d;for(d in u)Object.prototype.hasOwnProperty.call(u,d)&&c.push([d,u[d]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function h(s,u,c){return s.call.apply(s.bind,arguments)}function f(s,u,c){return f=h,f.apply(null,arguments)}function m(s,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function E(s,u){function c(){}c.prototype=u.prototype,s.Z=u.prototype,s.prototype=new c,s.prototype.constructor=s,s.Ob=function(d,v,w){for(var b=Array(arguments.length-2),U=2;U<arguments.length;U++)b[U-2]=arguments[U];return u.prototype[v].apply(d,b)}}var V=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function S(s){const u=s.length;if(u>0){const c=Array(u);for(let d=0;d<u;d++)c[d]=s[d];return c}return[]}function k(s,u){for(let d=1;d<arguments.length;d++){const v=arguments[d];var c=typeof v;if(c=c!="object"?c:v?Array.isArray(v)?"array":c:"null",c=="array"||c=="object"&&typeof v.length=="number"){c=s.length||0;const w=v.length||0;s.length=c+w;for(let b=0;b<w;b++)s[c+b]=v[b]}else s.push(v)}}class x{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(s){a.setTimeout(()=>{throw s},0)}function G(){var s=T;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class Q{constructor(){this.h=this.g=null}add(u,c){const d=J.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var J=new x(()=>new Tt,s=>s.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let St,ct=!1,T=new Q,p=()=>{const s=Promise.resolve(void 0);St=()=>{s.then(_)}};function _(){for(var s;s=G();){try{s.h.call(s.g)}catch(c){N(c)}var u=J;u.j(s),u.h<100&&(u.h++,s.next=u.g,u.g=s)}ct=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};a.addEventListener("test",c,u),a.removeEventListener("test",c,u)}catch{}return s})();function g(s){return/^[\s\xa0]*$/.test(s)}function Et(s,u){y.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,u)}E(Et,y),Et.prototype.init=function(s,u){const c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget,u||(c=="mouseover"?u=s.fromElement:c=="mouseout"&&(u=s.toElement)),this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&Et.Z.h.call(this)},Et.prototype.h=function(){Et.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ae="closure_listenable_"+(Math.random()*1e6|0),Yu=0;function Ju(s,u,c,d,v){this.listener=s,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=v,this.key=++Yu,this.da=this.fa=!1}function Nn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function kn(s,u,c){for(const d in s)u.call(c,s[d],d,s)}function Xu(s,u){for(const c in s)u.call(void 0,s[c],c,s)}function fi(s){const u={};for(const c in s)u[c]=s[c];return u}const di="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mi(s,u){let c,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(c in d)s[c]=d[c];for(let w=0;w<di.length;w++)c=di[w],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function xn(s){this.src=s,this.g={},this.h=0}xn.prototype.add=function(s,u,c,d,v){const w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);const b=Ur(s,u,d,v);return b>-1?(u=s[b],c||(u.fa=!1)):(u=new Ju(u,this.src,w,!!d,v),u.fa=c,s.push(u)),u};function Fr(s,u){const c=u.type;if(c in s.g){var d=s.g[c],v=Array.prototype.indexOf.call(d,u,void 0),w;(w=v>=0)&&Array.prototype.splice.call(d,v,1),w&&(Nn(u),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Ur(s,u,c,d){for(let v=0;v<s.length;++v){const w=s[v];if(!w.da&&w.listener==u&&w.capture==!!c&&w.ha==d)return v}return-1}var qr="closure_lm_"+(Math.random()*1e6|0),jr={};function pi(s,u,c,d,v){if(Array.isArray(u)){for(let w=0;w<u.length;w++)pi(s,u[w],c,d,v);return null}return c=yi(c),s&&s[ae]?s.J(u,c,l(d)?!!d.capture:!1,v):Zu(s,u,c,!1,d,v)}function Zu(s,u,c,d,v,w){if(!u)throw Error("Invalid event type");const b=l(v)?!!v.capture:!!v;let U=zr(s);if(U||(s[qr]=U=new xn(s)),c=U.add(u,c,d,b,w),c.proxy)return c;if(d=tc(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)A||(v=b),v===void 0&&(v=!1),s.addEventListener(u.toString(),d,v);else if(s.attachEvent)s.attachEvent(_i(u.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function tc(){function s(c){return u.call(s.src,s.listener,c)}const u=ec;return s}function gi(s,u,c,d,v){if(Array.isArray(u))for(var w=0;w<u.length;w++)gi(s,u[w],c,d,v);else d=l(d)?!!d.capture:!!d,c=yi(c),s&&s[ae]?(s=s.i,w=String(u).toString(),w in s.g&&(u=s.g[w],c=Ur(u,c,d,v),c>-1&&(Nn(u[c]),Array.prototype.splice.call(u,c,1),u.length==0&&(delete s.g[w],s.h--)))):s&&(s=zr(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Ur(u,c,d,v)),(c=s>-1?u[s]:null)&&Br(c))}function Br(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[ae])Fr(u.i,s);else{var c=s.type,d=s.proxy;u.removeEventListener?u.removeEventListener(c,d,s.capture):u.detachEvent?u.detachEvent(_i(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=zr(u))?(Fr(c,s),c.h==0&&(c.src=null,u[qr]=null)):Nn(s)}}}function _i(s){return s in jr?jr[s]:jr[s]="on"+s}function ec(s,u){if(s.da)s=!0;else{u=new Et(u,this);const c=s.listener,d=s.ha||s.src;s.fa&&Br(s),s=c.call(d,u)}return s}function zr(s){return s=s[qr],s instanceof xn?s:null}var Gr="__closure_events_fn_"+(Math.random()*1e9>>>0);function yi(s){return typeof s=="function"?s:(s[Gr]||(s[Gr]=function(u){return s.handleEvent(u)}),s[Gr])}function dt(){I.call(this),this.i=new xn(this),this.M=this,this.G=null}E(dt,I),dt.prototype[ae]=!0,dt.prototype.removeEventListener=function(s,u,c,d){gi(this,s,u,c,d)};function gt(s,u){var c,d=s.G;if(d)for(c=[];d;d=d.G)c.push(d);if(s=s.M,d=u.type||u,typeof u=="string")u=new y(u,s);else if(u instanceof y)u.target=u.target||s;else{var v=u;u=new y(d,s),mi(u,v)}v=!0;let w,b;if(c)for(b=c.length-1;b>=0;b--)w=u.g=c[b],v=Mn(w,d,!0,u)&&v;if(w=u.g=s,v=Mn(w,d,!0,u)&&v,v=Mn(w,d,!1,u)&&v,c)for(b=0;b<c.length;b++)w=u.g=c[b],v=Mn(w,d,!1,u)&&v}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var s=this.i;for(const u in s.g){const c=s.g[u];for(let d=0;d<c.length;d++)Nn(c[d]);delete s.g[u],s.h--}}this.G=null},dt.prototype.J=function(s,u,c,d){return this.i.add(String(s),u,!1,c,d)},dt.prototype.K=function(s,u,c,d){return this.i.add(String(s),u,!0,c,d)};function Mn(s,u,c,d){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();let v=!0;for(let w=0;w<u.length;++w){const b=u[w];if(b&&!b.da&&b.capture==c){const U=b.listener,st=b.ha||b.src;b.fa&&Fr(s.i,b),v=U.call(st,d)!==!1&&v}}return v&&!d.defaultPrevented}function nc(s,u){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=f(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(s,u||0)}function Ti(s){s.g=nc(()=>{s.g=null,s.i&&(s.i=!1,Ti(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class rc extends I{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ti(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(s){I.call(this),this.h=s,this.g={}}E(Ge,I);var Ei=[];function Ii(s){kn(s.g,function(u,c){this.g.hasOwnProperty(c)&&Br(u)},s),s.g={}}Ge.prototype.N=function(){Ge.Z.N.call(this),Ii(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=a.JSON.stringify,sc=a.JSON.parse,ic=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function vi(){}function Ai(){}var $e={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Kr(){y.call(this,"d")}E(Kr,y);function Qr(){y.call(this,"c")}E(Qr,y);var ue={},wi=null;function On(){return wi=wi||new dt}ue.Ia="serverreachability";function Ri(s){y.call(this,ue.Ia,s)}E(Ri,y);function Ke(s){const u=On();gt(u,new Ri(u))}ue.STAT_EVENT="statevent";function Vi(s,u){y.call(this,ue.STAT_EVENT,s),this.stat=u}E(Vi,y);function _t(s){const u=On();gt(u,new Vi(u,s))}ue.Ja="timingevent";function Pi(s,u){y.call(this,ue.Ja,s),this.size=u}E(Pi,y);function Qe(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},u)}function We(){this.g=!0}We.prototype.ua=function(){this.g=!1};function oc(s,u,c,d,v,w){s.info(function(){if(s.g)if(w){var b="",U=w.split("&");for(let K=0;K<U.length;K++){var st=U[K].split("=");if(st.length>1){const ot=st[0];st=st[1];const Nt=ot.split("_");b=Nt.length>=2&&Nt[1]=="type"?b+(ot+"="+st+"&"):b+(ot+"=redacted&")}}}else b=null;else b=w;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+u+`
`+c+`
`+b})}function ac(s,u,c,d,v,w,b){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+u+`
`+c+`
`+w+" "+b})}function ve(s,u,c,d){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+cc(s,c)+(d?" "+d:"")})}function uc(s,u){s.info(function(){return"TIMEOUT: "+u})}We.prototype.info=function(){};function cc(s,u){if(!s.g)return u;if(!u)return null;try{const w=JSON.parse(u);if(w){for(s=0;s<w.length;s++)if(Array.isArray(w[s])){var c=w[s];if(!(c.length<2)){var d=c[1];if(Array.isArray(d)&&!(d.length<1)){var v=d[0];if(v!="noop"&&v!="stop"&&v!="close")for(let b=1;b<d.length;b++)d[b]=""}}}}return $r(w)}catch{return u}}var Ln={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Si={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ci;function Wr(){}E(Wr,vi),Wr.prototype.g=function(){return new XMLHttpRequest},Ci=new Wr;function He(s){return encodeURIComponent(String(s))}function lc(s){var u=1;s=s.split(":");const c=[];for(;u>0&&s.length;)c.push(s.shift()),u--;return s.length&&c.push(s.join(":")),c}function zt(s,u,c,d){this.j=s,this.i=u,this.l=c,this.S=d||1,this.V=new Ge(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bi}function bi(){this.i=null,this.g="",this.h=!1}var Di={},Hr={};function Yr(s,u,c){s.M=1,s.A=Un(Dt(u)),s.u=c,s.R=!0,Ni(s,null)}function Ni(s,u){s.F=Date.now(),Fn(s),s.B=Dt(s.A);var c=s.B,d=s.S;Array.isArray(d)||(d=[String(d)]),$i(c.i,"t",d),s.C=0,c=s.j.L,s.h=new bi,s.g=co(s.j,c?u:null,!s.u),s.P>0&&(s.O=new rc(f(s.Y,s,s.g),s.P)),u=s.V,c=s.g,d=s.ba;var v="readystatechange";Array.isArray(v)||(v&&(Ei[0]=v.toString()),v=Ei);for(let w=0;w<v.length;w++){const b=pi(c,v[w],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=s.J?fi(s.J):{},s.u?(s.v||(s.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,u)):(s.v="GET",s.g.ea(s.B,s.v,null,u)),Ke(),oc(s.i,s.v,s.B,s.l,s.S,s.u)}zt.prototype.ba=function(s){s=s.target;const u=this.O;u&&Kt(s)==3?u.j():this.Y(s)},zt.prototype.Y=function(s){try{if(s==this.g)t:{const U=Kt(this.g),st=this.g.ya(),K=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||Xi(this.g)))){this.K||U!=4||st==7||(st==8||K<=0?Ke(3):Ke(2)),Jr(this);var u=this.g.ca();this.X=u;var c=hc(this);if(this.o=u==200,ac(this.i,this.v,this.B,this.l,this.S,U,u),this.o){if(this.U&&!this.L){e:{if(this.g){var d,v=this.g;if((d=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(d)){var w=d;break e}}w=null}if(s=w)ve(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xr(this,s);else{this.o=!1,this.m=3,_t(12),ce(this),Ye(this);break t}}if(this.R){s=!0;let ot;for(;!this.K&&this.C<c.length;)if(ot=fc(this,c),ot==Hr){U==4&&(this.m=4,_t(14),s=!1),ve(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==Di){this.m=4,_t(15),ve(this.i,this.l,c,"[Invalid Chunk]"),s=!1;break}else ve(this.i,this.l,ot,null),Xr(this,ot);if(ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||c.length!=0||this.h.h||(this.m=1,_t(16),s=!1),this.o=this.o&&s,!s)ve(this.i,this.l,c,"[Invalid Chunked Response]"),ce(this),Ye(this);else if(c.length>0&&!this.W){this.W=!0;var b=this.j;b.g==this&&b.aa&&!b.P&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),os(b),b.P=!0,_t(11))}}else ve(this.i,this.l,c,null),Xr(this,c);U==4&&ce(this),this.o&&!this.K&&(U==4?io(this.j,this):(this.o=!1,Fn(this)))}else Vc(this.g),u==400&&c.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),ce(this),Ye(this)}}}catch{}finally{}};function hc(s){if(!ki(s))return s.g.la();const u=Xi(s.g);if(u==="")return"";let c="";const d=u.length,v=Kt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return ce(s),Ye(s),"";s.h.i=new a.TextDecoder}for(let w=0;w<d;w++)s.h.h=!0,c+=s.h.i.decode(u[w],{stream:!(v&&w==d-1)});return u.length=0,s.h.g+=c,s.C=0,s.h.g}function ki(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function fc(s,u){var c=s.C,d=u.indexOf(`
`,c);return d==-1?Hr:(c=Number(u.substring(c,d)),isNaN(c)?Di:(d+=1,d+c>u.length?Hr:(u=u.slice(d,d+c),s.C=d+c,u)))}zt.prototype.cancel=function(){this.K=!0,ce(this)};function Fn(s){s.T=Date.now()+s.H,xi(s,s.H)}function xi(s,u){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Qe(f(s.aa,s),u)}function Jr(s){s.D&&(a.clearTimeout(s.D),s.D=null)}zt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(uc(this.i,this.B),this.M!=2&&(Ke(),_t(17)),ce(this),this.m=2,Ye(this)):xi(this,this.T-s)};function Ye(s){s.j.I==0||s.K||io(s.j,s)}function ce(s){Jr(s);var u=s.O;u&&typeof u.dispose=="function"&&u.dispose(),s.O=null,Ii(s.V),s.g&&(u=s.g,s.g=null,u.abort(),u.dispose())}function Xr(s,u){try{var c=s.j;if(c.I!=0&&(c.g==s||Zr(c.h,s))){if(!s.L&&Zr(c.h,s)&&c.I==3){try{var d=c.Ba.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<s.F)Gn(c),Bn(c);else break t;is(c),_t(18)}}else c.xa=v[1],0<c.xa-c.K&&v[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=Qe(f(c.Va,c),6e3));Li(c.h)<=1&&c.ta&&(c.ta=void 0)}else he(c,11)}else if((s.L||c.g==s)&&Gn(c),!g(u))for(v=c.Ba.g.parse(u),u=0;u<v.length;u++){let K=v[u];const ot=K[0];if(!(ot<=c.K))if(c.K=ot,K=K[1],c.I==2)if(K[0]=="c"){c.M=K[1],c.ba=K[2];const Nt=K[3];Nt!=null&&(c.ka=Nt,c.j.info("VER="+c.ka));const fe=K[4];fe!=null&&(c.za=fe,c.j.info("SVER="+c.za));const Qt=K[5];Qt!=null&&typeof Qt=="number"&&Qt>0&&(d=1.5*Qt,c.O=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Wt=s.g;if(Wt){const Kn=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kn){var w=d.h;w.g||Kn.indexOf("spdy")==-1&&Kn.indexOf("quic")==-1&&Kn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(ts(w,w.h),w.h=null))}if(d.G){const as=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;as&&(d.wa=as,W(d.J,d.G,as))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-s.F,c.j.info("Handshake RTT: "+c.T+"ms")),d=c;var b=s;if(d.na=uo(d,d.L?d.ba:null,d.W),b.L){Fi(d.h,b);var U=b,st=d.O;st&&(U.H=st),U.D&&(Jr(U),Fn(U)),d.g=b}else ro(d);c.i.length>0&&zn(c)}else K[0]!="stop"&&K[0]!="close"||he(c,7);else c.I==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?he(c,7):ss(c):K[0]!="noop"&&c.l&&c.l.qa(K),c.A=0)}}Ke(4)}catch{}}var dc=class{constructor(s,u){this.g=s,this.map=u}};function Mi(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Oi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Li(s){return s.h?1:s.g?s.g.size:0}function Zr(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function ts(s,u){s.g?s.g.add(u):s.h=u}function Fi(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Mi.prototype.cancel=function(){if(this.i=Ui(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ui(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const c of s.g.values())u=u.concat(c.G);return u}return S(s.i)}var qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(s,u){if(s){s=s.split("&");for(let c=0;c<s.length;c++){const d=s[c].indexOf("=");let v,w=null;d>=0?(v=s[c].substring(0,d),w=s[c].substring(d+1)):v=s[c],u(v,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Gt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;s instanceof Gt?(this.l=s.l,Je(this,s.j),this.o=s.o,this.g=s.g,Xe(this,s.u),this.h=s.h,es(this,Ki(s.i)),this.m=s.m):s&&(u=String(s).match(qi))?(this.l=!1,Je(this,u[1]||"",!0),this.o=Ze(u[2]||""),this.g=Ze(u[3]||"",!0),Xe(this,u[4]),this.h=Ze(u[5]||"",!0),es(this,u[6]||"",!0),this.m=Ze(u[7]||"")):(this.l=!1,this.i=new en(null,this.l))}Gt.prototype.toString=function(){const s=[];var u=this.j;u&&s.push(tn(u,ji,!0),":");var c=this.g;return(c||u=="file")&&(s.push("//"),(u=this.o)&&s.push(tn(u,ji,!0),"@"),s.push(He(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&s.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(tn(c,c.charAt(0)=="/"?_c:gc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",tn(c,Tc)),s.join("")},Gt.prototype.resolve=function(s){const u=Dt(this);let c=!!s.j;c?Je(u,s.j):c=!!s.o,c?u.o=s.o:c=!!s.g,c?u.g=s.g:c=s.u!=null;var d=s.h;if(c)Xe(u,s.u);else if(c=!!s.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var v=u.h.lastIndexOf("/");v!=-1&&(d=u.h.slice(0,v+1)+d)}if(v=d,v==".."||v==".")d="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){d=v.lastIndexOf("/",0)==0,v=v.split("/");const w=[];for(let b=0;b<v.length;){const U=v[b++];U=="."?d&&b==v.length&&w.push(""):U==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),d&&b==v.length&&w.push("")):(w.push(U),d=!0)}d=w.join("/")}else d=v}return c?u.h=d:c=s.i.toString()!=="",c?es(u,Ki(s.i)):c=!!s.m,c&&(u.m=s.m),u};function Dt(s){return new Gt(s)}function Je(s,u,c){s.j=c?Ze(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Xe(s,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);s.u=u}else s.u=null}function es(s,u,c){u instanceof en?(s.i=u,Ec(s.i,s.l)):(c||(u=tn(u,yc)),s.i=new en(u,s.l))}function W(s,u,c){s.i.set(u,c)}function Un(s){return W(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Ze(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function tn(s,u,c){return typeof s=="string"?(s=encodeURI(s).replace(u,pc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function pc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ji=/[#\/\?@]/g,gc=/[#\?:]/g,_c=/[#\?]/g,yc=/[#\?@]/g,Tc=/#/g;function en(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function le(s){s.g||(s.g=new Map,s.h=0,s.i&&mc(s.i,function(u,c){s.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}r=en.prototype,r.add=function(s,u){le(this),this.i=null,s=Ae(this,s);let c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(u),this.h+=1,this};function Bi(s,u){le(s),u=Ae(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function zi(s,u){return le(s),u=Ae(s,u),s.g.has(u)}r.forEach=function(s,u){le(this),this.g.forEach(function(c,d){c.forEach(function(v){s.call(u,v,d,this)},this)},this)};function Gi(s,u){le(s);let c=[];if(typeof u=="string")zi(s,u)&&(c=c.concat(s.g.get(Ae(s,u))));else for(s=Array.from(s.g.values()),u=0;u<s.length;u++)c=c.concat(s[u]);return c}r.set=function(s,u){return le(this),this.i=null,s=Ae(this,s),zi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},r.get=function(s,u){return s?(s=Gi(this,s),s.length>0?String(s[0]):u):u};function $i(s,u,c){Bi(s,u),c.length>0&&(s.i=null,s.g.set(Ae(s,u),S(c)),s.h+=c.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(let d=0;d<u.length;d++){var c=u[d];const v=He(c);c=Gi(this,c);for(let w=0;w<c.length;w++){let b=v;c[w]!==""&&(b+="="+He(c[w])),s.push(b)}}return this.i=s.join("&")};function Ki(s){const u=new en;return u.i=s.i,s.g&&(u.g=new Map(s.g),u.h=s.h),u}function Ae(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Ec(s,u){u&&!s.j&&(le(s),s.i=null,s.g.forEach(function(c,d){const v=d.toLowerCase();d!=v&&(Bi(this,d),$i(this,v,c))},s)),s.j=u}function Ic(s,u){const c=new We;if(a.Image){const d=new Image;d.onload=m($t,c,"TestLoadImage: loaded",!0,u,d),d.onerror=m($t,c,"TestLoadImage: error",!1,u,d),d.onabort=m($t,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=m($t,c,"TestLoadImage: timeout",!1,u,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else u(!1)}function vc(s,u){const c=new We,d=new AbortController,v=setTimeout(()=>{d.abort(),$t(c,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:d.signal}).then(w=>{clearTimeout(v),w.ok?$t(c,"TestPingServer: ok",!0,u):$t(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),$t(c,"TestPingServer: error",!1,u)})}function $t(s,u,c,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(c)}catch{}}function Ac(){this.g=new ic}function ns(s){this.i=s.Sb||null,this.h=s.ab||!1}E(ns,vi),ns.prototype.g=function(){return new qn(this.i,this.h)};function qn(s,u){dt.call(this),this.H=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(qn,dt),r=qn.prototype,r.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=u,this.readyState=1,rn(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(u.body=s),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},r.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qi(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qi(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}r.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?nn(this):rn(this),this.readyState==3&&Qi(this)}},r.Oa=function(s){this.g&&(this.response=this.responseText=s,nn(this))},r.Na=function(s){this.g&&(this.response=s,nn(this))},r.ga=function(){this.g&&nn(this)};function nn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,rn(s)}r.setRequestHeader=function(s,u){this.A.append(s,u)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=u.next();return s.join(`\r
`)};function rn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Wi(s){let u="";return kn(s,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function rs(s,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Wi(c),typeof s=="string"?c!=null&&He(c):W(s,u,c))}function X(s){dt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(X,dt);var wc=/^https?$/i,Rc=["POST","PUT"];r=X.prototype,r.Fa=function(s){this.H=s},r.ea=function(s,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ci.g(),this.g.onreadystatechange=V(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(w){Hi(this,w);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)c.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())c.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),v=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(Rc,u,void 0)>=0)||d||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of c)this.g.setRequestHeader(w,b);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(w){Hi(this,w)}};function Hi(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.o=5,Yi(s),jn(s)}function Yi(s){s.A||(s.A=!0,gt(s,"complete"),gt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,gt(this,"complete"),gt(this,"abort"),jn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jn(this,!0)),X.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Ji(this):this.Xa())},r.Xa=function(){Ji(this)};function Ji(s){if(s.h&&typeof o<"u"){if(s.v&&Kt(s)==4)setTimeout(s.Ca.bind(s),0);else if(gt(s,"readystatechange"),Kt(s)==4){s.h=!1;try{const w=s.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=w===0){let b=String(s.D).match(qi)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),d=!wc.test(b?b.toLowerCase():"")}c=d}if(c)gt(s,"complete"),gt(s,"success");else{s.o=6;try{var v=Kt(s)>2?s.g.statusText:""}catch{v=""}s.l=v+" ["+s.ca()+"]",Yi(s)}}finally{jn(s)}}}}function jn(s,u){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const c=s.g;s.g=null,u||gt(s,"ready");try{c.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Kt(s){return s.g?s.g.readyState:0}r.ca=function(){try{return Kt(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),sc(u)}};function Xi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Vc(s){const u={};s=(s.g&&Kt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(g(s[d]))continue;var c=lc(s[d]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=u[v]||[];u[v]=w,w.push(c)}Xu(u,function(d){return d.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(s,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||u}function Zi(s){this.za=0,this.i=[],this.j=new We,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=sn("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=sn("baseRetryDelayMs",5e3,s),this.Za=sn("retryDelaySeedMs",1e4,s),this.Ta=sn("forwardChannelMaxRetries",2,s),this.va=sn("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Mi(s&&s.concurrentRequestLimit),this.Ba=new Ac,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Zi.prototype,r.ka=8,r.I=1,r.connect=function(s,u,c,d){_t(0),this.W=s,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.J=uo(this,null,this.W),zn(this)};function ss(s){if(to(s),s.I==3){var u=s.V++,c=Dt(s.J);if(W(c,"SID",s.M),W(c,"RID",u),W(c,"TYPE","terminate"),on(s,c),u=new zt(s,s.j,u),u.M=2,u.A=Un(Dt(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=u.A,c=!0),c||(u.g=co(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Fn(u)}ao(s)}function Bn(s){s.g&&(os(s),s.g.cancel(),s.g=null)}function to(s){Bn(s),s.v&&(a.clearTimeout(s.v),s.v=null),Gn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function zn(s){if(!Oi(s.h)&&!s.m){s.m=!0;var u=s.Ea;St||p(),ct||(St(),ct=!0),T.add(u,s),s.D=0}}function Pc(s,u){return Li(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=u.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Qe(f(s.Ea,s,u),oo(s,s.D)),s.D++,!0)}r.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const v=new zt(this,this.j,s);let w=this.o;if(this.U&&(w?(w=fi(w),mi(w,this.U)):w=this.U),this.u!==null||this.R||(v.J=w,w=null),this.S)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,u>4096){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=no(this,v,u),c=Dt(this.J),W(c,"RID",s),W(c,"CVER",22),this.G&&W(c,"X-HTTP-Session-Id",this.G),on(this,c),w&&(this.R?u="headers="+He(Wi(w))+"&"+u:this.u&&rs(c,this.u,w)),ts(this.h,v),this.Ra&&W(c,"TYPE","init"),this.S?(W(c,"$req",u),W(c,"SID","null"),v.U=!0,Yr(v,c,null)):Yr(v,c,u),this.I=2}}else this.I==3&&(s?eo(this,s):this.i.length==0||Oi(this.h)||eo(this))};function eo(s,u){var c;u?c=u.l:c=s.V++;const d=Dt(s.J);W(d,"SID",s.M),W(d,"RID",c),W(d,"AID",s.K),on(s,d),s.u&&s.o&&rs(d,s.u,s.o),c=new zt(s,s.j,c,s.D+1),s.u===null&&(c.J=s.o),u&&(s.i=u.G.concat(s.i)),u=no(s,c,1e3),c.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),ts(s.h,c),Yr(c,d,u)}function on(s,u){s.H&&kn(s.H,function(c,d){W(u,d,c)}),s.l&&kn({},function(c,d){W(u,d,c)})}function no(s,u,c){c=Math.min(s.i.length,c);const d=s.l?f(s.l.Ka,s.l,s):null;t:{var v=s.i;let U=-1;for(;;){const st=["count="+c];U==-1?c>0?(U=v[0].g,st.push("ofs="+U)):U=0:st.push("ofs="+U);let K=!0;for(let ot=0;ot<c;ot++){var w=v[ot].g;const Nt=v[ot].map;if(w-=U,w<0)U=Math.max(0,v[ot].g-100),K=!1;else try{w="req"+w+"_"||"";try{var b=Nt instanceof Map?Nt:Object.entries(Nt);for(const[fe,Qt]of b){let Wt=Qt;l(Qt)&&(Wt=$r(Qt)),st.push(w+fe+"="+encodeURIComponent(Wt))}}catch(fe){throw st.push(w+"type="+encodeURIComponent("_badmap")),fe}}catch{d&&d(Nt)}}if(K){b=st.join("&");break t}}b=void 0}return s=s.i.splice(0,c),u.G=s,b}function ro(s){if(!s.g&&!s.v){s.Y=1;var u=s.Da;St||p(),ct||(St(),ct=!0),T.add(u,s),s.A=0}}function is(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Qe(f(s.Da,s),oo(s,s.A)),s.A++,!0)}r.Da=function(){if(this.v=null,so(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Qe(f(this.Wa,this),s)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),Bn(this),so(this))};function os(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function so(s){s.g=new zt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var u=Dt(s.na);W(u,"RID","rpc"),W(u,"SID",s.M),W(u,"AID",s.K),W(u,"CI",s.F?"0":"1"),!s.F&&s.ia&&W(u,"TO",s.ia),W(u,"TYPE","xmlhttp"),on(s,u),s.u&&s.o&&rs(u,s.u,s.o),s.O&&(s.g.H=s.O);var c=s.g;s=s.ba,c.M=1,c.A=Un(Dt(u)),c.u=null,c.R=!0,Ni(c,s)}r.Va=function(){this.C!=null&&(this.C=null,Bn(this),is(this),_t(19))};function Gn(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function io(s,u){var c=null;if(s.g==u){Gn(s),os(s),s.g=null;var d=2}else if(Zr(s.h,u))c=u.G,Fi(s.h,u),d=1;else return;if(s.I!=0){if(u.o)if(d==1){c=u.u?u.u.length:0,u=Date.now()-u.F;var v=s.D;d=On(),gt(d,new Pi(d,c)),zn(s)}else ro(s);else if(v=u.m,v==3||v==0&&u.X>0||!(d==1&&Pc(s,u)||d==2&&is(s)))switch(c&&c.length>0&&(u=s.h,u.i=u.i.concat(c)),v){case 1:he(s,5);break;case 4:he(s,10);break;case 3:he(s,6);break;default:he(s,2)}}}function oo(s,u){let c=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(c*=2),c*u}function he(s,u){if(s.j.info("Error code "+u),u==2){var c=f(s.bb,s),d=s.Ua;const v=!d;d=new Gt(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Je(d,"https"),Un(d),v?Ic(d.toString(),c):vc(d.toString(),c)}else _t(2);s.I=0,s.l&&s.l.pa(u),ao(s),to(s)}r.bb=function(s){s?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function ao(s){if(s.I=0,s.ja=[],s.l){const u=Ui(s.h);(u.length!=0||s.i.length!=0)&&(k(s.ja,u),k(s.ja,s.i),s.h.i.length=0,S(s.i),s.i.length=0),s.l.oa()}}function uo(s,u,c){var d=c instanceof Gt?Dt(c):new Gt(c);if(d.g!="")u&&(d.g=u+"."+d.g),Xe(d,d.u);else{var v=a.location;d=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;const w=new Gt(null);d&&Je(w,d),u&&(w.g=u),v&&Xe(w,v),c&&(w.h=c),d=w}return c=s.G,u=s.wa,c&&u&&W(d,c,u),W(d,"VER",s.ka),on(s,d),d}function co(s,u,c){if(u&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Aa&&!s.ma?new X(new ns({ab:c})):new X(s.ma),u.Fa(s.L),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function lo(){}r=lo.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function $n(){}$n.prototype.g=function(s,u){return new At(s,u)};function At(s,u){dt.call(this),this.g=new Zi(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(s?s["X-WebChannel-Client-Profile"]=u.sa:s={"X-WebChannel-Client-Profile":u.sa}),this.g.U=s,(s=u&&u.Qb)&&!g(s)&&(this.g.u=s),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new we(this)}E(At,dt),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){ss(this.g)},At.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.v&&(c={},c.__data__=$r(s),s=c);u.i.push(new dc(u.Ya++,s)),u.I==3&&zn(u)},At.prototype.N=function(){this.g.l=null,delete this.j,ss(this.g),delete this.g,At.Z.N.call(this)};function ho(s){Kr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const c in u){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}E(ho,Kr);function fo(){Qr.call(this),this.status=1}E(fo,Qr);function we(s){this.g=s}E(we,lo),we.prototype.ra=function(){gt(this.g,"a")},we.prototype.qa=function(s){gt(this.g,new ho(s))},we.prototype.pa=function(s){gt(this.g,new fo)},we.prototype.oa=function(){gt(this.g,"b")},$n.prototype.createWebChannel=$n.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Ea=function(){return new $n},Ta=function(){return On()},ya=ue,ds={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ln.NO_ERROR=0,Ln.TIMEOUT=8,Ln.HTTP_ERROR=6,Xn=Ln,Si.COMPLETE="complete",_a=Si,Ai.EventType=$e,$e.OPEN="a",$e.CLOSE="b",$e.ERROR="c",$e.MESSAGE="d",dt.prototype.listen=dt.prototype.J,un=Ai,X.prototype.listenOnce=X.prototype.K,X.prototype.getLastError=X.prototype.Ha,X.prototype.getLastErrorCode=X.prototype.ya,X.prototype.getStatus=X.prototype.ca,X.prototype.getResponseJson=X.prototype.La,X.prototype.getResponseText=X.prototype.la,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Fa,ga=X}).apply(typeof Qn<"u"?Qn:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe="12.10.0";function Gc(r){qe=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Sc("@firebase/firestore");function Re(){return pe.logLevel}function D(r,...t){if(pe.logLevel<=Ft.DEBUG){const e=t.map(Cs);pe.debug(`Firestore (${qe}): ${r}`,...e)}}function jt(r,...t){if(pe.logLevel<=Ft.ERROR){const e=t.map(Cs);pe.error(`Firestore (${qe}): ${r}`,...e)}}function ge(r,...t){if(pe.logLevel<=Ft.WARN){const e=t.map(Cs);pe.warn(`Firestore (${qe}): ${r}`,...e)}}function Cs(r){if(typeof r=="string")return r;try{return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Ia(r,n,e)}function Ia(r,t,e){let n=`FIRESTORE (${qe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw jt(n),new Error(n)}function z(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||Ia(t,i,n)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends bc{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $c{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(pt.UNAUTHENTICATED)))}shutdown(){}}class Kc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Qc{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ut,t.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ut)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string",31837,{l:n}),new va(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string",2055,{h:t}),new pt(t)}}class Wc{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Hc{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Wc(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class go{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yc{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cc(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){z(this.o===void 0,3512);const n=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>n(o)))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new go(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(z(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new go(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Jc(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function ms(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const i=r.charAt(n),o=t.charAt(n);if(i!==o)return us(i)===us(o)?q(i,o):us(i)?1:-1}return q(r.length,t.length)}const Xc=55296,Zc=57343;function us(r){const t=r.charCodeAt(0);return t>=Xc&&t<=Zc}function ke(r,t,e){return r.length===t.length&&r.every(((n,i)=>e(n,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="__name__";class kt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return kt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=kt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const n=kt.isNumericId(t),i=kt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?kt.extractNumericId(t).compare(kt.extractNumericId(e)):ms(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Yt.fromString(t.substring(4,t.length-2))}}class $ extends kt{construct(t,e,n){return new $(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new C(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((i=>i.length>0)))}return new $(e)}static emptyPath(){return new $([])}}const tl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends kt{construct(t,e,n){return new ht(t,e,n)}static isValidIdentifier(t){return tl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_o}static keyField(){return new ht([_o])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new C(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new C(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new C(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(n+=l,i++):(o(),i++)}if(o(),a)throw new C(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M($.fromString(t))}static fromName(t){return new M($.fromString(t).popFirst(5))}static empty(){return new M($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&$.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return $.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new $(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(r,t,e){if(!e)throw new C(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function el(r,t,e,n){if(t===!0&&n===!0)throw new C(R.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function yo(r){if(!M.isDocumentKey(r))throw new C(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function To(r){if(M.isDocumentKey(r))throw new C(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function wa(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function gr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function qt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new C(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gr(r);throw new C(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function nl(r,t){if(t<=0)throw new C(R.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(r,t){const e={typeString:r};return t&&(e.value=t),e}function Rn(r,t){if(!wa(r))throw new C(R.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(i&&typeof a!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new C(R.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=-62135596800,Io=1e6;class H{static now(){return H.fromMillis(Date.now())}static fromDate(t){return H.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Io);return new H(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new C(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new C(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Eo)throw new C(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Io}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:H._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Rn(t,H._jsonSchema))return new H(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Eo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}H._jsonSchemaVersion="firestore/timestamp/1.0",H._jsonSchema={type:rt("string",H._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new H(0,0))}static max(){return new L(new H(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=-1;function rl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=L.fromTimestamp(n===1e9?new H(e+1,0):new H(e,n));return new Zt(i,M.empty(),t)}function sl(r){return new Zt(r.readTime,r.key,gn)}class Zt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Zt(L.min(),M.empty(),gn)}static max(){return new Zt(L.max(),M.empty(),gn)}}function il(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class al{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==ol)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P(((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):P.reject(e)}static resolve(t){return new P(((e,n)=>{e(t)}))}static reject(t){return new P(((e,n)=>{n(t)}))}static waitFor(t){return new P(((e,n)=>{let i=0,o=0,a=!1;t.forEach((l=>{++i,l.next((()=>{++o,a&&o===i&&e()}),(h=>n(h)))})),a=!0,o===i&&e()}))}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next((i=>i?P.resolve(i):n()));return e}static forEach(t,e){const n=[];return t.forEach(((i,o)=>{n.push(e.call(this,i,o))})),this.waitFor(n)}static mapArray(t,e){return new P(((n,i)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next((m=>{a[f]=m,++l,l===o&&n(a)}),(m=>i(m)))}}))}static doWhile(t,e){return new P(((n,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):n()};o()}))}}function ul(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Be(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}_r.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=-1;function Vn(r){return r==null}function sr(r){return r===0&&1/r==-1/0}function cl(r){return typeof r=="number"&&Number.isInteger(r)&&!sr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="";function ll(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=vo(t)),t=hl(r.get(e),t);return vo(t)}function hl(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Ra:e+="";break;default:e+=o}}return e}function vo(r){return r+Ra+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ie(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Va(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wn(this.root,t,this.comparator,!0)}}class Wn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new lt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new wo(this.data.getIterator())}getIteratorFrom(t){return new wo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class wo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new it(ht.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ke(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Pa("Invalid base64 string: "+o):o}})(t);return new ft(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const fl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(r){if(z(!!r,39018),typeof r=="string"){let t=0;const e=fl.exec(r);if(z(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ee(r){return typeof r=="string"?ft.fromBase64String(r):ft.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="server_timestamp",Ca="__type__",ba="__previous_value__",Da="__local_write_time__";function yr(r){return(r?.mapValue?.fields||{})[Ca]?.stringValue===Sa}function Tr(r){const t=r.mapValue.fields[ba];return yr(t)?Tr(t):t}function _n(r){const t=te(r.mapValue.fields[Da].timestampValue);return new H(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,e,n,i,o,a,l,h,f,m,E){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m,this.apiKey=E}}const ir="(default)";class yn{constructor(t,e){this.projectId=t,this.database=e||ir}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database===ir}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}function ml(r,t){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new C(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(r.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="__type__",pl="__max__",Hn={mapValue:{}},ka="__vector__",or="value";function ne(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?yr(r)?4:_l(r)?9007199254740991:gl(r)?10:11:O(28295,{value:r})}function Ot(r,t){if(r===t)return!0;const e=ne(r);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return _n(r).isEqual(_n(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=te(i.timestampValue),l=te(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(i,o){return ee(i.bytesValue).isEqual(ee(o.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)})(r,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Z(i.doubleValue),l=Z(o.doubleValue);return a===l?sr(a)===sr(l):isNaN(a)&&isNaN(l)}return!1})(r,t);case 9:return ke(r.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Ao(a)!==Ao(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ot(a[h],l[h])))return!1;return!0})(r,t);default:return O(52216,{left:r})}}function Tn(r,t){return(r.values||[]).find((e=>Ot(e,t)))!==void 0}function xe(r,t){if(r===t)return 0;const e=ne(r),n=ne(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(r,t);case 3:return Ro(r.timestampValue,t.timestampValue);case 4:return Ro(_n(r),_n(t));case 5:return ms(r.stringValue,t.stringValue);case 6:return(function(o,a){const l=ee(o),h=ee(a);return l.compareTo(h)})(r.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=q(l[f],h[f]);if(m!==0)return m}return q(l.length,h.length)})(r.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=q(Z(o.latitude),Z(a.latitude));return l!==0?l:q(Z(o.longitude),Z(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Vo(r.arrayValue,t.arrayValue);case 10:return(function(o,a){const l=o.fields||{},h=a.fields||{},f=l[or]?.arrayValue,m=h[or]?.arrayValue,E=q(f?.values?.length||0,m?.values?.length||0);return E!==0?E:Vo(f,m)})(r.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Hn.mapValue&&a===Hn.mapValue)return 0;if(o===Hn.mapValue)return 1;if(a===Hn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const V=ms(h[E],m[E]);if(V!==0)return V;const S=xe(l[h[E]],f[m[E]]);if(S!==0)return S}return q(h.length,m.length)})(r.mapValue,t.mapValue);default:throw O(23264,{he:e})}}function Ro(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=te(r),n=te(t),i=q(e.seconds,n.seconds);return i!==0?i:q(e.nanos,n.nanos)}function Vo(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=xe(e[i],n[i]);if(o)return o}return q(e.length,n.length)}function Me(r){return ps(r)}function ps(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=te(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return ee(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return M.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=ps(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${ps(e.fields[a])}`;return i+"}"})(r.mapValue):O(61005,{value:r})}function Zn(r){switch(ne(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Tr(r);return t?16+Zn(t):16;case 5:return 2*r.stringValue.length;case 6:return ee(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,o)=>i+Zn(o)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return ie(n.fields,((o,a)=>{i+=o.length+Zn(a)})),i})(r.mapValue);default:throw O(13486,{value:r})}}function ar(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function gs(r){return!!r&&"integerValue"in r}function Ns(r){return!!r&&"arrayValue"in r}function Po(r){return!!r&&"nullValue"in r}function So(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function tr(r){return!!r&&"mapValue"in r}function gl(r){return(r?.mapValue?.fields||{})[Na]?.stringValue===ka}function fn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return ie(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=fn(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=fn(r.arrayValue.values[e]);return t}return{...r}}function _l(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===pl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.value=t}static empty(){return new yt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fn(e)}setAll(t){let e=ht.emptyPath(),n={},i=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=l.popLast()}a?n[l.lastSegment()]=fn(a):i.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];tr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ie(e,((i,o)=>t[i]=o));for(const i of n)delete t[i]}clone(){return new yt(fn(this.value))}}function xa(r){const t=[];return ie(r.fields,((e,n)=>{const i=new ht([e]);if(tr(n)){const o=xa(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)})),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,n,i,o,a,l){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ut(t,0,L.min(),L.min(),L.min(),yt.empty(),0)}static newFoundDocument(t,e,n,i){return new ut(t,1,e,L.min(),n,i,0)}static newNoDocument(t,e){return new ut(t,2,e,L.min(),L.min(),yt.empty(),0)}static newUnknownDocument(t,e){return new ut(t,3,e,L.min(),L.min(),yt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e){this.position=t,this.inclusive=e}}function Co(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),e.key):n=xe(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function bo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ot(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e="asc"){this.field=t,this.dir=e}}function yl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{}class nt extends Ma{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new El(t,e,n):e==="array-contains"?new Al(t,n):e==="in"?new wl(t,n):e==="not-in"?new Rl(t,n):e==="array-contains-any"?new Vl(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Il(t,n):new vl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(xe(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends Ma{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new bt(t,e)}matches(t){return Oa(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Oa(r){return r.op==="and"}function La(r){return Tl(r)&&Oa(r)}function Tl(r){for(const t of r.filters)if(t instanceof bt)return!1;return!0}function _s(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+Me(r.value);if(La(r))return r.filters.map((t=>_s(t))).join(",");{const t=r.filters.map((e=>_s(e))).join(",");return`${r.op}(${t})`}}function Fa(r,t){return r instanceof nt?(function(n,i){return i instanceof nt&&n.op===i.op&&n.field.isEqual(i.field)&&Ot(n.value,i.value)})(r,t):r instanceof bt?(function(n,i){return i instanceof bt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((o,a,l)=>o&&Fa(a,i.filters[l])),!0):!1})(r,t):void O(19439)}function Ua(r){return r instanceof nt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Me(e.value)}`})(r):r instanceof bt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Ua).join(" ,")+"}"})(r):"Filter"}class El extends nt{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Il extends nt{constructor(t,e){super(t,"in",e),this.keys=qa("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class vl extends nt{constructor(t,e){super(t,"not-in",e),this.keys=qa("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function qa(r,t){return(t.arrayValue?.values||[]).map((e=>M.fromName(e.referenceValue)))}class Al extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ns(e)&&Tn(e.arrayValue,this.value)}}class wl extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tn(this.value.arrayValue,e)}}class Rl extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Tn(this.value.arrayValue,e)}}class Vl extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ns(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>Tn(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,e=null,n=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Do(r,t=null,e=[],n=[],i=null,o=null,a=null){return new Pl(r,t,e,n,i,o,a)}function ks(r){const t=F(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>_s(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),Vn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Me(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Me(n))).join(",")),t.Te=e}return t.Te}function xs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!yl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Fa(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!bo(r.startAt,t.startAt)&&bo(r.endAt,t.endAt)}function ys(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e=null,n=[],i=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Sl(r,t,e,n,i,o,a,l){return new Te(r,t,e,n,i,o,a,l)}function Ms(r){return new Te(r)}function No(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Cl(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Os(r){return r.collectionGroup!==null}function be(r){const t=F(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new it(ht.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new En(o,n))})),e.has(ht.keyField().canonicalString())||t.Ie.push(new En(ht.keyField(),n))}return t.Ie}function xt(r){const t=F(r);return t.Ee||(t.Ee=bl(t,be(r))),t.Ee}function bl(r,t){if(r.limitType==="F")return Do(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new En(i.field,o)}));const e=r.endAt?new Oe(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Oe(r.startAt.position,r.startAt.inclusive):null;return Do(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Ts(r,t){const e=r.filters.concat([t]);return new Te(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Dl(r,t){const e=r.explicitOrderBy.concat([t]);return new Te(r.path,r.collectionGroup,e,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function ur(r,t,e){return new Te(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Nl(r,t){return new Te(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,t,r.endAt)}function Er(r,t){return xs(xt(r),xt(t))&&r.limitType===t.limitType}function ja(r){return`${ks(xt(r))}|lt:${r.limitType}`}function Ve(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((i=>Ua(i))).join(", ")}]`),Vn(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>Me(i))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>Me(i))).join(",")),`Target(${n})`})(xt(r))}; limitType=${r.limitType})`}function Ir(r,t){return t.isFoundDocument()&&(function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,t)&&(function(n,i){for(const o of be(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(r,t)&&(function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0})(r,t)&&(function(n,i){return!(n.startAt&&!(function(a,l,h){const f=Co(a,l,h);return a.inclusive?f<=0:f<0})(n.startAt,be(n),i)||n.endAt&&!(function(a,l,h){const f=Co(a,l,h);return a.inclusive?f>=0:f>0})(n.endAt,be(n),i))})(r,t)}function kl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ba(r){return(t,e)=>{let n=!1;for(const i of be(r)){const o=xl(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function xl(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?xe(h,f):O(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ie(this.inner,((e,n)=>{for(const[i,o]of n)t(i,o)}))}isEmpty(){return Va(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new Y(M.comparator);function Bt(){return Ml}const za=new Y(M.comparator);function cn(...r){let t=za;for(const e of r)t=t.insert(e.key,e);return t}function Ga(r){let t=za;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function de(){return dn()}function $a(){return dn()}function dn(){return new Ee((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Ol=new Y(M.comparator),Ll=new it(M.comparator);function j(...r){let t=Ll;for(const e of r)t=t.add(e);return t}const Fl=new it(q);function Ul(){return Fl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sr(t)?"-0":t}}function Ka(r){return{integerValue:""+r}}function ql(r,t){return cl(t)?Ka(t):Ls(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this._=void 0}}function jl(r,t,e){return r instanceof In?(function(i,o){const a={fields:{[Ca]:{stringValue:Sa},[Da]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&yr(o)&&(o=Tr(o)),o&&(a.fields[ba]=o),{mapValue:a}})(e,t):r instanceof vn?Wa(r,t):r instanceof An?Ha(r,t):(function(i,o){const a=Qa(i,o),l=ko(a)+ko(i.Ae);return gs(a)&&gs(i.Ae)?Ka(l):Ls(i.serializer,l)})(r,t)}function Bl(r,t,e){return r instanceof vn?Wa(r,t):r instanceof An?Ha(r,t):e}function Qa(r,t){return r instanceof cr?(function(n){return gs(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(t)?t:{integerValue:0}:null}class In extends vr{}class vn extends vr{constructor(t){super(),this.elements=t}}function Wa(r,t){const e=Ya(t);for(const n of r.elements)e.some((i=>Ot(i,n)))||e.push(n);return{arrayValue:{values:e}}}class An extends vr{constructor(t){super(),this.elements=t}}function Ha(r,t){let e=Ya(t);for(const n of r.elements)e=e.filter((i=>!Ot(i,n)));return{arrayValue:{values:e}}}class cr extends vr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ko(r){return Z(r.integerValue||r.doubleValue)}function Ya(r){return Ns(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e){this.field=t,this.transform=e}}function Gl(r,t){return r.field.isEqual(t.field)&&(function(n,i){return n instanceof vn&&i instanceof vn||n instanceof An&&i instanceof An?ke(n.elements,i.elements,Ot):n instanceof cr&&i instanceof cr?Ot(n.Ae,i.Ae):n instanceof In&&i instanceof In})(r.transform,t.transform)}class $l{constructor(t,e){this.version=t,this.transformResults=e}}class vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new vt}static exists(t){return new vt(void 0,t)}static updateTime(t){return new vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ar{}function Ja(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Fs(r.key,vt.none()):new Pn(r.key,r.data,vt.none());{const e=r.data,n=yt.empty();let i=new it(ht.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new oe(r.key,n,new Rt(i.toArray()),vt.none())}}function Kl(r,t,e){r instanceof Pn?(function(i,o,a){const l=i.value.clone(),h=Mo(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(r,t,e):r instanceof oe?(function(i,o,a){if(!er(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Mo(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Xa(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(r,t,e):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function mn(r,t,e,n){return r instanceof Pn?(function(o,a,l,h){if(!er(o.precondition,a))return l;const f=o.value.clone(),m=Oo(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(r,t,e,n):r instanceof oe?(function(o,a,l,h){if(!er(o.precondition,a))return l;const f=Oo(o.fieldTransforms,h,a),m=a.data;return m.setAll(Xa(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((E=>E.field)))})(r,t,e,n):(function(o,a,l){return er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(r,t,e)}function Ql(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=Qa(n.transform,i||null);o!=null&&(e===null&&(e=yt.empty()),e.set(n.field,o))}return e||null}function xo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&ke(n,i,((o,a)=>Gl(o,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Pn extends Ar{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oe extends Ar{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Xa(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function Mo(r,t,e){const n=new Map;z(r.length===e.length,32656,{Ve:e.length,de:r.length});for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,l=t.data.field(o.field);n.set(o.field,Bl(a,l,e[i]))}return n}function Oo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,jl(o,a,t))}return n}class Fs extends Ar{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Za extends Ar{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Kl(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=mn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=mn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=$a();return this.mutations.forEach((i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const h=Ja(a,l);h!==null&&n.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),j())}isEqual(t){return this.batchId===t.batchId&&ke(this.mutations,t.mutations,((e,n)=>xo(e,n)))&&ke(this.baseMutations,t.baseMutations,((e,n)=>xo(e,n)))}}class Us{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){z(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let i=(function(){return Ol})();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new Us(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,B;function tu(r){switch(r){case R.OK:return O(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function eu(r){if(r===void 0)return jt("GRPC error has no .code"),R.UNKNOWN;switch(r){case et.OK:return R.OK;case et.CANCELLED:return R.CANCELLED;case et.UNKNOWN:return R.UNKNOWN;case et.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case et.INTERNAL:return R.INTERNAL;case et.UNAVAILABLE:return R.UNAVAILABLE;case et.UNAUTHENTICATED:return R.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case et.NOT_FOUND:return R.NOT_FOUND;case et.ALREADY_EXISTS:return R.ALREADY_EXISTS;case et.PERMISSION_DENIED:return R.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case et.ABORTED:return R.ABORTED;case et.OUT_OF_RANGE:return R.OUT_OF_RANGE;case et.UNIMPLEMENTED:return R.UNIMPLEMENTED;case et.DATA_LOSS:return R.DATA_LOSS;default:return O(39323,{code:r})}}(B=et||(et={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Yt([4294967295,4294967295],0);function Lo(r){const t=Jl().encode(r),e=new pa;return e.update(t),new Uint8Array(e.digest())}function Fo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Yt([e,n],0),new Yt([i,o],0)]}class qs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ln(`Invalid padding: ${e}`);if(n<0)throw new ln(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new ln(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new ln(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Yt.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(Yt.fromNumber(n)));return i.compare(Xl)===1&&(i=new Yt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Lo(t),[n,i]=Fo(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,i,o);if(!this.we(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new qs(o,i,e);return n.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=Lo(t),[n,i]=Fo(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,i,o);this.be(a)}}be(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Sn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new wr(L.min(),i,new Y(q),Bt(),j())}}class Sn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Sn(n,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,n,i){this.Se=t,this.removedTargetIds=e,this.key=n,this.De=i}}class nu{constructor(t,e){this.targetId=t,this.Ce=e}}class ru{constructor(t,e,n=ft.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Uo{constructor(){this.ve=0,this.Fe=qo(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=j(),e=j(),n=j();return this.Fe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O(38017,{changeType:o})}})),new Sn(this.Me,this.xe,t,e,n)}Ke(){this.Oe=!1,this.Fe=qo()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,z(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Zl{constructor(t){this.Ge=t,this.ze=new Map,this.je=Bt(),this.He=Yn(),this.Je=Yn(),this.Ze=new Y(q)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((n,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,n=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(ys(o))if(n===0){const a=new M(o.path);this.et(e,a,ut.newNoDocument(a,L.min()))}else z(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=ee(n).toUint8Array()}catch(h){if(h instanceof Pa)return ge("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new qs(a,i,o)}catch(h){return ge(h instanceof ln?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let i=0;return n.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&ys(l.target)){const h=new M(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,ut.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.Ke())}}));let n=j();this.Je.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const i=new wr(t,e,this.Ze,this.je,n);return this.je=Bt(),this.He=Yn(),this.Je=Yn(),this.Ze=new Y(q),i}Ye(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,n),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.qe(e,1):i.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Uo,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new it(q),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new it(q),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Uo),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Yn(){return new Y(M.comparator)}function qo(){return new Y(M.comparator)}const th={asc:"ASCENDING",desc:"DESCENDING"},eh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nh={and:"AND",or:"OR"};class rh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Es(r,t){return r.useProto3Json||Vn(t)?t:{value:t}}function lr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function su(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function sh(r,t){return lr(r,t.toTimestamp())}function Vt(r){return z(!!r,49232),L.fromTimestamp((function(e){const n=te(e);return new H(n.seconds,n.nanos)})(r))}function js(r,t){return Is(r,t).canonicalString()}function Is(r,t){const e=(function(i){return new $(["projects",i.projectId,"databases",i.database])})(r).child("documents");return t===void 0?e:e.child(t)}function iu(r){const t=$.fromString(r);return z(hu(t),10190,{key:t.toString()}),t}function hr(r,t){return js(r.databaseId,t.path)}function pn(r,t){const e=iu(t);if(e.get(1)!==r.databaseId.projectId)throw new C(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new C(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(au(e))}function ou(r,t){return js(r.databaseId,t)}function ih(r){const t=iu(r);return t.length===4?$.emptyPath():au(t)}function vs(r){return new $(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function au(r){return z(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function jo(r,t,e){return{name:hr(r,t),fields:e.value.mapValue.fields}}function oh(r,t){return"found"in t?(function(n,i){z(!!i.found,43571),i.found.name,i.found.updateTime;const o=pn(n,i.found.name),a=Vt(i.found.updateTime),l=i.found.createTime?Vt(i.found.createTime):L.min(),h=new yt({mapValue:{fields:i.found.fields}});return ut.newFoundDocument(o,a,l,h)})(r,t):"missing"in t?(function(n,i){z(!!i.missing,3894),z(!!i.readTime,22933);const o=pn(n,i.missing),a=Vt(i.readTime);return ut.newNoDocument(o,a)})(r,t):O(7234,{result:t})}function ah(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(f,m){return f.useProto3Json?(z(m===void 0||typeof m=="string",58123),ft.fromBase64String(m||"")):(z(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ft.fromUint8Array(m||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(f){const m=f.code===void 0?R.UNKNOWN:eu(f.code);return new C(m,f.message||"")})(a);e=new ru(n,i,o,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=pn(r,n.document.name),o=Vt(n.document.updateTime),a=n.document.createTime?Vt(n.document.createTime):L.min(),l=new yt({mapValue:{fields:n.document.fields}}),h=ut.newFoundDocument(i,o,a,l),f=n.targetIds||[],m=n.removedTargetIds||[];e=new nr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=pn(r,n.document),o=n.readTime?Vt(n.readTime):L.min(),a=ut.newNoDocument(i,o),l=n.removedTargetIds||[];e=new nr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=pn(r,n.document),o=n.removedTargetIds||[];e=new nr([],o,i,null)}else{if(!("filter"in t))return O(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new Yl(i,o),l=n.targetId;e=new nu(l,a)}}return e}function uu(r,t){let e;if(t instanceof Pn)e={update:jo(r,t.key,t.value)};else if(t instanceof Fs)e={delete:hr(r,t.key)};else if(t instanceof oe)e={update:jo(r,t.key,t.data),updateMask:gh(t.fieldMask)};else{if(!(t instanceof Za))return O(16599,{dt:t.type});e={verify:hr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(o,a){const l=a.transform;if(l instanceof In)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof An)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof cr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw O(20930,{transform:a.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:sh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O(27497)})(r,t.precondition)),e}function uh(r,t){return r&&r.length>0?(z(t!==void 0,14353),r.map((e=>(function(i,o){let a=i.updateTime?Vt(i.updateTime):Vt(o);return a.isEqual(L.min())&&(a=Vt(o)),new $l(a,i.transformResults||[])})(e,t)))):[]}function ch(r,t){return{documents:[ou(r,t.path)]}}function lh(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=ou(r,i);const o=(function(f){if(f.length!==0)return lu(bt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(f){if(f.length!==0)return f.map((m=>(function(V){return{field:Pe(V.field),direction:dh(V.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Es(r,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{ft:e,parent:i}}function hh(r){let t=ih(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){z(n===1,65062);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(E){const V=cu(E);return V instanceof bt&&La(V)?V.getFilters():[V]})(e.where));let a=[];e.orderBy&&(a=(function(E){return E.map((V=>(function(k){return new En(Se(k.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(V)))})(e.orderBy));let l=null;e.limit&&(l=(function(E){let V;return V=typeof E=="object"?E.value:E,Vn(V)?null:V})(e.limit));let h=null;e.startAt&&(h=(function(E){const V=!!E.before,S=E.values||[];return new Oe(S,V)})(e.startAt));let f=null;return e.endAt&&(f=(function(E){const V=!E.before,S=E.values||[];return new Oe(S,V)})(e.endAt)),Sl(t,i,a,o,l,"F",h,f)}function fh(r,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function cu(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Se(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Se(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Se(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Se(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}})(r):r.fieldFilter!==void 0?(function(e){return nt.create(Se(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return bt.create(e.compositeFilter.filters.map((n=>cu(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O(1026)}})(e.compositeFilter.op))})(r):O(30097,{filter:r})}function dh(r){return th[r]}function mh(r){return eh[r]}function ph(r){return nh[r]}function Pe(r){return{fieldPath:r.canonicalString()}}function Se(r){return ht.fromServerFormat(r.fieldPath)}function lu(r){return r instanceof nt?(function(e){if(e.op==="=="){if(So(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NAN"}};if(Po(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(So(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NAN"}};if(Po(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pe(e.field),op:mh(e.op),value:e.value}}})(r):r instanceof bt?(function(e){const n=e.getFilters().map((i=>lu(i)));return n.length===1?n[0]:{compositeFilter:{op:ph(e.op),filters:n}}})(r):O(54877,{filter:r})}function gh(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function hu(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function fu(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,n,i,o=L.min(),a=L.min(),l=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t){this.yt=t}}function yh(r){const t=hh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ur(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.Sn=new Eh}addToCollectionParentIndex(t,e){return this.Sn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Zt.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Eh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new it($.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new it($.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},du=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(du,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Le(0)}static ar(){return new Le(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="LruGarbageCollector",Ih=1048576;function Go([r,t],[e,n]){const i=q(r,e);return i===0?q(t,n):i}class vh{constructor(t){this.Pr=t,this.buffer=new it(Go),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Go(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ah{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){D(zo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Be(e)?D(zo,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.Ar(3e5)}))}}class wh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return P.resolve(_r.ce);const n=new vh(e);return this.Vr.forEachTarget(t,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.mr(t,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Bo)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bo):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,i,o,a,l,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),i=this.params.maximumSequenceNumbersToCollect):i=E,a=Date.now(),this.nthSequenceNumber(t,i)))).next((E=>(n=E,l=Date.now(),this.removeTargets(t,n,e)))).next((E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,n)))).next((E=>(f=Date.now(),Re()<=Ft.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${E} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:E}))))}}function Rh(r,t){return new wh(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.changes=new Ee((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(n!==null&&mn(n.mutation,i,Rt.empty(),H.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,j()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=j()){const i=de();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((o=>{let a=cn();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=de();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,j())))}populateOverlays(t,e,n){const i=[];return n.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,n,i){let o=Bt();const a=dn(),l=(function(){return dn()})();return e.forEach(((h,f)=>{const m=n.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof oe)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),mn(m.mutation,f,m.mutation.getFieldMask(),H.now())):a.set(f.key,Rt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((f,m)=>a.set(f,m))),e.forEach(((f,m)=>l.set(f,new Ph(m,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(t,e){const n=dn();let i=new Y(((a,l)=>a-l)),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const f=e.get(h);if(f===null)return;let m=n.get(h)||Rt.empty();m=l.applyToLocalView(f,m),n.set(h,m);const E=(i.get(l.batchId)||j()).add(h);i=i.insert(l.batchId,E)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,E=$a();m.forEach((V=>{if(!o.has(V)){const S=Ja(e.get(V),n.get(V));S!==null&&E.set(V,S),o=o.add(V)}})),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return P.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,i){return Cl(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Os(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(de());let l=gn,h=o;return a.next((f=>P.forEach(f,((m,E)=>(l<E.largestBatchId&&(l=E.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next((V=>{h=h.insert(m,V)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,h,f,j()))).next((m=>({batchId:l,changes:Ga(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((n=>{let i=cn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=cn();return this.indexManager.getCollectionParents(t,o).next((l=>P.forEach(l,(h=>{const f=(function(E,V){return new Te(V,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next((m=>{m.forEach(((E,V)=>{a=a.insert(E,V)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i)))).next((a=>{o.forEach(((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,ut.newInvalidDocument(m)))}));let l=cn();return a.forEach(((h,f)=>{const m=o.get(h);m!==void 0&&mn(m.mutation,f,Rt.empty(),H.now()),Ir(e,f)&&(l=l.insert(h,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return P.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Vt(i.createTime)}})(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(i){return{name:i.name,query:yh(i.bundledQuery),readTime:Vt(i.readTime)}})(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.overlays=new Y(M.comparator),this.Lr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=de();return P.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&n.set(i,o)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((i,o)=>{this.bt(t,e,o)})),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Lr.get(n);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=de(),o=e.length+1,a=new M(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Y(((f,m)=>f-m));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let m=o.get(f.largestBatchId);m===null&&(m=de(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=de(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>l.set(f,m))),!(l.size()>=i)););return P.resolve(l)}bt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(n.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Hl(e,n));let o=this.Lr.get(e);o===void 0&&(o=j(),this.Lr.set(e,o)),this.Lr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.kr=new it(at.Kr),this.qr=new it(at.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new at(t,e);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Wr(new at(t,e))}Qr(t,e){t.forEach((n=>this.removeReference(n,e)))}Gr(t){const e=new M(new $([])),n=new at(e,t),i=new at(e,t+1),o=[];return this.qr.forEachInRange([n,i],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new M(new $([])),n=new at(e,t),i=new at(e,t+1);let o=j();return this.qr.forEachInRange([n,i],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new at(t,0),n=this.kr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class at{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return M.comparator(t.key,e.key)||q(t.Hr,e.Hr)}static Ur(t,e){return q(t.Hr,e.Hr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new it(at.Kr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Wl(o,e,n,i);this.mutationQueue.push(a);for(const l of i)this.Jr=this.Jr.add(new at(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Xr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ds:this.Yn-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([n,i],(a=>{const l=this.Zr(a.Hr);o.push(l)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new it(q);return e.forEach((i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(l=>{n=n.add(l.Hr)}))})),P.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const a=new at(new M(o),0);let l=new it(q);return this.Jr.forEachWhile((h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.Hr)),!0)}),a),P.resolve(this.Yr(l))}Yr(t){const e=[];return t.forEach((n=>{const i=this.Zr(n);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){z(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Jr;return P.forEach(e.mutations,(i=>{const o=new at(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Jr=n}))}nr(t){}containsKey(t,e){const n=new at(e,0),i=this.Jr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t){this.ti=t,this.docs=(function(){return new Y(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():ut.newInvalidDocument(e))}getEntries(t,e){let n=Bt();return e.forEach((i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():ut.newInvalidDocument(i))})),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Bt();const a=e.path,l=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||il(sl(m),n)<=0||(i.has(m.key)||Ir(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O(9500)}ni(t,e){return P.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new xh(this)}getSize(t){return P.resolve(this.size)}}class xh extends Vh{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Mr.addEntry(t,i)):this.Mr.removeEntry(n)})),P.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t){this.persistence=t,this.ri=new Ee((e=>ks(e)),xs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.ii=0,this.si=new Bs,this.targetCount=0,this.oi=Le._r()}forEachTarget(t,e){return this.ri.forEach(((n,i)=>e(i))),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),P.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Le(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.lr(e),P.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.ri.forEach(((a,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)})),P.waitFor(o).next((()=>i))}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((a=>{o.push(i.markPotentiallyOrphaned(t,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e){this._i={},this.overlays={},this.ai=new _r(0),this.ui=!1,this.ui=!0,this.ci=new Dh,this.referenceDelegate=t(this),this.li=new Mh(this),this.indexManager=new Th,this.remoteDocumentCache=(function(i){return new kh(i)})((n=>this.referenceDelegate.hi(n))),this.serializer=new _h(e),this.Pi=new Ch(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new Nh(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const i=new Oh(this.ai.next());return this.referenceDelegate.Ti(),n(i).next((o=>this.referenceDelegate.Ii(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ei(t,e){return P.or(Object.values(this._i).map((n=>()=>n.containsKey(t,e))))}}class Oh extends al{constructor(t){super(),this.currentSequenceNumber=t}}class zs{constructor(t){this.persistence=t,this.Ri=new Bs,this.Ai=null}static Vi(t){return new zs(t)}get di(){if(this.Ai)return this.Ai;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((i=>this.di.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.di.add(o.toString())))})).next((()=>n.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(n=>{const i=M.fromPath(n);return this.mi(t,i).next((o=>{o||e.removeEntry(i,L.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return P.or([()=>P.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class fr{constructor(t,e){this.persistence=t,this.fi=new Ee((n=>ll(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=Rh(this,e)}static Vi(t,e){return new fr(t,e)}Ti(){}Ii(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((i=>n+i))))}pr(t){let e=0;return this.mr(t,(n=>{e++})).next((()=>e))}mr(t,e){return P.forEach(this.fi,((n,i)=>this.wr(t,n,i).next((o=>o?P.resolve():e(i)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(t,(a=>this.wr(t,a,e).next((l=>{l||(n++,o.removeEntry(a,L.min()))})))).next((()=>o.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),P.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Zn(t.data.value)),e}wr(t,e,n){return P.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.fi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Ts=n,this.Is=i}static Es(t,e){let n=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Gs(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Fc()?8:ul(Uc())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.gs(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(t,e,i,n).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Lh;return this.ys(t,e,a).next((l=>{if(o.result=l,this.As)return this.ws(t,e,a,l.size)}))})).next((()=>o.result))}ws(t,e,n,i){return n.documentReadCount<this.Vs?(Re()<=Ft.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ve(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Re()<=Ft.DEBUG&&D("QueryEngine","Query:",Ve(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ds*i?(Re()<=Ft.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ve(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(e))):P.resolve())}gs(t,e){if(No(e))return P.resolve(null);let n=xt(e);return this.indexManager.getIndexType(t,n).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=ur(e,null,"F"),n=xt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((o=>{const a=j(...o);return this.fs.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,n).next((h=>{const f=this.bs(e,l);return this.Ss(e,f,a,h.readTime)?this.gs(t,ur(e,null,"F")):this.Ds(t,f,e,h)}))))})))))}ps(t,e,n,i){return No(e)||i.isEqual(L.min())?P.resolve(null):this.fs.getDocuments(t,n).next((o=>{const a=this.bs(e,o);return this.Ss(e,a,n,i)?P.resolve(null):(Re()<=Ft.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ve(e)),this.Ds(t,a,e,rl(i,gn)).next((l=>l)))}))}bs(t,e){let n=new it(Ba(t));return e.forEach(((i,o)=>{Ir(t,o)&&(n=n.add(o))})),n}Ss(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(t,e,n){return Re()<=Ft.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ve(e)),this.fs.getDocumentsMatchingQuery(t,e,Zt.min(),n)}Ds(t,e,n,i){return this.fs.getDocumentsMatchingQuery(t,n,i).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="LocalStore",Uh=3e8;class qh{constructor(t,e,n,i){this.persistence=t,this.Cs=e,this.serializer=i,this.vs=new Y(q),this.Fs=new Ee((o=>ks(o)),xs),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sh(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function jh(r,t,e,n){return new qh(r,t,e,n)}async function pu(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next((o=>(i=o,e.Os(t),e.mutationQueue.getAllMutationBatches(n)))).next((o=>{const a=[],l=[];let h=j();for(const f of i){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next((f=>({Ns:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function Bh(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return(function(l,h,f,m){const E=f.batch,V=E.keys();let S=P.resolve();return V.forEach((k=>{S=S.next((()=>m.getEntry(h,k))).next((x=>{const N=f.docVersions.get(k);z(N!==null,48541),x.version.compareTo(N)<0&&(E.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),m.addEntry(x)))}))})),S.next((()=>l.mutationQueue.removeMutationBatch(h,E)))})(e,n,t,o).next((()=>o.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(l){let h=j();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(n,i)))}))}function gu(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function zh(r,t){const e=F(r),n=t.snapshotVersion;let i=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});i=e.vs;const l=[];t.targetChanges.forEach(((m,E)=>{const V=i.get(E);if(!V)return;l.push(e.li.removeMatchingKeys(o,m.removedDocuments,E).next((()=>e.li.addMatchingKeys(o,m.addedDocuments,E))));let S=V.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?S=S.withResumeToken(ft.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),i=i.insert(E,S),(function(x,N,G){return x.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Uh?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(V,S,m)&&l.push(e.li.updateTargetData(o,S))}));let h=Bt(),f=j();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),l.push(Gh(o,a,t.documentUpdates).next((m=>{h=m.Bs,f=m.Ls}))),!n.isEqual(L.min())){const m=e.li.getLastRemoteSnapshotVersion(o).next((E=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,n)));l.push(m)}return P.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,f))).next((()=>h))})).then((o=>(e.vs=i,o)))}function Gh(r,t,e){let n=j(),i=j();return e.forEach((o=>n=n.add(o))),t.getEntries(r,n).next((o=>{let a=Bt();return e.forEach(((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):D($s,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)})),{Bs:a,Ls:i}}))}function $h(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=Ds),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function Kh(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return e.li.getTargetData(n,t).next((o=>o?(i=o,P.resolve(i)):e.li.allocateTargetId(n).next((a=>(i=new Ht(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.li.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=e.vs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.vs=e.vs.insert(n.targetId,n),e.Fs.set(t,n.targetId)),n}))}async function As(r,t,e){const n=F(r),i=n.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,(a=>n.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!Be(a))throw a;D($s,`Failed to update sequence numbers for target ${t}: ${a}`)}n.vs=n.vs.remove(t),n.Fs.delete(i.target)}function $o(r,t,e){const n=F(r);let i=L.min(),o=j();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,m){const E=F(h),V=E.Fs.get(m);return V!==void 0?P.resolve(E.vs.get(V)):E.li.getTargetData(f,m)})(n,a,xt(t)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:j()))).next((l=>(Qh(n,kl(t),l),{documents:l,ks:o})))))}function Qh(r,t,e){let n=r.Ms.get(t)||L.min();e.forEach(((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.Ms.set(t,n)}class Ko{constructor(){this.activeTargetIds=Ul()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wh{constructor(){this.vo=new Ko,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Ko,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="ConnectivityMonitor";class Wo{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){D(Qo,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){D(Qo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn=null;function ws(){return Jn===null?Jn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Jn++,"0x"+Jn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="RestConnection",Yh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Jh{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${n}/databases/${i}`,this.$o=this.databaseId.database===ir?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(t,e,n,i,o){const a=ws(),l=this.Qo(t,e.toUriEncodedString());D(cs,`Sending RPC '${t}' ${a}:`,l,n);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,i,o);const{host:f}=new URL(l),m=ma(f);return this.zo(t,l,h,n,m).then((E=>(D(cs,`Received RPC '${t}' ${a}: `,E),E)),(E=>{throw ge(cs,`RPC '${t}' ${a} failed with error: `,E,"url: ",l,"request:",n),E}))}jo(t,e,n,i,o,a){return this.Wo(t,e,n,i,o)}Go(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+qe})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),n&&n.headers.forEach(((i,o)=>t[o]=i))}Qo(t,e){const n=Yh[t];let i=`${this.qo}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection",an=(r,t,e)=>{r.listen(t,(n=>{try{e(n)}catch(i){setTimeout((()=>{throw i}),0)}}))};class De extends Jh{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!De.c_){const t=Ta();an(t,ya.STAT_EVENT,(e=>{e.stat===ds.PROXY?D(mt,"STAT_EVENT: detected buffering proxy"):e.stat===ds.NOPROXY&&D(mt,"STAT_EVENT: detected no buffering proxy")})),De.c_=!0}}zo(t,e,n,i,o){const a=ws();return new Promise(((l,h)=>{const f=new ga;f.setWithCredentials(!0),f.listenOnce(_a.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Xn.NO_ERROR:const E=f.getResponseJson();D(mt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(E)),l(E);break;case Xn.TIMEOUT:D(mt,`RPC '${t}' ${a} timed out`),h(new C(R.DEADLINE_EXCEEDED,"Request time out"));break;case Xn.HTTP_ERROR:const V=f.getStatus();if(D(mt,`RPC '${t}' ${a} failed with status:`,V,"response text:",f.getResponseText()),V>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const k=S?.error;if(k&&k.status&&k.message){const x=(function(G){const Q=G.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(Q)>=0?Q:R.UNKNOWN})(k.status);h(new C(x,k.message))}else h(new C(R.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new C(R.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{D(mt,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(i);D(mt,`RPC '${t}' ${a} sending request:`,i),f.send(e,"POST",m,n,15)}))}T_(t,e,n){const i=ws(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const f=o.join("");D(mt,`Creating RPC '${t}' stream ${i}: ${f}`,l);const m=a.createWebChannel(f,l);this.I_(m);let E=!1,V=!1;const S=new Xh({Ho:k=>{V?D(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(E||(D(mt,`Opening RPC '${t}' stream ${i} transport.`),m.open(),E=!0),D(mt,`RPC '${t}' stream ${i} sending:`,k),m.send(k))},Jo:()=>m.close()});return an(m,un.EventType.OPEN,(()=>{V||(D(mt,`RPC '${t}' stream ${i} transport opened.`),S.i_())})),an(m,un.EventType.CLOSE,(()=>{V||(V=!0,D(mt,`RPC '${t}' stream ${i} transport closed`),S.o_(),this.E_(m))})),an(m,un.EventType.ERROR,(k=>{V||(V=!0,ge(mt,`RPC '${t}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),S.o_(new C(R.UNAVAILABLE,"The operation could not be completed")))})),an(m,un.EventType.MESSAGE,(k=>{if(!V){const x=k.data[0];z(!!x,16349);const N=x,G=N?.error||N[0]?.error;if(G){D(mt,`RPC '${t}' stream ${i} received error:`,G);const Q=G.status;let J=(function(ct){const T=et[ct];if(T!==void 0)return eu(T)})(Q),Tt=G.message;Q==="NOT_FOUND"&&Tt.includes("database")&&Tt.includes("does not exist")&&Tt.includes(this.databaseId.database)&&ge(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),J===void 0&&(J=R.INTERNAL,Tt="Unknown error status: "+Q+" with message "+G.message),V=!0,S.o_(new C(J,Tt)),m.close()}else D(mt,`RPC '${t}' stream ${i} received:`,x),S.__(x)}})),De.u_(),setTimeout((()=>{S.s_()}),0),S}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ea()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(r){return new De(r)}function ls(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(r){return new rh(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.c_=!1;class Ks{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="PersistentStream";class _u{constructor(t,e,n,i,o,a,l,h){this.Ci=t,this.b_=n,this.S_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ks(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.D_===e&&this.G_(n,i)}),(n=>{t((()=>{const i=new C(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)}))}))}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.Yo((()=>{n((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{n((()=>this.z_(i)))})),this.stream.onMessage((i=>{n((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return D(Ho,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(D(Ho,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tf extends _u{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=ah(this.serializer,t),n=(function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Vt(a.readTime):L.min()})(t);return this.listener.J_(e,n)}Z_(t){const e={};e.database=vs(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=ys(h)?{documents:ch(o,h)}:{query:lh(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=su(o,a.resumeToken);const f=Es(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=lr(o,a.snapshotVersion.toTimestamp());const f=Es(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,t);const n=fh(this.serializer,t);n&&(e.labels=n),this.K_(e)}X_(t){const e={};e.database=vs(this.serializer),e.removeTarget=t,this.K_(e)}}class ef extends _u{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return z(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){z(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=uh(t.writeResults,t.commitTime),n=Vt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=vs(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>uu(this.serializer,n)))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{}class rf extends nf{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new C(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,Is(e,n),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new C(R.UNKNOWN,o.toString())}))}jo(t,e,n,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.jo(t,Is(e,n),i,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new C(R.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function sf(r,t,e,n){return new rf(r,t,e,n)}class of{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(jt(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="RemoteStore";class af{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{n.enqueueAndForget((async()=>{Ie(this)&&(D(_e,"Restarting streams for network reachability change."),await(async function(h){const f=F(h);f.Ea.add(4),await Cn(f),f.Va.set("Unknown"),f.Ea.delete(4),await Vr(f)})(this))}))})),this.Va=new of(n,i)}}async function Vr(r){if(Ie(r))for(const t of r.Ra)await t(!0)}async function Cn(r){for(const t of r.Ra)await t(!1)}function yu(r,t){const e=F(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Ys(e)?Hs(e):ze(e).O_()&&Ws(e,t))}function Qs(r,t){const e=F(r),n=ze(e);e.Ia.delete(t),n.O_()&&Tu(e,t),e.Ia.size===0&&(n.O_()?n.L_():Ie(e)&&e.Va.set("Unknown"))}function Ws(r,t){if(r.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ze(r).Z_(t)}function Tu(r,t){r.da.$e(t),ze(r).X_(t)}function Hs(r){r.da=new Zl({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),ze(r).start(),r.Va.ua()}function Ys(r){return Ie(r)&&!ze(r).x_()&&r.Ia.size>0}function Ie(r){return F(r).Ea.size===0}function Eu(r){r.da=void 0}async function uf(r){r.Va.set("Online")}async function cf(r){r.Ia.forEach(((t,e)=>{Ws(r,t)}))}async function lf(r,t){Eu(r),Ys(r)?(r.Va.ha(t),Hs(r)):r.Va.set("Unknown")}async function hf(r,t,e){if(r.Va.set("Online"),t instanceof ru&&t.state===2&&t.cause)try{await(async function(i,o){const a=o.cause;for(const l of o.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ia.delete(l),i.da.removeTarget(l))})(r,t)}catch(n){D(_e,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await dr(r,n)}else if(t instanceof nr?r.da.Xe(t):t instanceof nu?r.da.st(t):r.da.tt(t),!e.isEqual(L.min()))try{const n=await gu(r.localStore);e.compareTo(n)>=0&&await(function(o,a){const l=o.da.Tt(a);return l.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(f);m&&o.Ia.set(f,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,f)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(ft.EMPTY_BYTE_STRING,m.snapshotVersion)),Tu(o,h);const E=new Ht(m.target,h,f,m.sequenceNumber);Ws(o,E)})),o.remoteSyncer.applyRemoteEvent(l)})(r,e)}catch(n){D(_e,"Failed to raise snapshot:",n),await dr(r,n)}}async function dr(r,t,e){if(!Be(t))throw t;r.Ea.add(1),await Cn(r),r.Va.set("Offline"),e||(e=()=>gu(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{D(_e,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await Vr(r)}))}function Iu(r,t){return t().catch((e=>dr(r,e,t)))}async function Pr(r){const t=F(r),e=re(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ds;for(;ff(t);)try{const i=await $h(t.localStore,n);if(i===null){t.Ta.length===0&&e.L_();break}n=i.batchId,df(t,i)}catch(i){await dr(t,i)}vu(t)&&Au(t)}function ff(r){return Ie(r)&&r.Ta.length<10}function df(r,t){r.Ta.push(t);const e=re(r);e.O_()&&e.Y_&&e.ea(t.mutations)}function vu(r){return Ie(r)&&!re(r).x_()&&r.Ta.length>0}function Au(r){re(r).start()}async function mf(r){re(r).ra()}async function pf(r){const t=re(r);for(const e of r.Ta)t.ea(e.mutations)}async function gf(r,t,e){const n=r.Ta.shift(),i=Us.from(n,t,e);await Iu(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await Pr(r)}async function _f(r,t){t&&re(r).Y_&&await(async function(n,i){if((function(a){return tu(a)&&a!==R.ABORTED})(i.code)){const o=n.Ta.shift();re(n).B_(),await Iu(n,(()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Pr(n)}})(r,t),vu(r)&&Au(r)}async function Yo(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),D(_e,"RemoteStore received new credentials");const n=Ie(e);e.Ea.add(3),await Cn(e),n&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Vr(e)}async function yf(r,t){const e=F(r);t?(e.Ea.delete(2),await Vr(e)):t||(e.Ea.add(2),await Cn(e),e.Va.set("Unknown"))}function ze(r){return r.ma||(r.ma=(function(e,n,i){const o=F(e);return o.sa(),new tf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Zo:uf.bind(null,r),Yo:cf.bind(null,r),t_:lf.bind(null,r),J_:hf.bind(null,r)}),r.Ra.push((async t=>{t?(r.ma.B_(),Ys(r)?Hs(r):r.Va.set("Unknown")):(await r.ma.stop(),Eu(r))}))),r.ma}function re(r){return r.fa||(r.fa=(function(e,n,i){const o=F(e);return o.sa(),new ef(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:mf.bind(null,r),t_:_f.bind(null,r),ta:pf.bind(null,r),na:gf.bind(null,r)}),r.Ra.push((async t=>{t?(r.fa.B_(),await Pr(r)):(await r.fa.stop(),r.Ta.length>0&&(D(_e,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,l=new Js(t,e,a,i,o);return l.start(n),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xs(r,t){if(jt("AsyncQueue",`${t}: ${r}`),Be(r))return new C(R.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static emptySet(t){return new Ne(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=cn(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ne)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ne;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.ga=new Y(M.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Fe{constructor(t,e,n,i,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new Fe(t,e,Ne.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Er(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class Ef{constructor(){this.queries=Xo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=Xo(),o.forEach(((a,l)=>{for(const h of l.ba)h.onError(n)}))})(this,new C(R.ABORTED,"Firestore shutting down"))}}function Xo(){return new Ee((r=>ja(r)),Er)}async function wu(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Sa()&&t.Da()&&(n=2):(o=new Tf,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=Xs(a,`Initialization of query '${Ve(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.ba.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Zs(e)}async function Ru(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.ba.indexOf(t);a>=0&&(o.ba.splice(a,1),o.ba.length===0?i=t.Da()?0:1:!o.Sa()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function If(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.ba)l.Fa(i)&&(n=!0);a.wa=i}}n&&Zs(e)}function vf(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.ba)o.onError(e);n.queries.delete(t)}function Zs(r){r.Ca.forEach((t=>{t.next()}))}var Rs,Zo;(Zo=Rs||(Rs={})).Ma="default",Zo.Cache="cache";class Vu{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Fe(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.Ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Rs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t){this.key=t}}class Su{constructor(t){this.key=t}}class Af{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=j(),this.mutatedKeys=j(),this.eu=Ba(t),this.tu=new Ne(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new Jo,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((m,E)=>{const V=i.get(m),S=Ir(this.query,E)?E:null,k=!!V&&this.mutatedKeys.has(V.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let N=!1;V&&S?V.data.isEqual(S.data)?k!==x&&(n.track({type:3,doc:S}),N=!0):this.su(V,S)||(n.track({type:2,doc:S}),N=!0,(h&&this.eu(S,h)>0||f&&this.eu(S,f)<0)&&(l=!0)):!V&&S?(n.track({type:0,doc:S}),N=!0):V&&!S&&(n.track({type:1,doc:V}),N=!0,(h||f)&&(l=!0)),N&&(S?(a=a.add(S),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{tu:a,iu:n,Ss:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((m,E)=>(function(S,k){const x=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Vt:N})}};return x(S)-x(k)})(m.type,E.type)||this.eu(m.doc,E.doc))),this.ou(n),i=i??!1;const l=e&&!i?this._u():[],h=this.Ya.size===0&&this.current&&!i?1:0,f=h!==this.Xa;return this.Xa=h,a.length!==0||f?{snapshot:new Fe(this.query,t.tu,o,a,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Jo,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=j(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))}));const e=[];return t.forEach((n=>{this.Ya.has(n)||e.push(new Su(n))})),this.Ya.forEach((n=>{t.has(n)||e.push(new Pu(n))})),e}cu(t){this.Za=t.ks,this.Ya=j();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Fe.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ti="SyncEngine";class wf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Rf{constructor(t){this.key=t,this.hu=!1}}class Vf{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ee((l=>ja(l)),Er),this.Iu=new Map,this.Eu=new Set,this.Ru=new Y(M.comparator),this.Au=new Map,this.Vu=new Bs,this.du={},this.mu=new Map,this.fu=Le.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Pf(r,t,e=!0){const n=xu(r);let i;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await Cu(n,t,e,!0),i}async function Sf(r,t){const e=xu(r);await Cu(e,t,!0,!1)}async function Cu(r,t,e,n){const i=await Kh(r.localStore,xt(t)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let l;return n&&(l=await Cf(r,t,o,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&yu(r.remoteStore,i),l}async function Cf(r,t,e,n,i){r.pu=(E,V,S)=>(async function(x,N,G,Q){let J=N.view.ru(G);J.Ss&&(J=await $o(x.localStore,N.query,!1).then((({documents:T})=>N.view.ru(T,J))));const Tt=Q&&Q.targetChanges.get(N.targetId),St=Q&&Q.targetMismatches.get(N.targetId)!=null,ct=N.view.applyChanges(J,x.isPrimaryClient,Tt,St);return ea(x,N.targetId,ct.au),ct.snapshot})(r,E,V,S);const o=await $o(r.localStore,t,!0),a=new Af(t,o.ks),l=a.ru(o.documents),h=Sn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=a.applyChanges(l,r.isPrimaryClient,h);ea(r,e,f.au);const m=new wf(t,e,a);return r.Tu.set(t,m),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),f.snapshot}async function bf(r,t,e){const n=F(r),i=n.Tu.get(t),o=n.Iu.get(i.targetId);if(o.length>1)return n.Iu.set(i.targetId,o.filter((a=>!Er(a,t)))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await As(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Qs(n.remoteStore,i.targetId),Vs(n,i.targetId)})).catch(je)):(Vs(n,i.targetId),await As(n.localStore,i.targetId,!0))}async function Df(r,t){const e=F(r),n=e.Tu.get(t),i=e.Iu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Qs(e.remoteStore,n.targetId))}async function Nf(r,t,e){const n=Uf(r);try{const i=await(function(a,l){const h=F(a),f=H.now(),m=l.reduce(((S,k)=>S.add(k.key)),j());let E,V;return h.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let k=Bt(),x=j();return h.xs.getEntries(S,m).next((N=>{k=N,k.forEach(((G,Q)=>{Q.isValidDocument()||(x=x.add(G))}))})).next((()=>h.localDocuments.getOverlayedDocuments(S,k))).next((N=>{E=N;const G=[];for(const Q of l){const J=Ql(Q,E.get(Q.key).overlayedDocument);J!=null&&G.push(new oe(Q.key,J,xa(J.value.mapValue),vt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,G,l)})).next((N=>{V=N;const G=N.applyToLocalDocumentSet(E,x);return h.documentOverlayCache.saveOverlays(S,N.batchId,G)}))})).then((()=>({batchId:V.batchId,changes:Ga(E)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),(function(a,l,h){let f=a.du[a.currentUser.toKey()];f||(f=new Y(q)),f=f.insert(l,h),a.du[a.currentUser.toKey()]=f})(n,i.batchId,e),await bn(n,i.changes),await Pr(n.remoteStore)}catch(i){const o=Xs(i,"Failed to persist write");e.reject(o)}}async function bu(r,t){const e=F(r);try{const n=await zh(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const a=e.Au.get(o);a&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?z(a.hu,14607):i.removedDocuments.size>0&&(z(a.hu,42227),a.hu=!1))})),await bn(e,n,t)}catch(n){await je(n)}}function ta(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach(((m,E)=>{for(const V of E.ba)V.va(l)&&(f=!0)})),f&&Zs(h)})(n.eventManager,t),i.length&&n.Pu.J_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function kf(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Au.get(t),o=i&&i.key;if(o){let a=new Y(M.comparator);a=a.insert(o,ut.newNoDocument(o,L.min()));const l=j().add(o),h=new wr(L.min(),new Map,new Y(q),a,l);await bu(n,h),n.Ru=n.Ru.remove(o),n.Au.delete(t),ei(n)}else await As(n.localStore,t,!1).then((()=>Vs(n,t,e))).catch(je)}async function xf(r,t){const e=F(r),n=t.batch.batchId;try{const i=await Bh(e.localStore,t);Nu(e,n,null),Du(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await bn(e,i)}catch(i){await je(i)}}async function Mf(r,t,e){const n=F(r);try{const i=await(function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next((E=>(z(E!==null,37113),m=E.keys(),h.mutationQueue.removeMutationBatch(f,E)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(n.localStore,t);Nu(n,t,e),Du(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await bn(n,i)}catch(i){await je(i)}}function Du(r,t){(r.mu.get(t)||[]).forEach((e=>{e.resolve()})),r.mu.delete(t)}function Nu(r,t,e){const n=F(r);let i=n.du[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.du[n.currentUser.toKey()]=i}}function Vs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Vu.Gr(t).forEach((n=>{r.Vu.containsKey(n)||ku(r,n)}))}function ku(r,t){r.Eu.delete(t.path.canonicalString());const e=r.Ru.get(t);e!==null&&(Qs(r.remoteStore,e),r.Ru=r.Ru.remove(t),r.Au.delete(e),ei(r))}function ea(r,t,e){for(const n of e)n instanceof Pu?(r.Vu.addReference(n.key,t),Of(r,n)):n instanceof Su?(D(ti,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,t),r.Vu.containsKey(n.key)||ku(r,n.key)):O(19791,{wu:n})}function Of(r,t){const e=t.key,n=e.path.canonicalString();r.Ru.get(e)||r.Eu.has(n)||(D(ti,"New document in limbo: "+e),r.Eu.add(n),ei(r))}function ei(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new M($.fromString(t)),n=r.fu.next();r.Au.set(n,new Rf(e)),r.Ru=r.Ru.insert(e,n),yu(r.remoteStore,new Ht(xt(Ms(e.path)),n,"TargetPurposeLimboResolution",_r.ce))}}async function bn(r,t,e){const n=F(r),i=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach(((l,h)=>{a.push(n.pu(h,t,e).then((f=>{if((f||e)&&n.isPrimaryClient){const m=f?!f.fromCache:e?.targetChanges.get(h.targetId)?.current;n.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(f){i.push(f);const m=Gs.Es(h.targetId,f);o.push(m)}})))})),await Promise.all(a),n.Pu.J_(i),await(async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>P.forEach(f,(V=>P.forEach(V.Ts,(S=>m.persistence.referenceDelegate.addReference(E,V.targetId,S))).next((()=>P.forEach(V.Is,(S=>m.persistence.referenceDelegate.removeReference(E,V.targetId,S)))))))))}catch(E){if(!Be(E))throw E;D($s,"Failed to update sequence numbers: "+E)}for(const E of f){const V=E.targetId;if(!E.fromCache){const S=m.vs.get(V),k=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(k);m.vs=m.vs.insert(V,x)}}})(n.localStore,o))}async function Lf(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){D(ti,"User change. New user:",t.toKey());const n=await pu(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new C(R.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await bn(e,n.Ns)}}function Ff(r,t){const e=F(r),n=e.Au.get(t);if(n&&n.hu)return j().add(n.key);{let i=j();const o=e.Iu.get(t);if(!o)return i;for(const a of o){const l=e.Tu.get(a);i=i.unionWith(l.view.nu)}return i}}function xu(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=bu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ff.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kf.bind(null,t),t.Pu.J_=If.bind(null,t.eventManager),t.Pu.yu=vf.bind(null,t.eventManager),t}function Uf(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Mf.bind(null,t),t}class mr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Rr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return jh(this.persistence,new Fh,t.initialUser,this.serializer)}Cu(t){return new mu(zs.Vi,this.serializer)}Du(t){return new Wh}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mr.provider={build:()=>new mr};class qf extends mr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){z(this.persistence.referenceDelegate instanceof fr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ah(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new mu((n=>fr.Vi(n,e)),this.serializer)}}class Ps{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ta(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lf.bind(null,this.syncEngine),await yf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Ef})()}createDatastore(t){const e=Rr(t.databaseInfo.databaseId),n=Zh(t.databaseInfo);return sf(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,i,o,a,l){return new af(n,i,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>ta(this.syncEngine,e,0)),(function(){return Wo.v()?new Wo:new Hh})())}createSyncEngine(t,e){return(function(i,o,a,l,h,f,m){const E=new Vf(i,o,a,l,h,f);return m&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const n=F(e);D(_e,"RemoteStore shutting down."),n.Ea.add(5),await Cn(n),n.Aa.shutdown(),n.Va.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ps.provider={build:()=>new Ps};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jf=class{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new C(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await(async function(i,o){const a=F(i),l={documents:o.map((E=>hr(a.serializer,E)))},h=await a.jo("BatchGetDocuments",a.serializer.databaseId,$.emptyPath(),l,o.length),f=new Map;h.forEach((E=>{const V=oh(a.serializer,E);f.set(V.key.toString(),V)}));const m=[];return o.forEach((E=>{const V=f.get(E.toString());z(!!V,55234,{key:E}),m.push(V)})),m})(this.datastore,t);return e.forEach((n=>this.recordVersion(n))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new Fs(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((e,n)=>{const i=M.fromPath(n);this.mutations.push(new Za(i,this.precondition(i)))})),await(async function(n,i){const o=F(n),a={writes:i.map((l=>uu(o.serializer,l)))};await o.Wo("Commit",o.serializer.databaseId,$.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O(50498,{Gu:t.constructor.name});e=L.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new C(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(L.min())?vt.exists(!1):vt.updateTime(e):vt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(L.min()))throw new C(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return vt.updateTime(e)}return vt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,e,n,i,o){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=i,this.deferred=o,this.zu=n.maxAttempts,this.M_=new Ks(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Hu()}Hu(){this.M_.p_((async()=>{const t=new jf(this.datastore),e=this.Ju(t);e&&e.then((n=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(n)})).catch((i=>{this.Zu(i)}))))})).catch((n=>{this.Zu(n)}))}))}Ju(t){try{const e=this.updateFunction(t);return!Vn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Zu(t){this.zu>0&&this.Xu(t)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Hu(),Promise.resolve())))):this.deferred.reject(t)}Xu(t){if(t?.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!tu(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="FirestoreClient";class zf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=bs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async a=>{D(se,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(D(se,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Xs(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function hs(r,t){r.asyncQueue.verifyOperationInProgress(),D(se,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await pu(t.localStore,i),n=i)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function na(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Gf(r);D(se,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>Yo(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>Yo(t.remoteStore,i))),r._onlineComponents=t}async function Gf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(se,"Using user provided OfflineComponentProvider");try{await hs(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;ge("Error using user provided cache. Falling back to memory cache: "+e),await hs(r,new mr)}}else D(se,"Using default OfflineComponentProvider"),await hs(r,new qf(void 0));return r._offlineComponents}async function ni(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(se,"Using user provided OnlineComponentProvider"),await na(r,r._uninitializedComponentsProvider._online)):(D(se,"Using default OnlineComponentProvider"),await na(r,new Ps))),r._onlineComponents}function $f(r){return ni(r).then((t=>t.syncEngine))}function Kf(r){return ni(r).then((t=>t.datastore))}async function Ss(r){const t=await ni(r),e=t.eventManager;return e.onListen=Pf.bind(null,t.syncEngine),e.onUnlisten=bf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Sf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Df.bind(null,t.syncEngine),e}function Qf(r,t,e,n){const i=new Mu(n),o=new Vu(t,i,e);return r.asyncQueue.enqueueAndForget((async()=>wu(await Ss(r),o))),()=>{i.Nu(),r.asyncQueue.enqueueAndForget((async()=>Ru(await Ss(r),o)))}}function Wf(r,t,e={}){const n=new Ut;return r.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,f){const m=new Mu({next:V=>{m.Nu(),a.enqueueAndForget((()=>Ru(o,E))),V.fromCache&&h.source==="server"?f.reject(new C(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(V)},error:V=>f.reject(V)}),E=new Vu(l,m,{includeMetadataChanges:!0,Ka:!0});return wu(o,E)})(await Ss(r),r.asyncQueue,t,e,n))),n.promise}function Hf(r,t){const e=new Ut;return r.asyncQueue.enqueueAndForget((async()=>Nf(await $f(r),t,e))),e.promise}function Yf(r,t,e){const n=new Ut;return r.asyncQueue.enqueueAndForget((async()=>{const i=await Kf(r);new Bf(r.asyncQueue,i,e,t,n).ju()})),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="ComponentProvider",ra=new Map;function Xf(r,t,e,n,i){return new dl(r,t,e,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Ou(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="firestore.googleapis.com",sa=!0;class ia{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new C(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Lu,this.ssl=sa}else this.host=t.host,this.ssl=t.ssl??sa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=du;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ih)throw new C(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}el("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ou(t.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Sr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ia({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new C(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ia(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new $c;switch(n.type){case"firstParty":return new Hc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=ra.get(e);n&&(D(Jf,"Removing Datastore"),ra.delete(e),n.terminate())})(this),Promise.resolve()}}function Zf(r,t,e,n={}){r=qt(r,Sr);const i=ma(t),o=r._getSettings(),a={...o,emulatorOptions:r._getEmulatorOptions()},l=`${t}:${e}`;i&&(xc(`https://${l}`),Mc("Firestore",!0)),o.host!==Lu&&o.host!==l&&ge("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:i,emulatorOptions:n};if(!Oc(h,a)&&(r._setSettings(h),n.mockUserToken)){let f,m;if(typeof n.mockUserToken=="string")f=n.mockUserToken,m=pt.MOCK_USER;else{f=Lc(n.mockUserToken,r._app?.options.projectId);const E=n.mockUserToken.sub||n.mockUserToken.user_id;if(!E)throw new C(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new pt(E)}r._authCredentials=new Kc(new va(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Lt(this.firestore,t,this._query)}}class tt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tt(this.firestore,t,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Rn(e,tt._jsonSchema))return new tt(t,n||null,new M($.fromString(e.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:rt("string",tt._jsonSchemaVersion),referencePath:rt("string")};class Jt extends Lt{constructor(t,e,n){super(t,e,Ms(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tt(this.firestore,null,new M(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function td(r,t,...e){if(r=Pt(r),Aa("collection","path",t),r instanceof Sr){const n=$.fromString(t,...e);return To(n),new Jt(r,null,n)}{if(!(r instanceof tt||r instanceof Jt))throw new C(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child($.fromString(t,...e));return To(n),new Jt(r.firestore,null,n)}}function ri(r,t,...e){if(r=Pt(r),arguments.length===1&&(t=bs.newId()),Aa("doc","path",t),r instanceof Sr){const n=$.fromString(t,...e);return yo(n),new tt(r,null,new M(n))}{if(!(r instanceof tt||r instanceof Jt))throw new C(R.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child($.fromString(t,...e));return yo(n),new tt(r.firestore,r instanceof Jt?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="AsyncQueue";class aa{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ks(this,"async_queue_retry"),this._c=()=>{const n=ls();n&&D(oa,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=ls();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ls();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Ut;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Be(t))throw t;D(oa,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((n=>{throw this.nc=n,this.rc=!1,jt("INTERNAL UNHANDLED ERROR: ",ua(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Js.createAndSchedule(this,t,e,n,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&O(47125,{Pc:ua(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ua(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Ue extends Sr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new aa,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new aa(t),this._firestoreClient=void 0,await t}}}function ed(r,t){const e=typeof r=="object"?r:Dc(),n=typeof r=="string"?r:ir,i=Nc(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=kc("firestore");o&&Zf(i,...o)}return i}function Cr(r){if(r._terminated)throw new C(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||nd(r),r._firestoreClient}function nd(r){const t=r._freezeSettings(),e=Xf(r._databaseId,r._app?.options.appId||"",r._persistenceKey,r._app?.options.apiKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new zf(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wt(ft.fromBase64String(t))}catch(e){throw new C(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new wt(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Rn(t,wt._jsonSchema))return wt.fromBase64String(t.bytes)}}wt._jsonSchemaVersion="firestore/bytes/1.0",wt._jsonSchema={type:rt("string",wt._jsonSchemaVersion),bytes:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new C(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new C(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new C(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mt._jsonSchemaVersion}}static fromJSON(t){if(Rn(t,Mt._jsonSchema))return new Mt(t.latitude,t.longitude)}}Mt._jsonSchemaVersion="firestore/geoPoint/1.0",Mt._jsonSchema={type:rt("string",Mt._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Rn(t,Ct._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ct(t.vectorValues);throw new C(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ct._jsonSchemaVersion="firestore/vectorValue/1.0",Ct._jsonSchema={type:rt("string",Ct._jsonSchemaVersion),vectorValues:rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=/^__.*__$/;class sd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new oe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pn(t,this.data,e,this.fieldTransforms)}}class Fu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new oe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Uu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{dataSource:r})}}class si{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new si({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){const e=this.path?.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePathSegment(t),n}childContextForFieldPath(t){const e=this.path?.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePath(),n}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return pr(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Uu(this.dataSource)&&rd.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class id{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Rr(t)}createContext(t,e,n,i=!1){return new si({dataSource:t,methodName:e,targetDoc:n,path:ht.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nr(r){const t=r._freezeSettings(),e=Rr(r._databaseId);return new id(r._databaseId,!!t.ignoreUndefinedProperties,e)}function od(r,t,e,n,i,o={}){const a=r.createContext(o.merge||o.mergeFields?2:0,t,e,i);oi("Data must be an object, but it was:",a,n);const l=zu(n,a);let h,f;if(o.merge)h=new Rt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const V=ye(t,E,e);if(!a.contains(V))throw new C(R.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);Ku(m,V)||m.push(V)}h=new Rt(m),f=a.fieldTransforms.filter((E=>h.covers(E.field)))}else h=null,f=a.fieldTransforms;return new sd(new yt(l),h,f)}class kr extends Dr{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof kr}}class ii extends Dr{_toFieldTransform(t){return new zl(t.path,new In)}isEqual(t){return t instanceof ii}}function qu(r,t,e,n){const i=r.createContext(1,t,e);oi("Data must be an object, but it was:",i,n);const o=[],a=yt.empty();ie(n,((h,f)=>{const m=$u(t,h,e);f=Pt(f);const E=i.childContextForFieldPath(m);if(f instanceof kr)o.push(m);else{const V=Dn(f,E);V!=null&&(o.push(m),a.set(m,V))}}));const l=new Rt(o);return new Fu(a,l,i.fieldTransforms)}function ju(r,t,e,n,i,o){const a=r.createContext(1,t,e),l=[ye(t,n,e)],h=[i];if(o.length%2!=0)throw new C(R.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let V=0;V<o.length;V+=2)l.push(ye(t,o[V])),h.push(o[V+1]);const f=[],m=yt.empty();for(let V=l.length-1;V>=0;--V)if(!Ku(f,l[V])){const S=l[V];let k=h[V];k=Pt(k);const x=a.childContextForFieldPath(S);if(k instanceof kr)f.push(S);else{const N=Dn(k,x);N!=null&&(f.push(S),m.set(S,N))}}const E=new Rt(f);return new Fu(m,E,a.fieldTransforms)}function Bu(r,t,e,n=!1){return Dn(e,r.createContext(n?4:3,t))}function Dn(r,t){if(Gu(r=Pt(r)))return oi("Unsupported field value:",t,r),zu(r,t);if(r instanceof Dr)return(function(n,i){if(!Uu(i.dataSource))throw i.createError(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(n,i){const o=[];let a=0;for(const l of n){let h=Dn(l,i.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(r,t)}return(function(n,i){if((n=Pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ql(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=H.fromDate(n);return{timestampValue:lr(i.serializer,o)}}if(n instanceof H){const o=new H(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:lr(i.serializer,o)}}if(n instanceof Mt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wt)return{bytesValue:su(i.serializer,n._byteString)};if(n instanceof tt){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:js(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Ct)return(function(a,l){const h=a instanceof Ct?a.toArray():a;return{mapValue:{fields:{[Na]:{stringValue:ka},[or]:{arrayValue:{values:h.map((m=>{if(typeof m!="number")throw l.createError("VectorValues must only contain numeric values.");return Ls(l.serializer,m)}))}}}}}})(n,i);if(fu(n))return n._toProto(i.serializer);throw i.createError(`Unsupported field value: ${gr(n)}`)})(r,t)}function zu(r,t){const e={};return Va(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ie(r,((n,i)=>{const o=Dn(i,t.childContextForField(n));o!=null&&(e[n]=o)})),{mapValue:{fields:e}}}function Gu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof H||r instanceof Mt||r instanceof wt||r instanceof tt||r instanceof Dr||r instanceof Ct||fu(r))}function oi(r,t,e){if(!Gu(e)||!wa(e)){const n=gr(e);throw n==="an object"?t.createError(r+" a custom object"):t.createError(r+" "+n)}}function ye(r,t,e){if((t=Pt(t))instanceof br)return t._internalPath;if(typeof t=="string")return $u(r,t);throw pr("Field path arguments must be of type string or ",r,!1,void 0,e)}const ad=new RegExp("[~\\*/\\[\\]]");function $u(r,t,e){if(t.search(ad)>=0)throw pr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new br(...t.split("."))._internalPath}catch{throw pr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function pr(r,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${i}`),h+=")"),new C(R.INVALID_ARGUMENT,l+r+h)}function Ku(r,t){return r.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{convertValue(t,e="none"){switch(ne(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ie(t,((i,o)=>{n[i]=this.convertValue(o,e)})),n}convertVectorValue(t){const e=t.fields?.[or].arrayValue?.values?.map((n=>Z(n.doubleValue)));return new Ct(e)}convertGeoPoint(t){return new Mt(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Tr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const e=te(t);return new H(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=$.fromString(t);z(hu(n),9688,{name:t});const i=new yn(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Qu{constructor(t){super(),this.firestore=t}convertBytes(t){return new wt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new tt(this.firestore,null,e)}}function ud(){return new ii("serverTimestamp")}const ca="@firebase/firestore",la="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(ye("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cd extends wn{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ai{}class Mr extends ai{}function hd(r,t,...e){let n=[];t instanceof ai&&n.push(t),n=n.concat(e),(function(o){const a=o.filter((h=>h instanceof ui)).length,l=o.filter((h=>h instanceof Or)).length;if(a>1||a>0&&l>0)throw new C(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)r=i._apply(r);return r}class Or extends Mr{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Or(t,e,n)}_apply(t){const e=this._parse(t);return Wu(t._query,e),new Lt(t.firestore,t.converter,Ts(t._query,e))}_parse(t){const e=Nr(t.firestore);return(function(o,a,l,h,f,m,E){let V;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new C(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){da(E,m);const k=[];for(const x of E)k.push(fa(h,o,x));V={arrayValue:{values:k}}}else V=fa(h,o,E)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||da(E,m),V=Bu(l,a,E,m==="in"||m==="not-in");return nt.create(f,m,V)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function fs(r,t,e){const n=t,i=ye("where",r);return Or._create(i,n,e)}class ui extends ai{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ui(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:bt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(i,o){let a=i;const l=o.getFlattenedFilters();for(const h of l)Wu(a,h),a=Ts(a,h)})(t._query,e),new Lt(t.firestore,t.converter,Ts(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ci extends Mr{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ci(t,e)}_apply(t){const e=(function(i,o,a){if(i.startAt!==null)throw new C(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new C(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new En(o,a)})(t._query,this._field,this._direction);return new Lt(t.firestore,t.converter,Dl(t._query,e))}}function fd(r,t="asc"){const e=t,n=ye("orderBy",r);return ci._create(n,e)}class li extends Mr{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new li(t,e,n)}_apply(t){return new Lt(t.firestore,t.converter,ur(t._query,this._limit,this._limitType))}}function dd(r){return nl("limit",r),li._create("limit",r,"F")}class hi extends Mr{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new hi(t,e,n)}_apply(t){const e=pd(t,this.type,this._docOrFields,this._inclusive);return new Lt(t.firestore,t.converter,Nl(t._query,e))}}function md(...r){return hi._create("startAfter",r,!1)}function pd(r,t,e,n){if(e[0]=Pt(e[0]),e[0]instanceof wn)return(function(o,a,l,h,f){if(!h)throw new C(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const m=[];for(const E of be(o))if(E.field.isKeyField())m.push(ar(a,h.key));else{const V=h.data.field(E.field);if(yr(V))throw new C(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+E.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(V===null){const S=E.field.canonicalString();throw new C(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}m.push(V)}return new Oe(m,f)})(r._query,r.firestore._databaseId,t,e[0]._document,n);{const i=Nr(r.firestore);return(function(a,l,h,f,m,E){const V=a.explicitOrderBy;if(m.length>V.length)throw new C(R.INVALID_ARGUMENT,`Too many arguments provided to ${f}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let k=0;k<m.length;k++){const x=m[k];if(V[k].field.isKeyField()){if(typeof x!="string")throw new C(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${f}(), but got a ${typeof x}`);if(!Os(a)&&x.indexOf("/")!==-1)throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${f}() must be a plain document ID, but '${x}' contains a slash.`);const N=a.path.child($.fromString(x));if(!M.isDocumentKey(N))throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${f}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const G=new M(N);S.push(ar(l,G))}else{const N=Bu(h,f,x);S.push(N)}}return new Oe(S,E)})(r._query,r.firestore._databaseId,i,t,e,n)}}function fa(r,t,e){if(typeof(e=Pt(e))=="string"){if(e==="")throw new C(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Os(t)&&e.indexOf("/")!==-1)throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child($.fromString(e));if(!M.isDocumentKey(n))throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ar(r,new M(n))}if(e instanceof tt)return ar(r,e._key);throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gr(e)}.`)}function da(r,t){if(!Array.isArray(r)||r.length===0)throw new C(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Wu(r,t){const e=(function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(r.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new C(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new C(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function gd(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class _d extends Qu{constructor(t){super(),this.firestore=t}convertBytes(t){return new wt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new tt(this.firestore,null,e)}}class Ce{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xt extends wn{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ye("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new C(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Xt._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Xt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xt._jsonSchema={type:rt("string",Xt._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class rr extends Xt{data(t={}){return super.data(t)}}class me{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Ce(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new rr(this._firestore,this._userDataWriter,n.key,n,new Ce(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new C(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const h=new rr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ce(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new rr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ce(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:yd(l.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new C(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=me._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=bs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function yd(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me._jsonSchemaVersion="firestore/querySnapshot/1.0",me._jsonSchema={type:rt("string",me._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};const Td={maxAttempts:5};function hn(r,t){if((r=Pt(r)).firestore!==t)throw new C(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Nr(t)}get(t){const e=hn(t,this._firestore),n=new _d(this._firestore);return this._transaction.lookup([e._key]).then((i=>{if(!i||i.length!==1)return O(24041);const o=i[0];if(o.isFoundDocument())return new wn(this._firestore,n,o.key,o,e.converter);if(o.isNoDocument())return new wn(this._firestore,n,e._key,null,e.converter);throw O(18433,{doc:o})}))}set(t,e,n){const i=hn(t,this._firestore),o=gd(i.converter,e,n),a=od(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,n);return this._transaction.set(i._key,a),this}update(t,e,n,...i){const o=hn(t,this._firestore);let a;return a=typeof(e=Pt(e))=="string"||e instanceof br?ju(this._dataReader,"Transaction.update",o._key,e,n,i):qu(this._dataReader,"Transaction.update",o._key,e),this._transaction.update(o._key,a),this}delete(t){const e=hn(t,this._firestore);return this._transaction.delete(e._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends Ed{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=hn(t,this._firestore),n=new xr(this._firestore);return super.get(t).then((i=>new Xt(this._firestore,n,e._key,i._document,new Ce(!1,!1),e.converter)))}}function bd(r,t,e){r=qt(r,Ue);const n={...Td,...e};(function(a){if(a.maxAttempts<1)throw new C(R.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n);const i=Cr(r);return Yf(i,(o=>t(new Id(r,o))),n)}function vd(r){r=qt(r,Lt);const t=qt(r.firestore,Ue),e=Cr(t),n=new xr(t);return Wf(e,r._query,{source:"server"}).then((i=>new me(t,n,r,i)))}function Ad(r,t,e,...n){r=qt(r,tt);const i=qt(r.firestore,Ue),o=Nr(i);let a;return a=typeof(t=Pt(t))=="string"||t instanceof br?ju(o,"updateDoc",r._key,t,e,n):qu(o,"updateDoc",r._key,t),wd(i,[a.toMutation(r._key,vt.exists(!0))])}function Hu(r,...t){r=Pt(r);let e={includeMetadataChanges:!1,source:"default"},n=0;typeof t[n]!="object"||ha(t[n])||(e=t[n++]);const i={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(ha(t[n])){const f=t[n];t[n]=f.next?.bind(f),t[n+1]=f.error?.bind(f),t[n+2]=f.complete?.bind(f)}let o,a,l;if(r instanceof tt)a=qt(r.firestore,Ue),l=Ms(r._key.path),o={next:f=>{t[n]&&t[n](Rd(a,r,f))},error:t[n+1],complete:t[n+2]};else{const f=qt(r,Lt);a=qt(f.firestore,Ue),l=f._query;const m=new xr(a);o={next:E=>{t[n]&&t[n](new me(a,m,f,E))},error:t[n+1],complete:t[n+2]},ld(r._query)}const h=Cr(a);return Qf(h,l,i,o)}function wd(r,t){const e=Cr(r);return Hf(e,t)}function Rd(r,t,e){const n=e.docs.get(t._key),i=new xr(r);return new Xt(r,i,t._key,n,new Ce(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){Gc(Bc),qc(new jc("firestore",((n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),l=new Ue(new Qc(n.getProvider("auth-internal")),new Yc(a,n.getProvider("app-check-internal")),ml(a,i),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),mo(ca,la,t),mo(ca,la,"esm2020")})();const Dd={public:"Public","member-only":"Member-only",private:"Private (admin only)"};function Vd(r){return r?.email==="bidabe_f@me.com"&&r.emailVerified}function Lr(){return ed(zc().app)}async function Nd(r,t=!1,e,n=12){const i=t||!r?[fs("visibility","==","public")]:Vd(r)?[fs("visibility","in",["public","member-only","private"])]:[fs("visibility","in",["public","member-only"])],o=hd(td(Lr(),"articles"),...i,fd("__name__"),...e?[md(e)]:[],dd(n)),a=await vd(o);return{articles:a.docs.map(l=>({...l.data(),id:l.id})),cursor:a.docs.at(-1),more:a.size===n}}function kd(r,t,e){return Hu(ri(Lr(),"articles",r),{includeMetadataChanges:!0},n=>{n.metadata.fromCache||t(n.exists()?{...n.data(),id:r}:null)},e)}function xd(r,t,e){return Hu(ri(Lr(),"articleBodies",r),{includeMetadataChanges:!0},n=>{n.metadata.fromCache||(n.exists()?t(n.data().html):e({code:"not-found"}))},e)}function Md(r,t){return Ad(ri(Lr(),"articles",r),{visibility:t,updatedAt:ud()})}function Od(r){const t=r?.code;return t==="permission-denied"||t==="not-found"?"This article is unavailable or you do not have access. Sign in with an authorized account.":t==="resource-exhausted"?"Article usage limits have been reached. Please try again later.":"Articles are unavailable. Please try again later."}export{Lr as a,ud as b,Od as c,ri as d,xd as e,Nd as f,Vd as i,bd as r,Md as s,Dd as v,kd as w};
