const  express=require("express");
const connectDB= require("./config/db");
const cors=require("cors");
const furnitures=require("./routes/api/furnitures");
const path = require('path')
//connecting to mongodb
//connectDB();

//Initiating the app
const app=express();
//enabling cors here for safety and  for accesibility information from other details
app.use(cors());

//handle JSON parsing properly
app.use(express.json({
    extended:false
}))
// Use the API grp instead of multiple paths for multiple routes
app.use("/api/furnitures",furnitures)

// Server the Static Files along with the api on the client on the same port
app.use(express.static(
    path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});


// STARTING SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));

