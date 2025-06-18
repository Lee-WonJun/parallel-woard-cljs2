(ns com.app.move
  (:require [com.app.helper :refer [move-step]]))

(defn move
  "[board-info path] -> 주어진 경로로 플레이어 이동 후 보드 반환"
  [{:keys [board player-pos goal-pos]} path]
  (let [width (count (first board))
        height (count board)
        final-pos (reduce
                   (fn [pos dir]
                     (move-step board pos dir width height))
                   player-pos
                   path)
        ;; 기존 플레이어 위치에서 overlay 제거
        board-cleared (assoc-in board [(second player-pos) (first player-pos) 1] :none)
        ;; 새 위치에 플레이어 overlay 추가
        board-updated (assoc-in board-cleared [(second final-pos) (first final-pos) 1] :player)]
    {:board      board-updated
     :player-pos final-pos
     :goal-pos   goal-pos}))
