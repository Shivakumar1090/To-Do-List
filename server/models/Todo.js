const mongoose = require("mongoose");

const todoSchema  = new mongoose.Schema({
    title: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const Todos = mongoose.model("todolist" , todoSchema);
module.exports = Todos;