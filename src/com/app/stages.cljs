(ns com.app.stages)

(def stages
  "게임 스테이지 정의 - 각 스테이지는 정답 이동 횟수와 보드 구성을 정의"
  {1  {:answer 8
       :name "첫 걸음"
       :description "간단한 단일 보드로 시작해보세요"
       :configs [{:width 6 :height 6}]}
   
   2  {:answer 10
       :name "이중 도전"
       :description "두 개의 보드를 동시에 조작해보세요"
       :configs [{:width 5 :height 5}
                 {:width 5 :height 5}]}
   
   3  {:answer 12
       :name "삼중 퍼즐"
       :description "세 개의 보드로 복잡도가 증가합니다"
       :configs [{:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 5 :height 5}]}
   
   4  {:answer 14
       :name "비대칭 도전"
       :description "다양한 크기의 보드들"
       :configs [{:width 5 :height 5}
                 {:width 4 :height 5}
                 {:width 5 :height 4}]}
   
   5  {:answer 16
       :name "사중 매트릭스"
       :description "네 개의 보드를 마스터하세요"
       :configs [{:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 5 :height 5}]}
   
   6  {:answer 18
       :name "오중 복합체"
       :description "다섯 개의 보드가 기다립니다"
       :configs [{:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 5 :height 5}]}
   
   7  {:answer 20
       :name "변형 퍼즐"
       :description "다양한 크기의 보드 조합"
       :configs [{:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 3 :height 5}
                 {:width 5 :height 3}
                 {:width 7 :height 5}]}
   
   8  {:answer 22
       :name "육중 도전"
       :description "여섯 개의 보드를 정복하세요"
       :configs [{:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 5 :height 5}]}
   
   9  {:answer 25
       :name "거대한 도전"
       :description "큰 보드와 작은 보드들의 조합"
       :configs [{:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 8 :height 6}
                 {:width 5 :height 5}
                 {:width 5 :height 5}]}
   
   10 {:answer 30
       :name "최종 보스"
       :description "거대한 단일 보드로 마무리!"
       :configs [{:width 12 :height 12}]}})

(defn get-stage [level]
  "주어진 레벨의 스테이지 정보를 반환"
  (get stages level))

(defn max-level []
  "최대 레벨 수를 반환"
  (count stages))