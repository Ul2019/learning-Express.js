
const bodyParser = require("body-parser")
const express = require("express");
const { request } = require("http");
const { getMaxListeners } = require("process");
const app = express();
app.use(bodyParser.json());
const route = express.Router();


const port =process.env.port || 8080;
app.use("/", route);

app.listen(port,()=>{
    console.log(`App running on Port ${port}`)
});

const users =[{
    id: "1",
    name: "mihlali" ,
    email: "mihlalidzingwa2@gmail.com",
    password: "mihlali200"
},
{
id: "2",
name: "wendy",
email: "wendymagobiane001@gmail.com",
password: "7623"

}
];


route.get("/users", (req , res) =>{
    res.status(200).send(users);
});

route.get("/users/:email/:password/:id",(req,res)=>{
    const email = req.params.email;
    const password = req.params.password;
    const user = users.filter(item => item.email === email && item.password === password);
    res.status(200).send(user);
});
route.post("/register",(req,res)=>{
const{
    name,email,password
} = req.body;

const user ={
    name : "mimi",
    email : "mim@gmail.com",
    password : "0978"
}
users.push(user)
res.status(200).send(users)
});


route.delete("/delete/:id", (req,res)=>{
    const id= req.params.id;
    const user= users.findIndex(item =>
      item.id ==id);
      users.splice(user,id)  
        res.status(200).send(users)    
});
app.put("/update/:id", (req,res)=>{

    const id = req.params.params.id;
    const user = users.forEach(item =>
        if(item.id === id){
            item.name = req.body.name,
            item.email = req.body.email,
            item.password = req.body.password
        });
        res.json(users)
});





