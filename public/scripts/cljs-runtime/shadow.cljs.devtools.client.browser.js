goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37012 = arguments.length;
var i__4865__auto___37013 = (0);
while(true){
if((i__4865__auto___37013 < len__4864__auto___37012)){
args__4870__auto__.push((arguments[i__4865__auto___37013]));

var G__37014 = (i__4865__auto___37013 + (1));
i__4865__auto___37013 = G__37014;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36728){
var G__36729 = cljs.core.first(seq36728);
var seq36728__$1 = cljs.core.next(seq36728);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36729,seq36728__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36732 = cljs.core.seq(sources);
var chunk__36733 = null;
var count__36734 = (0);
var i__36735 = (0);
while(true){
if((i__36735 < count__36734)){
var map__36740 = chunk__36733.cljs$core$IIndexed$_nth$arity$2(null,i__36735);
var map__36740__$1 = cljs.core.__destructure_map(map__36740);
var src = map__36740__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36740__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36740__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36740__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36740__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36741){var e_37015 = e36741;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37015);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37015.message)].join('')));
}

var G__37016 = seq__36732;
var G__37017 = chunk__36733;
var G__37018 = count__36734;
var G__37019 = (i__36735 + (1));
seq__36732 = G__37016;
chunk__36733 = G__37017;
count__36734 = G__37018;
i__36735 = G__37019;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36732);
if(temp__5753__auto__){
var seq__36732__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36732__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36732__$1);
var G__37020 = cljs.core.chunk_rest(seq__36732__$1);
var G__37021 = c__4679__auto__;
var G__37022 = cljs.core.count(c__4679__auto__);
var G__37023 = (0);
seq__36732 = G__37020;
chunk__36733 = G__37021;
count__36734 = G__37022;
i__36735 = G__37023;
continue;
} else {
var map__36744 = cljs.core.first(seq__36732__$1);
var map__36744__$1 = cljs.core.__destructure_map(map__36744);
var src = map__36744__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36744__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36744__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36744__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36744__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36745){var e_37024 = e36745;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37024);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37024.message)].join('')));
}

var G__37025 = cljs.core.next(seq__36732__$1);
var G__37026 = null;
var G__37027 = (0);
var G__37028 = (0);
seq__36732 = G__37025;
chunk__36733 = G__37026;
count__36734 = G__37027;
i__36735 = G__37028;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36746 = cljs.core.seq(js_requires);
var chunk__36747 = null;
var count__36748 = (0);
var i__36749 = (0);
while(true){
if((i__36749 < count__36748)){
var js_ns = chunk__36747.cljs$core$IIndexed$_nth$arity$2(null,i__36749);
var require_str_37029 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37029);


var G__37030 = seq__36746;
var G__37031 = chunk__36747;
var G__37032 = count__36748;
var G__37033 = (i__36749 + (1));
seq__36746 = G__37030;
chunk__36747 = G__37031;
count__36748 = G__37032;
i__36749 = G__37033;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36746);
if(temp__5753__auto__){
var seq__36746__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36746__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36746__$1);
var G__37034 = cljs.core.chunk_rest(seq__36746__$1);
var G__37035 = c__4679__auto__;
var G__37036 = cljs.core.count(c__4679__auto__);
var G__37037 = (0);
seq__36746 = G__37034;
chunk__36747 = G__37035;
count__36748 = G__37036;
i__36749 = G__37037;
continue;
} else {
var js_ns = cljs.core.first(seq__36746__$1);
var require_str_37038 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37038);


