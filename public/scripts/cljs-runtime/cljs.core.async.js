goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29925 = arguments.length;
switch (G__29925) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29933 = (function (f,blockable,meta29934){
this.f = f;
this.blockable = blockable;
this.meta29934 = meta29934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29935,meta29934__$1){
var self__ = this;
var _29935__$1 = this;
return (new cljs.core.async.t_cljs$core$async29933(self__.f,self__.blockable,meta29934__$1));
}));

(cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29935){
var self__ = this;
var _29935__$1 = this;
return self__.meta29934;
}));

(cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29934","meta29934",-301459518,null)], null);
}));

(cljs.core.async.t_cljs$core$async29933.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29933");

(cljs.core.async.t_cljs$core$async29933.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29933");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29933.
 */
cljs.core.async.__GT_t_cljs$core$async29933 = (function cljs$core$async$__GT_t_cljs$core$async29933(f__$1,blockable__$1,meta29934){
return (new cljs.core.async.t_cljs$core$async29933(f__$1,blockable__$1,meta29934));
});

}

return (new cljs.core.async.t_cljs$core$async29933(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29975 = arguments.length;
switch (G__29975) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30024 = arguments.length;
switch (G__30024) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30054 = arguments.length;
switch (G__30054) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33540 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33540) : fn1.call(null,val_33540));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33540) : fn1.call(null,val_33540));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30078 = arguments.length;
switch (G__30078) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___33552 = n;
var x_33553 = (0);
while(true){
if((x_33553 < n__4741__auto___33552)){
(a[x_33553] = x_33553);

var G__33554 = (x_33553 + (1));
x_33553 = G__33554;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30102 = (function (flag,meta30103){
this.flag = flag;
this.meta30103 = meta30103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30104,meta30103__$1){
var self__ = this;
var _30104__$1 = this;
return (new cljs.core.async.t_cljs$core$async30102(self__.flag,meta30103__$1));
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30104){
var self__ = this;
var _30104__$1 = this;
return self__.meta30103;
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30103","meta30103",34994744,null)], null);
}));

(cljs.core.async.t_cljs$core$async30102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30102");

(cljs.core.async.t_cljs$core$async30102.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30102.
 */
cljs.core.async.__GT_t_cljs$core$async30102 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30102(flag__$1,meta30103){
return (new cljs.core.async.t_cljs$core$async30102(flag__$1,meta30103));
});

}

return (new cljs.core.async.t_cljs$core$async30102(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30128 = (function (flag,cb,meta30129){
this.flag = flag;
this.cb = cb;
this.meta30129 = meta30129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30130,meta30129__$1){
var self__ = this;
var _30130__$1 = this;
return (new cljs.core.async.t_cljs$core$async30128(self__.flag,self__.cb,meta30129__$1));
}));

(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30130){
var self__ = this;
var _30130__$1 = this;
return self__.meta30129;
}));

(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30129","meta30129",2087680096,null)], null);
}));

(cljs.core.async.t_cljs$core$async30128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30128");

(cljs.core.async.t_cljs$core$async30128.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30128.
 */
cljs.core.async.__GT_t_cljs$core$async30128 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30128(flag__$1,cb__$1,meta30129){
return (new cljs.core.async.t_cljs$core$async30128(flag__$1,cb__$1,meta30129));
});

}

