/*
Copyright 2011, KISSY UI Library v1.30dev
MIT Licensed
build time: Dec 13 18:46
*/
KISSY.add("dom/attr",function(q,c,u,v){function E(l,g){g=B[g]||g;var h=G[g];return h&&h.get?h.get(l,g):l[g]}u=document.documentElement;var C=!u.hasAttribute,y=u.textContent===v?"innerText":"textContent",o=c._nodeName,n=c._isElementNode,s=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,w=/^(?:button|input|object|select|textarea)$/i,j=/^a(?:rea)?$/i,r=/:|^on/,m=/\r/g,k={},t={val:1,css:1,html:1,text:1,data:1,width:1,height:1,
offset:1,scrollTop:1,scrollLeft:1},z={tabindex:{get:function(l){var g=l.getAttributeNode("tabindex");return g&&g.specified?parseInt(g.value,10):w.test(l.nodeName)||j.test(l.nodeName)&&l.href?0:v}},style:{get:function(l){return l.style.cssText},set:function(l,g){l.style.cssText=g}}},B={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",
contenteditable:"contentEditable"},A={get:function(l,g){return c.prop(l,g)?g.toLowerCase():v},set:function(l,g,h){if(g===false)c.removeAttr(l,h);else{g=B[h]||h;if(g in l)l[g]=true;l.setAttribute(h,h.toLowerCase())}return h}},G={},F={},H={option:{get:function(l){var g=l.attributes.value;return!g||g.specified?l.value:l.text}},select:{get:function(l){var g=l.selectedIndex,h=l.options;l=l.type==="select-one";if(g<0)return null;else if(l)return c.val(h[g]);g=[];l=0;for(var a=h.length;l<a;++l)h[l].selected&&
g.push(c.val(h[l]));return g},set:function(l,g){var h=q.makeArray(g);q.each(l.options,function(a){a.selected=q.inArray(c.val(a),h)});if(!h.length)l.selectedIndex=-1;return h}}};if(C){F={get:function(l,g){var h;return(h=l.getAttributeNode(g))&&h.nodeValue!==""?h.nodeValue:v},set:function(l,g,h){var a=l.getAttributeNode(h);if(a)a.nodeValue=g;else try{var e=l.ownerDocument.createAttribute(h);e.value=g;l.setAttributeNode(e)}catch(d){return l.setAttribute(h,g,0)}}};k=B;z.tabIndex=z.tabindex;q.each(["href",
"src","width","height","colSpan","rowSpan"],function(l){z[l]={get:function(g){g=g.getAttribute(l,2);return g===null?v:g}}});H.button=z.value=F}q.each(["radio","checkbox"],function(l){H[l]={get:function(g){return g.getAttribute("value")===null?"on":g.value},set:function(g,h){if(q.isArray(h))return g.checked=q.inArray(c.val(g),h)}}});q.mix(c,{prop:function(l,g,h){if(q.isPlainObject(g))for(var a in g)c.prop(l,a,g[a]);else{l=c.query(l);g=B[g]||g;var e=G[g];if(h!==v)l.each(function(d){if(e&&e.set)e.set(d,
h,g);else d[g]=h});else if(l.length)return E(l[0],g)}},hasProp:function(l,g){for(var h=c.query(l),a=0;a<h.length;a++)if(E(h[a],g)!==v)return true;return false},removeProp:function(l,g){g=B[g]||g;c.query(l).each(function(h){try{h[g]=v;delete h[g]}catch(a){}})},attr:function(l,g,h,a){if(q.isPlainObject(g)){a=h;for(var e in g)c.attr(l,e,g[e],a)}else if(g=q.trim(g)){if(a&&t[g])return c[g](l,h);g=g.toLowerCase();if(a&&t[g])return c[g](l,h);l=c.query(l);if(h===v)return c.__attr(l[0],g);else l.each(function(d){c.__attr(d,
g,h)})}},__attr:function(l,g,h){if(n(l)){g=k[g]||g;var a;a=o(l,"form")?F:s.test(g)?A:r.test(g)?F:z[g];if(h===v){if(a&&a.get)return a.get(l,g);l=l.getAttribute(g);return l===null?v:l}else a&&a.set?a.set(l,h,g):l.setAttribute(g,""+h)}},removeAttr:function(l,g){g=g.toLowerCase();g=k[g]||g;c.query(l).each(function(h){if(n(h)){var a;h.removeAttribute(g);if(s.test(g)&&(a=B[g]||g)in h)h[a]=false}})},hasAttr:C?function(l,g){g=g.toLowerCase();for(var h=c.query(l),a=0;a<h.length;a++){var e=h[a].getAttributeNode(g);
if(e&&e.specified)return true}return false}:function(l,g){for(var h=c.query(l),a=0;a<h.length;a++)if(h[a].hasAttribute(g))return true;return false},val:function(l,g){var h,a;if(g===v){var e=c.get(l);if(e){if((h=H[e.nodeName.toLowerCase()]||H[e.type])&&"get"in h&&(a=h.get(e,"value"))!==v)return a;a=e.value;return typeof a==="string"?a.replace(m,""):q.isNullOrUndefined(a)?"":a}}else c.query(l).each(function(d){if(d.nodeType===1){var b=g;if(q.isNullOrUndefined(b))b="";else if(typeof b==="number")b+=
"";else if(q.isArray(b))b=q.map(b,function(f){return q.isNullOrUndefined(b)?"":f+""});h=H[d.nodeName.toLowerCase()]||H[d.type];if(!h||!("set"in h)||h.set(d,b,"value")===v)d.value=b}})},text:function(l,g){if(g===v){var h=c.get(l);if(n(h))return h[y]||"";else if(c._nodeTypeIs(h,c.TEXT_NODE))return h.nodeValue;return v}else c.query(l).each(function(a){if(n(a))a[y]=g;else if(c._nodeTypeIs(a,c.TEXT_NODE))a.nodeValue=g})}});return c},{requires:["./base","ua"]});
KISSY.add("dom/base",function(q,c,u){function v(y,o){return y&&y.nodeType===o}var E={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},C={_isCustomDomain:function(y){y=y||window;var o=y.document.domain;y=y.location.hostname;return o!=y&&o!="["+y+"]"},_genEmptyIframeSrc:function(y){y=y||window;if(c.ie&&C._isCustomDomain(y))return"javascript:void(function(){"+
encodeURIComponent("document.open();document.domain='"+y.document.domain+"';document.close();")+"}())"},_NODE_TYPE:E,_isElementNode:function(y){return v(y,C.ELEMENT_NODE)},_getWin:function(y){return y&&"scrollTo"in y&&y.document?y:v(y,C.DOCUMENT_NODE)?y.defaultView||y.parentWindow:y===u||y===null?window:false},_nodeTypeIs:v,_isNodeList:function(y){return y&&!y.nodeType&&y.item&&!y.setTimeout},_nodeName:function(y,o){return y&&y.nodeName.toLowerCase()===o.toLowerCase()}};q.mix(C,E);return C},{requires:["ua"]});
KISSY.add("dom/class",function(q,c,u){function v(n){return(C+n+C).replace(o,C)}function E(n,s,w,j){if(!(s=q.trim(s)))return j?false:u;n=c.query(n);var r=n.length,m=s.split(y);s=[];for(var k=0;k<m.length;k++){var t=q.trim(m[k]);t&&s.push(t)}for(k=0;k<r;k++){m=n[k];if(c._isElementNode(m)){m=w(m,s,s.length);if(m!==u)return m}}if(j)return false;return u}var C=" ",y=/[\.\s]\s*\.?/,o=/[\n\t]/g;q.mix(c,{__hasClass:function(n,s){var w=n.className;if(w){w=v(w);return w.indexOf(C+s+C)>-1}else return false},
hasClass:function(n,s){return E(n,s,function(w,j,r){if(w=w.className){w=v(w);for(var m=0,k=true;m<r;m++)if(w.indexOf(C+j[m]+C)<0){k=false;break}if(k)return true}},true)},addClass:function(n,s){E(n,s,function(w,j,r){var m=w.className;if(m){var k=v(m);m=m;for(var t=0;t<r;t++)if(k.indexOf(C+j[t]+C)<0)m+=C+j[t];w.className=q.trim(m)}else w.className=s},u)},removeClass:function(n,s){E(n,s,function(w,j,r){var m=w.className;if(m)if(r){m=v(m);for(var k=0,t;k<r;k++)for(t=C+j[k]+C;m.indexOf(t)>=0;)m=m.replace(t,
C);w.className=q.trim(m)}else w.className=""},u)},replaceClass:function(n,s,w){c.removeClass(n,s);c.addClass(n,w)},toggleClass:function(n,s,w){var j=q.isBoolean(w),r;E(n,s,function(m,k,t){for(var z=0,B;z<t;z++){B=k[z];r=j?!w:c.hasClass(m,B);c[r?"removeClass":"addClass"](m,B)}},u)}});return c},{requires:["dom/base"]});
KISSY.add("dom/create",function(q,c,u,v){function E(a){var e=q.require("event");e&&e.detach(a);c.removeData(a)}function C(a,e,d){if(w(e,c.DOCUMENT_FRAGMENT_NODE)){e=e.childNodes;d=d.childNodes;for(var b=0;e[b];){d[b]&&C(a,e[b],d[b]);b++}}else if(j(e)){e=e.getElementsByTagName("*");d=d.getElementsByTagName("*");for(b=0;e[b];){d[b]&&a(e[b],d[b]);b++}}}function y(a,e){var d=q.require("event");if(!(j(e)&&!c.hasData(a))){var b=c.data(a),f;for(f in b)c.data(e,f,b[f]);if(d){d._removeData(e);d._clone(a,e)}}}
function o(a,e){e.clearAttributes&&e.clearAttributes();e.mergeAttributes&&e.mergeAttributes(a);var d=e.nodeName.toLowerCase(),b=a.childNodes;if(d==="object"&&!e.childNodes.length)for(d=0;d<b.length;d++)e.appendChild(b[d].cloneNode(true));else if(d==="input"&&(a.type==="checkbox"||a.type==="radio")){if(a.checked)e.defaultChecked=e.checked=a.checked;if(e.value!==a.value)e.value=a.value}else if(d==="option")e.selected=a.defaultSelected;else if(d==="input"||d==="textarea")e.defaultValue=a.defaultValue;
e.removeAttribute(c.__EXPANDO)}function n(a,e){var d=null,b,f;if(a&&(a.push||a.item)&&a[0]){e=e||a[0].ownerDocument;d=e.createDocumentFragment();a=q.makeArray(a);b=0;for(f=a.length;b<f;b++)d.appendChild(a[b])}return d}var s=document;u=u.ie;var w=c._nodeTypeIs,j=c._isElementNode,r=q.isString,m=s.createElement("div"),k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,t=/<([\w:]+)/,z=/^\s+/,B=u&&u<9,A=/<|&#?\w+;/,G=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;q.mix(c,{create:function(a,e,d,
b){if(j(a)||w(a,c.TEXT_NODE))return c.clone(a);var f=null;if(!r(a))return f;if(b===v)b=true;if(b)a=q.trim(a);if(!a)return f;b=c._creators;var i,p;d=d||s;var x,D="div";if(A.test(a))if(x=G.exec(a))f=d.createElement(x[1]);else{a=a.replace(k,"<$1></$2>");if((x=t.exec(a))&&(i=x[1]))D=i.toLowerCase();i=(b[D]||b.div)(a,d);if(B&&(p=a.match(z)))i.insertBefore(d.createTextNode(p[0]),i.firstChild);a=i.childNodes;if(a.length===1)f=a[0].parentNode.removeChild(a[0]);else if(a.length)f=n(a,d)}else f=d.createTextNode(a);
f=f;if(q.isPlainObject(e))if(j(f))c.attr(f,e,true);else w(f,c.DOCUMENT_FRAGMENT_NODE)&&c.attr(f.childNodes,e,true);return f},_creators:{div:function(a,e){var d=e&&e!=s?e.createElement("div"):m;d.innerHTML="m<div>"+a+"</div>";return d.lastChild}},html:function(a,e,d,b){a=c.query(a);var f=a[0];if(f)if(e===v)return j(f)?f.innerHTML:null;else{var i=false;e+="";if(!e.match(/<(?:script|style)/i)&&(!B||!e.match(z))&&!g[(e.match(t)||["",""])[1].toLowerCase()])try{a.each(function(x){if(j(x)){E(x.getElementsByTagName("*"));
x.innerHTML=e}});i=true}catch(p){}if(!i){e=c.create(e,0,f.ownerDocument,false);a.each(function(x){if(j(x)){c.empty(x);c.append(e,x,d)}})}b&&b()}},remove:function(a,e){c.query(a).each(function(d){if(!e&&j(d)){var b=d.getElementsByTagName("*");E(b);E(d)}d.parentNode&&d.parentNode.removeChild(d)})},clone:function(a,e,d,b){a=c.get(a);if(!a)return null;var f=a.cloneNode(e);if(j(a)||w(a,c.DOCUMENT_FRAGMENT_NODE)){j(a)&&o(a,f);e&&C(o,a,f)}if(d){y(a,f);e&&b&&C(y,a,f)}return f},empty:function(a){c.query(a).each(function(e){c.remove(e.childNodes)})},
_nl2frag:n});var F=c._creators,H=c.create,l=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,g={option:"select",optgroup:"select",area:"map",thead:"table",td:"tr",th:"tr",tr:"tbody",tbody:"table",tfoot:"table",caption:"table",colgroup:"table",col:"colgroup",legend:"fieldset"},h;for(h in g)(function(a){F[h]=function(e,d){return H("<"+a+">"+e+"</"+a+">",null,d)}})(g[h]);if(u<8)F.tbody=function(a,e){var d=H("<table>"+a+"</table>",null,e),b=d.children.tags("tbody")[0];d.children.length>1&&b&&!l.test(a)&&
b.parentNode.removeChild(b);return d};q.mix(F,{thead:F.tbody,tfoot:F.tbody,caption:F.tbody,colgroup:F.tbody});return c},{requires:["./base","ua"]});
KISSY.add("dom/data",function(q,c,u){var v=window,E="_ks_data_"+q.now(),C={},y={},o={};o.applet=1;o.object=1;o.embed=1;var n={hasData:function(j,r){if(j)if(r!==u){if(r in j)return true}else if(!q.isEmptyObject(j))return true;return false}},s={hasData:function(j,r){if(j==v)return s.hasData(y,r);return n.hasData(j[E],r)},data:function(j,r,m){if(j==v)return s.data(y,r,m);var k=j[E];if(m!==u){k=j[E]=j[E]||{};k[r]=m}else if(r!==u)return k&&k[r];else return k=j[E]=j[E]||{}},removeData:function(j,r){if(j==
v)return s.removeData(y,r);var m=j[E];if(m)if(r!==u){delete m[r];q.isEmptyObject(m)&&s.removeData(j,u)}else try{delete j[E]}catch(k){j[E]=null}}},w={hasData:function(j,r){var m=j[E];if(!m)return false;return n.hasData(C[m],r)},data:function(j,r,m){if(!o[j.nodeName.toLowerCase()]){var k=j[E];k||(k=j[E]=q.guid());j=C[k];if(m!==u){j=C[k]=C[k]||{};j[r]=m}else if(r!==u)return j&&j[r];else return j=C[k]=C[k]||{}}},removeData:function(j,r){var m=j[E];if(m){var k=C[m];if(k)if(r!==u){delete k[r];q.isEmptyObject(k)&&
w.removeData(j,u)}else{delete C[m];try{delete j[E]}catch(t){}j.removeAttribute&&j.removeAttribute(E)}}}};q.mix(c,{__EXPANDO:E,hasData:function(j,r){for(var m=false,k=c.query(j),t=0;t<k.length;t++)if(m=(m=k[t])&&m.nodeType?w.hasData(m,r):s.hasData(m,r))break;return m},data:function(j,r,m){if(q.isPlainObject(r))for(var k in r)c.data(j,k,r[k]);else if(m===u)if((j=c.get(j))&&j.nodeType)return w.data(j,r,m);else{if(j)return s.data(j,r,m)}else c.query(j).each(function(t){t&&t.nodeType?w.data(t,r,m):s.data(t,
r,m)})},removeData:function(j,r){c.query(j).each(function(m){m&&m.nodeType?w.removeData(m,r):s.removeData(m,r)})}});return c},{requires:["./base"]});
KISSY.add("dom/insertion",function(q,c,u){function v(k){for(var t=0;t<k.length;t++){var z=k[t];if(z.nodeType==u.DOCUMENT_FRAGMENT_NODE)v(z.childNodes);else if(n(z,"input")){if(z.type==="checkbox"||z.type==="radio")z.defaultChecked=z.checked}else if(w(z)){z=z.getElementsByTagName("input");for(var B=0;B<z.length;B++)v(z[B])}}}function E(k,t){var z=[],B,A,G;for(B=0;k[B];B++){A=k[B];G=A.nodeName.toLowerCase();if(A.nodeType==u.DOCUMENT_FRAGMENT_NODE)z.push.apply(z,E(s(A.childNodes),t));else if(G==="script"&&
(!A.type||j.test(A.type))){A.parentNode&&A.parentNode.removeChild(A);t&&t.push(A)}else{if(w(A)&&!o.test(G)){G=[];var F,H,l=A.getElementsByTagName("script");for(H=0;H<l.length;H++){F=l[H];(!F.type||j.test(F.type))&&G.push(F)}k.splice.apply(k,[B+1,0].concat(G))}z.push(A)}}return z}function C(k){if(k.src)q.getScript(k.src);else(k=q.trim(k.text||k.textContent||k.innerHTML||""))&&q.globalEval(k)}function y(k,t,z,B){k=u.query(k);if(B)B=[];k=E(k,B);c.ie<8&&v(k);t=u.query(t);var A=k.length,G=t.length;if(!(!A&&
(!B||!B.length)||!G)){k=u._nl2frag(k);var F;if(G>1)F=u.clone(k,true);for(var H=0;H<G;H++){var l=t[H];if(A){var g=H>0?u.clone(F,true):k;z(g,l)}B&&B.length&&q.each(B,C)}}}var o=/^(?:button|input|object|select|textarea)$/i,n=u._nodeName,s=q.makeArray,w=u._isElementNode,j=/\/(java|ecma)script/i;q.mix(u,{insertBefore:function(k,t,z){y(k,t,function(B,A){A.parentNode&&A.parentNode.insertBefore(B,A)},z)},insertAfter:function(k,t,z){y(k,t,function(B,A){A.parentNode&&A.parentNode.insertBefore(B,A.nextSibling)},
z)},appendTo:function(k,t,z){y(k,t,function(B,A){A.appendChild(B)},z)},prependTo:function(k,t,z){y(k,t,function(B,A){A.insertBefore(B,A.firstChild)},z)}});var r={prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},m;for(m in r)u[m]=u[r[m]];return u},{requires:["ua","./create"]});
KISSY.add("dom/offset",function(q,c,u,v){function E(g){var h,a=0;h=0;var e=o.body,d=r(g[z]);if(g[l]){h=g[l]();a=h[B];h=h[A];g=n&&o.documentMode!=9&&(m?s.clientTop:e.clientTop)||0;a-=n&&o.documentMode!=9&&(m?s.clientLeft:e.clientLeft)||0;h-=g;if(u.mobile=="apple"){a-=c[F](d);h-=c[H](d)}}return{left:a,top:h}}function C(g,h){var a={left:0,top:0},e=r(g[z]),d=g;h=h||e;do{var b;if(e==h){var f=d;b=E(f);f=r(f[z]);b.left+=c[F](f);b.top+=c[H](f);b=b}else b=E(d);b=b;a.left+=b.left;a.top+=b.top}while(e&&e!=h&&
(d=e.frameElement)&&(e=e.parent));return a}var y=window,o=document,n=u.ie,s=o.documentElement,w=c._isElementNode,j=c._nodeTypeIs,r=c._getWin,m=o.compatMode==="CSS1Compat",k=Math.max,t=parseInt,z="ownerDocument",B="left",A="top",G=q.isNumber,F="scrollLeft",H="scrollTop",l="getBoundingClientRect";q.mix(c,{offset:function(g,h,a){if(h===v){g=c.get(g);var e;if(g)e=C(g,a);return e}c.query(g).each(function(d){if(c.css(d,"position")==="static")d.style.position="relative";var b=C(d),f={},i,p;for(p in h){i=
t(c.css(d,p),10)||0;f[p]=i+h[p]-b[p]}c.css(d,f)})},scrollIntoView:function(g,h,a,e,d){if(g=c.get(g)){if(h)h=c.get(h);if(!h)h=g.ownerDocument;if(d!==true){e=e===v?true:!!e;a=a===v?true:!!a}if(j(h,c.DOCUMENT_NODE))h=r(h);var b=!!r(h);d=c.offset(g);var f=c.outerHeight(g);g=c.outerWidth(g);var i,p,x,D;if(b){b=h;p=c.height(b);i=c.width(b);D={left:c.scrollLeft(b),top:c.scrollTop(b)};b={left:d[B]-D[B],top:d[A]-D[A]};d={left:d[B]+g-(D[B]+i),top:d[A]+f-(D[A]+p)};D=D}else{i=c.offset(h);p=h.clientHeight;x=h.clientWidth;
D={left:c.scrollLeft(h),top:c.scrollTop(h)};b={left:d[B]-i[B]-(t(c.css(h,"borderLeftWidth"))||0),top:d[A]-i[A]-(t(c.css(h,"borderTopWidth"))||0)};d={left:d[B]+g-(i[B]+x+(t(c.css(h,"borderRightWidth"))||0)),top:d[A]+f-(i[A]+p+(t(c.css(h,"borderBottomWidth"))||0))}}if(b.top<0||d.top>0)if(a===true)c.scrollTop(h,D.top+b.top);else if(a===false)c.scrollTop(h,D.top+d.top);else b.top<0?c.scrollTop(h,D.top+b.top):c.scrollTop(h,D.top+d.top);if(e)if(b.left<0||d.left>0)if(a===true)c.scrollLeft(h,D.left+b.left);
else if(a===false)c.scrollLeft(h,D.left+d.left);else b.left<0?c.scrollLeft(h,D.left+b.left):c.scrollLeft(h,D.left+d.left)}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});q.each(["Left","Top"],function(g,h){var a="scroll"+g;c[a]=function(e,d){if(G(e))return arguments.callee(y,e);e=c.get(e);var b,f=r(e);if(f)if(d!==v){d=parseFloat(d);var i=g=="Left"?d:c.scrollLeft(f),p=g=="Top"?d:c.scrollTop(f);f.scrollTo(i,p)}else{b=f["page"+(h?"Y":"X")+"Offset"];if(!G(b)){f=f.document;b=f.documentElement[a];
G(b)||(b=f.body[a])}}else if(w(e))if(d!==v)e[a]=parseFloat(d);else b=e[a];return b}});q.each(["Width","Height"],function(g){c["doc"+g]=function(h){h=c.get(h);h=r(h).document;return k(h.documentElement["scroll"+g],h.body["scroll"+g],c["viewport"+g](h))};c["viewport"+g]=function(h){h=c.get(h);var a="client"+g;h=r(h).document;var e=h.body,d=h.documentElement[a];return h.compatMode==="CSS1Compat"&&d||e&&e[a]||d}});return c},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(q,c,u){function v(a,e){var d,b,f=typeof a==="string";if(e===u)b=[w];else b=e===u?[w]:v(e,u);var i=b;if(f){a=G(a);if(i.length==1&&a)d=C(a,i[0])}if(!d){d=[];if(a){for(b=0;b<i.length;b++)z.apply(d,E(a,i[b]));if(d.length>1&&(i.length>1||f&&a.indexOf(A)>-1))g(d)}}d.each=function(p){var x,D;for(D=0;D<this.length;D++){x=this[D];if(p(x,D)===false)break}};return d}function E(a,e){var d=[];if((d=typeof a==="string")&&a.match(l)||!d)d=y(a,e);else{if(d&&a.indexOf(A)>-1){d=[];
var b,f=a.split(/\s*,\s*/);for(b=0;b<f.length;b++)z.apply(d,E(f[b],e));d=d}else{d=[];(b=q.require("sizzle"))&&b(a,e,d);d=d}d=d}return d=d}function C(a,e){var d,b,f,i;if(H.test(a))d=(b=n(a.slice(1),e))?[b]:[];else if(f=l.exec(a)){b=f[1];i=f[2];f=f[3];if(e=b?n(b,e):e)if(f)if(!b||a.indexOf(B)!=-1)d=[].concat(h(f,i,e));else{if((b=n(b,e))&&c.__hasClass(b,f))d=[b]}else if(i)d=s(i,e);d=d||[]}return d}function y(a,e){var d;if(typeof a==="string")d=C(a,e)||[];else if(a&&(r(a)||k(a)))d=j(a,function(b){return o(b,
e)});else if(a&&o(a,e))d=[a];return d}function o(a,e){if(!a)return false;if(e==w)return true;return c.__contains(e,a)}function n(a,e){var d=e;if(e.nodeType!==c.DOCUMENT_NODE)d=e.ownerDocument;d=d.getElementById(a);if(!(d&&d.id===a))if(d&&d.parentNode)if(c.__attr(d,"id")!==a)d=c.filter(F,"#"+a,e)[0]||null;else o(d,e)||(d=null);else d=null;return d}function s(a,e){return e&&m(e.getElementsByTagName(a))||[]}var w=document,j=q.filter,r=q.isArray,m=q.makeArray,k=c._isNodeList,t=c._nodeName,z=Array.prototype.push,
B=" ",A=",",G=q.trim,F="*",H=/^#[\w-]+$/,l=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,g;(function(){var a,e,d=true;[0,0].sort(function(){d=false;return 0});g=function(b){if(a){e=d;b.sort(a);if(e)for(var f=1,i=b.length;f<i;)if(b[f]===b[f-1])b.splice(f,1);else f++}return b};a=w.documentElement.compareDocumentPosition?function(b,f){if(b==f){e=true;return 0}if(!b.compareDocumentPosition||!f.compareDocumentPosition)return b.compareDocumentPosition?-1:1;return b.compareDocumentPosition(f)&4?-1:1}:function(b,
f){if(b==f){e=true;return 0}else if(b.sourceIndex&&f.sourceIndex)return b.sourceIndex-f.sourceIndex}})();(function(){var a=w.createElement("div");a.appendChild(w.createComment(""));if(a.getElementsByTagName(F).length>0)s=function(e,d){var b=m(d.getElementsByTagName(e));if(e===F){for(var f=[],i=0,p;p=b[i++];)p.nodeType===1&&f.push(p);b=f}return b}})();var h=w.getElementsByClassName?function(a,e,d){if(!d)return[];a=d.getElementsByClassName(a);var b=0,f=a.length,i;if(e&&e!==F)for(d=[];b<f;++b){i=a[b];
t(i,e)&&d.push(i)}else d=m(a);return d}:w.querySelectorAll?function(a,e,d){return d&&m(d.querySelectorAll((e?e:"")+"."+a))||[]}:function(a,e,d){if(!d)return[];e=d.getElementsByTagName(e||F);d=[];for(var b=0,f=e.length,i;b<f;++b){i=e[b];c.__hasClass(i,a)&&d.push(i)}return d};q.mix(c,{query:v,get:function(a,e){return v(a,e)[0]||null},unique:g,filter:function(a,e,d){a=v(a,d);d=q.require("sizzle");var b,f,i,p,x=[];if(typeof e==="string"&&(e=G(e))&&(b=l.exec(e))){i=b[1];f=b[2];p=b[3];if(i){if(i&&!f&&!p)e=
function(D){return c.__attr(D,"id")===i}}else e=function(D){var I=true,J=true;if(f)I=t(D,f);if(p)J=c.__hasClass(D,p);return J&&I}}if(q.isFunction(e))x=q.filter(a,e);else if(e&&d)x=d.matches(e,a);return x},test:function(a,e,d){a=v(a,d);return a.length&&c.filter(a,e,d).length===a.length}});return c},{requires:["./base"]});
KISSY.add("dom/style-ie",function(q,c,u,v){if(!u.ie)return c;var E=document,C=E.documentElement,y=v._CUSTOM_STYLES,o=/^-?\d+(?:px)?$/i,n=/^-?\d/,s=/opacity=([^)]*)/,w=/alpha\([^)]*\)/i;try{if(q.isNullOrUndefined(C.style.opacity))y.opacity={get:function(m,k){return s.test((k&&m.currentStyle?m.currentStyle.filter:m.style.filter)||"")?parseFloat(RegExp.$1)/100+"":k?"1":""},set:function(m,k){k=parseFloat(k);var t=m.style,z=m.currentStyle,B=isNaN(k)?"":"alpha(opacity="+k*100+")",A=q.trim(z&&z.filter||
t.filter||"");t.zoom=1;if(k>=1&&q.trim(A.replace(w,""))===""){t.removeAttribute("filter");if(z&&!z.filter)return}t.filter=w.test(A)?A.replace(w,B):A+(A?", ":"")+B}}}catch(j){}u=u.ie==8;var r={};r.thin=u?"1px":"2px";r.medium=u?"3px":"4px";r.thick=u?"5px":"6px";q.each(["","Top","Left","Right","Bottom"],function(m){var k="border"+m+"Width",t="border"+m+"Style";y[k]={get:function(z,B){var A=B?z.currentStyle:0,G=A&&String(A[k])||undefined;if(G&&G.indexOf("px")<0)G=r[G]&&A[t]!=="none"?r[G]:0;return G}}});
if(!(E.defaultView||{}).getComputedStyle&&C.currentStyle)c._getComputedStyle=function(m,k){k=c._cssProps[k]||k;var t=m.currentStyle&&m.currentStyle[k];if(!o.test(t)&&n.test(t)){var z=m.style,B=z.left,A=m.runtimeStyle&&m.runtimeStyle.left;if(A)m.runtimeStyle.left=m.currentStyle.left;z.left=k==="fontSize"?"1em":t||0;t=z.pixelLeft+"px";z.left=B;if(A)m.runtimeStyle.left=A}return t===""?"auto":t};return c},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(q,c,u,v){function E(b){return b.replace(B,A)}function C(b,f,i){var p={},x;for(x in f){p[x]=b[j][x];b[j][x]=f[x]}i.call(b);for(x in f)b[j][x]=p[x]}function y(b,f,i){var p;if(b.nodeType===3||b.nodeType===8||!(p=b[j]))return v;f=E(f);var x,D=l[f];f=g[f]||f;if(i!==v){if(i===null||i===F)i=F;else if(!isNaN(Number(i))&&!z[f])i+=H;if(D&&D.set)i=D.set(b,i);if(i!==v)try{b[j][f]=i}catch(I){}return v}else{if(!(D&&"get"in D&&(x=D.get(b,false))!==v))x=p[f];return x===v?"":x}}function o(b,
f,i){if(q.isWindow(b))return f==r?c.viewportWidth(b):c.viewportHeight(b);else if(b.nodeType==9)return f==r?c.docWidth(b):c.docHeight(b);var p=f===r?["Left","Right"]:["Top","Bottom"],x=f===r?b.offsetWidth:b.offsetHeight;if(x>0){i!=="border"&&q.each(p,function(D){i||(x-=parseFloat(c.css(b,"padding"+D))||0);if(i==="margin")x+=parseFloat(c.css(b,i+D))||0;else x-=parseFloat(c.css(b,"border"+D+"Width"))||0});return x}x=c._getComputedStyle(b,f);if(x<0||q.isNullOrUndefined(x))x=b.style[f]||0;x=parseFloat(x)||
0;i&&q.each(p,function(D){x+=parseFloat(c.css(b,"padding"+D))||0;if(i!=="padding")x+=parseFloat(c.css(b,"border"+D+"Width"))||0;if(i==="margin")x+=parseFloat(c.css(b,i+D))||0});return x}var n=document,s=n.documentElement,w=u.ie,j="style",r="width",m="display"+q.now(),k=parseInt,t=/^-?\d+(?:px)?$/i,z={fillOpacity:1,fontWeight:1,lineHeight:1,opacity:1,orphans:1,widows:1,zIndex:1,zoom:1},B=/-([a-z])/ig,A=function(b,f){return f.toUpperCase()},G=/([A-Z]|^ms)/g,F="",H="px",l={},g={},h={};if(s[j].cssFloat!==
v)g["float"]="cssFloat";else if(s[j].styleFloat!==v)g["float"]="styleFloat";var a,e;q.mix(c,{_camelCase:E,_cssNumber:z,_CUSTOM_STYLES:l,_cssProps:g,_getComputedStyle:function(b,f){var i="",p={},x=b.ownerDocument;f=f.replace(G,"-$1").toLowerCase();if(p=x.defaultView.getComputedStyle(b,null))i=p.getPropertyValue(f)||p[f];if(i==""&&!c.__contains(x.documentElement,b)){f=g[f]||f;i=b[j][f]}return i},style:function(b,f,i){if(q.isPlainObject(f))for(var p in f)c.style(b,p,f[p]);else if(i===v){b=c.get(b);p=
"";if(b)p=y(b,f,i);return p}else c.query(b).each(function(x){y(x,f,i)})},css:function(b,f,i){if(q.isPlainObject(f))for(var p in f)c.css(b,p,f[p]);else{f=E(f);p=l[f];if(i===v){b=c.get(b);i="";if(b)if(!(p&&"get"in p&&(i=p.get(b,true))!==v))i=c._getComputedStyle(b,f);return i===v?"":i}else c.style(b,f,i)}},show:function(b){c.query(b).each(function(f){f[j].display=c.data(f,m)||F;if(c.css(f,"display")==="none"){var i;a:{i=f.tagName.toLowerCase();var p,x;if(!h[i]){p=n.body||n.documentElement;x=n.createElement(i);
c.prepend(x,p);var D=c.css(x,"display");p.removeChild(x);if(D==="none"||D===""){if(a)c.prepend(a,p);else{a=n.createElement("iframe");a.frameBorder=a.width=a.height=0;c.prepend(a,p);if(x=c._genEmptyIframeSrc())a.src=x}if(!e||!a.createElement)try{e=a.contentWindow.document;e.write((n.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><head>"+(u.ie&&c._isCustomDomain()?"<script>document.domain = '"+n.domain+"';<\/script>":"")+"</head><body>");e.close()}catch(I){i="block";break a}x=e.createElement(i);
e.body.appendChild(x);D=c.css(x,"display");p.removeChild(a)}h[i]=D}i=h[i]}c.data(f,m,i);f[j].display=i}})},hide:function(b){c.query(b).each(function(f){var i=f[j],p=i.display;if(p!=="none"){p&&c.data(f,m,p);i.display="none"}})},toggle:function(b){c.query(b).each(function(f){c.css(f,"display")==="none"?c.show(f):c.hide(f)})},addStyleSheet:function(b,f,i){if(q.isString(b)){i=f;f=b;b=window}b=c.get(b);b=c._getWin(b).document;var p;if(i&&(i=i.replace("#",F)))p=c.get("#"+i,b);if(!p){p=c.create("<style>",
{id:i},b);c.get("head",b).appendChild(p);if(p.styleSheet)p.styleSheet.cssText=f;else p.appendChild(b.createTextNode(f))}},unselectable:function(b){c.query(b).each(function(f){if(u.gecko)f[j].MozUserSelect="none";else if(u.webkit)f[j].KhtmlUserSelect="none";else if(u.ie||u.opera){var i=0,p=f.getElementsByTagName("*");for(f.setAttribute("unselectable","on");f=p[i++];)switch(f.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:f.setAttribute("unselectable",
"on")}}})},innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0,width:0,height:0});q.each([r,"height"],function(b){c["inner"+(b.charAt(0).toUpperCase()+b.substring(1))]=function(f){return(f=c.get(f))?o(f,b,"padding"):null};c["outer"+(b.charAt(0).toUpperCase()+b.substring(1))]=function(f,i){var p=c.get(f);return p?o(p,b,i?"margin":"border"):null};c[b]=function(f,i){var p=c.css(f,b,i);if(p)p=parseFloat(p);return p}});var d={position:"absolute",visibility:"hidden",display:"block"};q.each(["height",
"width"],function(b){l[b]={get:function(f,i){var p;if(i){if(f.offsetWidth!==0)p=o(f,b);else C(f,d,function(){p=o(f,b)});return p+"px"}},set:function(f,i){if(t.test(i)){i=parseFloat(i);if(i>=0)return i+"px"}else return i}}});q.each(["left","top"],function(b){l[b]={get:function(f,i){if(i){var p=c._getComputedStyle(f,b);if(p==="auto"){p=0;if(q.inArray(c.css(f,"position"),["absolute","fixed"])){p=f[b==="left"?"offsetLeft":"offsetTop"];if(w&&document.documentMode!=9||u.opera)p-=f.offsetParent&&f.offsetParent["client"+
(b=="left"?"Left":"Top")]||0;p=p-(k(c.css(f,"margin-"+b))||0)}p+="px"}return p}}}});return c},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(q,c,u){function v(o,n,s,w,j,r){if(!(o=c.get(o)))return null;if(n===0)return o;r||(o=o[s]);if(!o)return null;j=j&&c.get(j)||null;if(n===u)n=1;r=[];var m=q.isArray(n),k,t;if(q.isNumber(n)){k=0;t=n;n=function(){return++k===t}}for(;o&&o!=j;){if(y(o)&&E(o,n)&&(!w||w(o))){r.push(o);if(!m)break}o=o[s]}return m?r:r[0]||null}function E(o,n){if(!n)return true;if(q.isArray(n))for(var s=0;s<n.length;s++){if(c.test(o,n[s]))return true}else if(c.test(o,n))return true;return false}
function C(o,n,s){var w=[];var j=o=c.get(o);if(o&&s)j=o.parentNode;if(j){s=0;for(j=j.firstChild;j;j=j.nextSibling)if(y(j)&&j!==o&&(!n||c.test(j,n)))w[s++]=j}return w}var y=c._isElementNode;q.mix(c,{closest:function(o,n,s){return v(o,n,"parentNode",function(w){return w.nodeType!=c.DOCUMENT_FRAGMENT_NODE},s,true)},parent:function(o,n,s){return v(o,n,"parentNode",function(w){return w.nodeType!=c.DOCUMENT_FRAGMENT_NODE},s)},first:function(o,n){var s=c.get(o);return v(s&&s.firstChild,n,"nextSibling",u,
u,true)},last:function(o,n){var s=c.get(o);return v(s&&s.lastChild,n,"previousSibling",u,u,true)},next:function(o,n){return v(o,n,"nextSibling",u)},prev:function(o,n){return v(o,n,"previousSibling",u)},siblings:function(o,n){return C(o,n,true)},children:function(o,n){return C(o,n,u)},__contains:document.documentElement.contains?function(o,n){if(o.nodeType==c.TEXT_NODE)return false;var s;if(n.nodeType==c.TEXT_NODE){n=n.parentNode;s=true}else if(n.nodeType==c.DOCUMENT_NODE)return false;else s=o!==n;
return s&&(o.contains?o.contains(n):true)}:document.documentElement.compareDocumentPosition?function(o,n){return!!(o.compareDocumentPosition(n)&16)}:0,contains:function(o,n){o=c.get(o);n=c.get(n);if(o&&n)return c.__contains(o,n)},equals:function(o,n){o=c.query(o);n=c.query(n);if(o.length!=n.length)return false;for(var s=o.length;s>=0;s--)if(o[s]!=n[s])return false;return true}});return c},{requires:["./base"]});
KISSY.add("dom",function(q,c){return c},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});
