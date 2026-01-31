//===============================================================================
//CREATE PRODUCT APIS 
import exp from 'express'
//create server
export const productApp=exp.Router()
let products=[]
//get poroducts
productApp.get('/products',(req,res)=>
{
    res.status(200).json({message:"all products data",payload:products}) 
})
//get product by id
productApp.get('/products/:productId',(req,res)=>
{

    //console.log(req.params.productId)
    let productId=Number(req.params.productId);
    let prod=products.find(prodObj=>prodObj.productId===productId)
    if(!prod)
    {
        return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"product found", payload: prod})
    
})
//get product by brand
productApp.get('/products-brand/:brand',(req,res)=>
{

    //console.log(req.params.brand)
    let brand =req.params.brand;
    let prod=products.filter(prodObj=>prodObj.brand===brand)
    if(prod.length===0)
    {
        return res.status(404).json({message:"brand not found"})
    }
    res.status(200).json({message:"all brand products",payload:prod})
    
})

productApp.post('/products',(req,res)=>{
    //get product data from req body
    let newProduct=req.body;
    //insert product to products array
    products.push(newProduct);
    //send resp
    res.status(201).json({message:"Product created",payload:newProduct})//status code 201 is for created
})

productApp.put('/products/:productId',(req,res)=>{
    //get modified product data from req body
    let modifiedProduct=req.body;
    //console.log(modifiedProduct);
    //find the product with id exists in array
    let productId = Number(req.params.productId);
    let productIndex=products.findIndex(p=>p.productId===productId);
    //if product not found send res as "product not found"

    if(productIndex===-1){
        return res.status(404).json({message:"product not found"})//404-not found
    }
    //if product found update the product details
    //send res to client as "product modified"   
    products.splice(productIndex,1,modifiedProduct)//1- delete 1 element and add modified product
    res.status(200).json({message:"product modified",payload:modifiedProduct})
})
//delete by id
productApp.delete('/products/:productId',(req,res)=>{
    //read id from url parameters
    let id=Number(req.params.productId);
    //find index of product with given id
    let productIndex=products.findIndex(prodObj=>prodObj.productId===id)
    //if product not found send res as "product not found"
    if(productIndex===-1){
        res.status(404).json({message:"Product not found"})
    }
    //if product found delete the product
    else{
        let deletedProduct=products.splice(productIndex,1)
        res.status(200).json({message:"products deleted",payload:deletedProduct})
    }
})


