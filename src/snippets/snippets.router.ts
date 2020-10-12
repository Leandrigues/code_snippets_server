import express, { Application, Request, Response } from 'express';

const snippetRouter = express.Router()

snippetRouter.get('/', (req: Request, res: Response) => {
  res.send({
    snippet: 'snippet'
  })
})

export default snippetRouter;