const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL || 'mongodb+srv://CodeWithAzhar:Azhar@@@3332@cluster0.rapmamy.mongodb.net/studycircle?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000 // 10 seconds
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = mongoose;