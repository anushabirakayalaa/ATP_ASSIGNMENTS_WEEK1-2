1. generetae package.json
    npm init -y
2. create server.js

3. install,import "express and create http serever. assign port


### Connect MongoDB Database
RESTAPI -> mongodb native driver -> MongoDB server
REST API -> mongodb ODM tool(mongoose) -> Mongodb server
a. install mongoose and connect to mongodb server
b. create a Schema of resource(user) schema is a blueprint of the object 
c. create a model of that schema
d. perform db peroations on that model
###  create a product api
product obj schema: {pid, productName, price}
1. POST /products
2.GET /products
3. GET /products/<pid> 
### objectId
4. PUT /products/<pid> 

Error Handling
>both should actually send in json format but by default html doc will be veiwed
>we can customize it actually
> for that we can take support of error handling middleware
>diff in normal middleware and error handling middleware is that we can take 4 paramters in EHM and 3 in M 
> suchas function errorhandler(err,req,res,next ) but in normal middleware we only have req,res,next
we need to keep that errorhandler middleware at the end of the main backend file i.e server.js


running validators during update
we can make this run validators then it will run automatically in update route even if the update happedned then also it checks the condition if its valid or not 
in new:true, runValidators:true we need to use then its going to this check 

.gitignore
to ignore the hevay storage files and including them in the file
