const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = () =>{
    console.log(`Listening on : http://localhost:${PORT}`);
}

function handleHome(req, res){
    res.send("Hello from Home!");
} //하나는 request obj, 다른 하나는 response obj

function handleProfile(req, res){
    res.send("you are on my profile!");
}
app.get("/",handleHome); 
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);