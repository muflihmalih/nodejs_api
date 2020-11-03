const Product = require("../models/product")

exports.createProduct = (req, res)=>{
    const {productName, price, category, quantity, description} = req.body
    Product.findOne({productName}, (err, product)=>{
        if(err) return res.json({message: err})

        if(product){
            return res.json({message:"Product Duplicate"})
        }

        const newProduct = new Product({
            productName, price, category, quantity, description
        })
    
        newProduct.save((err, product)=>{
            if(err) return res.json({message: err})
            return res.json({product})
        })
    })
    
}
