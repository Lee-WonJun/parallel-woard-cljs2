goog.provide('com.app.generator');
/**
 * [nums] -> 주어진 숫자 시퀀스 누적합 벡터
 */
com.app.generator.cumulative_sums = (function com$app$generator$cumulative_sums(nums){
return cljs.core.vec(cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,nums));
});
/**
 * [cum-w] 누적합 벡터로부터 확률적 인덱스 선택
 */
com.app.generator.weighted_rand_index = (function com$app$generator$weighted_rand_index(cum_w){
var total = cljs.core.peek(cum_w);
var r = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(total);
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,w){
if((w > r)){
return i;
} else {
return null;
}
}),cum_w));
});
/**
 * 랜덤 이동 시퀀스 생성: ([count] | ([count weights]))
 */
com.app.generator.create_rand_move = (function com$app$generator$create_rand_move(var_args){
var G__32889 = arguments.length;
switch (G__32889) {
case 1:
return com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$1 = (function (count){
return com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$2(count,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((4),(function (){
return ((1) + cljs.core.rand_int((10)));
})));
}));

(com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$2 = (function (count,weights){
var cum_w = com.app.generator.cumulative_sums(weights);
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.app.const$.directions,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return com.app.generator.weighted_rand_index(cum_w);
})))));
}));

(com.app.generator.create_rand_move.cljs$lang$maxFixedArity = 2);

/**
 * [width height player-pos walls-pos route]로 보드 생성
 */
com.app.generator.create_board = (function com$app$generator$create_board(width,height,player_pos,walls_pos,route){
var empty_cell = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"none","none",1333468478)], null);
var empty_row = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(width,empty_cell));
var base_board = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(height,empty_row));
var b_walls = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (b,pos){
return com.app.helper.put_base(b,pos,new cljs.core.Keyword(null,"wall","wall",-787661558),width,height);
}),base_board,walls_pos);
var b_player = com.app.helper.put_overlay(b_walls,player_pos,new cljs.core.Keyword(null,"player","player",-97687400),width,height);
var goal_pos = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pos,dir){
return com.app.helper.move_step(b_player,pos,dir,width,height);
}),player_pos,route);
var b_goal = com.app.helper.put_base(b_player,goal_pos,new cljs.core.Keyword(null,"goal","goal",-2073396501),width,height);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),b_goal,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),player_pos,new cljs.core.Keyword(null,"goal-pos","goal-pos",-2138665454),goal_pos], null);
});
/**
 * 랜덤한 벽 위치들을 생성
 */
com.app.generator.generate_random_walls = (function com$app$generator$generate_random_walls(width,height,player_pos,wall_density){
var total_cells = (width * height);
var wall_count = ((total_cells * wall_density) | (0));
var all_positions = (function (){var iter__4652__auto__ = (function com$app$generator$generate_random_walls_$_iter__32929(s__32930){
return (new cljs.core.LazySeq(null,(function (){
var s__32930__$1 = s__32930;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32930__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__32930__$1,x,xs__6308__auto__,temp__5753__auto__,total_cells,wall_count){
return (function com$app$generator$generate_random_walls_$_iter__32929_$_iter__32933(s__32934){
return (new cljs.core.LazySeq(null,((function (s__32930__$1,x,xs__6308__auto__,temp__5753__auto__,total_cells,wall_count){
return (function (){
var s__32934__$1 = s__32934;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__32934__$1);
if(temp__5753__auto____$1){
var s__32934__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32934__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__32934__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__32936 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__32935 = (0);
while(true){
if((i__32935 < size__4651__auto__)){
var y = cljs.core._nth(c__4650__auto__,i__32935);
cljs.core.chunk_append(b__32936,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__33020 = (i__32935 + (1));
i__32935 = G__33020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32936),com$app$generator$generate_random_walls_$_iter__32929_$_iter__32933(cljs.core.chunk_rest(s__32934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32936),null);
}
} else {
var y = cljs.core.first(s__32934__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),com$app$generator$generate_random_walls_$_iter__32929_$_iter__32933(cljs.core.rest(s__32934__$2)));
}
} else {
return null;
}
break;
}
});})(s__32930__$1,x,xs__6308__auto__,temp__5753__auto__,total_cells,wall_count))
,null,null));
});})(s__32930__$1,x,xs__6308__auto__,temp__5753__auto__,total_cells,wall_count))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,com$app$generator$generate_random_walls_$_iter__32929(cljs.core.rest(s__32930__$1)));
} else {
var G__33026 = cljs.core.rest(s__32930__$1);
s__32930__$1 = G__33026;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width));
})();
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(wall_count,cljs.core.shuffle(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__32900_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__32900_SHARP_,player_pos);
}),all_positions)));
});
/**
 * [move-count configs] -> 여러 보드 생성
 */
com.app.generator.init_boards = (function com$app$generator$init_boards(move_count,configs){
var global_route = com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$1(move_count);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__32992){
var map__32994 = p__32992;
var map__32994__$1 = cljs.core.__destructure_map(map__32994);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32994__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32994__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var player_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32994__$1,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794));
var walls_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32994__$1,new cljs.core.Keyword(null,"walls-pos","walls-pos",1016436793));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32994__$1,new cljs.core.Keyword(null,"route","route",329891309));
var wall_density = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32994__$1,new cljs.core.Keyword(null,"wall-density","wall-density",1145919217),0.25);
var r = (function (){var or__4253__auto__ = route;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return global_route;
}
})();
var pp = (function (){var or__4253__auto__ = player_pos;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(width),cljs.core.rand_int(height)], null);
}
})();
var wp = (function (){var or__4253__auto__ = walls_pos;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return com.app.generator.generate_random_walls(width,height,pp,wall_density);
}
})();
return com.app.generator.create_board(width,height,pp,wp,r);
}),configs);
});

//# sourceMappingURL=com.app.generator.js.map
