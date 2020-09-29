## Lowest Common Manager

#### Problem Statement


You're given three inputs, all of which are instances of a class that have a "directReports" property pointing to their direct reports. The rst
input is the top manager in an organizational chart (i.e., the only instance that is not anybody else's direct report), and the other two inputs
are reports in the organizational chart. Write a function that returns the lowest common manager to the two reports.


Sample input: Node A, Node E, Node I (from the organizational chart below)
`   
    A
   / \
  B   C
 / \ / \
 D E F G
/ \
H  I
`

![TREE R 'A' N 'B' F 'D' L 'H' L 'I' L 'E' N 'C' L 'F' L 'G' ]!

![TREE R 1 N 2 F 3 F 4 F 5]!

![TREE R "root" N "a node" L "a leaf" L "an other leaf" N "an other node" L "a leaf again !" N "a node again !" L  "OneWord" L "the last leaf"]!


![nTREE "A" -- {"B" -- {"H" -- {"N", "O"}, "I", "J"}, "C", "D", "E" -- {"K" -- "P", "L" -- "Q"}, "F", "G" -- "M"}]!


![TREE R 1 N 2 F 3 F 4 F 5]!

![nTREE A -- {B -- {H -- {N, O}, I, J}, C, D, E -- {K -- P, L -- Q}, F, G -- M}]!


`Sample output: Node B`



#### Explanation



#### Solution

Check this [Python](../python/Lowest_Common_Manager.py) code.

