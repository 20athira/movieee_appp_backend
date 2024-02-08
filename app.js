const express=require("express")
const cors=require("cors")
const  mongoose=require("mongoose")

const app=express()
const movieRoute=require("./controller/movieRouter")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://AthiraRam:athira235@cluster0.orujzdx.mongodb.net/moviedb?retryWrites=true&w=majority",{
  useNewUrlParser:true
}
)


app.use("/api/movies",movieRoute)

app.listen(3001,()=>{
    console.log("Server running")
})