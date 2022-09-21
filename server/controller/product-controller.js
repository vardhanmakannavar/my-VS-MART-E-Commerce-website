
//import product from '../models/product-schema.js';
import Product from '../models/product-schema.js'


export const getProducts = async (req, res) => {
      try{
            const products = await Product.find({});
            
            res.status(200).json(products);
            console.log(products);
      }  catch(error) {
            res.status(500).json({ message: error.message});      

      }        
}

export const getProductById = async (req, res) => {
      try{
            const id = req.params.id;
            const product = await Product.findOne ({ 'id': id})
            console.log(product);
            res.status(200).json(product);

      } catch(error) {
            res.status(500).json({ message: error.message});
            console.log('error');
      }
}