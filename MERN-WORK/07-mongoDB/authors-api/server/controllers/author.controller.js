const Author = require('../models/author.model');

module.exports.showAllAuthors = (req, res)=>{
    Author.find()
        .then(allAuthors => {res.json({results : allAuthors})})
        .catch(error => {res.json (error)})
}

module.exports.showOneAuthor = (req, res)=>{
    Author.findOne({_id:req.params.id})
    .then(oneAuthor =>{res.json({results: oneAuthor})})
    .catch(error => {res.json (error)})
}

module.exports.createAuthor = (req, res)=>{
    Author.create(req.body)
        .then(newAuthor => {res.json({results: newAuthor})})
        .catch(error => {res.json (error)})
}

module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true , runValidators: true})
            .then(updatedAuthor => {res.json({results: updatedAuthor})})
            .catch(error => {res.json (error)})
}

module.exports.deleteAuthor = (req, res)=>{
    Author.findOneAndDelete({_id:req.params.id})
        .then(deletedAuthor => {res.json({results: deletedAuthor})})
        .catch(error =>{res.json(error)})
}