import express from "express";
import morgan  from "morgan";
import helmet  from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from"body-parser";
import { localMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from"./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(helmet());
app.set('view engine', "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(localMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app; 