var G__37039 = cljs.core.next(seq__36746__$1);
var G__37040 = null;
var G__37041 = (0);
var G__37042 = (0);
seq__36746 = G__37039;
chunk__36747 = G__37040;
count__36748 = G__37041;
i__36749 = G__37042;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36751){
var map__36752 = p__36751;
var map__36752__$1 = cljs.core.__destructure_map(map__36752);
var msg = map__36752__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36753(s__36754){
return (new cljs.core.LazySeq(null,(function (){
var s__36754__$1 = s__36754;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36754__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36759 = cljs.core.first(xs__6308__auto__);
var map__36759__$1 = cljs.core.__destructure_map(map__36759);
var src = map__36759__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36759__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36759__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__36754__$1,map__36759,map__36759__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36752,map__36752__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36753_$_iter__36755(s__36756){
return (new cljs.core.LazySeq(null,((function (s__36754__$1,map__36759,map__36759__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36752,map__36752__$1,msg,info,reload_info){
return (function (){
var s__36756__$1 = s__36756;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36756__$1);
if(temp__5753__auto____$1){
var s__36756__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36756__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36756__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36758 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36757 = (0);
while(true){
if((i__36757 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__36757);
cljs.core.chunk_append(b__36758,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37043 = (i__36757 + (1));
i__36757 = G__37043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36758),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36753_$_iter__36755(cljs.core.chunk_rest(s__36756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36758),null);
}
} else {
var warning = cljs.core.first(s__36756__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36753_$_iter__36755(cljs.core.rest(s__36756__$2)));
}
} else {
return null;
}
break;
}
});})(s__36754__$1,map__36759,map__36759__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36752,map__36752__$1,msg,info,reload_info))
,null,null));
});})(s__36754__$1,map__36759,map__36759__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36752,map__36752__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36753(cljs.core.rest(s__36754__$1)));
} else {
var G__37044 = cljs.core.rest(s__36754__$1);
s__36754__$1 = G__37044;
continue;
}
} else {
var G__37045 = cljs.core.rest(s__36754__$1);
s__36754__$1 = G__37045;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36760_37046 = cljs.core.seq(warnings);
var chunk__36761_37047 = null;
var count__36762_37048 = (0);
var i__36763_37049 = (0);
while(true){
if((i__36763_37049 < count__36762_37048)){
var map__36766_37050 = chunk__36761_37047.cljs$core$IIndexed$_nth$arity$2(null,i__36763_37049);
var map__36766_37051__$1 = cljs.core.__destructure_map(map__36766_37050);
var w_37052 = map__36766_37051__$1;
var msg_37053__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766_37051__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766_37051__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766_37051__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766_37051__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37056)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37054),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37055),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37053__$1)].join(''));


var G__37057 = seq__36760_37046;
var G__37058 = chunk__36761_37047;
var G__37059 = count__36762_37048;
var G__37060 = (i__36763_37049 + (1));
seq__36760_37046 = G__37057;
chunk__36761_37047 = G__37058;
count__36762_37048 = G__37059;
i__36763_37049 = G__37060;
continue;
} else {
var temp__5753__auto___37061 = cljs.core.seq(seq__36760_37046);
if(temp__5753__auto___37061){
var seq__36760_37062__$1 = temp__5753__auto___37061;
if(cljs.core.chunked_seq_QMARK_(seq__36760_37062__$1)){
var c__4679__auto___37063 = cljs.core.chunk_first(seq__36760_37062__$1);
var G__37064 = cljs.core.chunk_rest(seq__36760_37062__$1);
var G__37065 = c__4679__auto___37063;
var G__37066 = cljs.core.count(c__4679__auto___37063);
var G__37067 = (0);
seq__36760_37046 = G__37064;
chunk__36761_37047 = G__37065;
count__36762_37048 = G__37066;
i__36763_37049 = G__37067;
continue;
} else {
var map__36767_37068 = cljs.core.first(seq__36760_37062__$1);
var map__36767_37069__$1 = cljs.core.__destructure_map(map__36767_37068);
var w_37070 = map__36767_37069__$1;
var msg_37071__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36767_37069__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36767_37069__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36767_37069__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36767_37069__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37074)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37072),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37073),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37071__$1)].join(''));


