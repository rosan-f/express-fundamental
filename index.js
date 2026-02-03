import express from "express";
import router from "./route.js";

const app = express();
const PORT = 2000;

app.use(express.json());

app.use((req,res,next) =>{
  console.log(`A new request received at`+Date.now())
  console.log("Start")

  res.on('finish',()=>{
    console.log("End")
  })

  next()
})

app.get('/error',(req,res)=>{
  throw new Error("This is test Error");
})

app.use((err,req,res,next)=>{
  console.log(err.message)
  res.send('Internal Server Error')
})

app.get('/welcome', (req, res) => {
  console.log("Middle")
  res.send("Welcome Rosan")
})


app.get("/", (req, res) => {
  res.send("hello rosan");
});

app.use("/user", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