return (new cljs.core.async.t_cljs$core$async30128(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30156_SHARP_){
var G__30196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30156_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30196) : fret.call(null,G__30196));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30157_SHARP_){
var G__30223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30157_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30223) : fret.call(null,G__30223));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33594 = (i + (1));
i = G__33594;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33612 = arguments.length;
var i__4865__auto___33613 = (0);
while(true){
if((i__4865__auto___33613 < len__4864__auto___33612)){
args__4870__auto__.push((arguments[i__4865__auto___33613]));

var G__33614 = (i__4865__auto___33613 + (1));
i__4865__auto___33613 = G__33614;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30257){
var map__30258 = p__30257;
var map__30258__$1 = cljs.core.__destructure_map(map__30258);
var opts = map__30258__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30245){
var G__30246 = cljs.core.first(seq30245);
var seq30245__$1 = cljs.core.next(seq30245);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30246,seq30245__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30287 = arguments.length;
switch (G__30287) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29780__auto___33657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_30459){
var state_val_30461 = (state_30459[(1)]);
if((state_val_30461 === (7))){
var inst_30440 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
var statearr_30508_33668 = state_30459__$1;
(statearr_30508_33668[(2)] = inst_30440);

(statearr_30508_33668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (1))){
var state_30459__$1 = state_30459;
var statearr_30509_33677 = state_30459__$1;
(statearr_30509_33677[(2)] = null);

(statearr_30509_33677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (4))){
var inst_30394 = (state_30459[(7)]);
var inst_30394__$1 = (state_30459[(2)]);
var inst_30416 = (inst_30394__$1 == null);
var state_30459__$1 = (function (){var statearr_30511 = state_30459;
(statearr_30511[(7)] = inst_30394__$1);

return statearr_30511;
})();
if(cljs.core.truth_(inst_30416)){
var statearr_30512_33683 = state_30459__$1;
(statearr_30512_33683[(1)] = (5));

} else {
var statearr_30513_33689 = state_30459__$1;
(statearr_30513_33689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (13))){
var state_30459__$1 = state_30459;
var statearr_30517_33692 = state_30459__$1;
(statearr_30517_33692[(2)] = null);

(statearr_30517_33692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (6))){
var inst_30394 = (state_30459[(7)]);
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30459__$1,(11),to,inst_30394);
} else {
if((state_val_30461 === (3))){
var inst_30450 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30459__$1,inst_30450);
} else {
if((state_val_30461 === (12))){
var state_30459__$1 = state_30459;
var statearr_30522_33701 = state_30459__$1;
(statearr_30522_33701[(2)] = null);

(statearr_30522_33701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (2))){
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30459__$1,(4),from);
} else {
if((state_val_30461 === (11))){
var inst_30430 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
if(cljs.core.truth_(inst_30430)){
var statearr_30525_33704 = state_30459__$1;
(statearr_30525_33704[(1)] = (12));

} else {
var statearr_30526_33705 = state_30459__$1;
(statearr_30526_33705[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (9))){
var state_30459__$1 = state_30459;
var statearr_30527_33707 = state_30459__$1;
(statearr_30527_33707[(2)] = null);

(statearr_30527_33707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (5))){
var state_30459__$1 = state_30459;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30528_33709 = state_30459__$1;
(statearr_30528_33709[(1)] = (8));

} else {
var statearr_30529_33710 = state_30459__$1;
(statearr_30529_33710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (14))){
var inst_30438 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
var statearr_30533_33711 = state_30459__$1;
(statearr_30533_33711[(2)] = inst_30438);

(statearr_30533_33711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (10))){
var inst_30427 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
var statearr_30537_33712 = state_30459__$1;
(statearr_30537_33712[(2)] = inst_30427);

(statearr_30537_33712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (8))){
var inst_30419 = cljs.core.async.close_BANG_(to);
var state_30459__$1 = state_30459;
var statearr_30538_33715 = state_30459__$1;
(statearr_30538_33715[(2)] = inst_30419);

(statearr_30538_33715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_30542 = [null,null,null,null,null,null,null,null];
(statearr_30542[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_30542[(1)] = (1));

return statearr_30542;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_30459){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_30459);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e30543){var ex__28830__auto__ = e30543;
var statearr_30544_33717 = state_30459;
(statearr_30544_33717[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_30459[(4)]))){
var statearr_30546_33719 = state_30459;
(statearr_30546_33719[(1)] = cljs.core.first((state_30459[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33720 = state_30459;
state_30459 = G__33720;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_30459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_30459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_30552 = f__29781__auto__();
(statearr_30552[(6)] = c__29780__auto___33657);

return statearr_30552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30564){
var vec__30565 = p__30564;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30565,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30565,(1),null);
var job = vec__30565;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29780__auto___33731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_30574){
var state_val_30575 = (state_30574[(1)]);
if((state_val_30575 === (1))){
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30574__$1,(2),res,v);
} else {
if((state_val_30575 === (2))){
var inst_30571 = (state_30574[(2)]);
var inst_30572 = cljs.core.async.close_BANG_(res);
var state_30574__$1 = (function (){var statearr_30577 = state_30574;
(statearr_30577[(7)] = inst_30571);

return statearr_30577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30574__$1,inst_30572);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_30579 = [null,null,null,null,null,null,null,null];
(statearr_30579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__);

(statearr_30579[(1)] = (1));

return statearr_30579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1 = (function (state_30574){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_30574);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e30580){var ex__28830__auto__ = e30580;
var statearr_30581_33735 = state_30574;
(statearr_30581_33735[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_30574[(4)]))){
var statearr_30582_33736 = state_30574;
(statearr_30582_33736[(1)] = cljs.core.first((state_30574[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33745 = state_30574;
state_30574 = G__33745;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = function(state_30574){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1.call(this,state_30574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_30585 = f__29781__auto__();
(statearr_30585[(6)] = c__29780__auto___33731);

return statearr_30585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30587){
var vec__30589 = p__30587;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30589,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30589,(1),null);
var job = vec__30589;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___33758 = n;
var __33759 = (0);
while(true){
if((__33759 < n__4741__auto___33758)){
var G__30592_33763 = type;
var G__30592_33764__$1 = (((G__30592_33763 instanceof cljs.core.Keyword))?G__30592_33763.fqn:null);
switch (G__30592_33764__$1) {
case "compute":
var c__29780__auto___33766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33759,c__29780__auto___33766,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async){
return (function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = ((function (__33759,c__29780__auto___33766,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async){
return (function (state_30605){
var state_val_30606 = (state_30605[(1)]);
if((state_val_30606 === (1))){
var state_30605__$1 = state_30605;
var statearr_30609_33773 = state_30605__$1;
(statearr_30609_33773[(2)] = null);

(statearr_30609_33773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (2))){
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30605__$1,(4),jobs);
} else {
if((state_val_30606 === (3))){
var inst_30603 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30605__$1,inst_30603);
} else {
if((state_val_30606 === (4))){
var inst_30595 = (state_30605[(2)]);
var inst_30596 = process(inst_30595);
var state_30605__$1 = state_30605;
if(cljs.core.truth_(inst_30596)){
var statearr_30611_33788 = state_30605__$1;
(statearr_30611_33788[(1)] = (5));

} else {
var statearr_30612_33789 = state_30605__$1;
(statearr_30612_33789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (5))){
var state_30605__$1 = state_30605;
var statearr_30613_33790 = state_30605__$1;
(statearr_30613_33790[(2)] = null);

(statearr_30613_33790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (6))){
var state_30605__$1 = state_30605;
var statearr_30614_33799 = state_30605__$1;
(statearr_30614_33799[(2)] = null);

(statearr_30614_33799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (7))){
var inst_30601 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30615_33800 = state_30605__$1;
(statearr_30615_33800[(2)] = inst_30601);

(statearr_30615_33800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33759,c__29780__auto___33766,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async))
;
return ((function (__33759,switch__28826__auto__,c__29780__auto___33766,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_30617 = [null,null,null,null,null,null,null];
(statearr_30617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__);

(statearr_30617[(1)] = (1));

return statearr_30617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1 = (function (state_30605){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_30605);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e30618){var ex__28830__auto__ = e30618;
var statearr_30623_33811 = state_30605;
(statearr_30623_33811[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_30605[(4)]))){
var statearr_30625_33812 = state_30605;
(statearr_30625_33812[(1)] = cljs.core.first((state_30605[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33814 = state_30605;
state_30605 = G__33814;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = function(state_30605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1.call(this,state_30605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__;
})()
;})(__33759,switch__28826__auto__,c__29780__auto___33766,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async))
})();
var state__29782__auto__ = (function (){var statearr_30629 = f__29781__auto__();
(statearr_30629[(6)] = c__29780__auto___33766);

return statearr_30629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
});})(__33759,c__29780__auto___33766,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async))
);


break;
case "async":
var c__29780__auto___33815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33759,c__29780__auto___33815,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async){
return (function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = ((function (__33759,c__29780__auto___33815,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async){
return (function (state_30645){
var state_val_30646 = (state_30645[(1)]);
if((state_val_30646 === (1))){
var state_30645__$1 = state_30645;
var statearr_30647_33821 = state_30645__$1;
(statearr_30647_33821[(2)] = null);

(statearr_30647_33821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30646 === (2))){
var state_30645__$1 = state_30645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30645__$1,(4),jobs);
} else {
if((state_val_30646 === (3))){
var inst_30643 = (state_30645[(2)]);
var state_30645__$1 = state_30645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30645__$1,inst_30643);
} else {
if((state_val_30646 === (4))){
var inst_30635 = (state_30645[(2)]);
var inst_30636 = async(inst_30635);
var state_30645__$1 = state_30645;
if(cljs.core.truth_(inst_30636)){
var statearr_30649_33826 = state_30645__$1;
(statearr_30649_33826[(1)] = (5));

} else {
var statearr_30650_33827 = state_30645__$1;
(statearr_30650_33827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30646 === (5))){
var state_30645__$1 = state_30645;
var statearr_30652_33828 = state_30645__$1;
(statearr_30652_33828[(2)] = null);

(statearr_30652_33828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30646 === (6))){
var state_30645__$1 = state_30645;
var statearr_30653_33829 = state_30645__$1;
(statearr_30653_33829[(2)] = null);

(statearr_30653_33829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30646 === (7))){
var inst_30641 = (state_30645[(2)]);
var state_30645__$1 = state_30645;
var statearr_30654_33830 = state_30645__$1;
(statearr_30654_33830[(2)] = inst_30641);

(statearr_30654_33830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33759,c__29780__auto___33815,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async))
;
return ((function (__33759,switch__28826__auto__,c__29780__auto___33815,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_30655 = [null,null,null,null,null,null,null];
(statearr_30655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__);

(statearr_30655[(1)] = (1));

return statearr_30655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1 = (function (state_30645){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_30645);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e30656){var ex__28830__auto__ = e30656;
var statearr_30657_33839 = state_30645;
(statearr_30657_33839[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_30645[(4)]))){
var statearr_30658_33840 = state_30645;
(statearr_30658_33840[(1)] = cljs.core.first((state_30645[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33842 = state_30645;
state_30645 = G__33842;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = function(state_30645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1.call(this,state_30645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__;
})()
;})(__33759,switch__28826__auto__,c__29780__auto___33815,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async))
})();
var state__29782__auto__ = (function (){var statearr_30659 = f__29781__auto__();
(statearr_30659[(6)] = c__29780__auto___33815);

return statearr_30659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
});})(__33759,c__29780__auto___33815,G__30592_33763,G__30592_33764__$1,n__4741__auto___33758,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30592_33764__$1)].join('')));

}

var G__33843 = (__33759 + (1));
__33759 = G__33843;
continue;
} else {
}
break;
}

var c__29780__auto___33844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_30692){
var state_val_30693 = (state_30692[(1)]);
if((state_val_30693 === (7))){
var inst_30688 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30707_33845 = state_30692__$1;
(statearr_30707_33845[(2)] = inst_30688);

(statearr_30707_33845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (1))){
var state_30692__$1 = state_30692;
var statearr_30711_33846 = state_30692__$1;
(statearr_30711_33846[(2)] = null);

(statearr_30711_33846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (4))){
var inst_30664 = (state_30692[(7)]);
var inst_30664__$1 = (state_30692[(2)]);
var inst_30665 = (inst_30664__$1 == null);
var state_30692__$1 = (function (){var statearr_30713 = state_30692;
(statearr_30713[(7)] = inst_30664__$1);

return statearr_30713;
})();
if(cljs.core.truth_(inst_30665)){
var statearr_30714_33847 = state_30692__$1;
(statearr_30714_33847[(1)] = (5));

} else {
var statearr_30715_33848 = state_30692__$1;
(statearr_30715_33848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (6))){
var inst_30664 = (state_30692[(7)]);
var inst_30669 = (state_30692[(8)]);
var inst_30669__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30678 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30680 = [inst_30664,inst_30669__$1];
var inst_30681 = (new cljs.core.PersistentVector(null,2,(5),inst_30678,inst_30680,null));
var state_30692__$1 = (function (){var statearr_30718 = state_30692;
(statearr_30718[(8)] = inst_30669__$1);

return statearr_30718;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30692__$1,(8),jobs,inst_30681);
} else {
if((state_val_30693 === (3))){
var inst_30690 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30692__$1,inst_30690);
} else {
if((state_val_30693 === (2))){
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30692__$1,(4),from);
} else {
if((state_val_30693 === (9))){
var inst_30685 = (state_30692[(2)]);
var state_30692__$1 = (function (){var statearr_30721 = state_30692;
(statearr_30721[(9)] = inst_30685);

return statearr_30721;
})();
var statearr_30722_33870 = state_30692__$1;
(statearr_30722_33870[(2)] = null);

(statearr_30722_33870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (5))){
var inst_30667 = cljs.core.async.close_BANG_(jobs);
var state_30692__$1 = state_30692;
var statearr_30726_33880 = state_30692__$1;
(statearr_30726_33880[(2)] = inst_30667);

(statearr_30726_33880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (8))){
var inst_30669 = (state_30692[(8)]);
var inst_30683 = (state_30692[(2)]);
var state_30692__$1 = (function (){var statearr_30728 = state_30692;
(statearr_30728[(10)] = inst_30683);

return statearr_30728;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30692__$1,(9),results,inst_30669);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_30729 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__);

(statearr_30729[(1)] = (1));

return statearr_30729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1 = (function (state_30692){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_30692);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e30733){var ex__28830__auto__ = e30733;
var statearr_30734_33892 = state_30692;
(statearr_30734_33892[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_30692[(4)]))){
var statearr_30736_33893 = state_30692;
(statearr_30736_33893[(1)] = cljs.core.first((state_30692[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33898 = state_30692;
state_30692 = G__33898;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = function(state_30692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1.call(this,state_30692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_30737 = f__29781__auto__();
(statearr_30737[(6)] = c__29780__auto___33844);

return statearr_30737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


var c__29780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_30779){
var state_val_30780 = (state_30779[(1)]);
if((state_val_30780 === (7))){
var inst_30775 = (state_30779[(2)]);
var state_30779__$1 = state_30779;
var statearr_30798_33911 = state_30779__$1;
(statearr_30798_33911[(2)] = inst_30775);

(statearr_30798_33911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (20))){
var state_30779__$1 = state_30779;
var statearr_30800_33923 = state_30779__$1;
(statearr_30800_33923[(2)] = null);

(statearr_30800_33923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (1))){
var state_30779__$1 = state_30779;
var statearr_30801_33925 = state_30779__$1;
(statearr_30801_33925[(2)] = null);

(statearr_30801_33925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (4))){
var inst_30744 = (state_30779[(7)]);
var inst_30744__$1 = (state_30779[(2)]);
var inst_30745 = (inst_30744__$1 == null);
var state_30779__$1 = (function (){var statearr_30802 = state_30779;
(statearr_30802[(7)] = inst_30744__$1);

return statearr_30802;
})();
if(cljs.core.truth_(inst_30745)){
var statearr_30803_33930 = state_30779__$1;
(statearr_30803_33930[(1)] = (5));

} else {
var statearr_30804_33931 = state_30779__$1;
(statearr_30804_33931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (15))){
var inst_30757 = (state_30779[(8)]);
var state_30779__$1 = state_30779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30779__$1,(18),to,inst_30757);
} else {
if((state_val_30780 === (21))){
var inst_30770 = (state_30779[(2)]);
var state_30779__$1 = state_30779;
var statearr_30817_33936 = state_30779__$1;
(statearr_30817_33936[(2)] = inst_30770);

(statearr_30817_33936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (13))){
var inst_30772 = (state_30779[(2)]);
var state_30779__$1 = (function (){var statearr_30819 = state_30779;
(statearr_30819[(9)] = inst_30772);

return statearr_30819;
})();
var statearr_30820_33945 = state_30779__$1;
(statearr_30820_33945[(2)] = null);

(statearr_30820_33945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (6))){
var inst_30744 = (state_30779[(7)]);
var state_30779__$1 = state_30779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30779__$1,(11),inst_30744);
} else {
if((state_val_30780 === (17))){
var inst_30765 = (state_30779[(2)]);
var state_30779__$1 = state_30779;
if(cljs.core.truth_(inst_30765)){
var statearr_30824_33953 = state_30779__$1;
(statearr_30824_33953[(1)] = (19));

} else {
var statearr_30825_33954 = state_30779__$1;
(statearr_30825_33954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (3))){
var inst_30777 = (state_30779[(2)]);
var state_30779__$1 = state_30779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30779__$1,inst_30777);
} else {
if((state_val_30780 === (12))){
var inst_30754 = (state_30779[(10)]);
var state_30779__$1 = state_30779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30779__$1,(14),inst_30754);
} else {
if((state_val_30780 === (2))){
var state_30779__$1 = state_30779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30779__$1,(4),results);
} else {
if((state_val_30780 === (19))){
var state_30779__$1 = state_30779;
var statearr_30833_33955 = state_30779__$1;
(statearr_30833_33955[(2)] = null);

(statearr_30833_33955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (11))){
var inst_30754 = (state_30779[(2)]);
var state_30779__$1 = (function (){var statearr_30834 = state_30779;
(statearr_30834[(10)] = inst_30754);

return statearr_30834;
})();
var statearr_30838_33958 = state_30779__$1;
(statearr_30838_33958[(2)] = null);

(statearr_30838_33958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (9))){
var state_30779__$1 = state_30779;
var statearr_30840_33959 = state_30779__$1;
(statearr_30840_33959[(2)] = null);

(statearr_30840_33959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (5))){
var state_30779__$1 = state_30779;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30841_33960 = state_30779__$1;
(statearr_30841_33960[(1)] = (8));

} else {
var statearr_30842_33961 = state_30779__$1;
(statearr_30842_33961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (14))){
var inst_30757 = (state_30779[(8)]);
var inst_30759 = (state_30779[(11)]);
var inst_30757__$1 = (state_30779[(2)]);
var inst_30758 = (inst_30757__$1 == null);
var inst_30759__$1 = cljs.core.not(inst_30758);
var state_30779__$1 = (function (){var statearr_30845 = state_30779;
(statearr_30845[(8)] = inst_30757__$1);

(statearr_30845[(11)] = inst_30759__$1);

return statearr_30845;
})();
if(inst_30759__$1){
var statearr_30853_33966 = state_30779__$1;
(statearr_30853_33966[(1)] = (15));

} else {
var statearr_30854_33967 = state_30779__$1;
(statearr_30854_33967[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (16))){
var inst_30759 = (state_30779[(11)]);
var state_30779__$1 = state_30779;
var statearr_30855_33968 = state_30779__$1;
(statearr_30855_33968[(2)] = inst_30759);

(statearr_30855_33968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (10))){
var inst_30751 = (state_30779[(2)]);
var state_30779__$1 = state_30779;
var statearr_30856_33969 = state_30779__$1;
(statearr_30856_33969[(2)] = inst_30751);

(statearr_30856_33969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (18))){
var inst_30762 = (state_30779[(2)]);
var state_30779__$1 = state_30779;
var statearr_30857_33971 = state_30779__$1;
(statearr_30857_33971[(2)] = inst_30762);

(statearr_30857_33971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30780 === (8))){
var inst_30748 = cljs.core.async.close_BANG_(to);
var state_30779__$1 = state_30779;
var statearr_30858_33975 = state_30779__$1;
(statearr_30858_33975[(2)] = inst_30748);

(statearr_30858_33975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_30863 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__);

(statearr_30863[(1)] = (1));

return statearr_30863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1 = (function (state_30779){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_30779);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e30869){var ex__28830__auto__ = e30869;
var statearr_30870_33976 = state_30779;
(statearr_30870_33976[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_30779[(4)]))){
var statearr_30872_33977 = state_30779;
(statearr_30872_33977[(1)] = cljs.core.first((state_30779[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33978 = state_30779;
state_30779 = G__33978;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = function(state_30779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1.call(this,state_30779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_30873 = f__29781__auto__();
(statearr_30873[(6)] = c__29780__auto__);

return statearr_30873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));

return c__29780__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30881 = arguments.length;
switch (G__30881) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30893 = arguments.length;
switch (G__30893) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30910 = arguments.length;
switch (G__30910) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29780__auto___33998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_30952){
var state_val_30953 = (state_30952[(1)]);
if((state_val_30953 === (7))){
var inst_30947 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
var statearr_30959_33999 = state_30952__$1;
(statearr_30959_33999[(2)] = inst_30947);

(statearr_30959_33999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (1))){
var state_30952__$1 = state_30952;
var statearr_30960_34000 = state_30952__$1;
(statearr_30960_34000[(2)] = null);

(statearr_30960_34000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (4))){
var inst_30924 = (state_30952[(7)]);
var inst_30924__$1 = (state_30952[(2)]);
var inst_30925 = (inst_30924__$1 == null);
var state_30952__$1 = (function (){var statearr_30964 = state_30952;
(statearr_30964[(7)] = inst_30924__$1);

return statearr_30964;
})();
if(cljs.core.truth_(inst_30925)){
var statearr_30965_34001 = state_30952__$1;
(statearr_30965_34001[(1)] = (5));

} else {
var statearr_30967_34003 = state_30952__$1;
(statearr_30967_34003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (13))){
var state_30952__$1 = state_30952;
var statearr_30968_34004 = state_30952__$1;
(statearr_30968_34004[(2)] = null);

(statearr_30968_34004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (6))){
var inst_30924 = (state_30952[(7)]);
var inst_30931 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30924) : p.call(null,inst_30924));
var state_30952__$1 = state_30952;
if(cljs.core.truth_(inst_30931)){
var statearr_30970_34005 = state_30952__$1;
(statearr_30970_34005[(1)] = (9));

} else {
var statearr_30971_34006 = state_30952__$1;
(statearr_30971_34006[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (3))){
var inst_30949 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30952__$1,inst_30949);
} else {
if((state_val_30953 === (12))){
var state_30952__$1 = state_30952;
var statearr_30972_34008 = state_30952__$1;
(statearr_30972_34008[(2)] = null);

(statearr_30972_34008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (2))){
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30952__$1,(4),ch);
} else {
if((state_val_30953 === (11))){
var inst_30924 = (state_30952[(7)]);
var inst_30938 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30952__$1,(8),inst_30938,inst_30924);
} else {
if((state_val_30953 === (9))){
var state_30952__$1 = state_30952;
var statearr_30974_34015 = state_30952__$1;
(statearr_30974_34015[(2)] = tc);

(statearr_30974_34015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (5))){
var inst_30927 = cljs.core.async.close_BANG_(tc);
var inst_30928 = cljs.core.async.close_BANG_(fc);
var state_30952__$1 = (function (){var statearr_30979 = state_30952;
(statearr_30979[(8)] = inst_30927);

return statearr_30979;
})();
var statearr_30980_34020 = state_30952__$1;
(statearr_30980_34020[(2)] = inst_30928);

(statearr_30980_34020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (14))){
var inst_30945 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
var statearr_30981_34026 = state_30952__$1;
(statearr_30981_34026[(2)] = inst_30945);

(statearr_30981_34026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (10))){
var state_30952__$1 = state_30952;
var statearr_30982_34027 = state_30952__$1;
(statearr_30982_34027[(2)] = fc);

(statearr_30982_34027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (8))){
var inst_30940 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
if(cljs.core.truth_(inst_30940)){
var statearr_30983_34028 = state_30952__$1;
(statearr_30983_34028[(1)] = (12));

} else {
var statearr_30984_34030 = state_30952__$1;
(statearr_30984_34030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_30987 = [null,null,null,null,null,null,null,null,null];
(statearr_30987[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_30987[(1)] = (1));

return statearr_30987;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_30952){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_30952);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e30990){var ex__28830__auto__ = e30990;
var statearr_30991_34046 = state_30952;
(statearr_30991_34046[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_30952[(4)]))){
var statearr_30992_34047 = state_30952;
(statearr_30992_34047[(1)] = cljs.core.first((state_30952[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34052 = state_30952;
state_30952 = G__34052;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_30952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_30952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_30993 = f__29781__auto__();
(statearr_30993[(6)] = c__29780__auto___33998);

return statearr_30993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_31047){
var state_val_31048 = (state_31047[(1)]);
if((state_val_31048 === (7))){
var inst_31043 = (state_31047[(2)]);
var state_31047__$1 = state_31047;
var statearr_31052_34061 = state_31047__$1;
(statearr_31052_34061[(2)] = inst_31043);

(statearr_31052_34061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (1))){
var inst_31024 = init;
var inst_31025 = inst_31024;
var state_31047__$1 = (function (){var statearr_31056 = state_31047;
(statearr_31056[(7)] = inst_31025);

return statearr_31056;
})();
var statearr_31057_34062 = state_31047__$1;
(statearr_31057_34062[(2)] = null);

(statearr_31057_34062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (4))){
var inst_31028 = (state_31047[(8)]);
var inst_31028__$1 = (state_31047[(2)]);
var inst_31029 = (inst_31028__$1 == null);
var state_31047__$1 = (function (){var statearr_31060 = state_31047;
(statearr_31060[(8)] = inst_31028__$1);

return statearr_31060;
})();
if(cljs.core.truth_(inst_31029)){
var statearr_31062_34065 = state_31047__$1;
(statearr_31062_34065[(1)] = (5));

} else {
var statearr_31063_34066 = state_31047__$1;
(statearr_31063_34066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (6))){
var inst_31033 = (state_31047[(9)]);
var inst_31025 = (state_31047[(7)]);
var inst_31028 = (state_31047[(8)]);
var inst_31033__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31025,inst_31028) : f.call(null,inst_31025,inst_31028));
var inst_31035 = cljs.core.reduced_QMARK_(inst_31033__$1);
var state_31047__$1 = (function (){var statearr_31064 = state_31047;
(statearr_31064[(9)] = inst_31033__$1);

return statearr_31064;
})();
if(inst_31035){
var statearr_31065_34072 = state_31047__$1;
(statearr_31065_34072[(1)] = (8));

} else {
var statearr_31066_34076 = state_31047__$1;
(statearr_31066_34076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (3))){
var inst_31045 = (state_31047[(2)]);
var state_31047__$1 = state_31047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31047__$1,inst_31045);
} else {
if((state_val_31048 === (2))){
var state_31047__$1 = state_31047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31047__$1,(4),ch);
} else {
if((state_val_31048 === (9))){
var inst_31033 = (state_31047[(9)]);
var inst_31025 = inst_31033;
var state_31047__$1 = (function (){var statearr_31068 = state_31047;
(statearr_31068[(7)] = inst_31025);

return statearr_31068;
})();
var statearr_31070_34078 = state_31047__$1;
(statearr_31070_34078[(2)] = null);

(statearr_31070_34078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (5))){
var inst_31025 = (state_31047[(7)]);
var state_31047__$1 = state_31047;
var statearr_31077_34079 = state_31047__$1;
(statearr_31077_34079[(2)] = inst_31025);

(statearr_31077_34079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (10))){
var inst_31041 = (state_31047[(2)]);
var state_31047__$1 = state_31047;
var statearr_31082_34083 = state_31047__$1;
(statearr_31082_34083[(2)] = inst_31041);

(statearr_31082_34083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (8))){
var inst_31033 = (state_31047[(9)]);
var inst_31037 = cljs.core.deref(inst_31033);
var state_31047__$1 = state_31047;
var statearr_31085_34088 = state_31047__$1;
(statearr_31085_34088[(2)] = inst_31037);

(statearr_31085_34088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28827__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28827__auto____0 = (function (){
var statearr_31086 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31086[(0)] = cljs$core$async$reduce_$_state_machine__28827__auto__);

(statearr_31086[(1)] = (1));

return statearr_31086;
});
var cljs$core$async$reduce_$_state_machine__28827__auto____1 = (function (state_31047){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31047);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31090){var ex__28830__auto__ = e31090;
var statearr_31091_34093 = state_31047;
(statearr_31091_34093[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_31047[(4)]))){
var statearr_31097_34094 = state_31047;
(statearr_31097_34094[(1)] = cljs.core.first((state_31047[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34095 = state_31047;
state_31047 = G__34095;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28827__auto__ = function(state_31047){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28827__auto____1.call(this,state_31047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28827__auto____0;
cljs$core$async$reduce_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28827__auto____1;
return cljs$core$async$reduce_$_state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_31100 = f__29781__auto__();
(statearr_31100[(6)] = c__29780__auto__);

return statearr_31100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));

return c__29780__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_31111){
var state_val_31112 = (state_31111[(1)]);
if((state_val_31112 === (1))){
var inst_31106 = cljs.core.async.reduce(f__$1,init,ch);
var state_31111__$1 = state_31111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31111__$1,(2),inst_31106);
} else {
if((state_val_31112 === (2))){
var inst_31108 = (state_31111[(2)]);
var inst_31109 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31108) : f__$1.call(null,inst_31108));
var state_31111__$1 = state_31111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31111__$1,inst_31109);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28827__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28827__auto____0 = (function (){
var statearr_31122 = [null,null,null,null,null,null,null];
(statearr_31122[(0)] = cljs$core$async$transduce_$_state_machine__28827__auto__);

(statearr_31122[(1)] = (1));

return statearr_31122;
});
var cljs$core$async$transduce_$_state_machine__28827__auto____1 = (function (state_31111){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31111);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31123){var ex__28830__auto__ = e31123;
var statearr_31124_34108 = state_31111;
(statearr_31124_34108[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_31111[(4)]))){
var statearr_31125_34112 = state_31111;
(statearr_31125_34112[(1)] = cljs.core.first((state_31111[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34113 = state_31111;
state_31111 = G__34113;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28827__auto__ = function(state_31111){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28827__auto____1.call(this,state_31111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28827__auto____0;
cljs$core$async$transduce_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28827__auto____1;
return cljs$core$async$transduce_$_state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_31128 = f__29781__auto__();
(statearr_31128[(6)] = c__29780__auto__);

return statearr_31128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));

return c__29780__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31137 = arguments.length;
switch (G__31137) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_31178){
var state_val_31179 = (state_31178[(1)]);
if((state_val_31179 === (7))){
var inst_31154 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
var statearr_31187_34134 = state_31178__$1;
(statearr_31187_34134[(2)] = inst_31154);

(statearr_31187_34134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (1))){
var inst_31148 = cljs.core.seq(coll);
var inst_31149 = inst_31148;
var state_31178__$1 = (function (){var statearr_31190 = state_31178;
(statearr_31190[(7)] = inst_31149);

return statearr_31190;
})();
var statearr_31195_34143 = state_31178__$1;
(statearr_31195_34143[(2)] = null);

(statearr_31195_34143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (4))){
var inst_31149 = (state_31178[(7)]);
var inst_31152 = cljs.core.first(inst_31149);
var state_31178__$1 = state_31178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31178__$1,(7),ch,inst_31152);
} else {
if((state_val_31179 === (13))){
var inst_31166 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
var statearr_31201_34146 = state_31178__$1;
(statearr_31201_34146[(2)] = inst_31166);

(statearr_31201_34146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (6))){
var inst_31157 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
if(cljs.core.truth_(inst_31157)){
var statearr_31204_34150 = state_31178__$1;
(statearr_31204_34150[(1)] = (8));

} else {
var statearr_31205_34151 = state_31178__$1;
(statearr_31205_34151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (3))){
var inst_31170 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31178__$1,inst_31170);
} else {
if((state_val_31179 === (12))){
var state_31178__$1 = state_31178;
var statearr_31208_34152 = state_31178__$1;
(statearr_31208_34152[(2)] = null);

(statearr_31208_34152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (2))){
var inst_31149 = (state_31178[(7)]);
var state_31178__$1 = state_31178;
if(cljs.core.truth_(inst_31149)){
var statearr_31209_34153 = state_31178__$1;
(statearr_31209_34153[(1)] = (4));

} else {
var statearr_31211_34156 = state_31178__$1;
(statearr_31211_34156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (11))){
var inst_31163 = cljs.core.async.close_BANG_(ch);
var state_31178__$1 = state_31178;
var statearr_31219_34158 = state_31178__$1;
(statearr_31219_34158[(2)] = inst_31163);

(statearr_31219_34158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (9))){
var state_31178__$1 = state_31178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31220_34160 = state_31178__$1;
(statearr_31220_34160[(1)] = (11));

} else {
var statearr_31222_34161 = state_31178__$1;
(statearr_31222_34161[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (5))){
var inst_31149 = (state_31178[(7)]);
var state_31178__$1 = state_31178;
var statearr_31228_34166 = state_31178__$1;
(statearr_31228_34166[(2)] = inst_31149);

(statearr_31228_34166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (10))){
var inst_31168 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
var statearr_31231_34167 = state_31178__$1;
(statearr_31231_34167[(2)] = inst_31168);

(statearr_31231_34167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (8))){
var inst_31149 = (state_31178[(7)]);
var inst_31159 = cljs.core.next(inst_31149);
var inst_31149__$1 = inst_31159;
var state_31178__$1 = (function (){var statearr_31233 = state_31178;
(statearr_31233[(7)] = inst_31149__$1);

return statearr_31233;
})();
var statearr_31234_34169 = state_31178__$1;
(statearr_31234_34169[(2)] = null);

(statearr_31234_34169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_31238 = [null,null,null,null,null,null,null,null];
(statearr_31238[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_31238[(1)] = (1));

return statearr_31238;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_31178){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31178);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31240){var ex__28830__auto__ = e31240;
var statearr_31241_34178 = state_31178;
(statearr_31241_34178[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_31178[(4)]))){
var statearr_31242_34179 = state_31178;
(statearr_31242_34179[(1)] = cljs.core.first((state_31178[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34181 = state_31178;
state_31178 = G__34181;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_31178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_31178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_31244 = f__29781__auto__();
(statearr_31244[(6)] = c__29780__auto__);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));

return c__29780__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31253 = arguments.length;
switch (G__31253) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34193 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34193(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34197 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34197(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34199 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34199(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34205 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34205(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31320 = (function (ch,cs,meta31321){
this.ch = ch;
this.cs = cs;
this.meta31321 = meta31321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31322,meta31321__$1){
var self__ = this;
var _31322__$1 = this;
return (new cljs.core.async.t_cljs$core$async31320(self__.ch,self__.cs,meta31321__$1));
}));

(cljs.core.async.t_cljs$core$async31320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31322){
var self__ = this;
var _31322__$1 = this;
return self__.meta31321;
}));

(cljs.core.async.t_cljs$core$async31320.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31320.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31320.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31320.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31320.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31321","meta31321",-1879605507,null)], null);
}));

(cljs.core.async.t_cljs$core$async31320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31320");

(cljs.core.async.t_cljs$core$async31320.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31320.
 */
cljs.core.async.__GT_t_cljs$core$async31320 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31320(ch__$1,cs__$1,meta31321){
return (new cljs.core.async.t_cljs$core$async31320(ch__$1,cs__$1,meta31321));
});

}

return (new cljs.core.async.t_cljs$core$async31320(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29780__auto___34220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_31499){
var state_val_31500 = (state_31499[(1)]);
if((state_val_31500 === (7))){
var inst_31493 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31506_34229 = state_31499__$1;
(statearr_31506_34229[(2)] = inst_31493);

(statearr_31506_34229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (20))){
var inst_31386 = (state_31499[(7)]);
var inst_31400 = cljs.core.first(inst_31386);
var inst_31401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31400,(0),null);
var inst_31402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31400,(1),null);
var state_31499__$1 = (function (){var statearr_31507 = state_31499;
(statearr_31507[(8)] = inst_31401);

return statearr_31507;
})();
if(cljs.core.truth_(inst_31402)){
var statearr_31508_34230 = state_31499__$1;
(statearr_31508_34230[(1)] = (22));

} else {
var statearr_31509_34231 = state_31499__$1;
(statearr_31509_34231[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (27))){
var inst_31352 = (state_31499[(9)]);
var inst_31433 = (state_31499[(10)]);
var inst_31431 = (state_31499[(11)]);
var inst_31441 = (state_31499[(12)]);
var inst_31441__$1 = cljs.core._nth(inst_31431,inst_31433);
var inst_31442 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31441__$1,inst_31352,done);
var state_31499__$1 = (function (){var statearr_31510 = state_31499;
(statearr_31510[(12)] = inst_31441__$1);

return statearr_31510;
})();
if(cljs.core.truth_(inst_31442)){
var statearr_31511_34235 = state_31499__$1;
(statearr_31511_34235[(1)] = (30));

} else {
var statearr_31512_34240 = state_31499__$1;
(statearr_31512_34240[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (1))){
var state_31499__$1 = state_31499;
var statearr_31513_34242 = state_31499__$1;
(statearr_31513_34242[(2)] = null);

(statearr_31513_34242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (24))){
var inst_31386 = (state_31499[(7)]);
var inst_31407 = (state_31499[(2)]);
var inst_31408 = cljs.core.next(inst_31386);
var inst_31363 = inst_31408;
var inst_31364 = null;
var inst_31365 = (0);
var inst_31366 = (0);
var state_31499__$1 = (function (){var statearr_31515 = state_31499;
(statearr_31515[(13)] = inst_31365);

(statearr_31515[(14)] = inst_31364);

(statearr_31515[(15)] = inst_31366);

(statearr_31515[(16)] = inst_31407);

(statearr_31515[(17)] = inst_31363);

return statearr_31515;
})();
var statearr_31516_34243 = state_31499__$1;
(statearr_31516_34243[(2)] = null);

(statearr_31516_34243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (39))){
var state_31499__$1 = state_31499;
var statearr_31525_34253 = state_31499__$1;
(statearr_31525_34253[(2)] = null);

(statearr_31525_34253[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (4))){
var inst_31352 = (state_31499[(9)]);
var inst_31352__$1 = (state_31499[(2)]);
var inst_31353 = (inst_31352__$1 == null);
var state_31499__$1 = (function (){var statearr_31526 = state_31499;
(statearr_31526[(9)] = inst_31352__$1);

return statearr_31526;
})();
if(cljs.core.truth_(inst_31353)){
var statearr_31527_34257 = state_31499__$1;
(statearr_31527_34257[(1)] = (5));

} else {
var statearr_31528_34258 = state_31499__$1;
(statearr_31528_34258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (15))){
var inst_31365 = (state_31499[(13)]);
var inst_31364 = (state_31499[(14)]);
var inst_31366 = (state_31499[(15)]);
var inst_31363 = (state_31499[(17)]);
var inst_31381 = (state_31499[(2)]);
var inst_31382 = (inst_31366 + (1));
var tmp31520 = inst_31365;
var tmp31521 = inst_31364;
var tmp31522 = inst_31363;
var inst_31363__$1 = tmp31522;
var inst_31364__$1 = tmp31521;
var inst_31365__$1 = tmp31520;
var inst_31366__$1 = inst_31382;
var state_31499__$1 = (function (){var statearr_31535 = state_31499;
(statearr_31535[(13)] = inst_31365__$1);

(statearr_31535[(18)] = inst_31381);

(statearr_31535[(14)] = inst_31364__$1);

(statearr_31535[(15)] = inst_31366__$1);

(statearr_31535[(17)] = inst_31363__$1);

return statearr_31535;
})();
var statearr_31537_34260 = state_31499__$1;
(statearr_31537_34260[(2)] = null);

(statearr_31537_34260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (21))){
var inst_31411 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31542_34261 = state_31499__$1;
(statearr_31542_34261[(2)] = inst_31411);

(statearr_31542_34261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (31))){
var inst_31441 = (state_31499[(12)]);
var inst_31445 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31441);
var state_31499__$1 = state_31499;
var statearr_31544_34264 = state_31499__$1;
(statearr_31544_34264[(2)] = inst_31445);

(statearr_31544_34264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (32))){
var inst_31433 = (state_31499[(10)]);
var inst_31431 = (state_31499[(11)]);
var inst_31432 = (state_31499[(19)]);
var inst_31430 = (state_31499[(20)]);
var inst_31447 = (state_31499[(2)]);
var inst_31449 = (inst_31433 + (1));
var tmp31539 = inst_31431;
var tmp31540 = inst_31432;
var tmp31541 = inst_31430;
var inst_31430__$1 = tmp31541;
var inst_31431__$1 = tmp31539;
var inst_31432__$1 = tmp31540;
var inst_31433__$1 = inst_31449;
var state_31499__$1 = (function (){var statearr_31546 = state_31499;
(statearr_31546[(10)] = inst_31433__$1);

(statearr_31546[(11)] = inst_31431__$1);

(statearr_31546[(19)] = inst_31432__$1);

(statearr_31546[(20)] = inst_31430__$1);

(statearr_31546[(21)] = inst_31447);

return statearr_31546;
})();
var statearr_31548_34265 = state_31499__$1;
(statearr_31548_34265[(2)] = null);

(statearr_31548_34265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (40))){
var inst_31463 = (state_31499[(22)]);
var inst_31469 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31463);
var state_31499__$1 = state_31499;
var statearr_31552_34266 = state_31499__$1;
(statearr_31552_34266[(2)] = inst_31469);

(statearr_31552_34266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (33))){
var inst_31452 = (state_31499[(23)]);
var inst_31454 = cljs.core.chunked_seq_QMARK_(inst_31452);
var state_31499__$1 = state_31499;
if(inst_31454){
var statearr_31560_34270 = state_31499__$1;
(statearr_31560_34270[(1)] = (36));

} else {
var statearr_31561_34271 = state_31499__$1;
(statearr_31561_34271[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (13))){
var inst_31375 = (state_31499[(24)]);
var inst_31378 = cljs.core.async.close_BANG_(inst_31375);
var state_31499__$1 = state_31499;
var statearr_31567_34272 = state_31499__$1;
(statearr_31567_34272[(2)] = inst_31378);

(statearr_31567_34272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (22))){
var inst_31401 = (state_31499[(8)]);
var inst_31404 = cljs.core.async.close_BANG_(inst_31401);
var state_31499__$1 = state_31499;
var statearr_31568_34273 = state_31499__$1;
(statearr_31568_34273[(2)] = inst_31404);

(statearr_31568_34273[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (36))){
var inst_31452 = (state_31499[(23)]);
var inst_31457 = cljs.core.chunk_first(inst_31452);
var inst_31458 = cljs.core.chunk_rest(inst_31452);
var inst_31459 = cljs.core.count(inst_31457);
var inst_31430 = inst_31458;
var inst_31431 = inst_31457;
var inst_31432 = inst_31459;
var inst_31433 = (0);
var state_31499__$1 = (function (){var statearr_31572 = state_31499;
(statearr_31572[(10)] = inst_31433);

(statearr_31572[(11)] = inst_31431);

(statearr_31572[(19)] = inst_31432);

(statearr_31572[(20)] = inst_31430);

return statearr_31572;
})();
var statearr_31576_34274 = state_31499__$1;
(statearr_31576_34274[(2)] = null);

(statearr_31576_34274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (41))){
var inst_31452 = (state_31499[(23)]);
var inst_31471 = (state_31499[(2)]);
var inst_31473 = cljs.core.next(inst_31452);
var inst_31430 = inst_31473;
var inst_31431 = null;
var inst_31432 = (0);
var inst_31433 = (0);
var state_31499__$1 = (function (){var statearr_31581 = state_31499;
(statearr_31581[(10)] = inst_31433);

(statearr_31581[(11)] = inst_31431);

(statearr_31581[(19)] = inst_31432);

(statearr_31581[(20)] = inst_31430);

(statearr_31581[(25)] = inst_31471);

return statearr_31581;
})();
var statearr_31582_34275 = state_31499__$1;
(statearr_31582_34275[(2)] = null);

(statearr_31582_34275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (43))){
var state_31499__$1 = state_31499;
var statearr_31584_34276 = state_31499__$1;
(statearr_31584_34276[(2)] = null);

(statearr_31584_34276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (29))){
var inst_31481 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31585_34277 = state_31499__$1;
(statearr_31585_34277[(2)] = inst_31481);

(statearr_31585_34277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (44))){
var inst_31490 = (state_31499[(2)]);
var state_31499__$1 = (function (){var statearr_31587 = state_31499;
(statearr_31587[(26)] = inst_31490);

return statearr_31587;
})();
var statearr_31588_34284 = state_31499__$1;
(statearr_31588_34284[(2)] = null);

(statearr_31588_34284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (6))){
var inst_31421 = (state_31499[(27)]);
var inst_31420 = cljs.core.deref(cs);
var inst_31421__$1 = cljs.core.keys(inst_31420);
var inst_31422 = cljs.core.count(inst_31421__$1);
var inst_31423 = cljs.core.reset_BANG_(dctr,inst_31422);
var inst_31429 = cljs.core.seq(inst_31421__$1);
var inst_31430 = inst_31429;
var inst_31431 = null;
var inst_31432 = (0);
var inst_31433 = (0);
var state_31499__$1 = (function (){var statearr_31595 = state_31499;
(statearr_31595[(28)] = inst_31423);

(statearr_31595[(10)] = inst_31433);

(statearr_31595[(27)] = inst_31421__$1);

(statearr_31595[(11)] = inst_31431);

(statearr_31595[(19)] = inst_31432);

(statearr_31595[(20)] = inst_31430);

return statearr_31595;
})();
var statearr_31602_34285 = state_31499__$1;
(statearr_31602_34285[(2)] = null);

(statearr_31602_34285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (28))){
var inst_31430 = (state_31499[(20)]);
var inst_31452 = (state_31499[(23)]);
var inst_31452__$1 = cljs.core.seq(inst_31430);
var state_31499__$1 = (function (){var statearr_31603 = state_31499;
(statearr_31603[(23)] = inst_31452__$1);

return statearr_31603;
})();
if(inst_31452__$1){
var statearr_31604_34286 = state_31499__$1;
(statearr_31604_34286[(1)] = (33));

} else {
var statearr_31605_34287 = state_31499__$1;
(statearr_31605_34287[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (25))){
var inst_31433 = (state_31499[(10)]);
var inst_31432 = (state_31499[(19)]);
var inst_31438 = (inst_31433 < inst_31432);
var inst_31439 = inst_31438;
var state_31499__$1 = state_31499;
if(cljs.core.truth_(inst_31439)){
var statearr_31606_34291 = state_31499__$1;
(statearr_31606_34291[(1)] = (27));

} else {
var statearr_31607_34293 = state_31499__$1;
(statearr_31607_34293[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (34))){
var state_31499__$1 = state_31499;
var statearr_31612_34295 = state_31499__$1;
(statearr_31612_34295[(2)] = null);

(statearr_31612_34295[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (17))){
var state_31499__$1 = state_31499;
var statearr_31614_34298 = state_31499__$1;
(statearr_31614_34298[(2)] = null);

(statearr_31614_34298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (3))){
var inst_31495 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31499__$1,inst_31495);
} else {
if((state_val_31500 === (12))){
var inst_31416 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31616_34303 = state_31499__$1;
(statearr_31616_34303[(2)] = inst_31416);

(statearr_31616_34303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (2))){
var state_31499__$1 = state_31499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31499__$1,(4),ch);
} else {
if((state_val_31500 === (23))){
var state_31499__$1 = state_31499;
var statearr_31618_34304 = state_31499__$1;
(statearr_31618_34304[(2)] = null);

(statearr_31618_34304[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (35))){
var inst_31479 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31620_34305 = state_31499__$1;
(statearr_31620_34305[(2)] = inst_31479);

(statearr_31620_34305[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (19))){
var inst_31386 = (state_31499[(7)]);
var inst_31391 = cljs.core.chunk_first(inst_31386);
var inst_31392 = cljs.core.chunk_rest(inst_31386);
var inst_31393 = cljs.core.count(inst_31391);
var inst_31363 = inst_31392;
var inst_31364 = inst_31391;
var inst_31365 = inst_31393;
var inst_31366 = (0);
var state_31499__$1 = (function (){var statearr_31621 = state_31499;
(statearr_31621[(13)] = inst_31365);

(statearr_31621[(14)] = inst_31364);

(statearr_31621[(15)] = inst_31366);

(statearr_31621[(17)] = inst_31363);

return statearr_31621;
})();
var statearr_31622_34306 = state_31499__$1;
(statearr_31622_34306[(2)] = null);

(statearr_31622_34306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (11))){
var inst_31386 = (state_31499[(7)]);
var inst_31363 = (state_31499[(17)]);
var inst_31386__$1 = cljs.core.seq(inst_31363);
var state_31499__$1 = (function (){var statearr_31623 = state_31499;
(statearr_31623[(7)] = inst_31386__$1);

return statearr_31623;
})();
if(inst_31386__$1){
var statearr_31624_34307 = state_31499__$1;
(statearr_31624_34307[(1)] = (16));

} else {
var statearr_31626_34308 = state_31499__$1;
(statearr_31626_34308[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (9))){
var inst_31418 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31627_34315 = state_31499__$1;
(statearr_31627_34315[(2)] = inst_31418);

(statearr_31627_34315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (5))){
var inst_31361 = cljs.core.deref(cs);
var inst_31362 = cljs.core.seq(inst_31361);
var inst_31363 = inst_31362;
var inst_31364 = null;
var inst_31365 = (0);
var inst_31366 = (0);
var state_31499__$1 = (function (){var statearr_31630 = state_31499;
(statearr_31630[(13)] = inst_31365);

(statearr_31630[(14)] = inst_31364);

(statearr_31630[(15)] = inst_31366);

(statearr_31630[(17)] = inst_31363);

return statearr_31630;
})();
var statearr_31631_34316 = state_31499__$1;
(statearr_31631_34316[(2)] = null);

(statearr_31631_34316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (14))){
var state_31499__$1 = state_31499;
var statearr_31632_34319 = state_31499__$1;
(statearr_31632_34319[(2)] = null);

(statearr_31632_34319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (45))){
var inst_31487 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31633_34321 = state_31499__$1;
(statearr_31633_34321[(2)] = inst_31487);

(statearr_31633_34321[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (26))){
var inst_31421 = (state_31499[(27)]);
var inst_31483 = (state_31499[(2)]);
var inst_31484 = cljs.core.seq(inst_31421);
var state_31499__$1 = (function (){var statearr_31636 = state_31499;
(statearr_31636[(29)] = inst_31483);

return statearr_31636;
})();
if(inst_31484){
var statearr_31637_34322 = state_31499__$1;
(statearr_31637_34322[(1)] = (42));

} else {
var statearr_31639_34323 = state_31499__$1;
(statearr_31639_34323[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (16))){
var inst_31386 = (state_31499[(7)]);
var inst_31389 = cljs.core.chunked_seq_QMARK_(inst_31386);
var state_31499__$1 = state_31499;
if(inst_31389){
var statearr_31640_34324 = state_31499__$1;
(statearr_31640_34324[(1)] = (19));

} else {
var statearr_31641_34325 = state_31499__$1;
(statearr_31641_34325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (38))){
var inst_31476 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31645_34326 = state_31499__$1;
(statearr_31645_34326[(2)] = inst_31476);

(statearr_31645_34326[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (30))){
var state_31499__$1 = state_31499;
var statearr_31646_34327 = state_31499__$1;
(statearr_31646_34327[(2)] = null);

(statearr_31646_34327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (10))){
var inst_31364 = (state_31499[(14)]);
var inst_31366 = (state_31499[(15)]);
var inst_31374 = cljs.core._nth(inst_31364,inst_31366);
var inst_31375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31374,(0),null);
var inst_31376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31374,(1),null);
var state_31499__$1 = (function (){var statearr_31650 = state_31499;
(statearr_31650[(24)] = inst_31375);

return statearr_31650;
})();
if(cljs.core.truth_(inst_31376)){
var statearr_31652_34331 = state_31499__$1;
(statearr_31652_34331[(1)] = (13));

} else {
var statearr_31653_34332 = state_31499__$1;
(statearr_31653_34332[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (18))){
var inst_31414 = (state_31499[(2)]);
var state_31499__$1 = state_31499;
var statearr_31657_34334 = state_31499__$1;
(statearr_31657_34334[(2)] = inst_31414);

(statearr_31657_34334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (42))){
var state_31499__$1 = state_31499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31499__$1,(45),dchan);
} else {
if((state_val_31500 === (37))){
var inst_31352 = (state_31499[(9)]);
var inst_31463 = (state_31499[(22)]);
var inst_31452 = (state_31499[(23)]);
var inst_31463__$1 = cljs.core.first(inst_31452);
var inst_31466 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31463__$1,inst_31352,done);
var state_31499__$1 = (function (){var statearr_31658 = state_31499;
(statearr_31658[(22)] = inst_31463__$1);

return statearr_31658;
})();
if(cljs.core.truth_(inst_31466)){
var statearr_31659_34342 = state_31499__$1;
(statearr_31659_34342[(1)] = (39));

} else {
var statearr_31661_34343 = state_31499__$1;
(statearr_31661_34343[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31500 === (8))){
var inst_31365 = (state_31499[(13)]);
var inst_31366 = (state_31499[(15)]);
var inst_31368 = (inst_31366 < inst_31365);
var inst_31369 = inst_31368;
var state_31499__$1 = state_31499;
if(cljs.core.truth_(inst_31369)){
var statearr_31664_34344 = state_31499__$1;
(statearr_31664_34344[(1)] = (10));

} else {
var statearr_31665_34345 = state_31499__$1;
(statearr_31665_34345[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28827__auto__ = null;
var cljs$core$async$mult_$_state_machine__28827__auto____0 = (function (){
var statearr_31667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31667[(0)] = cljs$core$async$mult_$_state_machine__28827__auto__);

(statearr_31667[(1)] = (1));

return statearr_31667;
});
var cljs$core$async$mult_$_state_machine__28827__auto____1 = (function (state_31499){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31499);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31668){var ex__28830__auto__ = e31668;
var statearr_31669_34346 = state_31499;
(statearr_31669_34346[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_31499[(4)]))){
var statearr_31671_34347 = state_31499;
(statearr_31671_34347[(1)] = cljs.core.first((state_31499[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34350 = state_31499;
state_31499 = G__34350;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28827__auto__ = function(state_31499){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28827__auto____1.call(this,state_31499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28827__auto____0;
cljs$core$async$mult_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28827__auto____1;
return cljs$core$async$mult_$_state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_31672 = f__29781__auto__();
(statearr_31672[(6)] = c__29780__auto___34220);

return statearr_31672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31677 = arguments.length;
switch (G__31677) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34357 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34357(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34358 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34358(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34362 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34362(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34363 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34363(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34367 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34367(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34372 = arguments.length;
var i__4865__auto___34373 = (0);
while(true){
if((i__4865__auto___34373 < len__4864__auto___34372)){
args__4870__auto__.push((arguments[i__4865__auto___34373]));

var G__34375 = (i__4865__auto___34373 + (1));
i__4865__auto___34373 = G__34375;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31701){
var map__31705 = p__31701;
var map__31705__$1 = cljs.core.__destructure_map(map__31705);
var opts = map__31705__$1;
var statearr_31706_34379 = state;
(statearr_31706_34379[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31709_34384 = state;
(statearr_31709_34384[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31710_34385 = state;
(statearr_31710_34385[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31694){
var G__31695 = cljs.core.first(seq31694);
var seq31694__$1 = cljs.core.next(seq31694);
var G__31696 = cljs.core.first(seq31694__$1);
var seq31694__$2 = cljs.core.next(seq31694__$1);
var G__31697 = cljs.core.first(seq31694__$2);
var seq31694__$3 = cljs.core.next(seq31694__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31695,G__31696,G__31697,seq31694__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31731 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31731 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31732){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31732 = meta31732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31733,meta31732__$1){
var self__ = this;
var _31733__$1 = this;
return (new cljs.core.async.t_cljs$core$async31731(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31732__$1));
}));

(cljs.core.async.t_cljs$core$async31731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31733){
var self__ = this;
var _31733__$1 = this;
return self__.meta31732;
}));

(cljs.core.async.t_cljs$core$async31731.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31731.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31731.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31731.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31731.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31731.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31731.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31731.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31732","meta31732",-2011319315,null)], null);
}));

(cljs.core.async.t_cljs$core$async31731.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31731");

(cljs.core.async.t_cljs$core$async31731.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31731");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31731.
 */
cljs.core.async.__GT_t_cljs$core$async31731 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31731(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31732){
return (new cljs.core.async.t_cljs$core$async31731(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31732));
});

}

return (new cljs.core.async.t_cljs$core$async31731(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29780__auto___34397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_31853){
var state_val_31856 = (state_31853[(1)]);
if((state_val_31856 === (7))){
var inst_31813 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
if(cljs.core.truth_(inst_31813)){
var statearr_31864_34398 = state_31853__$1;
(statearr_31864_34398[(1)] = (8));

} else {
var statearr_31867_34399 = state_31853__$1;
(statearr_31867_34399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (20))){
var inst_31805 = (state_31853[(7)]);
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31853__$1,(23),out,inst_31805);
} else {
if((state_val_31856 === (1))){
var inst_31786 = calc_state();
var inst_31787 = cljs.core.__destructure_map(inst_31786);
var inst_31788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31787,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31787,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31787,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31793 = inst_31786;
var state_31853__$1 = (function (){var statearr_31871 = state_31853;
(statearr_31871[(8)] = inst_31789);

(statearr_31871[(9)] = inst_31788);

(statearr_31871[(10)] = inst_31792);

(statearr_31871[(11)] = inst_31793);

return statearr_31871;
})();
var statearr_31872_34400 = state_31853__$1;
(statearr_31872_34400[(2)] = null);

(statearr_31872_34400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (24))){
var inst_31796 = (state_31853[(12)]);
var inst_31793 = inst_31796;
var state_31853__$1 = (function (){var statearr_31874 = state_31853;
(statearr_31874[(11)] = inst_31793);

return statearr_31874;
})();
var statearr_31875_34401 = state_31853__$1;
(statearr_31875_34401[(2)] = null);

(statearr_31875_34401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (4))){
var inst_31807 = (state_31853[(13)]);
var inst_31805 = (state_31853[(7)]);
var inst_31804 = (state_31853[(2)]);
var inst_31805__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31804,(0),null);
var inst_31806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31804,(1),null);
var inst_31807__$1 = (inst_31805__$1 == null);
var state_31853__$1 = (function (){var statearr_31882 = state_31853;
(statearr_31882[(13)] = inst_31807__$1);

(statearr_31882[(7)] = inst_31805__$1);

(statearr_31882[(14)] = inst_31806);

return statearr_31882;
})();
if(cljs.core.truth_(inst_31807__$1)){
var statearr_31885_34402 = state_31853__$1;
(statearr_31885_34402[(1)] = (5));

} else {
var statearr_31888_34403 = state_31853__$1;
(statearr_31888_34403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (15))){
var inst_31797 = (state_31853[(15)]);
var inst_31827 = (state_31853[(16)]);
var inst_31827__$1 = cljs.core.empty_QMARK_(inst_31797);
var state_31853__$1 = (function (){var statearr_31889 = state_31853;
(statearr_31889[(16)] = inst_31827__$1);

return statearr_31889;
})();
if(inst_31827__$1){
var statearr_31890_34404 = state_31853__$1;
(statearr_31890_34404[(1)] = (17));

} else {
var statearr_31891_34405 = state_31853__$1;
(statearr_31891_34405[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (21))){
var inst_31796 = (state_31853[(12)]);
var inst_31793 = inst_31796;
var state_31853__$1 = (function (){var statearr_31895 = state_31853;
(statearr_31895[(11)] = inst_31793);

return statearr_31895;
})();
var statearr_31896_34407 = state_31853__$1;
(statearr_31896_34407[(2)] = null);

(statearr_31896_34407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (13))){
var inst_31820 = (state_31853[(2)]);
var inst_31821 = calc_state();
var inst_31793 = inst_31821;
var state_31853__$1 = (function (){var statearr_31897 = state_31853;
(statearr_31897[(17)] = inst_31820);

(statearr_31897[(11)] = inst_31793);

return statearr_31897;
})();
var statearr_31898_34409 = state_31853__$1;
(statearr_31898_34409[(2)] = null);

(statearr_31898_34409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (22))){
var inst_31847 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31899_34410 = state_31853__$1;
(statearr_31899_34410[(2)] = inst_31847);

(statearr_31899_34410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (6))){
var inst_31806 = (state_31853[(14)]);
var inst_31811 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31806,change);
var state_31853__$1 = state_31853;
var statearr_31900_34411 = state_31853__$1;
(statearr_31900_34411[(2)] = inst_31811);

(statearr_31900_34411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (25))){
var state_31853__$1 = state_31853;
var statearr_31901_34412 = state_31853__$1;
(statearr_31901_34412[(2)] = null);

(statearr_31901_34412[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (17))){
var inst_31806 = (state_31853[(14)]);
var inst_31798 = (state_31853[(18)]);
var inst_31829 = (inst_31798.cljs$core$IFn$_invoke$arity$1 ? inst_31798.cljs$core$IFn$_invoke$arity$1(inst_31806) : inst_31798.call(null,inst_31806));
var inst_31830 = cljs.core.not(inst_31829);
var state_31853__$1 = state_31853;
var statearr_31910_34413 = state_31853__$1;
(statearr_31910_34413[(2)] = inst_31830);

(statearr_31910_34413[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (3))){
var inst_31851 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31853__$1,inst_31851);
} else {
if((state_val_31856 === (12))){
var state_31853__$1 = state_31853;
var statearr_31911_34414 = state_31853__$1;
(statearr_31911_34414[(2)] = null);

(statearr_31911_34414[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (2))){
var inst_31796 = (state_31853[(12)]);
var inst_31793 = (state_31853[(11)]);
var inst_31796__$1 = cljs.core.__destructure_map(inst_31793);
var inst_31797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31796__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31796__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31796__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31853__$1 = (function (){var statearr_31916 = state_31853;
(statearr_31916[(15)] = inst_31797);

(statearr_31916[(18)] = inst_31798);

(statearr_31916[(12)] = inst_31796__$1);

return statearr_31916;
})();
return cljs.core.async.ioc_alts_BANG_(state_31853__$1,(4),inst_31799);
} else {
if((state_val_31856 === (23))){
var inst_31838 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
if(cljs.core.truth_(inst_31838)){
var statearr_31917_34415 = state_31853__$1;
(statearr_31917_34415[(1)] = (24));

} else {
var statearr_31918_34416 = state_31853__$1;
(statearr_31918_34416[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (19))){
var inst_31833 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31919_34417 = state_31853__$1;
(statearr_31919_34417[(2)] = inst_31833);

(statearr_31919_34417[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (11))){
var inst_31806 = (state_31853[(14)]);
var inst_31817 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31806);
var state_31853__$1 = state_31853;
var statearr_31920_34418 = state_31853__$1;
(statearr_31920_34418[(2)] = inst_31817);

(statearr_31920_34418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (9))){
var inst_31797 = (state_31853[(15)]);
var inst_31824 = (state_31853[(19)]);
var inst_31806 = (state_31853[(14)]);
var inst_31824__$1 = (inst_31797.cljs$core$IFn$_invoke$arity$1 ? inst_31797.cljs$core$IFn$_invoke$arity$1(inst_31806) : inst_31797.call(null,inst_31806));
var state_31853__$1 = (function (){var statearr_31924 = state_31853;
(statearr_31924[(19)] = inst_31824__$1);

return statearr_31924;
})();
if(cljs.core.truth_(inst_31824__$1)){
var statearr_31925_34419 = state_31853__$1;
(statearr_31925_34419[(1)] = (14));

} else {
var statearr_31930_34420 = state_31853__$1;
(statearr_31930_34420[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (5))){
var inst_31807 = (state_31853[(13)]);
var state_31853__$1 = state_31853;
var statearr_31935_34421 = state_31853__$1;
(statearr_31935_34421[(2)] = inst_31807);

(statearr_31935_34421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (14))){
var inst_31824 = (state_31853[(19)]);
var state_31853__$1 = state_31853;
var statearr_31936_34422 = state_31853__$1;
(statearr_31936_34422[(2)] = inst_31824);

(statearr_31936_34422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (26))){
var inst_31843 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31937_34423 = state_31853__$1;
(statearr_31937_34423[(2)] = inst_31843);

(statearr_31937_34423[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (16))){
var inst_31835 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
if(cljs.core.truth_(inst_31835)){
var statearr_31938_34424 = state_31853__$1;
(statearr_31938_34424[(1)] = (20));

} else {
var statearr_31939_34425 = state_31853__$1;
(statearr_31939_34425[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (10))){
var inst_31849 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31942_34426 = state_31853__$1;
(statearr_31942_34426[(2)] = inst_31849);

(statearr_31942_34426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (18))){
var inst_31827 = (state_31853[(16)]);
var state_31853__$1 = state_31853;
var statearr_31949_34427 = state_31853__$1;
(statearr_31949_34427[(2)] = inst_31827);

(statearr_31949_34427[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (8))){
var inst_31805 = (state_31853[(7)]);
var inst_31815 = (inst_31805 == null);
var state_31853__$1 = state_31853;
if(cljs.core.truth_(inst_31815)){
var statearr_31953_34428 = state_31853__$1;
(statearr_31953_34428[(1)] = (11));

} else {
var statearr_31954_34429 = state_31853__$1;
(statearr_31954_34429[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28827__auto__ = null;
var cljs$core$async$mix_$_state_machine__28827__auto____0 = (function (){
var statearr_31961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31961[(0)] = cljs$core$async$mix_$_state_machine__28827__auto__);

(statearr_31961[(1)] = (1));

return statearr_31961;
});
var cljs$core$async$mix_$_state_machine__28827__auto____1 = (function (state_31853){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31853);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31962){var ex__28830__auto__ = e31962;
var statearr_31963_34430 = state_31853;
(statearr_31963_34430[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_31853[(4)]))){
var statearr_31964_34431 = state_31853;
(statearr_31964_34431[(1)] = cljs.core.first((state_31853[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34433 = state_31853;
state_31853 = G__34433;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28827__auto__ = function(state_31853){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28827__auto____1.call(this,state_31853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28827__auto____0;
cljs$core$async$mix_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28827__auto____1;
return cljs$core$async$mix_$_state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_31967 = f__29781__auto__();
(statearr_31967[(6)] = c__29780__auto___34397);

return statearr_31967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34434 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34434(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34439 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34439(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34440 = (function() {
var G__34441 = null;
var G__34441__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34441__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34441 = function(p,v){
switch(arguments.length){
case 1:
return G__34441__1.call(this,p);
case 2:
return G__34441__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34441.cljs$core$IFn$_invoke$arity$1 = G__34441__1;
G__34441.cljs$core$IFn$_invoke$arity$2 = G__34441__2;
return G__34441;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31997 = arguments.length;
switch (G__31997) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34440(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34440(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32012 = arguments.length;
switch (G__32012) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32007_SHARP_){
if(cljs.core.truth_((p1__32007_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32007_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32007_SHARP_.call(null,topic)))){
return p1__32007_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32007_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32014 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32015){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32015 = meta32015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32016,meta32015__$1){
var self__ = this;
var _32016__$1 = this;
return (new cljs.core.async.t_cljs$core$async32014(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32015__$1));
}));

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32016){
var self__ = this;
var _32016__$1 = this;
return self__.meta32015;
}));

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32015","meta32015",-1780385431,null)], null);
}));

(cljs.core.async.t_cljs$core$async32014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32014");

(cljs.core.async.t_cljs$core$async32014.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32014.
 */
cljs.core.async.__GT_t_cljs$core$async32014 = (function cljs$core$async$__GT_t_cljs$core$async32014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32015){
return (new cljs.core.async.t_cljs$core$async32014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32015));
});

}

return (new cljs.core.async.t_cljs$core$async32014(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29780__auto___34471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_32125){
var state_val_32126 = (state_32125[(1)]);
if((state_val_32126 === (7))){
var inst_32121 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32136_34473 = state_32125__$1;
(statearr_32136_34473[(2)] = inst_32121);

(statearr_32136_34473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (20))){
var state_32125__$1 = state_32125;
var statearr_32137_34477 = state_32125__$1;
(statearr_32137_34477[(2)] = null);

(statearr_32137_34477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (1))){
var state_32125__$1 = state_32125;
var statearr_32141_34478 = state_32125__$1;
(statearr_32141_34478[(2)] = null);

(statearr_32141_34478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (24))){
var inst_32101 = (state_32125[(7)]);
var inst_32113 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32101);
var state_32125__$1 = state_32125;
var statearr_32142_34479 = state_32125__$1;
(statearr_32142_34479[(2)] = inst_32113);

(statearr_32142_34479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (4))){
var inst_32041 = (state_32125[(8)]);
var inst_32041__$1 = (state_32125[(2)]);
var inst_32042 = (inst_32041__$1 == null);
var state_32125__$1 = (function (){var statearr_32143 = state_32125;
(statearr_32143[(8)] = inst_32041__$1);

return statearr_32143;
})();
if(cljs.core.truth_(inst_32042)){
var statearr_32144_34480 = state_32125__$1;
(statearr_32144_34480[(1)] = (5));

} else {
var statearr_32148_34481 = state_32125__$1;
(statearr_32148_34481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (15))){
var inst_32095 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32155_34485 = state_32125__$1;
(statearr_32155_34485[(2)] = inst_32095);

(statearr_32155_34485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (21))){
var inst_32118 = (state_32125[(2)]);
var state_32125__$1 = (function (){var statearr_32156 = state_32125;
(statearr_32156[(9)] = inst_32118);

return statearr_32156;
})();
var statearr_32161_34486 = state_32125__$1;
(statearr_32161_34486[(2)] = null);

(statearr_32161_34486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (13))){
var inst_32068 = (state_32125[(10)]);
var inst_32070 = cljs.core.chunked_seq_QMARK_(inst_32068);
var state_32125__$1 = state_32125;
if(inst_32070){
var statearr_32165_34488 = state_32125__$1;
(statearr_32165_34488[(1)] = (16));

} else {
var statearr_32166_34490 = state_32125__$1;
(statearr_32166_34490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (22))){
var inst_32110 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
if(cljs.core.truth_(inst_32110)){
var statearr_32170_34492 = state_32125__$1;
(statearr_32170_34492[(1)] = (23));

} else {
var statearr_32171_34493 = state_32125__$1;
(statearr_32171_34493[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (6))){
var inst_32106 = (state_32125[(11)]);
var inst_32101 = (state_32125[(7)]);
var inst_32041 = (state_32125[(8)]);
var inst_32101__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32041) : topic_fn.call(null,inst_32041));
var inst_32105 = cljs.core.deref(mults);
var inst_32106__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32105,inst_32101__$1);
var state_32125__$1 = (function (){var statearr_32176 = state_32125;
(statearr_32176[(11)] = inst_32106__$1);

(statearr_32176[(7)] = inst_32101__$1);

return statearr_32176;
})();
if(cljs.core.truth_(inst_32106__$1)){
var statearr_32179_34495 = state_32125__$1;
(statearr_32179_34495[(1)] = (19));

} else {
var statearr_32180_34496 = state_32125__$1;
(statearr_32180_34496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (25))){
var inst_32115 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32181_34498 = state_32125__$1;
(statearr_32181_34498[(2)] = inst_32115);

(statearr_32181_34498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (17))){
var inst_32068 = (state_32125[(10)]);
var inst_32086 = cljs.core.first(inst_32068);
var inst_32087 = cljs.core.async.muxch_STAR_(inst_32086);
var inst_32088 = cljs.core.async.close_BANG_(inst_32087);
var inst_32089 = cljs.core.next(inst_32068);
var inst_32051 = inst_32089;
var inst_32052 = null;
var inst_32053 = (0);
var inst_32054 = (0);
var state_32125__$1 = (function (){var statearr_32184 = state_32125;
(statearr_32184[(12)] = inst_32052);

(statearr_32184[(13)] = inst_32054);

(statearr_32184[(14)] = inst_32088);

(statearr_32184[(15)] = inst_32051);

(statearr_32184[(16)] = inst_32053);

return statearr_32184;
})();
var statearr_32185_34502 = state_32125__$1;
(statearr_32185_34502[(2)] = null);

(statearr_32185_34502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (3))){
var inst_32123 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32125__$1,inst_32123);
} else {
if((state_val_32126 === (12))){
var inst_32097 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32195_34505 = state_32125__$1;
(statearr_32195_34505[(2)] = inst_32097);

(statearr_32195_34505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (2))){
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32125__$1,(4),ch);
} else {
if((state_val_32126 === (23))){
var state_32125__$1 = state_32125;
var statearr_32196_34508 = state_32125__$1;
(statearr_32196_34508[(2)] = null);

(statearr_32196_34508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (19))){
var inst_32106 = (state_32125[(11)]);
var inst_32041 = (state_32125[(8)]);
var inst_32108 = cljs.core.async.muxch_STAR_(inst_32106);
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32125__$1,(22),inst_32108,inst_32041);
} else {
if((state_val_32126 === (11))){
var inst_32068 = (state_32125[(10)]);
var inst_32051 = (state_32125[(15)]);
var inst_32068__$1 = cljs.core.seq(inst_32051);
var state_32125__$1 = (function (){var statearr_32197 = state_32125;
(statearr_32197[(10)] = inst_32068__$1);

return statearr_32197;
})();
if(inst_32068__$1){
var statearr_32198_34509 = state_32125__$1;
(statearr_32198_34509[(1)] = (13));

} else {
var statearr_32199_34510 = state_32125__$1;
(statearr_32199_34510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (9))){
var inst_32099 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32200_34511 = state_32125__$1;
(statearr_32200_34511[(2)] = inst_32099);

(statearr_32200_34511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (5))){
var inst_32048 = cljs.core.deref(mults);
var inst_32049 = cljs.core.vals(inst_32048);
var inst_32050 = cljs.core.seq(inst_32049);
var inst_32051 = inst_32050;
var inst_32052 = null;
var inst_32053 = (0);
var inst_32054 = (0);
var state_32125__$1 = (function (){var statearr_32201 = state_32125;
(statearr_32201[(12)] = inst_32052);

(statearr_32201[(13)] = inst_32054);

(statearr_32201[(15)] = inst_32051);

(statearr_32201[(16)] = inst_32053);

return statearr_32201;
})();
var statearr_32202_34513 = state_32125__$1;
(statearr_32202_34513[(2)] = null);

(statearr_32202_34513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (14))){
var state_32125__$1 = state_32125;
var statearr_32206_34514 = state_32125__$1;
(statearr_32206_34514[(2)] = null);

(statearr_32206_34514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (16))){
var inst_32068 = (state_32125[(10)]);
var inst_32077 = cljs.core.chunk_first(inst_32068);
var inst_32079 = cljs.core.chunk_rest(inst_32068);
var inst_32080 = cljs.core.count(inst_32077);
var inst_32051 = inst_32079;
var inst_32052 = inst_32077;
var inst_32053 = inst_32080;
var inst_32054 = (0);
var state_32125__$1 = (function (){var statearr_32207 = state_32125;
(statearr_32207[(12)] = inst_32052);

(statearr_32207[(13)] = inst_32054);

(statearr_32207[(15)] = inst_32051);

(statearr_32207[(16)] = inst_32053);

return statearr_32207;
})();
var statearr_32208_34515 = state_32125__$1;
(statearr_32208_34515[(2)] = null);

(statearr_32208_34515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (10))){
var inst_32052 = (state_32125[(12)]);
var inst_32054 = (state_32125[(13)]);
var inst_32051 = (state_32125[(15)]);
var inst_32053 = (state_32125[(16)]);
var inst_32059 = cljs.core._nth(inst_32052,inst_32054);
var inst_32060 = cljs.core.async.muxch_STAR_(inst_32059);
var inst_32061 = cljs.core.async.close_BANG_(inst_32060);
var inst_32062 = (inst_32054 + (1));
var tmp32203 = inst_32052;
var tmp32204 = inst_32051;
var tmp32205 = inst_32053;
var inst_32051__$1 = tmp32204;
var inst_32052__$1 = tmp32203;
var inst_32053__$1 = tmp32205;
var inst_32054__$1 = inst_32062;
var state_32125__$1 = (function (){var statearr_32209 = state_32125;
(statearr_32209[(12)] = inst_32052__$1);

(statearr_32209[(13)] = inst_32054__$1);

(statearr_32209[(17)] = inst_32061);

(statearr_32209[(15)] = inst_32051__$1);

(statearr_32209[(16)] = inst_32053__$1);

return statearr_32209;
})();
var statearr_32210_34517 = state_32125__$1;
(statearr_32210_34517[(2)] = null);

(statearr_32210_34517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (18))){
var inst_32092 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32211_34518 = state_32125__$1;
(statearr_32211_34518[(2)] = inst_32092);

(statearr_32211_34518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (8))){
var inst_32054 = (state_32125[(13)]);
var inst_32053 = (state_32125[(16)]);
var inst_32056 = (inst_32054 < inst_32053);
var inst_32057 = inst_32056;
var state_32125__$1 = state_32125;
if(cljs.core.truth_(inst_32057)){
var statearr_32215_34520 = state_32125__$1;
(statearr_32215_34520[(1)] = (10));

} else {
var statearr_32216_34521 = state_32125__$1;
(statearr_32216_34521[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32217[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32217[(1)] = (1));

return statearr_32217;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32125){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32125);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32218){var ex__28830__auto__ = e32218;
var statearr_32219_34524 = state_32125;
(statearr_32219_34524[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_32125[(4)]))){
var statearr_32220_34528 = state_32125;
(statearr_32220_34528[(1)] = cljs.core.first((state_32125[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34530 = state_32125;
state_32125 = G__34530;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_32221 = f__29781__auto__();
(statearr_32221[(6)] = c__29780__auto___34471);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32226 = arguments.length;
switch (G__32226) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32231 = arguments.length;
switch (G__32231) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32241 = arguments.length;
switch (G__32241) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__29780__auto___34549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_32310){
var state_val_32311 = (state_32310[(1)]);
if((state_val_32311 === (7))){
var state_32310__$1 = state_32310;
var statearr_32320_34550 = state_32310__$1;
(statearr_32320_34550[(2)] = null);

(statearr_32320_34550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (1))){
var state_32310__$1 = state_32310;
var statearr_32321_34552 = state_32310__$1;
(statearr_32321_34552[(2)] = null);

(statearr_32321_34552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (4))){
var inst_32258 = (state_32310[(7)]);
var inst_32259 = (state_32310[(8)]);
var inst_32261 = (inst_32259 < inst_32258);
var state_32310__$1 = state_32310;
if(cljs.core.truth_(inst_32261)){
var statearr_32325_34553 = state_32310__$1;
(statearr_32325_34553[(1)] = (6));

} else {
var statearr_32326_34554 = state_32310__$1;
(statearr_32326_34554[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (15))){
var inst_32295 = (state_32310[(9)]);
var inst_32300 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32295);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32310__$1,(17),out,inst_32300);
} else {
if((state_val_32311 === (13))){
var inst_32295 = (state_32310[(9)]);
var inst_32295__$1 = (state_32310[(2)]);
var inst_32296 = cljs.core.some(cljs.core.nil_QMARK_,inst_32295__$1);
var state_32310__$1 = (function (){var statearr_32327 = state_32310;
(statearr_32327[(9)] = inst_32295__$1);

return statearr_32327;
})();
if(cljs.core.truth_(inst_32296)){
var statearr_32328_34556 = state_32310__$1;
(statearr_32328_34556[(1)] = (14));

} else {
var statearr_32329_34557 = state_32310__$1;
(statearr_32329_34557[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (6))){
var state_32310__$1 = state_32310;
var statearr_32330_34561 = state_32310__$1;
(statearr_32330_34561[(2)] = null);

(statearr_32330_34561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (17))){
var inst_32302 = (state_32310[(2)]);
var state_32310__$1 = (function (){var statearr_32348 = state_32310;
(statearr_32348[(10)] = inst_32302);

return statearr_32348;
})();
var statearr_32349_34562 = state_32310__$1;
(statearr_32349_34562[(2)] = null);

(statearr_32349_34562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (3))){
var inst_32307 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32310__$1,inst_32307);
} else {
if((state_val_32311 === (12))){
var _ = (function (){var statearr_32354 = state_32310;
(statearr_32354[(4)] = cljs.core.rest((state_32310[(4)])));

return statearr_32354;
})();
var state_32310__$1 = state_32310;
var ex32344 = (state_32310__$1[(2)]);
var statearr_32355_34564 = state_32310__$1;
(statearr_32355_34564[(5)] = ex32344);


if((ex32344 instanceof Object)){
var statearr_32361_34565 = state_32310__$1;
(statearr_32361_34565[(1)] = (11));

(statearr_32361_34565[(5)] = null);

} else {
throw ex32344;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (2))){
var inst_32257 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32258 = cnt;
var inst_32259 = (0);
var state_32310__$1 = (function (){var statearr_32365 = state_32310;
(statearr_32365[(7)] = inst_32258);

(statearr_32365[(8)] = inst_32259);

(statearr_32365[(11)] = inst_32257);

return statearr_32365;
})();
var statearr_32368_34566 = state_32310__$1;
(statearr_32368_34566[(2)] = null);

(statearr_32368_34566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (11))){
var inst_32273 = (state_32310[(2)]);
var inst_32274 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32310__$1 = (function (){var statearr_32370 = state_32310;
(statearr_32370[(12)] = inst_32273);

return statearr_32370;
})();
var statearr_32371_34567 = state_32310__$1;
(statearr_32371_34567[(2)] = inst_32274);

(statearr_32371_34567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (9))){
var inst_32259 = (state_32310[(8)]);
var _ = (function (){var statearr_32373 = state_32310;
(statearr_32373[(4)] = cljs.core.cons((12),(state_32310[(4)])));

return statearr_32373;
})();
var inst_32280 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32259) : chs__$1.call(null,inst_32259));
var inst_32281 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32259) : done.call(null,inst_32259));
var inst_32282 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32280,inst_32281);
var ___$1 = (function (){var statearr_32374 = state_32310;
(statearr_32374[(4)] = cljs.core.rest((state_32310[(4)])));

return statearr_32374;
})();
var state_32310__$1 = state_32310;
var statearr_32377_34568 = state_32310__$1;
(statearr_32377_34568[(2)] = inst_32282);

(statearr_32377_34568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (5))){
var inst_32292 = (state_32310[(2)]);
var state_32310__$1 = (function (){var statearr_32378 = state_32310;
(statearr_32378[(13)] = inst_32292);

return statearr_32378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32310__$1,(13),dchan);
} else {
if((state_val_32311 === (14))){
var inst_32298 = cljs.core.async.close_BANG_(out);
var state_32310__$1 = state_32310;
var statearr_32381_34569 = state_32310__$1;
(statearr_32381_34569[(2)] = inst_32298);

(statearr_32381_34569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (16))){
var inst_32305 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32382_34570 = state_32310__$1;
(statearr_32382_34570[(2)] = inst_32305);

(statearr_32382_34570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (10))){
var inst_32259 = (state_32310[(8)]);
var inst_32285 = (state_32310[(2)]);
var inst_32286 = (inst_32259 + (1));
var inst_32259__$1 = inst_32286;
var state_32310__$1 = (function (){var statearr_32394 = state_32310;
(statearr_32394[(14)] = inst_32285);

(statearr_32394[(8)] = inst_32259__$1);

return statearr_32394;
})();
var statearr_32404_34571 = state_32310__$1;
(statearr_32404_34571[(2)] = null);

(statearr_32404_34571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (8))){
var inst_32290 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32411_34572 = state_32310__$1;
(statearr_32411_34572[(2)] = inst_32290);

(statearr_32411_34572[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32426[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32426[(1)] = (1));

return statearr_32426;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32310){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32310);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32427){var ex__28830__auto__ = e32427;
var statearr_32428_34574 = state_32310;
(statearr_32428_34574[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_32310[(4)]))){
var statearr_32433_34575 = state_32310;
(statearr_32433_34575[(1)] = cljs.core.first((state_32310[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34576 = state_32310;
state_32310 = G__34576;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_32436 = f__29781__auto__();
(statearr_32436[(6)] = c__29780__auto___34549);

return statearr_32436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32469 = arguments.length;
switch (G__32469) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29780__auto___34578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_32543){
var state_val_32546 = (state_32543[(1)]);
if((state_val_32546 === (7))){
var inst_32504 = (state_32543[(7)]);
var inst_32503 = (state_32543[(8)]);
var inst_32503__$1 = (state_32543[(2)]);
var inst_32504__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32503__$1,(0),null);
var inst_32506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32503__$1,(1),null);
var inst_32509 = (inst_32504__$1 == null);
var state_32543__$1 = (function (){var statearr_32549 = state_32543;
(statearr_32549[(7)] = inst_32504__$1);

(statearr_32549[(9)] = inst_32506);

(statearr_32549[(8)] = inst_32503__$1);

return statearr_32549;
})();
if(cljs.core.truth_(inst_32509)){
var statearr_32550_34580 = state_32543__$1;
(statearr_32550_34580[(1)] = (8));

} else {
var statearr_32551_34581 = state_32543__$1;
(statearr_32551_34581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (1))){
var inst_32493 = cljs.core.vec(chs);
var inst_32494 = inst_32493;
var state_32543__$1 = (function (){var statearr_32552 = state_32543;
(statearr_32552[(10)] = inst_32494);

return statearr_32552;
})();
var statearr_32555_34583 = state_32543__$1;
(statearr_32555_34583[(2)] = null);

(statearr_32555_34583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (4))){
var inst_32494 = (state_32543[(10)]);
var state_32543__$1 = state_32543;
return cljs.core.async.ioc_alts_BANG_(state_32543__$1,(7),inst_32494);
} else {
if((state_val_32546 === (6))){
var inst_32528 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32556_34587 = state_32543__$1;
(statearr_32556_34587[(2)] = inst_32528);

(statearr_32556_34587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (3))){
var inst_32530 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32543__$1,inst_32530);
} else {
if((state_val_32546 === (2))){
var inst_32494 = (state_32543[(10)]);
var inst_32496 = cljs.core.count(inst_32494);
var inst_32497 = (inst_32496 > (0));
var state_32543__$1 = state_32543;
if(cljs.core.truth_(inst_32497)){
var statearr_32563_34589 = state_32543__$1;
(statearr_32563_34589[(1)] = (4));

} else {
var statearr_32564_34590 = state_32543__$1;
(statearr_32564_34590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (11))){
var inst_32494 = (state_32543[(10)]);
var inst_32521 = (state_32543[(2)]);
var tmp32560 = inst_32494;
var inst_32494__$1 = tmp32560;
var state_32543__$1 = (function (){var statearr_32565 = state_32543;
(statearr_32565[(11)] = inst_32521);

(statearr_32565[(10)] = inst_32494__$1);

return statearr_32565;
})();
var statearr_32566_34591 = state_32543__$1;
(statearr_32566_34591[(2)] = null);

(statearr_32566_34591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (9))){
var inst_32504 = (state_32543[(7)]);
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32543__$1,(11),out,inst_32504);
} else {
if((state_val_32546 === (5))){
var inst_32526 = cljs.core.async.close_BANG_(out);
var state_32543__$1 = state_32543;
var statearr_32572_34593 = state_32543__$1;
(statearr_32572_34593[(2)] = inst_32526);

(statearr_32572_34593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (10))){
var inst_32524 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32574_34594 = state_32543__$1;
(statearr_32574_34594[(2)] = inst_32524);

(statearr_32574_34594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (8))){
var inst_32504 = (state_32543[(7)]);
var inst_32494 = (state_32543[(10)]);
var inst_32506 = (state_32543[(9)]);
var inst_32503 = (state_32543[(8)]);
var inst_32516 = (function (){var cs = inst_32494;
var vec__32499 = inst_32503;
var v = inst_32504;
var c = inst_32506;
return (function (p1__32453_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32453_SHARP_);
});
})();
var inst_32517 = cljs.core.filterv(inst_32516,inst_32494);
var inst_32494__$1 = inst_32517;
var state_32543__$1 = (function (){var statearr_32575 = state_32543;
(statearr_32575[(10)] = inst_32494__$1);

return statearr_32575;
})();
var statearr_32579_34595 = state_32543__$1;
(statearr_32579_34595[(2)] = null);

(statearr_32579_34595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32580 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32580[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32580[(1)] = (1));

return statearr_32580;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32543){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32543);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32582){var ex__28830__auto__ = e32582;
var statearr_32583_34600 = state_32543;
(statearr_32583_34600[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_32543[(4)]))){
var statearr_32587_34602 = state_32543;
(statearr_32587_34602[(1)] = cljs.core.first((state_32543[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34603 = state_32543;
state_32543 = G__34603;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_32595 = f__29781__auto__();
(statearr_32595[(6)] = c__29780__auto___34578);

return statearr_32595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32601 = arguments.length;
switch (G__32601) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29780__auto___34606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_32632){
var state_val_32633 = (state_32632[(1)]);
if((state_val_32633 === (7))){
var inst_32611 = (state_32632[(7)]);
var inst_32611__$1 = (state_32632[(2)]);
var inst_32615 = (inst_32611__$1 == null);
var inst_32616 = cljs.core.not(inst_32615);
var state_32632__$1 = (function (){var statearr_32635 = state_32632;
(statearr_32635[(7)] = inst_32611__$1);

return statearr_32635;
})();
if(inst_32616){
var statearr_32636_34607 = state_32632__$1;
(statearr_32636_34607[(1)] = (8));

} else {
var statearr_32637_34608 = state_32632__$1;
(statearr_32637_34608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (1))){
var inst_32604 = (0);
var state_32632__$1 = (function (){var statearr_32638 = state_32632;
(statearr_32638[(8)] = inst_32604);

return statearr_32638;
})();
var statearr_32640_34609 = state_32632__$1;
(statearr_32640_34609[(2)] = null);

(statearr_32640_34609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (4))){
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32632__$1,(7),ch);
} else {
if((state_val_32633 === (6))){
var inst_32627 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32641_34610 = state_32632__$1;
(statearr_32641_34610[(2)] = inst_32627);

(statearr_32641_34610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (3))){
var inst_32629 = (state_32632[(2)]);
var inst_32630 = cljs.core.async.close_BANG_(out);
var state_32632__$1 = (function (){var statearr_32642 = state_32632;
(statearr_32642[(9)] = inst_32629);

return statearr_32642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32632__$1,inst_32630);
} else {
if((state_val_32633 === (2))){
var inst_32604 = (state_32632[(8)]);
var inst_32606 = (inst_32604 < n);
var state_32632__$1 = state_32632;
if(cljs.core.truth_(inst_32606)){
var statearr_32643_34611 = state_32632__$1;
(statearr_32643_34611[(1)] = (4));

} else {
var statearr_32644_34612 = state_32632__$1;
(statearr_32644_34612[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (11))){
var inst_32604 = (state_32632[(8)]);
var inst_32619 = (state_32632[(2)]);
var inst_32620 = (inst_32604 + (1));
var inst_32604__$1 = inst_32620;
var state_32632__$1 = (function (){var statearr_32645 = state_32632;
(statearr_32645[(8)] = inst_32604__$1);

(statearr_32645[(10)] = inst_32619);

return statearr_32645;
})();
var statearr_32646_34614 = state_32632__$1;
(statearr_32646_34614[(2)] = null);

(statearr_32646_34614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (9))){
var state_32632__$1 = state_32632;
var statearr_32647_34619 = state_32632__$1;
(statearr_32647_34619[(2)] = null);

(statearr_32647_34619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (5))){
var state_32632__$1 = state_32632;
var statearr_32648_34620 = state_32632__$1;
(statearr_32648_34620[(2)] = null);

(statearr_32648_34620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (10))){
var inst_32624 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32651_34621 = state_32632__$1;
(statearr_32651_34621[(2)] = inst_32624);

(statearr_32651_34621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (8))){
var inst_32611 = (state_32632[(7)]);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32632__$1,(11),out,inst_32611);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32656[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32656[(1)] = (1));

return statearr_32656;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32632){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32632);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32661){var ex__28830__auto__ = e32661;
var statearr_32662_34623 = state_32632;
(statearr_32662_34623[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_32632[(4)]))){
var statearr_32663_34624 = state_32632;
(statearr_32663_34624[(1)] = cljs.core.first((state_32632[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34625 = state_32632;
state_32632 = G__34625;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_32673 = f__29781__auto__();
(statearr_32673[(6)] = c__29780__auto___34606);

return statearr_32673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32686 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32686 = (function (f,ch,meta32687){
this.f = f;
this.ch = ch;
this.meta32687 = meta32687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32688,meta32687__$1){
var self__ = this;
var _32688__$1 = this;
return (new cljs.core.async.t_cljs$core$async32686(self__.f,self__.ch,meta32687__$1));
}));

(cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32688){
var self__ = this;
var _32688__$1 = this;
return self__.meta32687;
}));

(cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32696 = (function (f,ch,meta32687,_,fn1,meta32697){
this.f = f;
this.ch = ch;
this.meta32687 = meta32687;
this._ = _;
this.fn1 = fn1;
this.meta32697 = meta32697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32698,meta32697__$1){
var self__ = this;
var _32698__$1 = this;
return (new cljs.core.async.t_cljs$core$async32696(self__.f,self__.ch,self__.meta32687,self__._,self__.fn1,meta32697__$1));
}));

(cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32698){
var self__ = this;
var _32698__$1 = this;
return self__.meta32697;
}));

(cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32677_SHARP_){
var G__32709 = (((p1__32677_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32677_SHARP_) : self__.f.call(null,p1__32677_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32709) : f1.call(null,G__32709));
});
}));

(cljs.core.async.t_cljs$core$async32696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32687","meta32687",924513330,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32686","cljs.core.async/t_cljs$core$async32686",1397526732,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32697","meta32697",-797394256,null)], null);
}));

(cljs.core.async.t_cljs$core$async32696.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32696");

(cljs.core.async.t_cljs$core$async32696.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32696");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32696.
 */
cljs.core.async.__GT_t_cljs$core$async32696 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32696(f__$1,ch__$1,meta32687__$1,___$2,fn1__$1,meta32697){
return (new cljs.core.async.t_cljs$core$async32696(f__$1,ch__$1,meta32687__$1,___$2,fn1__$1,meta32697));
});

}

return (new cljs.core.async.t_cljs$core$async32696(self__.f,self__.ch,self__.meta32687,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32714 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32714) : self__.f.call(null,G__32714));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32687","meta32687",924513330,null)], null);
}));

(cljs.core.async.t_cljs$core$async32686.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32686");

(cljs.core.async.t_cljs$core$async32686.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32686");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32686.
 */
cljs.core.async.__GT_t_cljs$core$async32686 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32686(f__$1,ch__$1,meta32687){
return (new cljs.core.async.t_cljs$core$async32686(f__$1,ch__$1,meta32687));
});

}

return (new cljs.core.async.t_cljs$core$async32686(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32733 = (function (f,ch,meta32734){
this.f = f;
this.ch = ch;
this.meta32734 = meta32734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32735,meta32734__$1){
var self__ = this;
var _32735__$1 = this;
return (new cljs.core.async.t_cljs$core$async32733(self__.f,self__.ch,meta32734__$1));
}));

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32735){
var self__ = this;
var _32735__$1 = this;
return self__.meta32734;
}));

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32734","meta32734",-1393431258,null)], null);
}));

(cljs.core.async.t_cljs$core$async32733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32733");

(cljs.core.async.t_cljs$core$async32733.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32733.
 */
cljs.core.async.__GT_t_cljs$core$async32733 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32733(f__$1,ch__$1,meta32734){
return (new cljs.core.async.t_cljs$core$async32733(f__$1,ch__$1,meta32734));
});

}

return (new cljs.core.async.t_cljs$core$async32733(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32748 = (function (p,ch,meta32749){
this.p = p;
this.ch = ch;
this.meta32749 = meta32749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32750,meta32749__$1){
var self__ = this;
var _32750__$1 = this;
return (new cljs.core.async.t_cljs$core$async32748(self__.p,self__.ch,meta32749__$1));
}));

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32750){
var self__ = this;
var _32750__$1 = this;
return self__.meta32749;
}));

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32749","meta32749",-360495940,null)], null);
}));

(cljs.core.async.t_cljs$core$async32748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32748");

(cljs.core.async.t_cljs$core$async32748.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32748.
 */
cljs.core.async.__GT_t_cljs$core$async32748 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32748(p__$1,ch__$1,meta32749){
return (new cljs.core.async.t_cljs$core$async32748(p__$1,ch__$1,meta32749));
});

}

return (new cljs.core.async.t_cljs$core$async32748(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32812 = arguments.length;
switch (G__32812) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29780__auto___34634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_32871){
var state_val_32872 = (state_32871[(1)]);
if((state_val_32872 === (7))){
var inst_32867 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
var statearr_32873_34635 = state_32871__$1;
(statearr_32873_34635[(2)] = inst_32867);

(statearr_32873_34635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (1))){
var state_32871__$1 = state_32871;
var statearr_32874_34636 = state_32871__$1;
(statearr_32874_34636[(2)] = null);

(statearr_32874_34636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (4))){
var inst_32850 = (state_32871[(7)]);
var inst_32850__$1 = (state_32871[(2)]);
var inst_32851 = (inst_32850__$1 == null);
var state_32871__$1 = (function (){var statearr_32875 = state_32871;
(statearr_32875[(7)] = inst_32850__$1);

return statearr_32875;
})();
if(cljs.core.truth_(inst_32851)){
var statearr_32876_34637 = state_32871__$1;
(statearr_32876_34637[(1)] = (5));

} else {
var statearr_32877_34638 = state_32871__$1;
(statearr_32877_34638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (6))){
var inst_32850 = (state_32871[(7)]);
var inst_32858 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32850) : p.call(null,inst_32850));
var state_32871__$1 = state_32871;
if(cljs.core.truth_(inst_32858)){
var statearr_32878_34639 = state_32871__$1;
(statearr_32878_34639[(1)] = (8));

} else {
var statearr_32879_34640 = state_32871__$1;
(statearr_32879_34640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (3))){
var inst_32869 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32871__$1,inst_32869);
} else {
if((state_val_32872 === (2))){
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32871__$1,(4),ch);
} else {
if((state_val_32872 === (11))){
var inst_32861 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
var statearr_32881_34641 = state_32871__$1;
(statearr_32881_34641[(2)] = inst_32861);

(statearr_32881_34641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (9))){
var state_32871__$1 = state_32871;
var statearr_32882_34642 = state_32871__$1;
(statearr_32882_34642[(2)] = null);

(statearr_32882_34642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (5))){
var inst_32856 = cljs.core.async.close_BANG_(out);
var state_32871__$1 = state_32871;
var statearr_32883_34643 = state_32871__$1;
(statearr_32883_34643[(2)] = inst_32856);

(statearr_32883_34643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (10))){
var inst_32864 = (state_32871[(2)]);
var state_32871__$1 = (function (){var statearr_32884 = state_32871;
(statearr_32884[(8)] = inst_32864);

return statearr_32884;
})();
var statearr_32885_34644 = state_32871__$1;
(statearr_32885_34644[(2)] = null);

(statearr_32885_34644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (8))){
var inst_32850 = (state_32871[(7)]);
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32871__$1,(11),out,inst_32850);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32886 = [null,null,null,null,null,null,null,null,null];
(statearr_32886[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32886[(1)] = (1));

return statearr_32886;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32871){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32871);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32888){var ex__28830__auto__ = e32888;
var statearr_32890_34646 = state_32871;
(statearr_32890_34646[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_32871[(4)]))){
var statearr_32891_34648 = state_32871;
(statearr_32891_34648[(1)] = cljs.core.first((state_32871[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34649 = state_32871;
state_32871 = G__34649;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_32892 = f__29781__auto__();
(statearr_32892[(6)] = c__29780__auto___34634);

return statearr_32892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32895 = arguments.length;
switch (G__32895) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_32975){
var state_val_32976 = (state_32975[(1)]);
if((state_val_32976 === (7))){
var inst_32971 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
var statearr_32977_34654 = state_32975__$1;
(statearr_32977_34654[(2)] = inst_32971);

(statearr_32977_34654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (20))){
var inst_32940 = (state_32975[(7)]);
var inst_32951 = (state_32975[(2)]);
var inst_32952 = cljs.core.next(inst_32940);
var inst_32917 = inst_32952;
var inst_32918 = null;
var inst_32919 = (0);
var inst_32920 = (0);
var state_32975__$1 = (function (){var statearr_32980 = state_32975;
(statearr_32980[(8)] = inst_32918);

(statearr_32980[(9)] = inst_32917);

(statearr_32980[(10)] = inst_32919);

(statearr_32980[(11)] = inst_32951);

(statearr_32980[(12)] = inst_32920);

return statearr_32980;
})();
var statearr_32981_34655 = state_32975__$1;
(statearr_32981_34655[(2)] = null);

(statearr_32981_34655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (1))){
var state_32975__$1 = state_32975;
var statearr_32983_34656 = state_32975__$1;
(statearr_32983_34656[(2)] = null);

(statearr_32983_34656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (4))){
var inst_32903 = (state_32975[(13)]);
var inst_32903__$1 = (state_32975[(2)]);
var inst_32904 = (inst_32903__$1 == null);
var state_32975__$1 = (function (){var statearr_32984 = state_32975;
(statearr_32984[(13)] = inst_32903__$1);

return statearr_32984;
})();
if(cljs.core.truth_(inst_32904)){
var statearr_32985_34658 = state_32975__$1;
(statearr_32985_34658[(1)] = (5));

} else {
var statearr_32986_34659 = state_32975__$1;
(statearr_32986_34659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (15))){
var state_32975__$1 = state_32975;
var statearr_32991_34660 = state_32975__$1;
(statearr_32991_34660[(2)] = null);

(statearr_32991_34660[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (21))){
var state_32975__$1 = state_32975;
var statearr_32993_34661 = state_32975__$1;
(statearr_32993_34661[(2)] = null);

(statearr_32993_34661[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (13))){
var inst_32918 = (state_32975[(8)]);
var inst_32917 = (state_32975[(9)]);
var inst_32919 = (state_32975[(10)]);
var inst_32920 = (state_32975[(12)]);
var inst_32932 = (state_32975[(2)]);
var inst_32937 = (inst_32920 + (1));
var tmp32988 = inst_32918;
var tmp32989 = inst_32917;
var tmp32990 = inst_32919;
var inst_32917__$1 = tmp32989;
var inst_32918__$1 = tmp32988;
var inst_32919__$1 = tmp32990;
var inst_32920__$1 = inst_32937;
var state_32975__$1 = (function (){var statearr_32996 = state_32975;
(statearr_32996[(14)] = inst_32932);

(statearr_32996[(8)] = inst_32918__$1);

(statearr_32996[(9)] = inst_32917__$1);

(statearr_32996[(10)] = inst_32919__$1);

(statearr_32996[(12)] = inst_32920__$1);

return statearr_32996;
})();
var statearr_32997_34662 = state_32975__$1;
(statearr_32997_34662[(2)] = null);

(statearr_32997_34662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (22))){
var state_32975__$1 = state_32975;
var statearr_32998_34663 = state_32975__$1;
(statearr_32998_34663[(2)] = null);

(statearr_32998_34663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (6))){
var inst_32903 = (state_32975[(13)]);
var inst_32915 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32903) : f.call(null,inst_32903));
var inst_32916 = cljs.core.seq(inst_32915);
var inst_32917 = inst_32916;
var inst_32918 = null;
var inst_32919 = (0);
var inst_32920 = (0);
var state_32975__$1 = (function (){var statearr_33000 = state_32975;
(statearr_33000[(8)] = inst_32918);

(statearr_33000[(9)] = inst_32917);

(statearr_33000[(10)] = inst_32919);

(statearr_33000[(12)] = inst_32920);

return statearr_33000;
})();
var statearr_33001_34664 = state_32975__$1;
(statearr_33001_34664[(2)] = null);

(statearr_33001_34664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (17))){
var inst_32940 = (state_32975[(7)]);
var inst_32944 = cljs.core.chunk_first(inst_32940);
var inst_32945 = cljs.core.chunk_rest(inst_32940);
var inst_32946 = cljs.core.count(inst_32944);
var inst_32917 = inst_32945;
var inst_32918 = inst_32944;
var inst_32919 = inst_32946;
var inst_32920 = (0);
var state_32975__$1 = (function (){var statearr_33006 = state_32975;
(statearr_33006[(8)] = inst_32918);

(statearr_33006[(9)] = inst_32917);

(statearr_33006[(10)] = inst_32919);

(statearr_33006[(12)] = inst_32920);

return statearr_33006;
})();
var statearr_33007_34666 = state_32975__$1;
(statearr_33007_34666[(2)] = null);

(statearr_33007_34666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (3))){
var inst_32973 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32975__$1,inst_32973);
} else {
if((state_val_32976 === (12))){
var inst_32960 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
var statearr_33013_34668 = state_32975__$1;
(statearr_33013_34668[(2)] = inst_32960);

(statearr_33013_34668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (2))){
var state_32975__$1 = state_32975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32975__$1,(4),in$);
} else {
if((state_val_32976 === (23))){
var inst_32969 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
var statearr_33014_34669 = state_32975__$1;
(statearr_33014_34669[(2)] = inst_32969);

(statearr_33014_34669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (19))){
var inst_32955 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
var statearr_33015_34670 = state_32975__$1;
(statearr_33015_34670[(2)] = inst_32955);

(statearr_33015_34670[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (11))){
var inst_32917 = (state_32975[(9)]);
var inst_32940 = (state_32975[(7)]);
var inst_32940__$1 = cljs.core.seq(inst_32917);
var state_32975__$1 = (function (){var statearr_33016 = state_32975;
(statearr_33016[(7)] = inst_32940__$1);

return statearr_33016;
})();
if(inst_32940__$1){
var statearr_33017_34671 = state_32975__$1;
(statearr_33017_34671[(1)] = (14));

} else {
var statearr_33018_34672 = state_32975__$1;
(statearr_33018_34672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (9))){
var inst_32962 = (state_32975[(2)]);
var inst_32964 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32975__$1 = (function (){var statearr_33019 = state_32975;
(statearr_33019[(15)] = inst_32962);

return statearr_33019;
})();
if(cljs.core.truth_(inst_32964)){
var statearr_33021_34673 = state_32975__$1;
(statearr_33021_34673[(1)] = (21));

} else {
var statearr_33025_34674 = state_32975__$1;
(statearr_33025_34674[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (5))){
var inst_32906 = cljs.core.async.close_BANG_(out);
var state_32975__$1 = state_32975;
var statearr_33030_34675 = state_32975__$1;
(statearr_33030_34675[(2)] = inst_32906);

(statearr_33030_34675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (14))){
var inst_32940 = (state_32975[(7)]);
var inst_32942 = cljs.core.chunked_seq_QMARK_(inst_32940);
var state_32975__$1 = state_32975;
if(inst_32942){
var statearr_33031_34676 = state_32975__$1;
(statearr_33031_34676[(1)] = (17));

} else {
var statearr_33038_34677 = state_32975__$1;
(statearr_33038_34677[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (16))){
var inst_32958 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
var statearr_33039_34678 = state_32975__$1;
(statearr_33039_34678[(2)] = inst_32958);

(statearr_33039_34678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (10))){
var inst_32918 = (state_32975[(8)]);
var inst_32920 = (state_32975[(12)]);
var inst_32928 = cljs.core._nth(inst_32918,inst_32920);
var state_32975__$1 = state_32975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32975__$1,(13),out,inst_32928);
} else {
if((state_val_32976 === (18))){
var inst_32940 = (state_32975[(7)]);
var inst_32949 = cljs.core.first(inst_32940);
var state_32975__$1 = state_32975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32975__$1,(20),out,inst_32949);
} else {
if((state_val_32976 === (8))){
var inst_32919 = (state_32975[(10)]);
var inst_32920 = (state_32975[(12)]);
var inst_32922 = (inst_32920 < inst_32919);
var inst_32923 = inst_32922;
var state_32975__$1 = state_32975;
if(cljs.core.truth_(inst_32923)){
var statearr_33042_34679 = state_32975__$1;
(statearr_33042_34679[(1)] = (10));

} else {
var statearr_33043_34680 = state_32975__$1;
(statearr_33043_34680[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_33044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33044[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__);

(statearr_33044[(1)] = (1));

return statearr_33044;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____1 = (function (state_32975){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32975);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e33045){var ex__28830__auto__ = e33045;
var statearr_33046_34682 = state_32975;
(statearr_33046_34682[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_32975[(4)]))){
var statearr_33047_34683 = state_32975;
(statearr_33047_34683[(1)] = cljs.core.first((state_32975[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34684 = state_32975;
state_32975 = G__34684;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__ = function(state_32975){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____1.call(this,state_32975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_33048 = f__29781__auto__();
(statearr_33048[(6)] = c__29780__auto__);

return statearr_33048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));

return c__29780__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33050 = arguments.length;
switch (G__33050) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33052 = arguments.length;
switch (G__33052) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33057 = arguments.length;
switch (G__33057) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29780__auto___34696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_33084){
var state_val_33085 = (state_33084[(1)]);
if((state_val_33085 === (7))){
var inst_33079 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
var statearr_33086_34698 = state_33084__$1;
(statearr_33086_34698[(2)] = inst_33079);

(statearr_33086_34698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (1))){
var inst_33061 = null;
var state_33084__$1 = (function (){var statearr_33088 = state_33084;
(statearr_33088[(7)] = inst_33061);

return statearr_33088;
})();
var statearr_33092_34701 = state_33084__$1;
(statearr_33092_34701[(2)] = null);

(statearr_33092_34701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (4))){
var inst_33064 = (state_33084[(8)]);
var inst_33064__$1 = (state_33084[(2)]);
var inst_33065 = (inst_33064__$1 == null);
var inst_33066 = cljs.core.not(inst_33065);
var state_33084__$1 = (function (){var statearr_33093 = state_33084;
(statearr_33093[(8)] = inst_33064__$1);

return statearr_33093;
})();
if(inst_33066){
var statearr_33094_34702 = state_33084__$1;
(statearr_33094_34702[(1)] = (5));

} else {
var statearr_33095_34703 = state_33084__$1;
(statearr_33095_34703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (6))){
var state_33084__$1 = state_33084;
var statearr_33096_34704 = state_33084__$1;
(statearr_33096_34704[(2)] = null);

(statearr_33096_34704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (3))){
var inst_33081 = (state_33084[(2)]);
var inst_33082 = cljs.core.async.close_BANG_(out);
var state_33084__$1 = (function (){var statearr_33098 = state_33084;
(statearr_33098[(9)] = inst_33081);

return statearr_33098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33084__$1,inst_33082);
} else {
if((state_val_33085 === (2))){
var state_33084__$1 = state_33084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33084__$1,(4),ch);
} else {
if((state_val_33085 === (11))){
var inst_33064 = (state_33084[(8)]);
var inst_33073 = (state_33084[(2)]);
var inst_33061 = inst_33064;
var state_33084__$1 = (function (){var statearr_33099 = state_33084;
(statearr_33099[(7)] = inst_33061);

(statearr_33099[(10)] = inst_33073);

return statearr_33099;
})();
var statearr_33100_34705 = state_33084__$1;
(statearr_33100_34705[(2)] = null);

(statearr_33100_34705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (9))){
var inst_33064 = (state_33084[(8)]);
var state_33084__$1 = state_33084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33084__$1,(11),out,inst_33064);
} else {
if((state_val_33085 === (5))){
var inst_33061 = (state_33084[(7)]);
var inst_33064 = (state_33084[(8)]);
var inst_33068 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33064,inst_33061);
var state_33084__$1 = state_33084;
if(inst_33068){
var statearr_33106_34706 = state_33084__$1;
(statearr_33106_34706[(1)] = (8));

} else {
var statearr_33107_34707 = state_33084__$1;
(statearr_33107_34707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (10))){
var inst_33076 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
var statearr_33108_34708 = state_33084__$1;
(statearr_33108_34708[(2)] = inst_33076);

(statearr_33108_34708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (8))){
var inst_33061 = (state_33084[(7)]);
var tmp33101 = inst_33061;
var inst_33061__$1 = tmp33101;
var state_33084__$1 = (function (){var statearr_33112 = state_33084;
(statearr_33112[(7)] = inst_33061__$1);

return statearr_33112;
})();
var statearr_33113_34709 = state_33084__$1;
(statearr_33113_34709[(2)] = null);

(statearr_33113_34709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_33114 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33114[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_33114[(1)] = (1));

return statearr_33114;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_33084){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_33084);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e33115){var ex__28830__auto__ = e33115;
var statearr_33116_34710 = state_33084;
(statearr_33116_34710[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_33084[(4)]))){
var statearr_33117_34711 = state_33084;
(statearr_33117_34711[(1)] = cljs.core.first((state_33084[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34712 = state_33084;
state_33084 = G__34712;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_33084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_33084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_33126 = f__29781__auto__();
(statearr_33126[(6)] = c__29780__auto___34696);

return statearr_33126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33129 = arguments.length;
switch (G__33129) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29780__auto___34715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_33170){
var state_val_33171 = (state_33170[(1)]);
if((state_val_33171 === (7))){
var inst_33166 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
var statearr_33178_34719 = state_33170__$1;
(statearr_33178_34719[(2)] = inst_33166);

(statearr_33178_34719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (1))){
var inst_33133 = (new Array(n));
var inst_33134 = inst_33133;
var inst_33135 = (0);
var state_33170__$1 = (function (){var statearr_33179 = state_33170;
(statearr_33179[(7)] = inst_33134);

(statearr_33179[(8)] = inst_33135);

return statearr_33179;
})();
var statearr_33180_34720 = state_33170__$1;
(statearr_33180_34720[(2)] = null);

(statearr_33180_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (4))){
var inst_33138 = (state_33170[(9)]);
var inst_33138__$1 = (state_33170[(2)]);
var inst_33139 = (inst_33138__$1 == null);
var inst_33140 = cljs.core.not(inst_33139);
var state_33170__$1 = (function (){var statearr_33181 = state_33170;
(statearr_33181[(9)] = inst_33138__$1);

return statearr_33181;
})();
if(inst_33140){
var statearr_33182_34723 = state_33170__$1;
(statearr_33182_34723[(1)] = (5));

} else {
var statearr_33183_34724 = state_33170__$1;
(statearr_33183_34724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (15))){
var inst_33160 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
var statearr_33184_34725 = state_33170__$1;
(statearr_33184_34725[(2)] = inst_33160);

(statearr_33184_34725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (13))){
var state_33170__$1 = state_33170;
var statearr_33186_34726 = state_33170__$1;
(statearr_33186_34726[(2)] = null);

(statearr_33186_34726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (6))){
var inst_33135 = (state_33170[(8)]);
var inst_33156 = (inst_33135 > (0));
var state_33170__$1 = state_33170;
if(cljs.core.truth_(inst_33156)){
var statearr_33191_34727 = state_33170__$1;
(statearr_33191_34727[(1)] = (12));

} else {
var statearr_33192_34728 = state_33170__$1;
(statearr_33192_34728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (3))){
var inst_33168 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33170__$1,inst_33168);
} else {
if((state_val_33171 === (12))){
var inst_33134 = (state_33170[(7)]);
var inst_33158 = cljs.core.vec(inst_33134);
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33170__$1,(15),out,inst_33158);
} else {
if((state_val_33171 === (2))){
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33170__$1,(4),ch);
} else {
if((state_val_33171 === (11))){
var inst_33150 = (state_33170[(2)]);
var inst_33151 = (new Array(n));
var inst_33134 = inst_33151;
var inst_33135 = (0);
var state_33170__$1 = (function (){var statearr_33200 = state_33170;
(statearr_33200[(7)] = inst_33134);

(statearr_33200[(10)] = inst_33150);

(statearr_33200[(8)] = inst_33135);

return statearr_33200;
})();
var statearr_33204_34734 = state_33170__$1;
(statearr_33204_34734[(2)] = null);

(statearr_33204_34734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (9))){
var inst_33134 = (state_33170[(7)]);
var inst_33148 = cljs.core.vec(inst_33134);
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33170__$1,(11),out,inst_33148);
} else {
if((state_val_33171 === (5))){
var inst_33134 = (state_33170[(7)]);
var inst_33138 = (state_33170[(9)]);
var inst_33143 = (state_33170[(11)]);
var inst_33135 = (state_33170[(8)]);
var inst_33142 = (inst_33134[inst_33135] = inst_33138);
var inst_33143__$1 = (inst_33135 + (1));
var inst_33144 = (inst_33143__$1 < n);
var state_33170__$1 = (function (){var statearr_33211 = state_33170;
(statearr_33211[(12)] = inst_33142);

(statearr_33211[(11)] = inst_33143__$1);

return statearr_33211;
})();
if(cljs.core.truth_(inst_33144)){
var statearr_33212_34744 = state_33170__$1;
(statearr_33212_34744[(1)] = (8));

} else {
var statearr_33213_34745 = state_33170__$1;
(statearr_33213_34745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (14))){
var inst_33163 = (state_33170[(2)]);
var inst_33164 = cljs.core.async.close_BANG_(out);
var state_33170__$1 = (function (){var statearr_33215 = state_33170;
(statearr_33215[(13)] = inst_33163);

return statearr_33215;
})();
var statearr_33216_34747 = state_33170__$1;
(statearr_33216_34747[(2)] = inst_33164);

(statearr_33216_34747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (10))){
var inst_33154 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
var statearr_33217_34752 = state_33170__$1;
(statearr_33217_34752[(2)] = inst_33154);

(statearr_33217_34752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (8))){
var inst_33134 = (state_33170[(7)]);
var inst_33143 = (state_33170[(11)]);
var tmp33214 = inst_33134;
var inst_33134__$1 = tmp33214;
var inst_33135 = inst_33143;
var state_33170__$1 = (function (){var statearr_33218 = state_33170;
(statearr_33218[(7)] = inst_33134__$1);

(statearr_33218[(8)] = inst_33135);

return statearr_33218;
})();
var statearr_33219_34757 = state_33170__$1;
(statearr_33219_34757[(2)] = null);

(statearr_33219_34757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_33232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33232[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_33232[(1)] = (1));

return statearr_33232;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_33170){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_33170);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e33233){var ex__28830__auto__ = e33233;
var statearr_33237_34763 = state_33170;
(statearr_33237_34763[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_33170[(4)]))){
var statearr_33238_34764 = state_33170;
(statearr_33238_34764[(1)] = cljs.core.first((state_33170[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34766 = state_33170;
state_33170 = G__34766;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_33170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_33170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_33240 = f__29781__auto__();
(statearr_33240[(6)] = c__29780__auto___34715);

return statearr_33240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33242 = arguments.length;
switch (G__33242) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29780__auto___34772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29781__auto__ = (function (){var switch__28826__auto__ = (function (state_33287){
var state_val_33288 = (state_33287[(1)]);
if((state_val_33288 === (7))){
var inst_33283 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33295_34776 = state_33287__$1;
(statearr_33295_34776[(2)] = inst_33283);

(statearr_33295_34776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (1))){
var inst_33243 = [];
var inst_33244 = inst_33243;
var inst_33245 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33287__$1 = (function (){var statearr_33296 = state_33287;
(statearr_33296[(7)] = inst_33245);

(statearr_33296[(8)] = inst_33244);

return statearr_33296;
})();
var statearr_33297_34777 = state_33287__$1;
(statearr_33297_34777[(2)] = null);

(statearr_33297_34777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (4))){
var inst_33248 = (state_33287[(9)]);
var inst_33248__$1 = (state_33287[(2)]);
var inst_33249 = (inst_33248__$1 == null);
var inst_33250 = cljs.core.not(inst_33249);
var state_33287__$1 = (function (){var statearr_33301 = state_33287;
(statearr_33301[(9)] = inst_33248__$1);

return statearr_33301;
})();
if(inst_33250){
var statearr_33302_34778 = state_33287__$1;
(statearr_33302_34778[(1)] = (5));

} else {
var statearr_33303_34779 = state_33287__$1;
(statearr_33303_34779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (15))){
var inst_33244 = (state_33287[(8)]);
var inst_33275 = cljs.core.vec(inst_33244);
var state_33287__$1 = state_33287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33287__$1,(18),out,inst_33275);
} else {
if((state_val_33288 === (13))){
var inst_33270 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33305_34780 = state_33287__$1;
(statearr_33305_34780[(2)] = inst_33270);

(statearr_33305_34780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (6))){
var inst_33244 = (state_33287[(8)]);
var inst_33272 = inst_33244.length;
var inst_33273 = (inst_33272 > (0));
var state_33287__$1 = state_33287;
if(cljs.core.truth_(inst_33273)){
var statearr_33308_34784 = state_33287__$1;
(statearr_33308_34784[(1)] = (15));

} else {
var statearr_33310_34785 = state_33287__$1;
(statearr_33310_34785[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (17))){
var inst_33280 = (state_33287[(2)]);
var inst_33281 = cljs.core.async.close_BANG_(out);
var state_33287__$1 = (function (){var statearr_33314 = state_33287;
(statearr_33314[(10)] = inst_33280);

return statearr_33314;
})();
var statearr_33317_34786 = state_33287__$1;
(statearr_33317_34786[(2)] = inst_33281);

(statearr_33317_34786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (3))){
var inst_33285 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33287__$1,inst_33285);
} else {
if((state_val_33288 === (12))){
var inst_33244 = (state_33287[(8)]);
var inst_33263 = cljs.core.vec(inst_33244);
var state_33287__$1 = state_33287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33287__$1,(14),out,inst_33263);
} else {
if((state_val_33288 === (2))){
var state_33287__$1 = state_33287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33287__$1,(4),ch);
} else {
if((state_val_33288 === (11))){
var inst_33248 = (state_33287[(9)]);
var inst_33252 = (state_33287[(11)]);
var inst_33244 = (state_33287[(8)]);
var inst_33260 = inst_33244.push(inst_33248);
var tmp33326 = inst_33244;
var inst_33244__$1 = tmp33326;
var inst_33245 = inst_33252;
var state_33287__$1 = (function (){var statearr_33339 = state_33287;
(statearr_33339[(12)] = inst_33260);

(statearr_33339[(7)] = inst_33245);

(statearr_33339[(8)] = inst_33244__$1);

return statearr_33339;
})();
var statearr_33341_34787 = state_33287__$1;
(statearr_33341_34787[(2)] = null);

(statearr_33341_34787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (9))){
var inst_33245 = (state_33287[(7)]);
var inst_33256 = cljs.core.keyword_identical_QMARK_(inst_33245,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33287__$1 = state_33287;
var statearr_33342_34789 = state_33287__$1;
(statearr_33342_34789[(2)] = inst_33256);

(statearr_33342_34789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (5))){
var inst_33248 = (state_33287[(9)]);
var inst_33245 = (state_33287[(7)]);
var inst_33253 = (state_33287[(13)]);
var inst_33252 = (state_33287[(11)]);
var inst_33252__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33248) : f.call(null,inst_33248));
var inst_33253__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33252__$1,inst_33245);
var state_33287__$1 = (function (){var statearr_33346 = state_33287;
(statearr_33346[(13)] = inst_33253__$1);

(statearr_33346[(11)] = inst_33252__$1);

return statearr_33346;
})();
if(inst_33253__$1){
var statearr_33349_34792 = state_33287__$1;
(statearr_33349_34792[(1)] = (8));

} else {
var statearr_33350_34793 = state_33287__$1;
(statearr_33350_34793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (14))){
var inst_33248 = (state_33287[(9)]);
var inst_33252 = (state_33287[(11)]);
var inst_33265 = (state_33287[(2)]);
var inst_33266 = [];
var inst_33267 = inst_33266.push(inst_33248);
var inst_33244 = inst_33266;
var inst_33245 = inst_33252;
var state_33287__$1 = (function (){var statearr_33357 = state_33287;
(statearr_33357[(14)] = inst_33267);

(statearr_33357[(15)] = inst_33265);

(statearr_33357[(7)] = inst_33245);

(statearr_33357[(8)] = inst_33244);

return statearr_33357;
})();
var statearr_33360_34794 = state_33287__$1;
(statearr_33360_34794[(2)] = null);

(statearr_33360_34794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (16))){
var state_33287__$1 = state_33287;
var statearr_33361_34795 = state_33287__$1;
(statearr_33361_34795[(2)] = null);

(statearr_33361_34795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (10))){
var inst_33258 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
if(cljs.core.truth_(inst_33258)){
var statearr_33364_34799 = state_33287__$1;
(statearr_33364_34799[(1)] = (11));

} else {
var statearr_33366_34800 = state_33287__$1;
(statearr_33366_34800[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (18))){
var inst_33277 = (state_33287[(2)]);
var state_33287__$1 = state_33287;
var statearr_33368_34803 = state_33287__$1;
(statearr_33368_34803[(2)] = inst_33277);

(statearr_33368_34803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33288 === (8))){
var inst_33253 = (state_33287[(13)]);
var state_33287__$1 = state_33287;
var statearr_33377_34808 = state_33287__$1;
(statearr_33377_34808[(2)] = inst_33253);

(statearr_33377_34808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_33386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33386[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_33386[(1)] = (1));

return statearr_33386;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_33287){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_33287);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e33392){var ex__28830__auto__ = e33392;
var statearr_33393_34809 = state_33287;
(statearr_33393_34809[(2)] = ex__28830__auto__);


if(cljs.core.seq((state_33287[(4)]))){
var statearr_33394_34817 = state_33287;
(statearr_33394_34817[(1)] = cljs.core.first((state_33287[(4)])));

} else {
throw ex__28830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34818 = state_33287;
state_33287 = G__34818;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_33287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_33287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29782__auto__ = (function (){var statearr_33399 = f__29781__auto__();
(statearr_33399[(6)] = c__29780__auto___34772);

return statearr_33399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29782__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
