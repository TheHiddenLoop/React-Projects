import { PencilIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../atom/atom';
import { useTodoStore } from '../store/useTodoStore';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const todo = useRecoilValue(todoListState);
  const { getTodo, updateTodo } = useTodoStore();

  useEffect(() => {
    getTodo();
  }, []);  

 const filteredTodo = todo.filter(e => !e.completed);
  

  const [model, setModel] = useState(false);
  const [editData, setEditData] = useState({
    completed: '',
    _id: ''
  });

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setModel(false);
    await updateTodo(editData);
    getTodo();
  };

  const handleEdit = async (e) => {
    setModel(true);
    setEditData({ _id: e._id, title: e.title, completed: true });

  }


  return (
    <div className="bg-white mt-[60px] px-4">
      <div className="max-w-5xl mx-auto py-4">
        <div className="flex justify-between items-center mb-[30px]">
          <h2 className="text-3xl font-semibold">My Tasks</h2>
          <button className="py-1 px-[20px] rounded-lg bg-[#f0f2f5] font-semibold">
            <Link to="/add/todo">Add Task</Link>
          </button>
        </div>

        {filteredTodo.length === 0 ? (
          <p className="text-gray-500">No tasks available.</p>
        ) : (
          filteredTodo.map((e, i) => (
            <div key={i} className="flex justify-between items-center mb-[20px] border-b pb-3">
              <div>
                <p className="font-medium">{e.title}</p>
                <p className="text-[#8897a7] md:w-[820px]">{e.description}</p>
              </div>
              <div className="bg-[#8897a7] p-1 rounded-md">
                <PencilIcon size={20} onClick={() => handleEdit(e)} className="text-black hover:text-gray-700 cursor-pointer" />
              </div>
            </div>
          ))
        )}
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
                  readOnly
                  value={editData.title}
                  onChange={handleChange2}
                  placeholder="Enter task name"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-2 text-white font-semibold rounded-lg bg-blue-500 w-[170px] hover:bg-blue-600 transition"
                >
                  Mark to Complete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
