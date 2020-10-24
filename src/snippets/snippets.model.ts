import * as mongoose from 'mongoose'

const snippetSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String
  },
  tags: {
    type: Array
  }
})

export const Snippet = mongoose.model('Snippet', snippetSchema)