(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20d49580"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}},"5d88":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-hero"},[n("div",{staticClass:"topbar"},[n("img",{attrs:{src:r("cf05"),height:"30"}}),t._m(0),n("router-link",{staticStyle:{color:"white"},attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),t.model&&t.model.banner?n("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[n("div",{staticClass:"info"},[n("div",{staticClass:"hero-title"},[t._v(t._s(t.model.title))]),n("div",{staticClass:"hero-name"},[t._v(t._s(t.model.name))]),t._v(" "+t._s(t.model.categories.map((function(t){return t.name})).join("/"))+" "),n("div",{staticClass:"down-container"},[n("div",{staticClass:"scores"},[n("span",[t._v("难度")]),n("span",{staticClass:"yuan"}),n("span",[t._v("攻击")]),n("span",{staticClass:"yuan"},[t._v(t._s(t.model.scores.attack))]),n("span",[t._v("技能")]),n("span",{staticClass:"yuan"},[t._v(t._s(t.model.scores.skills))]),n("span",[t._v("生存")]),n("span",{staticClass:"yuan"},[t._v(t._s(t.model.scores.survive))])]),n("router-link",{attrs:{to:"/",tag:"span"}},[t._v("皮肤: 2 >")])],1)])]):t._e(),n("div",{staticClass:"hero-content"},[t._m(1),t._m(2),t._l(t.model.skills,(function(t){return n("div",[n("img",{attrs:{src:t.icon}})])})),n("div",[t._v(t._s(t.model.skills[t.currentSkill].name))]),n("div",[t._v(t._s(t.model.skills[t.currentSkill].description))])],2)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topbar-title"},[r("span",[t._v("王者荣耀")]),r("span",{staticClass:"topbar-title2"},[t._v("攻略站")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top-bar"},[r("div",[t._v("英雄初识")]),r("div",[t._v("进阶攻略")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-video-container"},[r("button",{staticClass:"hero-video"},[t._v("英雄介绍视频")]),r("button",{staticClass:"hero-video"},[t._v("英雄介绍视频")])])}],i=(r("96cf"),r("1da1")),a={props:{id:{required:!0}},created:function(){this.fetch()},data:function(){return{currentSkill:0,model:{skills:[]}}},methods:{fetch:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/".concat(t.id));case 2:r=e.sent,t.model=r.data;case 4:case"end":return e.stop()}}),e)})))()}}},c=a,s=(r("91f3"),r("2877")),u=Object(s["a"])(c,n,o,!1,null,"06258314",null);e["default"]=u.exports},"91f3":function(t,e,r){"use strict";var n=r("c7b3"),o=r.n(n);o.a},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=k(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",v="executing",p="completed",d={};function y(){}function m(){}function g(){}var w={};w[i]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_(G([])));b&&b!==r&&n.call(b,i)&&(w=b);var x=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function k(t,e,r){var n=h;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),s(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},c7b3:function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.fc64bf07.png"}}]);
//# sourceMappingURL=chunk-20d49580.d50e6818.js.map