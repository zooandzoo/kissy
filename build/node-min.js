/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 23 12:13
*/
KISSY.add("node/anim-plugin",function(e,c,k,f,j){function m(h,w,o,l,i,q,u){i&&c.show(h);var n={},s={};e.each(y[w],function(v){var x=h.style;if(v===b){n[b]=x[b];c.css(h,b,d)}else if(v===g){n[g]=c.style(h,g);s.opacity=i?1:0;i&&c.css(h,g,0)}else if(v===p){n[p]=x[p];s.height=(i?c.height(h)||h.naturalHeight:0)+"px";i&&c.css(h,p,0)}else if(v===t){n[t]=x[t];s.width=(i?c.width(h)||h.naturalWidth:0)+"px";i&&c.css(h,t,0)}});return(new k(h,s,o,q,function(){i||c.hide(h);n[p]!==j&&c.css(h,"height",n[p]);n[t]!==
j&&c.css(h,"width",n[t]);n[g]!==j&&c.css(h,"opacity",n[g]);n[b]!==j&&c.css(h,"overflow",n[b]);l&&l()},u)).run()}var r=f.prototype,a="ksAnims"+e.now(),b="overflow",d="hidden",g="opacity",p="height",t="width",y={show:[b,g,p,t],fade:[g],slide:[b,p]};f.__ANIM_KEY=a;(function(h){function w(o,l){var i=c.data(o,a);i||c.data(o,a,i=[]);l.on("complete",function(){var q=c.data(o,a);if(q){var u=e.indexOf(l,q);u>=0&&q.splice(u,1);q.length||c.removeData(o,a)}});i.push(l)}h.animate=function(){var o=e.makeArray(arguments);
e.each(this,function(l){var i=k.apply(j,[l].concat(o)).run();w(l,i)});return this};h.stop=function(o){e.each(this,function(l){var i=c.data(l,a);if(i){e.each(i,function(q){q.stop(o)});c.removeData(l,a)}});return this};e.each({show:["show",1],hide:["show",0],fadeIn:["fade",1],fadeOut:["fade",0],slideDown:["slide",1],slideUp:["slide",0]},function(o,l){h[l]=function(i,q,u,n){c[l]&&!i?c[l](this):e.each(this,function(s){var v=m(s,o[0],i,q,o[1],u||"easeOut",n);w(s,v)});return this}});h.toggle=function(){h[this.css("display")===
"none"?"show":"hide"].apply(this,arguments)}})(r)},{requires:["dom","anim","./base"]});
KISSY.add("node/attach",function(e,c,k,f,j){function m(b,d,g){g.unshift(d);b=c[b].apply(c,g);if(b===j)return d;return b}var r=f.prototype,a=e.makeArray;e.each(["equals","contains","scrollTop","scrollLeft","height","width","addStyleSheet","appendTo","prependTo","insertBefore","before","after","insertAfter","test","hasClass","addClass","removeClass","replaceClass","toggleClass","removeAttr","hasAttr","hasProp","scrollIntoView","remove","removeData","hasData","unselectable"],function(b){r[b]=function(){var d=
a(arguments);return m(b,this,d)}});e.each(["filter","first","parent","closest","next","prev","clone","siblings","children"],function(b){r[b]=function(){var d=a(arguments);d.unshift(this);d=c[b].apply(c,d);d=d===j?this:d===null?null:new f(d);return d}});e.each({attr:1,text:0,css:1,style:1,val:0,prop:1,offset:0,html:0,data:1},function(b,d){r[d]=function(){var g=a(arguments);if(g[b]===j&&!e.isObject(g[0])){g.unshift(this);g=c[d].apply(c,g)}else g=m(d,this,g);return g}});e.each(["on","detach","fire",
"delegate","undelegate"],function(b){r[b]=function(){var d=a(arguments);d.unshift(this);return k[b].apply(k,d)}})},{requires:["dom","event","./base"]});
KISSY.add("node/base",function(e,c,k){function f(a,b,d){if(!(this instanceof f))return new f(a,b,d);if(a)if(e.isString(a)){a=c.create(a,b,d);if(a.nodeType===c.DOCUMENT_FRAGMENT_NODE){j.push.apply(this,m(a.childNodes));return k}}else if(e.isArray(a)||r(a)){j.push.apply(this,m(a));return k}else a=a;else return k;this[0]=a;this.length=1;return k}var j=Array.prototype,m=e.makeArray,r=c._isNodeList;e.augment(f,{length:0,item:function(a){return e.isNumber(a)?a>=this.length?null:new f(this[a]):new f(a)},
add:function(a,b,d){if(e.isNumber(b)){d=b;b=k}a=f.all(a,b).getDOMNodes();b=new f(this);if(d===k)j.push.apply(b,a);else{d=[d,0];d.push.apply(d,a);j.splice.apply(b,d)}return b},slice:function(a,b){return new f(j.slice.call(this,a,b))},getDOMNodes:function(){return j.slice.call(this)},each:function(a,b){var d=this.length,g=0,p;for(p=new f(this[0]);g<d&&a.call(b||p,p,g,this)!==false;p=new f(this[++g]));return this},getDOMNode:function(){return this[0]},end:function(){return this.__parent||this},all:function(a){a=
this.length>0?f.all(a,this):new f;a.__parent=this;return a},one:function(a){a=this.all(a);if(a=a.length?a.slice(0,1):null)a.__parent=this;return a}});e.mix(f,{ELEMENT_NODE:c.ELEMENT_NODE,ATTRIBUTE_NODE:c.ATTRIBUTE_NODE,TEXT_NODE:c.TEXT_NODE,CDATA_SECTION_NODE:c.CDATA_SECTION_NODE,ENTITY_REFERENCE_NODE:c.ENTITY_REFERENCE_NODE,ENTITY_NODE:c.ENTITY_NODE,PROCESSING_INSTRUCTION_NODE:c.PROCESSING_INSTRUCTION_NODE,COMMENT_NODE:c.COMMENT_NODE,DOCUMENT_NODE:c.DOCUMENT_NODE,DOCUMENT_TYPE_NODE:c.DOCUMENT_TYPE_NODE,
DOCUMENT_FRAGMENT_NODE:c.DOCUMENT_FRAGMENT_NODE,NOTATION_NODE:c.NOTATION_NODE,all:function(a,b){if(e.isString(a)&&(a=e.trim(a))&&a.length>=3&&e.startsWith(a,"<")&&e.endsWith(a,">")){if(b){if(b.getDOMNode)b=b.getDOMNode();if(b.ownerDocument)b=b.ownerDocument}return new f(a,k,b)}return new f(c.query(a,b))},one:function(a,b){var d=f.all(a,b);return d.length?d.slice(0,1):null}});return f},{requires:["dom"]});
KISSY.add("node/override",function(e,c,k,f){e.each(["append","prepend","before","after"],function(j){f.prototype[j]=function(m){m=m;if(e.isString(m))m=c.create(m);m&&c[j](m,this);return this}})},{requires:["dom","event","./base","./attach"]});KISSY.add("node",function(e,c,k){k.KeyCodes=c.KeyCodes;return k},{requires:["event","node/base","node/attach","node/override","node/anim-plugin"]});
