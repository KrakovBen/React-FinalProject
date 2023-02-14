const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    state: {
        type: String,
        maxLength: 256,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
        minLength: 2,
        required: true
    },
    city: {
        type: String,
        trim: true,
        minLength: 2,
        required: true
    },
    street: {
        type: String,
        trim: true,
        minLength: 2,
        required: true
    },
    houseNumber: {
        type: Number,
        required: true
    },
    zip: {
        type: Number,
    }
});

module.exports = addressSchema;