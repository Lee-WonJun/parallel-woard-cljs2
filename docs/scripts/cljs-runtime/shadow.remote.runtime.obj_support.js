goog.provide('shadow.remote.runtime.obj_support');

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
shadow.remote.runtime.obj_support.Reference = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35628,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35653 = k35628;
var G__35653__$1 = (((G__35653 instanceof cljs.core.Keyword))?G__35653.fqn:null);
switch (G__35653__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35628,else__4505__auto__);

}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35654){
var vec__35655 = p__35654;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35655,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35655,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.remote.runtime.obj-support.Reference{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35627){
var self__ = this;
var G__35627__$1 = this;
return (new cljs.core.RecordIter((0),G__35627__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1775716890 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35630,other35631){
var self__ = this;
var this35630__$1 = this;
return (((!((other35631 == null)))) && ((((this35630__$1.constructor === other35631.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35630__$1.obj,other35631.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35630__$1.__extmap,other35631.__extmap)))))));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35628){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35678 = k35628;
var G__35678__$1 = (((G__35678 instanceof cljs.core.Keyword))?G__35678.fqn:null);
switch (G__35678__$1) {
case "obj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35628);

}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35627){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35679 = cljs.core.keyword_identical_QMARK_;
var expr__35680 = k__4511__auto__;
if(cljs.core.truth_((pred__35679.cljs$core$IFn$_invoke$arity$2 ? pred__35679.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__35680) : pred__35679.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__35680)))){
return (new shadow.remote.runtime.obj_support.Reference(G__35627,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35627),null));
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35627){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,G__35627,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.remote.runtime.obj_support.Reference.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(shadow.remote.runtime.obj_support.Reference.cljs$lang$type = true);

(shadow.remote.runtime.obj_support.Reference.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.remote.runtime.obj-support/Reference",null,(1),null));
}));

(shadow.remote.runtime.obj_support.Reference.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.remote.runtime.obj-support/Reference");
}));

/**
 * Positional factory function for shadow.remote.runtime.obj-support/Reference.
 */
shadow.remote.runtime.obj_support.__GT_Reference = (function shadow$remote$runtime$obj_support$__GT_Reference(obj){
return (new shadow.remote.runtime.obj_support.Reference(obj,null,null,null));
});

/**
 * Factory function for shadow.remote.runtime.obj-support/Reference, taking a map of keywords to field values.
 */
