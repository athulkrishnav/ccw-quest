const mongoose = require('mongoose')
const resultSchema = new mongoose.Schema({
    resultUser: [String],
    questionArr: [
        {
            questions:String,
            correctAnswer:String
        }
    ],
})

module.exports = resultSchema