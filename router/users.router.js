const express=require('express');
const router=express.Router();
const {getUser,getOneUser,createUser,updateUser,deleteUser}=require('../controllers/users.controller')


router.get('/',getUser)
router.get('/:id', getOneUser)
router.post('/',createUser)
router.patch('/:id',updateUser)
router.delete('/:id',deleteUser)












module.exports=router;