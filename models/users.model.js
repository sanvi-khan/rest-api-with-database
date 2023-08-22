const mongoose=require('mongoose');
require('dotenv').config();

//database conection
mongoose.connect(process.env.DBURL)
.then(()=>{
    console.log("database connected")
})
.catch((err)=>{
    console.log(err)
})
//creating schema
const userSchema=mongoose.Schema({
    id:{
      type:String,
      require:true
    },
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
})

module.exports=mongoose.model("user",userSchema)
