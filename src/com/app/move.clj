(ns com.app.move
  (:require [com.app.hepler :refer [move-step]]))

(defn move
  "[board-info path] -> 주어진 경로로 플레이어 이동 후 보드 반환"
  [{:keys [board player-pos goal-pos]} path]
  (reduce
   (fn [{:keys [board player-pos goal-pos]} dir]
     (let [[x y]   player-pos
           [nx ny] (move-step board player-pos dir
                              (count (first board)) (count board))
           board'  (-> board
                       (assoc-in [y x 1] :none)
                       (assoc-in [ny nx 1] :player))]
       {:board      board'
        :player-pos [nx ny]
        :goal-pos   goal-pos}))
   {:board      board
    :player-pos player-pos
    :goal-pos   goal-pos}
   path))
