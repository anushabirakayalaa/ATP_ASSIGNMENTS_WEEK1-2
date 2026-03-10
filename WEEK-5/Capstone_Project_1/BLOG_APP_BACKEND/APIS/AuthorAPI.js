import exp from 'express';
import {authenticate, register} from "../services/authService.js";
import {UserTypeModel} from "../models/userModel.js"
import {ArticleModel} from "../models/articleModel.js"
import{ checkAuthor } from "../middlewares/checkAuthor.js"
import { verifyToken } from '../middlewares/verifyToken.js'
export const authorRoute=exp.Router()

//Register user(public) 
authorRoute.post('/users',async(req,res)=>
{
    try {
        //get user obj from req
        let userObj = req.body;
        //call register
        const newUserObj = await register({...userObj,role:"AUTHOR"})
        //send res
        res.status(201).json({message:"Author created",payload:newUserObj})
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            res.status(409).json({ error: "User with this email already exists" })
        } else {
            res.status(500).json({ error: error.message || "Internal server error" })
        }
    }
});

// //Authenticate user(public)
//that means login of user ---> this method is written in CommanAPI.js

//create article(protected route)
authorRoute.post('/articles',verifyToken("AUTHOR"),async (req, res) => {
    //authorRoute.post('/articles',verifyToken("AUTHOR"),checkAuthor,async (req, res) => {
    //get article from request
    let article = req.body;
    // //create article document
    // const author = new UserTypeModel.findById(article,author);
    // if(!author|| author.role!=="AUTHOR")
    // {
    //     res.status(401).json({message:"Article created"})
    // }
    let newArticleDoc=new ArticleModel(article)
    //save to DB
    let createdArticleDoc = await newArticleDoc.save()
    //send res
    res.status(401).json({message:"Article create",payload:createdArticleDoc})
})

//Read article of author(protected route)
authorRoute.get("/articles/:authorId",verifyToken("AUTHOR"),async(req,res)=>
{
    //get author id
    let aid = req.params.authorId;
    //const author = new UserTypeModel.findById(aid);
    //check the author
    // if(!author|| author.role!=="AUTHOR")
    // {
    
    //    return res.status(404).json({
    //     message: "Author not found or invalid role"
    //   });
    // }

    //read articles by this author
    let articles = await ArticleModel.find({author:aid,isArticleActive:true}).populate("author","firstName email")
        //populate-gives details of that specific author....polpulate(fieldname,props that shld be projected)

    //send res

res.status(200).json({message:"Articles",payload:articles})
})

//EDIT ARTICLE (protected route)
authorRoute.put("/articles",verifyToken("AUTHOR"),async(req,res)=>
{
    //get modified article from req
    let {articleId, title, category, content,author}=req.body
    //find article and also
    //check the article is published by the author recieved from client
    let articleOfDB=await ArticleModel.findOne({_id:articleId,author:author})
    if(!articleOfDB)
    {
        return res.status(401).json({message:"Articl Not avaialble"})
    }

//update the article 
    let updatedArticle = await ArticleModel.findByIdAndUpdate(
    articleId,
    {$set:{title,category,content}},
    {new:true}
)
        //send res(updated article)
        res.status(201).json({message:"article updated",payload:updatedArticle})
});


//delete(soft delete) article(protected route)
    // authorRoute.patch('/author/:aid/status',verifyToken("AUTHOR"),async(req,res)=>{
    //     //authorRoute.patch('/author/:authorid/article/:articleid',verifyToken,checkAuthor,async(req,res)=>{

    //     // get the article id
    //     // let aid = req.params.articleid;
    //     let {aid,author}= req.body;
    //     // let author = req.params.authorid;
    //     // find the article
    //     let articleOfDB = await ArticleModel.findOne({_id:aid,author:author});
    //     if(!articleOfDB){
    //         res.status(401).json({message:"article not found or not belong to you"})
    //     }

    //     // make the article status to false (isArticleActive)
    //     let updatedArticle = await ArticleModel.findOneAndUpdate(
    //         {_id:aid},
    //         {$set:{isArticleActive:false}},
    //         {new:true}
    //     )

    //     res.status(200).json({message:"deleted the article softly",payload:updatedArticle})

    // })
//delete(soft delete) article(Protected route)
authorRoute.patch("/articles/:id/status", verifyToken("AUTHOR"), async (req, res) => {
  const { id } = req.params;
  const { isArticleActive } = req.body;
  // Find article
  const article = await ArticleModel.findById(id); //.populate("author");
  //console.log(article)
  if (!article) {
    return res.status(404).json({ message: "Article not found" });
  }

  //console.log(req.user.userId,article.author.toString())
  // AUTHOR can only modify their own articles
  if (req.user.role === "AUTHOR" && 
    article.author.toString() !== req.user.userId) {
    return res
    .status(403)
    .json({ message: "Forbidden. You can only modify your own articles" });
  }
  // Already in requested state
  if (article.isArticleActive === isArticleActive) {
    return res.status(400).json({
      message: `Article is already ${isArticleActive ? "active" : "deleted"}`,
    });
  }

  //update status
  article.isArticleActive = isArticleActive;
  await article.save();

  //send res
  res.status(200).json({
     message: `Article ${isArticleActive ? "restored" : "deleted"} successfully`,
    article,
  });
});





//http://localhost:4000/user-api/users
//http://localhost:4000/author-api/users
//app.use(checkAuthor)