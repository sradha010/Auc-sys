const express= require("express");
//handle all the route parametrs with ease
const router= express.Router();

router.get("/test",(req,res) => {
    res.send("test api route is working fine")
})
//@routw GET api/furnitues
//@description Give all the furniture
//@access public
//read opertaion 
router.get("/",(req,res)=>{
    //Furniture.find()
    //.then((funitures) => res.json(funitures))
    //.catch((err) => res.status(404),json({nofurnitures:"searched furniture is not found"}))
    res.json({ok:"all books route is working fine"})
});

//@route GET api/books/:id
//@description GET single furniture details by searchong ny the id 
//read and search opertion
router.get("/:id",(req,res)=>{
// furniture.findById(req.param.id)
// .then((furniture) => res.json(furniture))
// .catch((err)=> res.status(404).json({noFurnitureFound:"NO Furniture Found"}))
res.json({
    Ok:"all furniture route is wroking fine"
})
});
//@route GET api/books/:id
//@description save a new book
//create opertion
//@acces public
router.post("/",(req,res)=>{
    // furniture.create(req.body)
    // .then((furniture) => res.json({
      //  msg:new furniture added successfully
   // }))
    // .catch((err)=> res.status(404).json({noFurnitureerrFound:"NO Furniture created"}))
    res.json({
        Ok:"furniture route is wroking properly"
    })
    });

//@route GET api/books/:id
//@description find a furnitue by its id and update it
//read,uodate and search opertion
router.put("/:id",(req,res)=>{
    // furniture.findByIdAndUpadte(req.param.id,req.body)
    // .then((furniture) => res.json({
    //   msg:"furniture is updated successfully"
   // }))
    // .catch((err)=> res.status(400).json({
        //error:"couldn't update this furniture"
    //}))
    res.json({
        Ok:"update furniture route is wroking fine"
    })
    });



//@route GET api/books/:id
 //@description GET single furniture details by searchong ny the id 
 //read,delete and search opertion
    router.delete("/:id",(req,res)=>{
// furniture.findByIdAndRemove(req.param.id,req.body)
// .then((furniture) => res.json({
    msg:"this furniture is successfully deleted"
//}))
// .catch((err)=> res.status(404).json({
//  msg:"couldn't delete th funiture"
//}))
    res.json({
        Ok:"all furniture route is wroking fine"
    })
    });
    
module.exports=router;