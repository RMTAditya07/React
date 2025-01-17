
const express=require('express')
const {requireSignin} = require('../controllers/auth')
const {userById,allUsers,getUser,updateUser,deleteUser} = require('../controllers/user')

const router=express.Router()

router.get('/users',allUsers)
router.get('/user/:userId',requireSignin,getUser)
router.put('/user/:userId',requireSignin,updateUser)
router.delete('/user/:userId',requireSignin,deleteUser)

//if any route containing :userId, app will first execute userByID()
router.param("userId",userById)

module.exports=router