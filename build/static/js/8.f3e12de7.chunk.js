(this.webpackJsonpaudio_planet_store=this.webpackJsonpaudio_planet_store||[]).push([[8],{104:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return u})),r.d(e,"d",(function(){return s})),r.d(e,"h",(function(){return l})),r.d(e,"f",(function(){return d})),r.d(e,"g",(function(){return h})),r.d(e,"e",(function(){return f})),r.d(e,"b",(function(){return p}));var n=r(106),a=r.n(n),o=r(108),i=r(30),c=function(){var t=Object(o.a)(a.a.mark((function t(){var e,r,n,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.ref().child("products").get();case 2:for(o in e=t.sent,r=e.val(),n=[],r)n.push({ID:o,brand:r[o].brand,full_name:r[o].fullname,photo:r[o].photo,type:r[o].type,price:r[o].price});return t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.ref().child("products").child(e).get();case 2:return r=t.sent,n=r.val(),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.ref().child("users").child(e).child("userDetails").get();case 2:return r=t.sent,n=r.val(),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(t,e,r,n,a){i.b.ref("users/"+i.a.currentUser.uid+"/userDetails").set({phone:t,county:e,city:r,address:n,postal:a},(function(t){t?console.log("updateing user detail failed"+t):console.log("user details saved")}))},d=function(t,e,r,n,a,o){i.b.ref("users/"+i.a.currentUser.uid+"/orders/"+o).set({basket:t,totalItems:e,totalAmmount:r,orderDetails:a,date:n},(function(t){t?console.log("error at sending orde"+t):console.log("orderSent")}))},h=function(t,e,r,n,a,o){i.b.ref("orders/"+o).set({basket:t,totalItems:e,totalAmmount:r,orderDetails:a,date:n},(function(t){t?console.log("error at sending orde"+t):console.log("orderSent")}))},f=function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n,o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.ref().child("users").child(e).child("orders").get();case 2:for(c in r=t.sent,n=r.val(),o=[],n)o.push({orderID:c,total:n[c].totalAmmount,date:n[c].date});return t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(a.a.mark((function t(e,r){var n,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.ref().child("users").child(e).child("orders").child(r).get();case 2:return n=t.sent,o=n.val(),t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},106:function(t,e,r){t.exports=r(107)},107:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,o=Object.create(a.prototype),i=new k(n||[]);return o._invoke=function(t,e,r){var n=d;return function(a,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=s;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",v={};function y(){}function m(){}function b(){}var g={};u(g,o,(function(){return this}));var j=Object.getPrototypeOf,x=j&&j(j(A([])));x&&x!==r&&n.call(x,o)&&(g=x);var w=b.prototype=y.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function A(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return m.prototype=b,u(w,"constructor",b),u(b,"constructor",m),m.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(_.prototype),u(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new _(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(w),u(w,c,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},108:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},134:function(t,e,r){"use strict";var n=r(18),a=r(19);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(r(3)),i=(0,n(r(20)).default)(o.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");e.default=i},224:function(t,e,r){t.exports={myAccountPage:"MyAccount_myAccountPage__3bs3-",emailVerified:"MyAccount_emailVerified__qqYMx",emailNotVerified:"MyAccount_emailNotVerified__2jCHa",emailSent:"MyAccount_emailSent__30ufb",sendEmailBtn:"MyAccount_sendEmailBtn__ku6RM",userDetails:"MyAccount_userDetails__nvrGy",inputLabel:"MyAccount_inputLabel__1_huw",submitBtn:"MyAccount_submitBtn__2uLva"}},337:function(t,e,r){"use strict";r.r(e);var n=r(31),a=r(11),o=r(16),i=r(224),c=r.n(i),u=r(30),s=r(23),l=r(3),d=r(50),h=r.n(d),f=r(134),p=r.n(f),v=r(53),y=r.n(v),m=r(12),b=r(33),g=r(104),j=r(2);e.default=function(t){var e,r,i,d=t.onUsernameChanged,f=Object(l.useState)(!1),v=Object(o.a)(f,2),x=v[0],w=v[1],O=Object(l.useContext)(b.b),_=Object(o.a)(O,1)[0].user,L=Object(m.g)(),N=Object(l.useState)({personal:{name:"",phone:""},details:{county:"",city:"",address:"",postal:""}}),E=Object(o.a)(N,2),k=E[0],A=E[1];Object(l.useEffect)((function(){_&&Object(g.d)(_.uid).then((function(t){var e;A({personal:{name:null===(e=u.a.currentUser)||void 0===e?void 0:e.displayName,phone:(null===t||void 0===t?void 0:t.phone)||""},details:{county:(null===t||void 0===t?void 0:t.county)||"",city:(null===t||void 0===t?void 0:t.city)||"",address:(null===t||void 0===t?void 0:t.address)||"",postal:(null===t||void 0===t?void 0:t.postal)||""}})}))}),[_]);var S=function(t,e){return function(r){A((function(o){var i=Object(a.a)({},o[t]);return i[e]=r.target.value,Object(a.a)(Object(a.a)({},o),{},Object(n.a)({},t,Object(a.a)({},i)))}))}};return Object(j.jsx)(s.a,{className:c.a.myAccountPage,children:u.a.currentUser&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Here you can change your account details for future orders"}),Object(j.jsx)("div",{className:c.a.emailVerification,children:(null===(e=u.a.currentUser)||void 0===e?void 0:e.emailVerified)?Object(j.jsxs)("h2",{className:c.a.emailVerified,children:["You email: ",null===(r=u.a.currentUser)||void 0===r?void 0:r.email," is verified! \xa0 ",Object(j.jsx)(h.a,{})]}):Object(j.jsxs)("div",{className:c.a.sendEmail,children:[Object(j.jsxs)("h2",{className:c.a.emailNotVerified,children:["Your email: ",null===(i=u.a.currentUser)||void 0===i?void 0:i.email," is not verified!"]}),x?Object(j.jsx)("h2",{className:c.a.emailSent,children:"Verification email has been sent"}):Object(j.jsxs)("button",{className:c.a.sendEmailBtn,onClick:function(){u.a.currentUser.sendEmailVerification(),w(!0)},children:[Object(j.jsx)(y.a,{}),"\xa0 Send verification email \xa0",Object(j.jsx)(p.a,{})]})]})}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u.a.currentUser.updateProfile({displayName:k.personal.name}).then((function(){d(k.personal.name,!0)})).catch((function(t){console.log("there was an error")})),Object(g.h)(k.personal.phone,k.details.county,k.details.city,k.details.address,k.details.postal),L.push("/")},className:c.a.userDetails,children:[Object(j.jsxs)("label",{className:c.a.inputLabel,htmlFor:"name",children:["Name",Object(j.jsx)("input",{onChange:S("personal","name"),value:k.personal.name,placeholder:"Chuck Norris",id:"name",type:"name"})]}),Object(j.jsxs)("label",{className:c.a.inputLabel,htmlFor:"phone",children:["Phone number",Object(j.jsx)("input",{onChange:S("personal","phone"),value:k.personal.phone,placeholder:"07xxxxxxxx",id:"phone",type:"number"})]}),Object(j.jsxs)("label",{className:c.a.inputLabel,htmlFor:"county",children:["County",Object(j.jsx)("input",{onChange:S("details","county"),value:k.details.county,placeholder:"Cluj",id:"county",type:"county"})]}),Object(j.jsxs)("label",{className:c.a.inputLabel,htmlFor:"city",children:["City",Object(j.jsx)("input",{onChange:S("details","city"),value:k.details.city,placeholder:"Cluj-Napoca",id:"city",type:"city"})]}),Object(j.jsxs)("label",{className:c.a.inputLabel,htmlFor:"address",children:["Address",Object(j.jsx)("input",{onChange:S("details","address"),value:k.details.address,placeholder:"street nr. bl.",id:"address",type:"address"})]}),Object(j.jsxs)("label",{className:c.a.inputLabel,htmlFor:"postal",children:["Postal code",Object(j.jsx)("input",{onChange:S("details","postal"),value:k.details.postal,placeholder:"407035",id:"postal",type:"number"})]}),Object(j.jsx)("button",{className:c.a.submitBtn,type:"submit",children:"Save account details"})]})]})})}}}]);
//# sourceMappingURL=8.f3e12de7.chunk.js.map