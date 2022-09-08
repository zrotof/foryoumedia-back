const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    civility: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    position: {
        type: String
    },
    image: {
        type: String
    }
});

exports.Employee = mongoose.model('Employee', employeeSchema);
