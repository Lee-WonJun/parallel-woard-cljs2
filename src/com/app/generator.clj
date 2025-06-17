(ns com.app.generator
  (:require [clojure.core :as core]
            [com.app.const :refer [directions]]
            [com.app.hepler :refer [put-base put-overlay move-step]]))

(defn cumulative-sums
  "[nums] -> 주어진 숫자 시퀀스 누적합 벡터"
  [nums]
  (vec (reductions + nums)))

(defn weighted-rand-index
  "[cum-w] 누적합 벡터로부터 확률적 인덱스 선택"
  [cum-w]
  (let [total (peek cum-w)
        r     (rand total)]
    (core/first (keep-indexed (fn [i w] (when (> w r) i)) cum-w))))

(defn create-rand-move
  "랜덤 이동 시퀀스 생성: ([count] | ([count weights]))"
  ([count]
   (create-rand-move count (repeatedly 4 #(rand-int 10))))
  ([count weights]
   (let [cum-w (cumulative-sums weights)]
     (->> (repeatedly #(weighted-rand-index cum-w))
          (map directions)
          (take count)
          vec))))

(defn create-board
  "[width height player-pos walls-pos route]로 보드 생성"
  [width height player-pos walls-pos route]
  (let [empty-cell  [:empty :none]
        empty-row   (vec (repeat width empty-cell))
        base-board  (vec (repeat height empty-row))
        ;; 1) walls 배치
        b-walls     (reduce
                      (fn [b pos] (put-base b pos :wall width height))
                      base-board
                      walls-pos)
        ;; 2) player overlay
        b-player    (put-overlay b-walls player-pos :player width height)
        ;; 3) goal 위치 계산
        goal-pos    (reduce
                      (fn [pos dir]
                        (move-step b-player pos dir width height))
                      player-pos
                      route)
        ;; 4) goal base
        b-goal      (put-base b-player goal-pos :goal width height)]
    {:board      b-goal
     :player-pos player-pos
     :goal-pos   goal-pos}))

(defn init-boards
  "[move-count configs] -> 여러 보드 생성"
  [move-count configs]
  (mapv (fn [{:keys [width height player-pos walls-pos route]}]
          (let [r   (or route (create-rand-move move-count))
                pp  (or player-pos [(rand-int width) (rand-int height)])
                wp  (or walls-pos (->> (repeatedly (* width height 30) #(vector (rand-int width) (rand-int height)))
                                       distinct
                                       (take (int (* width height 0.3)))))]
            (create-board width height pp wp r)))
        configs))

(comment
(let [route (create-rand-move 10)
      width 5
      height 5]
  (println route)
  
  (init-boards 10 [{:width width :height height :route route}
                   {:width width :height height :route route}
                   {:width width :height height :route route}
                   {:width width :height height :route route}])
  )
  )
