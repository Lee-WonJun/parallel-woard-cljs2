goog.provide('com.app.move');
/**
 * [board-info path] -> 주어진 경로로 플레이어 이동 후 보드 반환
 */
com.app.move.move = (function com$app$move$move(p__32978,path){
var map__32979 = p__32978;
var map__32979__$1 = cljs.core.__destructure_map(map__32979);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32979__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var player_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32979__$1,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794));
var goal_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32979__$1,new cljs.core.Keyword(null,"goal-pos","goal-pos",-2138665454));
var width = cljs.core.count(cljs.core.first(board));
var height = cljs.core.count(board);
var final_pos = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pos,dir){
return com.app.helper.move_step(board,pos,dir,width,height);
}),player_pos,path);
var board_cleared = cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(player_pos),cljs.core.first(player_pos),(1)], null),new cljs.core.Keyword(null,"none","none",1333468478));
var board_updated = cljs.core.assoc_in(board_cleared,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(final_pos),cljs.core.first(final_pos),(1)], null),new cljs.core.Keyword(null,"player","player",-97687400));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),board_updated,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),final_pos,new cljs.core.Keyword(null,"goal-pos","goal-pos",-2138665454),goal_pos], null);
});

//# sourceMappingURL=com.app.move.js.map
