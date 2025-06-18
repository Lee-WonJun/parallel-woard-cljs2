goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33451){
var map__33452 = p__33451;
var map__33452__$1 = cljs.core.__destructure_map(map__33452);
var m = map__33452__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33452__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33461_33849 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33462_33850 = null;
var count__33463_33851 = (0);
var i__33464_33852 = (0);
while(true){
if((i__33464_33852 < count__33463_33851)){
var f_33853 = chunk__33462_33850.cljs$core$IIndexed$_nth$arity$2(null,i__33464_33852);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_33853], 0));


var G__33863 = seq__33461_33849;
var G__33864 = chunk__33462_33850;
var G__33865 = count__33463_33851;
var G__33866 = (i__33464_33852 + (1));
seq__33461_33849 = G__33863;
chunk__33462_33850 = G__33864;
count__33463_33851 = G__33865;
i__33464_33852 = G__33866;
continue;
} else {
var temp__5753__auto___33867 = cljs.core.seq(seq__33461_33849);
if(temp__5753__auto___33867){
var seq__33461_33868__$1 = temp__5753__auto___33867;
if(cljs.core.chunked_seq_QMARK_(seq__33461_33868__$1)){
var c__4679__auto___33869 = cljs.core.chunk_first(seq__33461_33868__$1);
var G__33871 = cljs.core.chunk_rest(seq__33461_33868__$1);
var G__33872 = c__4679__auto___33869;
var G__33873 = cljs.core.count(c__4679__auto___33869);
var G__33874 = (0);
seq__33461_33849 = G__33871;
chunk__33462_33850 = G__33872;
count__33463_33851 = G__33873;
i__33464_33852 = G__33874;
continue;
} else {
var f_33875 = cljs.core.first(seq__33461_33868__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_33875], 0));


var G__33876 = cljs.core.next(seq__33461_33868__$1);
var G__33877 = null;
var G__33878 = (0);
var G__33879 = (0);
seq__33461_33849 = G__33876;
chunk__33462_33850 = G__33877;
count__33463_33851 = G__33878;
i__33464_33852 = G__33879;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33882 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_33882], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_33882)))?cljs.core.second(arglists_33882):arglists_33882)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33476_33894 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33478_33895 = null;
var count__33479_33896 = (0);
var i__33480_33897 = (0);
while(true){
if((i__33480_33897 < count__33479_33896)){
var vec__33499_33899 = chunk__33478_33895.cljs$core$IIndexed$_nth$arity$2(null,i__33480_33897);
var name_33900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33499_33899,(0),null);
var map__33502_33901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33499_33899,(1),null);
var map__33502_33902__$1 = cljs.core.__destructure_map(map__33502_33901);
var doc_33903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33502_33902__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33502_33902__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_33900], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_33904], 0));

if(cljs.core.truth_(doc_33903)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_33903], 0));
} else {
}


var G__33905 = seq__33476_33894;
var G__33906 = chunk__33478_33895;
var G__33907 = count__33479_33896;
var G__33908 = (i__33480_33897 + (1));
seq__33476_33894 = G__33905;
chunk__33478_33895 = G__33906;
count__33479_33896 = G__33907;
i__33480_33897 = G__33908;
continue;
} else {
var temp__5753__auto___33909 = cljs.core.seq(seq__33476_33894);
if(temp__5753__auto___33909){
var seq__33476_33912__$1 = temp__5753__auto___33909;
if(cljs.core.chunked_seq_QMARK_(seq__33476_33912__$1)){
var c__4679__auto___33913 = cljs.core.chunk_first(seq__33476_33912__$1);
var G__33914 = cljs.core.chunk_rest(seq__33476_33912__$1);
var G__33915 = c__4679__auto___33913;
var G__33916 = cljs.core.count(c__4679__auto___33913);
var G__33917 = (0);
seq__33476_33894 = G__33914;
chunk__33478_33895 = G__33915;
count__33479_33896 = G__33916;
i__33480_33897 = G__33917;
continue;
} else {
var vec__33511_33918 = cljs.core.first(seq__33476_33912__$1);
var name_33919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511_33918,(0),null);
var map__33514_33920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511_33918,(1),null);
var map__33514_33921__$1 = cljs.core.__destructure_map(map__33514_33920);
var doc_33922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33514_33921__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33514_33921__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_33919], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_33924], 0));

if(cljs.core.truth_(doc_33922)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_33922], 0));
} else {
}


var G__33926 = cljs.core.next(seq__33476_33912__$1);
var G__33927 = null;
var G__33928 = (0);
var G__33929 = (0);
seq__33476_33894 = G__33926;
chunk__33478_33895 = G__33927;
count__33479_33896 = G__33928;
i__33480_33897 = G__33929;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__33520 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33521 = null;
var count__33522 = (0);
var i__33523 = (0);
while(true){
if((i__33523 < count__33522)){
var role = chunk__33521.cljs$core$IIndexed$_nth$arity$2(null,i__33523);
var temp__5753__auto___33933__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___33933__$1)){
var spec_33934 = temp__5753__auto___33933__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_33934)], 0));
} else {
}


var G__33937 = seq__33520;
var G__33938 = chunk__33521;
var G__33939 = count__33522;
var G__33940 = (i__33523 + (1));
seq__33520 = G__33937;
chunk__33521 = G__33938;
count__33522 = G__33939;
i__33523 = G__33940;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__33520);
if(temp__5753__auto____$1){
var seq__33520__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__33520__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33520__$1);
var G__33941 = cljs.core.chunk_rest(seq__33520__$1);
var G__33942 = c__4679__auto__;
var G__33943 = cljs.core.count(c__4679__auto__);
var G__33944 = (0);
seq__33520 = G__33941;
chunk__33521 = G__33942;
count__33522 = G__33943;
i__33523 = G__33944;
continue;
} else {
var role = cljs.core.first(seq__33520__$1);
var temp__5753__auto___33946__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___33946__$2)){
var spec_33947 = temp__5753__auto___33946__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_33947)], 0));
} else {
}


