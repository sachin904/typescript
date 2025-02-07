"use strict";
//use of pick api :- it allows users to pick or select field froms one interface or type two another type 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function updateprops(Updateprops) {
    console.log(`name:${Updateprops.name},age:${Updateprops.age},email:${Updateprops.email}`);
}
updateprops({ name: "rakesh", age: 28, email: "rakesh@gmail.com" });
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfAge({
    name: "rahul", age: 18,
    id: 0,
    email: "",
    password: ""
}, {
    name: "akash", age: 20,
    id: 0,
    email: "",
    password: ""
});
console.log(result);
const user2 = {
    name: "sachin"
};
function partialFunction(user2) {
    console.log(user2.name);
}
partialFunction(user2);
let userreadonly = {
    id: 23,
    name: "sachin",
    email: "kksas@gmail.com",
    age: 10,
    password: "xsdsjbd"
};
const users1 = {
    "john123": { age: 21, name: "john" },
    "tony123": { age: 20, name: "tony" }
};
users1["john123"].age;
const users2 = new Map();
users2.set("johny123", { name: "johny", age: 30 });
users2.set("mic123", { name: "mick", age: 28 });
const user = users2.get("johny123");
console.log(user);
///////type inference in  zod
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const UserProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    age: zod_1.z.number().min(18).optional()
});
app.put("/user", (req, res) => {
    const { success } = UserProfileSchema.safeParse(req.body);
    const updateBody = req.body;
    if (!success) {
        res.status(411).json({});
        return;
    }
    else {
        res.json("update body");
    }
});
