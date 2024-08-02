import express from "express";
import cors from "cors";

const app = express();
import router from "./routes/shoes";

app.use(cors());
app.use(router);
app.use(express.json());

export default app;
