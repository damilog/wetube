//const express = require("express");
import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome=(req, res) => res.send("Hello from home~~~"); // 유저에게 반환하는 값, 반환할 게 없다면 계속 loading일 것

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {   
    console.log('Between');
    next();
};

app.use(betweenHome); // 미들웨어 순서가 중요함. 접속이 있을때 위부터 아래로 시작함 // middelware -> route 순서로 작동

app.get("/", handleHome);  // "/"와 handleHome 사이에 betweenHome가 있음

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);