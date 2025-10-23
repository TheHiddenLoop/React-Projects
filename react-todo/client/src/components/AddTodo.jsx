import React, { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

export default function AddTodo() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    priority: '',
  });

  const {storeTodo} =useTodoStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const result = await storeTodo(formData); 
  };

  return (
    <div className="bg-white mt-[60px] px-4">
      <div className="max-w-5xl mx-auto py-4 flex flex-wrap justify-center gap-[90px]">
        
        <form onSubmit={handleSubmit} className="max-w-lg w-full md:w-[500px]">
          <h1 className="text-2xl font-semibold mb-6">Add Todo</h1>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Task Name</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task name"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add a description"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Due Date</label>
            <input
              type="date"
              name="date"
              min="1900-01-01"
              max="2999-12-31"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 text-white font-semibold rounded-lg bg-blue-500 w-[170px] hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex items-center">
          <img src="/images/todo.jpg" alt="Todo Illustration" className="w-[430px] object-contain hidden md:block" />
        </div>
      </div>
    </div>
  );
}
