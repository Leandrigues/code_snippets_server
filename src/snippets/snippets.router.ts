import express, { Application, Request, Response } from 'express';
import { Snippet } from './snippets.model'

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
  Snippet.find({}).then((response) => {
    res.send(response)
  })
});

snippetRouter.get('/:id', (req: Request, res: Response) => {
  Snippet.find({_id: req.params.id}).then((response) => {
    res.send(response)
  })
});

snippetRouter.post('/', (req: Request, res: Response) => {
  let snippet = new Snippet(req.body)

  snippet.save(req.body).then((response) => {
    res.send(response)
  })
});

export default snippetRouter;
