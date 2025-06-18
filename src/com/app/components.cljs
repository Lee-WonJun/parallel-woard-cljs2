(ns com.app.components
  (:require [reagent.core :as r]
            [com.app.state :as state]
            [com.app.stages :as stages]))

;; 셀 타입별 이미지 매핑
(def cell-images
  {:empty "resouces/empty_32.png"
   :wall "resouces/wall_32.png"
   :player "resouces/player_32.png"
   :goal "resouces/goal_32.png"
   :goalin "resouces/goalin_32.png"})

(defn get-cell-display [base overlay]
  "베이스와 오버레이를 조합하여 표시할 셀 타입 결정"
  (cond
    (= overlay :player) (if (= base :goal) :goalin :player)
    (= base :goal) :goal
    :else base))

(defn cell-component 
  "개별 셀 컴포넌트"
  [cell-data row col]
  (let [[base overlay] cell-data
        display-type (get-cell-display base overlay)]
    [:div.cell
     {:key (str row "-" col)
      :style {:width "32px"
              :height "32px"
              :position "absolute"
              :top (str (* row 33) "px")
              :left (str (* col 33) "px")
              :transition "all 0.2s ease"}}
     [:img {:src (cell-images display-type)
            :alt (name display-type)
            :style {:width "32px"
                    :height "32px"
                    :image-rendering "pixelated"}}]]))

(defn board-component 
  "보드 컴포넌트"
  [board board-idx]
  (if-not (and (sequential? board) (seq board) (sequential? (first board)))
    [:div.board-error 
     {:key (str "board-error-" board-idx)
      :style {:margin "10px"
              :padding "20px"
              :border "2px solid #FF0000"
              :border-radius "8px"
              :background-color "#FFE0E0"
              :color "#FF0000"
              :text-align "center"}}
     "보드 데이터 오류"]
    (let [height (count board)
          width (count (first board))]
      [:div.board
       {:key (str "board-" board-idx)
        :style {:position "relative"
                :width (str (* width 33) "px")
                :height (str (* height 33) "px")
                :margin "10px"
                :border "2px solid #8B4513"
                :border-radius "8px"
                :background-color "#F5DEB3"
                :box-shadow "0 4px 8px rgba(0,0,0,0.2)"}}
       (for [row (range height)
             col (range width)]
         (cell-component (get-in board [row col]) row col))])))

(defn boards-layout 
  "보드들의 레이아웃 컴포넌트"
  [boards]
  (let [board-count (count boards)]
    [:div.boards-container
     {:style {:display "flex"
              :flex-wrap "wrap"
              :justify-content "center"
              :align-items "flex-start"
              :gap "20px"
              :padding "20px"
              :min-height "400px"}}
     (map-indexed (fn [idx board-data]
                    (let [board (if (map? board-data) 
                                  (:board board-data)
                                  board-data)]
                      (board-component board idx)))
                  boards)]))

(defn game-header 
  "게임 헤더 컴포넌트"
  []
  (let [game-state @state/game-state
        current-stage (state/get-current-stage)
        level (:current-level game-state)
        move-count (:move-count game-state)
        best-score (get-in game-state [:best-scores level])
        status (:game-status game-state)]
    [:div.game-header
     {:style {:background "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              :color "white"
              :padding "20px"
              :text-align "center"
              :box-shadow "0 2px 10px rgba(0,0,0,0.1)"}}
     [:h1 {:style {:margin "0 0 10px 0"
                   :font-size "2.5em"
                   :text-shadow "2px 2px 4px rgba(0,0,0,0.3)"}}
      "🎯 PARALLEL WOARD"]
     
     [:div.stage-info
      {:style {:display "flex"
               :justify-content "space-between"
               :align-items "center"
               :max-width "800px"
               :margin "0 auto"
               :flex-wrap "wrap"
               :gap "20px"}}
      
      [:div.level-info
       [:h2 {:style {:margin "0"
                     :font-size "1.4em"}}
        (str "레벨 " level " - " (:name current-stage))]
       [:p {:style {:margin "5px 0 0 0"
                    :opacity "0.9"
                    :font-size "0.9em"}}
        (:description current-stage)]]
      
      [:div.stats
       {:style {:display "flex"
                :gap "20px"
                :align-items "center"}}
       [:div.move-counter
        {:style {:background "rgba(255,255,255,0.2)"
                 :padding "8px 16px"
                 :border-radius "20px"
                 :backdrop-filter "blur(10px)"}}
        [:span {:style {:font-size "0.9em" :opacity "0.8"}} "이동: "]
        [:strong {:style {:font-size "1.2em"}} move-count]]
       
       (when best-score
         [:div.best-score
          {:style {:background "rgba(255,215,0,0.3)"
                   :padding "8px 16px"
                   :border-radius "20px"
                   :backdrop-filter "blur(10px)"}}
          [:span {:style {:font-size "0.9em" :opacity "0.8"}} "최고: "]
          [:strong {:style {:font-size "1.2em" :color "#FFD700"}} best-score]])
       
       (when (= status :completed)
         [:div.completed
          {:style {:background "rgba(0,255,0,0.3)"
                   :padding "8px 16px"
                   :border-radius "20px"
                   :backdrop-filter "blur(10px)"
                   :color "#00FF00"}}
          "🎉 완료!"])]]]))

