"use strict";function parse(e,r,n){var t=Object.create(null);if("string"!=typeof e||0===e.length)return t;r=r||"&",n=n||"=";for(var i=e.split(r),l=0,a=i.length;l<a;l++){var o=i[l].split(n),u=o[0].trim(),s=o[1].trim(),d=t[u];if(d)if(Array.isArray(d))d.push(s);else{var p=d;t[u]=new Array,t[u].push(p),t[u].push(s)}else t[u]=s}return t}function stringify(e,r,n){if(r=r||"&",n=n||"=",null!==e&&"object"===(void 0===e?"undefined":_typeof(e))){for(var t=Object.keys(e),i=t.length,l=i-1,a="",o=0;o<i;o++){var u=t[o],s=e[u],d=u+n;if(Array.isArray(s)){for(var p=s.length,f=p-1,m=0;m<p;++m)a+=d+s[m],m<f&&(a+=r);p&&o<l&&(a+=r)}else a+=d+s,o<l&&(a+=r)}return a}return""}function format(e,r){return e+"?"+querystring.stringify(r)}function parse$1(e,r){var n=e.indexOf("?");if(-1===n)return null;var t=e.slice(n+1),i=querystring.parse(t);return"string"==typeof r&&r.length>0?i[r]:i}function whatEnv(){var e={};if("undefined"!=typeof weex){var r=weex.config,n=r.env;if(e.platform=n.platform,e.bundleFrameworkType="Vue","Web"!==e.platform)e.dingtalk={bundleUrl:r.bundleUrl,originalUrl:r.originalUrl},e.appName=n.appName;else{var t=location.href,i=url.parse(t,"dd_wx_tpl");e.dingtalk={bundleUrl:i||url.parse(t,"_wx_tpl"),originalUrl:t}}}else{if("function"==typeof callNative)e.platform=navigator.platform,e.appName=navigator.appName;else{e.platform="Web";var l=location.href,a=url.parse(l,"dd_wx_tpl");e.dingtalk={bundleUrl:a||url.parse(l,"_wx_tpl"),originalUrl:l}}e.bundleFrameworkType="Rax"}return e}function dingtalkContainer(){return isWeex?"DingTalk"===env.appName:/DingTalk/.test(navigator.userAgent)}function compareVersion(e,r,n){if("string"!=typeof e||"string"!=typeof r)return!1;var t=e.split("."),i=r.split("."),l=void 0,a=void 0;do{l=t.shift(),a=i.shift()}while(l===a&&i.length>0);return n?(0|a)>=(0|l):(0|a)>(0|l)}function requireModule(e){if("Vue"===bundleFrameworkType$1)return weex.requireModule(e);var r="@weex-module/"+e;return __weex_require__(r)}function Document(){return isWeex$1&&"Vue"===bundleFrameworkType$2?weex.document:document}function setTimeout(e,r){return isWeex$2?(timer.setTimeout(e,r),doc.taskCenter.callbackManager.lastCallbackId.toString()):window.setTimeout(e,r)}function clearTimeout(e){isWeex$2?timer.clearTimeout(e):window.clearTimeout(e)}function setInterval(e,r){return isWeex$2?(timer.setInterval(e,r),doc.taskCenter.callbackManager.lastCallbackId.toString()):window.setInterval(e,r)}function clearInterva(e){isWeex$2?timer.clearInterva(e):window.clearInterva(e)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},querystring={stringify:stringify,parse:parse},url={format:format,parse:parse$1},env=whatEnv(),isiOS="iOS"===env.platform,isAndroid="Android"===env.platform,isWeb="Web"===env.platform,isWeex=isiOS||isAndroid,dingtalk=env.dingtalk,bundleFrameworkType=env.bundleFrameworkType,bundleUrl=dingtalk.bundleUrl,originalUrl=dingtalk.originalUrl,isDingtalk=dingtalkContainer(),env$1={isiOS:isiOS,isAndroid:isAndroid,isDingtalk:isDingtalk,isWeb:isWeb,isWeex:isWeex,bundleFrameworkType:bundleFrameworkType,bundleUrl:bundleUrl,originalUrl:originalUrl},bundleFrameworkType$1=env$1.bundleFrameworkType,bundleFrameworkType$2=env$1.bundleFrameworkType,isWeex$1=env$1.isWeex,doc=Document(),timer=requireModule("timer"),isWeex$2=env$1.isWeex,timer$1={setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterva:clearInterva},index={querystring:querystring,url:url,env:env$1,compareVersion:compareVersion,requireModule:requireModule,document:doc,timer:timer$1};module.exports=index;
//# sourceMappingURL=journey-min.js.map
