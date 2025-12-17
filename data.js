const patternData = {

  /* 1. ARRAYS & HASHING */
  "arrays-hashing": {
    title: "Arrays & Hashing",
    shortDesc: "Fast access, frequency counting, and mapping values",

    what:
      "Arrays provide indexed access while hashing enables constant-time lookup, insertion, and deletion using keys.",

    when: [
      "Need fast lookup or frequency count",
      "Checking duplicates",
      "Mapping values to indices"
    ],

    observations: [
      "Hash maps give O(1) average operations",
      "Arrays allow direct index access",
      "Hashing eliminates nested loops",
      "Order is not guaranteed",
      "Space is traded for time"
    ],

    variations: [
      "Frequency Map",
      "Index Mapping",
      "Hash Set existence check",
      "Prefix Sum + Hash Map",
      "Bucket grouping"
    ],

    example:
`Two Sum
nums = [2,7,11,15], target = 9
Store 2 → index
Find 7 → match found`,

    complexity:
`Time: O(n)
Space: O(n)`,

    mistakes: [
      "Assuming hash map is ordered",
      "Overwriting frequency",
      "Ignoring negative numbers",
      "Using index after array modification"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" }
    ]
  },

  /* 2. TWO POINTERS */
  "two-pointers": {
    title: "Two Pointers",
    shortDesc: "Efficient traversal using two indices",

    what:
      "Uses two pointers moving through a data structure to reduce time complexity.",

    when: [
      "Sorted arrays",
      "Pair problems",
      "Reversing arrays or strings"
    ],

    observations: [
      "Reduces O(n²) to O(n)",
      "Often used with sorted input",
      "Pointers move conditionally"
    ],

    variations: [
      "Opposite ends",
      "Fast & slow pointer",
      "Same direction pointers"
    ],

    example:
`Valid Palindrome
left → start
right → end
Move inward skipping non-alphanumerics`,

    complexity:
`Time: O(n)
Space: O(1)`,

    mistakes: [
      "Incorrect pointer movement",
      "Missing edge conditions",
      "Not sorting when required"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/move-zeroes/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/squares-of-a-sorted-array/", difficulty: "Easy" }
    ]
  },

  /* 3. SLIDING WINDOW */
  "sliding-window": {
    title: "Sliding Window",
    shortDesc: "Subarrays or substrings with moving window",

    what:
      "Maintains a window that expands and shrinks over contiguous data.",

    when: [
      "Subarrays / substrings",
      "Max / min / length problems",
      "Continuous ranges"
    ],

    observations: [
      "Avoids recomputation",
      "Works on contiguous data",
      "Window size can be fixed or variable"
    ],

    variations: [
      "Fixed-size window",
      "Variable-size window"
    ],

    example:
`Max Subarray Sum
Slide window and update sum dynamically`,

    complexity:
`Time: O(n)
Space: O(1)`,

    mistakes: [
      "Incorrect window shrink condition",
      "Forgetting to update result",
      "Not handling duplicates properly"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/minimum-size-subarray-sum/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/fruit-into-baskets/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/permutation-in-string/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/max-consecutive-ones-iii/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/longest-repeating-character-replacement/", difficulty: "Medium" }
    ]
  },

  /* 4. STACK */
  "stack": {
    title: "Stack",
    shortDesc: "LIFO structure for tracking previous elements",

    what:
      "Stack stores elements in Last-In-First-Out order.",

    when: [
      "Matching parentheses",
      "Next/previous greater element",
      "Undo operations"
    ],

    observations: [
      "Monotonic stacks solve range problems",
      "Tracks history efficiently"
    ],

    variations: [
      "Monotonic increasing stack",
      "Monotonic decreasing stack"
    ],

    example:
`Valid Parentheses
Push opening
Pop when closing`,

    complexity:
`Time: O(n)
Space: O(n)`,

    mistakes: [
      "Not popping correctly",
      "Ignoring empty stack case"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/next-greater-element-i/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" },
      { url: "https://leetcode.com/problems/asteroid-collision/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium" }
    ]
  },

  /* 5. BINARY SEARCH */
  "binary-search": {
    title: "Binary Search",
    shortDesc: "Search in sorted or monotonic space",

    what:
      "Divides search space into halves repeatedly.",

    when: [
      "Sorted arrays",
      "Search space problems",
      "Optimization problems"
    ],

    observations: [
      "Reduces complexity to O(log n)",
      "Works on monotonic conditions"
    ],

    variations: [
      "Lower bound",
      "Upper bound",
      "Binary search on answer"
    ],

    example:
`Search target in sorted array`,

    complexity:
`Time: O(log n)
Space: O(1)`,

    mistakes: [
      "Infinite loop",
      "Incorrect mid calculation"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/koko-eating-bananas/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/sqrtx/", difficulty: "Easy" }
    ]
  },

  /* 6. LINKED LIST */
  "linked-list": {
    title: "Linked List",
    shortDesc: "Node-based linear data structure",

    what:
      "A linked list consists of nodes where each node points to the next node instead of using contiguous memory.",

    when: [
      "Frequent insertions or deletions",
      "Unknown size of data",
      "Pointer-based problems"
    ],

    observations: [
      "No random access",
      "Insertion is O(1) if pointer is known",
      "Extra memory for pointers"
    ],

    variations: [
      "Singly linked list",
      "Doubly linked list",
      "Fast & slow pointer technique"
    ],

    example:
`Reverse Linked List
Iteratively reverse pointers one by one`,

    complexity:
`Time: O(n)
Space: O(1)`,

    mistakes: [
      "Losing reference to next node",
      "Not handling null pointers",
      "Incorrect loop termination"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/intersection-of-two-linked-lists/", difficulty: "Easy" }
    ]
  },

  /* 7. TREES */
  "trees": {
    title: "Trees",
    shortDesc: "Hierarchical data structure with parent-child relationship",

    what:
      "A tree is a hierarchical structure consisting of nodes connected by edges.",

    when: [
      "Hierarchical data",
      "Recursive traversal",
      "Binary Search Trees"
    ],

    observations: [
      "DFS uses recursion or stack",
      "BFS uses queue",
      "Balanced trees give log complexity"
    ],

    variations: [
      "Binary Tree",
      "Binary Search Tree",
      "DFS (pre, in, post)",
      "BFS (level order)"
    ],

    example:
`Find max depth using DFS recursion`,

    complexity:
`Time: O(n)
Space: O(h)`,

    mistakes: [
      "Forgetting base case",
      "Incorrect recursion",
      "Ignoring null nodes"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/same-tree/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", difficulty: "Medium" }
    ]
  },

  /* 8. TRIES */
  "tries": {
    title: "Tries",
    shortDesc: "Prefix tree for fast string operations",

    what:
      "A trie stores strings by characters, enabling efficient prefix-based operations.",

    when: [
      "Prefix search",
      "Autocomplete",
      "Dictionary problems"
    ],

    observations: [
      "Search is O(length of word)",
      "Consumes extra memory",
      "Good for string-based queries"
    ],

    variations: [
      "Basic Trie",
      "Compressed Trie",
      "Trie with wildcard"
    ],

    example:
`Insert and search words character by character`,

    complexity:
`Time: O(L)
Space: O(N × L)`,

    mistakes: [
      "Forgetting end-of-word flag",
      "Not handling empty strings"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" },
      { url: "https://leetcode.com/problems/replace-words/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/longest-word-in-dictionary/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/prefix-and-suffix-search/", difficulty: "Hard" },
      { url: "https://leetcode.com/problems/concatenated-words/", difficulty: "Hard" }
    ]
  },

  /* 9. HEAP / PRIORITY QUEUE */
  "heap": {
    title: "Heap / Priority Queue",
    shortDesc: "Efficient access to min or max element",

    what:
      "A heap maintains a partial ordering that allows efficient retrieval of the smallest or largest element.",

    when: [
      "Top K problems",
      "Scheduling tasks",
      "Streaming data"
    ],

    observations: [
      "Insertion and deletion are O(log n)",
      "Access top in O(1)"
    ],

    variations: [
      "Min Heap",
      "Max Heap",
      "Two heap technique"
    ],

    example:
`Find Kth largest element using min heap`,

    complexity:
`Time: O(n log k)
Space: O(k)`,

    mistakes: [
      "Using wrong heap type",
      "Not balancing heaps"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
      { url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
      { url: "https://leetcode.com/problems/task-scheduler/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/last-stone-weight/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/ugly-number-ii/", difficulty: "Medium" }
    ]
  },

  /* 10. BACKTRACKING */
  "backtracking": {
    title: "Backtracking",
    shortDesc: "Try all possibilities with pruning",

    what:
      "Backtracking explores all possible solutions recursively and removes invalid paths early.",

    when: [
      "Combinations",
      "Permutations",
      "Decision trees"
    ],

    observations: [
      "Uses recursion",
      "Explores state space",
      "Pruning improves efficiency"
    ],

    variations: [
      "Subset generation",
      "Permutation generation",
      "Constraint-based search"
    ],

    example:
`Generate all subsets using recursion`,

    complexity:
`Time: O(2^n)
Space: O(n)`,

    mistakes: [
      "Not backtracking properly",
      "Forgetting to remove last choice"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/subsets/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/permutations/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/word-search/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/n-queens/", difficulty: "Hard" },
      { url: "https://leetcode.com/problems/palindrome-partitioning/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", difficulty: "Medium" }
    ]
  },

  /* 11. GRAPHS */
  "graphs": {
    title: "Graphs (BFS / DFS)",
    shortDesc: "Nodes connected by edges",

    what:
      "Graphs represent relationships between entities and are traversed using BFS or DFS.",

    when: [
      "Traversal problems",
      "Connectivity",
      "Shortest path"
    ],

    observations: [
      "DFS uses stack or recursion",
      "BFS finds shortest path",
      "Visited set prevents cycles"
    ],

    variations: [
      "Adjacency list",
      "Adjacency matrix",
      "Directed / Undirected graph"
    ],

    example:
`Number of Islands using DFS`,

    complexity:
`Time: O(V + E)
Space: O(V)`,

    mistakes: [
      "Forgetting visited set",
      "Infinite recursion",
      "Ignoring disconnected components"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/rotting-oranges/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/accounts-merge/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/graph-valid-tree/", difficulty: "Medium" }
    ]
  },

  /* 12. DYNAMIC PROGRAMMING */
  "dp": {
    title: "Dynamic Programming",
    shortDesc: "Optimization using overlapping subproblems",

    what:
      "Dynamic Programming stores results of subproblems to avoid recomputation.",

    when: [
      "Optimal substructure",
      "Overlapping subproblems",
      "Recursive brute force is slow"
    ],

    observations: [
      "Top-down uses memoization",
      "Bottom-up uses tabulation",
      "State definition is key"
    ],

    variations: [
      "1D DP",
      "2D DP",
      "State compression"
    ],

    example:
`Climbing Stairs using DP array`,

    complexity:
`Time: O(n)
Space: O(n)`,

    mistakes: [
      "Wrong DP state",
      "Incorrect transitions",
      "Not initializing base cases"
    ],

    leetcode: [
      { url: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
      { url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/partition-equal-subset-sum/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium" },
      { url: "https://leetcode.com/problems/edit-distance/", difficulty: "Medium" }
    ]
  }

};