shadow.remote.runtime.obj_support.map__GT_Reference = (function shadow$remote$runtime$obj_support$map__GT_Reference(G__35636){
var extmap__4542__auto__ = (function (){var G__35682 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35636,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__35636)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35682);
} else {
return G__35682;
}
})();
return (new shadow.remote.runtime.obj_support.Reference(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__35636),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.remote.runtime.obj_support.obj_ref = (function shadow$remote$runtime$obj_support$obj_ref(obj){
if((!((obj == null)))){
return (new shadow.remote.runtime.obj_support.Reference(obj,null,null,null));
} else {
return null;
}
});
shadow.remote.runtime.obj_support.obj_ref_QMARK_ = (function shadow$remote$runtime$obj_support$obj_ref_QMARK_(result){
return (result instanceof shadow.remote.runtime.obj_support.Reference);
});
shadow.remote.runtime.obj_support.now = (function shadow$remote$runtime$obj_support$now(){
return Date.now();
});
shadow.remote.runtime.obj_support.next_oid = (function shadow$remote$runtime$obj_support$next_oid(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
});
shadow.remote.runtime.obj_support.register_STAR_ = (function shadow$remote$runtime$obj_support$register_STAR_(state,oid,obj,obj_info){
var ts = shadow.remote.runtime.obj_support.now();
var obj_entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"obj","obj",981763962),obj,new cljs.core.Keyword(null,"access-at","access-at",-1487162729),ts,new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obj_info,new cljs.core.Keyword(null,"added-at","added-at",-352499434),ts)], null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null),obj_entry);
});
shadow.remote.runtime.obj_support.obj_type_string = (function shadow$remote$runtime$obj_support$obj_type_string(obj){
if((obj == null)){
return "nil";
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.remote !== 'undefined') && (typeof shadow.remote.runtime !== 'undefined') && (typeof shadow.remote.runtime.obj_support !== 'undefined') && (typeof shadow.remote.runtime.obj_support.make_view !== 'undefined')){
} else {
shadow.remote.runtime.obj_support.make_view = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__35683 = cljs.core.get_global_hierarchy;
return (fexpr__35683.cljs$core$IFn$_invoke$arity$0 ? fexpr__35683.cljs$core$IFn$_invoke$arity$0() : fexpr__35683.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("shadow.remote.runtime.obj-support","make-view"),(function (state_ref,p__35684,entry){
var map__35685 = p__35684;
var map__35685__$1 = cljs.core.__destructure_map(map__35685);
var msg = map__35685__$1;
var view_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35685__$1,new cljs.core.Keyword(null,"view-type","view-type",-1848894559));
return view_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
shadow.remote.runtime.obj_support.default_max_print_size = (((1) * (1024)) * (1024));
shadow.remote.runtime.obj_support.as_edn = (function shadow$remote$runtime$obj_support$as_edn(data,p__35686){
var map__35687 = p__35686;
var map__35687__$1 = cljs.core.__destructure_map(map__35687);
var msg = map__35687__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35687__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),shadow.remote.runtime.obj_support.default_max_print_size);
var lw = shadow.remote.runtime.writer.limit_writer(limit);
cljs.core.pr_writer(data,lw,cljs.core.pr_opts());

return shadow.remote.runtime.writer.get_string(lw);
});
shadow.remote.runtime.obj_support.as_pprint = (function shadow$remote$runtime$obj_support$as_pprint(data,p__35688){
var map__35689 = p__35688;
var map__35689__$1 = cljs.core.__destructure_map(map__35689);
var msg = map__35689__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35689__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),shadow.remote.runtime.obj_support.default_max_print_size);
var lw = shadow.remote.runtime.writer.limit_writer(limit);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(data,lw);

return shadow.remote.runtime.writer.get_string(lw);
});
shadow.remote.runtime.obj_support.as_edn_limit = (function shadow$remote$runtime$obj_support$as_edn_limit(data,p__35690){
var map__35691 = p__35690;
var map__35691__$1 = cljs.core.__destructure_map(map__35691);
var msg = map__35691__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35691__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return shadow.remote.runtime.writer.pr_str_limit(data,limit);
});
shadow.remote.runtime.obj_support.as_str = (function shadow$remote$runtime$obj_support$as_str(data,msg){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(data);
});
shadow.remote.runtime.obj_support.as_ex_str = (function shadow$remote$runtime$obj_support$as_ex_str(ex,msg){
if((ex instanceof Error)){
return cljs.repl.error__GT_str(ex);
} else {
return ["Execution error:\n","  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(shadow.remote.runtime.writer.pr_str_limit(ex,(200)))),"\n","\n"].join('');
}
});
shadow.remote.runtime.obj_support.exception_QMARK_ = (function shadow$remote$runtime$obj_support$exception_QMARK_(x){
return true;
});
shadow.remote.runtime.obj_support.rank_predicates = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.boolean_QMARK_,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.keyword_QMARK_,cljs.core.symbol_QMARK_,cljs.core.vector_QMARK_,cljs.core.map_QMARK_,cljs.core.list_QMARK_], null);
shadow.remote.runtime.obj_support.rank_val = (function shadow$remote$runtime$obj_support$rank_val(val){
return cljs.core.reduce_kv((function (res,idx,pred){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(val) : pred.call(null,val)))){
return cljs.core.reduced(idx);
} else {
return res;
}
}),(-1),shadow.remote.runtime.obj_support.rank_predicates);
});
shadow.remote.runtime.obj_support.smart_comp = (function shadow$remote$runtime$obj_support$smart_comp(a,b){
try{return cljs.core.compare(a,b);
}catch (e35700){if((e35700 instanceof Error)){
var e = e35700;
var ar = shadow.remote.runtime.obj_support.rank_val(a);
var br = shadow.remote.runtime.obj_support.rank_val(b);
return cljs.core.compare(ar,br);
} else {
throw e35700;

}
}});
shadow.remote.runtime.obj_support.attempt_to_sort = (function shadow$remote$runtime$obj_support$attempt_to_sort(desc,coll){
try{return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"view-order","view-order",566761574),cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(shadow.remote.runtime.obj_support.smart_comp,coll))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"sorted","sorted",-896746253)], null),true);
}catch (e35702){var e = e35702;
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"view-order","view-order",566761574),cljs.core.vec(coll)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"sorted","sorted",-896746253)], null),false);
}});
shadow.remote.runtime.obj_support.browseable_kv = (function shadow$remote$runtime$obj_support$browseable_kv(p__35703){
var map__35704 = p__35703;
var map__35704__$1 = cljs.core.__destructure_map(map__35704);
var desc = map__35704__$1;
var view_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35704__$1,new cljs.core.Keyword(null,"view-order","view-order",566761574));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35704__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__35705){
var map__35706 = p__35705;
var map__35706__$1 = cljs.core.__destructure_map(map__35706);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35706__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
var nav = clojure.datafy.nav(data,key,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(function (p__35707){
var map__35708 = p__35707;
var map__35708__$1 = cljs.core.__destructure_map(map__35708);
var msg = map__35708__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35708__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35708__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var key_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35708__$1,new cljs.core.Keyword(null,"key-limit","key-limit",259239169),(100));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35708__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var end = (function (){var x__4339__auto__ = cljs.core.count(view_order);
var y__4340__auto__ = (start + num);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){try{return shadow.remote.runtime.writer.pr_str_limit(key,key_limit);
}catch (e35710){var e = e35710;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"... print failed ..."], null);
}})(),new cljs.core.Keyword(null,"val","val",128701612),(function (){try{return shadow.remote.runtime.writer.pr_str_limit(val,val_limit);
}catch (e35713){var e = e35713;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"... print failed ..."], null);
}})()], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
}));
});
shadow.remote.runtime.obj_support.browseable_vec = (function shadow$remote$runtime$obj_support$browseable_vec(p__35718){
var map__35719 = p__35718;
var map__35719__$1 = cljs.core.__destructure_map(map__35719);
var desc = map__35719__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35719__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__35720){
var map__35721 = p__35720;
var map__35721__$1 = cljs.core.__destructure_map(map__35721);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35721__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(function (p__35722){
var map__35723 = p__35722;
var map__35723__$1 = cljs.core.__destructure_map(map__35723);
var msg = map__35723__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35723__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35723__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35723__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var end = (function (){var x__4339__auto__ = cljs.core.count(data);
var y__4340__auto__ = (start + num);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
}));
});
shadow.remote.runtime.obj_support.browseable_seq = (function shadow$remote$runtime$obj_support$browseable_seq(p__35734){
var map__35736 = p__35734;
var map__35736__$1 = cljs.core.__destructure_map(map__35736);
var desc = map__35736__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var view_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736__$1,new cljs.core.Keyword(null,"view-order","view-order",566761574));
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__35738){
var map__35739 = p__35738;
var map__35739__$1 = cljs.core.__destructure_map(map__35739);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35739__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(function (p__35740){
var map__35741 = p__35740;
var map__35741__$1 = cljs.core.__destructure_map(map__35741);
var msg = map__35741__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35741__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35741__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35741__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var end = (function (){var x__4339__auto__ = cljs.core.count(view_order);
var y__4340__auto__ = (start + num);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
}));
});
shadow.remote.runtime.obj_support.pageable_seq = (function shadow$remote$runtime$obj_support$pageable_seq(p__35746){
var map__35747 = p__35746;
var map__35747__$1 = cljs.core.__destructure_map(map__35747);
var desc = map__35747__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35747__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var seq_state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tail","tail",-1146023564),data,new cljs.core.Keyword(null,"realized","realized",-153188123),cljs.core.PersistentVector.EMPTY], null));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"seq-state-ref","seq-state-ref",869825254),seq_state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"nav","nav",719540477)], null),(function (p__35750){
var map__35751 = p__35750;
var map__35751__$1 = cljs.core.__destructure_map(map__35751);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35751__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"realized","realized",-153188123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(seq_state_ref)),idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"chunk","chunk",-1191159620)], null),(function (p__35759){
var map__35760 = p__35759;
var map__35760__$1 = cljs.core.__destructure_map(map__35760);
var msg = map__35760__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35760__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
var map__35761 = cljs.core.deref(seq_state_ref);
var map__35761__$1 = cljs.core.__destructure_map(map__35761);
var seq_state = map__35761__$1;
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35761__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var realized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35761__$1,new cljs.core.Keyword(null,"realized","realized",-153188123));
var end = (start + num);
var missing = (end - cljs.core.count(realized));
var vec__35762 = (function (){var tail__$1 = tail;
var realized__$1 = realized;
var missing__$1 = missing;
while(true){
if((!((missing__$1 > (0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail__$1,realized__$1], null);
} else {
var next = cljs.core.first(tail__$1);
if((next == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,realized__$1], null);
} else {
var G__35941 = cljs.core.rest(tail__$1);
var G__35942 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(realized__$1,next);
var G__35943 = (missing__$1 - (1));
tail__$1 = G__35941;
realized__$1 = G__35942;
missing__$1 = G__35943;
continue;
}
}
break;
}
})();
var tail__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35762,(0),null);
var realized__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35762,(1),null);
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,(function (){var x__4339__auto__ = end;
var y__4340__auto__ = cljs.core.count(realized__$1);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})());
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(realized__$1,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(seq_state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"tail","tail",-1146023564),tail__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"realized","realized",-153188123),realized__$1], 0));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"realized","realized",-153188123),cljs.core.count(realized__$1),new cljs.core.Keyword(null,"fragment","fragment",826775688),fragment,new cljs.core.Keyword(null,"more?","more?",519437444),(((cljs.core.count(realized__$1) > end)) || ((!((tail__$1 == null)))))], null);
}));
});
shadow.remote.runtime.obj_support.inspect_basic = (function shadow$remote$runtime$obj_support$inspect_basic(p__35772,obj,opts){
var map__35774 = p__35772;
var map__35774__$1 = cljs.core.__destructure_map(map__35774);
var desc = map__35774__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35774__$1,new cljs.core.Keyword(null,"data","data",-232669377));
try{if((data == null)){
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"nil","nil",99600501));
} else {
if(typeof data === 'string'){
return cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"length","length",588987862),((data).length)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if(cljs.core.boolean_QMARK_(data)){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if(typeof data === 'number'){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if((data instanceof cljs.core.Keyword)){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if((data instanceof cljs.core.Symbol)){
return cljs.core.assoc_in(cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"get-value","get-value",2108514284)], null),(function (msg){
return data;
}));
} else {
if(cljs.core.map_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_kv(shadow.remote.runtime.obj_support.attempt_to_sort(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)),cljs.core.keys(data)));
} else {
if(cljs.core.vector_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_vec(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)));
} else {
if(cljs.core.set_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_seq(shadow.remote.runtime.obj_support.attempt_to_sort(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)),data));
} else {
if(cljs.core.list_QMARK_(data)){
return shadow.remote.runtime.obj_support.browseable_seq(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.count(data)], null)),new cljs.core.Keyword(null,"view-order","view-order",566761574),cljs.core.vec(data)));
} else {
if(cljs.core.seq_QMARK_(data)){
return shadow.remote.runtime.obj_support.pageable_seq(cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"lazy-seq","lazy-seq",-1150898621)], null)));
} else {
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016));

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
}catch (e35777){var e = e35777;
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"data-type","data-type",-326421468)], null),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016));
}});
shadow.remote.runtime.obj_support.inspect_type_info = (function shadow$remote$runtime$obj_support$inspect_type_info(desc,obj,opts){
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"obj-type","obj-type",-1658555496)], null),shadow.remote.runtime.obj_support.obj_type_string(obj));
});
shadow.remote.runtime.obj_support.inspect_source_info = (function shadow$remote$runtime$obj_support$inspect_source_info(desc,obj,opts){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(desc,new cljs.core.Keyword(null,"summary","summary",380847952),cljs.core.merge,cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"label","label",1718410804)], null)));
});
shadow.remote.runtime.obj_support.add_summary_op = (function shadow$remote$runtime$obj_support$add_summary_op(p__35812){
var map__35816 = p__35812;
var map__35816__$1 = cljs.core.__destructure_map(map__35816);
var desc = map__35816__$1;
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (msg){
return summary;
}));
});
shadow.remote.runtime.obj_support.default_describe = (function shadow$remote$runtime$obj_support$default_describe(o,opts){
var data = clojure.datafy.datafy(o);
return shadow.remote.runtime.obj_support.add_summary_op(shadow.remote.runtime.obj_support.inspect_source_info(shadow.remote.runtime.obj_support.inspect_type_info(shadow.remote.runtime.obj_support.inspect_basic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"added-at","added-at",-352499434),new cljs.core.Keyword(null,"added-at","added-at",-352499434).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"datafied","datafied",2076148104),(!((data === o)))], null),new cljs.core.Keyword(null,"handlers","handlers",79528781),(function (){var G__35823 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"str","str",1089608819),(function (p1__35818_SHARP_){
return shadow.remote.runtime.obj_support.as_str(o,p1__35818_SHARP_);
}),new cljs.core.Keyword(null,"edn","edn",1317840885),(function (p1__35819_SHARP_){
return shadow.remote.runtime.obj_support.as_edn(o,p1__35819_SHARP_);
}),new cljs.core.Keyword(null,"edn-limit","edn-limit",1353115803),(function (p1__35820_SHARP_){
return shadow.remote.runtime.obj_support.as_edn_limit(o,p1__35820_SHARP_);
})], null);
var G__35823__$1 = ((((cljs.core.coll_QMARK_(o)) || (cljs.core.seq_QMARK_(o))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35823,new cljs.core.Keyword(null,"pprint","pprint",1220198395),(function (p1__35821_SHARP_){
return shadow.remote.runtime.obj_support.as_pprint(o,p1__35821_SHARP_);
})):G__35823);
if(shadow.remote.runtime.obj_support.exception_QMARK_(o)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35823__$1,new cljs.core.Keyword(null,"ex-str","ex-str",971148789),(function (p1__35822_SHARP_){
return shadow.remote.runtime.obj_support.as_ex_str(o,p1__35822_SHARP_);
}));
} else {
return G__35823__$1;
}
})()], null),o,opts),o,opts),o,opts));
});
(shadow.remote.runtime.api.Inspectable["_"] = true);

