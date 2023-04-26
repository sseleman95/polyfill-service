!function(){function e(e,u){function t(){this.constructor=e}if("function"!=typeof u&&null!==u)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");w(e,u),e.prototype=null===u?Object.create(u):(t.prototype=u.prototype,new t)}function u(e,u,t){if(void 0===t&&(t=Error),!e)throw new t(u)}function t(e){return Intl.getCanonicalLocales(e)}function n(e){if("symbol"==typeof e)throw TypeError("Cannot convert a Symbol value to a string");return String(e)}function r(e){if(null==e)throw new TypeError("undefined/null cannot be converted to object");return Object(e)}function a(e,u){return Object.is?Object.is(e,u):e===u?0!==e||1/e==1/u:e!==e&&u!==u}function o(e){return null===e?"Null":void 0===e?"Undefined":"function"==typeof e||"object"==typeof e?"Object":"number"==typeof e?"Number":"boolean"==typeof e?"Boolean":"string"==typeof e?"String":"symbol"==typeof e?"Symbol":"bigint"==typeof e?"BigInt":void 0}function i(e){return void 0===e?Object.create(null):r(e)}function l(e){for(var t=[],n=e.indexOf("{"),r=0,a=0,o=e.length;n<e.length&&n>-1;)r=e.indexOf("}",n),u(r>n,"Invalid pattern "+e),n>a&&t.push({type:"literal",value:e.substring(a,n)}),t.push({type:e.substring(n+1,r),value:void 0}),a=r+1,n=e.indexOf("{",a);return a<o&&t.push({type:"literal",value:e.substring(a,o)}),t}function D(e,u,t,r,a){if("object"!=typeof e)throw new TypeError("Options must be an object");var o=e[u];if(void 0!==o){if("boolean"!==t&&"string"!==t)throw new TypeError("invalid type");if("boolean"===t&&(o=Boolean(o)),"string"===t&&(o=n(o)),void 0!==r&&!r.filter(function(e){return e==o}).length)throw new RangeError(o+" is not within "+r.join(", "));return o}return a}function s(e,u){for(var t=u;;){if(e.has(t))return t;var n=t.lastIndexOf("-");if(!~n)return;n>=2&&"-"===t[n-2]&&(n-=2),t=t.slice(0,n)}}function c(e,u,t){for(var n={locale:""},r=0,a=u;r<a.length;r++){var o=a[r],i=o.replace(A,""),l=s(e,i);if(l)return n.locale=l,o!==i&&(n.extension=o.slice(i.length+1,o.length)),n}return n.locale=t(),n}function F(e,u,t){var n={},r=new Set;e.forEach(function(e){var u=new Intl.Locale(e).minimize().toString();n[u]=e,r.add(u)});for(var a,o=0,i=u;o<i.length;o++){var l=i[o];if(a)break;var D=l.replace(A,"");if(e.has(D)){a=D;break}if(r.has(D)){a=n[D];break}var c=new Intl.Locale(D),F=c.maximize().toString(),f=c.minimize().toString();if(r.has(f)){a=n[f];break}a=s(r,F)}return{locale:a||t()}}function f(e,t){u(2===t.length,"key must have 2 elements");var n=e.length,r="-"+t+"-",a=e.indexOf(r);if(-1!==a){for(var o=a+4,i=o,l=o,D=!1;!D;){var s=e.indexOf("-",l),c=void 0;c=-1===s?n-l:s-l,2===c?D=!0:-1===s?(i=n,D=!0):(i=s,l=s+1)}return e.slice(o,i)}if(r="-"+t,-1!==(a=e.indexOf(r))&&a+3===n)return""}function E(e,t,n,r,a,o){var i,l=n.localeMatcher;i="lookup"===l?c(e,t,o):F(e,t,o);for(var D=i.locale,s={locale:"",dataLocale:D},E="-u",d=0,v=r;d<v.length;d++){var g=v[d];u(D in a,"Missing locale data for "+D);var m=a[D];u("object"==typeof m&&null!==m,"locale data "+g+" must be an object");var p=m[g];u(Array.isArray(p),"keyLocaleData for "+g+" must be an array");var y=p[0];u("string"==typeof y||null===y,"value must be string or null but got "+typeof y+" in key "+g);var b="";if(i.extension){var h=f(i.extension,g);void 0!==h&&(""!==h?~p.indexOf(h)&&(y=h,b="-"+g+"-"+y):~h.indexOf("true")&&(y="true",b="-"+g))}if(g in n){var C=n[g];u("string"==typeof C||void 0===C||null===C,"optionsValue must be String, Undefined or Null"),~p.indexOf(C)&&C!==y&&(y=C,b="")}s[g]=y,E+=b}if(E.length>2){var w=D.indexOf("-x-");if(-1===w)D+=E;else{D=D.slice(0,w)+E+D.slice(w,D.length)}D=Intl.getCanonicalLocales(D)[0]}return s.locale=D,s}function d(e){return e.slice(e.indexOf("-")+1)}function v(e){if(u("String"===o(e),"unit must be a string"),"seconds"===e)return"second";if("minutes"===e)return"minute";if("hours"===e)return"hour";if("days"===e)return"day";if("weeks"===e)return"week";if("months"===e)return"month";if("quarters"===e)return"quarter";if("years"===e)return"year";if("second"!==e&&"minute"!==e&&"hour"!==e&&"day"!==e&&"week"!==e&&"month"!==e&&"quarter"!==e&&"year"!==e)throw new RangeError("invalid unit");return e}function g(e,t,n){for(var r=l(e),a=[],o=0,i=r;o<i.length;o++){var D=i[o];if("literal"===D.type)a.push({type:"literal",value:D.value});else{u("0"===D.type,"Malformed pattern "+e);for(var s=0,c=n;s<c.length;s++){var F=c[s];a.push({type:F.type,value:F.value,unit:t})}}}return a}function m(e,t,r,i){var l=i.getInternalSlots;if(u("Number"===o(t),"value must be number, instead got "+typeof t,TypeError),u("String"===o(r),"unit must be number, instead got "+typeof t,TypeError),isNaN(t)||!isFinite(t))throw new RangeError("Invalid value "+t);var D=v(r),s=l(e),c=s.fields,F=s.style,f=s.numeric,E=s.pluralRules,d=s.numberFormat,m=D;"short"===F?m=D+"-short":"narrow"===F&&(m=D+"-narrow"),m in c||(m=D);var p=c[m];if("auto"===f&&n(t)in p)return[{type:"literal",value:p[n(t)]}];var y="future";(a(t,-0)||t<0)&&(y="past");var b=p[y],h="function"==typeof d.formatToParts?d.formatToParts(Math.abs(t)):[{type:"literal",value:d.format(Math.abs(t)),unit:r}];return g(b[E.select(t)],D,h)}function p(e,n,r,a){var o=a.getInternalSlots,l=a.availableLocales,s=a.relevantExtensionKeys,c=a.localeData,F=a.getDefaultLocale,f=o(e);f.initializedRelativeTimeFormat=!0;var d=t(n),v=Object.create(null),g=i(r),m=D(g,"localeMatcher","string",["best fit","lookup"],"best fit");v.localeMatcher=m;var p=D(g,"numberingSystem","string",void 0,void 0);if(void 0!==p&&!O.test(p))throw new RangeError("Invalid numbering system "+p);v.nu=p;var y=E(l,d,v,s,c,F),b=y.locale,h=y.nu;f.locale=b,f.style=D(g,"style","string",["long","narrow","short"],"long"),f.numeric=D(g,"numeric","string",["always","auto"],"always");var C=c[y.dataLocale];return u(!!C,"Missing locale data for "+y.dataLocale),f.fields=C,f.numberFormat=new Intl.NumberFormat(n),f.pluralRules=new Intl.PluralRules(n),f.numberingSystem=h,e}function y(e,u){for(var t=[],n=0,r=u;n<r.length;n++){var a=r[n],o=a.replace(A,""),i=s(e,o);i&&t.push(i)}return t}function b(e,u,t){return void 0!==t&&(t=r(t),D(t,"localeMatcher","string",["lookup","best fit"],"best fit")),y(e,u)}function h(e){var u=L.get(e);return u||(u=Object.create(null),L.set(e,u)),u}var C,w=function(e,u){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,u){e.__proto__=u}||function(e,u){for(var t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t])})(e,u)},A=/-u(?:-[0-9a-z]{2,8})+/gi;!function(e){e.startRange="startRange",e.shared="shared",e.endRange="endRange"}(C||(C={}));var B=["angle-degree","area-acre","area-hectare","concentr-percent","digital-bit","digital-byte","digital-gigabit","digital-gigabyte","digital-kilobit","digital-kilobyte","digital-megabit","digital-megabyte","digital-petabyte","digital-terabit","digital-terabyte","duration-day","duration-hour","duration-millisecond","duration-minute","duration-month","duration-second","duration-week","duration-year","length-centimeter","length-foot","length-inch","length-kilometer","length-meter","length-mile-scandinavian","length-mile","length-millimeter","length-yard","mass-gram","mass-kilogram","mass-ounce","mass-pound","mass-stone","temperature-celsius","temperature-fahrenheit","volume-fluid-ounce","volume-gallon","volume-liter","volume-milliliter"],x=(B.map(d),/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/),O=(new RegExp("^"+x.source),new RegExp(x.source+"$"),/^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i),L=(function(u){function t(){var e=null!==u&&u.apply(this,arguments)||this;return e.type="MISSING_LOCALE_DATA",e}e(t,u)}(Error),new WeakMap),T=function(){function e(u,t){if(!(this&&this instanceof e?this.constructor:void 0))throw new TypeError("Intl.RelativeTimeFormat must be called with 'new'");return p(this,u,t,{getInternalSlots:h,availableLocales:e.availableLocales,relevantExtensionKeys:e.relevantExtensionKeys,localeData:e.localeData,getDefaultLocale:e.getDefaultLocale})}return e.prototype.format=function(e,u){if("object"!=typeof this)throw new TypeError("format was called on a non-object");if(!h(this).initializedRelativeTimeFormat)throw new TypeError("format was called on a invalid context");return m(this,Number(e),n(u),{getInternalSlots:h}).map(function(e){return e.value}).join("")},e.prototype.formatToParts=function(e,u){if("object"!=typeof this)throw new TypeError("formatToParts was called on a non-object");if(!h(this).initializedRelativeTimeFormat)throw new TypeError("formatToParts was called on a invalid context");return m(this,Number(e),n(u),{getInternalSlots:h})},e.prototype.resolvedOptions=function(){if("object"!=typeof this)throw new TypeError("resolvedOptions was called on a non-object");var e=h(this);if(!e.initializedRelativeTimeFormat)throw new TypeError("resolvedOptions was called on a invalid context");return{locale:e.locale,style:e.style,numeric:e.numeric,numberingSystem:e.numberingSystem}},e.supportedLocalesOf=function(u,n){return b(e.availableLocales,t(u),n)},e.__addLocaleData=function(){for(var u=[],t=0;t<arguments.length;t++)u[t]=arguments[t];for(var n=0,r=u;n<r.length;n++){var a=r[n],o=a.data,i=a.locale,l=new Intl.Locale(i).minimize().toString();e.localeData[i]=e.localeData[l]=o,e.availableLocales.add(l),e.availableLocales.add(i),e.__defaultLocale||(e.__defaultLocale=l)}},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=new Set,e.__defaultLocale="",e.relevantExtensionKeys=["nu"],e.polyfilled=!0,e}(),j=T;try{"undefined"!=typeof Symbol&&Object.defineProperty(T.prototype,Symbol.toStringTag,{value:"Intl.RelativeTimeFormat",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype.constructor,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(T.supportedLocalesOf,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch(I){}(function S(){return"undefined"==typeof Intl||!("RelativeTimeFormat"in Intl)})()&&Object.defineProperty(Intl,"RelativeTimeFormat",{value:j,writable:!0,enumerable:!1,configurable:!0})}();