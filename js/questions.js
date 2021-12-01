// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Assume that the algorithms considered here sort the input sequences in ascending order. If the input is already in ascending order, which of the following are TRUE?",
    answer: "Insertionsort runs in ϴ(n) time",
    options: [
      "Quicksort runs in ϴ(n) time",
      "Bubblesort runs in ϴ(n²) time",
      "Mergesort runs in ϴ(n²) time",
      "Insertionsort runs in ϴ(n) time"
    ]
  },
    {
    numb: 2,
    question: "Which of the following sorting algorithms has the lowest worst-case complexity?",
    answer: "Merge sort",
    options: [
      "Bubble sort",
      "Merge sort",
      "Quick sort",
      "Selection sort"
    ]
  },
    {
    numb: 3,
    question: "Which one of the following in place sorting algorithms needs the minimum number of swaps?",
    answer: "Selection Sort",
    options: [
      "Quick sort",
      "Insertion sort",
      "Selection sort",
      "Heap sort"
    ]
  },
    {
    numb: 4,
    question: "Assume that a mergesort algorithm in the worst case takes 30 seconds for an input of size 64.Which of the following most closely approximates the maximum input size of a problem that can be solved in 6 minutes?",
    answer: "512",
    options: [
      "256",
      "512",
      "1024",
      "2048"
    ]
  },
    {
    numb: 5,
    question: "Merge sort uses",
    answer: "Divide and conquer strategy",
    options: [
      "Divide and conquer strategy",
      "Backtracking approach",
      "Greedy approach",
      "None of these"
    ]
  },
  {
    numb: 6,
    question: "For merging two sorted lists of sizes m and n into a sorted list of size m+n, we require comparisons of",
    answer: "O(m+n)",
    options: [
      "O(m)",
      "O(n)",
      "O(m+n)",
      "O(logm + n)"
    ]
  },
  {
    numb: 7,
    question: "The Floyd-Warshall algorithm for all-pair shortest paths computation is based on",
    answer: "Dynamic programming paradigm",
    options: [
      "Greedy paradigm",
      "Divide and conquer paradigm",
      "All of these",
      "Dynamic programming paradigm"
    ]
  },
  {
    numb: 8,
    question: "Which one of the following algorithm design techniques is used in finding all pairs of shortest distances in a graph?",
    answer: "Dynamic programming",
    options: [
      "Greedy ",
      "Divide and conquer",
      "Backtracking",
      "Dynamic programming"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
    //numb: 6,
  //  question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];