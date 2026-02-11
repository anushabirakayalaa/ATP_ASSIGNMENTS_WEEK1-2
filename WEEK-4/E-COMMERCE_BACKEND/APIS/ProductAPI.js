import exp from "express";
import { ProductModel } from "../models/ProductModel.js";

export const productRoute = exp.Router();

productRoute.post("/products", async (req,res) => 
  {
    let newProduct = req.body;
    let newProductDoc = new ProductModel(newProduct);
    await newProductDoc.save();
    res.status(200).json({
      message: "Product is added",
      payload: newProductDoc,
    });
  
  }
);
