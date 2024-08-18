import  productModel  from '../model/product.js';

const getProducts= async(req,res)=>{
    try{

        const products=await productModel.find();
        res.json(products)
        res.end();
    }
    catch(err){

    }
   
}

const postProduct = async(req, res) => {
    try{
    const product = req.body;
    console,log(req.body)
    console.log(product);
    const newProduct = new productModel(product);
    
    await newProduct.save();
    }
    catch(err){
        console.log(err);
        res.status(500);

    }    
  };
  

export {getProducts,postProduct}

