/*! For license information please see main.5ff41184.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:i,_owner:l.current}}t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,g(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,a)&&!j.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:k.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+z(s,0):i,w(o)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),N(o,t,a,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+z(l=e[u],u);s+=N(l,t,a,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=N(l=l.value,t,a,c=i+z(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],a=0;return N(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},L={transition:null},R={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:L,ReactCurrentOwner:k};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=o,t.PureComponent=x,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.act=I,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!j.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<a&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,g=!1,m=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(m=!1,b(e),!g)if(null!==r(u))g=!0,L(S);else{var t=r(c);null!==t&&R(w,t.startTime-e)}}function S(e,n){g=!1,m&&(m=!1,y(E),E=-1),h=!0;var i=p;try{for(b(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!N());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),b(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&R(w,d.startTime-n),s=!1}return s}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,j=!1,C=null,E=-1,_=5,z=-1;function N(){return!(t.unstable_now()-z<_)}function P(){if(null!==C){var e=t.unstable_now();z=e;var n=!0;try{n=C(!0,e)}finally{n?k():(j=!1,C=null)}}else j=!1}if("function"===typeof x)k=function(){x(P)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,O=T.port2;T.port1.onmessage=P,k=function(){O.postMessage(null)}}else k=function(){v(P,0)};function L(e){C=e,j||(j=!0,k())}function R(e,n){E=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,L(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(m?(y(E),E=-1):m=!0,R(w,i-o))):(e.sortIndex=l,n(u,e),g||h||(g=!0,L(S))),e},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function g(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new g(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new g(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new g(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new g(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new g(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var a=m.hasOwnProperty(t)?m[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);m[t]=new g(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),_=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function I(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var D,M=Object.assign;function F(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var A=!1;function $(e,t){if(!e||A)return"";A=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{A=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function U(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case C:return"Profiler";case j:return"StrictMode";case N:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=V(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+V(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:V(n)}}function ie(e,t){var n=V(t.value),r=V(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,je=null;function Ce(e){if(e=xa(e)){if("function"!==typeof Se)throw Error(i(280));var t=e.stateNode;t&&(t=wa(t),Se(e.stateNode,e.type,t))}}function Ee(e){ke?je?je.push(e):je=[e]:ke=e}function _e(){if(ke){var e=ke,t=je;if(je=ke=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function ze(e,t){return e(t)}function Ne(){}var Pe=!1;function Te(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return ze(e,t,n)}finally{Pe=!1,(null!==ke||null!==je)&&(Ne(),_e())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Le=!1;if(c)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Le=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(ce){Le=!1}function Ie(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var De=!1,Me=null,Fe=!1,Ae=null,$e={onError:function(e){De=!0,Me=e}};function Ue(e,t,n,r,a,i,o,l,s){De=!1,Me=null,Ie.apply($e,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ve(e){if(He(e)!==e)throw Error(i(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Ve(a),e;if(o===r)return Ve(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Qe=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,qe=a.unstable_shouldYield,Ge=a.unstable_requestPaint,Xe=a.unstable_now,Ze=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~a;0!==l?r=dt(l):0!==(i&=o)&&(r=dt(i))}else 0!==(o=n&~a)?r=dt(o):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,jt,Ct,Et=!1,_t=[],zt=null,Nt=null,Pt=null,Tt=new Map,Ot=new Map,Lt=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function It(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function Dt(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=xa(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Mt(e){var t=ya(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Ct(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ft(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xa(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function At(e,t,n){Ft(e)&&n.delete(t)}function $t(){Et=!1,null!==zt&&Ft(zt)&&(zt=null),null!==Nt&&Ft(Nt)&&(Nt=null),null!==Pt&&Ft(Pt)&&(Pt=null),Tt.forEach(At),Ot.forEach(At)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$t)))}function Ht(e){function t(t){return Ut(t,e)}if(0<_t.length){Ut(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&Ut(zt,e),null!==Nt&&Ut(Nt,e),null!==Pt&&Ut(Pt,e),Tt.forEach(t),Ot.forEach(t),n=0;n<Lt.length;n++)(r=Lt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&null===(n=Lt[0]).blockedOn;)Mt(n),null===n.blockedOn&&Lt.shift()}var Bt=b.ReactCurrentBatchConfig,Vt=!0;function Wt(e,t,n,r){var a=xt,i=Bt.transition;Bt.transition=null;try{xt=1,Qt(e,t,n,r)}finally{xt=a,Bt.transition=i}}function Kt(e,t,n,r){var a=xt,i=Bt.transition;Bt.transition=null;try{xt=4,Qt(e,t,n,r)}finally{xt=a,Bt.transition=i}}function Qt(e,t,n,r){if(Vt){var a=qt(e,t,n,r);if(null===a)Vr(e,t,r,Yt,n),It(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return zt=Dt(zt,e,t,n,r,a),!0;case"dragenter":return Nt=Dt(Nt,e,t,n,r,a),!0;case"mouseover":return Pt=Dt(Pt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Tt.set(i,Dt(Tt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Ot.set(i,Dt(Ot.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(It(e,r),4&t&&-1<Rt.indexOf(e)){for(;null!==a;){var i=xa(a);if(null!==i&&wt(i),null===(i=qt(e,t,n,r))&&Vr(e,t,r,Yt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Vr(e,t,r,null,n)}}var Yt=null;function qt(e,t,n,r){if(Yt=null,null!==(e=ya(e=we(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=M({},un,{view:0,detail:0}),fn=an(dn),pn=M({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),gn=an(M({},pn,{dataTransfer:0})),mn=an(M({},dn,{relatedTarget:0})),vn=an(M({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=M({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=an(yn),bn=an(M({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function Cn(){return jn}var En=M({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=an(En),zn=an(M({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nn=an(M({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Pn=an(M({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=M({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=an(Tn),Ln=[9,13,27,32],Rn=c&&"CompositionEvent"in window,In=null;c&&"documentMode"in document&&(In=document.documentMode);var Dn=c&&"TextEvent"in window&&!In,Mn=c&&(!Rn||In&&8<In&&11>=In),Fn=String.fromCharCode(32),An=!1;function $n(e,t){switch(e){case"keyup":return-1!==Ln.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function Wn(e,t,n,r){Ee(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Qn=null;function Yn(e){Fr(e,0)}function qn(e){if(Q(ba(e)))return e}function Gn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Zn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Qn=Kn=null)}function nr(e){if("value"===e.propertyName&&qn(Qn)){var t=[];Wn(t,Qn,e,we(e)),Te(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Qn)}function ir(e,t){if("click"===e)return qn(t)}function or(e,t){if("input"===e||"change"===e)return qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=cr(n,i);var o=cr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=c&&"documentMode"in document&&11>=document.documentMode,mr=null,vr=null,yr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==mr||mr!==Y(r)||("selectionStart"in(r=mr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Kr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},jr={};function Cr(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return kr[e]=n[t];return e}c&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Er=Cr("animationend"),_r=Cr("animationiteration"),zr=Cr("animationstart"),Nr=Cr("transitionend"),Pr=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){Pr.set(e,t),s(t,[e])}for(var Lr=0;Lr<Tr.length;Lr++){var Rr=Tr[Lr];Or(Rr.toLowerCase(),"on"+(Rr[0].toUpperCase()+Rr.slice(1)))}Or(Er,"onAnimationEnd"),Or(_r,"onAnimationIteration"),Or(zr,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Nr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Mr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,l,s,u){if(Ue.apply(this,arguments),De){if(!De)throw Error(i(198));var c=Me;De=!1,Me=null,Fe||(Fe=!0,Ae=c)}}(r,t,void 0,e),e.currentTarget=null}function Fr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Mr(a,l,u),i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Mr(a,l,u),i=s}}}if(Fe)throw e=Ae,Fe=!1,Ae=null,e}function Ar(e,t){var n=t[ga];void 0===n&&(n=t[ga]=new Set);var r=e+"__bubble";n.has(r)||(Br(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Br(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Ur]){e[Ur]=!0,o.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||$r(t,!1,e),$r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,$r("selectionchange",!1,t))}}function Br(e,t,n,r){switch(Gt(t)){case 1:var a=Wt;break;case 4:a=Kt;break;default:a=Qt}n=a.bind(null,t,n,e),a=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Vr(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=ya(l)))return;if(5===(s=o.tag)||6===s){r=i=o;continue e}l=l.parentNode}}r=r.return}Te((function(){var r=i,a=we(n),o=[];e:{var l=Pr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=mn;break;case"focusout":u="blur",s=mn;break;case"beforeblur":case"afterblur":s=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Nn;break;case Er:case _r:case zr:s=vn;break;case Nr:s=Pn;break;case"scroll":s=fn;break;case"wheel":s=On;break;case"copy":case"cut":case"paste":s=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=zn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==f&&(null!=(g=Oe(h,f))&&c.push(Wr(h,g,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(u=n.relatedTarget||n.fromElement)||!ya(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ya(u):null)&&(u!==(d=He(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=zn,g="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:ba(s),p=null==u?l:ba(u),(l=new c(g,h+"leave",s,n,a)).target=d,l.relatedTarget=p,g=null,ya(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,g=c),d=g,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Qr(p))h++;for(p=0,g=f;g;g=Qr(g))p++;for(;0<h-p;)c=Qr(c),h--;for(;0<p-h;)f=Qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Qr(c),f=Qr(f)}c=null}else c=null;null!==s&&Yr(o,l,s,c,!1),null!==u&&null!==d&&Yr(o,d,u,c,!0)}if("select"===(s=(l=r?ba(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var m=Gn;else if(Vn(l))if(Xn)m=or;else{m=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(m=ir);switch(m&&(m=m(e,r))?Wn(o,m,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?ba(r):window,e){case"focusin":(Vn(v)||"true"===v.contentEditable)&&(mr=v,vr=r,yr=null);break;case"focusout":yr=vr=mr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(o,n,a);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":br(o,n,a)}var y;if(Rn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Hn?$n(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Mn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Hn&&(y=en()):(Zt="value"in(Xt=a)?Xt.value:Xt.textContent,Hn=!0)),0<(v=Kr(r,x)).length&&(x=new bn(x,e,null,n,a),o.push({event:x,listeners:v}),y?x.data=y:null!==(y=Un(n))&&(x.data=y))),(y=Dn?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(An=!0,Fn);case"textInput":return(e=t.data)===Fn&&An?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!Rn&&$n(e,t)?(e=en(),Jt=Zt=Xt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(a=new bn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=y))}Fr(o,t)}))}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Oe(e,n))&&r.unshift(Wr(e,i,a)),null!=(i=Oe(e,t))&&r.push(Wr(e,i,a))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Oe(n,i))&&o.unshift(Wr(n,s,l)):a||null!=(s=Oe(n,i))&&o.push(Wr(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var qr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Gr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(i(425))}function Jr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ht(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ga="__reactEvents$"+da,ma="__reactListeners$"+da,va="__reactHandles$"+da;function ya(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function xa(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ba(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function wa(e){return e[pa]||null}var Sa=[],ka=-1;function ja(e){return{current:e}}function Ca(e){0>ka||(e.current=Sa[ka],Sa[ka]=null,ka--)}function Ea(e,t){ka++,Sa[ka]=e.current,e.current=t}var _a={},za=ja(_a),Na=ja(!1),Pa=_a;function Ta(e,t){var n=e.type.contextTypes;if(!n)return _a;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function La(){Ca(Na),Ca(za)}function Ra(e,t,n){if(za.current!==_a)throw Error(i(168));Ea(za,t),Ea(Na,n)}function Ia(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,B(e)||"Unknown",a));return M({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_a,Pa=za.current,Ea(za,e),Ea(Na,Na.current),!0}function Ma(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Ia(e,t,Pa),r.__reactInternalMemoizedMergedChildContext=e,Ca(Na),Ca(za),Ea(za,e)):Ca(Na),Ea(Na,n)}var Fa=null,Aa=!1,$a=!1;function Ua(e){null===Fa?Fa=[e]:Fa.push(e)}function Ha(){if(!$a&&null!==Fa){$a=!0;var e=0,t=xt;try{var n=Fa;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Fa=null,Aa=!1}catch(a){throw null!==Fa&&(Fa=Fa.slice(e+1)),Qe(Je,Ha),a}finally{xt=t,$a=!1}}return null}var Ba=[],Va=0,Wa=null,Ka=0,Qa=[],Ya=0,qa=null,Ga=1,Xa="";function Za(e,t){Ba[Va++]=Ka,Ba[Va++]=Wa,Wa=e,Ka=t}function Ja(e,t,n){Qa[Ya++]=Ga,Qa[Ya++]=Xa,Qa[Ya++]=qa,qa=e;var r=Ga;e=Xa;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ga=1<<32-ot(t)+a|n<<a|r,Xa=i+e}else Ga=1<<i|n<<a|r,Xa=e}function ei(e){null!==e.return&&(Za(e,1),Ja(e,1,0))}function ti(e){for(;e===Wa;)Wa=Ba[--Va],Ba[Va]=null,Ka=Ba[--Va],Ba[Va]=null;for(;e===qa;)qa=Qa[--Ya],Qa[Ya]=null,Xa=Qa[--Ya],Qa[Ya]=null,Ga=Qa[--Ya],Qa[Ya]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=Tu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qa?{id:Ga,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function si(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ai){var t=ri;if(t){var n=t;if(!li(e,t)){if(si(e))throw Error(i(418));t=ua(n.nextSibling);var r=ni;t&&li(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(si(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function ci(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function di(e){if(e!==ni)return!1;if(!ai)return ci(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(si(e))throw fi(),Error(i(418));for(;t;)oi(e,t),t=ua(t.nextSibling)}if(ci(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ua(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=ri;e;)e=ua(e.nextSibling)}function pi(){ri=ni=null,ai=!1}function hi(e){null===ii?ii=[e]:ii.push(e)}var gi=b.ReactCurrentBatchConfig;function mi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yi(e){return(0,e._init)(e._payload)}function xi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Lu(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Mu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===O&&yi(i)===t.type)?((r=a(t,n.props)).ref=mi(e,t,n),r.return=e,r):((r=Ru(n.type,n.key,n.props,null,e.mode,r)).ref=mi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Fu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Iu(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Mu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ru(t.type,t.key,t.props,null,e.mode,n)).ref=mi(e,null,t),n.return=e,n;case S:return(t=Fu(t,e.mode,n)).return=e,t;case O:return f(e,(0,t._init)(t._payload),n)}if(te(t)||I(t))return(t=Iu(t,e.mode,n,null)).return=e,t;vi(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case S:return n.key===a?c(e,t,n,r):null;case O:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||I(n))return null!==a?null:d(e,t,n,r,null);vi(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case O:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||I(r))return d(t,e=e.get(n)||null,r,a,null);vi(t,r)}return null}function g(a,i,l,s){for(var u=null,c=null,d=i,g=i=0,m=null;null!==d&&g<l.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=p(a,d,l[g],s);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(a,d),i=o(v,i,g),null===c?u=v:c.sibling=v,c=v,d=m}if(g===l.length)return n(a,d),ai&&Za(a,g),u;if(null===d){for(;g<l.length;g++)null!==(d=f(a,l[g],s))&&(i=o(d,i,g),null===c?u=d:c.sibling=d,c=d);return ai&&Za(a,g),u}for(d=r(a,d);g<l.length;g++)null!==(m=h(d,a,g,l[g],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),i=o(m,i,g),null===c?u=m:c.sibling=m,c=m);return e&&d.forEach((function(e){return t(a,e)})),ai&&Za(a,g),u}function m(a,l,s,u){var c=I(s);if("function"!==typeof c)throw Error(i(150));if(null==(s=c.call(s)))throw Error(i(151));for(var d=c=null,g=l,m=l=0,v=null,y=s.next();null!==g&&!y.done;m++,y=s.next()){g.index>m?(v=g,g=null):v=g.sibling;var x=p(a,g,y.value,u);if(null===x){null===g&&(g=v);break}e&&g&&null===x.alternate&&t(a,g),l=o(x,l,m),null===d?c=x:d.sibling=x,d=x,g=v}if(y.done)return n(a,g),ai&&Za(a,m),c;if(null===g){for(;!y.done;m++,y=s.next())null!==(y=f(a,y.value,u))&&(l=o(y,l,m),null===d?c=y:d.sibling=y,d=y);return ai&&Za(a,m),c}for(g=r(a,g);!y.done;m++,y=s.next())null!==(y=h(g,a,m,y.value,u))&&(e&&null!==y.alternate&&g.delete(null===y.key?m:y.key),l=o(y,l,m),null===d?c=y:d.sibling=y,d=y);return e&&g.forEach((function(e){return t(a,e)})),ai&&Za(a,m),c}return function e(r,i,o,s){if("object"===typeof o&&null!==o&&o.type===k&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var u=o.key,c=i;null!==c;){if(c.key===u){if((u=o.type)===k){if(7===c.tag){n(r,c.sibling),(i=a(c,o.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===O&&yi(u)===c.type){n(r,c.sibling),(i=a(c,o.props)).ref=mi(r,c,o),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===k?((i=Iu(o.props.children,r.mode,s,o.key)).return=r,r=i):((s=Ru(o.type,o.key,o.props,null,r.mode,s)).ref=mi(r,i,o),s.return=r,r=s)}return l(r);case S:e:{for(c=o.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Fu(o,r.mode,s)).return=r,r=i}return l(r);case O:return e(r,i,(c=o._init)(o._payload),s)}if(te(o))return g(r,i,o,s);if(I(o))return m(r,i,o,s);vi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=Mu(o,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var bi=xi(!0),wi=xi(!1),Si=ja(null),ki=null,ji=null,Ci=null;function Ei(){Ci=ji=ki=null}function _i(e){var t=Si.current;Ca(Si),e._currentValue=t}function zi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ni(e,t){ki=e,Ci=ji=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xl=!0),e.firstContext=null)}function Pi(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},null===ji){if(null===ki)throw Error(i(308));ji=e,ki.dependencies={lanes:0,firstContext:e}}else ji=ji.next=e;return t}var Ti=null;function Oi(e){null===Ti?Ti=[e]:Ti.push(e)}function Li(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Oi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ri(e,r)}function Ri(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ii=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ai(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&zs)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ri(e,n)}return null===(a=r.interleaved)?(t.next=t,Oi(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ri(e,n)}function $i(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Ui(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,r){var a=e.updateQueue;Ii=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?i=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,c=u=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,g=l;switch(f=t,p=n,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=g.payload)?h.call(p,d,f):h)||void 0===f)break e;d=M({},d,f);break e;case 2:Ii=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Ds|=o,e.lanes=o,e.memoizedState=d}}function Bi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var Vi={},Wi=ja(Vi),Ki=ja(Vi),Qi=ja(Vi);function Yi(e){if(e===Vi)throw Error(i(174));return e}function qi(e,t){switch(Ea(Qi,t),Ea(Ki,e),Ea(Wi,Vi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ca(Wi),Ea(Wi,t)}function Gi(){Ca(Wi),Ca(Ki),Ca(Qi)}function Xi(e){Yi(Qi.current);var t=Yi(Wi.current),n=se(t,e.type);t!==n&&(Ea(Ki,e),Ea(Wi,n))}function Zi(e){Ki.current===e&&(Ca(Wi),Ca(Ki))}var Ji=ja(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=b.ReactCurrentDispatcher,ao=b.ReactCurrentBatchConfig,io=0,oo=null,lo=null,so=null,uo=!1,co=!1,fo=0,po=0;function ho(){throw Error(i(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function mo(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Jo:el,e=n(r,a),co){o=0;do{if(co=!1,fo=0,25<=o)throw Error(i(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,a)}while(co)}if(ro.current=Zo,t=null!==lo&&null!==lo.next,io=0,so=lo=oo=null,uo=!1,t)throw Error(i(300));return e}function vo(){var e=0!==fo;return fo=0,e}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function xo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(i(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function bo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=xo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=lo,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var s=l=null,u=null,c=o;do{var d=c.lane;if((io&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,oo.lanes|=d,Ds|=d}c=c.next}while(null!==c&&c!==o);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(xl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Ds|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=xo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);lr(o,t.memoizedState)||(xl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ko(){}function jo(e,t){var n=oo,r=xo(),a=t(),o=!lr(r.memoizedState,a);if(o&&(r.memoizedState=a,xl=!0),r=r.queue,Do(_o.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,To(9,Eo.bind(null,n,r,a,t),void 0,null),null===Ns)throw Error(i(349));0!==(30&io)||Co(n,t,a)}return a}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Eo(e,t,n,r){t.value=n,t.getSnapshot=r,zo(t)&&No(e)}function _o(e,t,n){return n((function(){zo(t)&&No(e)}))}function zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function No(e){var t=Ri(e,1);null!==t&&nu(t,e,1,-1)}function Po(e){var t=yo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[t.memoizedState,e]}function To(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oo(){return xo().memoizedState}function Lo(e,t,n,r){var a=yo();oo.flags|=e,a.memoizedState=To(1|t,n,void 0,void 0===r?null:r)}function Ro(e,t,n,r){var a=xo();r=void 0===r?null:r;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==r&&go(r,o.deps))return void(a.memoizedState=To(t,n,i,r))}oo.flags|=e,a.memoizedState=To(1|t,n,i,r)}function Io(e,t){return Lo(8390656,8,e,t)}function Do(e,t){return Ro(2048,8,e,t)}function Mo(e,t){return Ro(4,2,e,t)}function Fo(e,t){return Ro(4,4,e,t)}function Ao(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $o(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ro(4,4,Ao.bind(null,t,e),n)}function Uo(){}function Ho(e,t){var n=xo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bo(e,t){var n=xo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vo(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,xl=!0),e.memoizedState=n):(lr(n,t)||(n=gt(),oo.lanes|=n,Ds|=n,e.baseState=!0),t)}function Wo(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{xt=n,ao.transition=r}}function Ko(){return xo().memoizedState}function Qo(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qo(e))Go(t,n);else if(null!==(n=Li(e,t,n,r))){nu(n,e,r,eu()),Xo(n,t,r)}}function Yo(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qo(e))Go(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(a.next=a,Oi(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Li(e,t,a,r))&&(nu(n,e,r,a=eu()),Xo(n,t,r))}}function qo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Go(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Zo={readContext:Pi,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Jo={readContext:Pi,useCallback:function(e,t){return yo().memoizedState=[e,void 0===t?null:t],e},useContext:Pi,useEffect:Io,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Lo(4194308,4,Ao.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var n=yo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yo().memoizedState=e},useState:Po,useDebugValue:Uo,useDeferredValue:function(e){return yo().memoizedState=e},useTransition:function(){var e=Po(!1),t=e[0];return e=Wo.bind(null,e[1]),yo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=yo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Ns)throw Error(i(349));0!==(30&io)||Co(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Io(_o.bind(null,r,o,e),[e]),r.flags|=2048,To(9,Eo.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yo(),t=Ns.identifierPrefix;if(ai){var n=Xa;t=":"+t+"R"+(n=(Ga&~(1<<32-ot(Ga)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Pi,useCallback:Ho,useContext:Pi,useEffect:Do,useImperativeHandle:$o,useInsertionEffect:Mo,useLayoutEffect:Fo,useMemo:Bo,useReducer:wo,useRef:Oo,useState:function(){return wo(bo)},useDebugValue:Uo,useDeferredValue:function(e){return Vo(xo(),lo.memoizedState,e)},useTransition:function(){return[wo(bo)[0],xo().memoizedState]},useMutableSource:ko,useSyncExternalStore:jo,useId:Ko,unstable_isNewReconciler:!1},tl={readContext:Pi,useCallback:Ho,useContext:Pi,useEffect:Do,useImperativeHandle:$o,useInsertionEffect:Mo,useLayoutEffect:Fo,useMemo:Bo,useReducer:So,useRef:Oo,useState:function(){return So(bo)},useDebugValue:Uo,useDeferredValue:function(e){var t=xo();return null===lo?t.memoizedState=e:Vo(t,lo.memoizedState,e)},useTransition:function(){return[So(bo)[0],xo().memoizedState]},useMutableSource:ko,useSyncExternalStore:jo,useId:Ko,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=M({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:M({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Fi(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ai(e,i,a))&&(nu(t,e,a,r),$i(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Fi(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ai(e,i,a))&&(nu(t,e,a,r),$i(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Fi(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Ai(e,a,r))&&(nu(t,e,r,n),$i(t,e,r))}};function il(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,i))}function ol(e,t,n){var r=!1,a=_a,i=t.contextType;return"object"===typeof i&&null!==i?i=Pi(i):(a=Oa(t)?Pa:za.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ta(e,a):_a),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Di(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Pi(i):(i=Oa(t)?Pa:za.current,a.context=Ta(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Hi(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Fi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vs||(Vs=!0,Ws=r),dl(0,t)},n}function hl(e,t,n){(n=Fi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fi(-1,1)).tag=2,Ai(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yl=b.ReactCurrentOwner,xl=!1;function bl(e,t,n,r){t.child=null===e?wi(t,null,n,r):bi(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var i=t.ref;return Ni(t,a),r=mo(e,t,n,r,i,a),n=vo(),null===e||xl?(ai&&n&&ei(t),t.flags|=1,bl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Vl(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Ou(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ru(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,kl(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Vl(e,t,a)}return t.flags|=1,(e=Lu(i,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(xl=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Vl(e,t,a);0!==(131072&e.flags)&&(xl=!0)}}return El(e,t,n,r,a)}function jl(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ea(Ls,Os),Os|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ea(Ls,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Ea(Ls,Os),Os|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ea(Ls,Os),Os|=r;return bl(e,t,a,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,a){var i=Oa(n)?Pa:za.current;return i=Ta(t,i),Ni(t,a),n=mo(e,t,n,r,i,a),r=vo(),null===e||xl?(ai&&r&&ei(t),t.flags|=1,bl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Vl(e,t,a))}function _l(e,t,n,r,a){if(Oa(n)){var i=!0;Da(t)}else i=!1;if(Ni(t,a),null===t.stateNode)Bl(e,t),ol(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;"object"===typeof u&&null!==u?u=Pi(u):u=Ta(t,u=Oa(n)?Pa:za.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,o,r,u),Ii=!1;var f=t.memoizedState;o.state=f,Hi(t,r,o,a),s=t.memoizedState,l!==r||f!==s||Na.current||Ii?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Ii||il(t,n,l,r,f,s,u))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Mi(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),o.props=u,d=t.pendingProps,f=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Pi(s):s=Ta(t,s=Oa(n)?Pa:za.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,o,r,s),Ii=!1,f=t.memoizedState,o.state=f,Hi(t,r,o,a);var h=t.memoizedState;l!==d||f!==h||Na.current||Ii?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Ii||il(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,i,a)}function zl(e,t,n,r,a,i){Cl(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&Ma(t,n,!1),Vl(e,t,i);r=t.stateNode,yl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=bi(t,e.child,null,i),t.child=bi(t,null,l,i)):bl(e,t,l,i),t.memoizedState=r.state,a&&Ma(t,n,!0),t.child}function Nl(e){var t=e.stateNode;t.pendingContext?Ra(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ra(0,t.context,!1),qi(e,t.containerInfo)}function Pl(e,t,n,r,a){return pi(),hi(a),t.flags|=256,bl(e,t,n,r),t.child}var Tl,Ol,Ll,Rl,Il={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ml(e,t,n){var r,a=t.pendingProps,o=Ji.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ea(Ji,1&o),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Du(s,a,0,null),e=Iu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Il,e):Fl(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,l){if(n)return 256&t.flags?(t.flags&=-257,Al(e,t,l,r=cl(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Du({mode:"visible",children:r.children},a,0,null),(o=Iu(o,a,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&bi(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Il,o);if(0===(1&t.mode))return Al(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Al(e,t,l,r=cl(o=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),xl||s){if(null!==(r=Ns)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Ri(e,a),nu(r,e,a,-1))}return gu(),Al(e,t,l,r=cl(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ua(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(Qa[Ya++]=Ga,Qa[Ya++]=Xa,Qa[Ya++]=qa,Ga=e.id,Xa=e.overflow,qa=t),t=Fl(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,o,n);if(l){l=a.fallback,s=t.mode,r=(o=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Lu(o,u)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=Lu(r,l):(l=Iu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Il,a}return e=(l=e.child).sibling,a=Lu(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Fl(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Al(e,t,n,r){return null!==r&&hi(r),bi(t,e.child,null,n),(e=Fl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),zi(e.return,t,n)}function Ul(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Hl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=Ji.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ea(Ji,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ul(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ul(t,!0,n,null,i);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Lu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Wl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ql(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Oa(t.type)&&La(),Kl(t),null;case 3:return r=t.stateNode,Gi(),Ca(Na),Ca(za),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(ou(ii),ii=null))),Ol(e,t),Kl(t),null;case 5:Zi(t);var a=Yi(Qi.current);if(n=t.type,null!==e&&null!=t.stateNode)Ll(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Kl(t),null}if(e=Yi(Wi.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fa]=t,r[pa]=o,e=0!==(1&t.mode),n){case"dialog":Ar("cancel",r),Ar("close",r);break;case"iframe":case"object":case"embed":Ar("load",r);break;case"video":case"audio":for(a=0;a<Ir.length;a++)Ar(Ir[a],r);break;case"source":Ar("error",r);break;case"img":case"image":case"link":Ar("error",r),Ar("load",r);break;case"details":Ar("toggle",r);break;case"input":G(r,o),Ar("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ar("invalid",r);break;case"textarea":ae(r,o),Ar("invalid",r)}for(var s in ye(n,o),a=null,o)if(o.hasOwnProperty(s)){var u=o[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ar("scroll",r)}switch(n){case"input":K(r),J(r,o,!0);break;case"textarea":K(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Jr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,Tl(e,t,!1,!1),t.stateNode=e;e:{switch(s=xe(n,r),n){case"dialog":Ar("cancel",e),Ar("close",e),a=r;break;case"iframe":case"object":case"embed":Ar("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ir.length;a++)Ar(Ir[a],e);a=r;break;case"source":Ar("error",e),a=r;break;case"img":case"image":case"link":Ar("error",e),Ar("load",e),a=r;break;case"details":Ar("toggle",e),a=r;break;case"input":G(e,r),a=q(e,r),Ar("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=M({},r,{value:void 0}),Ar("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Ar("invalid",e)}for(o in ye(n,a),u=a)if(u.hasOwnProperty(o)){var c=u[o];"style"===o?me(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Ar("scroll",e):null!=c&&x(e,o,c,s))}switch(n){case"input":K(e),J(e,r,!1);break;case"textarea":K(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+V(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)Rl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Yi(Qi.current),Yi(Wi.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Kl(t),null;case 13:if(Ca(Ji),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))fi(),pi(),t.flags|=98560,o=!1;else if(o=di(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[fa]=t}else pi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),o=!1}else null!==ii&&(ou(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Ji.current)?0===Rs&&(Rs=3):gu())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Gi(),Ol(e,t),null===e&&Hr(t.stateNode.containerInfo),Kl(t),null;case 10:return _i(t.type._context),Kl(t),null;case 19:if(Ca(Ji),null===(o=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Wl(o,!1);else{if(0!==Rs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Wl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ea(Ji,1&Ji.current|2),t.child}e=e.sibling}null!==o.tail&&Xe()>Hs&&(t.flags|=128,r=!0,Wl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Wl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ai)return Kl(t),null}else 2*Xe()-o.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,Wl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=Ji.current,Ea(Ji,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Os)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Yl(e,t){switch(ti(t),t.tag){case 1:return Oa(t.type)&&La(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Gi(),Ca(Na),Ca(za),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Ca(Ji),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ca(Ji),null;case 4:return Gi(),null;case 10:return _i(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Tl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Ll=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Yi(Wi.current);var i,o=null;switch(n){case"input":a=q(e,a),r=q(e,r),o=[];break;case"select":a=M({},a,{value:void 0}),r=M({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ye(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(o=o||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(o=o||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ar("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Rl=function(e,t,n,r){n!==r&&(t.flags|=4)};var ql=!1,Gl=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){ju(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){ju(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&es(t,n,i)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ga],delete t[ma],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Gl||Jl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ht(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&es(n,t,o),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Gl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ju(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,fs(e,t,n),Gl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=zu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(i(160));ps(o,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){ju(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}function ms(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(m){ju(e,e.return,m)}try{ns(5,e,e.return)}catch(m){ju(e,e.return,m)}}break;case 1:gs(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(gs(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(m){ju(e,e.return,m)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===o.type&&null!=o.name&&X(a,o),xe(s,l);var c=xe(s,o);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?me(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):x(a,d,f,c)}switch(s){case"input":Z(a,o);break;case"textarea":ie(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(a,!!o.multiple,h,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[pa]=o}catch(m){ju(e,e.return,m)}}break;case 6:if(gs(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(m){ju(e,e.return,m)}}break;case 3:if(gs(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(m){ju(e,e.return,m)}break;case 4:default:gs(t,e),vs(e);break;case 13:gs(t,e),vs(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=Xe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,gs(t,e),Gl=c):gs(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(h=(p=Zl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var g=p.stateNode;if("function"===typeof g.componentWillUnmount){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){ju(r,n,m)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Zl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=ge("display",l))}catch(m){ju(e,e.return,m)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(m){ju(e,e.return,m)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gs(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(i(161))}}catch(l){ju(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Zl=e,xs(e,t,n)}function xs(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var a=Zl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||ql;if(!o){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=ql;var u=Gl;if(ql=o,(Gl=s)&&!u)for(Zl=a;null!==Zl;)s=(o=Zl).child,22===o.tag&&null!==o.memoizedState?Ss(a):null!==s?(s.return=o,Zl=s):Ss(a);for(;null!==i;)Zl=i,xs(i,t,n),i=i.sibling;Zl=a,ql=l,Gl=u}bs(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Zl=i):bs(e)}}function bs(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Bi(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Bi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(i(163))}Gl||512&t.flags&&as(t)}catch(p){ju(t,t.return,p)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function Ss(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){ju(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){ju(t,a,s)}}var i=t.return;try{as(t)}catch(s){ju(t,i,s)}break;case 5:var o=t.return;try{as(t)}catch(s){ju(t,o,s)}}}catch(s){ju(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var ks,js=Math.ceil,Cs=b.ReactCurrentDispatcher,Es=b.ReactCurrentOwner,_s=b.ReactCurrentBatchConfig,zs=0,Ns=null,Ps=null,Ts=0,Os=0,Ls=ja(0),Rs=0,Is=null,Ds=0,Ms=0,Fs=0,As=null,$s=null,Us=0,Hs=1/0,Bs=null,Vs=!1,Ws=null,Ks=null,Qs=!1,Ys=null,qs=0,Gs=0,Xs=null,Zs=-1,Js=0;function eu(){return 0!==(6&zs)?Xe():-1!==Zs?Zs:Zs=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&zs)&&0!==Ts?Ts&-Ts:null!==gi.transition?(0===Js&&(Js=gt()),Js):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,Xs=null,Error(i(185));vt(e,n,r),0!==(2&zs)&&e===Ns||(e===Ns&&(0===(2&zs)&&(Ms|=n),4===Rs&&lu(e,Ts)),ru(e,r),1===n&&0===zs&&0===(1&t.mode)&&(Hs=Xe()+500,Aa&&Ha()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=pt(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=ft(e,e===Ns?Ts:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Aa=!0,Ua(e)}(su.bind(null,e)):Ua(su.bind(null,e)),oa((function(){0===(6&zs)&&Ha()})),n=null;else{switch(bt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Nu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Zs=-1,Js=0,0!==(6&zs))throw Error(i(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ns?Ts:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=mu(e,r);else{t=r;var a=zs;zs|=2;var o=hu();for(Ns===e&&Ts===t||(Bs=null,Hs=Xe()+500,fu(e,t));;)try{yu();break}catch(s){pu(e,s)}Ei(),Cs.current=o,zs=a,null!==Ps?t=0:(Ns=null,Ts=0,t=Rs)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=iu(e,a))),1===t)throw n=Is,fu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!lr(i(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=mu(e,r))&&(0!==(o=ht(e))&&(r=o,t=iu(e,o))),1===t))throw n=Is,fu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wu(e,$s,Bs);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-Xe())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,$s,Bs),t);break}wu(e,$s,Bs);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>a&&(a=l),r&=~o}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*js(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,$s,Bs),r);break}wu(e,$s,Bs);break;default:throw Error(i(329))}}}return ru(e,Xe()),e.callbackNode===n?au.bind(null,e):null}function iu(e,t){var n=As;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=mu(e,t))&&(t=$s,$s=n,null!==t&&ou(t)),e}function ou(e){null===$s?$s=e:$s.push.apply($s,e)}function lu(e,t){for(t&=~Fs,t&=~Ms,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&zs))throw Error(i(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=mu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=Is,fu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,$s,Bs),ru(e,Xe()),null}function uu(e,t){var n=zs;zs|=1;try{return e(t)}finally{0===(zs=n)&&(Hs=Xe()+500,Aa&&Ha())}}function cu(e){null!==Ys&&0===Ys.tag&&0===(6&zs)&&Su();var t=zs;zs|=1;var n=_s.transition,r=xt;try{if(_s.transition=null,xt=1,e)return e()}finally{xt=r,_s.transition=n,0===(6&(zs=t))&&Ha()}}function du(){Os=Ls.current,Ca(Ls)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ps)for(n=Ps.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&La();break;case 3:Gi(),Ca(Na),Ca(za),no();break;case 5:Zi(r);break;case 4:Gi();break;case 13:case 19:Ca(Ji);break;case 10:_i(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ns=e,Ps=e=Lu(e.current,null),Ts=Os=t,Rs=0,Is=null,Fs=Ms=Ds=0,$s=As=null,null!==Ti){for(t=0;t<Ti.length;t++)if(null!==(r=(n=Ti[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Ti=null}return e}function pu(e,t){for(;;){var n=Ps;try{if(Ei(),ro.current=Zo,uo){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}uo=!1}if(io=0,so=lo=oo=null,co=!1,fo=0,Es.current=null,null===n||null===n.return){Rs=1,Is=t,Ps=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Ts,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ml(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&gl(o,c,t),u=c;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(u),t.updateQueue=m}else g.add(u);break e}if(0===(1&t)){gl(o,c,t),gu();break e}u=Error(i(426))}else if(ai&&1&s.mode){var v=ml(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),hi(ul(u,s));break e}}o=u=ul(u,s),4!==Rs&&(Rs=2),null===As?As=[o]:As.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,pl(0,u,t));break e;case 1:s=u;var y=o.type,x=o.stateNode;if(0===(128&o.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Ks||!Ks.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,hl(o,s,t));break e}}o=o.return}while(null!==o)}bu(n)}catch(b){t=b,Ps===n&&null!==n&&(Ps=n=n.return);continue}break}}function hu(){var e=Cs.current;return Cs.current=Zo,null===e?Zo:e}function gu(){0!==Rs&&3!==Rs&&2!==Rs||(Rs=4),null===Ns||0===(268435455&Ds)&&0===(268435455&Ms)||lu(Ns,Ts)}function mu(e,t){var n=zs;zs|=2;var r=hu();for(Ns===e&&Ts===t||(Bs=null,fu(e,t));;)try{vu();break}catch(a){pu(e,a)}if(Ei(),zs=n,Cs.current=r,null!==Ps)throw Error(i(261));return Ns=null,Ts=0,Rs}function vu(){for(;null!==Ps;)xu(Ps)}function yu(){for(;null!==Ps&&!qe();)xu(Ps)}function xu(e){var t=ks(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?bu(e):Ps=t,Es.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ql(n,t,Os)))return void(Ps=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(Ps=n);if(null===e)return Rs=6,void(Ps=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ps=t);Ps=t=e}while(null!==t);0===Rs&&(Rs=5)}function wu(e,t,n){var r=xt,a=_s.transition;try{_s.transition=null,xt=1,function(e,t,n,r){do{Su()}while(null!==Ys);if(0!==(6&zs))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===Ns&&(Ps=Ns=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Qs||(Qs=!0,Nu(tt,(function(){return Su(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=_s.transition,_s.transition=null;var l=xt;xt=1;var s=zs;zs|=4,Es.current=null,function(e,t){if(ea=Vt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===o&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Vt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,v=g.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(i(163))}}catch(w){ju(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}g=ts,ts=!1}(e,n),ms(n,e),hr(ta),Vt=!!ea,ta=ea=null,e.current=n,ys(n,e,a),Ge(),zs=s,xt=l,_s.transition=o}else e.current=n;if(Qs&&(Qs=!1,Ys=e,qs=a),o=e.pendingLanes,0===o&&(Ks=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Vs)throw Vs=!1,e=Ws,Ws=null,e;0!==(1&qs)&&0!==e.tag&&Su(),o=e.pendingLanes,0!==(1&o)?e===Xs?Gs++:(Gs=0,Xs=e):Gs=0,Ha()}(e,t,n,r)}finally{_s.transition=a,xt=r}return null}function Su(){if(null!==Ys){var e=bt(qs),t=_s.transition,n=xt;try{if(_s.transition=null,xt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,qs=0,0!==(6&zs))throw Error(i(331));var a=zs;for(zs|=4,Zl=e.current;null!==Zl;){var o=Zl,l=o.child;if(0!==(16&Zl.flags)){var s=o.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,o)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var p=(d=Zl).sibling,h=d.return;if(is(d),d===c){Zl=null;break}if(null!==p){p.return=h,Zl=p;break}Zl=h}}}var g=o.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(null!==m)}}Zl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(o=Zl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,Zl=y;break e}Zl=o.return}}var x=e.current;for(Zl=x;null!==Zl;){var b=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,Zl=b;else e:for(l=x;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){ju(s,s.return,S)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(zs=a,Ha(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(S){}r=!0}return r}finally{xt=n,_s.transition=t}}return!1}function ku(e,t,n){e=Ai(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function ju(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Ai(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ns===e&&(Ts&n)===n&&(4===Rs||3===Rs&&(130023424&Ts)===Ts&&500>Xe()-Us?fu(e,0):Fs|=n),ru(e,t)}function Eu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Ri(e,t))&&(vt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Eu(e,n)}function zu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Eu(e,n)}function Nu(e,t){return Qe(e,t)}function Pu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tu(e,t,n,r){return new Pu(e,t,n,r)}function Ou(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lu(e,t){var n=e.alternate;return null===n?((n=Tu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ru(e,t,n,r,a,o){var l=2;if(r=e,"function"===typeof e)Ou(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Iu(n.children,a,o,t);case j:l=8,a|=8;break;case C:return(e=Tu(12,n,t,2|a)).elementType=C,e.lanes=o,e;case N:return(e=Tu(13,n,t,a)).elementType=N,e.lanes=o,e;case P:return(e=Tu(19,n,t,a)).elementType=P,e.lanes=o,e;case L:return Du(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case _:l=9;break e;case z:l=11;break e;case T:l=14;break e;case O:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Tu(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Iu(e,t,n,r){return(e=Tu(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=Tu(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function Mu(e,t,n){return(e=Tu(6,e,null,t)).lanes=n,e}function Fu(e,t,n){return(t=Tu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Au(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,a,i,o,l,s){return e=new Au(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Tu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(i),e}function Uu(e){if(!e)return _a;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Oa(n))return Ia(e,n,t)}return t}function Hu(e,t,n,r,a,i,o,l,s){return(e=$u(n,r,!0,e,0,i,0,l,s)).context=Uu(null),n=e.current,(i=Fi(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Ai(n,i,a),e.current.lanes=a,vt(e,a,r),ru(e,r),e}function Bu(e,t,n,r){var a=t.current,i=eu(),o=tu(a);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fi(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ai(a,t,o))&&(nu(e,a,o,i),$i(e,a,o)),o}function Vu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Na.current)xl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xl=!1,function(e,t,n){switch(t.tag){case 3:Nl(t),pi();break;case 5:Xi(t);break;case 1:Oa(t.type)&&Da(t);break;case 4:qi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ea(Si,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ea(Ji,1&Ji.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ml(e,t,n):(Ea(Ji,1&Ji.current),null!==(e=Vl(e,t,n))?e.sibling:null);Ea(Ji,1&Ji.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ea(Ji,Ji.current),r)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,n)}return Vl(e,t,n)}(e,t,n);xl=0!==(131072&e.flags)}else xl=!1,ai&&0!==(1048576&t.flags)&&Ja(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bl(e,t),e=t.pendingProps;var a=Ta(t,za.current);Ni(t,n),a=mo(null,t,r,e,a,n);var o=vo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oa(r)?(o=!0,Da(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Di(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=zl(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),bl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Ou(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===z)return 11;if(e===T)return 14}return 2}(r),e=nl(r,e),a){case 0:t=El(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,El(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Nl(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,Mi(e,t),Hi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Pl(e,t,r,n,a=ul(Error(i(423)),t));break e}if(r!==a){t=Pl(e,t,r,n,a=ul(Error(i(424)),t));break e}for(ri=ua(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=wi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pi(),r===a){t=Vl(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Xi(t),null===e&&ui(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==o&&na(r,o)&&(t.flags|=32),Cl(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&ui(t),null;case 13:return Ml(e,t,n);case 4:return qi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=bi(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,Ea(Si,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===a.children&&!Na.current){t=Vl(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===o.tag){(u=Fi(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),zi(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),zi(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}bl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Ni(t,n),r=r(a=Pi(a)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Sl(e,t,r,a=nl(r.type,a),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Bl(e,t),t.tag=1,Oa(r)?(e=!0,Da(t)):e=!1,Ni(t,n),ol(t,r,a),sl(t,r,a,n),zl(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return jl(e,t,n)}throw Error(i(156,t.tag))};var Qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function qu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function Ju(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var l=a;a=function(){var e=Vu(o);l.call(e)}}Bu(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=Vu(o);i.call(e)}}var o=Hu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=o,e[ha]=o.current,Hr(8===e.nodeType?e.parentNode:e),cu(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Vu(s);l.call(e)}}var s=$u(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[ha]=s.current,Hr(8===e.nodeType?e.parentNode:e),cu((function(){Bu(t,s,n,r)})),s}(n,t,e,a,r);return Vu(o)}qu.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Bu(e,t,null,null)},qu.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Bu(null,e,null,null)})),t[ha]=null}},qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&0!==t&&t<Lt[n].priority;n++);Lt.splice(n,0,e),0===n&&Mt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Xe()),0===(6&zs)&&(Hs=Xe()+500,Ha()))}break;case 13:cu((function(){var t=Ri(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Ku(e,1)}},St=function(e){if(13===e.tag){var t=Ri(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Ri(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},jt=function(){return xt},Ct=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},Se=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(i(90));Q(r),Z(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},ze=uu,Ne=cu;var ec={usingClientEntryPoint:!1,Events:[xa,ba,wa,Ee,_e,uu]},tc={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),it=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(i(299));var n=!1,r="",a=Qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=$u(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(i(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",l=Qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hu(t,null,e,1,null!=n?n:null,a,0,o,l),e[ha]=t.current,Hr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new qu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(i(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(i(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var i=n(324),o=n.n(i),l="-ms-",s="-moz-",u="-webkit-",c="comm",d="rule",f="decl",p="@keyframes",h=Math.abs,g=String.fromCharCode,m=Object.assign;function v(e){return e.trim()}function y(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,n){return e.replace(t,n)}function b(e,t,n){return e.indexOf(t,n)}function w(e,t){return 0|e.charCodeAt(t)}function S(e,t,n){return e.slice(t,n)}function k(e){return e.length}function j(e){return e.length}function C(e,t){return t.push(e),e}function E(e,t){return e.filter((function(e){return!y(e,t)}))}var _=1,z=1,N=0,P=0,T=0,O="";function L(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:_,column:z,length:o,return:"",siblings:l}}function R(e,t){return m(L("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function I(e){for(;e.root;)e=R(e.root,{children:[e]});C(e,e.siblings)}function D(){return T=P>0?w(O,--P):0,z--,10===T&&(z=1,_--),T}function M(){return T=P<N?w(O,P++):0,z++,10===T&&(z=1,_++),T}function F(){return w(O,P)}function A(){return P}function $(e,t){return S(O,e,t)}function U(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return _=z=1,N=k(O=e),P=0,[]}function B(e){return O="",e}function V(e){return v($(P-1,Q(91===e?e+2:40===e?e+1:e)))}function W(e){for(;(T=F())&&T<33;)M();return U(e)>2||U(T)>3?"":" "}function K(e,t){for(;--t&&M()&&!(T<48||T>102||T>57&&T<65||T>70&&T<97););return $(e,A()+(t<6&&32==F()&&32==M()))}function Q(e){for(;M();)switch(T){case e:return P;case 34:case 39:34!==e&&39!==e&&Q(T);break;case 40:41===e&&Q(e);break;case 92:M()}return P}function Y(e,t){for(;M()&&e+T!==57&&(e+T!==84||47!==F()););return"/*"+$(t,P-1)+"*"+g(47===e?e:M())}function q(e){for(;!U(F());)M();return $(e,P)}function G(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function X(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case c:return"";case p:return e.return=e.value+"{"+G(e.children,r)+"}";case d:if(!k(e.value=e.props.join(",")))return""}return k(n=G(e.children,r))?e.return=e.value+"{"+n+"}":""}function Z(e,t,n){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+s+e+l+e+e;case 5936:switch(w(e,t+11)){case 114:return u+e+l+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+l+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+l+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+l+e+e;case 6165:return u+e+l+"flex-"+e+e;case 5187:return u+e+x(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return u+e+l+"flex-item-"+x(e,/flex-|-self/g,"")+(y(e,/flex-|baseline/)?"":l+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return u+e+l+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+l+x(e,"shrink","negative")+e;case 5292:return u+e+l+x(e,"basis","preferred-size")+e;case 6060:return u+"box-"+x(e,"-grow","")+u+e+l+x(e,"grow","positive")+e;case 4554:return u+x(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!y(e,/flex-|baseline/))return l+"grid-column-align"+S(e,t)+e;break;case 2592:case 3360:return l+x(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,y(e.props,/grid-\w+-end/)}))?~b(e+(n=n[t].value),"span",0)?e:l+x(e,"-start","")+e+l+"grid-row-span:"+(~b(n,"span",0)?y(n,/\d+/):+y(n,/\d+/)-+y(e,/\d+/))+";":l+x(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return y(e.props,/grid-\w+-start/)}))?e:l+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+s+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~b(e,"stretch",0)?Z(x(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,s){return l+n+":"+r+s+(a?l+n+"-span:"+(i?o:+o-+r)+s:"")+e}));case 4949:if(121===w(e,t+6))return x(e,":",":"+u)+e;break;case 6444:switch(w(e,45===w(e,14)?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===w(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+e;case 100:return x(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function J(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=Z(e.value,e.length,n));case p:return G([R(e,{value:x(e.value,"@","@"+u)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(y(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":I(R(e,{props:[x(t,/:(read-\w+)/,":-moz-$1")]})),I(R(e,{props:[t]})),m(e,{props:E(n,r)});break;case"::placeholder":I(R(e,{props:[x(t,/:(plac\w+)/,":"+u+"input-$1")]})),I(R(e,{props:[x(t,/:(plac\w+)/,":-moz-$1")]})),I(R(e,{props:[x(t,/:(plac\w+)/,l+"input-$1")]})),I(R(e,{props:[t]})),m(e,{props:E(n,r)})}return""}))}}function ee(e){return B(te("",null,null,null,[""],e=H(e),0,[0],e))}function te(e,t,n,r,a,i,o,l,s){for(var u=0,c=0,d=o,f=0,p=0,m=0,v=1,y=1,S=1,j=0,E="",_=a,z=i,N=r,P=E;y;)switch(m=j,j=M()){case 40:if(108!=m&&58==w(P,d-1)){-1!=b(P+=x(V(j),"&","&\f"),"&\f",h(u?l[u-1]:0))&&(S=-1);break}case 34:case 39:case 91:P+=V(j);break;case 9:case 10:case 13:case 32:P+=W(m);break;case 92:P+=K(A()-1,7);continue;case 47:switch(F()){case 42:case 47:C(re(Y(M(),A()),t,n,s),s);break;default:P+="/"}break;case 123*v:l[u++]=k(P)*S;case 125*v:case 59:case 0:switch(j){case 0:case 125:y=0;case 59+c:-1==S&&(P=x(P,/\f/g,"")),p>0&&k(P)-d&&C(p>32?ae(P+";",r,n,d-1,s):ae(x(P," ","")+";",r,n,d-2,s),s);break;case 59:P+=";";default:if(C(N=ne(P,t,n,u,c,a,l,E,_=[],z=[],d,i),i),123===j)if(0===c)te(P,t,N,N,_,i,d,l,z);else switch(99===f&&110===w(P,3)?100:f){case 100:case 108:case 109:case 115:te(e,N,N,r&&C(ne(e,N,N,0,0,a,l,E,a,_=[],d,z),z),a,z,d,l,r?_:z);break;default:te(P,N,N,N,[""],z,0,l,z)}}u=c=p=0,v=S=1,E=P="",d=o;break;case 58:d=1+k(P),p=m;default:if(v<1)if(123==j)--v;else if(125==j&&0==v++&&125==D())continue;switch(P+=g(j),j*v){case 38:S=c>0?1:(P+="\f",-1);break;case 44:l[u++]=(k(P)-1)*S,S=1;break;case 64:45===F()&&(P+=V(M())),f=F(),c=d=k(E=P+=q(A())),j++;break;case 45:45===m&&2==k(P)&&(v=0)}}return i}function ne(e,t,n,r,a,i,o,l,s,u,c,f){for(var p=a-1,g=0===a?i:[""],m=j(g),y=0,b=0,w=0;y<r;++y)for(var k=0,C=S(e,p+1,p=h(b=o[y])),E=e;k<m;++k)(E=v(b>0?g[k]+" "+C:x(C,/&\f/g,g[k])))&&(s[w++]=E);return L(e,t,n,0===a?d:l,s,u,c,f)}function re(e,t,n,r){return L(e,t,n,c,g(T),S(e,2,-2),0,r)}function ae(e,t,n,r,a){return L(e,t,n,f,S(e,0,r),S(e,r+1,-1),r,a)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oe="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ue="6.1.17",ce="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/aerOs_ppt",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),pe=(new Set,Object.freeze([])),he=Object.freeze({});function ge(e,t,n){return void 0===n&&(n=he),e.theme!==n.theme&&e.theme||t||n.theme}var me=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ve=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function xe(e){return e.replace(ve,"-").replace(ye,"")}var be=/(a)(d)/gi,we=function(e){return String.fromCharCode(e+(e>25?39:97))};function Se(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=we(t%52)+n;return(we(t%52)+n).replace(be,"$1-$2")}var ke,je=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ce=function(e){return je(5381,e)};function Ee(e){return Se(Ce(e)>>>0)}function _e(e){return e.displayName||e.name||"Component"}function ze(e){return"string"==typeof e&&!0}var Ne="function"==typeof Symbol&&Symbol.for,Pe=Ne?Symbol.for("react.memo"):60115,Te=Ne?Symbol.for("react.forward_ref"):60112,Oe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Le={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Re={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ie=((ke={})[Te]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ke[Pe]=Re,ke);function De(e){return("type"in(t=e)&&t.type.$$typeof)===Pe?Re:"$$typeof"in e?Ie[e.$$typeof]:Oe;var t}var Me=Object.defineProperty,Fe=Object.getOwnPropertyNames,Ae=Object.getOwnPropertySymbols,$e=Object.getOwnPropertyDescriptor,Ue=Object.getPrototypeOf,He=Object.prototype;function Be(e,t,n){if("string"!=typeof t){if(He){var r=Ue(t);r&&r!==He&&Be(e,r,n)}var a=Fe(t);Ae&&(a=a.concat(Ae(t)));for(var i=De(e),o=De(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Le||n&&n[s]||o&&s in o||i&&s in i)){var u=$e(t,s);try{Me(e,s,u)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function We(e){return"object"==typeof e&&"styledComponentId"in e}function Ke(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qe(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ye(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qe(e,t,n){if(void 0===n&&(n=!1),!n&&!Ye(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=qe(e[r],t[r]);else if(Ye(t))for(var r in t)e[r]=qe(e[r],t[r]);return e}function Ge(e,t){Object.defineProperty(e,"toString",{value:t})}function Xe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Xe(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(ce);return t},e}(),Je=new Map,et=new Map,tt=1,nt=function(e){if(Je.has(e))return Je.get(e);for(;et.has(tt);)tt++;var t=tt++;return Je.set(e,t),et.set(t,e),t},rt=function(e,t){tt=t+1,Je.set(e,t),et.set(t,e)},at="style[".concat(oe,"][").concat(se,'="').concat(ue,'"]'),it=new RegExp("^".concat(oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ot=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},lt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ce),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(it);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(rt(c,u),ot(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},st=function(e){for(var t=document.querySelectorAll(at),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(oe)!==le&&(lt(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ut(){return n.nc}var ct=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(oe,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(oe,le),r.setAttribute(se,ue);var o=ut();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},dt=function(){function e(e){this.element=ct(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Xe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=ct(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),pt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ht=de,gt={isServer:!de,useCSSOMInjection:!fe},mt=function(){function e(e,t,n){void 0===e&&(e=he),void 0===t&&(t={});var a=this;this.options=r(r({},gt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&ht&&(ht=!1,st(this)),Ge(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return et.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(oe,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(ce)},i=0;i<n;i++)a(i);return r}(a)}))}return e.registerId=function(e){return nt(e)},e.prototype.rehydrate=function(){!this.server&&de&&st(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new pt(n):t?new dt(n):new ft(n)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(nt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(nt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vt=/&/g,yt=/^\s*\/\/.*$/gm;function xt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xt(e.children,t)),e}))}function bt(e){var t,n,r,a=void 0===e?he:e,i=a.options,o=void 0===i?he:i,l=a.plugins,s=void 0===l?pe:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(vt,n).replace(r,u))})),o.prefix&&c.push(J),c.push(X);var f=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(yt,""),u=ee(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(u=xt(u,o.namespace));var d,f=[];return G(u,function(e){var t=j(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return f.hash=s.length?s.reduce((function(e,t){return t.name||Xe(15),je(e,t.name)}),5381).toString():"",f}var wt=new mt,St=bt(),kt=e.createContext({shouldForwardProp:void 0,styleSheet:wt,stylis:St}),jt=(kt.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(kt)}function Et(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],i=Ct().styleSheet,l=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),s=(0,e.useMemo)((function(){return bt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){o()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var u=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:l,stylis:s}}),[t.shouldForwardProp,l,s]);return e.createElement(kt.Provider,{value:u},e.createElement(jt.Provider,{value:s},t.children))}var _t=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=St);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ge(this,(function(){throw Xe(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=St),this.name+e.hash},e}(),zt=function(e){return e>="A"&&e<="Z"};function Nt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;zt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Pt=function(e){return null==e||!1===e||""===e},Tt=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Pt(o)&&(Array.isArray(o)&&o.isCss||Ve(o)?r.push("".concat(Nt(i),":"),o,";"):Ye(o)?r.push.apply(r,a(a(["".concat(i," {")],Tt(o),!1),["}"],!1)):r.push("".concat(Nt(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ie||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ot(e,t,n,r){return Pt(e)?[]:We(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Ot(e(t),t,n,r):e instanceof _t?n?(e.inject(n,r),[e.getName(r)]):[e]:Ye(e)?Tt(e):Array.isArray(e)?Array.prototype.concat.apply(pe,e.map((function(e){return Ot(e,t,n,r)}))):[e.toString()];var a}function Lt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ve(n)&&!We(n))return!1}return!0}var Rt=Ce(ue),It=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Lt(e),this.componentId=t,this.baseHash=je(Rt,t),this.baseStyle=n,mt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ke(r,this.staticRulesId);else{var a=Qe(Ot(this.rules,e,t,n)),i=Se(je(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=Ke(r,i),this.staticRulesId=i}else{for(var l=je(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Qe(Ot(c,e,t,n));l=je(l,d+u),s+=d}}if(s){var f=Se(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Ke(r,f)}}return r},e}(),Dt=e.createContext(void 0);Dt.Consumer;var Mt={};new Set;function Ft(t,n,a){var i=We(t),o=t,l=!ze(t),s=n.attrs,u=void 0===s?pe:s,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":xe(e);Mt[n]=(Mt[n]||0)+1;var r="".concat(n,"-").concat(Ee(ue+n+Mt[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,f=n.displayName,p=void 0===f?function(e){return ze(e)?"styled.".concat(e):"Styled(".concat(_e(e),")")}(t):f,h=n.displayName&&n.componentId?"".concat(xe(n.displayName),"-").concat(n.componentId):n.componentId||d,g=i&&o.attrs?o.attrs.concat(u).filter(Boolean):u,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var v=o.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;m=function(e,t){return v(e,t)&&y(e,t)}}else m=v}var x=new It(a,h,i?o.componentStyle:void 0);function b(t,n){return function(t,n,a){var i=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,u=t.styledComponentId,c=t.target,d=e.useContext(Dt),f=Ct(),p=t.shouldForwardProp||f.shouldForwardProp,h=ge(n,d,l)||he,g=function(e,t,n){for(var a,i=r(r({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var l=Ve(a=e[o])?a(i):a;for(var s in l)i[s]="className"===s?Ke(i[s],l[s]):"style"===s?r(r({},i[s]),l[s]):l[s]}return t.className&&(i.className=Ke(i.className,t.className)),i}(i,n,h),m=g.as||c,v={};for(var y in g)void 0===g[y]||"$"===y[0]||"as"===y||"theme"===y&&g.theme===h||("forwardedAs"===y?v.as=g.forwardedAs:p&&!p(y,m)||(v[y]=g[y]));var x=function(e,t){var n=Ct();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,g),b=Ke(s,u);return x&&(b+=" "+x),g.className&&(b+=" "+g.className),v[ze(m)&&!me.has(m)?"class":"className"]=b,a&&(v.ref=a),(0,e.createElement)(m,v)}(w,t,n)}b.displayName=p;var w=e.forwardRef(b);return w.attrs=g,w.componentStyle=x,w.displayName=p,w.shouldForwardProp=m,w.foldedComponentIds=i?Ke(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=h,w.target=i?o.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)qe(e,a[r],!0);return e}({},o.defaultProps,e):e}}),Ge(w,(function(){return".".concat(w.styledComponentId)})),l&&Be(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function At(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var $t=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ve(e)||Ye(e))return $t(Ot(At(pe,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ot(r):$t(Ot(At(r,t)))}function Ht(e,t,n){if(void 0===n&&(n=he),!t)throw Xe(1,t);var i=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Ut.apply(void 0,a([r],i,!1)))};return i.attrs=function(a){return Ht(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Ht(e,t,r(r({},n),a))},i}var Bt=function(e){return Ht(Ft,e)},Vt=Bt;me.forEach((function(e){Vt[e]=Bt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Lt(e),mt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(Qe(Ot(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&mt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ut(),r=Qe([n&&'nonce="'.concat(n,'"'),"".concat(oe,'="true"'),"".concat(se,'="').concat(ue,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Xe(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Xe(2);var a=t.instance.toString();if(!a)return[];var i=((n={})[oe]="",n[se]=ue,n.dangerouslySetInnerHTML={__html:a},n),o=ut();return o&&(i.nonce=o),[e.createElement("style",r({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new mt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Xe(2);return e.createElement(Et,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Xe(3)}})(),"__sc-".concat(oe,"__");const Wt=Vt.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: ${e=>e.background||"white"};
  color: ${e=>e.color||"var(--neutral-color)"};
  position: relative;
`,Kt=Vt.div`
  max-width: 1200px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${e=>e.background||"transparent"};
  border-radius: 12px;
  padding: 30px;
  box-shadow: ${e=>e.boxShadow||"none"};
`,Qt=Vt.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
  color: ${e=>e.color||"inherit"};
`,Yt=Vt.h2`
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
  color: ${e=>e.color||"inherit"};
  font-weight: 600;
`,qt=(Vt.ul`
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
  
  li {
    margin-bottom: 15px;
    padding-left: 30px;
    position: relative;
    font-size: ${e=>e.fontSize||"20px"};
    
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 10px;
      width: 10px;
      height: 10px;
      background: var(--accent-color);
      border-radius: 50%;
    }
  }
`,Vt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  margin: 20px 0;
`),Gt=(Vt.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  width: 100%;
  margin: 20px 0;
`,Vt.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  h3 {
    font-size: 22px;
    margin-bottom: 10px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 16px;
    flex-grow: 1;
  }
`,Vt.div`
  background: var(--gradient);
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  margin: 20px 0;
  font-weight: 600;
`),Xt=(Vt.div`
  width: 60px;
  height: 60px;
  background: ${e=>e.background||"var(--gradient)"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 15px;
  margin-right: ${e=>e.marginRight||"0"};
  color: white;
  font-size: 24px;
`,Vt.div`
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    th {
      background-color: var(--primary-color);
      color: white;
      font-weight: 600;
    }
    
    tr:nth-child(even) {
      background-color: #f8f9fa;
    }
  }
`),Zt=(Vt.div`
  margin-top: 40px;
  text-align: center;
  
  button {
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 18px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  }
`,Vt.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
  }
`),Jt=(Vt.div`
  text-align: center;
  margin-bottom: 40px;
`,Vt.span`
  background: linear-gradient(to left, #ff6b6b 0%, #ffc107 25%, #00d084 50%, #0693e3 75%, #9b51e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
  animation: shimmer 4s linear infinite;
  
  @keyframes shimmer {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
`),en=Vt.div`
  width: 80px;
  height: 4px;
  background: var(--gradient);
  margin: 20px auto;
  border-radius: 2px;
`;var tn=n(579);const nn=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"})}),rn=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"})}),an=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"})}),on=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M21 11.5c0-1.65-1.35-3-3-3-.95 0-1.8.46-2.33 1.17-.56-.89-1.55-1.5-2.67-1.5-.95 0-1.8.46-2.33 1.17-.56-.89-1.55-1.5-2.67-1.5-1.65 0-3 1.35-3 3V15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3.5zM16 14H8v-3c0-.55.45-1 1-1s1 .45 1 1v2h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2v-2c0-.55.45-1 1-1s1 .45 1 1v3z"})}),ln=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zm-6 0h5v5H6z"})}),sn=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M19.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM12 19c.93 0 1.78-.36 2.44-.95l-5.83-5.83c-.59.66-.95 1.51-.95 2.44 0 2.21 1.79 4 4 4zm0-14c-.93 0-1.78.36-2.44.95l5.83 5.83c.59-.66.95-1.51.95-2.44 0-2.21-1.79-4-4-4zm7.5 3c0-2.21-1.79-4-4-4-.93 0-1.78.36-2.44.95l5.83 5.83c.59-.66.95-1.51.95-2.44zM4.5 12c0 1.77 1.02 3.29 2.5 4.03V7.97C5.52 8.71 4.5 10.23 4.5 12zm7.5 7c-.93 0-1.78-.36-2.44-.95l5.83-5.83c.59.66.95 1.51.95 2.44 0 2.21-1.79 4-4 4z"})}),un=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})}),cn=()=>(0,tn.jsxs)("svg",{width:"80",height:"40",viewBox:"0 0 80 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,tn.jsx)("path",{d:"M10 20C10 14.477 14.477 10 20 10H60C65.523 10 70 14.477 70 20C70 25.523 65.523 30 60 30H20C14.477 30 10 25.523 10 20Z",fill:"url(#paint0_linear)"}),(0,tn.jsx)("path",{d:"M25 20L30 15H50L55 20L50 25H30L25 20Z",fill:"white"}),(0,tn.jsx)("defs",{children:(0,tn.jsxs)("linearGradient",{id:"paint0_linear",x1:"10",y1:"20",x2:"70",y2:"20",gradientUnits:"userSpaceOnUse",children:[(0,tn.jsx)("stop",{stopColor:"#1a3c6e"}),(0,tn.jsx)("stop",{offset:"1",stopColor:"#00a0b0"})]})})]}),dn=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"})}),fn=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.44 16.44L12 18.88l-1.56.56L11 17l-1.44-1.44L12 15l1.44 1.44L12 18.88zM12 6l1.44 1.44L12 8.88l-1.44-1.44L12 6zM7.56 8.88L6 8.44l1.44-1.44L8.88 6l.56 1.44L11 8.88 8.88 10l-.56-1.44L7.56 8.88zM19 11.44l-1.44 1.44L16.12 12l1.44-1.44L16.12 9.12 18.56 8l.44 1.44L17.56 11l1.44.44z"})}),pn=()=>(0,tn.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,tn.jsx)("path",{d:"M11 14h2v2h-2z"}),(0,tn.jsx)("path",{d:"M16.5 11.5c-.28 0-.5.22-.5.5v6h3v-6c0-.28-.22-.5-.5-.5h-2z"}),(0,tn.jsx)("path",{d:"M15 18h-2v-2H9v2H7v2h10v-2h-2z"}),(0,tn.jsx)("circle",{cx:"17.5",cy:"6.5",r:"1.5"}),(0,tn.jsx)("path",{d:"M12 7V3H7v4.88c0 .66.37 1.25.95 1.55l3.35 1.68c.66.33 1.41-.23 1.41-.96V9c0-.55.45-1 1-1h.29c.31 0 .62.06.91.17l2.29.87c.85.32 1.5.97 1.8 1.83V9c0-.55-.45-1-1-1h-.29c-.66 0-1.18-.58-1.07-1.23.05-.37.28-.69.63-.85l-.64-.32C15.96 5.3 14.7 5 13.4 5c-.5 0-.91.37-.98.86-.32 2.08-2.14 3.64-4.22 3.64-.47 0-.93-.07-1.37-.2-.27-.08-.54.12-.54.39 0 .15.08.29.21.37 3.13 1.94 2.99 6.94 2.99 6.94h1.51V10c0-.55.45-1 1-1s1 .45 1 1v7z"})]}),hn=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"})}),gn=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Qe(Ut.apply(void 0,a([e],t,!1))),i=Ee(r);return new _t(i,r)})`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,mn=Vt(Wt)`
  background: linear-gradient(135deg, rgba(26, 60, 110, 0.9) 0%, rgba(0, 160, 176, 0.8) 100%), 
              url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 70%);
    z-index: 1;
  }
`,vn=Vt.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${gn} 1s ease-out;
`,yn=Vt(Qt)`
  font-size: 56px;
  margin-bottom: 15px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`,xn=Vt.p`
  font-size: 20px;
  margin-top: 40px;
  font-weight: 500;
  font-style: italic;
  opacity: 0;
  animation: ${gn} 1s ease-out forwards;
  animation-delay: 0.5s;
`,bn=Vt.div`
  margin-top: 60px;
  font-size: 18px;
  opacity: 0;
  animation: ${gn} 1s ease-out forwards;
  animation-delay: 0.8s;
  
  p {
    margin: 5px 0;
  }
  
  .name {
    font-weight: 600;
  }
`,wn=Vt(Zt)`
  opacity: 0;
  animation: ${gn} 1s ease-out forwards;
  animation-delay: 1s;
`,Sn=()=>(0,tn.jsx)(mn,{children:(0,tn.jsxs)(vn,{children:[(0,tn.jsxs)(yn,{children:["Personalized Training with ",(0,tn.jsx)(Jt,{children:"AI & aerOS"})]}),(0,tn.jsx)(Yt,{children:"Empowering athletes with intelligent, private, real-time coaching"}),(0,tn.jsx)(xn,{children:"The Future of Fitness is Edge-Intelligent"}),(0,tn.jsxs)(bn,{children:[(0,tn.jsx)("p",{className:"name",children:"Zhenyi Li"}),(0,tn.jsx)("p",{children:(new Date).toLocaleDateString()})]}),(0,tn.jsx)(wn,{children:(0,tn.jsx)(cn,{})})]})}),kn=Vt(Wt)`
  background: linear-gradient(135deg, #f0f6ff 0%, #e6f3f5 100%);
`,jn=Vt(Qt)`
  color: var(--primary-color);
  margin-bottom: 20px;
`,Cn=Vt.div`
  font-size: 18px;
  line-height: 1.6;
  margin: 20px 0;
  color: var(--neutral-color);
  text-align: justify;
`,En=Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,_n=Vt.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px;
`,zn=(Vt.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 2;
  text-align: center;
`,Vt.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  font-size: 14px;
  padding: 10px;
  text-align: center;
  font-weight: 600;
  color: var(--primary-color);
  
  &.node-1 {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.node-2 {
    top: 35%;
    right: 0;
  }
  
  &.node-3 {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.node-4 {
    top: 35%;
    left: 0;
  }
  
  .icon {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
    color: var(--secondary-color);
  }
`,Vt.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px dashed var(--secondary-color);
  z-index: 0;
`),Nn=Vt.div`
  margin-top: 20px;
  
  h3 {
    font-size: 22px;
    color: var(--primary-color);
    margin-bottom: 15px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 1.5;
      
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 8px;
        width: 10px;
        height: 10px;
        background: var(--accent-color);
        border-radius: 50%;
      }
    }
  }
`,Pn=()=>(0,tn.jsxs)(kn,{children:[(0,tn.jsxs)(Kt,{children:[(0,tn.jsx)(jn,{children:"What is aerOS?"}),(0,tn.jsx)(en,{}),(0,tn.jsxs)(qt,{children:[(0,tn.jsxs)("div",{children:[(0,tn.jsx)(Cn,{children:"aerOS (Autonomous, scalablE, tRustworthy, intelligent European meta Operating System) is a modular meta operating system for the IoT edge-cloud continuum. It orchestrates services on heterogeneous hardware nodes, enabling distributed computing and storage while maintaining data privacy and trust. aerOS focuses on distributed data management to make applications more intelligent and proactive, bringing services closer to data sources without sacrificing aggregated analysis."}),(0,tn.jsxs)(Nn,{children:[(0,tn.jsx)("h3",{children:"Key Features"}),(0,tn.jsxs)("ul",{children:[(0,tn.jsx)("li",{children:"Optimal orchestration across the IoT edge-cloud continuum"}),(0,tn.jsx)("li",{children:"Distributed AI with explainability and privacy preservation"}),(0,tn.jsx)("li",{children:"Decentralized security and trust framework"}),(0,tn.jsx)("li",{children:"Data autonomy with ownership control and governance"}),(0,tn.jsx)("li",{children:"Intelligent network functions with latency control"})]})]})]}),(0,tn.jsx)(En,{children:(0,tn.jsxs)(_n,{children:[(0,tn.jsx)(zn,{}),(0,tn.jsx)("img",{src:"https://aeros-project.eu/wp-content/uploads/2022/07/aeros-vision.png",alt:"aerOS Architecture",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"120%",maxWidth:"600px",height:"auto",zIndex:1,boxShadow:"0 6px 12px rgba(0, 0, 0, 0.1)"}})]})})]})]}),(0,tn.jsx)(Zt,{children:(0,tn.jsx)(cn,{})})]}),Tn=Vt(Wt)`
  background-color: #f8f9fa;
`,On=Vt(Qt)`
  color: var(--primary-color);
  margin-bottom: 30px;
`,Ln=Vt.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`,Rn=Vt.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  
  .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    background: linear-gradient(135deg, #ff6b6b 0%, #f39c12 100%);
    color: white;
    flex-shrink: 0;
  }
  
  .content {
    h3 {
      font-size: 22px;
      margin-bottom: 5px;
      color: var(--neutral-color);
    }
    
    p {
      color: #666;
      font-size: 16px;
    }
  }
`,In=Vt.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`,Dn=()=>(0,tn.jsxs)(Tn,{children:[(0,tn.jsxs)(Kt,{children:[(0,tn.jsx)(On,{children:"Today's Training Challenges"}),(0,tn.jsxs)(qt,{children:[(0,tn.jsx)(In,{children:(0,tn.jsx)("img",{src:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1",alt:"Athlete facing training challenges",style:{width:"100%",height:"auto",maxHeight:"500px",objectFit:"cover"}})}),(0,tn.jsxs)(Ln,{children:[(0,tn.jsxs)(Rn,{children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsx)(nn,{})}),(0,tn.jsxs)("div",{className:"content",children:[(0,tn.jsx)("h3",{children:"Cloud Dependency"}),(0,tn.jsx)("p",{children:"Latency issues and privacy concerns with cloud-based systems"})]})]}),(0,tn.jsxs)(Rn,{children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsx)(rn,{})}),(0,tn.jsxs)("div",{className:"content",children:[(0,tn.jsx)("h3",{children:"Infrastructure Costs"}),(0,tn.jsx)("p",{children:"Expensive equipment creating high barriers to entry"})]})]}),(0,tn.jsxs)(Rn,{children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsx)(an,{})}),(0,tn.jsxs)("div",{className:"content",children:[(0,tn.jsx)("h3",{children:"Static Programming"}),(0,tn.jsx)("p",{children:"Training plans that don't adapt to real-time performance"})]})]})]})]}),(0,tn.jsx)(Gt,{children:"The Gap: No unified platform that's fast, private, and adaptive"})]}),(0,tn.jsx)(Zt,{children:(0,tn.jsx)(cn,{})})]}),Mn=Vt(Wt)`
  background-color: white;
`,Fn=Vt(Qt)`
  color: var(--primary-color);
  margin-bottom: 20px;
`,An=Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  position: relative;
`,$n=Vt.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  z-index: 2;
  position: relative;
`,Un=Vt.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  margin-top: 60px;
`,Hn=Vt.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  .icon-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border: 3px solid var(--secondary-color);
    
    svg {
      width: 60px;
      height: 60px;
      color: var(--primary-color);
    }
  }
  
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 16px;
    color: var(--neutral-color);
    line-height: 1.4;
  }
`,Bn=Vt.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border: 2px dashed var(--secondary-color);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`,Vn=Vt.div`
  margin-top: 50px;
  text-align: center;
  font-weight: 600;
  color: var(--secondary-color);
  font-size: 18px;
`,Wn=()=>(0,tn.jsxs)(Mn,{children:[(0,tn.jsxs)(Kt,{children:[(0,tn.jsx)(Fn,{children:"Solution Overview"}),(0,tn.jsx)(en,{}),(0,tn.jsxs)(An,{children:[(0,tn.jsx)(Bn,{}),(0,tn.jsx)($n,{children:"Smart Decentralized Training"}),(0,tn.jsxs)(Un,{children:[(0,tn.jsxs)(Hn,{children:[(0,tn.jsx)("div",{className:"icon-container",children:(0,tn.jsx)(on,{})}),(0,tn.jsx)("h3",{children:"AI Coaching"}),(0,tn.jsx)("p",{children:"Adaptive guidance tailored to your progress"})]}),(0,tn.jsxs)(Hn,{children:[(0,tn.jsx)("div",{className:"icon-container",children:(0,tn.jsx)(ln,{})}),(0,tn.jsx)("h3",{children:"Edge Computing"}),(0,tn.jsx)("p",{children:"Real-time feedback without delays"})]}),(0,tn.jsxs)(Hn,{children:[(0,tn.jsx)("div",{className:"icon-container",children:(0,tn.jsx)(sn,{})}),(0,tn.jsx)("h3",{children:"aerOS"}),(0,tn.jsx)("p",{children:"Seamless orchestration across your devices"})]})]})]}),(0,tn.jsx)(Vn,{children:"Privacy-first design with intelligent edge computing"})]}),(0,tn.jsx)(Zt,{children:(0,tn.jsx)(cn,{})})]}),Kn=Vt(Wt)`
  background: linear-gradient(180deg, #f0f6ff 0%, #e0f2f7 100%);
`,Qn=Vt(Qt)`
  color: var(--primary-color);
  margin-bottom: 20px;
`,Yn=Vt.div`
  width: 100%;
  margin: 50px 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient);
    transform: translateY(-50%);
    z-index: 1;
    border-radius: 4px;
  }
`,qn=Vt.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`,Gn=Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  
  .node {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${e=>e.active?"var(--gradient)":"white"};
    border: 3px solid var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    
    .time {
      font-size: 16px;
      font-weight: 600;
      color: ${e=>e.active?"white":"var(--primary-color)"};
    }
  }
  
  h3 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 14px;
    text-align: center;
    color: var(--neutral-color);
    line-height: 1.4;
  }
`,Xn=Vt.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-left: 4px solid var(--accent-color);
  padding: 15px;
  margin-top: 30px;
  border-radius: 4px;
  font-size: 16px;
  color: var(--neutral-color);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`,Zn=()=>(0,tn.jsxs)(Kn,{children:[(0,tn.jsxs)(Kt,{children:[(0,tn.jsx)(Qn,{children:"A Day with Your Intelligent Training System"}),(0,tn.jsx)(en,{}),(0,tn.jsx)(Yn,{children:(0,tn.jsxs)(qn,{children:[(0,tn.jsxs)(Gn,{active:!0,children:[(0,tn.jsx)("div",{className:"node",children:(0,tn.jsx)("span",{className:"time",children:"7AM"})}),(0,tn.jsx)("h3",{children:"Morning Check-in"}),(0,tn.jsx)("p",{children:"System evaluates recovery and adapts today's plan"})]}),(0,tn.jsxs)(Gn,{active:!0,children:[(0,tn.jsx)("div",{className:"node",children:(0,tn.jsx)("span",{className:"time",children:"12PM"})}),(0,tn.jsx)("h3",{children:"During Workout"}),(0,tn.jsx)("p",{children:"Real-time form correction and intensity management"})]}),(0,tn.jsxs)(Gn,{active:!0,children:[(0,tn.jsx)("div",{className:"node",children:(0,tn.jsx)("span",{className:"time",children:"6PM"})}),(0,tn.jsx)("h3",{children:"Post-Session"}),(0,tn.jsx)("p",{children:"Immediate feedback and goal adjustments"})]}),(0,tn.jsxs)(Gn,{active:!1,children:[(0,tn.jsx)("div",{className:"node",children:(0,tn.jsx)("span",{className:"time",children:"11PM"})}),(0,tn.jsx)("h3",{children:"Overnight"}),(0,tn.jsx)("p",{children:"System learns and updates while maintaining data privacy"})]})]})}),(0,tn.jsx)(Xn,{children:"All processing happens locally - your data stays yours"})]}),(0,tn.jsx)(Zt,{children:(0,tn.jsx)(cn,{})})]}),Jn=Vt(Wt)`
  background-color: white;
`,er=Vt(Qt)`
  color: var(--primary-color);
  margin-bottom: 20px;
`,tr=Vt.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,nr=Vt.div`
  width: 100%;
  padding: 20px;
  background-color: ${e=>e.bgColor||"#f8f9fa"};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    width: 6px;
    height: 100%;
    background-color: ${e=>e.accentColor||"var(--primary-color)"};
    border-radius: 3px;
  }
  
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    padding-left: 20px;
    color: ${e=>e.accentColor||"var(--primary-color)"};
  }
`,rr=Vt.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
  .device {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    
    .icon {
      width: 60px;
      height: 60px;
      background-color: #f0f0f0;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;
      
      img {
        width: 32px;
        height: 32px;
      }
    }
    
    p {
      font-size: 14px;
      text-align: center;
      color: var(--neutral-color);
    }
  }
`,ar=Vt.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #666;
  
  svg {
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color: var(--secondary-color);
  }
`,ir=Vt.div`
  background-color: #f0f8ff;
  border: 1px dashed var(--primary-color);
  padding: 15px;
  margin-top: 20px;
  border-radius: 4px;
  font-size: 14px;
  color: var(--primary-color);
  text-align: center;
  font-style: italic;
`,or=Vt.div`
  width: 100%;
  margin: 30px 0;
  position: relative;
  height: 150px;
  display: flex;
  justify-content: center;
`,lr=Vt.div`
  position: absolute;
  width: ${e=>e.width||"200px"};
  height: 30px;
  top: ${e=>e.top||"50%"};
  left: ${e=>e.left||"auto"};
  right: ${e=>e.right||"auto"};
  transform: ${e=>e.transform||"none"};
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${e=>e.color||"var(--primary-color)"};
  }
  
  &:after {
    content: '';
    position: absolute;
    right: ${e=>"right"===e.direction?"0":"auto"};
    left: ${e=>"left"===e.direction?"0":"auto"};
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: ${e=>"left"===e.direction?`10px solid ${e.color||"var(--primary-color)"}`:"none"};
    border-left: ${e=>"right"===e.direction?`10px solid ${e.color||"var(--primary-color)"}`:"none"};
  }
  
  .label {
    position: absolute;
    top: -20px;
    background: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    color: ${e=>e.color||"var(--primary-color)"};
    white-space: nowrap;
  }
  
  .data-type {
    position: absolute;
    bottom: -20px;
    font-size: 10px;
    color: #666;
  }
`,sr=Vt.div`
  position: absolute;
  top: ${e=>e.top||"50%"};
  left: ${e=>e.left||"auto"};
  right: ${e=>e.right||"auto"};
  transform: ${e=>e.transform||"translateY(-50%)"};
  width: 50px;
  height: 50px;
  background: ${e=>e.bg||"white"};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  
  img {
    width: 30px;
    height: 30px;
  }
  
  .node-label {
    position: absolute;
    bottom: -25px;
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-color);
    text-align: center;
    width: 100px;
  }
`,ur=()=>(0,tn.jsxs)(Jn,{children:[(0,tn.jsxs)(Kt,{children:[(0,tn.jsx)(er,{children:"Intelligent Edge Architecture"}),(0,tn.jsx)(en,{}),(0,tn.jsxs)(tr,{children:[(0,tn.jsxs)(nr,{bgColor:"#e7f5f6",accentColor:"#00a0b0",children:[(0,tn.jsx)("h3",{children:"Device Layer"}),(0,tn.jsxs)(rr,{children:[(0,tn.jsxs)("div",{className:"device",children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/apple-watch.png",alt:"Smartwatch"})}),(0,tn.jsx)("p",{children:"Smartwatch"})]}),(0,tn.jsxs)("div",{className:"device",children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/iphone.png",alt:"Smartphone"})}),(0,tn.jsx)("p",{children:"Smartphone"})]}),(0,tn.jsxs)("div",{className:"device",children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,tn.jsx)("rect",{x:"3",y:"3",width:"18",height:"12",rx:"2"}),(0,tn.jsx)("circle",{cx:"12",cy:"8",r:"3"}),(0,tn.jsx)("line",{x1:"3",y1:"15",x2:"7",y2:"20"}),(0,tn.jsx)("line",{x1:"21",y1:"15",x2:"17",y2:"20"}),(0,tn.jsx)("line",{x1:"7",y1:"20",x2:"17",y2:"20"})]})}),(0,tn.jsx)("p",{children:"Gym Camera"})]}),(0,tn.jsxs)("div",{className:"device",children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/treadmill.png",alt:"Treadmill"})}),(0,tn.jsx)("p",{children:"Treadmill"})]})]})]}),(0,tn.jsxs)(ar,{children:[(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,tn.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})}),"Secure Local Data Flow",(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,tn.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})]}),(0,tn.jsxs)(nr,{bgColor:"#e0f0ff",accentColor:"#1a3c6e",children:[(0,tn.jsx)("h3",{children:"Edge Layer"}),(0,tn.jsxs)(rr,{children:[(0,tn.jsxs)("div",{className:"device",children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/artificial-intelligence.png",alt:"AI Engine"})}),(0,tn.jsx)("p",{children:"Local AI Inference Engine"})]}),(0,tn.jsxs)("div",{className:"device",children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/mesh.png",alt:"aerOS"})}),(0,tn.jsx)("p",{children:"aerOS Coordination Node"})]})]})]}),(0,tn.jsxs)(ar,{children:[(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,tn.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})}),"Optional Encrypted Sync",(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,tn.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})]}),(0,tn.jsxs)(nr,{bgColor:"#f0f0f0",accentColor:"#7cb518",children:[(0,tn.jsx)("h3",{children:"Cloud Layer"}),(0,tn.jsxs)(rr,{children:[(0,tn.jsxs)("div",{className:"device",children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/dashboard.png",alt:"Dashboard"})}),(0,tn.jsx)("p",{children:"Analytics Dashboard"})]}),(0,tn.jsxs)("div",{className:"device",children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,tn.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,tn.jsx)("polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}),(0,tn.jsx)("polyline",{points:"7.5 19.79 7.5 14.6 3 12"}),(0,tn.jsx)("polyline",{points:"21 12 16.5 14.6 16.5 19.79"}),(0,tn.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),(0,tn.jsx)("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]})}),(0,tn.jsx)("p",{children:"Federated Model Updates"})]})]})]}),(0,tn.jsxs)(or,{children:[(0,tn.jsxs)(sr,{left:"10%",bg:"#e7f5f6",children:[(0,tn.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/iphone.png",alt:"Device"}),(0,tn.jsx)("div",{className:"node-label",children:"Device"})]}),(0,tn.jsxs)(lr,{width:"25%",left:"18%",direction:"right",color:"#00a0b0",children:[(0,tn.jsx)("div",{className:"label",children:"Secure Local Transfer"}),(0,tn.jsx)("div",{className:"data-type",children:"Sensor Data, Events"})]}),(0,tn.jsxs)(sr,{left:"45%",transform:"translate(-50%, -50%)",bg:"#e0f0ff",children:[(0,tn.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/artificial-intelligence.png",alt:"Edge AI"}),(0,tn.jsx)("div",{className:"node-label",children:"Edge AI Engine"})]}),(0,tn.jsxs)(lr,{width:"25%",left:"55%",direction:"right",color:"#1a3c6e",children:[(0,tn.jsx)("div",{className:"label",children:"Conditional Sync"}),(0,tn.jsx)("div",{className:"data-type",children:"Aggregated Data"})]}),(0,tn.jsxs)(sr,{right:"10%",bg:"#f0f0f0",children:[(0,tn.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/cloud.png",alt:"Cloud"}),(0,tn.jsx)("div",{className:"node-label",children:"Cloud Services"})]})]})]}),(0,tn.jsx)(ir,{children:"Edge-first design ensures operation even with limited connectivity"})]}),(0,tn.jsx)(Zt,{children:(0,tn.jsx)(cn,{})})]}),cr=Vt(Wt)`
  background-color: #f8f9fa;
`,dr=Vt(Qt)`
  color: var(--primary-color);
  margin-bottom: 20px;
`,fr=Vt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  margin: 40px 0;
`,pr=Vt.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    
    .capability-details {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${e=>e.iconBg||"var(--gradient)"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    color: white;
    
    img {
      width: 35px;
      height: 35px;
    }
  }
  
  h3 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 12px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 14px;
    text-align: center;
    color: var(--neutral-color);
    line-height: 1.4;
  }
`,hr=Vt.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 100%);
  padding: 15px;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
  border-top: 1px solid #eee;
  
  ul {
    padding-left: 20px;
    margin: 0;
    
    li {
      font-size: 12px;
      margin-bottom: 5px;
      color: var(--neutral-color);
      text-align: left;
    }
  }
`,gr=Vt.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,mr=Vt.h3`
  font-size: 20px;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 20px;
`,vr=Vt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,yr=Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  
  .node-icon {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background: ${e=>e.bgColor||"var(--primary-color)"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    color: white;
    
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  .node-label {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: var(--neutral-color);
  }
`,xr=Vt.div`
  flex-grow: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--secondary-color) 50%, transparent 100%);
  position: relative;
  margin: 0 10px;
  
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid var(--secondary-color);
  }
  
  .arrow-label {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: var(--secondary-color);
    white-space: nowrap;
  }
`,br=()=>(0,tn.jsxs)(cr,{children:[(0,tn.jsxs)(Kt,{children:[(0,tn.jsx)(dr,{children:"Intelligent Coaching Capabilities"}),(0,tn.jsx)(en,{}),(0,tn.jsxs)(gr,{children:[(0,tn.jsx)(mr,{children:"AI-Driven Coaching Process"}),(0,tn.jsxs)(vr,{children:[(0,tn.jsxs)(yr,{bgColor:"#1a3c6e",children:[(0,tn.jsx)("div",{className:"node-icon",children:(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",children:(0,tn.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"})})}),(0,tn.jsx)("div",{className:"node-label",children:"Data Collection"})]}),(0,tn.jsx)(xr,{children:(0,tn.jsx)("div",{className:"arrow-label",children:"Secure Transfer"})}),(0,tn.jsxs)(yr,{bgColor:"#00a0b0",children:[(0,tn.jsx)("div",{className:"node-icon",children:(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",children:(0,tn.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H7v-8h3v8zm7 0h-5v-8h5v8z"})})}),(0,tn.jsx)("div",{className:"node-label",children:"Analysis"})]}),(0,tn.jsx)(xr,{children:(0,tn.jsx)("div",{className:"arrow-label",children:"AI Processing"})}),(0,tn.jsxs)(yr,{bgColor:"#7cb518",children:[(0,tn.jsx)("div",{className:"node-icon",children:(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",children:(0,tn.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})})}),(0,tn.jsx)("div",{className:"node-label",children:"Personalization"})]}),(0,tn.jsx)(xr,{children:(0,tn.jsx)("div",{className:"arrow-label",children:"Adaptation"})}),(0,tn.jsxs)(yr,{bgColor:"#1a3c6e",children:[(0,tn.jsx)("div",{className:"node-icon",children:(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",children:(0,tn.jsx)("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})})}),(0,tn.jsx)("div",{className:"node-label",children:"Feedback"})]})]})]}),(0,tn.jsx)(fr,{children:[{title:"Workout Personalization",description:"Adapts to your performance patterns and goals",icon:"https://img.icons8.com/ios/50/ffffff/property-script.png",bgColor:"linear-gradient(135deg, #1a3c6e 0%, #2a5298 100%)",details:["User preference learning","Performance trend analysis","Adaptive difficulty scaling","Goal-based optimization"]},{title:"Injury Prevention",description:"Detects form issues before they cause problems",icon:"https://img.icons8.com/ios/50/ffffff/protection-mask.png",bgColor:"linear-gradient(135deg, #00a0b0 0%, #39c8bb 100%)",details:["Real-time form analysis","Joint stress monitoring","Movement pattern recognition","Preventive feedback alerts"]},{title:"Fatigue Management",description:"Adjusts intensity based on biological markers",icon:"https://img.icons8.com/ios/50/ffffff/heart-with-pulse.png",bgColor:"linear-gradient(135deg, #7cb518 0%, #96d629 100%)",details:["Heart rate variability analysis","Sleep quality integration","Recovery state assessment","Adaptive intensity control"]},{title:"Form Correction",description:"Real-time visual analysis of movement patterns",icon:"https://img.icons8.com/ios/50/ffffff/exercise.png",bgColor:"linear-gradient(135deg, #1a3c6e 0%, #2a5298 100%)",details:["Computer vision movement tracking","Pose estimation analysis","Comparative benchmarking","Progressive correction guidance"]},{title:"Recovery Tracking",description:"Monitors wellness markers to optimize rest periods",icon:"https://img.icons8.com/ios/50/ffffff/sleeping.png",bgColor:"linear-gradient(135deg, #00a0b0 0%, #39c8bb 100%)",details:["Muscle recovery prediction","Rest interval optimization","Active vs. passive recovery balance","Physiological marker tracking"]},{title:"Nutrition Integration",description:"Syncs with your diet to maximize results",icon:"https://img.icons8.com/ios/50/ffffff/natural-food.png",bgColor:"linear-gradient(135deg, #7cb518 0%, #96d629 100%)",details:["Nutrient timing optimization","Meal-workout synchronization","Hydration-performance correlation","Macronutrient balance suggestions"]}].map(((e,t)=>(0,tn.jsxs)(pr,{iconBg:e.bgColor,children:[(0,tn.jsx)("div",{className:"icon",children:(0,tn.jsx)("img",{src:e.icon,alt:e.title})}),(0,tn.jsx)("h3",{children:e.title}),(0,tn.jsx)("p",{children:e.description}),(0,tn.jsx)(hr,{className:"capability-details",children:(0,tn.jsx)("ul",{children:e.details.map(((e,t)=>(0,tn.jsx)("li",{children:e},t)))})})]},t)))})]}),(0,tn.jsx)(Zt,{children:(0,tn.jsx)(cn,{})})]}),wr=Vt(Wt)`
  background-color: #f0f6ff;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a3c6e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`,Sr=Vt(Qt)`
  color: var(--primary-color);
  margin-bottom: 20px;
`,kr=Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  position: relative;
`,jr=Vt.div`
  margin-bottom: 50px;
  position: relative;
  
  .aeros-large-logo {
    width: 220px;
    height: 100px;
    background: var(--gradient);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    
    svg {
      width: 180px;
      height: 80px;
    }
  }
`,Cr=Vt.div`
  position: relative;
  height: 80px;
  width: 100%;
  max-width: 800px;
  
  .line {
    position: absolute;
    background-color: var(--secondary-color);
    
    &.vertical {
      left: 50%;
      width: 2px;
      height: 100%;
      transform: translateX(-50%);
    }
    
    &.horizontal-left, &.horizontal-right {
      top: 50%;
      height: 2px;
      width: calc(33.33% - 20px);
      transform: translateY(-50%);
    }
    
    &.horizontal-left {
      left: 0;
    }
    
    &.horizontal-right {
      right: 0;
    }
  }
`,Er=Vt.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
`,_r=Vt.div`
  width: 30%;
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: var(--primary-color);
    text-align: center;
    position: relative;
    padding-bottom: 15px;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 60px;
      height: 3px;
      background: var(--gradient);
      transform: translateX(-50%);
      border-radius: 3px;
    }
  }
  
  p {
    font-size: 15px;
    color: var(--neutral-color);
    margin-bottom: 15px;
    text-align: center;
  }
`,zr=Vt.div`
  margin-top: 15px;
  
  h4 {
    font-size: 16px;
    color: var(--primary-color);
    margin-bottom: 10px;
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      font-size: 14px;
      
      .check {
        margin-right: 10px;
        color: var(--accent-color);
        flex-shrink: 0;
      }
    }
  }
`,Nr=()=>(0,tn.jsxs)(wr,{children:[(0,tn.jsxs)(Kt,{children:[(0,tn.jsx)(Sr,{children:"aerOS: The Intelligent Orchestration Layer"}),(0,tn.jsx)(en,{}),(0,tn.jsxs)(kr,{children:[(0,tn.jsx)(jr,{children:(0,tn.jsx)("div",{className:"aeros-large-logo",children:(0,tn.jsx)(cn,{})})}),(0,tn.jsxs)(Cr,{children:[(0,tn.jsx)("div",{className:"line vertical"}),(0,tn.jsx)("div",{className:"line horizontal-left"}),(0,tn.jsx)("div",{className:"line horizontal-right"})]}),(0,tn.jsxs)(Er,{children:[(0,tn.jsxs)(_r,{children:[(0,tn.jsx)("h3",{children:"Device Management"}),(0,tn.jsx)("p",{children:"Seamless connection across all training equipment"})]}),(0,tn.jsxs)(_r,{children:[(0,tn.jsx)("h3",{children:"Edge-Cloud Cooperation"}),(0,tn.jsx)("p",{children:"Intelligent data routing based on privacy needs"})]}),(0,tn.jsxs)(_r,{children:[(0,tn.jsx)("h3",{children:"System Guarantees"}),(0,tn.jsx)(zr,{children:(0,tn.jsxs)("ul",{children:[(0,tn.jsxs)("li",{children:[(0,tn.jsx)("span",{className:"check",children:(0,tn.jsx)(un,{})}),(0,tn.jsx)("span",{children:"Performance: Under 10ms response for critical feedback"})]}),(0,tn.jsxs)("li",{children:[(0,tn.jsx)("span",{className:"check",children:(0,tn.jsx)(un,{})}),(0,tn.jsx)("span",{children:"Privacy: GDPR-compliant data sovereignty by design"})]}),(0,tn.jsxs)("li",{children:[(0,tn.jsx)("span",{className:"check",children:(0,tn.jsx)(un,{})}),(0,tn.jsx)("span",{children:"Resilience: Continues operating even when cloud is unavailable"})]})]})})]})]})]})]}),(0,tn.jsx)(Zt,{children:(0,tn.jsx)(cn,{})})]}),Pr=Vt(Wt)`
  background-color: white;
`,Tr=Vt(Qt)`
  color: var(--primary-color);
  margin-bottom: 20px;
`,Or=Vt(Xt)`
  margin: 40px 0;
  
  table {
    th {
      font-size: 18px;
    }
    
    td {
      font-size: 16px;
      padding: 15px;
      
      &.impact {
        font-weight: 600;
        color: var(--primary-color);
        display: flex;
        align-items: center;
        
        .trend-icon {
          margin-right: 10px;
          color: var(--accent-color);
          
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`,Lr=()=>(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,tn.jsx)("path",{d:"M7 14l5-5 5 5H7z"})}),Rr=Vt.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 300px;
  opacity: 0.1;
  z-index: 0;
  
  svg {
    width: 100%;
    height: 100%;
    color: var(--primary-color);
  }
`,Ir=()=>(0,tn.jsxs)(Pr,{children:[(0,tn.jsxs)(Kt,{children:[(0,tn.jsx)(Tr,{children:"Measurable Advantages"}),(0,tn.jsx)(en,{}),(0,tn.jsx)(Or,{children:(0,tn.jsxs)("table",{children:[(0,tn.jsx)("thead",{children:(0,tn.jsxs)("tr",{children:[(0,tn.jsx)("th",{children:"Metric"}),(0,tn.jsx)("th",{children:"Impact"})]})}),(0,tn.jsx)("tbody",{children:[{metric:"Real-time feedback",impact:"40% faster skill acquisition"},{metric:"Data privacy",impact:"85% increase in user trust and adoption"},{metric:"AI model updates",impact:"Continuously improving personalization"},{metric:"Infrastructure costs",impact:"70% reduction through edge computing"},{metric:"Cloud bandwidth",impact:"90% decrease with edge-first architecture"}].map(((e,t)=>(0,tn.jsxs)("tr",{children:[(0,tn.jsx)("td",{children:e.metric}),(0,tn.jsxs)("td",{className:"impact",children:[(0,tn.jsx)("span",{className:"trend-icon",children:(0,tn.jsx)(Lr,{})}),e.impact]})]},t)))})]})})]}),(0,tn.jsx)(Rr,{children:(0,tn.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",children:(0,tn.jsx)("path",{d:"M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"})})}),(0,tn.jsx)(Zt,{children:(0,tn.jsx)(cn,{})})]}),Dr=Vt(Wt)`
  background: linear-gradient(135deg, #f8f9fb 0%, #e6f3f5 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(0, 160, 176, 0.1) 0%, rgba(26, 60, 110, 0) 70%);
    border-radius: 50%;
    top: -200px;
    right: -200px;
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(124, 181, 24, 0.1) 0%, rgba(26, 60, 110, 0) 70%);
    border-radius: 50%;
    bottom: -100px;
    left: -100px;
    z-index: 0;
  }
`,Mr=Vt(Qt)`
  color: var(--primary-color);
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`,Fr=Vt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
  width: 100%;
  margin: 40px 0;
  position: relative;
  z-index: 1;
`,Ar=Vt.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${e=>e.iconBg||"var(--gradient)"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    color: white;
  }
  
  h3 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 15px;
    text-align: center;
    color: var(--neutral-color);
    line-height: 1.4;
  }
`,$r=Vt.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px 25px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: var(--gradient);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  
  p {
    font-size: 16px;
    color: var(--primary-color);
    font-weight: 500;
  }
`,Ur=Vt.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--secondary-color) 50%, transparent 100%);
  bottom: 35%;
  left: 0;
  z-index: 0;
`,Hr=(Vt.div`
  width: 100%;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
`,Vt.div`
  width: 100%;
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: relative;
`,Vt.h3`
  font-size: 22px;
  text-align: center;
  margin-bottom: 25px;
  color: var(--primary-color);
`,Vt.div`
  position: relative;
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin: 60px 0;
  
  &:before {
    content: 'CURRENT';
    position: absolute;
    top: -30px;
    left: 0;
    font-size: 12px;
    font-weight: 700;
    color: var(--primary-color);
  }
  
  &:after {
    content: 'FUTURE';
    position: absolute;
    top: -30px;
    right: 0;
    font-size: 12px;
    font-weight: 700;
    color: var(--accent-color);
  }
`,Vt.div`
  position: absolute;
  top: 50%;
  left: ${e=>e.position||"0%"};
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${e=>e.color||"var(--primary-color)"};
  z-index: 2;
  
  .marker-label {
    position: absolute;
    white-space: nowrap;
    top: ${e=>"top"===e.labelPosition?"-40px":"30px"};
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: 600;
    color: ${e=>e.color||"var(--primary-color)"};
  }
  
  .marker-detail {
    position: absolute;
    white-space: nowrap;
    width: 150px;
    text-align: center;
    top: ${e=>"top"===e.labelPosition?"-65px":"55px"};
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: var(--neutral-color);
  }
`,Vt.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`,Vt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .stat-value {
    font-size: 32px;
    font-weight: 700;
    color: ${e=>e.color||"var(--primary-color)"};
    margin-bottom: 5px;
  }
  
  .stat-label {
    font-size: 14px;
    color: var(--neutral-color);
    text-align: center;
  }
`,()=>{const e=[{title:"Education",description:"Personalized physical education in schools",icon:(0,tn.jsx)(dn,{}),bgColor:"linear-gradient(135deg, #1a3c6e 0%, #2a5298 100%)"},{title:"Rehabilitation",description:"AI-guided recovery for injury and surgery patients",icon:(0,tn.jsx)(fn,{}),bgColor:"linear-gradient(135deg, #00a0b0 0%, #39c8bb 100%)"},{title:"Senior Fitness",description:"Adapted programs for mobility and independence",icon:(0,tn.jsx)(pn,{}),bgColor:"linear-gradient(135deg, #7cb518 0%, #96d629 100%)"},{title:"Public Health",description:"Scalable national fitness initiatives",icon:(0,tn.jsx)(hn,{}),bgColor:"linear-gradient(135deg, #1a3c6e 0%, #00a0b0 100%)"}];return(0,tn.jsxs)(Dr,{children:[(0,tn.jsx)(Ur,{}),(0,tn.jsxs)(Kt,{children:[(0,tn.jsx)(Mr,{children:"Expanding the Intelligent Training Ecosystem"}),(0,tn.jsx)(en,{}),(0,tn.jsx)(Fr,{children:e.map(((e,t)=>(0,tn.jsxs)(Ar,{iconBg:e.bgColor,children:[(0,tn.jsx)("div",{className:"icon",children:e.icon}),(0,tn.jsx)("h3",{children:e.title}),(0,tn.jsx)("p",{children:e.description})]},t)))}),(0,tn.jsx)($r,{children:(0,tn.jsx)("p",{children:"Open API ecosystem for third-party health and wellness integration"})})]}),(0,tn.jsx)(Zt,{children:(0,tn.jsx)(cn,{})})]})}),Br=Vt.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`,Vr=Vt.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: ${e=>e.active?1:0};
  z-index: ${e=>e.active?2:1};
  pointer-events: ${e=>e.active?"all":"none"};
`;const Wr=function(){const[t,n]=(0,e.useState)(0),r=[(0,tn.jsx)(Sn,{}),(0,tn.jsx)(Pn,{}),(0,tn.jsx)(Dn,{}),(0,tn.jsx)(Wn,{}),(0,tn.jsx)(Zn,{}),(0,tn.jsx)(ur,{}),(0,tn.jsx)(br,{}),(0,tn.jsx)(Nr,{}),(0,tn.jsx)(Ir,{}),(0,tn.jsx)(Hr,{})],a=()=>{t<9&&n(t+1)},i=()=>{t>0&&n(t-1)};return(0,e.useEffect)((()=>{const e=e=>{"ArrowRight"===e.key?a():"ArrowLeft"===e.key&&i()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[t]),(0,tn.jsxs)(Br,{children:[r.map(((e,n)=>(0,tn.jsx)(Vr,{active:n===t,children:e},n))),(0,tn.jsxs)("div",{className:"navigation-controls",style:{display:"none"},children:[(0,tn.jsx)("button",{onClick:i,disabled:0===t,children:"Previous"}),(0,tn.jsx)("button",{onClick:a,disabled:9===t,children:"Next"})]}),(0,tn.jsxs)("div",{className:"slide-indicator",style:{display:"none"},children:[t+1," / ",10]})]})};t.createRoot(document.getElementById("root")).render((0,tn.jsx)(e.StrictMode,{children:(0,tn.jsx)(Wr,{})}))})()})();
//# sourceMappingURL=main.5ff41184.js.map