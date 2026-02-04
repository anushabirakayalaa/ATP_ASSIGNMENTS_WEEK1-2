import exp from 'express'
//create server
//Exporting the userApp route handler to make it accesible for user related apis
export const userApp=exp.Router()
//create users apis
//test local in-memory data
let users=[];

//get req handling routes(read users)
userApp.get('/users',(req,res)=>{
    //send users data in resp
    res.status(200).json({message:"all users data",payload:users}) //message,payload-(data)      
//200 status code is for successful operation state 
})


//post req handling routes(create users)
userApp.post('/users',(req,res)=>{
    //get user data from req body
    let newUser=req.body;
    //insert user to users array
    users.push(newUser);
    //send resp
    res.status(201).json({message:"user created"})//status code 201 is for created
})


//put req handling routes(update users)
userApp.put('/users/:id',(req,res)=>{
    //get modified user data from req body
    let modifieduser=req.body;
    //console.log(modifieduser);
    //find the user with id exits in array
    let userIndex=users.findIndex((u)=>u.id==modifieduser.id);

    //if user not found send res as "user not found"

    if(userIndex===-1){
        res.status(404).json({message:"user not found"})//404-not found
    }
    //if user found update the user details
    //send res to client as "User modified"   
    else{
        let deletedUser=users.splice(userIndex,1,modifieduser)//1- delete 1 element and add modified user
        res.status(200).json({message:"user modified"})
    }



    
})
userApp.get('/users/:id',(req,res)=>{
    console.log(req.params)
    //read id from url parameters i.e :id 
    let id=Number(req.params.id);
    //read user by this id
    let user=users.find(userObj=>userObj.id===id)
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    //send res
    res.status(200).json({message:"user",payload:user})
})
//delete req handling routes(delete users)
userApp.delete('/users/:id',(req,res)=>{
    //read id from url parameters
    let id=Number(req.params.id);
    //find index of user with given id
    let userIndex=users.findIndex(userObj=>userObj.id===id)
    //if user not found send res as "user not found"
    if(userIndex===-1){
        res.status(404).json({message:"user not found"})
    }
    //if user found delete the user
    else{
        let deletedUser=users.splice(userIndex,1)
        res.status(200).json({message:"user deleted",payload:deletedUser})
    }
})
