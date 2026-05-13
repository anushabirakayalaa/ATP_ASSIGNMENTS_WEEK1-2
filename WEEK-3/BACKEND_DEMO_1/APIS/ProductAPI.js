//CREATE PRODUCT APIS 
import exp from 'express'
//create server
//Exporting the productApp route handler to make it accesible for product related apis
export const productApp=exp.Router()
let products=[]
//get all products
productApp.get('/products',(req,res)=>
{
    res.status(200).json({message:"all products data",payload:products}) 
    
})
//get product by id
productApp.get('/products/:productId',(req,res)=>  //:productId is route parameter

{
    //console.log(req.params.productId)
    let productId=Number(req.params.productId);//req.params -> read route parameter and number -> convert string to number
    //it can only read the product id from url
    let prod=products.find(prodObj=>prodObj.productId===productId)
    //first we need to find the product in products array using find method
    if(!prod)
    {   //if prod not found
        return res.status(404).json({message:"product not found"})
    }
    //if found send response as "product found" along with product data
    res.status(200).json({message:"product found", payload: prod})
    
})
//get product by brand
productApp.get('/products-brand/:brand',(req,res)=>//:brand is the route parameter
{

    //console.log(req.params.brand)
    let brand =req.params.brand; //req.params-> to read route params here we dont need any conversions
    //here it only reads brand written in url
    let prod=products.filter(prodObj=>prodObj.brand===brand)
    //here we use filter to get all the possible products
    if(!prod)
    {

        return res.status(404).json({message:"brand not found"})
    }
    res.status(200).json({message:"all brand products",payload:prod})
    
})
 //to create a product
 //POST request to create a product
 //read new product data from request body
 //add new product to products array
 //send response as "product created successfully"
productApp.post('/products',(req,res)=>{
    //get product data from req body
    let newProduct=req.body;
    //insert product to products array
    products.push(newProduct);
    //send resp
    res.status(201).json({message:"Product created Successfully",payload:newProduct})//status code 201 is for created
})
//put request to modify a product
//send response as "modified successfully"
productApp.put('/products/:productId',(req,res)=>{
    //read modified product data from req body
    let modifiedProduct=req.body;
    //console.log(modifiedProduct);
    //find the product with id exists in array
    let productId = Number(req.params.productId);

    //find the product in products array using findindex method
    let productIndex=products.findIndex(p=>p.productId===productId);
    //if product not found send res as "product not found"

    if(productIndex===-1){
        //if product not found send response as "product not found"
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


