goog.provide('com.app.state');
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.state !== 'undefined') && (typeof com.app.state.game_state !== 'undefined')){
} else {
com.app.state.game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"move-count","move-count",1189091840),new cljs.core.Keyword(null,"player-inputs","player-inputs",135540065),new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"show-solution","show-solution",-382546807),new cljs.core.Keyword(null,"show-help","show-help",381934605),new cljs.core.Keyword(null,"updated-boards","updated-boards",1247883446),new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword(null,"current-level","current-level",-11925890),new cljs.core.Keyword(null,"best-scores","best-scores",-1917800033)],[(0),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"playing","playing",70013335),cljs.core.PersistentVector.EMPTY,false,false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(1),cljs.core.PersistentArrayMap.EMPTY]));
}
/**
 * 현재 레벨을 초기화
 */
com.app.state.reset_level_BANG_ = (function com$app$state$reset_level_BANG_(){
var level = new cljs.core.Keyword(null,"current-level","current-level",-11925890).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
var stage = com.app.stages.get_stage(level);
if(cljs.core.truth_(stage)){
var move_count = new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(stage);
var configs = new cljs.core.Keyword(null,"configs","configs",1884039583).cljs$core$IFn$_invoke$arity$1(stage);
var route = com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$1(move_count);
var boards = com.app.generator.init_boards(move_count,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45466_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45466_SHARP_,new cljs.core.Keyword(null,"route","route",329891309),route);
}),configs));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.app.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"boards","boards",1912049694),boards,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"updated-boards","updated-boards",1247883446),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"player-inputs","player-inputs",135540065),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"show-solution","show-solution",-382546807),false,new cljs.core.Keyword(null,"show-help","show-help",381934605),false,new cljs.core.Keyword(null,"move-count","move-count",1189091840),(0),new cljs.core.Keyword(null,"current-route","current-route",2067529448),route], 0));
} else {
return null;
}
});
/**
 * 플레이어 입력 추가
 */
com.app.state.add_move_BANG_ = (function com$app$state$add_move_BANG_(direction){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state)),new cljs.core.Keyword(null,"playing","playing",70013335))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.app.state.game_state,cljs.core.update,new cljs.core.Keyword(null,"player-inputs","player-inputs",135540065),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([direction], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.update,new cljs.core.Keyword(null,"move-count","move-count",1189091840),cljs.core.inc);

return (com.app.state.check_game_completion_BANG_.cljs$core$IFn$_invoke$arity$0 ? com.app.state.check_game_completion_BANG_.cljs$core$IFn$_invoke$arity$0() : com.app.state.check_game_completion_BANG_.call(null));
} else {
return null;
}
});
/**
 * 마지막 이동 취소
 */
com.app.state.undo_move_BANG_ = (function com$app$state$undo_move_BANG_(){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state)),new cljs.core.Keyword(null,"playing","playing",70013335));
if(and__4251__auto__){
return cljs.core.not_empty(new cljs.core.Keyword(null,"player-inputs","player-inputs",135540065).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state)));
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.update,new cljs.core.Keyword(null,"player-inputs","player-inputs",135540065),cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.update,new cljs.core.Keyword(null,"move-count","move-count",1189091840),cljs.core.dec);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"updated-boards","updated-boards",1247883446),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
/**
 * 모든 이동 초기화
 */
com.app.state.reset_moves_BANG_ = (function com$app$state$reset_moves_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.app.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"player-inputs","player-inputs",135540065),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"updated-boards","updated-boards",1247883446),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"move-count","move-count",1189091840),(0),new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335)], 0));
});
/**
 * 다음 레벨로 이동
 */
com.app.state.next_level_BANG_ = (function com$app$state$next_level_BANG_(){
var current = new cljs.core.Keyword(null,"current-level","current-level",-11925890).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
var next_level = (current + (1));
if((next_level <= com.app.stages.max_level())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-level","current-level",-11925890),next_level);

return com.app.state.reset_level_BANG_();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"all-completed","all-completed",-1823987426));
}
});
/**
 * 이전 레벨로 이동
 */
