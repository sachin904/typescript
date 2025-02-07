//use of pick api :- it allows users to pick or select field froms one interface or type two another type 

interface User{
    id:number;
    name:string;
    email:string;
    age:number;
    password:string;
}
type updatedprops=Pick<User,'name'|'age'|'email'>
function updateprops(Updateprops:updatedprops){
    console.log(`name:${Updateprops.name},age:${Updateprops.age},email:${Updateprops.email}`)
}

updateprops({name:"rakesh",age:28,email:"rakesh@gmail.com"});

function sumOfAge(user1:User,user2:User){
    return user1.age+user2.age
}

const result=sumOfAge({
    name: "rahul", age: 18,
    id: 0,
    email: "",
    password: ""
},{
    name: "akash", age: 20,
    id: 0,
    email: "",
    password: ""
});
console.log(result);


////use of partial:- partial allow us to mark all the properties of a type as optional

type updatepropsOptional=Partial<updatedprops>;
const user2:updatepropsOptional={
    name:"sachin"
}
function partialFunction(user2:updatepropsOptional){
    console.log(user2.name);
}
partialFunction(user2);


////readonly enforces that the inner values of a type which has been assigned as readonly to be constant
interface Userreadonly{
    id:number;
   readonly name:string;
    readonly email:string;
    age:number;
    password:string;
}
let userreadonly:Readonly<Userreadonly>={
    id: 23,
    name: "sachin",
    email: "kksas@gmail.com",
    age: 10,
    password: "xsdsjbd"
}
//userreadonly.age=12;  ///this allows to change the value 
//userreadonly.name="sachin";  ///this does not allows to change  value because it is readonly property

///record is another way to creaate object 
//record is typescript concept
type Users=Record<string,{age:number;name:string;}>;
const users1:Users={
    "john123":{age:21,name:"john"},
    "tony123":{age:20,name:"tony"}
} 
users1["john123"].age;

///map i snother way to create object 
//map is a javascript concept
type Users1={
    name:string;
    age:number;
}
const  users2=new Map<string,Users1>();
users2.set("johny123",{name:"johny",age:30})
users2.set("mic123",{name:"mick",age:28})
const user=users2.get("johny123");
console.log(user);

///////type inference in  zod

import {z} from "zod";
import express from "express";
const app= express();

const UserProfileSchema=z.object({
   name:z.string().min(1),
   email:z.string().email(),
   age:z.number().min(18).optional() 
}) ;
type FinalUserSchema = z.infer< typeof UserProfileSchema>;
app.put("/user",(req,res)=>{
    const {success}=UserProfileSchema.safeParse(req.body);
    const updateBody:FinalUserSchema=req.body;
    if(!success){
        res.status(411).json({});
        return
    }
    else{
        res.json("update body");
    }
})
