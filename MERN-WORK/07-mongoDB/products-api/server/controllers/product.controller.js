const Product = require('../models/product.model');

module.exports.showAllProducts = (req, res)=>{
    Product.find()
        .then(allProducts =>{res.json({results : allProducts})})
        .catch(err =>{
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.showOne = (req, res) =>{
    Product.findOne({_id:req.params.id})
        .then(showPoduct =>{res.json({results: showPoduct})})
        .catch(err =>{
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.createNewProduct = (req, res) =>{
    Product.create(req.body)
        .then(newProduct =>{res.json({results: newProduct})})
        .catch(err =>{
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.updateProduct = (req, res)=>{
    Product.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators: true})
            .then(updatedProduct =>{
                res.json({
                    results : updatedProduct
                })
            })
            .catch(err=>{
                res.json({
                    message : 'Something went wrong', error: err
                })
            })
}

module.exports.deleteProduct = (req, res)=>{
    Product.findByIdAndDelete({_id:req.params.id})
        .then(deletedProduct =>{
            res.json({results: deletedProduct})
        })
        .catch(err =>{
            re.json({message : 'Something went wrong', error: err})
        })
}