com.app.state.prev_level_BANG_ = (function com$app$state$prev_level_BANG_(){
var current = new cljs.core.Keyword(null,"current-level","current-level",-11925890).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
var prev_level = (current - (1));
if((prev_level >= (1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-level","current-level",-11925890),prev_level);

return com.app.state.reset_level_BANG_();
} else {
return null;
}
});
/**
 * 솔루션 표시 토글
 */
com.app.state.toggle_solution_BANG_ = (function com$app$state$toggle_solution_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.update,new cljs.core.Keyword(null,"show-solution","show-solution",-382546807),cljs.core.not);
});
/**
 * 도움말 표시 토글
 */
com.app.state.toggle_help_BANG_ = (function com$app$state$toggle_help_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.update,new cljs.core.Keyword(null,"show-help","show-help",381934605),cljs.core.not);
});
/**
 * 게임 완료 상태 확인
 */
com.app.state.check_game_completion_BANG_ = (function com$app$state$check_game_completion_BANG_(){
var boards = new cljs.core.Keyword(null,"boards","boards",1912049694).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
var inputs = new cljs.core.Keyword(null,"player-inputs","player-inputs",135540065).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
if(cljs.core.seq(boards)){
var updated_boards = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45467_SHARP_){
return com.app.move.move(p1__45467_SHARP_,inputs);
}),boards);
var all_completed_QMARK_ = cljs.core.every_QMARK_((function (p1__45468_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(p1__45468_SHARP_),new cljs.core.Keyword(null,"goal-pos","goal-pos",-2138665454).cljs$core$IFn$_invoke$arity$1(p1__45468_SHARP_));
}),updated_boards);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"updated-boards","updated-boards",1247883446),updated_boards);

if(all_completed_QMARK_){
var level = new cljs.core.Keyword(null,"current-level","current-level",-11925890).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
var move_count = new cljs.core.Keyword(null,"move-count","move-count",1189091840).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
var current_best = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.app.state.game_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"best-scores","best-scores",-1917800033),level], null),(9999));
if((move_count < current_best)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"best-scores","best-scores",-1917800033),level], null),move_count);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"completed","completed",-486056503));
} else {
return null;
}
} else {
return null;
}
});
com.app.state.get_current_stage = (function com$app$state$get_current_stage(){

return com.app.stages.get_stage(new cljs.core.Keyword(null,"current-level","current-level",-11925890).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state)));
});
com.app.state.get_updated_boards = (function com$app$state$get_updated_boards(){

var updated_boards = new cljs.core.Keyword(null,"updated-boards","updated-boards",1247883446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
var boards = new cljs.core.Keyword(null,"boards","boards",1912049694).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
var inputs = new cljs.core.Keyword(null,"player-inputs","player-inputs",135540065).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
if(cljs.core.seq(updated_boards)){
return updated_boards;
} else {
if(((cljs.core.seq(boards)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,boards)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45469_SHARP_){
return com.app.move.move(p1__45469_SHARP_,inputs);
}),boards);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
});
com.app.state.print_board_correct = (function com$app$state$print_board_correct(){

var state = cljs.core.deref(com.app.state.game_state);
var boards = com.app.state.get_updated_boards();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["=== \uAC8C\uC784 \uC0C1\uD0DC ==="], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uB808\uBCA8:",new cljs.core.Keyword(null,"current-level","current-level",-11925890).cljs$core$IFn$_invoke$arity$1(state)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uC774\uB3D9 \uD69F\uC218:",new cljs.core.Keyword(null,"move-count","move-count",1189091840).cljs$core$IFn$_invoke$arity$1(state)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uC0C1\uD0DC:",new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(state)], 0));

var temp__5753__auto___45490 = cljs.core.first(boards);
if(cljs.core.truth_(temp__5753__auto___45490)){
var first_board_45491 = temp__5753__auto___45490;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD50C\uB808\uC774\uC5B4 \uC704\uCE58:",new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(first_board_45491)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uBAA9\uD45C \uC704\uCE58:",new cljs.core.Keyword(null,"goal-pos","goal-pos",-2138665454).cljs$core$IFn$_invoke$arity$1(first_board_45491)], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["=== \uBCF4\uB4DC ==="], 0));

var temp__5753__auto___45492 = cljs.core.first(boards);
if(cljs.core.truth_(temp__5753__auto___45492)){
var first_board_45493 = temp__5753__auto___45492;
var board_45494 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(first_board_45493);
var seq__45470_45495 = cljs.core.seq(board_45494);
var chunk__45471_45496 = null;
var count__45472_45497 = (0);
var i__45473_45498 = (0);
while(true){
if((i__45473_45498 < count__45472_45497)){
var row_45499 = chunk__45471_45496.cljs$core$IIndexed$_nth$arity$2(null,i__45473_45498);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__45470_45495,chunk__45471_45496,count__45472_45497,i__45473_45498,row_45499,board_45494,first_board_45493,temp__5753__auto___45492,state,boards){
return (function (p__45482){
var vec__45483 = p__45482;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45483,(0),null);
var overlay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45483,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlay,new cljs.core.Keyword(null,"player","player",-97687400))){
return "P";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base,new cljs.core.Keyword(null,"wall","wall",-787661558))){
return "\u2588";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base,new cljs.core.Keyword(null,"goal","goal",-2073396501))){
return "G";
} else {
return ".";

}
}
}
});})(seq__45470_45495,chunk__45471_45496,count__45472_45497,i__45473_45498,row_45499,board_45494,first_board_45493,temp__5753__auto___45492,state,boards))
,row_45499))], 0));


