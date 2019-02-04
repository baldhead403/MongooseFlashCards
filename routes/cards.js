const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js")
const {FlashCardModel} = require("../db/schema")

// This is the index router
router.get('/',  (req, res) => {
    
    FlashCardModel.find({})
   .then((flashcards) => {
       console.log(flashcards)
       res.render('index', flashcards)
    })
    .catch((error) => {
        console.log(error)
    })
})
// this is the next question button router
router.get('/newcard', (req,res) => {
    const flashcardId = req.params._id
    FlashCardModel.find(flashcardId)
    .then((flashcards) =>{ 
      res.send({flashcards:flashcards})
    })
})
// this is the route to add a new flashcard
router.post("/addcard" ,(req,res)=> {
    FlashCardModel.find(req.params).then(() => {
        const newflashcard = new FlashCardModel(req.body)
        flashcards.push(newflashcard) 
        flashcards.save().then((flashcards)=>{
            res.send(flashcards)
        })
    })
})
// this is the route to update the db
router.put("/update", (req,res)=> {
    let id = req.body._id
    const updatedFlashcard = req.body 
    FlashCardModel.findOneAndUpdate({id:_id}, {$set:{updatedFlashcard:flashcards}}, {new:true})
        .then((flashcard) => {
           
            response.json(flashcards)
          })
          .catch((error) => {
            console.log(error)
          })
}) 
// this is the route to delete a flashcard
router.delete("/delete", (req,res)=> {
   const flashcardId = req.params._id

    FlashCardModel.findOndAndDelete({id:flashcardId})
.then(() => {
    console.log('flashcard deleted')
  })
  .catch((error) => {
    console.log(error)
  }) 
    })




module.exports = router