(ns com.app.const)


(def directions
  [:up :down :left :right])

(def dir-deltas
  {:up    [0 -1]
   :down  [0  1]
   :left  [-1  0]
   :right [1  0]})