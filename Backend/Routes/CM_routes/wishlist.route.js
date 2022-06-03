const express = require("express");
const router = express.Router();
const {Wishlist} = require('../../Models/CM_model/Wishlist')


//post method to save data in wishlist
router.post("/insertWishlist", (req, res) => {

  //save data got from the client into the carts collection in the DB
  const wishlist = new Wishlist(req.body)

  wishlist.save((err) => {
          if(err) return res.status(400).json({ success: false, err})
          return res.status(200).json({ success: true})
      })
});


//get method to fetch data from wishlist
router.get('/:userId', function(req,res){
  Wishlist.find({userId: req.params.userId})
  .exec(function(err, lists){
      if(err) {
          console.log('error')
      }else {
          res.json(lists);
      }
  });
});

//delete from database
router.delete('/delete/:listId',function (req,res){
  Wishlist.deleteOne({_id: req.params.listId},function(err,list){
    if(err)
    res.json(err);
    else
    res.json("Successfully Deleted");
  });
});


module.exports = router;