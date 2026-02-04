create database
use db-name

read databases
show databases

create collection
db.createcollection(collection-name)

crud operations
insert insertmany find findone updateone(condition,update) deleteone or many

query operators
{field:{operator:value}} $eq,$neq,$gt,$gte,$lt,$lte,$in,$nin db.emp.findOne({skills:{$all:["javascript"]}})-$all is used to find the skills from the all without $all we cannot get the output it just hows the null

1. install moongose 
2. create schema
3. craete model of the schema 
4. perform db opertaions of the model

create product api {pid,product name,price} post /products get /products get /producttts/pid put /products/pid