import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true},
    completed: { type: Boolean, default: false},
    priority: { type: String, required: true }

},{
  timestamps: true 
}

);

const TodoModel = mongoose.model("Todo", todoSchema);

export default TodoModel;