var G__37075 = cljs.core.next(seq__36760_37062__$1);
var G__37076 = null;
var G__37077 = (0);
var G__37078 = (0);
seq__36760_37046 = G__37075;
chunk__36761_37047 = G__37076;
count__36762_37048 = G__37077;
i__36763_37049 = G__37078;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36750_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36750_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36768){
var map__36769 = p__36768;
var map__36769__$1 = cljs.core.__destructure_map(map__36769);
var msg = map__36769__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36769__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36769__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36770 = cljs.core.seq(updates);
var chunk__36772 = null;
var count__36773 = (0);
var i__36774 = (0);
while(true){
if((i__36774 < count__36773)){
var path = chunk__36772.cljs$core$IIndexed$_nth$arity$2(null,i__36774);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36884_37079 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36888_37080 = null;
var count__36889_37081 = (0);
var i__36890_37082 = (0);
while(true){
if((i__36890_37082 < count__36889_37081)){
var node_37083 = chunk__36888_37080.cljs$core$IIndexed$_nth$arity$2(null,i__36890_37082);
if(cljs.core.not(node_37083.shadow$old)){
var path_match_37084 = shadow.cljs.devtools.client.browser.match_paths(node_37083.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37084)){
var new_link_37085 = (function (){var G__36916 = node_37083.cloneNode(true);
G__36916.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37084),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36916;
})();
(node_37083.shadow$old = true);

(new_link_37085.onload = ((function (seq__36884_37079,chunk__36888_37080,count__36889_37081,i__36890_37082,seq__36770,chunk__36772,count__36773,i__36774,new_link_37085,path_match_37084,node_37083,path,map__36769,map__36769__$1,msg,updates,reload_info){
return (function (e){
var seq__36917_37086 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36919_37087 = null;
var count__36920_37088 = (0);
var i__36921_37089 = (0);
while(true){
if((i__36921_37089 < count__36920_37088)){
var map__36925_37090 = chunk__36919_37087.cljs$core$IIndexed$_nth$arity$2(null,i__36921_37089);
var map__36925_37091__$1 = cljs.core.__destructure_map(map__36925_37090);
var task_37092 = map__36925_37091__$1;
var fn_str_37093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36925_37091__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36925_37091__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37095 = goog.getObjectByName(fn_str_37093,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37094)].join(''));

(fn_obj_37095.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37095.cljs$core$IFn$_invoke$arity$2(path,new_link_37085) : fn_obj_37095.call(null,path,new_link_37085));


var G__37096 = seq__36917_37086;
var G__37097 = chunk__36919_37087;
var G__37098 = count__36920_37088;
var G__37099 = (i__36921_37089 + (1));
seq__36917_37086 = G__37096;
chunk__36919_37087 = G__37097;
count__36920_37088 = G__37098;
i__36921_37089 = G__37099;
continue;
} else {
var temp__5753__auto___37100 = cljs.core.seq(seq__36917_37086);
if(temp__5753__auto___37100){
var seq__36917_37101__$1 = temp__5753__auto___37100;
if(cljs.core.chunked_seq_QMARK_(seq__36917_37101__$1)){
var c__4679__auto___37102 = cljs.core.chunk_first(seq__36917_37101__$1);
var G__37103 = cljs.core.chunk_rest(seq__36917_37101__$1);
var G__37104 = c__4679__auto___37102;
var G__37105 = cljs.core.count(c__4679__auto___37102);
var G__37106 = (0);
seq__36917_37086 = G__37103;
chunk__36919_37087 = G__37104;
count__36920_37088 = G__37105;
i__36921_37089 = G__37106;
continue;
} else {
var map__36926_37107 = cljs.core.first(seq__36917_37101__$1);
var map__36926_37108__$1 = cljs.core.__destructure_map(map__36926_37107);
var task_37109 = map__36926_37108__$1;
var fn_str_37110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926_37108__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926_37108__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37112 = goog.getObjectByName(fn_str_37110,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37111)].join(''));

(fn_obj_37112.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37112.cljs$core$IFn$_invoke$arity$2(path,new_link_37085) : fn_obj_37112.call(null,path,new_link_37085));


var G__37113 = cljs.core.next(seq__36917_37101__$1);
var G__37114 = null;
var G__37115 = (0);
var G__37116 = (0);
seq__36917_37086 = G__37113;
chunk__36919_37087 = G__37114;
count__36920_37088 = G__37115;
i__36921_37089 = G__37116;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37083);
});})(seq__36884_37079,chunk__36888_37080,count__36889_37081,i__36890_37082,seq__36770,chunk__36772,count__36773,i__36774,new_link_37085,path_match_37084,node_37083,path,map__36769,map__36769__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37084], 0));

goog.dom.insertSiblingAfter(new_link_37085,node_37083);


var G__37117 = seq__36884_37079;
var G__37118 = chunk__36888_37080;
var G__37119 = count__36889_37081;
var G__37120 = (i__36890_37082 + (1));
seq__36884_37079 = G__37117;
chunk__36888_37080 = G__37118;
count__36889_37081 = G__37119;
i__36890_37082 = G__37120;
continue;
} else {
var G__37121 = seq__36884_37079;
var G__37122 = chunk__36888_37080;
var G__37123 = count__36889_37081;
var G__37124 = (i__36890_37082 + (1));
seq__36884_37079 = G__37121;
chunk__36888_37080 = G__37122;
count__36889_37081 = G__37123;
i__36890_37082 = G__37124;
continue;
}
} else {
var G__37125 = seq__36884_37079;
var G__37126 = chunk__36888_37080;
var G__37127 = count__36889_37081;
var G__37128 = (i__36890_37082 + (1));
seq__36884_37079 = G__37125;
chunk__36888_37080 = G__37126;
count__36889_37081 = G__37127;
i__36890_37082 = G__37128;
continue;
}
} else {
var temp__5753__auto___37129 = cljs.core.seq(seq__36884_37079);
if(temp__5753__auto___37129){
var seq__36884_37130__$1 = temp__5753__auto___37129;
if(cljs.core.chunked_seq_QMARK_(seq__36884_37130__$1)){
var c__4679__auto___37131 = cljs.core.chunk_first(seq__36884_37130__$1);
var G__37132 = cljs.core.chunk_rest(seq__36884_37130__$1);
var G__37133 = c__4679__auto___37131;
var G__37134 = cljs.core.count(c__4679__auto___37131);
var G__37135 = (0);
seq__36884_37079 = G__37132;
chunk__36888_37080 = G__37133;
count__36889_37081 = G__37134;
i__36890_37082 = G__37135;
continue;
} else {
var node_37136 = cljs.core.first(seq__36884_37130__$1);
if(cljs.core.not(node_37136.shadow$old)){
var path_match_37137 = shadow.cljs.devtools.client.browser.match_paths(node_37136.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37137)){
var new_link_37138 = (function (){var G__36927 = node_37136.cloneNode(true);
G__36927.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37137),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36927;
})();
(node_37136.shadow$old = true);

(new_link_37138.onload = ((function (seq__36884_37079,chunk__36888_37080,count__36889_37081,i__36890_37082,seq__36770,chunk__36772,count__36773,i__36774,new_link_37138,path_match_37137,node_37136,seq__36884_37130__$1,temp__5753__auto___37129,path,map__36769,map__36769__$1,msg,updates,reload_info){
return (function (e){
var seq__36928_37139 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36930_37140 = null;
var count__36931_37141 = (0);
var i__36932_37142 = (0);
while(true){
if((i__36932_37142 < count__36931_37141)){
var map__36936_37143 = chunk__36930_37140.cljs$core$IIndexed$_nth$arity$2(null,i__36932_37142);
var map__36936_37144__$1 = cljs.core.__destructure_map(map__36936_37143);
var task_37145 = map__36936_37144__$1;
var fn_str_37146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936_37144__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936_37144__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37148 = goog.getObjectByName(fn_str_37146,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37147)].join(''));

(fn_obj_37148.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37148.cljs$core$IFn$_invoke$arity$2(path,new_link_37138) : fn_obj_37148.call(null,path,new_link_37138));


var G__37149 = seq__36928_37139;
var G__37150 = chunk__36930_37140;
var G__37151 = count__36931_37141;
var G__37152 = (i__36932_37142 + (1));
seq__36928_37139 = G__37149;
chunk__36930_37140 = G__37150;
count__36931_37141 = G__37151;
i__36932_37142 = G__37152;
continue;
} else {
var temp__5753__auto___37153__$1 = cljs.core.seq(seq__36928_37139);
if(temp__5753__auto___37153__$1){
var seq__36928_37154__$1 = temp__5753__auto___37153__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36928_37154__$1)){
var c__4679__auto___37155 = cljs.core.chunk_first(seq__36928_37154__$1);
var G__37156 = cljs.core.chunk_rest(seq__36928_37154__$1);
var G__37157 = c__4679__auto___37155;
var G__37158 = cljs.core.count(c__4679__auto___37155);
var G__37159 = (0);
seq__36928_37139 = G__37156;
chunk__36930_37140 = G__37157;
count__36931_37141 = G__37158;
i__36932_37142 = G__37159;
continue;
} else {
var map__36937_37160 = cljs.core.first(seq__36928_37154__$1);
var map__36937_37161__$1 = cljs.core.__destructure_map(map__36937_37160);
var task_37162 = map__36937_37161__$1;
var fn_str_37163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937_37161__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937_37161__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37165 = goog.getObjectByName(fn_str_37163,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37164)].join(''));

(fn_obj_37165.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37165.cljs$core$IFn$_invoke$arity$2(path,new_link_37138) : fn_obj_37165.call(null,path,new_link_37138));


var G__37166 = cljs.core.next(seq__36928_37154__$1);
var G__37167 = null;
var G__37168 = (0);
var G__37169 = (0);
seq__36928_37139 = G__37166;
chunk__36930_37140 = G__37167;
count__36931_37141 = G__37168;
i__36932_37142 = G__37169;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37136);
});})(seq__36884_37079,chunk__36888_37080,count__36889_37081,i__36890_37082,seq__36770,chunk__36772,count__36773,i__36774,new_link_37138,path_match_37137,node_37136,seq__36884_37130__$1,temp__5753__auto___37129,path,map__36769,map__36769__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37137], 0));

goog.dom.insertSiblingAfter(new_link_37138,node_37136);


var G__37170 = cljs.core.next(seq__36884_37130__$1);
var G__37171 = null;
var G__37172 = (0);
var G__37173 = (0);
seq__36884_37079 = G__37170;
chunk__36888_37080 = G__37171;
count__36889_37081 = G__37172;
i__36890_37082 = G__37173;
continue;
} else {
var G__37174 = cljs.core.next(seq__36884_37130__$1);
var G__37175 = null;
var G__37176 = (0);
var G__37177 = (0);
seq__36884_37079 = G__37174;
chunk__36888_37080 = G__37175;
count__36889_37081 = G__37176;
i__36890_37082 = G__37177;
continue;
}
} else {
var G__37178 = cljs.core.next(seq__36884_37130__$1);
var G__37179 = null;
var G__37180 = (0);
var G__37181 = (0);
seq__36884_37079 = G__37178;
chunk__36888_37080 = G__37179;
count__36889_37081 = G__37180;
i__36890_37082 = G__37181;
continue;
}
}
} else {
}
}
break;
}


