/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
(function(e,r){var p=this,z={mix:function(i,m,o,k){if(!m||!i)return i;if(o===r)o=true;var l,n,s;if(k&&(s=k.length))for(l=0;l<s;l++){n=k[l];if(n in m)if(o||!(n in i))i[n]=m[n]}else for(n in m)if(o||!(n in i))i[n]=m[n];return i}},u=p&&p[e]||{},B=0;p=u.__HOST||(u.__HOST=p||{});e=p[e]=z.mix(u,z,false);e.mix(e,{__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],version:"1.20dev",buildTime:"@TIMESTAMP@",merge:function(){var i={},m,o=arguments.length;for(m=0;m<o;m++)e.mix(i,arguments[m]);return i},
augment:function(){var i=e.makeArray(arguments),m=i.length-2,o=i[0],k=i[m],l=i[m+1],n=1;if(!e.isArray(l)){k=l;l=r;m++}if(!e.isBoolean(k)){k=r;m++}for(;n<m;n++)e.mix(o.prototype,i[n].prototype||i[n],k,l);return o},extend:function(i,m,o,k){if(!m||!i)return i;var l=Object.create?function(w,A){return Object.create(w,{constructor:{value:A}})}:function(w,A){function x(){}x.prototype=w;var y=new x;y.constructor=A;return y},n=m.prototype,s;s=l(n,i);i.prototype=e.mix(s,i.prototype);i.superclass=l(n,m);o&&
e.mix(s,o);k&&e.mix(i,k);return i},__init:function(){this.Config=this.Config||{};this.Env=this.Env||{};this.Config.debug="@DEBUG@"},namespace:function(){var i=e.makeArray(arguments),m=i.length,o=null,k,l,n,s=i[m-1]===true&&m--;for(k=0;k<m;k++){n=(""+i[k]).split(".");o=s?p:this;for(l=p[n[0]]===o?1:0;l<n.length;++l)o=o[n[l]]=o[n[l]]||{}}return o},app:function(i,m){var o=e.isString(i),k=o?p[i]||{}:i,l=0,n=e.__APP_INIT_METHODS.length;for(e.mix(k,this,true,e.__APP_MEMBERS);l<n;l++)e[e.__APP_INIT_METHODS[l]].call(k);
e.mix(k,e.isFunction(m)?m():m);o&&(p[i]=k);return k},config:function(i){for(var m in i)this["_"+m]&&this["_"+m](i[m])},log:function(i,m,o){if(e.Config.debug){if(o)i=o+": "+i;if(p.console!==r&&console.log)console[m&&console[m]?m:"log"](i)}},error:function(i){if(e.Config.debug)throw i;},guid:function(i){return(i||"")+B++}});e.__init();return e})("KISSY");
(function(e,r){function p(){if(F)return F;var d="";e.each(y,function(h){d+=h+"|"});d=d.slice(0,-1);return F=RegExp(d,"g")}function z(){if(H)return H;var d="";e.each(D,function(h){d+=h+"|"});d+="&#(\\d{1,5});";return H=RegExp(d,"g")}function u(d){var h=typeof d;return d===null||h!=="object"&&h!=="function"}var B=e.__HOST,i=Object.prototype.toString,m=Array.prototype,o=m.indexOf,k=m.lastIndexOf,l=m.filter,n=String.prototype.trim,s=/^\s+|\s+$/g,w=encodeURIComponent("[]"),A=/^(\w+)\[\]$/,x={},y={"&amp;":"&",
"&gt;":">","&lt;":"<","&quot;":'"'},D={},F,H,G;for(G in y)D[y[G]]=G;e.mix(e,{type:function(d){return d==null?String(d):x[i.call(d)]||"object"},isNull:function(d){return d===null},isUndefined:function(d){return d===r},isEmptyObject:function(d){for(var h in d)if(h!==r)return false;return true},isPlainObject:function(d){return d&&i.call(d)==="[object Object]"&&"isPrototypeOf"in d},clone:function(d,h,a){var b=d,c,f,g=a||{};if(d&&((c=e.isArray(d))||e.isPlainObject(d))){if(d["__~ks_cloned"])return g[d["__~ks_cloned"]];
d["__~ks_cloned"]=b=e.guid();g[b]=d;if(c)b=h?e.filter(d,h):d.concat();else{b={};for(f in d)if(f!=="__~ks_cloned"&&d.hasOwnProperty(f)&&(!h||h.call(d,d[f],f,d)!==false))b[f]=e.clone(d[f],h,g)}}if(!a){e.each(g,function(j){if(j["__~ks_cloned"])try{delete j["__~ks_cloned"]}catch(q){j["__~ks_cloned"]=r}});g=r}return b},trim:n?function(d){return d==r?"":n.call(d)}:function(d){return d==r?"":d.toString().replace(s,"")},substitute:function(d,h,a){if(!e.isString(d)||!e.isPlainObject(h))return d;return d.replace(a||
/\\?\{([^{}]+)\}/g,function(b,c){if(b.charAt(0)==="\\")return b.slice(1);return h[c]!==r?h[c]:""})},each:function(d,h,a){var b,c=0,f=d&&d.length,g=f===r||e.type(d)==="function";a=a||B;if(g)for(b in d){if(h.call(a,d[b],b,d)===false)break}else for(b=d[0];c<f&&h.call(a,b,c,d)!==false;b=d[++c]);return d},indexOf:o?function(d,h){return o.call(h,d)}:function(d,h){for(var a=0,b=h.length;a<b;++a)if(h[a]===d)return a;return-1},lastIndexOf:k?function(d,h){return k.call(h,d)}:function(d,h){for(var a=h.length-
1;a>=0;a--)if(h[a]===d)break;return a},unique:function(d,h){h&&d.reverse();for(var a=d.slice(),b=0,c,f;b<a.length;){for(f=a[b];(c=e.lastIndexOf(f,a))!==b;)a.splice(c,1);b+=1}h&&a.reverse();return a},inArray:function(d,h){return e.indexOf(d,h)>-1},filter:l?function(d,h,a){return l.call(d,h,a||this)}:function(d,h,a){var b=[];e.each(d,function(c,f,g){if(h.call(a||this,c,f,g))b.push(c)});return b},now:function(){return(new Date).getTime()},fromUnicode:function(d){return d.replace(/\\u([a-f\d]{4})/ig,
function(h,a){return String.fromCharCode(parseInt(a,16))})},escapeHTML:function(d){return d.replace(p(),function(h){return D[h]})},unEscapeHTML:function(d){return d.replace(z(),function(h,a){return y[h]||String.fromCharCode(+a)})},makeArray:function(d){if(d===null||d===r)return[];if(e.isArray(d))return d;if(typeof d.length!=="number"||e.isString(d)||e.isFunction(d))return[d];for(var h=[],a=0,b=d.length;a<b;a++)h[a]=d[a];return h},param:function(d,h){if(!e.isPlainObject(d))return"";h=h||"&";var a=
[],b,c;for(b in d){c=d[b];b=encodeURIComponent(b);if(u(c))a.push(b,"=",encodeURIComponent(c+""),h);else if(e.isArray(c)&&c.length)for(var f=0,g=c.length;f<g;++f)u(c[f])&&a.push(b,w+"=",encodeURIComponent(c[f]+""),h)}a.pop();return a.join("")},unparam:function(d,h){if(typeof d!=="string"||(d=e.trim(d)).length===0)return{};for(var a={},b=d.split(h||"&"),c,f,g,j,q=0,v=b.length;q<v;++q){c=b[q].split("=");f=decodeURIComponent(c[0]);try{g=decodeURIComponent(c[1]||"")}catch(t){g=c[1]||""}if((j=f.match(A))&&
j[1]){a[j[1]]=a[j[1]]||[];a[j[1]].push(g)}else a[f]=g}return a},later:function(d,h,a,b,c){h=h||0;b=b||{};var f=d,g=e.makeArray(c),j;if(e.isString(d))f=b[d];f||e.error("method undefined");d=function(){f.apply(b,g)};j=a?setInterval(d,h):setTimeout(d,h);return{id:j,interval:a,cancel:function(){this.interval?clearInterval(j):clearTimeout(j)}}}});e.mix(e,{isBoolean:u,isNumber:u,isString:u,isFunction:u,isArray:u,isDate:u,isRegExp:u,isObject:u});e.each("Boolean Number String Function Array Date RegExp Object".split(" "),
function(d,h){x["[object "+d+"]"]=h=d.toLowerCase();e["is"+d]=function(a){return e.type(a)==h}})})(KISSY);
(function(e,r){function p(a){a=a.split("/");for(var b=[],c,f=0;f<a.length;f++){c=a[f];if(c!=".")c==".."?b.pop():b.push(c)}return b.join("/")}function z(a,b){if(!b)return b;if(e.isArray(b)){for(var c=0;c<b.length;c++)b[c]=z(a,b[c]);return b}if(b.lastIndexOf("../",0)==0||b.lastIndexOf("./",0)==0){c=s;var f;if((f=a.lastIndexOf("/"))!=-1)c=a.substring(0,f+1);return p(c+b)}else return b.indexOf("./")!=-1||b.indexOf("../")!=-1?p(b):b}function u(a){return a.replace(/(-min)?\.js[^/]*$/i,s)}function B(a){if(a.charAt(a.length-
1)!="/")a+="/";a=e.trim(a);if(!a.match(/^(http(s)?)|(file):/i)&&a.lastIndexOf("/",0)!=0)a=G+a;return p(a)}function i(a){for(var b=0;b<a.length;b++)if(a[b].match(/\/$/))a[b]+="index";return a}function m(a){var b=a.src,c=a.getAttribute("data-combo-prefix")||"??";a=a.getAttribute("data-combo-sep")||",";a=b.split(a);var f,g=a[0];c=g.indexOf(c);if(c==-1)f=b.replace(d,"$1");else{f=g.substring(0,c);b=g.substring(c+2,g.length);if(b.match(h))f+=b.replace(d,"$1");else e.each(a,function(j){if(j.match(h)){f+=
j.replace(d,"$1");return false}})}if(!f.match(/^(http(s)?)|(file):/i)&&f.lastIndexOf("/",0)!=0)f=G+f;return f}if(!e.use){var o=e.__HOST,k=!!navigator.userAgent.match(/MSIE/),l=o.document,n=l.getElementsByTagName("head")[0]||l.documentElement,s="",w=2,A=3,x=4,y=e.mix,D=l.addEventListener?function(a,b){a.addEventListener("load",b,false)}:function(a,b){var c=a.onreadystatechange;a.onreadystatechange=function(){var f=a.readyState;if(f==="loaded"||f==="complete"){a.onreadystatechange=null;c&&c();b.call(this)}}},
F=/\.css(?:\?|$)/i,H=encodeURIComponent(e.buildTime),G=location.href.replace(/[^/]*$/i,s);o={__currentModule:null,__startLoadTime:0,__startLoadModuleName:null,add:function(a,b,c){var f=this.Env.mods,g;if(e.isString(a)&&!c&&e.isPlainObject(b)){g={};g[a]=b;a=g}if(e.isPlainObject(a)){e.each(a,function(q,v){q.name=v;f[v]&&y(q,f[v],false)});y(f,a);return this}if(e.isString(a)){var j;if(c&&(j=c.host)){a=f[j];if(!a)return this;if(this.__isAttached(j))b.call(this,this);else{a.fns=a.fns||[];a.fns.push(b)}return this}this.__registerModule(a,
b,c);if(c&&c.attach===false)return this;b=f[a];a=z(a,b.requires);if(this.__isAttached(a))this.__attachMod(b);else if(this.Config.debug&&!b)for(a=e.makeArray(a).length-1;a>=0;a--);return this}if(e.isFunction(a)){c=b;b=a;if(k){a=this.__findModuleNameByInteractive();this.__registerModule(a,b,c);this.__startLoadModuleName=null;this.__startLoadTime=0}else this.__currentModule={def:b,config:c};return this}return this},__findModuleNameByInteractive:function(){for(var a=document.getElementsByTagName("script"),
b,c,f=0;f<a.length;f++){c=a[f];if(c.readyState=="interactive"){b=c;break}}if(!b)return this.__startLoadModuleName;a=b.src;if(a.lastIndexOf(this.Config.base,0)==0)return u(a.substring(this.Config.base.length));b=this.__packages;for(var g in b){c=b[g].path;if(b.hasOwnProperty(g)&&a.lastIndexOf(c,0)==0)return u(a.substring(c.length))}},__registerModule:function(a,b,c){c=c||{};var f=this.Env.mods,g=f[a]||{};y(g,{name:a,status:w});g.fns=g.fns||[];g.fns.push(b);y(f[a]=g,c)},_packages:function(a){var b;
b=this.__packages=this.__packages||{};e.each(a,function(c){b[c.name]=c;if(c.path)c.path=B(c.path);if(c.tag)c.tag=encodeURIComponent(c.tag)})},_combine:function(a,b){var c=this,f;if(e.isObject(a))e.each(a,function(g,j){e.each(g,function(q){c._combine(q,j)})});else{f=c.__combines=c.__combines||{};if(b)f[a]=b;else return f[a]||a}},__mixMods:function(a){var b=this.Env.mods,c=a.Env.mods,f;for(f in c)this.__mixMod(b,c,f,a)},__mixMod:function(a,b,c,f){var g=a[c]||{},j=g.status;e.mix(g,e.clone(b[c]));if(j)g.status=
j;f&&this.__buildPath(g,f.Config.base);a[c]=g},use:function(a,b,c){a=a.replace(/\s+/g,s).split(",");i(a);c=c||{};var f=this,g;c.global&&f.__mixMods(c.global);if(f.__isAttached(a)){var j=f.__getModules(a);b&&b.apply(f,j)}else{e.each(a,function(q){f.__attachModByName(q,function(){if(!g&&f.__isAttached(a)){g=true;var v=f.__getModules(a);b&&b.apply(f,v)}},c)});return f}},__getModules:function(a){var b=this,c=[b];e.each(a,function(f){c.push(b.require(f))});return c},require:function(a){a=this.Env.mods[a];
var b=this.onRequire&&this.onRequire(a);if(b!==undefined)return b;return a&&a.value},__getPackagePath:function(a){if(a.packagepath)return a.packagepath;var b=this._combine(a.name),c=this.__packages||{},f="",g;for(g in c)if(c.hasOwnProperty(g)&&b.lastIndexOf(g,0)==0&&g.length>f)f=g;c=(b=c[f])&&b.path||this.Config.base;if(b&&b.charset)a.charset=b.charset;a.tag=b?b.tag:H;return a.packagepath=c},__attachModByName:function(a,b,c){var f=this.Env.mods,g=f[a];if(!g){g=this.Config.componentJsName||function(j){return j+
"-min.js"};g={path:e.isFunction(g)?g(this._combine(a)):g,charset:"utf-8"};f[a]=g}g.name=a;g&&g.status===x||this.__attach(g,b,c)},__attach:function(a,b,c){function f(){if(!v&&g.__isAttached(a.requires)){a.status===w&&g.__attachMod(a);if(a.status===x){v=true;b()}}}var g=this,j=g.Env.mods,q=(a.requires||[]).concat();a.requires=q;e.each(q,function(t,C,E){t=E[C]=z(a.name,t);(C=j[t])&&C.status===x||g.__attachModByName(t,f,c)});g.__buildPath(a,g.__getPackagePath(a));g.__load(a,function(){a.requires=a.requires||
[];var t=[];e.each(a.requires,function(C,E,I){C=I[E]=z(a.name,C);E=j[C];I=e.inArray(C,q);E&&E.status===x||I||g.__attachModByName(C,f,c);if(!I&&(!E||E.status<w))t.push(C)});t.length!=0&&t.unshift(a.name);if(e.isString(a.csspath)||e.isString(a.cssfullpath)){g.__buildPath(a,g.__getPackagePath(a));e.getScript(a.cssfullpath)}f()},c);var v=false},__attachMod:function(a){var b=this,c=a.fns;c&&e.each(c,function(f){f=e.isFunction(f)?f.apply(b,b.__getModules(a.requires)):f;a.value=a.value||f});a.status=x},
__isAttached:function(a){var b=this.Env.mods,c=true;e.each(a,function(f){f=b[f];if(!f||f.status!==x)return c=false});return c},__load:function(a,b,c){function f(){c.global&&j.__mixMod(j.Env.mods,c.global.Env.mods,a.name,c.global)}function g(){v[q]=w;if(a.status!==A){f();if(a.status!==x)a.status=w;b()}}var j=this,q=a.fullpath,v=e.Env._loadQueue,t=v[q];a.status=a.status||0;if(a.status<1&&t)a.status=t.nodeName?1:w;if(e.isString(a.cssfullpath)){e.getScript(a.cssfullpath);a.cssfullpath=a.csspath=w}if(a.status<
1&&q){a.status=1;if(k){j.__startLoadModuleName=a.name;j.__startLoadTime=Number(+new Date)}t=e.getScript(q,{success:function(){if(j.__currentModule){j.__registerModule(a.name,j.__currentModule.def,j.__currentModule.config);j.__currentModule=null}f();if(!(a.fns&&a.fns.length>0))a.status=A;g()},error:function(){a.status=A;g()},charset:a.charset});F.test(q)||(v[q]=t)}else a.status===1?D(t,g):b()},__buildPath:function(a,b){function c(g,j){if(!a[g]&&a[j]){a[j]=z(a.name,a[j]);a[g]=(b||f.base)+a[j]}if(a[g]&&
f.debug)a[g]=a[g].replace(/-min/ig,s);if(a[g]&&!a[g].match(/\?t=/)&&a.tag)a[g]+="?t="+a.tag}var f=this.Config;c("fullpath","path");c("cssfullpath","csspath")},getScript:function(a,b,c){var f=/\.css(?:\?|$)/i.test(a),g=l.createElement(f?"link":"script"),j=b,q,v,t;if(e.isPlainObject(j)){b=j.success;q=j.error;v=j.timeout;c=j.charset}if(f){g.href=a;g.rel="stylesheet"}else{g.src=a;g.async=true}if(c)g.charset=c;if(f)e.isFunction(b)&&b.call(g);else D(g,function(){if(t){t.cancel();t=r}e.isFunction(b)&&b.call(g)});
if(e.isFunction(q)){l.addEventListener&&g.addEventListener("error",function(){if(t){t.cancel();t=r}q.call(g)},false);t=e.later(function(){t=r;q()},(v||this.Config.timeout)*1E3)}n.insertBefore(g,n.firstChild);return g}};y(e,o);var d=/^(.*)(seed|kissy)(-min)?\.js[^/]*/i,h=/(seed|kissy)(-min)?\.js/i;e.__initLoader=function(){var a=l.getElementsByTagName("script");a=m(a[a.length-1]);this.Env.mods={};this.Env._loadQueue={};if(!this.Config.base)this.Config.base=B(a);if(!this.Config.timeout)this.Config.timeout=
10};e.__initLoader();e.each(o,function(a,b){e.__APP_MEMBERS.push(b)});e.__APP_INIT_METHODS.push("__initLoader")}})(KISSY);
(function(e){var r=e.__HOST,p=r.document,z=p.documentElement,u=false,B=[],i=false,m=/^#?([\w-]+)$/,o=/\S/;e.mix(e,{isWindow:function(k){return e.type(k)==="object"&&"setInterval"in k&&"document"in k&&k.document.nodeType==9},globalEval:function(k){if(k&&o.test(k)){var l=p.getElementsByTagName("head")[0]||z,n=p.createElement("script");n.text=k;l.insertBefore(n,l.firstChild);l.removeChild(n)}},ready:function(k){i||this._bindReady();u?k.call(r,this):B.push(k);return this},_bindReady:function(){var k=
this,l=p.documentElement.doScroll,n=l?"onreadystatechange":"DOMContentLoaded",s=function(){k._fireReady()};i=true;if(p.readyState==="complete")return s();if(p.addEventListener){var w=function(){p.removeEventListener(n,w,false);s()};p.addEventListener(n,w,false);r.addEventListener("load",s,false)}else{var A=function(){if(p.readyState==="complete"){p.detachEvent(n,A);s()}};p.attachEvent(n,A);r.attachEvent("onload",s);var x=false;try{x=r.frameElement==null}catch(y){}if(l&&x){var D=function(){try{l("left");
s()}catch(F){setTimeout(D,1)}};D()}}},_fireReady:function(){if(!u){u=true;if(B){for(var k,l=0;k=B[l++];)k.call(r,this);B=null}}},available:function(k,l){if((k=(k+"").match(m)[1])&&e.isFunction(l))var n=1,s=e.later(function(){if(p.getElementById(k)&&(l()||1)||++n>500)s.cancel()},40,true)}});if(location&&(location.search||"").indexOf("ks-debug")!==-1)e.Config.debug=true})(KISSY);(function(e){e.config({combine:{core:["dom","ua","event","node","json","ajax","anim","base","cookie"]}})})(KISSY);
