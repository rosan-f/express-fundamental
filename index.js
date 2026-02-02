import router from './route.js';
import express from 'express'

const app = express();

const PORT = 2000;

// basic routing
app.get('/',(req,res) =>{
  res.send("hello rosan");
})

app.use('/user', router)


app.listen(PORT,() => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
