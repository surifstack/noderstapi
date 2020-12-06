const express = require("express");
const router = new express.Router();

const Students = require("../models/Students");

router.get("/student" , async (req , res) =>{

    try{
        const students = await Students.find();
        res.status(200).send(students);
    }catch(err){
        res.status(401).send(err);
    }
});
router.post("/students" , async (req , res) =>{
    try{
        
        const user =  new Students(req.body);
        const createUser = await user.save();
          res.status(200).send(createUser);

    }catch(err){

        res.status(400).send(err);

    }

});
router.patch('/update_student/:id', async(req  , res ) =>{

    try{
        const _id = req.params.id;
    const result = await Students.findByIdAndUpdate(_id , req.body , {
        new : true
    });
    res.status(201).send(result);

    }catch(er){

        res.status(404).send(err);
    }
    

});

router.delete("/delet_student/:id" , async (req , res ) =>{

   
    try{
        const _id = req.params.id;
        const result = await Students.findByIdAndDelete(_id);

        res.status(201).send(result);


    }catch(e){
        res.status(401).send(e);
    }
});

module.exports = router;