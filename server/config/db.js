const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to Database: ${conn.connection.host}`);
    } catch( err ) {
        console.error(`Error occured while connecting to Database:
        ${err}`);
    }
}

module.exports = connectDb;