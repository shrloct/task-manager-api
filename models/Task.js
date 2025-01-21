const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        requide: [true, 'Title is required'],
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const task = mongoose.model('Task', taskSchema);

module.exports = task;