import { SquarePen, Trash2, X } from 'lucide-react';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../atom/atom';
import { useEffect } from 'react';
import { useTodoStore } from '../store/useTodoStore';

export default function EditTodo() {
  const [model, setModel] = useState(false);
  const [editData, setEditData] = useState({
    title: '',
    description: '',
    date: '',
    priority: '',
    _id: ''
  });

  const todo = useRecoilValue(todoListState);
  const { getTodo, deleteTodo, updateTodo } = useTodoStore();

  useEffect(() => {
    getTodo();
  }, []);


  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleDelete = async (_id) => {
    await deleteTodo(_id);
    getTodo();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModel(false);
    await updateTodo(editData);
    getTodo();
  };

  const handleEdit = async (e) => {
    setModel(true);
    setEditData({ _id: e._id, title: e.title, description: e.description, date: e.date, priority: e.priority });

  }

  return (
    <div className="bg-white mt-[60px] px-4 relative">
      <div className="max-w-5xl mx-auto py-4">
        <h1 className="text-2xl font-semibold mb-6">Manage Todo</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-2 px-4 border border-gray-300">Title</th>
                <th className="text-left py-2 px-4 border border-gray-300">Completed</th>
                <th className="text-left py-2 px-4 border border-gray-300">Edit</th>
                <th className="text-left py-2 px-4 border border-gray-300">Delete</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((e, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="py-2 px-4 border border-gray-300 font-medium">{e.title}</td>
                  <td className="py-2 px-4 border border-gray-300">
                    {e.completed ? (
                      <span className="text-green-600 font-semibold">Completed</span>
                    ) : (
                      <span className="text-yellow-600 font-semibold">Pending</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    <button style={{cursor:e.completed?"not-allowed":"pointer"}} disabled={e.completed}><SquarePen onClick={() => handleEdit(e)} className="text-blue-600 hover:scale-110 transition" /></button>
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    <Trash2 className="text-red-600 cursor-pointer hover:scale-110 transition" onClick={() => handleDelete(e._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {model && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg relative">
              <form onSubmit={handleSubmit}>

                <div className='flex justify-between items-center mb-6'>
                  <h1 className="text-2xl font-semibold ">Edit Todo</h1>
                  <button
                    onClick={() => setModel(false)}
                    className=" bg-gray-600 rounded-full p-1 text-white hover:text-black hover:bg-gray-400 hover:rotate-180 transition"
                  >
                    <X />
                  </button>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Task Name</label>
                  <input
                    type="text"
                    name="title"
                    value={editData.title}
                    onChange={handleChange2}
                    placeholder="Enter task name"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    name="description"
                    rows="4"
                    value={editData.description}
                    onChange={handleChange2}
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
                    value={editData.date}
                    onChange={handleChange2}
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Priority</label>
                  <select
                    name="priority"
                    value={editData.priority}
                    onChange={handleChange2}
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
                    Update Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
