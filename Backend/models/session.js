// req mongoose library
const mongoose = require('mongoose')
const sessionSchema = new mongoose.Schema({
    // type of activity
    exercise: {
        type: String,
        required: true
    },
    // time of activity
    reps: {
        type: String,
        required: true
    },
    // comment 
    weight: {
        type: String,
        required: true
    },
    // date when activity was performed
    date: {
        type: String,
        required: true
    },
    // date of post
    posted: {
        type: Date,
        required: true,
        default: Date.now
    }
})

// export the module
module.exports = mongoose.model('Session', sessionSchema)