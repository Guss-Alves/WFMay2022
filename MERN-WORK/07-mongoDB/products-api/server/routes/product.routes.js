const ProductController = require('../controllers/product.controller');

module.exports = (app)=>{
    app.get('/api/products', ProductController.showAllProducts),
    app.get('/api/product/:id', ProductController.showOne),
    app.post('/api/products/new', ProductController.createNewProduct),
    app.put('/api/product/edit/:id', ProductController.updateProduct),
    app.delete('/api/product/delete/:id', ProductController.deleteProduct)
}