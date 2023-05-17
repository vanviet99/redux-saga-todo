const express = require('express')
const app = express()
const cors = require("cors")
const userRouter = require('./router/userRouter')
var bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


app.use("/user", userRouter)


app.listen(8888,()=>{
  console.log("server is running")
})