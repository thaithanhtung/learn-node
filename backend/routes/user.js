const express = require('express')
const router = express.Router()

const User = require('../models/User')

// get all
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.json({ message: error })
  }
})

// create one
router.post('/', async (req, res) => {
  console.log('req', req.body)

  const {
    first_name,
    last_name,
    email,
    password,
    birthday,
    create_date,
    update_date,
    avatar,
    phone_number,
  } = req.body

  const newUser = new User({
    first_name,
    last_name,
    email,
    password,
    birthday,
    create_date,
    update_date,
    avatar,
    phone_number,
  })
  try {
    await newUser
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
router.get('/:userId', async (req, res) => {
  const { userId } = req.params

  console.log('====>userId', userId)

  try {
    const user = await User.findById(userId)
    res.json(user)
  } catch (error) {
    res.json({ message: error })
  }
})

// delete one
router.delete('/:userId', async (req, res) => {
  const { userId } = req.params
  console.log('====> userId', userId)

  try {
    const removeUser = await User.remove({ _id: userId })
    res.json(removeUser)
  } catch (error) {
    res.json({ message: error })
  }
})

// update one
router.put('/:userId', async (req, res) => {
  const { userId } = req.params
  console.log('====> userId', userId)
  const {
    first_name,
    last_name,
    email,
    password,
    birthday,
    create_date,
    update_date,
    avatar,
    phone_number,
  } = req.body

  try {
    const editUser = await User.updateOne(
      { _id: userId },
      {
        $set: {
          first_name,
          last_name,
          email,
          password,
          birthday,
          create_date,
          update_date,
          avatar,
          phone_number,
        },
      },
    )

    res.json(editUser)
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
