const express= require("express");
//handle all the route parametrs with ease
const router= express.Router();

router.get("/test",(req,res) => {
    res.send("test api route is working fine")
})
//@routw GET api/furnitues
//@description Give all the furniture
//@access public
router.get("/",(req,res)=>{
    //Furniture.find()
    //.then((funitures) => res.json(funitures))
    //.catch((err) => res.status(404),json({nofurnitures:"searched furniture is not found"}))
    res.json({ok:"all books route is working fine"})
});
module.exports=router;