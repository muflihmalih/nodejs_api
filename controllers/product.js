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
    exports.update = (req, res) => {
            return res.send("update");
          }
    exports.remove = (req, res) => {
            return res.send("delete")
          }
    exports.read = (req, res) =>{
            const { id } = req.body
            Product.findOne({ _id:id }).exec((err, product) => {
              if (err) return res.json({ err })
              return res.json({ product })
            })
 }
