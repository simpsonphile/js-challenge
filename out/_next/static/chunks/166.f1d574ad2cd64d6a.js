(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{4166:function(e,n,t){"use strict";t.d(n,{Z:function(){return le}});var r,o,i,c,a,u=t(9499),s=t(7294),l=t(6835),f=t(1163),p=t(6448),d=t(7752),b=t(1383),v=t(9430),h=t(9208),O=v.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  cursor: pointer;\n\n  ","\n"])),(0,h.f)((0,v.iv)(o||(o=(0,b.Z)(["\n    background-color: ",";\n  "])),(function(e){return e.theme.color.main2})))),g=v.ZP.span(i||(i=(0,b.Z)(["\n  &:after {\n    content: attr(data-icon);\n  }\n"]))),j=v.ZP.div(c||(c=(0,b.Z)(["\n  overflow: hidden;\n\n  max-height: 0;\n  padding-top: 0;\n\n  transition: max-height 0.2s, padding-top 0.2s;\n\n  ","\n"])),(function(e){return e.isActive&&(0,v.iv)(a||(a=(0,b.Z)(["\n      padding-top: ",";\n      max-height: 1000px;\n    "])),(function(e){return e.theme.spacing.base}))})),y=t(5893);function m(e){var n=e.title,t=e.content,r=e.isActive,o=e.toggle;return(0,y.jsxs)("div",{"data-testid":"accord","aria-expanded":r,children:[(0,y.jsxs)(p.Z,{"data-testid":"accord-head",as:O,$bgColor:"main",$color:"textOnBg",$py:"xs",$px:"base",$hasShadow:!0,onClick:o,children:[(0,y.jsx)(d.Z,{$fs:"lg",children:n}),(0,y.jsx)(g,{"data-icon":r?"-":"+"})]}),(0,y.jsx)(j,{isActive:r,children:t})]})}var x=t(3918),P=t(7812),w=function(e,n){var t=(0,s.useState)(n||[]),r=t[0],o=t[1],i=function(e){return-1!==r.indexOf(e)};return{accords:Object.entries(e).map((function(e){var n=(0,l.Z)(e,2),t=n[0],c=n[1];return{title:c.title,toggle:function(){return function(e){var n=[];if(i(e)){var t=r.indexOf(e),c=(0,P.Z)(r);c.splice(t,1),n.push.apply(n,(0,P.Z)(c))}else n.push.apply(n,[e].concat((0,P.Z)(r)));o(n)}(t)},isActive:i(t),content:c.content}})),turnOn:function(e){i(e)||o([e].concat((0,P.Z)(r)))}}};function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=(0,s.forwardRef)((function(e,n){var t=e.items,r=e.defaultActive,o=w(t,r),i=o.accords,c=o.turnOn,a=i.map((function(e,n){return{id:n.toString(),el:(0,y.jsx)(m,k({},e),e.title)}}));return(0,s.useImperativeHandle)(n,(function(){return{turnOn:c}})),(0,y.jsx)(x.Z,{gap:"base",items:a})}));E.displayName="Accords";var D,L,C=E,S=t(1862),R=t(4730),M=t(1664),$=t(2122),A=v.ZP.a(D||(D=(0,b.Z)(["\n  ","\n\n  text-decoration: none;\n\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  ","\n"])),$.L,(function(e){var n=e.isActive,t=e.theme;return n&&(0,v.iv)(L||(L=(0,b.Z)(["\n      color: ",";\n      text-decoration: underline;\n    "])),t.color.main)})),I=["href","ref"];function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function K(e){var n=e.href,t=(e.ref,(0,R.Z)(e,I)),r=(0,f.useRouter)().asPath===n;return(0,y.jsx)(M.default,{href:"/js-challenge"+n,as:n+"/",children:(0,y.jsx)(A,N({isActive:r},t))})}var T=t(4378);function H(e){var n=e.exercises,t=e.onLinkClick,r=s.useMemo((function(){return n.map((function(e,n){var r=e.fullSlug,o=e.title,i=e.isPassed;return{id:n.toString(),el:(0,y.jsx)(S.Z,{children:(0,y.jsxs)(K,{"data-testid":"exercise-link",$color:i?"valid":void 0,href:r?T.Z.exercise(r):"",onClick:t,children:[i&&"\u2705 ",o]})},r)}}))}),[n,t]);return(0,y.jsx)(x.Z,{gap:"xs",items:r})}var U=function(e,n,t){return t.indexOf(e)===n};function z(e){var n,t=e.exercises,r=e.onLinkClick,o=(0,f.useRouter)().asPath,i=(0,s.useRef)(),c=null===(n=t.find((function(e){return T.Z.exercise(e.fullSlug)===o})))||void 0===n?void 0:n.cat,a=function(e){var n=e.map((function(e){return e.cat})).filter(U).map((function(n){var t=e.filter((function(e){return e.cat===n}));return[n,t]}));return Object.fromEntries(n)}(t);(0,s.useEffect)((function(){c&&i.current.turnOn(c)}),[c]);var u=(0,s.useMemo)((function(){return Object.entries(a).map((function(e){var n=(0,l.Z)(e,2),t=n[0],o=n[1];return[t,{title:t,content:(0,y.jsx)(p.Z,{$pl:"base",children:(0,y.jsx)(H,{exercises:o,onLinkClick:r})})}]}))}),[a]),d=Object.fromEntries(u);return(0,y.jsx)(C,{ref:i,defaultActive:c?[c]:void 0,items:d})}var B,q,J,Y=t(119),F=t(5815),G=v.ZP.div(B||(B=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n\n  padding: ",";\n\n  border: 2px solid;\n  border-color: ",";\n  border-radius: ",";\n  box-shadow: ",";\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &:focus-within {\n    outline: ",";\n  }\n"])),(function(e){return e.theme.spacing.s}),(function(e){return e.theme.color.main}),(function(e){return e.theme.radiss[2]}),(function(e){return e.theme.shadow.default}),(function(e){return e.theme.color.main2}),(function(e){return e.theme.outline.focus})),Q=v.ZP.input(q||(q=(0,b.Z)(["\n  flex-basis: 100%;\n\n  min-width: 0;\n\n  color: ",";\n  background-color: transparent;\n  border: none;\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.theme.color.text})),V=v.ZP.span(J||(J=(0,b.Z)(["\n  display: flex;\n  pointer-events: none;\n"]))),W=["iconRight","iconLeft"];function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ne=(0,s.forwardRef)((function(e,n){var t=e.iconRight,r=e.iconLeft,o=(0,R.Z)(e,W),i=!!t,c=!!r;return(0,y.jsxs)(G,{children:[c&&(0,y.jsx)(V,{$position:"left",children:r}),(0,y.jsx)(Q,ee({ref:n,hasIconLeft:c,hasIconRight:i},o)),i&&(0,y.jsx)(V,{$position:"right",children:t})]})}));ne.displayName="input";var te=ne,re=t(5381),oe=t(495);function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ce(e){var n=(0,s.useRef)(null);return(0,oe.Y)({keys:"search",callback:function(){var e;return null===(e=n.current)||void 0===e?void 0:e.focus()}}),(0,y.jsx)(te,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({ref:n,type:"text",iconLeft:(0,y.jsx)(F.J,{name:"AiOutlineSearch"}),iconRight:(0,y.jsxs)(Y.Z,{$g:"xs",children:[(0,y.jsx)(re.T,{children:"\u2318"}),(0,y.jsx)(re.T,{children:"K"})]})},e))}var ae=t(5);function ue(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ue(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function le(e){var n=(0,s.useState)(""),t=n[0],r=n[1],o=(0,s.useContext)(ae.Z).exercises,i=s.useMemo((function(){return Object.values(o).filter((function(e){var n=e.title;return null===n||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase())}))}),[o,t]);return(0,y.jsxs)(Y.Z,{$g:"lg",$direction:"column",children:[(0,y.jsx)(ce,{value:t,placeholder:"Adder function",onChange:function(e){return r(e.target.value)}}),(0,y.jsx)(z,se({exercises:i},e))]})}},5381:function(e,n,t){"use strict";t.d(n,{T:function(){return a}});var r,o=t(1383),i=t(9430).ZP.kbd(r||(r=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n\n  padding: 0 0.4rem;\n  height: 1.6rem;\n\n  font-size: 1.2rem;\n  font-family: monospace, sans-serif;\n  line-height: 1;\n\n  color: black;\n  background: transparent;\n  background-color: #e6e6e6;\n  background-color: rgba(210, 210, 210, 0.9);\n  border-color: #e6e6e6 #bebebe #bebebe #e6e6e6;\n  box-shadow: ",";\n  border-style: solid;\n  border-width: 1px 3px 4px;\n  border-radius: 0.4rem;\n"])),(function(e){return e.theme.shadow.default})),c=t(5893);function a(e){var n=e.children;return(0,c.jsx)(i,{children:n})}},7942:function(e,n,t){"use strict";var r=t(5696);n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},c=t(4957),a=t(9898),u=t(639);var s={};function l(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=a.useRouter(),f=i.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),i=t[0],a=t[1];return{href:i,as:e.as?c.resolveHref(o,e.as):a||i}}),[o,e.href,e.as]),p=f.href,d=f.as,b=e.children,v=e.replace,h=e.shallow,O=e.scroll,g=e.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var j=(n=i.default.Children.only(b))&&"object"===typeof n&&n.ref,y=u.useIntersection({rootMargin:"200px"}),m=r(y,2),x=m[0],P=m[1],w=i.default.useCallback((function(e){x(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,x]);i.default.useEffect((function(){var e=P&&t&&c.isLocalURL(p),n="undefined"!==typeof g?g:o&&o.locale,r=s[p+"%"+d+(n?"%"+n:"")];e&&!r&&l(o,p,d,{locale:n})}),[d,p,P,g,t,o]);var Z={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,a,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:u,scroll:a}))}(e,o,p,d,v,h,O,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(p)&&l(o,p,d,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof g?g:o&&o.locale,E=o&&o.isLocaleDomain&&c.getDomainLocale(d,k,o&&o.locales,o&&o.domainLocales);Z.href=E||c.addBasePath(c.addLocale(d,k,o&&o.defaultLocale))}return i.default.cloneElement(n,Z)};n.default=f},639:function(e,n,t){"use strict";var r=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,u=o.useRef(),s=o.useState(!1),l=r(s,2),f=l[0],p=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,c=r.elements;return c.set(e,n),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!c&&!f){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=t(7294),i=t(6286),c="undefined"!==typeof IntersectionObserver;var a=new Map},1664:function(e,n,t){e.exports=t(7942)}}]);