var G__37182 = seq__36770;
var G__37183 = chunk__36772;
var G__37184 = count__36773;
var G__37185 = (i__36774 + (1));
seq__36770 = G__37182;
chunk__36772 = G__37183;
count__36773 = G__37184;
i__36774 = G__37185;
continue;
} else {
var G__37186 = seq__36770;
var G__37187 = chunk__36772;
var G__37188 = count__36773;
var G__37189 = (i__36774 + (1));
seq__36770 = G__37186;
chunk__36772 = G__37187;
count__36773 = G__37188;
i__36774 = G__37189;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36770);
if(temp__5753__auto__){
var seq__36770__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36770__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36770__$1);
var G__37190 = cljs.core.chunk_rest(seq__36770__$1);
var G__37191 = c__4679__auto__;
var G__37192 = cljs.core.count(c__4679__auto__);
var G__37193 = (0);
seq__36770 = G__37190;
chunk__36772 = G__37191;
count__36773 = G__37192;
i__36774 = G__37193;
continue;
} else {
var path = cljs.core.first(seq__36770__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36938_37194 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36942_37195 = null;
var count__36943_37196 = (0);
var i__36944_37197 = (0);
while(true){
if((i__36944_37197 < count__36943_37196)){
var node_37198 = chunk__36942_37195.cljs$core$IIndexed$_nth$arity$2(null,i__36944_37197);
if(cljs.core.not(node_37198.shadow$old)){
var path_match_37199 = shadow.cljs.devtools.client.browser.match_paths(node_37198.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37199)){
var new_link_37200 = (function (){var G__36970 = node_37198.cloneNode(true);
G__36970.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37199),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36970;
})();
(node_37198.shadow$old = true);

(new_link_37200.onload = ((function (seq__36938_37194,chunk__36942_37195,count__36943_37196,i__36944_37197,seq__36770,chunk__36772,count__36773,i__36774,new_link_37200,path_match_37199,node_37198,path,seq__36770__$1,temp__5753__auto__,map__36769,map__36769__$1,msg,updates,reload_info){
return (function (e){
var seq__36971_37201 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36973_37202 = null;
var count__36974_37203 = (0);
var i__36975_37204 = (0);
while(true){
if((i__36975_37204 < count__36974_37203)){
var map__36979_37205 = chunk__36973_37202.cljs$core$IIndexed$_nth$arity$2(null,i__36975_37204);
var map__36979_37206__$1 = cljs.core.__destructure_map(map__36979_37205);
var task_37207 = map__36979_37206__$1;
var fn_str_37208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36979_37206__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36979_37206__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37210 = goog.getObjectByName(fn_str_37208,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37209)].join(''));

(fn_obj_37210.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37210.cljs$core$IFn$_invoke$arity$2(path,new_link_37200) : fn_obj_37210.call(null,path,new_link_37200));


var G__37211 = seq__36971_37201;
var G__37212 = chunk__36973_37202;
var G__37213 = count__36974_37203;
var G__37214 = (i__36975_37204 + (1));
seq__36971_37201 = G__37211;
chunk__36973_37202 = G__37212;
count__36974_37203 = G__37213;
i__36975_37204 = G__37214;
continue;
} else {
var temp__5753__auto___37215__$1 = cljs.core.seq(seq__36971_37201);
if(temp__5753__auto___37215__$1){
var seq__36971_37216__$1 = temp__5753__auto___37215__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36971_37216__$1)){
var c__4679__auto___37217 = cljs.core.chunk_first(seq__36971_37216__$1);
var G__37218 = cljs.core.chunk_rest(seq__36971_37216__$1);
var G__37219 = c__4679__auto___37217;
var G__37220 = cljs.core.count(c__4679__auto___37217);
var G__37221 = (0);
seq__36971_37201 = G__37218;
chunk__36973_37202 = G__37219;
count__36974_37203 = G__37220;
i__36975_37204 = G__37221;
continue;
} else {
var map__36980_37222 = cljs.core.first(seq__36971_37216__$1);
var map__36980_37223__$1 = cljs.core.__destructure_map(map__36980_37222);
var task_37224 = map__36980_37223__$1;
var fn_str_37225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36980_37223__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36980_37223__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37227 = goog.getObjectByName(fn_str_37225,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37226)].join(''));

(fn_obj_37227.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37227.cljs$core$IFn$_invoke$arity$2(path,new_link_37200) : fn_obj_37227.call(null,path,new_link_37200));


var G__37228 = cljs.core.next(seq__36971_37216__$1);
var G__37229 = null;
var G__37230 = (0);
var G__37231 = (0);
seq__36971_37201 = G__37228;
chunk__36973_37202 = G__37229;
count__36974_37203 = G__37230;
i__36975_37204 = G__37231;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37198);
});})(seq__36938_37194,chunk__36942_37195,count__36943_37196,i__36944_37197,seq__36770,chunk__36772,count__36773,i__36774,new_link_37200,path_match_37199,node_37198,path,seq__36770__$1,temp__5753__auto__,map__36769,map__36769__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37199], 0));

goog.dom.insertSiblingAfter(new_link_37200,node_37198);


var G__37232 = seq__36938_37194;
var G__37233 = chunk__36942_37195;
var G__37234 = count__36943_37196;
var G__37235 = (i__36944_37197 + (1));
seq__36938_37194 = G__37232;
chunk__36942_37195 = G__37233;
count__36943_37196 = G__37234;
i__36944_37197 = G__37235;
continue;
} else {
var G__37236 = seq__36938_37194;
var G__37237 = chunk__36942_37195;
var G__37238 = count__36943_37196;
var G__37239 = (i__36944_37197 + (1));
seq__36938_37194 = G__37236;
chunk__36942_37195 = G__37237;
count__36943_37196 = G__37238;
i__36944_37197 = G__37239;
continue;
}
} else {
var G__37240 = seq__36938_37194;
var G__37241 = chunk__36942_37195;
var G__37242 = count__36943_37196;
var G__37243 = (i__36944_37197 + (1));
seq__36938_37194 = G__37240;
chunk__36942_37195 = G__37241;
count__36943_37196 = G__37242;
i__36944_37197 = G__37243;
continue;
}
} else {
var temp__5753__auto___37244__$1 = cljs.core.seq(seq__36938_37194);
if(temp__5753__auto___37244__$1){
var seq__36938_37245__$1 = temp__5753__auto___37244__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36938_37245__$1)){
var c__4679__auto___37246 = cljs.core.chunk_first(seq__36938_37245__$1);
var G__37247 = cljs.core.chunk_rest(seq__36938_37245__$1);
var G__37248 = c__4679__auto___37246;
var G__37249 = cljs.core.count(c__4679__auto___37246);
var G__37250 = (0);
seq__36938_37194 = G__37247;
chunk__36942_37195 = G__37248;
count__36943_37196 = G__37249;
i__36944_37197 = G__37250;
continue;
} else {
var node_37251 = cljs.core.first(seq__36938_37245__$1);
if(cljs.core.not(node_37251.shadow$old)){
var path_match_37252 = shadow.cljs.devtools.client.browser.match_paths(node_37251.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37252)){
var new_link_37253 = (function (){var G__36981 = node_37251.cloneNode(true);
G__36981.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37252),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36981;
})();
(node_37251.shadow$old = true);

(new_link_37253.onload = ((function (seq__36938_37194,chunk__36942_37195,count__36943_37196,i__36944_37197,seq__36770,chunk__36772,count__36773,i__36774,new_link_37253,path_match_37252,node_37251,seq__36938_37245__$1,temp__5753__auto___37244__$1,path,seq__36770__$1,temp__5753__auto__,map__36769,map__36769__$1,msg,updates,reload_info){
return (function (e){
var seq__36982_37254 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36984_37255 = null;
var count__36985_37256 = (0);
var i__36986_37257 = (0);
while(true){
if((i__36986_37257 < count__36985_37256)){
var map__36990_37258 = chunk__36984_37255.cljs$core$IIndexed$_nth$arity$2(null,i__36986_37257);
var map__36990_37259__$1 = cljs.core.__destructure_map(map__36990_37258);
var task_37260 = map__36990_37259__$1;
var fn_str_37261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36990_37259__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36990_37259__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37263 = goog.getObjectByName(fn_str_37261,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37262)].join(''));

(fn_obj_37263.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37263.cljs$core$IFn$_invoke$arity$2(path,new_link_37253) : fn_obj_37263.call(null,path,new_link_37253));


var G__37264 = seq__36982_37254;
var G__37265 = chunk__36984_37255;
var G__37266 = count__36985_37256;
var G__37267 = (i__36986_37257 + (1));
seq__36982_37254 = G__37264;
chunk__36984_37255 = G__37265;
count__36985_37256 = G__37266;
i__36986_37257 = G__37267;
continue;
} else {
var temp__5753__auto___37268__$2 = cljs.core.seq(seq__36982_37254);
if(temp__5753__auto___37268__$2){
var seq__36982_37269__$1 = temp__5753__auto___37268__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36982_37269__$1)){
var c__4679__auto___37270 = cljs.core.chunk_first(seq__36982_37269__$1);
var G__37271 = cljs.core.chunk_rest(seq__36982_37269__$1);
var G__37272 = c__4679__auto___37270;
var G__37273 = cljs.core.count(c__4679__auto___37270);
var G__37274 = (0);
seq__36982_37254 = G__37271;
chunk__36984_37255 = G__37272;
count__36985_37256 = G__37273;
i__36986_37257 = G__37274;
continue;
} else {
var map__36991_37275 = cljs.core.first(seq__36982_37269__$1);
var map__36991_37276__$1 = cljs.core.__destructure_map(map__36991_37275);
var task_37277 = map__36991_37276__$1;
var fn_str_37278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36991_37276__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36991_37276__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37280 = goog.getObjectByName(fn_str_37278,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37279)].join(''));

(fn_obj_37280.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37280.cljs$core$IFn$_invoke$arity$2(path,new_link_37253) : fn_obj_37280.call(null,path,new_link_37253));


var G__37281 = cljs.core.next(seq__36982_37269__$1);
var G__37282 = null;
var G__37283 = (0);
var G__37284 = (0);
seq__36982_37254 = G__37281;
chunk__36984_37255 = G__37282;
count__36985_37256 = G__37283;
i__36986_37257 = G__37284;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37251);
});})(seq__36938_37194,chunk__36942_37195,count__36943_37196,i__36944_37197,seq__36770,chunk__36772,count__36773,i__36774,new_link_37253,path_match_37252,node_37251,seq__36938_37245__$1,temp__5753__auto___37244__$1,path,seq__36770__$1,temp__5753__auto__,map__36769,map__36769__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37252], 0));

