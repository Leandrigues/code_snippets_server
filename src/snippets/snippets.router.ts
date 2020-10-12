import express, { Application, Request, Response } from 'express';

const snippetRouter = express.Router()

const snippets = [
  {
    title: "Quick Sort",
    description: "Sort Algorithm O(n lgn) Lorem ipsum dolor sit amet consectetur, adipisicing elit Veniam placeat cupiditate perspiciatis ratione aperiam. In dolore excepturi ad rem magni",
    details: [
      {
        key: "Time complexity",
        value: "O(n lgn)"
      },
      {
        key: "Space complexity",
        value: "O(n)"
      }
    ],
    likes: 75
    },
    {
    title: "Merge Sort",
    description: "Sort Algorithm O(n)",
    details: [
      {
        key: "Time complexity",
        value: "O(n lgn)"
      },
      {
        key: "Space complexity",
        value: "O(n)"
      }
    ],
    likes: 10
    },
    {
    title: "BFS Algorithm",
    description: "Breadt-first search in graphs algorithm",
    details: [
      {
        key: "Time complexity",
        value: "O(n lgn)"
      },
      {
        key: "Space complexity",
        value: "O(n)"
      }
    ]
    },
    {
    title: "Binary Search Algorithm",
    description: "O(lg n) algorithm to search an item in an ordered array",
    details: [
      {
        key: "Time complexity",
        value: "O(n lgn)"
      },
      {
        key: "Space complexity",
        value: "O(n)"
      }
    ]
    },
    {
    title: "Quick Sort",
    description: "Sort Algorithm O(n lgn) Lorem ipsum dolor sit amet consectetur, adipisicing elit Veniam placeat cupiditate perspiciatis ratione aperiam. In dolore excepturi ad rem magni",
    details: [
      {
        key: "Time complexity",
        value: "O(n lgn)"
      },
      {
        key: "Space complexity",
        value: "O(n)"
      }
    ],
    likes: 75
    },
    {
    title: "Quick Sort",
    description: "Sort Algorithm O(n lgn) Lorem ipsum dolor sit amet consectetur, adipisicing elit Veniam placeat cupiditate perspiciatis ratione aperiam. In dolore excepturi ad rem magni",
    details: [
      {
        key: "Time complexity",
        value: "O(n lgn)"
      },
      {
        key: "Space complexity",
        value: "O(n)"
      }
    ],
    likes: 75
    },
    {
    title: "Quick Sort",
    description: "Sort Algorithm O(n lgn) Lorem ipsum dolor sit amet consectetur, adipisicing elit Veniam placeat cupiditate perspiciatis ratione aperiam. In dolore excepturi ad rem magni",
    details: [
      {
        key: "Time complexity",
        value: "O(n lgn)"
      },
      {
        key: "Space complexity",
        value: "O(n)"
      }
    ],
    likes: 75
    },
]
snippetRouter.get('/', (req: Request, res: Response) => {
  res.send(snippets);
});


export default snippetRouter;
