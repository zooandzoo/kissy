/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 24 20:09
*/
KISSY.add("ajax/base",function(g,i,j,h){function e(f){f=g.mix(g.clone(u),f||{},undefined,undefined,true);if(!g.isBoolean(f.crossDomain)){var l=n.exec(f.url.toLowerCase());f.crossDomain=!!(l&&(l[1]!=r[1]||l[2]!=r[2]||(l[3]||(l[1]==="http:"?o:q))!=(r[3]||(r[1]==="http:"?o:q))))}if(f.processData&&f.data&&!g.isString(f.data))f.data=g.param(f.data,undefined,undefined,f.serializeArray);f.type=f.type.toUpperCase();f.hasContent=!p.test(f.type);if(!f.hasContent){if(f.data)f.url+=(/\?/.test(f.url)?"&":"?")+
f.data;if(f.cache===false)f.url+=(/\?/.test(f.url)?"&":"?")+"_ksTS="+(g.now()+"_"+g.guid())}f.dataType=g.trim(f.dataType||"*").split(c);f.context=f.context||f;return f}function a(f,l){d.fire(f,{ajaxConfig:l.config,xhr:l})}function b(f){var l=this.config;f=f.type;this.timeoutTimer&&clearTimeout(this.timeoutTimer);l[f]&&l[f].call(l.context,this.responseData,this.statusText,this);a(f,this)}function d(f){if(f.url){f=e(f);var l=new h(f);a("start",l);var x=new (s[f.dataType[0]]||s["*"])(l);l.transport=
x;f.contentType&&l.setRequestHeader("Content-Type",f.contentType);var v=f.dataType[0],w=f.accepts;l.setRequestHeader("Accept",v&&w[v]?w[v]+(v==="*"?"":", */*; q=0.01"):w["*"]);for(var y in f.headers)l.setRequestHeader(y,f.headers[y]);l.on("complete success error",b);l.readyState=1;a("send",l);if(f.async&&f.timeout>0)l.timeoutTimer=setTimeout(function(){l.abort("timeout")},f.timeout);try{l.state=1;x.send()}catch(z){l.status<2&&l.callback(-1,z)}return l}}var c=/\s+/,n=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
m=function(f){return f},o=80,q=443,p=/^(?:GET|HEAD)$/,k,r;try{k=location.href}catch(t){k=document.createElement("a");k.href="";k=k.href}r=n.exec(k);k=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/.test(r[1]);var s={},u={type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",async:true,serializeArray:true,processData:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},converters:{text:{json:i.parse,
html:m,text:m,xml:g.parseXML}},contents:{xml:/xml/,html:/html/,json:/json/}};u.converters.html=u.converters.text;g.mix(d,j.Target);g.mix(d,{isLocal:k,setupConfig:function(f){g.mix(u,f,undefined,undefined,true)},setupTransport:function(f,l){s[f]=l},getTransport:function(f){return s[f]},getConfig:function(){return u}});return d},{requires:["json","event","./xhrobject"]});
KISSY.add("ajax/form-serializer",function(g,i){var j=/^(?:select|textarea)/i,h=/\r?\n/g,e=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;return{serialize:function(a){var b=[],d={};i.query(a).each(function(c){c=c.elements?g.makeArray(c.elements):[c];b.push.apply(b,c)});b=g.filter(b,function(c){return c.name&&!c.disabled&&(c.checked||j.test(c.nodeName)||e.test(c.type))});g.each(b,function(c){var n=i.val(c);n=g.map(g.makeArray(n),function(m){return m.replace(h,
"\r\n")});c=d[c.name]=d[c.name]||[];c.push.apply(c,n)});return g.param(d,undefined,undefined,false)}}},{requires:["dom"]});
KISSY.add("ajax/form",function(g,i,j,h){i.on("start",function(e){e=e.xhr.config;if(e.form){var a=j.get(e.form);if((a.encoding||a.enctype).toLowerCase()!="multipart/form-data"){if(a=h.serialize(a))if(e.hasContent){e.data=e.data||"";if(e.data)e.data+="&";e.data+=a}else e.url+=(/\?/.test(e.url)?"&":"?")+a}else{a=e.dataType[0];if(a=="*")a="text";e.dataType.length=2;e.dataType[0]="iframe";e.dataType[1]=a}}});return i},{requires:["./base","dom","./form-serializer"]});
KISSY.add("ajax/iframe-upload",function(g,i,j,h){function e(b){this.xhr=b}var a=document;h.setupConfig({converters:{iframe:h.getConfig().converters.text,text:{iframe:function(b){return b}}}});g.augment(e,{send:function(){var b=this.xhr,d=b.config,c,n=i.get(d.form);this.attrs={target:i.attr(n,"target")||"",action:i.attr(n,"action")||""};this.form=n;var m=g.guid("ajax-iframe");b.iframe=i.create("<iframe  id='"+m+"' name='"+m+"' style='position:absolute;left:-9999px;top:-9999px;'/>");b.iframeId=m;i.prepend(b.iframe,
a.body||a.documentElement);i.attr(n,{target:b.iframeId,action:d.url});if(d.data){c=d.data;d=d.serializeArray;c=g.unparam(c);m=[];for(var o in c)for(var q=g.makeArray(c[o]),p=0;p<q.length;p++){var k=a.createElement("input");k.type="hidden";k.name=o+(d?"[]":"");k.value=q[p];i.append(k,n);m.push(k)}c=m}this.fields=c;j.on(b.iframe,"load error",this._callback,this);n.submit()},_callback:function(b){var d=this.xhr;b=b.type;var c=d.iframe;if(c){i.attr(this.form,this.attrs);if(b=="load"){b=c.contentWindow.document;
d.responseXML=b;d.responseText=i.text(b.body);d.callback(200,"success")}else b=="error"&&d.callback(500,"error");i.remove(this.fields);j.detach(c);setTimeout(function(){i.remove(c)},30);d.iframe=null}},abort:function(){this._callback(0,1)}});h.setupTransport("iframe",e);return h},{requires:["dom","event","./base"]});
KISSY.add("ajax/jsonp",function(g,i){i.setupConfig({jsonp:"callback",jsonpCallback:function(){return g.guid("jsonp")}});i.on("start",function(j){j=j.xhr;var h=j.config;if(h.dataType[0]=="jsonp"){var e,a=h.jsonpCallback,b=g.isFunction(a)?a():a,d=window[b];h.url+=(/\?/.test(h.url)?"&":"?")+h.jsonp+"="+b;window[b]=function(c){if(arguments.length>1)c=g.makeArray(arguments);e=[c]};j.on("complete",function(){window[b]=d;if(d===undefined)try{delete window[b]}catch(c){}else e&&d(e[0])});j.converters=j.converters||
{};j.converters.script=j.converters.script||{};j.converters.script.json=function(){return e[0]};h.dataType.length=2;h.dataType[0]="script";h.dataType[1]="json"}});return i},{requires:["./base"]});
KISSY.add("ajax/script",function(g,i){function j(e){if(!e.config.crossDomain&&!e.config.forceScript)return new (i.getTransport("*"))(e);this.xhrObj=e;return 0}var h=document;i.setupConfig({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{text:{script:function(e){g.globalEval(e);return e}}}});g.augment(j,{send:function(){var e=this,a,b=this.xhrObj.config,d=h.head||h.getElementsByTagName("head")[0]||
h.documentElement;e.head=d;a=h.createElement("script");e.script=a;a.async="async";if(b.scriptCharset)a.charset=b.scriptCharset;a.src=b.url;a.onerror=a.onload=a.onreadystatechange=function(c){c=c||window.event;e._callback((c.type||"error").toLowerCase())};d.insertBefore(a,d.firstChild)},_callback:function(e,a){var b=this.script,d=this.xhrObj,c=this.head;if(b)if(a||!b.readyState||/loaded|complete/.test(b.readyState)||e=="error"){b.onerror=b.onload=b.onreadystatechange=null;c&&b.parentNode&&c.removeChild(b);
this.head=this.script=undefined;if(!a&&e!="error")d.callback(200,"success");else e=="error"&&d.callback(500,"scripterror")}},abort:function(){this._callback(0,1)}});i.setupTransport("script",j);return i},{requires:["./base","./xhr"]});
KISSY.add("ajax/xhr",function(g,i){function j(){try{return new window.XMLHttpRequest}catch(a){}}i.xhr=window.ActiveXObject?function(){var a;if(!(a=!i.isLocal&&j()))a:{try{a=new window.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:j;var h=i.xhr(),e=false;if(h){if("withCredentials"in h)e=true;h=function(a){this.xhrObj=a};g.augment(h,{send:function(){var a=this,b=a.xhrObj,d=b.config;if(!(d.crossDomain&&!e)){var c=i.xhr(),n,m;a.xhr=c;d.username?c.open(d.type,d.url,d.async,d.username,
d.password):c.open(d.type,d.url,d.async);if(n=d.xhrFields)for(m in n)c[m]=n[m];b.mimeType&&c.overrideMimeType&&c.overrideMimeType(b.mimeType);if(!d.crossDomain&&!b.requestHeaders["X-Requested-With"])b.requestHeaders["X-Requested-With"]="XMLHttpRequest";try{for(m in b.requestHeaders)c.setRequestHeader(m,b.requestHeaders[m])}catch(o){}c.send(d.hasContent&&d.data||null);if(!d.async||c.readyState==4)a._callback();else c.onreadystatechange=function(){a._callback()}}},abort:function(){this._callback(0,
1)},_callback:function(a,b){try{var d=this.xhr,c=this.xhrObj,n=c.config;if(b||d.readyState==4){d.onreadystatechange=g.noop;if(b)d.readyState!==4&&d.abort();else{var m=d.status;c.responseHeadersString=d.getAllResponseHeaders();var o=d.responseXML;if(o&&o.documentElement)c.responseXML=o;c.responseText=d.responseText;try{var q=d.statusText}catch(p){q=""}if(!m&&i.isLocal&&!n.crossDomain)m=c.responseText?200:404;else if(m===1223)m=204;c.callback(m,q)}}}catch(k){d.onreadystatechange=g.noop;b||c.callback(-1,
k)}}});i.setupTransport("*",h);return i}},{requires:["./base"]});
KISSY.add("ajax/xhrobject",function(g,i){function j(a){var b=a.responseText,d=a.responseXML,c=a.config,n=c.converters,m=a.converters||{},o,q,p=c.contents,k=c.dataType;if(b||d){for(c=a.mimeType||a.getResponseHeader("Content-Type");k[0]=="*";)k.shift();if(!k.length)for(o in p)if(p[o].test(c)){k[0]!=o&&k.unshift(o);break}k[0]=k[0]||"text";if(k[0]=="text"&&b!==undefined)q=b;else if(k[0]=="xml"&&d!==undefined)q=d;else g.each(["text","xml"],function(t){var s=k[0];if(m[t]&&m[t][s]||n[t]&&n[t][s]){k.unshift(t);
q=t=="text"?b:d;return false}})}p=k[0];for(c=1;c<k.length;c++){o=k[c];var r=m[p]&&m[p][o]||n[p]&&n[p][o];if(!r)throw"no covert for "+p+" => "+o;q=r(q);p=o}a.responseData=q}function h(a){g.mix(this,{responseData:null,config:a||{},timeoutTimer:null,responseText:null,responseXML:null,responseHeadersString:"",responseHeaders:null,requestHeaders:{},readyState:0,state:0,statusText:null,status:0,transport:null})}var e=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg;g.augment(h,i.Target,{setRequestHeader:function(a,b){this.requestHeaders[a]=
b;return this},getAllResponseHeaders:function(){return this.state===2?this.responseHeadersString:null},getResponseHeader:function(a){var b;if(this.state===2){if(!this.responseHeaders)for(this.responseHeaders={};b=e.exec(this.responseHeadersString);)this.responseHeaders[b[1]]=b[2];b=this.responseHeaders[a]}return b===undefined?null:b},overrideMimeType:function(a){if(!this.state)this.mimeType=a;return this},abort:function(a){a=a||"abort";this.transport&&this.transport.abort(a);this.callback(0,a);return this},
callback:function(a,b){if(this.state!=2){this.state=2;this.readyState=4;var d;if(a>=200&&a<300||a==304)if(a==304){b="notmodified";d=true}else try{j(this);b="success";d=true}catch(c){b="parsererror : "+c}else if(a<0)a=0;this.status=a;this.statusText=b;d?this.fire("success"):this.fire("error");this.fire("complete");this.transport=undefined}}});return h},{requires:["event"]});
KISSY.add("ajax",function(g,i,j){g.mix(j,{serialize:i.serialize,get:function(h,e,a,b,d){if(g.isFunction(e)){b=a;a=e;e=undefined}return j({type:d||"get",url:h,data:e,success:a,dataType:b})},post:function(h,e,a,b){if(g.isFunction(e)){b=a;a=e;e=undefined}return j.get(h,e,a,b,"post")},jsonp:function(h,e,a){if(g.isFunction(e)){a=e;e=undefined}return j.get(h,e,a,"jsonp")},getScript:g.getScript,getJSON:function(h,e,a){if(g.isFunction(e)){a=e;e=undefined}return j.get(h,e,a,"json")},upload:function(h,e,a,
b,d){if(g.isFunction(a)){d=b;b=a;a=undefined}return j({url:h,type:"post",dataType:d,form:e,data:a,success:b})}});return j},{requires:["ajax/form-serializer","ajax/base","ajax/xhrobject","ajax/xhr","ajax/script","ajax/jsonp","ajax/form","ajax/iframe-upload"]});
