import { useState, useEffect } from "react";
import useTaskStore from "../../store/taskStore.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditTaskForm = ({ task, onSave, onCancel }) => {
  const updateTask = useTaskStore((state) => state.updateTask);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(2);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMessage("Title is required");
      return;
    }
    await updateTask(task._id, { title, description, priority });
    onSave();
  };

  const handleCancel = () => {
    onCancel();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Edit Task</h2>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(parseInt(e.target.value))}
        className="border rounded px-2 py-1"
      >
        <option value="3">High</option>
        <option value="2">Medium</option>
        <option value="1">Low</option>
      </select>
      {errorMessage && (
        <p className="text-red-700 font-semibold text-sm">{errorMessage}</p>
      )}
      <div className="flex justify-end gap-2">
        <Button type="button" onClick={handleCancel} className="cursor-pointer">
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="border-gray-800 border-2 cursor-pointer hover:bg-blue-800 hover:text-white hover:border-blue-800"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditTaskForm;
