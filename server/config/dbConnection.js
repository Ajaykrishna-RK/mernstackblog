const mongoose = require("mongoose")




mongoose.set('strictQuery', true)
mongoose.set('strictQuery', false)

const connectDb = async()=>{
try{
    await  mongoose.connect("mongodb+srv://Ajaykrishna_73:Ajaykrishna_73@cluster0.kpusjgn.mongodb.net/?retryWrites=true&w=majority")
    console.log("database connected")
}
catch(err){
   console.log(err,"error")

}
}

module.exports = connectDb