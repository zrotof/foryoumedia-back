const mongoose = require('mongoose');

const opts = { toJSON: { virtuals: true } };

const yearSchema = mongoose.Schema({
    year: {
        type: Number
    }
}, opts)

const programSchema = mongoose.Schema({

    hour: {
        type: Number
    },

    show: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Show'
    },
    purpose: {
        type: String
    },
    presenters : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee'
        }
    ],
    guests : {
        type: String
    }

})





yearSchema.virtual('id').get(function(){
    return this._id.toHexString();
})





module.exports = {
    Year : mongoose.model('Years', yearSchema),
    Program : mongoose.model('Program', programSchema)
}