(shadow.remote.runtime.api.describe["_"] = (function (o,opts){
return shadow.remote.runtime.obj_support.default_describe(o,opts);
}));

(shadow.remote.runtime.api.Inspectable["null"] = true);

(shadow.remote.runtime.api.describe["null"] = (function (o,opts){
return shadow.remote.runtime.obj_support.default_describe(o,opts);
}));
shadow.remote.runtime.obj_support.add_supports = (function shadow$remote$runtime$obj_support$add_supports(p__35841){
var map__35842 = p__35841;
var map__35842__$1 = cljs.core.__destructure_map(map__35842);
var desc = map__35842__$1;
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
return cljs.core.assoc_in(desc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"supports","supports",1501242067)], null),cljs.core.set(cljs.core.keys(handlers)));
});
shadow.remote.runtime.obj_support.ensure_descriptor = (function shadow$remote$runtime$obj_support$ensure_descriptor(p__35843){
var map__35844 = p__35843;
var map__35844__$1 = cljs.core.__destructure_map(map__35844);
var entry = map__35844__$1;
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35844__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var obj_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35844__$1,new cljs.core.Keyword(null,"obj-info","obj-info",-373842651));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35844__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
if(cljs.core.truth_(desc)){
return entry;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"desc","desc",2093485764),shadow.remote.runtime.obj_support.add_supports(shadow.remote.runtime.api.describe(obj,obj_info)));
}
});
shadow.remote.runtime.obj_support.get_tap_history = (function shadow$remote$runtime$obj_support$get_tap_history(p__35847,num){
var map__35848 = p__35847;
var map__35848__$1 = cljs.core.__destructure_map(map__35848);
var svc = map__35848__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35848__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__35846_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__35846_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35845_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__35845_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
});
shadow.remote.runtime.obj_support.obj_describe_STAR_ = (function shadow$remote$runtime$obj_support$obj_describe_STAR_(p__35854,oid){
var map__35855 = p__35854;
var map__35855__$1 = cljs.core.__destructure_map(map__35855);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)),oid)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null),shadow.remote.runtime.obj_support.ensure_descriptor);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"access-at","access-at",-1487162729)], null),shadow.remote.runtime.obj_support.now());

