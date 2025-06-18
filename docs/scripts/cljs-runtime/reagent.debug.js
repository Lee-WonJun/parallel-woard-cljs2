goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__30395__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30399__i = 0, G__30399__a = new Array(arguments.length -  0);
while (G__30399__i < G__30399__a.length) {G__30399__a[G__30399__i] = arguments[G__30399__i + 0]; ++G__30399__i;}
  args = new cljs.core.IndexedSeq(G__30399__a,0,null);
} 
return G__30395__delegate.call(this,args);};
G__30395.cljs$lang$maxFixedArity = 0;
G__30395.cljs$lang$applyTo = (function (arglist__30400){
var args = cljs.core.seq(arglist__30400);
return G__30395__delegate(args);
});
G__30395.cljs$core$IFn$_invoke$arity$variadic = G__30395__delegate;
return G__30395;
})()
);

(o.error = (function() { 
var G__30401__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30402__i = 0, G__30402__a = new Array(arguments.length -  0);
while (G__30402__i < G__30402__a.length) {G__30402__a[G__30402__i] = arguments[G__30402__i + 0]; ++G__30402__i;}
  args = new cljs.core.IndexedSeq(G__30402__a,0,null);
} 
return G__30401__delegate.call(this,args);};
G__30401.cljs$lang$maxFixedArity = 0;
G__30401.cljs$lang$applyTo = (function (arglist__30403){
var args = cljs.core.seq(arglist__30403);
return G__30401__delegate(args);
});
G__30401.cljs$core$IFn$_invoke$arity$variadic = G__30401__delegate;
return G__30401;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
