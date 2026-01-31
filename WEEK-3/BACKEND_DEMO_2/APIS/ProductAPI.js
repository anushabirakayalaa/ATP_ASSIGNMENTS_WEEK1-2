//importing Express and product model
import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
//exporting the route
export const productApp=exp.Router()



//adding new product
productApp.post('/products',async(req,res)=>
{
    let newProduct=req.body;
    let newProductDoc=new ProductModel(newProduct)
    await newProductDoc.save()
    res.status(200).json({message:"Product is added",payload:newProductDoc })
})

//get all products
productApp.get('/products',async(req,res)=>
{
    let productList=await ProductModel.find()
    res.status(200).json({message:"all products data",payload:productList}) 
})


