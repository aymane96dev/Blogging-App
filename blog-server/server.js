const express= require("express");
const cors= require("cors");

const app= express();

let corsOptions={
    origin: ["http://localhost:4200","http://localhost:4000"]
};

app.listen(8000, () =>{
    console.log('server is strated and listening');
})

app.use(cors(corsOptions));

app.get("/",function(request,response){
    response.send("Hello node js!");
});

const article = require("./articles.js");
article(app);