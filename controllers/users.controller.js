const {v4:uuidv4}=require('uuid')
const user=require('../models/users.model')
    //get user
let getUser=async(req,res)=>{
   try {
    const users=await user.find()
   res.json(users)
   } catch (error) {
    res.json(error)
   }
}
//get oneUser
let getOneUser=async(req,res)=>{
    try {
        const oneUser= await new user.findOne({id:req.params.id})
        res.json({oneUser})
    } catch (error) {
        res.json(error)
    }
}
//create user
let createUser=async(req,res)=>{
    try{
        const newUser= new user({
            id:uuidv4(),
            name:req.body.name,
            age:Number(req.body.age)
        })
        await newUser.save();
        res.json(newUser)
    }
    catch(err){
        res.json(err)
    }

}
//update user by id
let updateUser=(req,res)=>{

}
//delete user
let deleteUser=async(res,req)=>{
    try {
        const deleteUser=await user.deleteOne({id:req.params.id})

        res.json({mesaage :"user is deleted"})
    } catch (error) {
        
    }

}















module.exports={getUser,getOneUser,createUser,updateUser,deleteUser}