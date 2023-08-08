import mongoose  from "mongoose";

export async function connect(){
    try {
        // mongoose.connect("mongodb+srv://abc:abc@123@ecommerce.x2y8e4n.mongodb.net/")

        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        console.log('kkkkkkkkkkkkkkkkkkkkk',process.env.MONGO_URI);
        

        connection.on('connected', ()=>{
            console.log('MongoDB connected successfully');
        })
        connection.on('error', (error)=>{
            console.log('MongoDB connection error. Please make sure MongoDB is running' + error);
            process.exit();
        })
    } catch (error) {
        console.log('Something went wrong');
        console.log(error); 
    }
}