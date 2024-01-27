const  express=require("express");
const connectDB= require("./config/db");
const cors=require("cors");
//connecting to mongodb
connectDB();
//Initiating the app
const app=express();
//enabling cors here for safety and  for accesibility information from other details
app.use(cors());
//handle JSON parsing properly
app.use(express.json())
const port=process.env.PORT || 5000
app.listen(port, () => 
console.log(`Server is running on port ${port}`)
);