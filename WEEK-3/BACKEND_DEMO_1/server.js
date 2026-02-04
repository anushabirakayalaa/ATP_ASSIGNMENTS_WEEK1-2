import exp from 'express'
//importing the userApp and productApp from the api files =>as we've created the routers
import {userApp} from "./APIS/UserAPI.js" //import userApp exported from UserAPI.js
import {productApp} from "./APIS/ProductAPI.js" //import productApp exported from ProductAPI.js
//create express app
const app=exp()
//assign port
app.listen(3000,()=>console.log("server is listening on port 3000"))
//body parsing middleware
app.use(exp.json()) //to parse json data from req body
//
//forward req to user app when path starts with '/user-api'
app.use('/user-api',userApp)//any req starting with api '/user-api'->goes to UserAPI.js
app.use('/product-api',productApp)
//http://localhost://user-api
//http://localhost://product-api