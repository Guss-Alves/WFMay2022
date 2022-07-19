const Joke = require('../models/jokes.model');//here you are importing the model file, to have access to the db


//returns all the jokes
module.exports.showAllJokes = (req, res)=>{
    Joke.find()
        .then(allJokes =>{
            res.json({
                results: allJokes
            })
        })
        .catch(err =>{
            res.json({message: 'Something went wrong', error: err})
        })
}

//returns the joke with matching '_id'
module.exports.getById = (req, res)=>{
    Joke.findOne({_id:req.params._id})
        .then((foundJoke) =>{
            res.json({
                results: foundJoke
            })
        })
        .catch(err =>{
            res.json({message: 'Something went wrong', error: err})
        })
}

//creates a new joke
module.exports.createJoke = (req, res)=>{
    Joke.create(req.body)
        .then(newJoke =>{
            res.json({
                results: newJoke
            })
        })
        .catch(err =>{
            res.json({message: 'Something went wrong', error: err})
        })
}

//updates the joke with matching '_id'
module.exports.updateJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id:req.params._id}, // gettinh the joke by id to update
        req.body, // here is the form information that will be used to update
        {new:true, runValidators:true})
            .then(updatedJoke =>{
                res.json({
                    results: updatedJoke
                })
            })
            .catch(err =>{
                res.json({message: 'Something went wrong', error: err})
            })
}

//Removes the joke with matching '_id'
module.exports.deleteJoke = (req, res) =>{
    Joke.findByIdAndDelete({_id:req.params._id})
        .then(deletedJoke =>{
            res.json({
                results: deletedJoke
            }) 
        })
        .catch(err =>{
            res.json({message: 'Something went wrong', error: err})
        })
}
