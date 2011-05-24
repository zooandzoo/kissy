/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("dd/ddm",function(i,k,n,g,h){function b(){b.superclass.constructor.apply(this,arguments);this._init()}function a(c,f,m){m=m||150;if(m===-1)return function(){c.apply(f,arguments)};var q=i.now();return function(){var t=i.now();if(t-q>m){q=t;c.apply(f,arguments)}}}function d(c){var f=c.offset();return{left:f.left,right:f.left+c[0].offsetWidth,top:f.top,bottom:f.top+c[0].offsetHeight}}function e(c,f){return c.left<=f.left&&c.right>=f.left&&c.top<=f.top&&c.bottom>=f.top}function l(c){if(c.top>=
c.bottom||c.left>=c.right)return 0;return(c.right-c.left)*(c.bottom-c.top)}function j(c,f){return{left:Math.max(c.left,f.left),right:Math.min(c.right,f.right),top:Math.max(c.top,f.top),bottom:Math.min(c.bottom,f.bottom)}}var r=document;b.ATTRS={prefixCls:{value:"ks-dd-"},bufferTime:{value:200},activeDrag:{},activeDrop:{},drops:{value:[]}};i.extend(b,h,{_regDrop:function(c){this.get("drops").push(c)},_unregDrop:function(c){c=i.indexOf(c,this.get("drops"));c!=-1&&this.get("drops").splice(c,1)},_init:function(){this._showShimMove=
a(this._move,this,30)},_move:function(c){var f=this.get("activeDrag");if(f){c.preventDefault();f._move(c);this._notifyDropsMove(c)}},_notifyDropsMove:function(c){var f=this.get("activeDrag"),m=f.get("mode"),q=this.get("drops"),t,o=0,u=d(f.get("node")),w=l(u);i.each(q,function(p){var s=p.getNodeFromTarget(c);if(!(!s||s[0]==f.get("dragNode")[0]))if(m=="point"){if(e(d(s),f.mousePos)){t=p;return false}}else if(m=="intersect"){s=l(j(u,d(s)));if(s>o){o=s;t=p}}else if(m=="strict"){s=l(j(u,d(s)));if(s==w){t=
p;return false}}});(q=this.get("activeDrop"))&&q!=t&&q._handleOut(c);if(t)t._handleOver(c);else{f.get("node").removeClass(this.get("prefixCls")+"drag-over");this.set("activeDrop",null)}},_deactivateDrops:function(){var c=this.get("activeDrag"),f=this.get("activeDrop");c.get("node").removeClass(this.get("prefixCls")+"drag-over");if(f){var m={drag:c,drop:f};f.get("node").removeClass(this.get("prefixCls")+"drop-over");f.fire("drophit",m);c.fire("dragdrophit",m);this.fire("drophit",m);this.fire("dragdrophit",
m)}else{c.fire("dragdropmiss",{drag:c});this.fire("dragdropmiss",{drag:c})}},_start:function(c){var f=this,m=f.get("bufferTime")||0;f._registerEvent();if(m)f._bufferTimer=setTimeout(function(){f._bufferStart(c)},m);else f._bufferStart(c)},_bufferStart:function(c){this.set("activeDrag",c);c.get("shim")&&this._activeShim();c._start();c.get("dragNode").addClass(this.get("prefixCls")+"dragging")},_end:function(c){var f=this.get("activeDrag");this._unregisterEvent();if(this._bufferTimer){clearTimeout(this._bufferTimer);
this._bufferTimer=null}this._shim&&this._shim.css({display:"none"});if(f){f._end(c);f.get("dragNode").removeClass(this.get("prefixCls")+"dragging");this._deactivateDrops(c);this.set("activeDrag",null);this.set("activeDrop",null)}},_activeShim:function(){var c=document;this._shim=(new g("<div style='background-color:red;position:absolute;left:0;width:100%;top:0;cursor:move;z-index:999999;'></div>")).appendTo(c.body);this._shim.css("opacity",0);this._activeShim=this._showShim;this._showShim()},_showShim:function(){this._shim.css({display:"",
height:k.docHeight()})},_registerEvent:function(){n.on(r,"mouseup",this._end,this);n.on(r,"mousemove",this._showShimMove,this)},_unregisterEvent:function(){n.remove(r,"mousemove",this._showShimMove,this);n.remove(r,"mouseup",this._end,this)}});h=new b;h.inRegion=e;h.region=d;return h},{requires:["dom","event","node","base"]});
KISSY.add("dd/draggable",function(i,k,n,g,h){function b(){b.superclass.constructor.apply(this,arguments);this._init()}b.POINT="point";b.INTERSECT="intersect";b.STRICT="strict";b.ATTRS={node:{setter:function(a){return n.one(a)}},dragNode:{},shim:{value:true},handlers:{value:[]},cursor:{value:"move"},mode:{value:"point"}};i.extend(b,g,{_init:function(){var a=this.get("node"),d=this.get("handlers");this.set("dragNode",a);if(d.length==0)d[0]=a;for(var e=0;e<d.length;e++){var l=d[e];l=i.one(l);l.unselectable();
this.get("cursor")&&l.css("cursor",this.get("cursor"))}a.on("mousedown",this._handleMouseDown,this)},destroy:function(){for(var a=this.get("dragNode"),d=this.get("handlers"),e=0;e<d.length;e++){var l=d[e];l.css("cursor")==this.get("cursor")&&l.css("cursor","auto")}a.detach("mousedown",this._handleMouseDown,this);this.detach()},_check:function(a){for(var d=this.get("handlers"),e=0;e<d.length;e++){var l=d[e];if(l.contains(a)||l[0]==a[0])return true}return false},_handleMouseDown:function(a){if(this._check(new n(a.target))){a.preventDefault();
this._prepare(a)}},_prepare:function(a){h._start(this);var d=this.get("node"),e=a.pageX;a=a.pageY;d=d.offset();this.startMousePos=this.mousePos={left:e,top:a};this.startNodePos=d;this._diff={left:e-d.left,top:a-d.top};this.set("diff",this._diff)},_move:function(a){var d=this.get("diff"),e=a.pageX-d.left;d=a.pageY-d.top;this.mousePos={left:a.pageX,top:a.pageY};a={left:e,top:d,pageX:a.pageX,pageY:a.pageY,drag:this};this.fire("drag",a);h.fire("drag",a)},_end:function(){this.fire("dragend",{drag:this});
h.fire("dragend",{drag:this})},_start:function(){this.fire("dragstart",{drag:this});h.fire("dragstart",{drag:this})}});return b},{requires:["ua","node","base","./ddm"]});
KISSY.add("dd/droppable",function(i,k,n,g){function h(){h.superclass.constructor.apply(this,arguments);this._init()}h.ATTRS={node:{setter:function(b){if(b){b=k.one(b);b.addClass(g.get("prefixCls")+"drop");return b}}}};i.extend(h,n,{getNodeFromTarget:function(){return this.get("node")},_init:function(){g._regDrop(this)},_handleOut:function(){var b=g.get("activeDrag");this.get("node").removeClass(g.get("prefixCls")+"drop-over");var a={drop:this,drag:b};this.fire("dropexit",a);g.fire("dropexit",a);b.get("node").removeClass(g.get("prefixCls")+
"drag-over");b.fire("dragexit",a);g.fire("dragexit",a)},_handleOver:function(b){var a=g.get("activeDrop");g.set("activeDrop",this);var d=g.get("activeDrag");this.get("node").addClass(g.get("prefixCls")+"drop-over");b=i.mix({drag:d,drop:this},b);if(this!=a){d.get("node").addClass(g.get("prefixCls")+"drag-over");d.fire("dragenter",b);this.fire("dropenter",b);g.fire("dragenter",b);g.fire("dropenter",b)}else{d.fire("dragover",b);this.fire("dropover",b);g.fire("dragover",b);g.fire("dropover",b)}},destroy:function(){g._unregDrop(this)}});
return h},{requires:["node","base","./ddm"]});
KISSY.add("dd/proxy",function(i,k){function n(){n.superclass.constructor.apply(this,arguments);this[g]={}}var g="__proxy_destructors",h="__proxy";n.ATTRS={node:{value:function(b){return new k(b.get("node")[0].cloneNode(true))}},destroyOnEnd:{value:false}};i.extend(n,i.Base,{attach:function(b){function a(){var j=e.get("node"),r=b.get("node");if(!e[h]&&i.isFunction(j)){j=j(b);j.addClass("ks-dd-proxy");j.css("position","absolute");e[h]=j}r.parent().append(e[h]);e[h].show();e[h].offset(r.offset());b.set("dragNode",
r);b.set("node",e[h])}function d(){var j=e[h];b.get("dragNode").offset(j.offset());j.hide();if(e.get("destroyOnEnd")){j.remove();e[h]=null}b.set("node",b.get("dragNode"))}if(!b.__proxy_id){var e=this;b.on("dragstart",a);b.on("dragend",d);var l=b.__proxy_id=i.guid("dd-proxyid-");e[g][l]={drag:b,fn:function(){b.detach("dragstart",a);b.detach("dragend",d)}}}},unAttach:function(b){var a=b.__proxy_id;if(a){this[g][a].fn();delete this[g][a];delete b.__proxy_id}},destroy:function(){var b=this.get("node");
b&&!i.isFunction(b)&&b.remove();for(var a in this[g])this.unAttach(this[g][a].drag)}});return n},{requires:["node"]});
KISSY.add("dd/draggable-delegate",function(i,k,n,g){function h(){h.superclass.constructor.apply(this,arguments)}i.extend(h,n,{_init:function(){var b=this.get("handlers"),a=this.get("container");b.length==0&&b.push(this.get("selector"));a.on("mousedown",this._handleMouseDown,this)},_getHandler:function(b){for(var a=this.get("container"),d=this.get("handlers");b&&b[0]!==a[0];){for(var e=0;e<d.length;e++)if(g.test(b[0],d[e],a[0]))return b;b=b.parent()}},_getNode:function(b){for(var a=this.get("container"),
d=this.get("selector");b&&b[0]!=a[0];){if(g.test(b[0],d,a[0]))return b;b=b.parent()}},_handleMouseDown:function(b){var a=b.target;if(a=a&&this._getHandler(a))if(a=this._getNode(a)){b.preventDefault();this.set("node",a);this.set("dragNode",a);this._prepare(b)}},destroy:function(){this.get("container").detach("mousedown",this._handleMouseDown,this);this.detach()}},{ATTRS:{container:{setter:function(b){return i.one(b)}},selector:{}}});return h},{requires:["./ddm","./draggable","dom"]});
KISSY.add("dd/droppable-delegate",function(i,k,n,g,h){function b(){b.superclass.constructor.apply(this,arguments)}i.extend(b,n,{getNodeFromTarget:function(a){a={left:a.pageX,top:a.pageY};var d=this.get("container"),e=this.get("selector");d=d.all(e);for(e=0;e<d.length;e++){var l=new h(d[e]);if(!l.hasClass("ks-dd-proxy")&&k.inRegion(k.region(l),a)){this.set("lastNode",this.get("node"));this.set("node",l);return l}}return null},_handleOut:function(){b.superclass._handleOut.call(this);this.set("node",
null);this.set("lastNode",null)},_handleOver:function(a){var d=k.get("activeDrop");k.set("activeDrop",this);var e=k.get("activeDrag");this.get("node").addClass(k.get("prefixCls")+"drop-over");a=i.mix({drag:e,drop:this},a);var l=this.get("node"),j=this.get("lastNode");if(this!=d||!j||j&&j[0]!==l[0]){if(j){this.set("node",j);b.superclass._handleOut.call(this)}this.set("node",l);e.get("node").addClass(k.get("prefixCls")+"drag-over");e.fire("dragenter",a);this.fire("dropenter",a);k.fire("dragenter",a);
k.fire("dropenter",a)}else{e.fire("dragover",a);this.fire("dropover",a);k.fire("dragover",a);k.fire("dropover",a)}}},{ATTRS:{lastNode:{},selector:{},container:{setter:function(a){return i.one(a)}}}});return b},{requires:["./ddm","./droppable","dom","node"]});
KISSY.add("dd/scroll",function(i,k,n,g){function h(){h.superclass.constructor.apply(this,arguments);this[b]={}}var b="__dd_scrolls";h.ATTRS={node:{setter:function(a){return n.one(a)}},rate:{value:[10,10]},diff:{value:[20,20]}};i.extend(h,k,{getRegion:function(a){return!a||a==window?{width:g.viewportWidth(),height:g.viewportHeight()}:{width:a[0].offsetWidth,height:a[0].offsetHeight}},getOffset:function(a){return!a||a==window?{left:g.scrollLeft(),top:g.scrollTop()}:a.offset()},getScroll:function(a){return!a||
a==window?{left:g.scrollLeft(),top:g.scrollTop()}:{left:a[0].scrollLeft,top:a[0].scrollTop}},setScroll:function(a,d){if(!a||a==window)window.scrollTo(d.left,d.top);else{a[0].scrollLeft=d.left;a[0].scrollTop=d.top}},unAttach:function(a){var d=a["__dd-scroll-id-"];if(d){this[b][d].fn();delete a["__dd-scroll-id-"];delete this[b][d]}},destroy:function(){for(var a in this[b])this.unAttach(this[b][a].drag)},attach:function(a){function d(o){if(!o.fake){var u=j.get("node");f=o;m=i.clone(a.mousePos);o=j.getOffset(u);
m.left-=o.left;m.top-=o.top;q||l()}}function e(){clearTimeout(q);q=null}function l(){var o=j.get("node"),u=j.getRegion(o),w=u.width;u=u.height;var p=j.getScroll(o),s=i.clone(p),v=false;if(m.top-u>=-c[1]){p.top+=r[1];v=true}if(m.top<=c[1]){p.top-=r[1];v=true}if(m.left-w>=-c[0]){p.left+=r[0];v=true}if(m.left<=c[0]){p.left-=r[0];v=true}if(v){j.setScroll(o,p);q=setTimeout(arguments.callee,100);f.fake=true;if(!o||o==window){p=j.getScroll(o);f.left+=p.left-s.left;f.top+=p.top-s.top}a.fire("drag",f)}else q=
null}if(!a["__dd-scroll-id-"]){var j=this,r=j.get("rate"),c=j.get("diff"),f,m,q=null;a.on("drag",d);a.on("dragend",e);var t=a["__dd-scroll-id-"]=i.guid("__dd-scroll-id-");j[b][t]={drag:a,fn:function(){a.detach("drag",d);a.detach("dragend",e)}}}}});return h},{requires:["base","node","dom"]});
KISSY.add("dd",function(i,k,n,g,h,b,a,d){k={Draggable:n,Droppable:g,DDM:k,Proxy:h,DraggableDelegate:b,DroppableDelegate:a,Scroll:d};i.mix(i,k);return k},{requires:["dd/ddm","dd/draggable","dd/droppable","dd/proxy","dd/draggable-delegate","dd/droppable-delegate","dd/scroll"]});
