const mongoose = require('mongoose')

const TransactionsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        // required: [true, 'Please add some text']
    },
    description: {
        type: String,
        // required: [true, 'Please add a description']
    },
    activity: {
        type: String,
        // required: [true, 'Please add an activity']
    },
    duration: {
        type: Number,
        // required: [true, 'Please add a positive number']
    },
    date: {
        type: Number,
        // required: [true, 'Please add a date']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transactions', TransactionsSchema)