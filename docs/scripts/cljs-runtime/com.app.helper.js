goog.provide('com.app.helper');
/**
 * [(x y) width height] -> boolean
 */
com.app.helper.within_bounds_QMARK_ = (function com$app$helper$within_bounds_QMARK_(p__32760,width,height){
var vec__32761 = p__32760;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32761,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32761,(1),null);
return ((((((0) <= x)) && ((x <= (width - (1)))))) && (((((0) <= y)) && ((y <= (height - (1)))))));
});
/**
 * Bounds-checked로 보드 셀을 안전하게 갱신함
 */
com.app.helper.update_cell = (function com$app$helper$update_cell(board,p__32779,f,width,height){
var vec__32780 = p__32779;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32780,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32780,(1),null);
if(com.app.helper.within_bounds_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),width,height)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),f);
} else {
return board;
}
});
/**
 * 보드 b의 [x y] 위치에 base 타입 업데이트
 */
com.app.helper.put_base = (function com$app$helper$put_base(board,pos,base,width,height){
return com.app.helper.update_cell(board,pos,(function (p__32783){
var vec__32785 = p__32783;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32785,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32785,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base,o], null);
}),width,height);
});
/**
 * 보드 b의 [x y] 위치에 overlay 타입 업데이트
 */
com.app.helper.put_overlay = (function com$app$helper$put_overlay(board,pos,overlay,width,height){
return com.app.helper.update_cell(board,pos,(function (p__32811){
var vec__32814 = p__32811;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32814,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32814,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,overlay], null);
}),width,height);
});
/**
 * 현재 pos에서 dir로 한 칸 이동. 벽·bounds 검사 포함
 */
com.app.helper.move_step = (function com$app$helper$move_step(board,p__32835,dir,width,height){
var vec__32836 = p__32835;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836,(1),null);
var vec__32845 = (com.app.const$.dir_deltas.cljs$core$IFn$_invoke$arity$1 ? com.app.const$.dir_deltas.cljs$core$IFn$_invoke$arity$1(dir) : com.app.const$.dir_deltas.call(null,dir));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845,(1),null);
var new_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null);
if(com.app.helper.within_bounds_QMARK_(new_pos,width,height)){
var cell_base = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(new_pos),cljs.core.first(new_pos),(0)], null),new cljs.core.Keyword(null,"wall","wall",-787661558));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_base,new cljs.core.Keyword(null,"wall","wall",-787661558))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
return new_pos;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});

//# sourceMappingURL=com.app.helper.js.map