var G__45500 = seq__45470_45495;
var G__45501 = chunk__45471_45496;
var G__45502 = count__45472_45497;
var G__45503 = (i__45473_45498 + (1));
seq__45470_45495 = G__45500;
chunk__45471_45496 = G__45501;
count__45472_45497 = G__45502;
i__45473_45498 = G__45503;
continue;
} else {
var temp__5753__auto___45504__$1 = cljs.core.seq(seq__45470_45495);
if(temp__5753__auto___45504__$1){
var seq__45470_45505__$1 = temp__5753__auto___45504__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45470_45505__$1)){
var c__4679__auto___45506 = cljs.core.chunk_first(seq__45470_45505__$1);
var G__45507 = cljs.core.chunk_rest(seq__45470_45505__$1);
var G__45508 = c__4679__auto___45506;
var G__45509 = cljs.core.count(c__4679__auto___45506);
var G__45510 = (0);
seq__45470_45495 = G__45507;
chunk__45471_45496 = G__45508;
count__45472_45497 = G__45509;
i__45473_45498 = G__45510;
continue;
} else {
var row_45511 = cljs.core.first(seq__45470_45505__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__45470_45495,chunk__45471_45496,count__45472_45497,i__45473_45498,row_45511,seq__45470_45505__$1,temp__5753__auto___45504__$1,board_45494,first_board_45493,temp__5753__auto___45492,state,boards){
return (function (p__45486){
var vec__45487 = p__45486;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45487,(0),null);
var overlay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45487,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlay,new cljs.core.Keyword(null,"player","player",-97687400))){
return "P";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base,new cljs.core.Keyword(null,"wall","wall",-787661558))){
return "\u2588";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base,new cljs.core.Keyword(null,"goal","goal",-2073396501))){
return "G";
} else {
return ".";

}
}
}
});})(seq__45470_45495,chunk__45471_45496,count__45472_45497,i__45473_45498,row_45511,seq__45470_45505__$1,temp__5753__auto___45504__$1,board_45494,first_board_45493,temp__5753__auto___45492,state,boards))
,row_45511))], 0));


var G__45512 = cljs.core.next(seq__45470_45505__$1);
var G__45513 = null;
var G__45514 = (0);
var G__45515 = (0);
seq__45470_45495 = G__45512;
chunk__45471_45496 = G__45513;
count__45472_45497 = G__45514;
i__45473_45498 = G__45515;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["==============="], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["=== \uB3C4\uC6C0\uB9D0 ==="], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uB3C4\uC6C0\uB9D0 \uD45C\uC2DC:",new cljs.core.Keyword(null,"show-help","show-help",381934605).cljs$core$IFn$_invoke$arity$1(state)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["==============="], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));
});
com.app.state.force_refresh_boards_BANG_ = (function com$app$state$force_refresh_boards_BANG_(){

cljs.core.PersistentVector.EMPTY;

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.state.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"updated-boards","updated-boards",1247883446),cljs.core.PersistentVector.EMPTY);

return com.app.state.check_game_completion_BANG_();
});

//# sourceMappingURL=com.app.state.js.map
