require('dotenv').config();
const mongoose = require('mongoose')
const {FlashCardModel} = require('./schema')


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })

const flashcard1 = new FlashCardModel({
    question: "Which bird has eyes that are larger than its brain?",
    hint: "I am bigger than Big Bird",
    answer: "Ostrich"
})

const flashcard2 = new FlashCardModel({
    question: "What was the first publicly traded U.S. company to reach a $1 trillion market cap?",
    hint: "One of these a day keeps the doctor away",
    answer: "Apple"
})

const flashcard3 = new FlashCardModel({
    question: "What was the first console video game that allowed the game to be saved?",
    hint: "Chains have them",
    answer: "The Legend of Zelda"
})

const flashcard4 = new FlashCardModel({
    question: "Which city served as the capital of the United States from 1785 until 1790?",
    hint: "The Big Apple",
    answer: "New York"
})

const flashcard5 = new FlashCardModel({
    question: "In the X-Men film franchise, Halle Berry played the role of which character?",
    hint: "Weather related",
    answer: "Storm"
})

const flashcard6 = new FlashCardModel({
    question: "A poke bowl is a diced raw fish dish that originated in which U.S. state?",
    hint: "LAI",
    answer: "Hawaii"
})

const flashcards = [flashcard1, flashcard2, flashcard3, flashcard4, flashcard5, flashcard6]

FlashCardModel.deleteMany()
    .then(() => FlashCardModel.insertMany(flashcards))
    .then(() => mongoose.connection.close())