(defn control-panel 
  "조작 패널 컴포넌트"
  []
  (let [game-state @state/game-state
        inputs (:player-inputs game-state)
        show-solution (:show-solution game-state)
        current-route (:current-route game-state)
        level (:current-level game-state)]
    [:div.control-panel
     {:style {:background "rgba(255,255,255,0.95)"
              :padding "20px"
              :margin "20px"
              :border-radius "15px"
              :box-shadow "0 4px 20px rgba(0,0,0,0.1)"
              :backdrop-filter "blur(10px)"}}
     
     [:div.controls-row
      {:style {:display "flex"
               :justify-content "center"
               :gap "10px"
               :margin-bottom "20px"
               :flex-wrap "wrap"}}
      
      [:button.control-btn
       {:style {:padding "12px 20px"
                :border "none"
                :border-radius "25px"
                :background "linear-gradient(45deg, #FF6B6B, #ee5a24)"
                :color "white"
                :font-weight "bold"
                :cursor "pointer"
                :transition "all 0.3s ease"
                :box-shadow "0 4px 15px rgba(238,90,36,0.3)"}
        :on-mouse-over #(set! (.. % -target -style -transform) "translateY(-2px)")
        :on-mouse-out #(set! (.. % -target -style -transform) "translateY(0px)")
        :on-click state/reset-moves!}
       "🔄 초기화"]
      
      [:button.control-btn
       {:style {:padding "12px 20px"
                :border "none"
                :border-radius "25px"
                :background "linear-gradient(45deg, #FFA726, #FB8C00)"
                :color "white"
                :font-weight "bold"
                :cursor "pointer"
                :transition "all 0.3s ease"
                :box-shadow "0 4px 15px rgba(255,167,38,0.3)"}
        :on-mouse-over #(set! (.. % -target -style -transform) "translateY(-2px)")
        :on-mouse-out #(set! (.. % -target -style -transform) "translateY(0px)")
        :on-click state/undo-move!
        :disabled (empty? inputs)}
       "⬅️ 되돌리기"]
      
      [:button.control-btn
       {:style {:padding "12px 20px"
                :border "none"
                :border-radius "25px"
                :background (if show-solution 
                              "linear-gradient(45deg, #66BB6A, #43A047)"
                              "linear-gradient(45deg, #42A5F5, #1E88E5)")
                :color "white"
                :font-weight "bold"
                :cursor "pointer"
                :transition "all 0.3s ease"
                :box-shadow (if show-solution
                              "0 4px 15px rgba(67,160,71,0.3)"
                              "0 4px 15px rgba(30,136,229,0.3)")}
        :on-mouse-over #(set! (.. % -target -style -transform) "translateY(-2px)")
        :on-mouse-out #(set! (.. % -target -style -transform) "translateY(0px)")
        :on-click state/toggle-solution!}
       (if show-solution "🙈 해답 숨기기" "💡 해답 보기")]
      
      (when (> level 1)
        [:button.control-btn
         {:style {:padding "12px 20px"
                  :border "none"
                  :border-radius "25px"
                  :background "linear-gradient(45deg, #9C27B0, #7B1FA2)"
                  :color "white"
                  :font-weight "bold"
                  :cursor "pointer"
                  :transition "all 0.3s ease"
                  :box-shadow "0 4px 15px rgba(123,31,162,0.3)"}
          :on-mouse-over #(set! (.. % -target -style -transform) "translateY(-2px)")
          :on-mouse-out #(set! (.. % -target -style -transform) "translateY(0px)")
          :on-click state/prev-level!}
         "⬅️ 이전 레벨"])
      
      (when (< level (stages/max-level))
        [:button.control-btn
         {:style {:padding "12px 20px"
                  :border "none"
                  :border-radius "25px"
                  :background "linear-gradient(45deg, #26C6DA, #00ACC1)"
                  :color "white"
                  :font-weight "bold"
                  :cursor "pointer"
                  :transition "all 0.3s ease"
                  :box-shadow "0 4px 15px rgba(0,172,193,0.3)"}
          :on-mouse-over #(set! (.. % -target -style -transform) "translateY(-2px)")
          :on-mouse-out #(set! (.. % -target -style -transform) "translateY(0px)")
          :on-click state/next-level!}
         "➡️ 다음 레벨"])]
     
     [:div.info-section
      [:div.player-inputs
       {:style {:margin-bottom "15px"}}
       [:h3 {:style {:margin "0 0 10px 0"
                     :color "#333"
                     :font-size "1.1em"}}
        "🎮 플레이어 입력:"]
       [:div.input-display
        {:style {:background "#f8f9fa"
                 :padding "10px"
                 :border-radius "8px"
                 :min-height "30px"
                 :border "2px dashed #ddd"}}
        (if (empty? inputs)
          [:span {:style {:color "#666" :font-style "italic"}}
           "아직 이동하지 않았습니다"]
          [:span {:style {:font-family "monospace" :font-size "1.1em"}}
           (str "[ " (clojure.string/join " → " (map name inputs)) " ]")])]]
      
      (when show-solution
        [:div.solution
         [:h3 {:style {:margin "0 0 10px 0"
                       :color "#333"
                       :font-size "1.1em"}}
          "💡 해답:"]
         [:div.solution-display
          {:style {:background "#e8f5e8"
                   :padding "10px"
                   :border-radius "8px"
                   :border "2px solid #4CAF50"}}
          [:span {:style {:font-family "monospace" :font-size "1.1em" :color "#2e7d32"}}
           (str "[ " (clojure.string/join " → " (map name current-route)) " ]")]]])]]))

