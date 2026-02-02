import express from "express";
import router from "./route.js";

const app = express();
const PORT = 2000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello rosan");
});

app.use("/user", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
