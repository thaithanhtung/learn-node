const express = require('express')
const req = require('express/lib/request')
const { json } = require('express/lib/response')

const router = express.Router()

const Post = require('../models/Post')

// get all
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    res.json({ message: error })
  }
})

// create one
router.post('/', async (req, res) => {
  console.log('req', req.body)

  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  })
  try {
    await post
      .save()
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.json({ message: err })
      })
  } catch (error) {}
})

// get one
router.get('/:postId', async (req, res) => {
  console.log('====>', req.params.postId)

  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (error) {
    res.json({ message: error })
  }
})

// delete one
router.delete('/:postId', async (req, res) => {
  console.log('====>', req.params.postId)

  try {
    const removePost = await Post.remove({ _id: req.params.postId })
    res.json(removePost)
  } catch (error) {
    res.json({ message: error })
  }
})

// update post
router.put('/:postId', async (req, res) => {
  console.log('====>', req.params.postId)

  try {
    console.log(' req.body', req.body)
    const editPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } },
    )

    res.json(editPost)
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
