
import { products } from "../constants/data.js";
import  product  from "../models/product-schema.js";



const defaultData = async() => {
    try{
            //await product.deleteMany({});
            await product.insertMany(products);
            console.log(products);

            console.log('data inserted successfully');
    } catch (error) {
        console.log('error while inserting data',error.message);
    }

}


export default defaultData;