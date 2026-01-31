import exp from 'express'
import {userApp} from "./APIS/UserAPI.js"
import {productApp} from "./APIS/ProductAPI.js"
//create server
const app=exp()
//assign port
app.listen(3000,()=>console.log("server is listening on port 3000"))
//body parsing middleware
app.use(exp.json()) //to parse json data from req body

//forward req to user app when path starts with '/user-api'
app.use('/user-api',userApp)
app.use('/product-api',productApp)