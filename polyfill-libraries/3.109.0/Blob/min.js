!function(t){"use strict";t.URL=t.URL||t.webkitURL;var e,n=t.ArrayBuffer,o=t.Uint8Array,r=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},a=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||function(t){var a=function y(){this.data=[]};e=function B(t,e,n){this.data=t,this.size=t.length,this.type=e,this.encoding=n};var i=a.prototype,c=e.prototype,l=t.FileReaderSync,s=function(t){this.code=this[this.name=t]},p="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),d=p.length,u=t.URL||t.webkitURL||t,f=u.createObjectURL,b=u.revokeObjectURL,h=u,R=t.btoa,g=t.atob,w=/^[\w-]+:\/*\[?[\w.:-]+\]?(?::[0-9]+)?/;for(e.fake=c.fake=!0;d--;)s.prototype[p[d]]=d+1;return t.URL||(h=t.URL=function(t){var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=t,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(e=t.match(w),n.origin=e&&e[1])),n}),h.createObjectURL=function(t){var n,o=t.type;return null===o&&(o="application/octet-stream"),t instanceof e?(n="data:"+o,"base64"===t.encoding?n+";base64,"+t.data:"URI"===t.encoding?n+","+decodeURIComponent(t.data):R?n+";base64,"+R(t.data):n+","+encodeURIComponent(t.data)):f?f.call(u,t):void 0},h.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&b&&b.call(u,t)},i.append=function(t){var a=this.data;if(o&&(t instanceof n||t instanceof o)){for(var i="",c=new o(t),p=0,d=c.length;p<d;p++)i+=String.fromCharCode(c[p]);a.push(i)}else if("Blob"===r(t)||"File"===r(t)){if(!l)throw new s("NOT_READABLE_ERR");var u=new l;a.push(u.readAsBinaryString(t))}else t instanceof e?"base64"===t.encoding&&g?a.push(g(t.data)):"URI"===t.encoding?a.push(decodeURIComponent(t.data)):"raw"===t.encoding&&a.push(t.data):("string"!=typeof t&&(t+=""),a.push(unescape(encodeURIComponent(t))))},i.getBlob=function(t){return arguments.length||(t=null),new e(this.data.join(""),t,"raw")},i.toString=function(){return"[object BlobBuilder]"},c.slice=function(){var t=arguments[0],n=arguments[1],o=arguments[2],r=arguments.length;return r<3&&(o=""),new e(this.data.slice(t,r>1?n:this.data.length),o,this.encoding)},c.toString=function(){return"[object Blob]"},c.close=function(){this.size=0,delete this.data},a}(t);!function(){try{(new a).append(1)}catch(i){var t=a.prototype.append;a.prototype.append=function i(a){o&&(a instanceof n||a instanceof o)||"Blob"===r(a)||"File"===r(a)||e&&a instanceof e||"string"!=typeof a&&(a+=""),1 in arguments?t.call(this,a,arguments[1]):t.call(this,a)}}}(),t.Blob=function(){var t=arguments[0],e=arguments[1];try{var n=this instanceof Blob}catch(p){}if(!1===n)throw new TypeError("Failed to construct 'Blob': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");if(t!==undefined&&"number"!=typeof t.length)throw new TypeError("Failed to construct 'Blob': Iterator getter is not callable.");if(void 0!==t&&"object"!=typeof t)throw new TypeError("Failed to construct 'Blob': Iterator getter is not callable.");if(void 0!==e&&"object"!=typeof e)throw new TypeError("Failed to construct 'Blob': parameter 2 ('options') is not an object.");var r=e?e.type||"":"",i=new a;if(t)for(var c=0,l=t.length;c<l;c++)void 0!==o&&t[c]instanceof o?i.append(t[c].buffer):i.append(t[c]);var s=i.getBlob(r);return!s.slice&&s.webkitSlice&&(s.slice=s.webkitSlice),s};var i=Object.getPrototypeOf||function(t){return t.__proto__};t.Blob.prototype=i(new t.Blob)}(self);