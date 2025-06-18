goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34901 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34901(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34902 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34902(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33595 = coll;
var G__33596 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33595,G__33596) : shadow.dom.lazy_native_coll_seq.call(null,G__33595,G__33596));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33725 = arguments.length;
switch (G__33725) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33744 = arguments.length;
switch (G__33744) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33774 = arguments.length;
switch (G__33774) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33813 = arguments.length;
switch (G__33813) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33841 = arguments.length;
switch (G__33841) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33891 = arguments.length;
switch (G__33891) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33935){if((e33935 instanceof Object)){
var e = e33935;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33935;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33962 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33963 = null;
var count__33964 = (0);
var i__33965 = (0);
while(true){
if((i__33965 < count__33964)){
var el = chunk__33963.cljs$core$IIndexed$_nth$arity$2(null,i__33965);
var handler_34915__$1 = ((function (seq__33962,chunk__33963,count__33964,i__33965,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33962,chunk__33963,count__33964,i__33965,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34915__$1);


var G__34916 = seq__33962;
var G__34917 = chunk__33963;
var G__34918 = count__33964;
var G__34919 = (i__33965 + (1));
seq__33962 = G__34916;
chunk__33963 = G__34917;
count__33964 = G__34918;
i__33965 = G__34919;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33962);
if(temp__5753__auto__){
var seq__33962__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33962__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33962__$1);
var G__34920 = cljs.core.chunk_rest(seq__33962__$1);
var G__34921 = c__4679__auto__;
var G__34922 = cljs.core.count(c__4679__auto__);
var G__34923 = (0);
seq__33962 = G__34920;
chunk__33963 = G__34921;
count__33964 = G__34922;
i__33965 = G__34923;
continue;
} else {
var el = cljs.core.first(seq__33962__$1);
var handler_34924__$1 = ((function (seq__33962,chunk__33963,count__33964,i__33965,el,seq__33962__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33962,chunk__33963,count__33964,i__33965,el,seq__33962__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34924__$1);


var G__34925 = cljs.core.next(seq__33962__$1);
var G__34926 = null;
var G__34927 = (0);
var G__34928 = (0);
seq__33962 = G__34925;
chunk__33963 = G__34926;
count__33964 = G__34927;
i__33965 = G__34928;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33992 = arguments.length;
switch (G__33992) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34016 = cljs.core.seq(events);
var chunk__34017 = null;
var count__34018 = (0);
var i__34019 = (0);
while(true){
if((i__34019 < count__34018)){
var vec__34049 = chunk__34017.cljs$core$IIndexed$_nth$arity$2(null,i__34019);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34049,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34049,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34936 = seq__34016;
var G__34937 = chunk__34017;
var G__34938 = count__34018;
var G__34939 = (i__34019 + (1));
seq__34016 = G__34936;
chunk__34017 = G__34937;
count__34018 = G__34938;
i__34019 = G__34939;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34016);
if(temp__5753__auto__){
var seq__34016__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34016__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34016__$1);
var G__34942 = cljs.core.chunk_rest(seq__34016__$1);
var G__34943 = c__4679__auto__;
var G__34944 = cljs.core.count(c__4679__auto__);
var G__34945 = (0);
seq__34016 = G__34942;
chunk__34017 = G__34943;
count__34018 = G__34944;
i__34019 = G__34945;
continue;
} else {
var vec__34058 = cljs.core.first(seq__34016__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34058,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34058,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34946 = cljs.core.next(seq__34016__$1);
var G__34947 = null;
var G__34948 = (0);
var G__34949 = (0);
seq__34016 = G__34946;
chunk__34017 = G__34947;
count__34018 = G__34948;
i__34019 = G__34949;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34067 = cljs.core.seq(styles);
var chunk__34068 = null;
var count__34069 = (0);
var i__34070 = (0);
while(true){
if((i__34070 < count__34069)){
var vec__34090 = chunk__34068.cljs$core$IIndexed$_nth$arity$2(null,i__34070);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34090,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34090,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34950 = seq__34067;
var G__34951 = chunk__34068;
var G__34952 = count__34069;
var G__34953 = (i__34070 + (1));
seq__34067 = G__34950;
chunk__34068 = G__34951;
count__34069 = G__34952;
i__34070 = G__34953;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34067);
if(temp__5753__auto__){
var seq__34067__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34067__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34067__$1);
var G__34954 = cljs.core.chunk_rest(seq__34067__$1);
var G__34955 = c__4679__auto__;
var G__34956 = cljs.core.count(c__4679__auto__);
var G__34957 = (0);
seq__34067 = G__34954;
chunk__34068 = G__34955;
count__34069 = G__34956;
i__34070 = G__34957;
continue;
} else {
var vec__34097 = cljs.core.first(seq__34067__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34097,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34958 = cljs.core.next(seq__34067__$1);
var G__34959 = null;
var G__34960 = (0);
var G__34961 = (0);
seq__34067 = G__34958;
chunk__34068 = G__34959;
count__34069 = G__34960;
i__34070 = G__34961;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34106_34962 = key;
var G__34106_34963__$1 = (((G__34106_34962 instanceof cljs.core.Keyword))?G__34106_34962.fqn:null);
switch (G__34106_34963__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34970 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34970,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34970,"aria-");
}
})())){
el.setAttribute(ks_34970,value);
} else {
(el[ks_34970] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34180){
var map__34182 = p__34180;
var map__34182__$1 = cljs.core.__destructure_map(map__34182);
var props = map__34182__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34182__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34186 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34186,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34186,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34186,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34192 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34192,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34192;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34198 = arguments.length;
switch (G__34198) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34210){
var vec__34211 = p__34210;
var seq__34212 = cljs.core.seq(vec__34211);
var first__34213 = cljs.core.first(seq__34212);
var seq__34212__$1 = cljs.core.next(seq__34212);
var nn = first__34213;
var first__34213__$1 = cljs.core.first(seq__34212__$1);
var seq__34212__$2 = cljs.core.next(seq__34212__$1);
var np = first__34213__$1;
var nc = seq__34212__$2;
var node = vec__34211;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34218 = nn;
var G__34219 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34218,G__34219) : create_fn.call(null,G__34218,G__34219));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34221 = nn;
var G__34222 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34221,G__34222) : create_fn.call(null,G__34221,G__34222));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34232 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34232,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34232,(1),null);
var seq__34236_34985 = cljs.core.seq(node_children);
var chunk__34237_34986 = null;
var count__34238_34987 = (0);
var i__34239_34988 = (0);
while(true){
if((i__34239_34988 < count__34238_34987)){
var child_struct_34989 = chunk__34237_34986.cljs$core$IIndexed$_nth$arity$2(null,i__34239_34988);
var children_34990 = shadow.dom.dom_node(child_struct_34989);
if(cljs.core.seq_QMARK_(children_34990)){
var seq__34309_34991 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34990));
var chunk__34311_34992 = null;
var count__34312_34993 = (0);
var i__34313_34994 = (0);
while(true){
if((i__34313_34994 < count__34312_34993)){
var child_34995 = chunk__34311_34992.cljs$core$IIndexed$_nth$arity$2(null,i__34313_34994);
if(cljs.core.truth_(child_34995)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34995);


var G__34996 = seq__34309_34991;
var G__34997 = chunk__34311_34992;
var G__34998 = count__34312_34993;
var G__34999 = (i__34313_34994 + (1));
seq__34309_34991 = G__34996;
chunk__34311_34992 = G__34997;
count__34312_34993 = G__34998;
i__34313_34994 = G__34999;
continue;
} else {
var G__35000 = seq__34309_34991;
var G__35001 = chunk__34311_34992;
var G__35002 = count__34312_34993;
var G__35003 = (i__34313_34994 + (1));
seq__34309_34991 = G__35000;
chunk__34311_34992 = G__35001;
count__34312_34993 = G__35002;
i__34313_34994 = G__35003;
continue;
}
} else {
var temp__5753__auto___35004 = cljs.core.seq(seq__34309_34991);
if(temp__5753__auto___35004){
var seq__34309_35005__$1 = temp__5753__auto___35004;
if(cljs.core.chunked_seq_QMARK_(seq__34309_35005__$1)){
var c__4679__auto___35006 = cljs.core.chunk_first(seq__34309_35005__$1);
var G__35007 = cljs.core.chunk_rest(seq__34309_35005__$1);
var G__35008 = c__4679__auto___35006;
var G__35009 = cljs.core.count(c__4679__auto___35006);
var G__35010 = (0);
seq__34309_34991 = G__35007;
chunk__34311_34992 = G__35008;
count__34312_34993 = G__35009;
i__34313_34994 = G__35010;
continue;
} else {
var child_35011 = cljs.core.first(seq__34309_35005__$1);
if(cljs.core.truth_(child_35011)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35011);


var G__35012 = cljs.core.next(seq__34309_35005__$1);
var G__35013 = null;
var G__35014 = (0);
var G__35015 = (0);
seq__34309_34991 = G__35012;
chunk__34311_34992 = G__35013;
count__34312_34993 = G__35014;
i__34313_34994 = G__35015;
continue;
} else {
var G__35016 = cljs.core.next(seq__34309_35005__$1);
var G__35017 = null;
var G__35018 = (0);
var G__35019 = (0);
seq__34309_34991 = G__35016;
chunk__34311_34992 = G__35017;
count__34312_34993 = G__35018;
i__34313_34994 = G__35019;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34990);
}


var G__35020 = seq__34236_34985;
var G__35021 = chunk__34237_34986;
var G__35022 = count__34238_34987;
var G__35023 = (i__34239_34988 + (1));
seq__34236_34985 = G__35020;
chunk__34237_34986 = G__35021;
count__34238_34987 = G__35022;
i__34239_34988 = G__35023;
continue;
} else {
var temp__5753__auto___35024 = cljs.core.seq(seq__34236_34985);
if(temp__5753__auto___35024){
var seq__34236_35025__$1 = temp__5753__auto___35024;
if(cljs.core.chunked_seq_QMARK_(seq__34236_35025__$1)){
var c__4679__auto___35026 = cljs.core.chunk_first(seq__34236_35025__$1);
var G__35027 = cljs.core.chunk_rest(seq__34236_35025__$1);
var G__35028 = c__4679__auto___35026;
var G__35029 = cljs.core.count(c__4679__auto___35026);
var G__35030 = (0);
seq__34236_34985 = G__35027;
chunk__34237_34986 = G__35028;
count__34238_34987 = G__35029;
i__34239_34988 = G__35030;
continue;
} else {
var child_struct_35031 = cljs.core.first(seq__34236_35025__$1);
var children_35032 = shadow.dom.dom_node(child_struct_35031);
if(cljs.core.seq_QMARK_(children_35032)){
var seq__34335_35033 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35032));
var chunk__34337_35034 = null;
var count__34338_35035 = (0);
var i__34339_35036 = (0);
while(true){
if((i__34339_35036 < count__34338_35035)){
var child_35037 = chunk__34337_35034.cljs$core$IIndexed$_nth$arity$2(null,i__34339_35036);
if(cljs.core.truth_(child_35037)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35037);


var G__35038 = seq__34335_35033;
var G__35039 = chunk__34337_35034;
var G__35040 = count__34338_35035;
var G__35041 = (i__34339_35036 + (1));
seq__34335_35033 = G__35038;
chunk__34337_35034 = G__35039;
count__34338_35035 = G__35040;
i__34339_35036 = G__35041;
continue;
} else {
var G__35042 = seq__34335_35033;
var G__35043 = chunk__34337_35034;
var G__35044 = count__34338_35035;
var G__35045 = (i__34339_35036 + (1));
seq__34335_35033 = G__35042;
chunk__34337_35034 = G__35043;
count__34338_35035 = G__35044;
i__34339_35036 = G__35045;
continue;
}
} else {
var temp__5753__auto___35046__$1 = cljs.core.seq(seq__34335_35033);
if(temp__5753__auto___35046__$1){
var seq__34335_35047__$1 = temp__5753__auto___35046__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34335_35047__$1)){
var c__4679__auto___35048 = cljs.core.chunk_first(seq__34335_35047__$1);
var G__35050 = cljs.core.chunk_rest(seq__34335_35047__$1);
var G__35051 = c__4679__auto___35048;
var G__35052 = cljs.core.count(c__4679__auto___35048);
var G__35053 = (0);
seq__34335_35033 = G__35050;
chunk__34337_35034 = G__35051;
count__34338_35035 = G__35052;
i__34339_35036 = G__35053;
continue;
} else {
var child_35054 = cljs.core.first(seq__34335_35047__$1);
if(cljs.core.truth_(child_35054)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35054);


var G__35055 = cljs.core.next(seq__34335_35047__$1);
var G__35056 = null;
var G__35057 = (0);
var G__35058 = (0);
seq__34335_35033 = G__35055;
chunk__34337_35034 = G__35056;
count__34338_35035 = G__35057;
i__34339_35036 = G__35058;
continue;
} else {
var G__35059 = cljs.core.next(seq__34335_35047__$1);
var G__35060 = null;
var G__35061 = (0);
var G__35062 = (0);
seq__34335_35033 = G__35059;
chunk__34337_35034 = G__35060;
count__34338_35035 = G__35061;
i__34339_35036 = G__35062;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35032);
}


var G__35063 = cljs.core.next(seq__34236_35025__$1);
var G__35064 = null;
var G__35065 = (0);
var G__35066 = (0);
seq__34236_34985 = G__35063;
chunk__34237_34986 = G__35064;
count__34238_34987 = G__35065;
i__34239_34988 = G__35066;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34380 = cljs.core.seq(node);
var chunk__34381 = null;
var count__34382 = (0);
var i__34383 = (0);
while(true){
if((i__34383 < count__34382)){
var n = chunk__34381.cljs$core$IIndexed$_nth$arity$2(null,i__34383);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35067 = seq__34380;
var G__35068 = chunk__34381;
var G__35069 = count__34382;
var G__35070 = (i__34383 + (1));
seq__34380 = G__35067;
chunk__34381 = G__35068;
count__34382 = G__35069;
i__34383 = G__35070;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34380);
if(temp__5753__auto__){
var seq__34380__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34380__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34380__$1);
var G__35071 = cljs.core.chunk_rest(seq__34380__$1);
var G__35072 = c__4679__auto__;
var G__35073 = cljs.core.count(c__4679__auto__);
var G__35074 = (0);
seq__34380 = G__35071;
chunk__34381 = G__35072;
count__34382 = G__35073;
i__34383 = G__35074;
continue;
} else {
var n = cljs.core.first(seq__34380__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35075 = cljs.core.next(seq__34380__$1);
var G__35076 = null;
var G__35077 = (0);
var G__35078 = (0);
seq__34380 = G__35075;
chunk__34381 = G__35076;
count__34382 = G__35077;
i__34383 = G__35078;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34394 = arguments.length;
switch (G__34394) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34396 = arguments.length;
switch (G__34396) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34408 = arguments.length;
switch (G__34408) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35087 = arguments.length;
var i__4865__auto___35088 = (0);
while(true){
if((i__4865__auto___35088 < len__4864__auto___35087)){
args__4870__auto__.push((arguments[i__4865__auto___35088]));

var G__35089 = (i__4865__auto___35088 + (1));
i__4865__auto___35088 = G__35089;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34435_35090 = cljs.core.seq(nodes);
var chunk__34436_35091 = null;
var count__34437_35092 = (0);
var i__34438_35093 = (0);
while(true){
if((i__34438_35093 < count__34437_35092)){
var node_35094 = chunk__34436_35091.cljs$core$IIndexed$_nth$arity$2(null,i__34438_35093);
fragment.appendChild(shadow.dom._to_dom(node_35094));


var G__35095 = seq__34435_35090;
var G__35096 = chunk__34436_35091;
var G__35097 = count__34437_35092;
var G__35098 = (i__34438_35093 + (1));
seq__34435_35090 = G__35095;
chunk__34436_35091 = G__35096;
count__34437_35092 = G__35097;
i__34438_35093 = G__35098;
continue;
} else {
var temp__5753__auto___35099 = cljs.core.seq(seq__34435_35090);
if(temp__5753__auto___35099){
var seq__34435_35100__$1 = temp__5753__auto___35099;
if(cljs.core.chunked_seq_QMARK_(seq__34435_35100__$1)){
var c__4679__auto___35101 = cljs.core.chunk_first(seq__34435_35100__$1);
var G__35106 = cljs.core.chunk_rest(seq__34435_35100__$1);
var G__35107 = c__4679__auto___35101;
var G__35108 = cljs.core.count(c__4679__auto___35101);
var G__35109 = (0);
seq__34435_35090 = G__35106;
chunk__34436_35091 = G__35107;
count__34437_35092 = G__35108;
i__34438_35093 = G__35109;
continue;
} else {
var node_35110 = cljs.core.first(seq__34435_35100__$1);
fragment.appendChild(shadow.dom._to_dom(node_35110));


var G__35112 = cljs.core.next(seq__34435_35100__$1);
var G__35113 = null;
var G__35114 = (0);
var G__35115 = (0);
seq__34435_35090 = G__35112;
chunk__34436_35091 = G__35113;
count__34437_35092 = G__35114;
i__34438_35093 = G__35115;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34432){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34432));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34444_35139 = cljs.core.seq(scripts);
var chunk__34445_35140 = null;
var count__34446_35141 = (0);
var i__34447_35142 = (0);
while(true){
if((i__34447_35142 < count__34446_35141)){
var vec__34456_35143 = chunk__34445_35140.cljs$core$IIndexed$_nth$arity$2(null,i__34447_35142);
var script_tag_35144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34456_35143,(0),null);
var script_body_35145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34456_35143,(1),null);
eval(script_body_35145);


var G__35146 = seq__34444_35139;
var G__35147 = chunk__34445_35140;
var G__35148 = count__34446_35141;
var G__35149 = (i__34447_35142 + (1));
seq__34444_35139 = G__35146;
chunk__34445_35140 = G__35147;
count__34446_35141 = G__35148;
i__34447_35142 = G__35149;
continue;
} else {
var temp__5753__auto___35150 = cljs.core.seq(seq__34444_35139);
if(temp__5753__auto___35150){
var seq__34444_35151__$1 = temp__5753__auto___35150;
if(cljs.core.chunked_seq_QMARK_(seq__34444_35151__$1)){
var c__4679__auto___35152 = cljs.core.chunk_first(seq__34444_35151__$1);
var G__35153 = cljs.core.chunk_rest(seq__34444_35151__$1);
var G__35154 = c__4679__auto___35152;
var G__35155 = cljs.core.count(c__4679__auto___35152);
var G__35156 = (0);
seq__34444_35139 = G__35153;
chunk__34445_35140 = G__35154;
count__34446_35141 = G__35155;
i__34447_35142 = G__35156;
continue;
} else {
var vec__34463_35157 = cljs.core.first(seq__34444_35151__$1);
var script_tag_35158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34463_35157,(0),null);
var script_body_35159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34463_35157,(1),null);
eval(script_body_35159);


var G__35160 = cljs.core.next(seq__34444_35151__$1);
var G__35161 = null;
var G__35162 = (0);
var G__35163 = (0);
seq__34444_35139 = G__35160;
chunk__34445_35140 = G__35161;
count__34446_35141 = G__35162;
i__34447_35142 = G__35163;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34472){
var vec__34474 = p__34472;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34474,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34474,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34497 = arguments.length;
switch (G__34497) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34522 = cljs.core.seq(style_keys);
var chunk__34525 = null;
var count__34526 = (0);
var i__34527 = (0);
while(true){
if((i__34527 < count__34526)){
var it = chunk__34525.cljs$core$IIndexed$_nth$arity$2(null,i__34527);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35170 = seq__34522;
var G__35171 = chunk__34525;
var G__35172 = count__34526;
var G__35173 = (i__34527 + (1));
seq__34522 = G__35170;
chunk__34525 = G__35171;
count__34526 = G__35172;
i__34527 = G__35173;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34522);
if(temp__5753__auto__){
var seq__34522__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34522__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34522__$1);
var G__35175 = cljs.core.chunk_rest(seq__34522__$1);
var G__35176 = c__4679__auto__;
var G__35177 = cljs.core.count(c__4679__auto__);
var G__35178 = (0);
seq__34522 = G__35175;
chunk__34525 = G__35176;
count__34526 = G__35177;
i__34527 = G__35178;
continue;
} else {
var it = cljs.core.first(seq__34522__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35179 = cljs.core.next(seq__34522__$1);
var G__35180 = null;
var G__35181 = (0);
var G__35182 = (0);
seq__34522 = G__35179;
chunk__34525 = G__35180;
count__34526 = G__35181;
i__34527 = G__35182;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34543,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34551 = k34543;
var G__34551__$1 = (((G__34551 instanceof cljs.core.Keyword))?G__34551.fqn:null);
switch (G__34551__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34543,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34555){
var vec__34558 = p__34555;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34558,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34558,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34542){
var self__ = this;
var G__34542__$1 = this;
return (new cljs.core.RecordIter((0),G__34542__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34544,other34545){
var self__ = this;
var this34544__$1 = this;
return (((!((other34545 == null)))) && ((((this34544__$1.constructor === other34545.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34544__$1.x,other34545.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34544__$1.y,other34545.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34544__$1.__extmap,other34545.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34543){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34579 = k34543;
var G__34579__$1 = (((G__34579 instanceof cljs.core.Keyword))?G__34579.fqn:null);
switch (G__34579__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34543);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34542){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34584 = cljs.core.keyword_identical_QMARK_;
var expr__34585 = k__4511__auto__;
if(cljs.core.truth_((pred__34584.cljs$core$IFn$_invoke$arity$2 ? pred__34584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34585) : pred__34584.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34585)))){
return (new shadow.dom.Coordinate(G__34542,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34584.cljs$core$IFn$_invoke$arity$2 ? pred__34584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34585) : pred__34584.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34585)))){
return (new shadow.dom.Coordinate(self__.x,G__34542,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34542),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34542){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34542,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34548){
var extmap__4542__auto__ = (function (){var G__34601 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34548,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34548)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34601);
} else {
return G__34601;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34548),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34548),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34616,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34626 = k34616;
var G__34626__$1 = (((G__34626 instanceof cljs.core.Keyword))?G__34626.fqn:null);
switch (G__34626__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34616,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34628){
var vec__34629 = p__34628;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34629,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34629,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34615){
var self__ = this;
var G__34615__$1 = this;
return (new cljs.core.RecordIter((0),G__34615__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34617,other34618){
var self__ = this;
var this34617__$1 = this;
return (((!((other34618 == null)))) && ((((this34617__$1.constructor === other34618.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34617__$1.w,other34618.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34617__$1.h,other34618.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34617__$1.__extmap,other34618.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34616){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34647 = k34616;
var G__34647__$1 = (((G__34647 instanceof cljs.core.Keyword))?G__34647.fqn:null);
switch (G__34647__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34616);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34615){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34651 = cljs.core.keyword_identical_QMARK_;
var expr__34652 = k__4511__auto__;
if(cljs.core.truth_((pred__34651.cljs$core$IFn$_invoke$arity$2 ? pred__34651.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34652) : pred__34651.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34652)))){
return (new shadow.dom.Size(G__34615,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34651.cljs$core$IFn$_invoke$arity$2 ? pred__34651.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34652) : pred__34651.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34652)))){
return (new shadow.dom.Size(self__.w,G__34615,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34615),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34615){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34615,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34622){
var extmap__4542__auto__ = (function (){var G__34665 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34622,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34622)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34665);
} else {
return G__34665;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34622),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34622),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__35195 = (i + (1));
var G__35196 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35195;
ret = G__35196;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34691){
var vec__34693 = p__34691;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34693,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34700 = arguments.length;
switch (G__34700) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35203 = ps;
var G__35204 = (i + (1));
el__$1 = G__35203;
i = G__35204;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34730 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34730,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34730,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34730,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34735_35205 = cljs.core.seq(props);
var chunk__34736_35206 = null;
var count__34737_35207 = (0);
var i__34738_35208 = (0);
while(true){
if((i__34738_35208 < count__34737_35207)){
var vec__34773_35209 = chunk__34736_35206.cljs$core$IIndexed$_nth$arity$2(null,i__34738_35208);
var k_35210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34773_35209,(0),null);
var v_35211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34773_35209,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_35210);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35210),v_35211);


var G__35212 = seq__34735_35205;
var G__35213 = chunk__34736_35206;
var G__35214 = count__34737_35207;
var G__35215 = (i__34738_35208 + (1));
seq__34735_35205 = G__35212;
chunk__34736_35206 = G__35213;
count__34737_35207 = G__35214;
i__34738_35208 = G__35215;
continue;
} else {
var temp__5753__auto___35216 = cljs.core.seq(seq__34735_35205);
if(temp__5753__auto___35216){
var seq__34735_35217__$1 = temp__5753__auto___35216;
if(cljs.core.chunked_seq_QMARK_(seq__34735_35217__$1)){
var c__4679__auto___35218 = cljs.core.chunk_first(seq__34735_35217__$1);
var G__35219 = cljs.core.chunk_rest(seq__34735_35217__$1);
var G__35220 = c__4679__auto___35218;
var G__35221 = cljs.core.count(c__4679__auto___35218);
var G__35222 = (0);
seq__34735_35205 = G__35219;
chunk__34736_35206 = G__35220;
count__34737_35207 = G__35221;
i__34738_35208 = G__35222;
continue;
} else {
var vec__34781_35223 = cljs.core.first(seq__34735_35217__$1);
var k_35224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34781_35223,(0),null);
var v_35225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34781_35223,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_35224);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35224),v_35225);


var G__35226 = cljs.core.next(seq__34735_35217__$1);
var G__35227 = null;
var G__35228 = (0);
var G__35229 = (0);
seq__34735_35205 = G__35226;
chunk__34736_35206 = G__35227;
count__34737_35207 = G__35228;
i__34738_35208 = G__35229;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34796 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34796,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34796,(1),null);
var seq__34801_35234 = cljs.core.seq(node_children);
var chunk__34804_35235 = null;
var count__34805_35236 = (0);
var i__34806_35237 = (0);
while(true){
if((i__34806_35237 < count__34805_35236)){
var child_struct_35238 = chunk__34804_35235.cljs$core$IIndexed$_nth$arity$2(null,i__34806_35237);
if((!((child_struct_35238 == null)))){
if(typeof child_struct_35238 === 'string'){
var text_35239 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35239),child_struct_35238].join(''));
} else {
var children_35240 = shadow.dom.svg_node(child_struct_35238);
if(cljs.core.seq_QMARK_(children_35240)){
var seq__34848_35241 = cljs.core.seq(children_35240);
var chunk__34850_35242 = null;
var count__34851_35243 = (0);
var i__34852_35244 = (0);
while(true){
if((i__34852_35244 < count__34851_35243)){
var child_35245 = chunk__34850_35242.cljs$core$IIndexed$_nth$arity$2(null,i__34852_35244);
if(cljs.core.truth_(child_35245)){
node.appendChild(child_35245);


var G__35246 = seq__34848_35241;
var G__35247 = chunk__34850_35242;
var G__35248 = count__34851_35243;
var G__35249 = (i__34852_35244 + (1));
seq__34848_35241 = G__35246;
chunk__34850_35242 = G__35247;
count__34851_35243 = G__35248;
i__34852_35244 = G__35249;
continue;
} else {
var G__35254 = seq__34848_35241;
var G__35255 = chunk__34850_35242;
var G__35256 = count__34851_35243;
var G__35257 = (i__34852_35244 + (1));
seq__34848_35241 = G__35254;
chunk__34850_35242 = G__35255;
count__34851_35243 = G__35256;
i__34852_35244 = G__35257;
continue;
}
} else {
var temp__5753__auto___35258 = cljs.core.seq(seq__34848_35241);
if(temp__5753__auto___35258){
var seq__34848_35259__$1 = temp__5753__auto___35258;
if(cljs.core.chunked_seq_QMARK_(seq__34848_35259__$1)){
var c__4679__auto___35260 = cljs.core.chunk_first(seq__34848_35259__$1);
var G__35261 = cljs.core.chunk_rest(seq__34848_35259__$1);
var G__35262 = c__4679__auto___35260;
var G__35263 = cljs.core.count(c__4679__auto___35260);
var G__35264 = (0);
seq__34848_35241 = G__35261;
chunk__34850_35242 = G__35262;
count__34851_35243 = G__35263;
i__34852_35244 = G__35264;
continue;
} else {
var child_35265 = cljs.core.first(seq__34848_35259__$1);
if(cljs.core.truth_(child_35265)){
node.appendChild(child_35265);


var G__35266 = cljs.core.next(seq__34848_35259__$1);
var G__35267 = null;
var G__35268 = (0);
var G__35269 = (0);
seq__34848_35241 = G__35266;
chunk__34850_35242 = G__35267;
count__34851_35243 = G__35268;
i__34852_35244 = G__35269;
continue;
} else {
var G__35270 = cljs.core.next(seq__34848_35259__$1);
var G__35271 = null;
var G__35272 = (0);
var G__35273 = (0);
seq__34848_35241 = G__35270;
chunk__34850_35242 = G__35271;
count__34851_35243 = G__35272;
i__34852_35244 = G__35273;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35240);
}
}


var G__35274 = seq__34801_35234;
var G__35275 = chunk__34804_35235;
var G__35276 = count__34805_35236;
var G__35277 = (i__34806_35237 + (1));
seq__34801_35234 = G__35274;
chunk__34804_35235 = G__35275;
count__34805_35236 = G__35276;
i__34806_35237 = G__35277;
continue;
} else {
var G__35278 = seq__34801_35234;
var G__35279 = chunk__34804_35235;
var G__35280 = count__34805_35236;
var G__35281 = (i__34806_35237 + (1));
seq__34801_35234 = G__35278;
chunk__34804_35235 = G__35279;
count__34805_35236 = G__35280;
i__34806_35237 = G__35281;
continue;
}
} else {
var temp__5753__auto___35282 = cljs.core.seq(seq__34801_35234);
if(temp__5753__auto___35282){
var seq__34801_35283__$1 = temp__5753__auto___35282;
if(cljs.core.chunked_seq_QMARK_(seq__34801_35283__$1)){
var c__4679__auto___35284 = cljs.core.chunk_first(seq__34801_35283__$1);
var G__35285 = cljs.core.chunk_rest(seq__34801_35283__$1);
var G__35286 = c__4679__auto___35284;
var G__35287 = cljs.core.count(c__4679__auto___35284);
var G__35288 = (0);
seq__34801_35234 = G__35285;
chunk__34804_35235 = G__35286;
count__34805_35236 = G__35287;
i__34806_35237 = G__35288;
continue;
} else {
var child_struct_35289 = cljs.core.first(seq__34801_35283__$1);
if((!((child_struct_35289 == null)))){
if(typeof child_struct_35289 === 'string'){
var text_35290 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35290),child_struct_35289].join(''));
} else {
var children_35291 = shadow.dom.svg_node(child_struct_35289);
if(cljs.core.seq_QMARK_(children_35291)){
var seq__34860_35292 = cljs.core.seq(children_35291);
var chunk__34862_35293 = null;
var count__34863_35294 = (0);
var i__34864_35295 = (0);
while(true){
if((i__34864_35295 < count__34863_35294)){
var child_35296 = chunk__34862_35293.cljs$core$IIndexed$_nth$arity$2(null,i__34864_35295);
if(cljs.core.truth_(child_35296)){
node.appendChild(child_35296);


var G__35297 = seq__34860_35292;
var G__35298 = chunk__34862_35293;
var G__35299 = count__34863_35294;
var G__35300 = (i__34864_35295 + (1));
seq__34860_35292 = G__35297;
chunk__34862_35293 = G__35298;
count__34863_35294 = G__35299;
i__34864_35295 = G__35300;
continue;
} else {
var G__35301 = seq__34860_35292;
var G__35302 = chunk__34862_35293;
var G__35303 = count__34863_35294;
var G__35304 = (i__34864_35295 + (1));
seq__34860_35292 = G__35301;
chunk__34862_35293 = G__35302;
count__34863_35294 = G__35303;
i__34864_35295 = G__35304;
continue;
}
} else {
var temp__5753__auto___35305__$1 = cljs.core.seq(seq__34860_35292);
if(temp__5753__auto___35305__$1){
var seq__34860_35306__$1 = temp__5753__auto___35305__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35306__$1)){
var c__4679__auto___35307 = cljs.core.chunk_first(seq__34860_35306__$1);
var G__35308 = cljs.core.chunk_rest(seq__34860_35306__$1);
var G__35309 = c__4679__auto___35307;
var G__35310 = cljs.core.count(c__4679__auto___35307);
var G__35311 = (0);
seq__34860_35292 = G__35308;
chunk__34862_35293 = G__35309;
count__34863_35294 = G__35310;
i__34864_35295 = G__35311;
continue;
} else {
var child_35312 = cljs.core.first(seq__34860_35306__$1);
if(cljs.core.truth_(child_35312)){
node.appendChild(child_35312);


var G__35313 = cljs.core.next(seq__34860_35306__$1);
var G__35314 = null;
var G__35315 = (0);
var G__35316 = (0);
seq__34860_35292 = G__35313;
chunk__34862_35293 = G__35314;
count__34863_35294 = G__35315;
i__34864_35295 = G__35316;
continue;
} else {
var G__35317 = cljs.core.next(seq__34860_35306__$1);
var G__35318 = null;
var G__35319 = (0);
var G__35320 = (0);
seq__34860_35292 = G__35317;
chunk__34862_35293 = G__35318;
count__34863_35294 = G__35319;
i__34864_35295 = G__35320;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35291);
}
}


var G__35321 = cljs.core.next(seq__34801_35283__$1);
var G__35322 = null;
var G__35323 = (0);
var G__35324 = (0);
seq__34801_35234 = G__35321;
chunk__34804_35235 = G__35322;
count__34805_35236 = G__35323;
i__34806_35237 = G__35324;
continue;
} else {
var G__35325 = cljs.core.next(seq__34801_35283__$1);
var G__35326 = null;
var G__35327 = (0);
var G__35328 = (0);
seq__34801_35234 = G__35325;
chunk__34804_35235 = G__35326;
count__34805_35236 = G__35327;
i__34806_35237 = G__35328;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35329 = arguments.length;
var i__4865__auto___35330 = (0);
while(true){
if((i__4865__auto___35330 < len__4864__auto___35329)){
args__4870__auto__.push((arguments[i__4865__auto___35330]));

var G__35331 = (i__4865__auto___35330 + (1));
i__4865__auto___35330 = G__35331;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34876){
var G__34877 = cljs.core.first(seq34876);
var seq34876__$1 = cljs.core.next(seq34876);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34877,seq34876__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34884 = arguments.length;
switch (G__34884) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29780__auto___35333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_34890){
var state_val_34891 = (state_34890[(1)]);
if((state_val_34891 === (1))){
var state_34890__$1 = state_34890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34890__$1,(2),once_or_cleanup);
} else {
if((state_val_34891 === (2))){
var inst_34887 = (state_34890[(2)]);
var inst_34888 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34890__$1 = (function (){var statearr_34893 = state_34890;
(statearr_34893[(7)] = inst_34887);

return statearr_34893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34890__$1,inst_34888);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28827__auto__ = null;
var shadow$dom$state_machine__28827__auto____0 = (function (){
var statearr_34894 = [null,null,null,null,null,null,null,null];
(statearr_34894[(0)] = shadow$dom$state_machine__28827__auto__);

(statearr_34894[(1)] = (1));

return statearr_34894;
});
var shadow$dom$state_machine__28827__auto____1 = (function (state_34890){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_34890);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e34895){var ex__28830__auto__ = e34895;
var statearr_34896_35334 = state_34890;
(statearr_34896_35334[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_34890[(4)]))){
var statearr_34897_35335 = state_34890;
(statearr_34897_35335[(1)] = cljs.core.first((state_34890[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35336 = state_34890;
state_34890 = G__35336;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
shadow$dom$state_machine__28827__auto__ = function(state_34890){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28827__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28827__auto____1.call(this,state_34890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28827__auto____0;
shadow$dom$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28827__auto____1;
return shadow$dom$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_34898 = f__29781__auto__();
(statearr_34898[(6)] = c__29780__auto___35333);

return statearr_34898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