var summary = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"summary","summary",380847952)], null));
return summary;
} else {
return null;
}
});
shadow.remote.runtime.obj_support.obj_describe = (function shadow$remote$runtime$obj_support$obj_describe(p__35858,p__35859){
var map__35860 = p__35858;
var map__35860__$1 = cljs.core.__destructure_map(map__35860);
var svc = map__35860__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35860__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35861 = p__35859;
var map__35861__$1 = cljs.core.__destructure_map(map__35861);
var msg = map__35861__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
var temp__5751__auto__ = shadow.remote.runtime.obj_support.obj_describe_STAR_(svc,oid);
if(cljs.core.truth_(temp__5751__auto__)){
var summary = temp__5751__auto__;
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-summary","obj-summary",-1372191064),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),summary], null));
} else {
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-not-found","obj-not-found",1577257696),new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
}
});
shadow.remote.runtime.obj_support.obj_request = (function shadow$remote$runtime$obj_support$obj_request(p__35866,p__35867){
var map__35868 = p__35866;
var map__35868__$1 = cljs.core.__destructure_map(map__35868);
var this$ = map__35868__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35873 = p__35867;
var map__35873__$1 = cljs.core.__destructure_map(map__35873);
var msg = map__35873__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35873__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
var request_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35873__$1,new cljs.core.Keyword(null,"request-op","request-op",1472997246));
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)),oid)))){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-not-found","obj-not-found",1577257696),new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null),shadow.remote.runtime.obj_support.ensure_descriptor);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"access-at","access-at",-1487162729)], null),shadow.remote.runtime.obj_support.now());

var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null));
var request_fn = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"handlers","handlers",79528781),request_op], null));
if(cljs.core.not(request_fn)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request-not-supported","obj-request-not-supported",93907126),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"request-op","request-op",1472997246),request_op], null));
} else {
try{var result = (request_fn.cljs$core$IFn$_invoke$arity$1 ? request_fn.cljs$core$IFn$_invoke$arity$1(msg) : request_fn.call(null,msg));
if((!(shadow.remote.runtime.obj_support.obj_ref_QMARK_(result)))){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-result","obj-result",-486300152),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"result","result",1415092211),result], null));
} else {
var new_oid = shadow.remote.runtime.obj_support.next_oid();
var ts = shadow.remote.runtime.obj_support.now();
var new_entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oid","oid",-768692334),new_oid,new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"access-at","access-at",-1487162729),ts,new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"added-at","added-at",-352499434),ts,new cljs.core.Keyword(null,"added-via","added-via",1525812109),oid], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new_oid], null),new_entry);

var reply_msg = (function (){var G__35889 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-result-ref","obj-result-ref",1537374891),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),new_oid], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(msg))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35889,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(this$,new_oid));
} else {
return G__35889;
}
})();
return shadow.remote.runtime.shared.reply(runtime,msg,reply_msg);
}
}catch (e35885){var e = e35885;
console.warn("action-request-action failed",new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(entry),e);

return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request-failed","obj-request-failed",-1782005406),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),(function (){var G__35886 = this$;
var G__35887 = e;
var G__35888 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null);
return (shadow.remote.runtime.obj_support.register.cljs$core$IFn$_invoke$arity$3 ? shadow.remote.runtime.obj_support.register.cljs$core$IFn$_invoke$arity$3(G__35886,G__35887,G__35888) : shadow.remote.runtime.obj_support.register.call(null,G__35886,G__35887,G__35888));
})()], null));
}}
}
});
shadow.remote.runtime.obj_support.obj_forget = (function shadow$remote$runtime$obj_support$obj_forget(p__35899,p__35900){
var map__35901 = p__35899;
var map__35901__$1 = cljs.core.__destructure_map(map__35901);
var svc = map__35901__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35901__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35902 = p__35900;
var map__35902__$1 = cljs.core.__destructure_map(map__35902);
var msg = map__35902__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35902__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oid], 0));
});
shadow.remote.runtime.obj_support.obj_forget_all = (function shadow$remote$runtime$obj_support$obj_forget_all(p__35903,msg){
var map__35904 = p__35903;
var map__35904__$1 = cljs.core.__destructure_map(map__35904);
var svc = map__35904__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY);
});
shadow.remote.runtime.obj_support.basic_gc_BANG_ = (function shadow$remote$runtime$obj_support$basic_gc_BANG_(state){
var objs_to_drop = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((100),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"access-at","access-at",-1487162729),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(state))))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,oid){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.dissoc,oid);
}),state,objs_to_drop);
});
shadow.remote.runtime.obj_support.start = (function shadow$remote$runtime$obj_support$start(runtime){
var state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"id-seq-ref","id-seq-ref",-98357047),(0)], null));
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),state_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.obj-support","ext","shadow.remote.runtime.obj-support/ext",-1896569346),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"obj-describe","obj-describe",-34922904),(function (p1__35905_SHARP_){
return shadow.remote.runtime.obj_support.obj_describe(svc,p1__35905_SHARP_);
}),new cljs.core.Keyword(null,"obj-request","obj-request",-1709325811),(function (p1__35906_SHARP_){
return shadow.remote.runtime.obj_support.obj_request(svc,p1__35906_SHARP_);
}),new cljs.core.Keyword(null,"obj-forget","obj-forget",2003566115),(function (p1__35907_SHARP_){
return shadow.remote.runtime.obj_support.obj_forget(svc,p1__35907_SHARP_);
}),new cljs.core.Keyword(null,"obj-forget-all","obj-forget-all",1418682131),(function (p1__35908_SHARP_){
return shadow.remote.runtime.obj_support.obj_forget_all(svc,p1__35908_SHARP_);
})], null),new cljs.core.Keyword(null,"on-idle","on-idle",2044706602),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_ref,shadow.remote.runtime.obj_support.basic_gc_BANG_);
})], null));

