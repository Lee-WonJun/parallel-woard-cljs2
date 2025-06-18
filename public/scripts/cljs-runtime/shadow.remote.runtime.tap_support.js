goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36327,p__36328){
var map__36329 = p__36327;
var map__36329__$1 = cljs.core.__destructure_map(map__36329);
var svc = map__36329__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36329__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36329__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36329__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36330 = p__36328;
var map__36330__$1 = cljs.core.__destructure_map(map__36330);
var msg = map__36330__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36330__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36335,p__36336){
var map__36337 = p__36335;
var map__36337__$1 = cljs.core.__destructure_map(map__36337);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36337__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36338 = p__36336;
var map__36338__$1 = cljs.core.__destructure_map(map__36338);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36338__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36343,p__36344){
var map__36345 = p__36343;
var map__36345__$1 = cljs.core.__destructure_map(map__36345);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36345__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36345__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36346 = p__36344;
var map__36346__$1 = cljs.core.__destructure_map(map__36346);
var msg = map__36346__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36346__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36349,tid){
var map__36351 = p__36349;
var map__36351__$1 = cljs.core.__destructure_map(map__36351);
var svc = map__36351__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36351__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36358 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36359 = null;
var count__36360 = (0);
var i__36361 = (0);
while(true){
if((i__36361 < count__36360)){
var vec__36373 = chunk__36359.cljs$core$IIndexed$_nth$arity$2(null,i__36361);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36373,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36373,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36384 = seq__36358;
var G__36385 = chunk__36359;
var G__36386 = count__36360;
var G__36387 = (i__36361 + (1));
seq__36358 = G__36384;
chunk__36359 = G__36385;
count__36360 = G__36386;
i__36361 = G__36387;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36358);
if(temp__5753__auto__){
var seq__36358__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36358__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36358__$1);
var G__36388 = cljs.core.chunk_rest(seq__36358__$1);
var G__36389 = c__4679__auto__;
var G__36390 = cljs.core.count(c__4679__auto__);
var G__36391 = (0);
seq__36358 = G__36388;
chunk__36359 = G__36389;
count__36360 = G__36390;
i__36361 = G__36391;
continue;
} else {
var vec__36377 = cljs.core.first(seq__36358__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36377,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36377,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36392 = cljs.core.next(seq__36358__$1);
var G__36393 = null;
var G__36394 = (0);
var G__36395 = (0);
seq__36358 = G__36392;
chunk__36359 = G__36393;
count__36360 = G__36394;
i__36361 = G__36395;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36352_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36352_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36353_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36353_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36354_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36354_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36355_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36355_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36381){
var map__36382 = p__36381;
var map__36382__$1 = cljs.core.__destructure_map(map__36382);
var svc = map__36382__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36382__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36382__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
