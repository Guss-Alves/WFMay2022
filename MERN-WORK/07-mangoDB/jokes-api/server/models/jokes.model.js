const mongoose = require('mongoose');// here you import mongoose

const JokeSchema = new mongoose.Schema({
    setup :{
        type: String,
        required: [true, 'the joke setup is required'],
        minlength: [3, 'joke setup must be at least 3 characters long']
    },
    punchline: {
        type: String,
        required: [true, 'The joke punchline is required'],
        minlength: [3, 'the joke punchline must be at least 3 characters long']
    }
}, {timestamps: true});

// const User = mongoose.model('User', UserSchema);// example
const Joke = mongoose.model('Joke', JokeSchema)

// module.exports = User; //example
module.exports = Joke;