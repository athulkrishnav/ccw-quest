const express = require("express");
const router = express.Router();
const PostQuiz = require("../model/quizdata.model.js");
const Result = require("../model/result.js");

router.post("/", async (req, res) => {
  try {
    const data = await PostQuiz.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:value", async (req, res) => {
  try {
    const Data = await PostQuiz.find({ title: req.params.value });
    res.status(200).json(Data);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/result", async(req, res)=>{
  try {
    console.log(req.body);
    const data = await Result.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
})
router.get("/result/:userId", async(req, res)=>{
  const userId = req.params.userId
  try{
    const data = await Result.findOne({userId});
    console.log('reached');
    console.log(data);
    res.status(200).json({success:true, results:data});
  }catch(error){
    console.log(error);
    res.status(400).json(error);
  }
})
module.exports = router;
