(ns com.app.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [com.app.state :as state]
            [com.app.components :as comp]
            [goog.events :as events]
            [goog.events.KeyCodes :as keycodes])
  (:import [goog.events EventType KeyHandler]))

;; 키 입력 매핑
(def key-mappings
  {keycodes/UP    :up
   keycodes/DOWN  :down
   keycodes/LEFT  :left
   keycodes/RIGHT :right
   keycodes/W     :up      ; WASD 지원
   keycodes/S     :down
   keycodes/A     :left
   keycodes/D     :right})

;; 메인 앱 컴포넌트
(defn app []
  [:div.app
   {:style {:font-family "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            :margin "0"
            :padding "0"
            :box-sizing "border-box"}}
   [comp/game-screen]
   [comp/completion-modal]])

;; 키보드 이벤트 핸들러
(defn handle-keydown [event]
  (let [keycode (.-keyCode event)
        direction (get key-mappings keycode)
        game-status (:game-status @state/game-state)]
    (cond
      ;; 방향키 입력
      direction
      (do
        (.preventDefault event)
        (state/add-move! direction))
      
      ;; 스페이스바 처리
      (= keycode keycodes/SPACE)
      (do
        (.preventDefault event)
        ;; 완료 상태일 때는 다음 레벨로, 아니면 되돌리기
        (if (= game-status :completed)
          (state/next-level!)
          (state/undo-move!)))
      
      ;; 백스페이스 - 초기화
      (= keycode keycodes/BACKSPACE)
      (do
        (.preventDefault event)
        (state/reset-moves!))
      
      ;; R키 - 레벨 리셋
      (= keycode keycodes/R)
      (do
        (.preventDefault event)
        (state/reset-level!))
      
      ;; H키 - 힌트 토글
      (= keycode keycodes/H)
      (do
        (.preventDefault event)
        (state/toggle-solution!))
      
      ;; N키 - 다음 레벨 (치트)
      (= keycode keycodes/N)
      (do
        (.preventDefault event)
        (when (< (:current-level @state/game-state) 10)
          (state/next-level!)))
      
      ;; P키 - 이전 레벨
      (= keycode keycodes/P)
      (do
        (.preventDefault event)
        (when (> (:current-level @state/game-state) 1)
          (state/prev-level!))))))

;; 키보드 이벤트 리스너 설정
(defn setup-keyboard-listeners []
  (events/listen js/document EventType.KEYDOWN handle-keydown))

;; 게임 초기화
(defn init-game! []
  (state/reset-level!)
  (setup-keyboard-listeners)
  (println "🎮 PARALLEL WOARD game has started!")
  (println "💡 Click the 'How to Play' button to learn how to play!"))

;; 앱 마운트 함수
(defn mount-app! []
  (rdom/render [app] (js/document.getElementById "app")))

;; 메인 진입점
(defn ^:export run []
  (init-game!)
  (mount-app!))

;; 개발용 핫 리로드
(defn ^:dev/after-load start! []
  (mount-app!))

;; 개발용 헬퍼 함수들
(comment
  ;; 디버깅용 함수들
  (defn debug-state []
    (js/console.log "현재 게임 상태:" @state/game-state))
  
  (defn debug-boards []
    (js/console.log "현재 보드들:" (state/get-updated-boards)))
  
  (defn skip-to-level [level]
    (swap! state/game-state assoc :current-level level)
    (state/reset-level!))
  
  ;; 사용 예시:
  ;; (skip-to-level 5)
  ;; (debug-state)
  ;; (debug-boards)
  )