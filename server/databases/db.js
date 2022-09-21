import mongoose from 'mongoose';


export const connection = async (username, password) => {
    const URL=`mongodb+srv://${username}:${password}@vs-mart.z5f732k.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('database connected successfully');

    } catch (error) {
        console.log("error while connecting database", error.massage);
    }
   
}
 
export default connection;

//this is database
