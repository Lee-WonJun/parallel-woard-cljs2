(ns com.app.hepler
  (:require [com.app.const :refer [dir-deltas]]))


(defn within-bounds?
  "[(x y) width height] -> boolean"
  [[x y] width height]
  (and (<= 0 x (dec width))
       (<= 0 y (dec height))))

(defn update-cell
  "Bounds-checked로 보드 셀을 안전하게 갱신함"
  [board [x y] f width height]
  (if (within-bounds? [x y] width height)
    (update-in board [y x] f)
    board))

(defn put-base
  "보드 b의 [x y] 위치에 base 타입 업데이트"
  [board pos base width height]
  (update-cell board pos (fn [[_ o]] [base o]) width height))

(defn put-overlay
  "보드 b의 [x y] 위치에 overlay 타입 업데이트"
  [board pos overlay width height]
  (update-cell board pos (fn [[b _]] [b overlay]) width height))

(defn move-step
  "현재 pos에서 dir로 한 칸 이동. 벽·bounds 검사 포함"
  [board [x y] dir width height]
  (let [[dx dy] (dir-deltas dir)
        new-pos [(+ x dx) (+ y dy)]]
    (if (within-bounds? new-pos width height)
      (let [cell-base (get-in board [(second new-pos) (first new-pos) 0] :wall)]
        (if (= cell-base :wall)
          [x y]
          new-pos))
      [x y])))