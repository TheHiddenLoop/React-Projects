import { useSetRecoilState } from "recoil";
import { axiosInstance } from "../lib/axios.js";
import { todoListState } from "../atom/atom.js";
import { toast } from "react-hot-toast";

export function useTodoStore() {
  const setTodo = useSetRecoilState(todoListState);

  const storeTodo = async (formData) => {
    try {
      const res = await axiosInstance.post("/add", formData);
      toast.success(res.data.message);
      return res.data;
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  const getTodo = async () => {
    try {
      const res = await axiosInstance.get("/todo");
      setTodo(res.data.todo);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch todos");
    }
  };

  const deleteTodo=async (_id) => {
    try {
      const res = await axiosInstance.delete(`/delete/${_id}`);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete todos");
    }
  };


  const updateTodo=async (formData) => {
    try {
      const res = await axiosInstance.put("/update", formData);
      toast.success(res.data.message);
      return res.data;
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    }
  }

  return { storeTodo, getTodo, deleteTodo, updateTodo };
}
