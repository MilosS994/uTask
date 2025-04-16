import { create } from "zustand";
import apiClient from "../services/api.js";

const useTaskStore = create((set, get) => ({
  tasks: [],
  isLoading: false,
  error: null,

  createTask: async (data) => {
    try {
      await apiClient.post("/tasks", data);
      await get().getTasks();
    } catch (err) {
      console.error("Create task failed: ", err.message);
    }
  },

  getTasks: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.get("/tasks");
      set({ tasks: response.data.tasks, isLoading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Failed to fetch tasks",
        isLoading: false,
      });
    }
  },

  updateTask: async (id, updatedFields) => {
    try {
      const response = await apiClient.put(`/tasks/${id}`, updatedFields);
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task._id === id ? response.data.task : task
        ),
      }));
    } catch (err) {
      console.error("Update task failed:", err.message);
    }
  },

  deleteTask: async (id) => {
    try {
      await apiClient.delete(`/tasks/${id}`);
      set((state) => ({
        tasks: state.tasks.filter((task) => task._id !== id),
      }));
    } catch (err) {
      console.error("Delete task failed:", err.message);
    }
  },

  toggleDone: async (id) => {
    const task = get().tasks.find((t) => t._id === id);
    if (!task) return;
    await get().updateTask(id, { done: !task.done });
  },
}));

export default useTaskStore;
