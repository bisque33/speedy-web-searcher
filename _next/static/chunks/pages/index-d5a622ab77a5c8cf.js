(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4020:function(e){"use strict";var r="%[a-f0-9]{2}",t=new RegExp(r,"gi"),n=new RegExp("("+r+")+","gi");function o(e,r){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],o(t),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var r=e.match(t),n=1;n<r.length;n++)r=(e=o(r,n).join("")).match(t);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=n.exec(e);o;){try{t[o[0]]=decodeURIComponent(o[0])}catch(r){var s=a(o[0]);s!==o[0]&&(t[o[0]]=s)}o=n.exec(e)}t["%C2"]="\ufffd";for(var c=Object.keys(t),i=0;i<c.length;i++){var l=c[i];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},2806:function(e){"use strict";e.exports=function(e,r){for(var t={},n=Object.keys(e),o=Array.isArray(r),a=0;a<n.length;a++){var s=n[a],c=e[s];(o?-1!==r.indexOf(s):r(s,c,e))&&(t[s]=c)}return t}},8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6454)}])},6454:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(5893),o=t(7160),a=t.n(o),s=t(7294),c=t(7563),i=[{label:"Google",url:"https://www.google.com/search?q=",suggest:"google"},{label:"Google (Next.js)",url:"https://www.google.com/search?q=",additionalText:"site:nextjs.org",suggest:"google"},{label:"Google (Ruby)",url:"https://www.google.com/search?q=",additionalText:"site:ruby-lang.org",suggest:"google"},{label:"Google (MDN)",url:"https://www.google.com/search?q=",additionalText:"site:developer.mozilla.org",suggest:"google"},{label:"GitHub",url:"https://github.com/search?q="},{label:"Zenn",url:"https://zenn.dev/search?q="},{label:"Google Cloud",url:"https://cloud.google.com/s/results?q="}],l=function(){var e=(0,s.useState)(!0),r=e[0],t=e[1],o=(0,s.useState)(""),l=o[0],u=o[1],p=(0,s.useState)(0),f=p[0],g=p[1];return(0,s.useEffect)((function(){var e=c.parse(window.location.search);console.log({query:e}),"string"===typeof e.q&&u(e.q),"string"===typeof e.i&&NaN!==Number(e.i)&&g(parseInt(e.i)),t(!1)}),[]),(0,n.jsx)("div",{className:a().container,children:(0,n.jsxs)("main",{className:a().main,children:[(0,n.jsx)("div",{children:(0,n.jsx)("input",{className:a().searchBox,type:"text",autoFocus:!0,name:"searchText",value:l,onChange:function(e){return u(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&function(){var e=i[f].url,r=i[f].additionalText?"".concat(l," ").concat(i[f].additionalText):l,t="".concat(window.location.origin).concat(window.location.pathname);console.log({currentUrl:t}),window.history.replaceState(null,"","".concat(t,"?q=").concat(l,"&i=").concat(f)),window.location.href=e+r}()}})}),(0,n.jsx)("div",{className:a().wrapper,children:!r&&i.map((function(e,r){return(0,n.jsxs)("label",{style:{display:"block"},children:[(0,n.jsx)("input",{type:"radio",name:"searchConditions",value:r,defaultChecked:r===(f||0),onChange:function(e){return g(parseInt(e.target.value))}}),e.label]},"label".concat(r))}))})]})})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",searchBox:"Home_searchBox__QgDpU",wrapper:"Home_wrapper__kA9A_"}},7563:function(e,r,t){"use strict";const n=t(8218),o=t(4020),a=t(500),s=t(2806),c=Symbol("encodeFragmentIdentifier");function i(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,r){return r.encode?r.strict?n(e):encodeURIComponent(e):e}function u(e,r){return r.decode?o(e):e}function p(e){return Array.isArray(e)?e.sort():"object"===typeof e?p(Object.keys(e)).sort(((e,r)=>Number(e)-Number(r))).map((r=>e[r])):e}function f(e){const r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function g(e){const r=(e=f(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function d(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,r){i((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);const t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,n)=>{r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return(e,t,n)=>{r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"colon-list-separator":return(e,t,n)=>{r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return(r,t,n)=>{const o="string"===typeof t&&t.includes(e.arrayFormatSeparator),a="string"===typeof t&&!o&&u(t,e).includes(e.arrayFormatSeparator);t=a?u(t,e):t;const s=o||a?t.split(e.arrayFormatSeparator).map((r=>u(r,e))):null===t?t:u(t,e);n[r]=s};case"bracket-separator":return(r,t,n)=>{const o=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),!o)return void(n[r]=t?u(t,e):t);const a=null===t?[]:t.split(e.arrayFormatSeparator).map((r=>u(r,e)));void 0!==n[r]?n[r]=[].concat(n[r],a):n[r]=a};default:return(e,r,t)=>{void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,s]=a(r.decode?o.replace(/\+/g," "):o,"=");s=void 0===s?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?s:u(s,r),t(u(e,r),s,n)}for(const o of Object.keys(n)){const e=n[o];if("object"===typeof e&&null!==e)for(const t of Object.keys(e))e[t]=d(e[t],r);else n[o]=d(e,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce(((e,r)=>{const t=n[r];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?e[r]=p(t):e[r]=t,e}),Object.create(null))}r.extract=g,r.parse=m,r.stringify=(e,r)=>{if(!e)return"";i((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);const t=t=>{return r.skipNull&&(null===(n=e[t])||void 0===n)||r.skipEmptyString&&""===e[t];var n},n=function(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const o=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[l(r,e),"[",o,"]"].join("")]:[...t,[l(r,e),"[",l(o,e),"]=",l(n,e)].join("")]};case"bracket":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[l(r,e),"[]"].join("")]:[...t,[l(r,e),"[]=",l(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[l(r,e),":list="].join("")]:[...t,[l(r,e),":list=",l(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[l(t,e),r,l(o,e)].join("")]:[[n,l(o,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,l(r,e)]:[...t,[l(r,e),"=",l(n,e)].join("")]}}(r),o={};for(const s of Object.keys(e))t(s)||(o[s]=e[s]);const a=Object.keys(o);return!1!==r.sort&&a.sort(r.sort),a.map((t=>{const o=e[t];return void 0===o?"":null===o?l(t,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?l(t,r)+"[]":o.reduce(n(t),[]).join("&"):l(t,r)+"="+l(o,r)})).filter((e=>e.length>0)).join("&")},r.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);const[t,n]=a(e,"#");return Object.assign({url:t.split("?")[0]||"",query:m(g(e),r)},r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,r)}:{})},r.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[c]:!0},t);const n=f(e.url).split("?")[0]||"",o=r.extract(e.url),a=r.parse(o,{sort:!1}),s=Object.assign(a,e.query);let i=r.stringify(s,t);i&&(i=`?${i}`);let u=function(e){let r="";const t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(u=`#${t[c]?l(e.fragmentIdentifier,t):e.fragmentIdentifier}`),`${n}${i}${u}`},r.pick=(e,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:o,query:a,fragmentIdentifier:i}=r.parseUrl(e,n);return r.stringifyUrl({url:o,query:s(a,t),fragmentIdentifier:i},n)},r.exclude=(e,t,n)=>{const o=Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r);return r.pick(e,o,n)}},500:function(e){"use strict";e.exports=(e,r)=>{if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];const t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},8218:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},function(e){e.O(0,[774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);