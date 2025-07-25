goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__35566,res){
var map__35567 = p__35566;
var map__35567__$1 = cljs.core.__destructure_map(map__35567);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35567__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35567__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__35568 = res;
var G__35568__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35568,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__35568);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35568__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__35568__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__35570 = arguments.length;
switch (G__35570) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__35571,msg,handlers,timeout_after_ms){
var map__35572 = p__35571;
var map__35572__$1 = cljs.core.__destructure_map(map__35572);
var runtime = map__35572__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35625 = arguments.length;
var i__4865__auto___35626 = (0);
while(true){
if((i__4865__auto___35626 < len__4864__auto___35625)){
args__4870__auto__.push((arguments[i__4865__auto___35626]));

var G__35629 = (i__4865__auto___35626 + (1));
i__4865__auto___35626 = G__35629;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35576,ev,args){
var map__35577 = p__35576;
var map__35577__$1 = cljs.core.__destructure_map(map__35577);
var runtime = map__35577__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35577__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__35578 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35581 = null;
var count__35582 = (0);
var i__35583 = (0);
while(true){
if((i__35583 < count__35582)){
var ext = chunk__35581.cljs$core$IIndexed$_nth$arity$2(null,i__35583);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35632 = seq__35578;
var G__35633 = chunk__35581;
var G__35634 = count__35582;
var G__35635 = (i__35583 + (1));
seq__35578 = G__35632;
chunk__35581 = G__35633;
count__35582 = G__35634;
i__35583 = G__35635;
continue;
} else {
var G__35637 = seq__35578;
var G__35638 = chunk__35581;
var G__35639 = count__35582;
var G__35640 = (i__35583 + (1));
seq__35578 = G__35637;
chunk__35581 = G__35638;
count__35582 = G__35639;
i__35583 = G__35640;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35578);
if(temp__5753__auto__){
var seq__35578__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35578__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35578__$1);
var G__35641 = cljs.core.chunk_rest(seq__35578__$1);
var G__35642 = c__4679__auto__;
var G__35643 = cljs.core.count(c__4679__auto__);
var G__35644 = (0);
seq__35578 = G__35641;
chunk__35581 = G__35642;
count__35582 = G__35643;
i__35583 = G__35644;
continue;
} else {
var ext = cljs.core.first(seq__35578__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35645 = cljs.core.next(seq__35578__$1);
var G__35646 = null;
var G__35647 = (0);
var G__35648 = (0);
seq__35578 = G__35645;
chunk__35581 = G__35646;
count__35582 = G__35647;
i__35583 = G__35648;
continue;
} else {
var G__35649 = cljs.core.next(seq__35578__$1);
var G__35650 = null;
var G__35651 = (0);
var G__35652 = (0);
seq__35578 = G__35649;
chunk__35581 = G__35650;
count__35582 = G__35651;
i__35583 = G__35652;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq35573){
var G__35574 = cljs.core.first(seq35573);
var seq35573__$1 = cljs.core.next(seq35573);
var G__35575 = cljs.core.first(seq35573__$1);
var seq35573__$2 = cljs.core.next(seq35573__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35574,G__35575,seq35573__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__35586,p__35587){
var map__35588 = p__35586;
var map__35588__$1 = cljs.core.__destructure_map(map__35588);
var runtime = map__35588__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35588__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35589 = p__35587;
var map__35589__$1 = cljs.core.__destructure_map(map__35589);
var msg = map__35589__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__35590 = cljs.core.deref(state_ref);
var map__35590__$1 = cljs.core.__destructure_map(map__35590);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35590__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35590__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__35591){
var map__35592 = p__35591;
var map__35592__$1 = cljs.core.__destructure_map(map__35592);
var runtime = map__35592__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__35593,msg){
var map__35594 = p__35593;
var map__35594__$1 = cljs.core.__destructure_map(map__35594);
var runtime = map__35594__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35594__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__35595,key,p__35596){
var map__35597 = p__35595;
var map__35597__$1 = cljs.core.__destructure_map(map__35597);
var state = map__35597__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35597__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__35598 = p__35596;
var map__35598__$1 = cljs.core.__destructure_map(map__35598);
var spec = map__35598__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__35599,key,spec){
var map__35600 = p__35599;
var map__35600__$1 = cljs.core.__destructure_map(map__35600);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35600__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__35601_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__35601_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__35602_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__35602_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__35603_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__35603_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__35604_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__35604_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__35605_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__35605_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__35606,key){
var map__35607 = p__35606;
var map__35607__$1 = cljs.core.__destructure_map(map__35607);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35607__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__35608,msg){
var map__35609 = p__35608;
var map__35609__$1 = cljs.core.__destructure_map(map__35609);
var runtime = map__35609__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35609__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__35610,p__35611){
var map__35612 = p__35610;
var map__35612__$1 = cljs.core.__destructure_map(map__35612);
var runtime = map__35612__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35612__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35613 = p__35611;
var map__35613__$1 = cljs.core.__destructure_map(map__35613);
var msg = map__35613__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__35614 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35616 = null;
var count__35617 = (0);
var i__35618 = (0);
while(true){
if((i__35618 < count__35617)){
var map__35622 = chunk__35616.cljs$core$IIndexed$_nth$arity$2(null,i__35618);
var map__35622__$1 = cljs.core.__destructure_map(map__35622);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35622__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35658 = seq__35614;
var G__35659 = chunk__35616;
var G__35660 = count__35617;
var G__35661 = (i__35618 + (1));
seq__35614 = G__35658;
chunk__35616 = G__35659;
count__35617 = G__35660;
i__35618 = G__35661;
continue;
} else {
var G__35662 = seq__35614;
var G__35663 = chunk__35616;
var G__35664 = count__35617;
var G__35665 = (i__35618 + (1));
seq__35614 = G__35662;
chunk__35616 = G__35663;
count__35617 = G__35664;
i__35618 = G__35665;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35614);
if(temp__5753__auto__){
var seq__35614__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35614__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35614__$1);
var G__35666 = cljs.core.chunk_rest(seq__35614__$1);
var G__35667 = c__4679__auto__;
var G__35668 = cljs.core.count(c__4679__auto__);
var G__35669 = (0);
seq__35614 = G__35666;
chunk__35616 = G__35667;
count__35617 = G__35668;
i__35618 = G__35669;
continue;
} else {
var map__35623 = cljs.core.first(seq__35614__$1);
var map__35623__$1 = cljs.core.__destructure_map(map__35623);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35623__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35670 = cljs.core.next(seq__35614__$1);
var G__35671 = null;
var G__35672 = (0);
var G__35673 = (0);
seq__35614 = G__35670;
chunk__35616 = G__35671;
count__35617 = G__35672;
i__35618 = G__35673;
continue;
} else {
var G__35674 = cljs.core.next(seq__35614__$1);
var G__35675 = null;
var G__35676 = (0);
var G__35677 = (0);
seq__35614 = G__35674;
chunk__35616 = G__35675;
count__35617 = G__35676;
i__35618 = G__35677;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
