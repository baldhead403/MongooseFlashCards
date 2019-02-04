const mongoose = require('mongoose')
const Schema = mongoose.Schema


const FlashCardSchema = new Schema({
    question: {type: String, unique:true},
    hint: {type: String, unique:true},
    answer:{type: String, unique:true},
    

},{collection:'flashcards'}) 


const FlashCardModel = mongoose.model('FlashCard',FlashCardSchema)


module.exports = {FlashCardModel}