const router = require("express").Router();
const CommentFree = require("../models/CommentFree");

//REGISTER
router.post("/create", async (req, res) => {
  try {
    const newCom = new CommentFree({
      user_name: req.body.user_name,
      desc: req.body.desc
    });

    const com = newCom.save();
    res.status(200).json(com);
  } catch (err) {
    res.status(500).json("error");
  }
});

router.get("/", async (req, res) => {
  try {
    const com = await CommentFree.find({});
    res.status(200).json(com);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;