goog.dom.insertSiblingAfter(new_link_37253,node_37251);


var G__37285 = cljs.core.next(seq__36938_37245__$1);
var G__37286 = null;
var G__37287 = (0);
var G__37288 = (0);
seq__36938_37194 = G__37285;
chunk__36942_37195 = G__37286;
count__36943_37196 = G__37287;
i__36944_37197 = G__37288;
continue;
} else {
var G__37289 = cljs.core.next(seq__36938_37245__$1);
var G__37290 = null;
var G__37291 = (0);
var G__37292 = (0);
seq__36938_37194 = G__37289;
chunk__36942_37195 = G__37290;
count__36943_37196 = G__37291;
i__36944_37197 = G__37292;
continue;
}
} else {
var G__37293 = cljs.core.next(seq__36938_37245__$1);
var G__37294 = null;
var G__37295 = (0);
var G__37296 = (0);
seq__36938_37194 = G__37293;
chunk__36942_37195 = G__37294;
count__36943_37196 = G__37295;
i__36944_37197 = G__37296;
continue;
}
}
} else {
}
}
break;
}


var G__37297 = cljs.core.next(seq__36770__$1);
var G__37298 = null;
var G__37299 = (0);
var G__37300 = (0);
seq__36770 = G__37297;
chunk__36772 = G__37298;
count__36773 = G__37299;
i__36774 = G__37300;
continue;
} else {
var G__37301 = cljs.core.next(seq__36770__$1);
var G__37302 = null;
var G__37303 = (0);
var G__37304 = (0);
seq__36770 = G__37301;
chunk__36772 = G__37302;
count__36773 = G__37303;
i__36774 = G__37304;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36992){
var map__36993 = p__36992;
var map__36993__$1 = cljs.core.__destructure_map(map__36993);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36993__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36994){
var map__36995 = p__36994;
var map__36995__$1 = cljs.core.__destructure_map(map__36995);
var _ = map__36995__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36995__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36996,done,error){
var map__36997 = p__36996;
var map__36997__$1 = cljs.core.__destructure_map(map__36997);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36997__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36998,done,error){
var map__36999 = p__36998;
var map__36999__$1 = cljs.core.__destructure_map(map__36999);
var msg = map__36999__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36999__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36999__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36999__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37000){
var map__37001 = p__37000;
var map__37001__$1 = cljs.core.__destructure_map(map__37001);
var src = map__37001__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37001__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37002 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37002) : done.call(null,G__37002));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37003){
var map__37004 = p__37003;
var map__37004__$1 = cljs.core.__destructure_map(map__37004);
var msg__$1 = map__37004__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37004__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37005){var ex = e37005;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37006){
var map__37007 = p__37006;
var map__37007__$1 = cljs.core.__destructure_map(map__37007);
var env = map__37007__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37007__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37008){
var map__37009 = p__37008;
var map__37009__$1 = cljs.core.__destructure_map(map__37009);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37009__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37009__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37010){
var map__37011 = p__37010;
var map__37011__$1 = cljs.core.__destructure_map(map__37011);
var svc = map__37011__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37011__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