return svc;
});
shadow.remote.runtime.obj_support.register = (function shadow$remote$runtime$obj_support$register(p__35909,obj,obj_info){
var map__35910 = p__35909;
var map__35910__$1 = cljs.core.__destructure_map(map__35910);
var svc = map__35910__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35910__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var oid = shadow.remote.runtime.obj_support.next_oid();
if((!(((cljs.core.vector_QMARK_(obj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shadow.remote","wrap","shadow.remote/wrap",996267199),cljs.core.first(obj))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(obj),(3))))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,shadow.remote.runtime.obj_support.register_STAR_,oid,obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj_info], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,shadow.remote.runtime.obj_support.register_STAR_,oid,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj_info,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj,(2))], 0))], 0));
}

return oid;
});
shadow.remote.runtime.obj_support.get_ref = (function shadow$remote$runtime$obj_support$get_ref(p__35915,obj_id){
var map__35916 = p__35915;
var map__35916__$1 = cljs.core.__destructure_map(map__35916);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35916__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),obj_id], null));
});
shadow.remote.runtime.obj_support.stop = (function shadow$remote$runtime$obj_support$stop(p__35917){
var map__35918 = p__35917;
var map__35918__$1 = cljs.core.__destructure_map(map__35918);
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35918__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.obj-support","ext","shadow.remote.runtime.obj-support/ext",-1896569346));
});

//# sourceMappingURL=shadow.remote.runtime.obj_support.js.map
