const ProductController = require('../controllers/product.controller');

module.exports = (app)=>{
    app.get('/api/products', ProductController.showAllProducts),
    app.get('/api/product/:id', ProductController.showOne),
    app.post('/api/products/new', ProductController.createNewProduct)
}