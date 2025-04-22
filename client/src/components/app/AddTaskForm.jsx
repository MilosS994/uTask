import { useState } from "react";
import useTaskStore from "../../store/taskStore.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddTaskForm = ({ onClose }) => {
  const createTask = useTaskStore((state) => state.createTask);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(2);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMessage("Title is required!");
      return;
    }

    await createTask({ title, description, priority });
    setTitle("");
    setDescription("");
    setPriority(2);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Add New Task</h2>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(parseInt(e.target.value))}
        className="border rounded px-2 py-1 cursor-pointer"
      >
        <option value="3">High</option>
        <option value="2">Medium</option>
        <option value="1">Low</option>
      </select>
      {errorMessage && (
        <p className="text-red-700 font-semibold text-sm">{errorMessage}</p>
      )}
      <Button type="submit" className="w-full cursor-pointer">
        Create Task
      </Button>
    </form>
  );
};

export default AddTaskForm;
