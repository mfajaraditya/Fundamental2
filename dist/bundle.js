(()=>{var t={286:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(c[u]=!0)}for(var l=0;l<t.length;l++){var f=[].concat(t[l]);r&&c[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},372:t=>{"use strict";t.exports=function(t){return t[1]}},39:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=function(t){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new T(r||[]);return i._invoke=function(t,e,n){var r=p;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return M()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=S(c,n);if(a){if(a===b)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?d:y,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p="suspendedStart",y="suspendedYield",h="executing",d="completed",b={};function v(){}function m(){}function w(){}var g={};l(g,c,(function(){return this}));var x=Object.getPrototypeOf,O=x&&x(x(L([])));O&&O!==n&&o.call(O,c)&&(g=O);var j=w.prototype=v.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(i,c,a,u){var l=s(t[i],t,c);if("throw"!==l.type){var f=l.arg,p=f.value;return p&&"object"===r(p)&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(p).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return b;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,b;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:M}}function M(){return{value:e,done:!0}}return m.prototype=w,l(j,"constructor",w),l(w,"constructor",m),m.displayName=l(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},E(_.prototype),l(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new _(f(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},E(j),l(j,u,"Generator"),l(j,c,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var u=o.call(c,"catchLoc"),l=o.call(c,"finallyLoc");if(u&&l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:L(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},t}("object"===r(t=n.nmd(t))?t.exports:{});try{regeneratorRuntime=o}catch(t){"object"===("undefined"==typeof globalThis?"undefined":r(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},76:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},o(t)}function i(t,e,n){return i=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(p,t);var o,i,l,f,s=(o=p,i=c(),function(){var t,e=u(o);if(i){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return r(this,t)});function p(){return e(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <div class="banner-bar">\n        <p>El Celler de Can Roca</p>\n        </div>\n        '}}])&&n(l.prototype,f),Object.defineProperty(l,"prototype",{writable:!1}),p}(o(HTMLElement));customElements.define("banner-bar",l)},215:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},o(t)}function i(t,e,n){return i=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(p,t);var o,i,l,f,s=(o=p,i=c(),function(){var t,e=u(o);if(i){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return r(this,t)});function p(){return e(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML="<p>M. Fajar Aditya &#169</p>"}}])&&n(l.prototype,f),Object.defineProperty(l,"prototype",{writable:!1}),p}(o(HTMLElement));customElements.define("footer-bar",l)},66:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)},r(t)}function o(t,e,n){return o=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(s,t);var r,o,u,l,f=(r=s,o=i(),function(){var t,e=a(r);if(o){var i=a(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=f.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return u=s,(l=[{key:"meal",set:function(t){this._meal=t,this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n             <style>\n                 *{\n                     margin: 0;\n                     padding: 0;\n                     box-sizing: border-box;\n                 }\n                 :host {\n                     display: block;\n                     margin-bottom: 18px;\n                     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                     border-radius: 30px;\n                     overflow: hidden;\n                 }\n                 .sampul {\n                     max-height: 400px;\n                     object-fit: cover;\n                     object-position: center;\n                     width: 100%;\n                 }\n                 .meal-info {\n                     padding: 24px;\n                 }\n                 .meal-info>h2 {\n                     font-weight: bold;\n                     font-size: 30px;\n                 }\n                 .meal-info>p {\n                     margin-top: 10px;\n                     font-size: 20px;\n                     overflow: hidden;\n                     text-overflow: ellipsis;\n                     display: -webkit-box; \n                     text-align: justify;\n                     -webkit-box-orient: vertical; \n                     -webkit-line-clamp: 10; /* number of lines to show */\n                 } \n                 </style>\n            <img class = "sampul" src = "'.concat(this._meal.strMealThumb,'" alt = "sampul">\n            <div class="meal-info">\n                <h2>').concat(this._meal.strMeal,"</h2>\n                <p>").concat(this._meal.strInstructions,"</p>\n            </div>")}}])&&e(u.prototype,l),Object.defineProperty(u,"prototype",{writable:!1}),s}(r(HTMLElement));customElements.define("meal-item",u)},170:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},o(t)}function i(t,e,n){return i=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(p,t);var o,i,l,f,s=(o=p,i=c(),function(){var t,e=u(o);if(i){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return r(this,t)});function p(){return e(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(t){this._clickEvent=t,this.render()}},{key:"value",get:function(){return this.querySelector("#search").value}},{key:"render",value:function(){this.innerHTML='\n        <div class="search-bar">\n        <label for="search" id="label-search"> Ketikkan makanan yang ingin dicari:</label> <br>\n        <input placeholder="Masukkan nama makanan" type="search" id="search" class="search">\n        <button id="searchButton" type="submit">Cari</button>\n    </div>',this.querySelector("#searchButton").addEventListener("click",this._clickEvent)}}])&&n(l.prototype,f),Object.defineProperty(l,"prototype",{writable:!1}),p}(o(HTMLElement));customElements.define("search-bar",l)},74:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(372),o=n.n(r),i=n(286),c=n.n(i)()(o());c.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap);"]),c.push([t.id,".banner-bar{\r\n    display: flex;\r\n    font-family: 'Playfair Display', serif;\r\n    background-color: #781d42;\r\n    color: gold;\r\n    font-size: 40px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 30px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n}",""]);const a=c},446:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(372),o=n.n(r),i=n(286),c=n.n(i)()(o());c.push([t.id,".footer {\r\n    display: flex;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 70px;\r\n    color: white;\r\n    background-color: #781d42;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 24px;\r\n  }",""]);const a=c},117:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(372),o=n.n(r),i=n(286),c=n.n(i)()(o());c.push([t.id,'.search-bar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  border-radius: 10px;\r\n  padding: 30px;\r\n  background-color: #f0d290;\r\n  margin: 30px;\r\n}\r\n\r\n#label-search {\r\n  font-size: 25px;\r\n}\r\n\r\n#search,\r\ninput {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n  height: 50px;\r\n  font-size: 23px;\r\n}\r\n\r\ninput::placeholder {\r\n  font-family: "Fredoka", sans-serif;\r\n  font-size: large;\r\n  color: grey;\r\n}\r\n\r\n#searchButton {\r\n  width: 130px;\r\n  border-radius: 7px;\r\n  background-color: #2a3a4a;\r\n  color: white;\r\n  height: 50px;\r\n  font-size: 23px;\r\n  margin-top: 14px;\r\n}\r\n\r\n::placeholder {\r\n  color: black;\r\n}\r\n',""]);const a=c},982:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(372),o=n.n(r),i=n(286),c=n.n(i),a=n(117),u=n(74),l=n(446),f=c()(o());f.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Fredoka&display=swap);"]),f.i(a.Z),f.i(u.Z),f.i(l.Z),f.push([t.id,'html {\r\n  scroll-behavior: smooth;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f0d290;\r\n  font-family: "Fredoka", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n\r\nmain {\r\n  width: 80%;\r\n  margin: 32px auto;\r\n}',""]);const s=f},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},c=[],a=0;a<t.length;a++){var u=t[a],l=r.base?u[0]+r.base:u[0],f=i[l]||0,s="".concat(l," ").concat(f);i[l]=f+1;var p=n(s),y={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(y);else{var h=o(y,r);r.byIndex=a,e.splice(a,0,{identifier:s,updater:h,references:1})}c.push(s)}return c}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=n(i[c]);e[a].references--}for(var u=r(t,o),l=0;l<i.length;l++){var f=n(i[l]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=u}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,n),i.loaded=!0,i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},o(t)}function i(t,e,n){return i=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}n(39),n(170),n(66);var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(s,t);var n,o,i,l,f=(n=s,o=c(),function(){var t,e=u(n);if(o){var i=u(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return r(this,t)});function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=f.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return i=s,(l=[{key:"meals",set:function(t){this._meals=t,this.render()}},{key:"render",value:function(){var t=this;this.shadowDOM.innerHTML="",this._meals.forEach((function(e){var n=document.createElement("meal-item");n.meal=e,t.shadowDOM.appendChild(n)}))}},{key:"renderError",value:function(t){this.shadowDOM.innerHTML="\n         <style>\n             .placeholder {\n                 font-weight: normal;\n                 color: rgba(0, 0, 0, 0.5); \n                 -webkit-user-select: none; \n                 -moz-user-select: none; \n                 -ms-user-select: none;\n                 user-select: none;\n                 text-align: center;\n             } \n        </style>",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(t,"</h2>")}}])&&e(i.prototype,l),Object.defineProperty(i,"prototype",{writable:!1}),s}(o(HTMLElement));function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}customElements.define("meal-list",l);const s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"cariMakan",value:function(t){return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(t){return t.json()})).then((function(e){return e.meals?Promise.resolve(e.meals):Promise.reject("".concat(t," is not found!"))}))}}],null&&f(e.prototype,null),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}var y=n(379),h=n.n(y),d=n(795),b=n.n(d),v=n(569),m=n.n(v),w=n(565),g=n.n(w),x=n(216),O=n.n(x),j=n(589),E=n.n(j),_=n(982),S={};S.styleTagTransform=E(),S.setAttributes=g(),S.insert=m().bind(null,"head"),S.domAPI=b(),S.insertStyleElement=O(),h()(_.Z,S),_.Z&&_.Z.locals&&_.Z.locals,n(76),n(215),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("search-bar"),e=document.querySelector("meal-list"),n=function(){var e,n=(e=regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.cariMakan(t.value);case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(t){p(i,r,o,c,a,"next",t)}function a(t){p(i,r,o,c,a,"throw",t)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),r=function(t){e.meals=t},o=function(t){e.renderError(t)};t.clickEvent=n}))})()})();