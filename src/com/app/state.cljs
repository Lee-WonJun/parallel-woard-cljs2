(ns com.app.state
  (:require [reagent.core :as r]
            [com.app.stages :as stages]
            [com.app.generator :as gen]
            [com.app.move :as move]))

;; 전역 게임 상태
(defonce game-state
  (r/atom {:current-level 1
           :boards []
           :updated-boards []
           :player-inputs []
           :game-status :playing ; :playing, :completed, :failed
           :show-solution false
           :show-help false
           :move-count 0
           :best-scores {}
           :current-route []}))

(defn reset-level! 
  "현재 레벨을 초기화"
  []
  (let [level (:current-level @game-state)
        stage (stages/get-stage level)]
    (when stage
      (let [move-count (:answer stage)
            configs (:configs stage)
            route (gen/create-rand-move move-count)
            boards (gen/init-boards move-count 
                                   (map #(assoc % :route route) configs))]
        (swap! game-state assoc
               :boards boards
               :updated-boards []
               :player-inputs []
               :game-status :playing
               :show-solution false
               :show-help false
               :move-count 0
               :current-route route)))))

(declare check-game-completion!)

(defn add-move! 
  "플레이어 입력 추가"
  [direction]
  (when (= (:game-status @game-state) :playing)
    (swap! game-state update :player-inputs conj direction)
    (swap! game-state update :move-count inc)
    (check-game-completion!)))

(defn undo-move! 
  "마지막 이동 취소"
  []
  (when (and (= (:game-status @game-state) :playing)
             (not-empty (:player-inputs @game-state)))
    (swap! game-state update :player-inputs pop)
    (swap! game-state update :move-count dec)
    (swap! game-state assoc :updated-boards [])))

(defn reset-moves! 
  "모든 이동 초기화"
  []
  (swap! game-state assoc 
         :player-inputs []
         :updated-boards []
         :move-count 0
         :game-status :playing))

(defn next-level! 
  "다음 레벨로 이동"
  []
  (let [current (:current-level @game-state)
        next-level (inc current)]
    (if (<= next-level (stages/max-level))
      (do
        (swap! game-state assoc :current-level next-level)
        (reset-level!))
      (swap! game-state assoc :game-status :all-completed))))

(defn prev-level! 
  "이전 레벨로 이동"
  []
  (let [current (:current-level @game-state)
        prev-level (dec current)]
    (when (>= prev-level 1)
      (swap! game-state assoc :current-level prev-level)
      (reset-level!))))

(defn toggle-solution! 
  "솔루션 표시 토글"
  []
  (swap! game-state update :show-solution not))

(defn toggle-help! 
  "도움말 표시 토글"
  []
  (swap! game-state update :show-help not))

(defn check-game-completion! 
  "게임 완료 상태 확인"
  []
  (let [boards (:boards @game-state)
        inputs (:player-inputs @game-state)]
    (when (seq boards)
      (let [updated-boards (map #(move/move % inputs) boards)
            all-completed? (every? #(= (:player-pos %) (:goal-pos %)) updated-boards)]
        (swap! game-state assoc :updated-boards updated-boards)
        (when all-completed?
          (let [level (:current-level @game-state)
                move-count (:move-count @game-state)
                current-best (get-in @game-state [:best-scores level] 9999)]
            (when (< move-count current-best)
              (swap! game-state assoc-in [:best-scores level] move-count))
            (swap! game-state assoc :game-status :completed)))))))

(defn get-current-stage []
  "현재 스테이지 정보 반환"
  (stages/get-stage (:current-level @game-state)))

(defn get-updated-boards []
  "플레이어 입력이 적용된 보드들 반환"
  (let [updated-boards (:updated-boards @game-state)
        boards (:boards @game-state)
        inputs (:player-inputs @game-state)]
    ;; 캐시된 업데이트된 보드가 있으면 사용, 없으면 새로 계산
    (if (seq updated-boards)
      updated-boards
      (if (and (seq boards) (every? map? boards))
        (map #(move/move % inputs) boards)
        []))))

;; 디버깅 헬퍼 함수들
(defn print-board-correct []
  "현재 게임 상태와 보드 상태를 출력"
  (let [state @game-state
        boards (get-updated-boards)]
    (println "")
    (println "=== 게임 상태 ===")
    (println "레벨:" (:current-level state))
    (println "이동 횟수:" (:move-count state))
    (println "상태:" (:game-status state))
    (when-let [first-board (first boards)]
      (println "플레이어 위치:" (:player-pos first-board))
      (println "목표 위치:" (:goal-pos first-board)))
    (println "")
    (println "=== 보드 ===")
    (when-let [first-board (first boards)]
      (let [board (:board first-board)]
        (doseq [row board]
          (println (apply str (map (fn [[base overlay]]
                                     (cond
                                       (= overlay :player) "P"
                                       (= base :wall) "█"
                                       (= base :goal) "G"
                                       :else "."))
                                   row))))))
    (println "===============")
    (println "")
    (println "=== 도움말 ===")
    (println "도움말 표시:" (:show-help state))
    (println "===============")
    (println "")))

(defn force-refresh-boards! []
  "보드 상태를 강제로 새로고침"
  []
  (swap! game-state assoc :updated-boards [])
  (check-game-completion!))