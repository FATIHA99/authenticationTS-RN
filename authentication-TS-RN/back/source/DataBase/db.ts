import mongoose from'mongoose'
import  dotenv from 'dotenv'
dotenv.config();
mongoose.set('strictQuery', false);
module.exports = mongoose.connect('mongodb+srv://fatiha:password0000@cluster0.amgbbph.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('DATABASE CONNECTED');
    })
    .catch(() => {
        console.log('CONNECTIN FAILED ')
    })