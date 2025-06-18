(ns com.app.stages)

(def stages
  "게임 스테이지 정의 - 병렬 보드 퍼즐의 점진적 난이도 증가"
  {1  {:answer 10
       :name "첫 걸음"
       :description "하나의 작은 보드로 기본기를 익혀보세요"
       :configs [{:width 4 :height 4}]}
   
   2  {:answer 20
       :name "쌍둥이 미로"
       :description "두 개의 동일한 보드를 동시에 조작하는 첫 도전"
       :configs [{:width 4 :height 4}
                 {:width 4 :height 4}]}
   
   3  {:answer 30
       :name "크기의 차이"
       :description "서로 다른 크기의 보드들을 마스터하세요"
       :configs [{:width 4 :height 4}
                 {:width 5 :height 4}]}
   
   4  {:answer 40
       :name "삼각 연합"
       :description "세 개의 보드가 만드는 복잡한 패턴"
       :configs [{:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 4 :height 4}]}
   
   5  {:answer 50
       :name "비대칭 도전"
       :description "다양한 크기와 형태의 조합"
       :configs [{:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 4 :height 4}]}
   
   6  {:answer 60
       :name "사각 연합"
       :description "네 개의 보드로 이루어진 복합 퍼즐"
       :configs [{:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 5 :height 5}]}
   
   7  {:answer 70
       :name "엇갈린 형태"
       :description "세로와 가로가 다른 독특한 구성"
       :configs [{:width 6 :height 4}
                 {:width 4 :height 6}
                 {:width 5 :height 5}]}
   
   8  {:answer 80
       :name "오각 매트릭스"
       :description "다섯 개의 보드가 만드는 복잡한 패턴"
       :configs [{:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 5 :height 5}]}
   
   9  {:answer 90
       :name "거대한 축"
       :description "하나의 큰 보드와 작은 보드들의 조화"
       :configs [{:width 7 :height 6}
                 {:width 4 :height 4}
                 {:width 4 :height 4}]}
   
   10 {:answer 100
       :name "육각 미궁"
       :description "여섯 개의 다양한 보드들"
       :configs [{:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 6 :height 4}
                 {:width 4 :height 6}]}
   
   11 {:answer 110
       :name "복잡한 조합"
       :description "크고 작은 보드들의 어려운 패턴"
       :configs [{:width 6 :height 6}
                 {:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 7 :height 4}]}
   
   12 {:answer 120
       :name "칠중 시련"
       :description "일곱 개의 보드로 이루어진 극한 도전"
       :configs [{:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 5 :height 5}
                 {:width 6 :height 5}]}
   
   13 {:answer 130
       :name "거대한 벽"
       :description "하나의 큰 보드와 여러 작은 보드들"
       :configs [{:width 8 :height 6}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 5 :height 4}]}
   
   14 {:answer 140
       :name "다면체"
       :description "다양한 크기의 여덟 개 보드"
       :configs [{:width 6 :height 6}
                 {:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 6 :height 4}
                 {:width 4 :height 6}]}
   
   15 {:answer 150
       :name "극한의 혼돈"
       :description "아홉 개의 서로 다른 보드들"
       :configs [{:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 6 :height 4}
                 {:width 4 :height 6}
                 {:width 7 :height 4}
                 {:width 5 :height 6}]}
   
   16 {:answer 160
       :name "쌍둥이 거인"
       :description "두 개의 큰 보드로 이루어진 도전"
       :configs [{:width 8 :height 7}
                 {:width 7 :height 8}]}
   
   17 {:answer 170
       :name "십중 퍼즐"
       :description "열 개의 보드를 모두 정복하세요"
       :configs [{:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 6 :height 4}
                 {:width 4 :height 6}
                 {:width 5 :height 6}]}
   
   18 {:answer 180
       :name "거대한 삼각"
       :description "세 개의 큰 보드로 이루어진 최종 시험"
       :configs [{:width 8 :height 8}
                 {:width 7 :height 6}
                 {:width 6 :height 7}]}
   
   19 {:answer 190
       :name "무한의 미로"
       :description "복잡함의 극치, 모든 경험을 총동원하세요"
       :configs [{:width 9 :height 7}
                 {:width 6 :height 6}
                 {:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 7 :height 5}]}
   
   20 {:answer 200
       :name "전설의 보스"
       :description "모든 것을 시험하는 궁극의 거대 미로"
       :configs [{:width 12 :height 10}
                 {:width 12 :height 10}
                 {:width 12 :height 10}
                 {:width 4 :height 10}
                 {:width 12 :height 10}
                 {:width 12 :height 10}
                 {:width 12 :height 10}]}})

(defn get-stage [level]
  "주어진 레벨의 스테이지 정보를 반환"
  (get stages level))

(defn max-level []
  "최대 레벨 수를 반환"
  (count stages))