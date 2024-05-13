const mongoose = require('mongoose')
const resultSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    resultUser: [String],
    questionArr: [
        {
            questions:String,
            correctAnswer:String
        }
    ],
})

module.exports = mongoose.model('Result', resultSchema)