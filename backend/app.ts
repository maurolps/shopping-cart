import express from "express";

const app = express();
import router from "./routes/shoes";

app.use(router);
app.use(express.json());

export default app;
