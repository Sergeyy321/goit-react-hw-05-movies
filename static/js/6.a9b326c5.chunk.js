(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{3006:function(e,n,t){"use strict";t.r(n);var r=t(5861),o=t(9439),a=t(7757),i=t.n(a),c=t(2791),u=t(7231),s=(t(5862),t(4146)),p=t(8722),l=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,o.Z)(e,2),t=n[0],a=n[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.wr)();case 3:n=e.sent,a(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Trending Movies"}),(0,l.jsx)(u.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:0===t.length?(0,l.jsx)(u.Z,{count:15,style:{height:30,width:300,marginTop:15}}):(0,l.jsx)(s.Z,{films:t})})]})}},8722:function(e,n,t){"use strict";t.d(n,{Hx:function(){return f},Y5:function(){return s},o1:function(){return p},uV:function(){return l},wr:function(){return u}});var r=t(5861),o=t(7757),a=t.n(o),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={params:{api_key:"7d7279e081c7af7678664bdae92805ad",language:"en-US"}},u=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day",c);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n),c);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(n),c);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/credits?"),c);case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/reviews?"),c);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},4146:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r,o,a,i,c=t(7689),u=t(168),s=t(1087),p=t(6444),l=t(2007),f=t.n(l),d=t(988),h=p.ZP.ul(r||(r=(0,u.Z)(["\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 500;\n"]))),v=p.ZP.li(o||(o=(0,u.Z)(["\n  padding: 5px 12px;\n  border-bottom: 1px solid transparent;\n  position: relative;\n"]))),b=(0,p.ZP)(s.rU)(a||(a=(0,u.Z)(["\n  color: #000;\n  text-decoration: none;\n  margin: 1px;\n\n  &:hover,\n  &:focus {\n    color: #064e8a;\n  }\n\n  @media screen and (min-width: 768px) {\n    &:hover::after,\n    &:focus::after {\n      content: '';\n      background-image: ",";\n\n      background-size: cover;\n      width: 160px;\n      height: 240px;\n      display: block;\n      border-radius: 4px;\n      border: 1px solid rgba(43, 134, 197);\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n      position: absolute;\n      top: -140px;\n      left: 400px;\n      z-index: 1;\n    }\n  }\n"])),(function(e){return e.cover?"url('https://image.tmdb.org/t/p/w500/".concat(e.cover,"')"):"url(".concat(d,")")})),m=p.ZP.div(i||(i=(0,u.Z)(["\n  width: 20px;\n  height: 20px;\n  position: relative;\n  right: 6px;\n  top: 5px;\n  z-index: 1;\n  opacity: 0.7;\n"])));b.propTypes={cover:f().string,placeholder:f().string};var y=t(184),g=function(e){var n=e.films,t=(0,c.TH)();return(0,y.jsx)(h,{children:n.map((function(e){return(0,y.jsx)(v,{children:(0,y.jsxs)(b,{to:"/movies/".concat(e.id),cover:e.poster_path,state:{from:t},children:[(0,y.jsx)(m,{})," ",e.title]})},e.id)}))})}},888:function(e,n,t){"use strict";var r=t(9047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5862:function(){},988:function(e,n,t){"use strict";e.exports=t.p+"static/media/27002.cfc1f8d57c861b8a813f.jpg"},7231:function(e,n,t){"use strict";t.d(n,{y:function(){return d},Z:function(){return f}});var r=t(9439);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=t(2791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],p=["children"],l=u.createContext({});function f(e){for(var n,t,o,a=e.count,p=void 0===a?1:a,f=e.wrapper,d=e.className,h=e.containerClassName,v=e.containerTestId,b=e.circle,m=void 0!==b&&b,y=e.style,g=c(e,s),x=u.useContext(l),w=i({},g),O=0,j=Object.entries(g);O<j.length;O++){var k=(0,r.Z)(j[O],2),Z=k[0];"undefined"===typeof k[1]&&delete w[Z]}var P=i(i(i({},x),w),{},{circle:m}),T=i(i({},y),function(e){var n=e.baseColor,t=e.highlightColor,r=e.width,o=e.height,a=e.borderRadius,i=e.circle,c=e.direction,u=e.duration,s=e.enableAnimation,p=void 0===s||s,l={};return"rtl"===c&&(l["--animation-direction"]="reverse"),"number"===typeof u&&(l["--animation-duration"]="".concat(u,"s")),p||(l["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(l.width=r),"string"!==typeof o&&"number"!==typeof o||(l.height=o),"string"!==typeof a&&"number"!==typeof a||(l.borderRadius=a),i&&(l.borderRadius="50%"),"undefined"!==typeof n&&(l["--base-color"]=n),"undefined"!==typeof t&&(l["--highlight-color"]=t),l}(P)),E="react-loading-skeleton";d&&(E+=" ".concat(d));for(var _=null!==(n=P.inline)&&void 0!==n&&n,C=[],S=Math.ceil(p),R=0;R<S;R++){var I=T;if(S>p&&R===S-1){var N=null!==(t=I.width)&&void 0!==t?t:"100%",D=p%1,U="number"===typeof N?N*D:"calc(".concat(N," * ").concat(D,")");I=i(i({},I),{},{width:U})}var z=u.createElement("span",{className:E,style:I,key:R},"\u200c");_?C.push(z):C.push(u.createElement(u.Fragment,{key:R},z,u.createElement("br",null)))}return u.createElement("span",{className:h,"data-testid":v,"aria-live":"polite","aria-busy":null===(o=P.enableAnimation)||void 0===o||o},f?C.map((function(e,n){return u.createElement(f,{key:n},e)})):C)}function d(e){var n=e.children,t=c(e,p);return u.createElement(l.Provider,{value:t},n)}}}]);
//# sourceMappingURL=6.a9b326c5.chunk.js.map