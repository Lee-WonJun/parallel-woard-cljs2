(ns com.app.stages)

(def stages
  "Game stage definitions - Progressive difficulty increase for parallel board puzzles"
  {1  {:answer 10
       :name "First Steps"
       :description "Learn the basics with one small board"
       :configs [{:width 4 :height 4}]}
   
   2  {:answer 20
       :name "Twin Maze"
       :description "First challenge controlling two identical boards simultaneously"
       :configs [{:width 4 :height 4}
                 {:width 4 :height 4}]}
   
   3  {:answer 30
       :name "Size Difference"
       :description "Master boards of different sizes"
       :configs [{:width 4 :height 4}
                 {:width 5 :height 4}]}
   
   4  {:answer 40
       :name "Triangle Alliance"
       :description "Complex patterns created by three boards"
       :configs [{:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 4 :height 4}]}
   
   5  {:answer 50
       :name "Asymmetric Challenge"
       :description "Various combinations of sizes and shapes"
       :configs [{:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 4 :height 4}]}
   
   6  {:answer 60
       :name "Quad Alliance"
       :description "Complex puzzle composed of four boards"
       :configs [{:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 5 :height 5}]}
   
   7  {:answer 70
       :name "Alternating Forms"
       :description "Unique composition with different vertical and horizontal dimensions"
       :configs [{:width 6 :height 4}
                 {:width 4 :height 6}
                 {:width 5 :height 5}]}
   
   8  {:answer 80
       :name "Pentagon Matrix"
       :description "Complex patterns created by five boards"
       :configs [{:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 5 :height 5}]}
   
   9  {:answer 90
       :name "Giant Axis"
       :description "Harmony between one large board and small boards"
       :configs [{:width 7 :height 6}
                 {:width 4 :height 4}
                 {:width 4 :height 4}]}
   
   10 {:answer 100
       :name "Hexagon Labyrinth"
       :description "Six diverse boards"
       :configs [{:width 5 :height 5}
                 {:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 6 :height 4}
                 {:width 4 :height 6}]}
   
   11 {:answer 110
       :name "Complex Combination"
       :description "Difficult patterns of large and small boards"
       :configs [{:width 6 :height 6}
                 {:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 7 :height 4}]}
   
   12 {:answer 120
       :name "Sevenfold Trial"
       :description "Ultimate challenge with seven boards"
       :configs [{:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 5 :height 5}
                 {:width 6 :height 5}]}
   
   13 {:answer 130
       :name "Giant Wall"
       :description "One large board with multiple small boards"
       :configs [{:width 8 :height 6}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 5 :height 4}]}
   
   14 {:answer 140
       :name "Polyhedron"
       :description "Eight boards of various sizes"
       :configs [{:width 6 :height 6}
                 {:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 4 :height 4}
                 {:width 5 :height 4}
                 {:width 4 :height 5}
                 {:width 6 :height 4}
                 {:width 4 :height 6}]}
   
   15 {:answer 150
       :name "Ultimate Chaos"
       :description "Nine different boards"
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
       :name "Twin Giants"
       :description "Challenge with two large boards"
       :configs [{:width 8 :height 7}
                 {:width 7 :height 8}]}
   
   17 {:answer 170
       :name "Tenfold Puzzle"
       :description "Conquer all ten boards"
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
       :name "Giant Triangle"
       :description "Final test with three large boards"
       :configs [{:width 8 :height 8}
                 {:width 7 :height 6}
                 {:width 6 :height 7}]}
   
   19 {:answer 190
       :name "Infinite Maze"
       :description "Peak of complexity, mobilize all your experience"
       :configs [{:width 9 :height 7}
                 {:width 6 :height 6}
                 {:width 5 :height 5}
                 {:width 4 :height 4}
                 {:width 7 :height 5}]}
   
   20 {:answer 200
       :name "Legendary Boss"
       :description "Ultimate giant maze that tests everything"
       :configs [{:width 12 :height 10}
                 {:width 12 :height 10}
                 {:width 12 :height 10}
                 {:width 4 :height 10}
                 {:width 12 :height 10}
                 {:width 12 :height 10}
                 {:width 12 :height 10}]}})

(defn get-stage [level]
  "Returns stage information for the given level"
  (get stages level))

(defn max-level []
  "Returns the maximum number of levels"
  (count stages))