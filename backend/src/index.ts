import express from "express"
const app = express()

app.use(express.json())

app.get('/api/v1/contents', (req, res)=>{
  
})


app.listen(3000)