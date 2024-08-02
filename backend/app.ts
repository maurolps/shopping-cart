import express from "express";
import cors from "cors";

const app = express();
import router from "./routes/shoes";

app.use(router);
app.use(express.json());
app.use(cors());

export default app;
