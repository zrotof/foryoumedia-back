const mongoose = require('mongoose');

const opts = { toJSON: { virtuals: true } };

const showSchema = mongoose.Schema({
    name: {
        type: String
    },
    description:{
        type: String
    },
    image:{
        type: String
    }
}, opts);

showSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

exports.Show = mongoose.model('Show', showSchema);