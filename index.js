import express from "express";
import morgan  from "morgan";
import helmet  from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from"body-parser";
const app = express();

const PORT = 4000;

const handleListening = () => 
 console.log(`Listening on: http://localhost:${PORT}`);

const handleHome=(req, res) => res.send("Hello from home~~~"); // 유저에게 반환하는 값, 반환할 게 없다면 계속 loading일 것

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));
 
app.get("/", handleHome);  // "/"와 handleHome 사이에 betweenHome가 있음

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);