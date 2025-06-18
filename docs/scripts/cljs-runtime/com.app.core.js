goog.provide('com.app.core');
com.app.core.key_mappings = cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.UP,new cljs.core.Keyword(null,"up","up",-269712113),goog.events.KeyCodes.DOWN,new cljs.core.Keyword(null,"down","down",1565245570),goog.events.KeyCodes.LEFT,new cljs.core.Keyword(null,"left","left",-399115937),goog.events.KeyCodes.RIGHT,new cljs.core.Keyword(null,"right","right",-452581833),goog.events.KeyCodes.W,new cljs.core.Keyword(null,"up","up",-269712113),goog.events.KeyCodes.S,new cljs.core.Keyword(null,"down","down",1565245570),goog.events.KeyCodes.A,new cljs.core.Keyword(null,"left","left",-399115937),goog.events.KeyCodes.D,new cljs.core.Keyword(null,"right","right",-452581833)]);
com.app.core.app = (function com$app$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.components.game_screen], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.components.completion_modal], null)], null);
});
com.app.core.handle_keydown = (function com$app$core$handle_keydown(event){
var keycode = event.keyCode;
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.app.core.key_mappings,keycode);
var game_status = new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state));
if(cljs.core.truth_(direction)){
event.preventDefault();

return com.app.state.add_move_BANG_(direction);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keycode,goog.events.KeyCodes.SPACE)){
event.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_status,new cljs.core.Keyword(null,"completed","completed",-486056503))){
return com.app.state.next_level_BANG_();
} else {
return com.app.state.undo_move_BANG_();
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keycode,goog.events.KeyCodes.BACKSPACE)){
event.preventDefault();

return com.app.state.reset_moves_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keycode,goog.events.KeyCodes.R)){
event.preventDefault();

return com.app.state.reset_level_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keycode,goog.events.KeyCodes.H)){
event.preventDefault();

return com.app.state.toggle_solution_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keycode,goog.events.KeyCodes.N)){
event.preventDefault();

if((new cljs.core.Keyword(null,"current-level","current-level",-11925890).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state)) < (10))){
return com.app.state.next_level_BANG_();
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keycode,goog.events.KeyCodes.P)){
event.preventDefault();

if((new cljs.core.Keyword(null,"current-level","current-level",-11925890).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.state.game_state)) > (1))){
return com.app.state.prev_level_BANG_();
} else {
return null;
}
} else {
return null;
}
}
}
}
}
}
}
});
com.app.core.setup_keyboard_listeners = (function com$app$core$setup_keyboard_listeners(){
return goog.events.listen(document,goog.events.EventType.KEYDOWN,com.app.core.handle_keydown);
});
com.app.core.init_game_BANG_ = (function com$app$core$init_game_BANG_(){
com.app.state.reset_level_BANG_();

com.app.core.setup_keyboard_listeners();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83C\uDFAE PARALLEL WOARD game has started!"], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83D\uDCA1 Click the 'How to Play' button to learn how to play!"], 0));
});
com.app.core.mount_app_BANG_ = (function com$app$core$mount_app_BANG_(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.core.app], null),document.getElementById("app"));
});
com.app.core.run = (function com$app$core$run(){
com.app.core.init_game_BANG_();

return com.app.core.mount_app_BANG_();
});
goog.exportSymbol('com.app.core.run', com.app.core.run);
com.app.core.start_BANG_ = (function com$app$core$start_BANG_(){
return com.app.core.mount_app_BANG_();
});

//# sourceMappingURL=com.app.core.js.map
