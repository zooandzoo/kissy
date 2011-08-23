/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 23 11:33
*/
KISSY.add("button/base",function(c,d,f,e,g){var a=d.KeyCodes;c=f.create(e.ModelControl,[f.Contentbox],{bindUI:function(){this.get("el").on("keyup",this._handleKeyEventInternal,this)},_handleKeyEventInternal:function(b){if(b.keyCode==a.ENTER&&b.type=="keydown"||b.keyCode==a.SPACE&&b.type=="keyup")return this._performInternal(b);return b.keyCode==a.SPACE},_performInternal:function(){this.fire("click")}},{ATTRS:{value:{},describedby:{view:true},tooltip:{view:true}}});c.DefaultRender=g;e.UIStore.setUIByClass("button",
{priority:e.UIStore.PRIORITY.LEVEL1,ui:c});return c},{requires:["event","uibase","component","./customrender"]});KISSY.add("button/buttonrender",function(c,d,f){return d.create(f.Render,[d.Contentbox.Render],{renderUI:function(){this.get("el").addClass(this.getCls("inline-block")).attr("role","button")},_uiSetTooltip:function(e){this.get("el").attr("title",e)},_uiSetDescribedby:function(e){this.get("el").attr("aria-describedby",e)}},{ATTRS:{describedby:{},tooltip:{}}})},{requires:["uibase","component"]});
KISSY.add("button/customrender",function(c,d,f,e){var g=f.create(e,{renderUI:function(){this.get("el").addClass(this.getCls("custom-button"))},createDom:function(){var a=this.get("el"),b=this.get("contentEl"),i=c.guid("ks-button-labelby");b.addClass(this.getCls("inline-block custom-button-outer-box"));var j=c.makeArray(b[0].childNodes);b=(new d("<div id='"+i+"' class='"+this.getCls("inline-block custom-button-inner-box")+"'/>")).appendTo(b);for(var h=0;h<j.length;h++)b.append(j[h]);a.attr("aria-labelledby",
i);this.set("innerEl",b)},_uiSetContent:function(a){var b=this.get("innerEl");b.html("");a&&b.append(a)},_setHighlighted:function(a){g.superclass._setHighlighted.apply(this,arguments);this.get("el")[a?"addClass":"removeClass"](this.getCls("custom-button-hover"))},_setDisabled:function(a){g.superclass._setDisabled.apply(this,arguments);this.get("el")[a?"addClass":"removeClass"](this.getCls("custom-button-disabled"))},_setActive:function(a){g.superclass._setActive.apply(this,arguments);this.get("el")[a?
"addClass":"removeClass"](this.getCls("custom-button-active"))},_setFocused:function(a){g.superclass._setFocused.apply(this,arguments);this.get("el")[a?"addClass":"removeClass"](this.getCls("custom-button-focused"))}},{innerEL:{}});return g},{requires:["node","uibase","./buttonrender"]});KISSY.add("button",function(c,d,f){d.Render=f;return d},{requires:["button/base","button/customrender"]});
