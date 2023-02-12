const express= require("express");
const router= express.Router();
const mongoose= require('mongoose');

const Notice= require("../models/Notice");
const { Router } = require("express");

// Adding a Notice
router.post('/post-Notice',function(req,res){

    const notice = new Notice({
        _id:new mongoose.Types.ObjectId(),
        noticeHeading: req.body.noticeHeading,
        noticeBody: req.body.noticeBody,
        publishedDate: req.body.publishedDate,
        addedBy: req.body.addedBy
    });
    console.log(notice);

    notice.save()
        .then(result => {
            res.json({success:true,message:"Notice is added successfully"})
        })
        .catch(err=>{
            console.log(err);
            res.json({success:false,message:"Notice is not saved"}); 
        });

});

// Getting all the Notices
router.get('/getNotices',(req,res) => {
    Notice.find()
    .then(notices => {
        console.log(notices);
        res.json(notices);
        
    }).catch(err => {
        res.json(err);
    });
});

// Delete a Notice
router.delete("/delete-Notice/:noticeId",(req,res,next) => {
    Notice.remove({_id: req.params.noticeId})
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Notice is deleted"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


module.exports= router;