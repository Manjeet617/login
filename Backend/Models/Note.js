const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema ({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const NoteModel = mongoose.model('notes', NoteSchema);
module.exports= NoteModel;
