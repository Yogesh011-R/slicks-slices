(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ls82:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(z){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=w(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(z){return{type:"throw",arg:z}}}e.wrap=u;var s={};function f(){}function m(){}function d(){}var p={};l(p,a,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(S([])));v&&v!==t&&r.call(v,a)&&(p=v);var y=d.prototype=f.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,l){var u=c(e[a],e,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=d,l(y,"constructor",d),l(d,"constructor",m),m.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),l(y,i,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(l&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},pi3A:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=(r("7oih"),r("EYWl"));var i={S:.75,M:1,L:1.25};function l(e,t){return e*i[t]}var u=Intl.NumberFormat("en-CA",{style:"currency",currency:"CAD"});function c(e){return u.format(e/100)}function s(e,t,r,n,a,o,i){try{var l=e[o](i),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,a)}var f=r("KQm4"),m=r("o0o1"),d=r.n(m),p=r("Q9Va");function h(e,t){return e.map((function(e){var r=t.find((function(t){return t.id===e.id}));return Object.assign({},e,{name:r.name,thumbnail:r.image.asset.fluid.src,price:c(l(r.price,e.size))})}))}r("E9XD");function v(e,t){return e.reduce((function(e,r){return e+l(t.find((function(e){return e.id===r.id})).price,r.size)}),0)}function y(e){var t=e.pizzas,r=e.values,a=Object(n.useContext)(p.b),o=a[0],i=a[1];console.log("🚀 ~ file: usePizza.js ~ line 10 ~ usePizza ~ order",o);var l=Object(n.useState)(),u=l[0],m=l[1],y=Object(n.useState)(!1),g=y[0],b=y[1],w=Object(n.useState)(""),E=w[0],x=w[1];return{order:o,addToOrder:function(e){i([].concat(Object(f.a)(o),[e]))},removeFromOrder:function(e){i([].concat(Object(f.a)(o.slice(0,e)),Object(f.a)(o.slice(e+1))))},error:u,loading:g,message:E,handleOrder:function(){var e,n=(e=d.a.mark((function e(n){var a,i,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),b(!0),m(null),x(null),a={order:h(o,t),total:c(v(o,t)),name:r.name,email:r.email,mapleSyrup:r.mapleSyrup},e.next=7,fetch("http://localhost:8888/.netlify/functions/placeOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 7:return i=e.sent,e.t0=JSON,e.next=11,i.text();case 11:e.t1=e.sent,l=e.t0.parse.call(e.t0,e.t1),i.status>=400&&i.status<600?(b(!1),m(l)):(b(!1),x("Successful! Come on down for your pizza"));case 14:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,l,"next",e)}function l(e){s(o,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}()}}var g=r("9eSz"),b=r.n(g),w=r("vOnD"),E=w.b.form.withConfig({displayName:"OrderSyles__OrderFormStyles",componentId:"sc-8x5g86-0"})(["display:grid;grid-template-columns:1fr 1fr;gap:20px;fieldset{grid-column:span 2;max-height:600px;overflow:auto;display:grid;align-content:start;gap:1rem;&.order,&.menu{grid-column:span 1;}}.mapleSyrup{display:none;}@media (max-width:900px){fieldset.menu,fieldset.order{grid-column:span 2;}}"]),x=w.b.div.withConfig({displayName:"MenuItemStyles",componentId:"sc-m2f55x-0"})(["display:grid;grid-template-columns:100px 1fr;grid-template-rows:1fr 1fr;gap:0 1.3rem;align-items:center;align-content:center;position:relative;.gatsby-image-wrapper{grid-row:span 2;height:100%;}p{margin:0;}button{font-size:1.5rem;}button + button{margin-left:1rem;}.remove{background:none;color:var(--red);font-size:3rem;top:0;right:0;box-shadow:none;position:absolute;line-height:1rem;}"]),O=function(e){var t=e.order,r=e.pizzas,n=e.removeFromOrder;return a.a.createElement(a.a.Fragment,null,t.map((function(e,t){var o=r.find((function(t){return t.id===e.id}));return a.a.createElement(x,{key:e.id+"-{i}"},a.a.createElement(b.a,{fluid:null==o?void 0:o.image.asset.fluid}),a.a.createElement("h2",null,o.name),a.a.createElement("p",null,c(l(o.price,e.size)),a.a.createElement("button",{className:"remove",type:"button",title:"Remove "+e.size+" \n              "+o.name,onClick:function(){return n(t)}},"×")))})))};t.default=function(e){var t=e.data.allSanityPizza.pizzas,r=function(e){var t=Object(n.useState)(e),r=t[0],a=t[1];return{values:r,updateValues:function(e){var t,n=e.target.value;"number"===e.target.type&&(n=parseInt(e.target.value)),a(Object.assign({},r,((t={})[e.target.name]=n,t)))}}}({name:"",email:"",mapleSyrup:""}),i=r.values,u=r.updateValues,s=y({pizzas:t,values:i}),f=s.order,m=s.addToOrder,d=s.removeFromOrder,p=s.error,h=s.loading,g=s.message,w=s.handleOrder;return g?a.a.createElement("p",null,g):a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:"Order Pizza"}),a.a.createElement(E,{onSubmit:w},a.a.createElement("fieldset",{disabled:h},a.a.createElement("legend",null,"Your Info"),a.a.createElement("label",{htmlFor:"name"},"Name"),a.a.createElement("input",{type:"text",id:"name",name:"name",value:i.name,onChange:u}),a.a.createElement("label",{htmlFor:"email"},"Email"),a.a.createElement("input",{type:"email",id:"email",name:"email",value:i.email,onChange:u}),a.a.createElement("input",{type:"mapleSyrup",id:"mapleSyrup",name:"mapleSyrup",className:"mapleSyrup",value:i.mapleSyrup,onChange:u})),a.a.createElement("fieldset",{className:"menu",disabled:h},a.a.createElement("legend",null,"Menu"),t.map((function(e){return a.a.createElement(x,{key:e.id},a.a.createElement(b.a,{width:50,height:50,fluid:e.image.asset.fluid,alt:e.name}),a.a.createElement("div",null,a.a.createElement("h2",null,e.name)),a.a.createElement("div",null,["S","M","L"].map((function(t,r){return a.a.createElement("button",{key:r,type:"button",onClick:function(){return m({id:e.id,size:t})}},t," ",c(l(e.price,t)))}))))}))),a.a.createElement("fieldset",{className:"order",disabled:h},a.a.createElement("legend",null,"Order"),a.a.createElement(O,{order:f,removeFromOrder:d,pizzas:t})),a.a.createElement("fieldset",{disabled:h},a.a.createElement("h3",null,"Your Total is ",c(v(f,t))),p&&a.a.createElement("p",null,"Error: ",p),a.a.createElement("button",{type:"submit",disabled:h},h?"Placing Order....":"  Order Ahead"))))}}}]);
//# sourceMappingURL=component---src-pages-order-js-0d9eff2ee154fa93f655.js.map