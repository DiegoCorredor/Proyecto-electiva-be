const mongoose = require('mongoose')
const {Schema} = mongoose

const BookingSchema = new Schema({
    person:{
        type: String,
        required: true
    },
    car:{
        type: String,
        required: true
    },
    booking:{
        type: Date,
        required: true
    },
    delivery:{
        type: Date,
        required: true
    },
    observations:{
        type: String,
        required: false
    }
})

module.exports = mongoose.model('booking',BookingSchema)