(defn game-screen 
  "메인 게임 화면 컴포넌트"
  []
  (let [game-state @state/game-state
        boards (state/get-updated-boards)]
    [:div.game-screen
     {:style {:min-height "100vh"
              :background "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}
     [game-header]
     (if (seq boards)
       [boards-layout boards]
       [:div.loading
        {:style {:display "flex"
                 :justify-content "center"
                 :align-items "center"
                 :min-height "400px"
                 :color "white"
                 :font-size "1.5em"}}
        "🎮 게임을 로딩 중..."])
     [control-panel]]))

(defn completion-modal 
  "게임 완료 모달"
  []
  (let [game-state @state/game-state
        status (:game-status game-state)
        show? (= status :completed)]
    (when show?
      [:div.modal-overlay
       {:style {:position "fixed"
                :top "0"
                :left "0"
                :width "100%"
                :height "100%"
                :background "rgba(0,0,0,0.7)"
                :display "flex"
                :justify-content "center"
                :align-items "center"
                :z-index "1000"}}
       [:div.modal-content
        {:style {:background "white"
                 :padding "40px"
                 :border-radius "20px"
                 :text-align "center"
                 :box-shadow "0 10px 30px rgba(0,0,0,0.3)"
                 :max-width "400px"
                 :width "90%"}}
        [:h2 {:style {:color "#4CAF50"
                      :margin-bottom "20px"
                      :font-size "2em"}}
         "🎉 레벨 완료!"]
        [:p {:style {:margin-bottom "30px"
                     :font-size "1.2em"
                     :color "#333"}}
         (str "레벨 " (:current-level game-state) "을 " (:move-count game-state) "번의 이동으로 완료했습니다!")]
        [:div {:style {:display "flex"
                       :gap "10px"
                       :justify-content "center"}}
         [:button {:style {:padding "12px 24px"
                           :border "none"
                           :border-radius "25px"
                           :background "linear-gradient(45deg, #4CAF50, #45a049)"
                           :color "white"
                           :font-weight "bold"
                           :cursor "pointer"}
                   :on-click state/next-level!}
          "다음 레벨"]
         [:button {:style {:padding "12px 24px"
                           :border "none"
                           :border-radius "25px"
                           :background "linear-gradient(45deg, #2196F3, #1976D2)"
                           :color "white"
                           :font-weight "bold"
                           :cursor "pointer"}
                   :on-click state/reset-level!}
          "다시 플레이"]]]])))
