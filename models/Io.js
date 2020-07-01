const mongoose = require('mongoose');

let IoSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    father_name: String,
    phone: String,
    firs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FIR'
        }
    ]
});

module.exports = mongoose.model('Io', IoSchema);