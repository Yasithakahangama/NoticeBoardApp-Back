const mongoose= require('mongoose');

//NoticeSchema
const NoticeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    noticeHeading: {type:String , required: true},
    noticeBody: {type:String , required: true},
    publishedDate: {type:String , required: true},
    addedBy: {type:String , required: true}
});

var Notice = mongoose.model('Notice', NoticeSchema);

module.exports = Notice;