var G__33948 = cljs.core.next(seq__33520__$1);
var G__33949 = null;
var G__33950 = (0);
var G__33951 = (0);
seq__33520 = G__33948;
chunk__33521 = G__33949;
count__33522 = G__33950;
i__33523 = G__33951;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__33956 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__33957 = cljs.core.ex_cause(t);
via = G__33956;
t = G__33957;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__33578 = datafied_throwable;
var map__33578__$1 = cljs.core.__destructure_map(map__33578);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33578__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33578__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33578__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33583 = cljs.core.last(via);
var map__33583__$1 = cljs.core.__destructure_map(map__33583);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33583__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33583__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33583__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33584 = data;
var map__33584__$1 = cljs.core.__destructure_map(map__33584);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33584__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33584__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33584__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__33585 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__33585__$1 = cljs.core.__destructure_map(map__33585);
var top_data = map__33585__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33585__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__33611 = phase;
var G__33611__$1 = (((G__33611 instanceof cljs.core.Keyword))?G__33611.fqn:null);
switch (G__33611__$1) {
case "read-source":
var map__33615 = data;
var map__33615__$1 = cljs.core.__destructure_map(map__33615);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33615__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33615__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33624 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__33624__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33624,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33624);
var G__33624__$2 = (cljs.core.truth_((function (){var fexpr__33641 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__33641.cljs$core$IFn$_invoke$arity$1 ? fexpr__33641.cljs$core$IFn$_invoke$arity$1(source) : fexpr__33641.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33624__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33624__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33624__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33624__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33642 = top_data;
var G__33642__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33642,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33642);
var G__33642__$2 = (cljs.core.truth_((function (){var fexpr__33647 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__33647.cljs$core$IFn$_invoke$arity$1 ? fexpr__33647.cljs$core$IFn$_invoke$arity$1(source) : fexpr__33647.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33642__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33642__$1);
var G__33642__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33642__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33642__$2);
var G__33642__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33642__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33642__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33642__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33642__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33658 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33658,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33658,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33658,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33658,(3),null);
var G__33667 = top_data;
var G__33667__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33667,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33667);
var G__33667__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33667__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33667__$1);
var G__33667__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33667__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33667__$2);
var G__33667__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33667__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33667__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33667__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33667__$4;
}

break;
case "execution":
var vec__33694 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33694,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33694,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33694,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33694,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__33568_SHARP_){
var or__4253__auto__ = (p1__33568_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__33702 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__33702.cljs$core$IFn$_invoke$arity$1 ? fexpr__33702.cljs$core$IFn$_invoke$arity$1(p1__33568_SHARP_) : fexpr__33702.call(null,p1__33568_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__33706 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33706__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33706,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33706);
var G__33706__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33706__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33706__$1);
var G__33706__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33706__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33706__$2);
var G__33706__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33706__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33706__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33706__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33706__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33611__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__33723){
var map__33726 = p__33723;
var map__33726__$1 = cljs.core.__destructure_map(map__33726);
var triage_data = map__33726__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33726__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33726__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33726__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33726__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33726__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33726__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33726__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33726__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__33743 = phase;
var G__33743__$1 = (((G__33743 instanceof cljs.core.Keyword))?G__33743.fqn:null);
switch (G__33743__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__33746 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__33747 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33748 = loc;
var G__33749 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33754_34009 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33755_34010 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33756_34011 = true;
var _STAR_print_fn_STAR__temp_val__33757_34012 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33756_34011);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33757_34012);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33718_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33718_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33755_34010);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33754_34009);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__33746,G__33747,G__33748,G__33749) : format.call(null,G__33746,G__33747,G__33748,G__33749));

break;
case "macroexpansion":
var G__33768 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__33769 = cause_type;
var G__33770 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33771 = loc;
var G__33772 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33768,G__33769,G__33770,G__33771,G__33772) : format.call(null,G__33768,G__33769,G__33770,G__33771,G__33772));

break;
case "compile-syntax-check":
var G__33775 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__33776 = cause_type;
var G__33777 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33778 = loc;
var G__33779 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33775,G__33776,G__33777,G__33778,G__33779) : format.call(null,G__33775,G__33776,G__33777,G__33778,G__33779));

break;
case "compilation":
var G__33780 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__33781 = cause_type;
var G__33782 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33783 = loc;
var G__33784 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33780,G__33781,G__33782,G__33783,G__33784) : format.call(null,G__33780,G__33781,G__33782,G__33783,G__33784));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__33793 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__33795 = symbol;
var G__33797 = loc;
var G__33798 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33801_34041 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33802_34042 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33803_34043 = true;
var _STAR_print_fn_STAR__temp_val__33804_34044 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33803_34043);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33804_34044);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33721_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33721_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33802_34042);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33801_34041);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__33793,G__33795,G__33797,G__33798) : format.call(null,G__33793,G__33795,G__33797,G__33798));
} else {
var G__33816 = "Execution error%s at %s(%s).\n%s\n";
var G__33817 = cause_type;
var G__33818 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33819 = loc;
var G__33820 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33816,G__33817,G__33818,G__33819,G__33820) : format.call(null,G__33816,G__33817,G__33818,G__33819,G__33820));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33743__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
