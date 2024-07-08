"use strict";(self.webpackChunkinmobiliaria_frontend_react=self.webpackChunkinmobiliaria_frontend_react||[]).push([[948],{948:(e,t,r)=>{r.d(t,{h3:()=>T});var n,a=r(791);function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function u(){}function i(e){return!!(e||"").match(/\d/)}function l(e){return null===e||void 0===e}function s(e){return l(e)||function(e){return"number"===typeof e&&isNaN(e)}(e)||"number"===typeof e&&!isFinite(e)}function c(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function f(e,t){void 0===t&&(t=!0);var r="-"===e[0],n=r&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNegation:r,addNegation:n}}function v(e,t,r){for(var n="",a=r?"0":"",o=0;o<=t-1;o++)n+=e[o]||a;return n}function d(e,t){return Array(t+1).join(e)}function g(e){var t=e+"",r="-"===t[0]?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(!(o=Number(o)))return r+a;var u=1+o,i=(a=a.replace(".","")).length;return u<0?a="0."+d("0",Math.abs(u))+a:u>=i?a+=d("0",u-i):a=(a.substring(0,u)||"0")+"."+a.substring(u),r+a}function m(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=(-1!==e.indexOf(".")||r)&&t,a=f(e),o=a.beforeDecimal,u=a.afterDecimal,i=a.hasNegation,l=parseFloat("0."+(u||"0")),s=(u.length<=t?"0."+u:l.toFixed(t)).split(".");return""+(i?"-":"")+o.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),s[0])+(n?".":"")+v(s[1]||"",t,r)}function p(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}!function(e){e.event="event",e.props="prop"}(n||(n={}));var h=function(e){var t,r=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t&&n.length===t.length&&n.every((function(e,r){return e===t[r]}))?r:(t=n,r=e.apply(void 0,n))}}((function(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}}));function S(e){return Math.max(e.selectionStart,e.selectionEnd)}function b(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function V(e){var t=e.currentValue,r=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return t[n]===r[a]}function y(e,t,r,n){var a,o,u,i=e.length;if(a=t,o=0,u=i,t=Math.min(Math.max(a,o),u),"left"===n){for(;t>=0&&!r[t];)t--;-1===t&&(t=r.indexOf(!0))}else{for(;t<=i&&!r[t];)t++;t>i&&(t=r.lastIndexOf(!0))}return-1===t&&(t=i),t}function w(e){for(var t=Array.from({length:e.length+1}).map((function(){return!0})),r=0,n=t.length;r<n;r++)t[r]=Boolean(i(e[r])||i(e[r-1]));return t}function x(e,t,r,n,o,i){void 0===i&&(i=u);var c=function(e){var t=(0,a.useRef)(e);t.current=e;var r=(0,a.useRef)((function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t.current.apply(t,e)}));return r.current}((function(e,t){var r,a;return s(e)?(a="",r=""):"number"===typeof e||t?(a="number"===typeof e?g(e):e,r=n(a)):(a=o(e,void 0),r=n(a)),{formattedValue:r,numAsString:a}})),f=(0,a.useState)((function(){return c(l(e)?t:e,r)})),v=f[0],d=f[1],m=e,p=r;l(e)&&(m=v.numAsString,p=!0);var h=c(m,p);return(0,a.useMemo)((function(){d(h)}),[h.formattedValue]),[v,function(e,t){e.formattedValue!==v.formattedValue&&d({formattedValue:e.formattedValue,numAsString:e.value}),i(e,t)}]}function D(e){return e.replace(/[^0-9]/g,"")}function N(e){return e}function O(e){var t=e.type;void 0===t&&(t="text");var r=e.displayType;void 0===r&&(r="input");var l=e.customInput,s=e.renderText,c=e.getInputRef,f=e.format;void 0===f&&(f=N);var v=e.removeFormatting;void 0===v&&(v=D);var d=e.defaultValue,g=e.valueIsNumericString,m=e.onValueChange,b=e.isAllowed,O=e.onChange;void 0===O&&(O=u);var C=e.onKeyDown;void 0===C&&(C=u);var E=e.onMouseUp;void 0===E&&(E=u);var A=e.onFocus;void 0===A&&(A=u);var I=e.onBlur;void 0===I&&(I=u);var T=e.value,B=e.getCaretBoundary;void 0===B&&(B=w);var j=e.isValidInputCharacter;void 0===j&&(j=i);var R=e.isCharacterSame,k=o(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),F=x(T,d,Boolean(g),f,v,m),M=F[0],P=M.formattedValue,W=M.numAsString,K=F[1],L=(0,a.useRef)({formattedValue:P,numAsString:W}),U=function(e,t){L.current={formattedValue:e.formattedValue,numAsString:e.value},K(e,t)},_=(0,a.useState)(!1),G=_[0],$=_[1],Z=(0,a.useRef)(null),q=(0,a.useRef)({setCaretTimeout:null,focusTimeout:null});(0,a.useEffect)((function(){return $(!0),function(){clearTimeout(q.current.setCaretTimeout),clearTimeout(q.current.focusTimeout)}}),[]);var z=f,H=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},J=function(e,t,r){0===e.selectionStart&&e.selectionEnd===e.value.length||(p(e,t),q.current.setCaretTimeout=setTimeout((function(){e.value===r&&e.selectionStart!==e.selectionEnd&&p(e,t)}),0))},Q=function(e,t,r){return y(e,t,B(e),r)},X=function(e,t,r){var n=B(t),a=function(e,t,r,n,a,o,u){void 0===u&&(u=V);var i=a.findIndex((function(e){return e})),l=e.slice(0,i);t||r.startsWith(l)||(t=l,r=l+r,n+=l.length);for(var s=r.length,c=e.length,f={},v=new Array(s),d=0;d<s;d++){v[d]=-1;for(var g=0,m=c;g<m;g++)if(u({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:d,formattedValueIndex:g})&&!0!==f[g]){v[d]=g,f[g]=!0;break}}for(var p=n;p<s&&(-1===v[p]||!o(r[p]));)p++;var h=p===s||-1===v[p]?c:v[p];for(p=n-1;p>0&&-1===v[p];)p--;var S=-1===p||-1===v[p]?0:v[p]+1;return S>h?h:n-S<h-n?S:h}(t,P,e,r,n,j,R);return a=y(t,a,n)};(0,a.useEffect)((function(){var e=L.current,t=e.formattedValue,r=e.numAsString;P===t||P===W&&t===r||U(H(P,W),{event:void 0,source:n.props})}),[P,W]);var Y=Z.current?S(Z.current):void 0;("undefined"!==typeof window?a.useLayoutEffect:a.useEffect)((function(){var e=Z.current;if(P!==L.current.formattedValue&&e){var t=X(L.current.formattedValue,P,Y);e.value=P,J(e,t,P)}}),[P]);var ee=function(e,t,r){var n=h(P,e),a=Object.assign(Object.assign({},n),{lastValue:P}),o=v(e,a),u=z(o);if(o=v(u,void 0),b&&!b(H(u,o))){var i=t.target,l=S(i),s=X(e,P,l);return i.value=P,J(i,s,P),!1}return function(e){var t=e.formattedValue;void 0===t&&(t="");var r=e.input,n=e.setCaretPosition;void 0===n&&(n=!0);var a=e.source,o=e.event,u=e.numAsString,i=e.caretPos;if(r){if(void 0===i&&n){var l=e.inputValue||r.value,s=S(r);r.value=t,i=X(l,t,s)}r.value=t,n&&void 0!==i&&J(r,i,t)}t!==P&&U(H(t,u),{event:o,source:a})}({formattedValue:u,numAsString:o,inputValue:e,event:t,source:r,setCaretPosition:!0,input:t.target}),!0},te=!G||"undefined"===typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",re=Object.assign({inputMode:te},k,{type:t,value:P,onChange:function(e){var t=e.target.value;ee(t,e,n.event)&&O(e)},onKeyDown:function(e){var t,r=e.target,n=e.key,a=r.selectionStart,o=r.selectionEnd,u=r.value;if(void 0===u&&(u=""),"ArrowLeft"===n||"Backspace"===n?t=Math.max(a-1,0):"ArrowRight"===n?t=Math.min(a+1,u.length):"Delete"===n&&(t=a),void 0!==t&&a===o){var i=t;if("ArrowLeft"===n||"ArrowRight"===n)(i=Q(u,t,"ArrowLeft"===n?"left":"right"))!==t&&e.preventDefault();else"Delete"!==n||j(u[t])?"Backspace"!==n||j(u[t])||(i=Q(u,t,"left")):i=Q(u,t,"right");i!==t&&J(r,i,u),e.isUnitTestRun&&J(r,i,u),C(e)}else C(e)},onMouseUp:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),r===n){var o=Q(a,r);o!==r&&J(t,o,a)}E(e)},onFocus:function(e){e.persist&&e.persist();var t=e.target;Z.current=t,q.current.focusTimeout=setTimeout((function(){var r=t.selectionStart,n=t.selectionEnd,a=t.value;void 0===a&&(a="");var o=Q(a,r);o===r||0===r&&n===a.length||J(t,o,a),A(e)}),0)},onBlur:function(e){Z.current=null,clearTimeout(q.current.focusTimeout),clearTimeout(q.current.setCaretTimeout),I(e)}});if("text"===r)return s?a.createElement(a.Fragment,null,s(P,k)||null):a.createElement("span",Object.assign({},k,{ref:c}),P);if(l){var ne=l;return a.createElement(ne,Object.assign({},re,{ref:c}))}return a.createElement("input",Object.assign({},re,{ref:c}))}function C(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;void 0===a&&(a="");var o=t.suffix;void 0===o&&(o="");var u=t.allowNegative,i=t.thousandsGroupStyle;if(void 0===i&&(i="thousand"),""===e||"-"===e)return e;var l=E(t),s=l.thousandSeparator,c=l.decimalSeparator,d=0!==r&&-1!==e.indexOf(".")||r&&n,g=f(e,u),m=g.beforeDecimal,p=g.afterDecimal,h=g.addNegation;return void 0!==r&&(p=v(p,r,!!n)),s&&(m=function(e,t,r){var n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}(m,s,i)),a&&(m=a+m),o&&(p+=o),h&&(m="-"+m),e=m+(d&&c||"")+p}function E(e){var t=e.decimalSeparator;void 0===t&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function A(e,t,r){var n;void 0===t&&(t=b(e));var a=r.allowNegative,o=r.prefix;void 0===o&&(o="");var u=r.suffix;void 0===u&&(u="");var l=r.decimalScale,s=t.from,v=t.to,d=v.start,g=v.end,m=E(r),p=m.allowedDecimalSeparators,h=m.decimalSeparator,S=e[g]===h;if(i(e)&&(e===o||e===u)&&""===t.lastValue)return e;if(g-d===1&&-1!==p.indexOf(e[d])){var V=0===l?"":h;e=e.substring(0,d)+V+e.substring(d+1,e.length)}var y=function(e,t,r){var n=!1,a=!1;o.startsWith("-")?n=!1:e.startsWith("--")?(n=!1,a=!0):u.startsWith("-")&&e.length===u.length?n=!1:"-"===e[0]&&(n=!0);var i=n?1:0;return a&&(i=2),i&&(e=e.substring(i),t-=i,r-=i),{value:e,start:t,end:r,hasNegation:n}},w=y(e,d,g),x=w.hasNegation;e=(n=w).value,d=n.start,g=n.end;var D=y(t.lastValue,s.start,s.end),N=D.start,O=D.end,C=D.value,A=e.substring(d,g);!(e.length&&C.length&&(N>C.length-u.length||O<o.length))||A&&u.startsWith(A)||(e=C);var I=0;e.startsWith(o)?I+=o.length:d<o.length&&(I=d),g-=I;var T=(e=e.substring(I)).length,B=e.length-u.length;e.endsWith(u)?T=B:(g>B||g>e.length-u.length)&&(T=g),e=e.substring(0,T),e=function(e,t){void 0===e&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),o=n.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}(x?"-"+e:e,a),e=(e.match(function(e,t){return new RegExp("(^-)|[0-9]|"+c(e),t?"g":void 0)}(h,!0))||[]).join("");var j=e.indexOf(h),R=f(e=e.replace(new RegExp(c(h),"g"),(function(e,t){return t===j?".":""})),a),k=R.beforeDecimal,F=R.afterDecimal,M=R.addNegation;return v.end-v.start<s.end-s.start&&""===k&&S&&!parseFloat(F)&&(e=M?"-":""),e}function I(e){e=function(e){var t=E(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;void 0===a&&(a="");var o=e.allowNegative;if(void 0===o&&(o=!0),r===n)throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+r+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+n+" (default value for decimalSeparator is .)\n     ");return a.startsWith("-")&&o&&(console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: "+a+"\n      allowNegative: "+o+"\n    "),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}(e);e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,r=e.allowNegative,a=e.allowLeadingZeros,c=e.onKeyDown;void 0===c&&(c=u);var f=e.onBlur;void 0===f&&(f=u);var v=e.thousandSeparator,d=e.decimalScale,S=e.fixedDecimalScale,b=e.prefix;void 0===b&&(b="");var V=e.defaultValue,y=e.value,w=e.valueIsNumericString,D=e.onValueChange,N=o(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),O=E(e),I=O.decimalSeparator,T=O.allowedDecimalSeparators,B=function(t){return C(t,e)},j=function(t,r){return A(t,r,e)},R=l(y)?V:y,k=null!==w&&void 0!==w?w:function(e,t,r){return""===e||!(null===t||void 0===t?void 0:t.match(/\d/))&&!(null===r||void 0===r?void 0:r.match(/\d/))&&"string"===typeof e&&!isNaN(Number(e))}(R,b,t);l(y)?l(V)||(k=k||"number"===typeof V):k=k||"number"===typeof y;var F=function(e){return s(e)?e:("number"===typeof e&&(e=g(e)),k&&"number"===typeof d?m(e,d,Boolean(S)):e)},M=x(F(y),F(V),Boolean(k),B,j,D),P=M[0],W=P.numAsString,K=P.formattedValue,L=M[1];return Object.assign(Object.assign({},N),{value:K,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===I||i(e)},isCharacterSame:function(e){var t=e.currentValue,r=e.lastValue,n=e.formattedValue,a=e.currentValueIndex,o=e.formattedValueIndex,u=t[a],i=n[o],l=h(r,t).to;return!!(a>=l.start&&a<l.end&&T&&T.includes(u)&&i===I)||u===i},onValueChange:L,format:B,removeFormatting:j,getCaretBoundary:function(t){return function(e,t){var r=t.prefix;void 0===r&&(r="");var n=t.suffix;void 0===n&&(n="");var a=Array.from({length:e.length+1}).map((function(){return!0})),o="-"===e[0];a.fill(!1,0,r.length+(o?1:0));var u=e.length;return a.fill(!1,u-n.length+1,u+1),a}(t,e)},onKeyDown:function(e){var t=e.target,n=e.key,a=t.selectionStart,o=t.selectionEnd,u=t.value;if(void 0===u&&(u=""),a===o){"Backspace"===n&&"-"===u[0]&&a===b.length+1&&r&&p(t,1),d&&S&&("Backspace"===n&&u[a-1]===I?(p(t,a-1),e.preventDefault()):"Delete"===n&&u[a]===I&&e.preventDefault()),(null===T||void 0===T?void 0:T.includes(n))&&u[a]===I&&p(t,a+1);var i=!0===v?",":v;"Backspace"===n&&u[a-1]===i&&p(t,a-1),"Delete"===n&&u[a]===i&&p(t,a+1),c(e)}else c(e)},onBlur:function(t){var r=W;if(r.match(/\d/g)||(r=""),a||(r=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}(r)),S&&d&&(r=m(r,d,S)),r!==W){var o=C(r,e);L({formattedValue:o,value:r,floatValue:parseFloat(r)},{event:t,source:n.event})}f(t)}})}function T(e){var t=I(e);return a.createElement(O,Object.assign({},t))}}}]);
//# sourceMappingURL=948.3b221fa8.chunk.js.map