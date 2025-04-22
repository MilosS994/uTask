import { useState } from "react";

// React Icons
import { FaCircle } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { FaUndoAlt } from "react-icons/fa";

import useTaskStore from "../../store/taskStore.js";
import EditTaskForm from "./EditTaskForm.jsx";
import Modal from "./Modal.jsx";

const Task = ({ task }) => {
  const { updateTask, deleteTask, toggleDone } = useTaskStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handlePriorityChange = (e) => {
    if (task.done) return;
    const newPriority = parseInt(e.target.value);
    updateTask(task._id, { priority: newPriority });
  };

  const handleDone = () => toggleDone(task._id);
  const handleDelete = () => deleteTask(task._id);
  const handleEdit = () => {
    if (!task.done) {
      setTaskToEdit(task);
      setIsEditModalOpen(true);
    }
  };
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setTaskToEdit(null);
  };
  const handleSaveEdit = (id, updatedTitle, updatedDescription) => {
    updateTask(id, { title: updatedTitle, description: updatedDescription });
    handleCloseEditModal();
  };

  return (
    <div
      className={`p-4 border-yellow-600 border-1 rounded-xl shadow-lg bg-blue-50 md:p-6 flex flex-col justify-between ${
        task.done ? "bg-gray-300 cursor-not-allowed" : ""
      }`}
    >
      <div>
        <h2
          className={`text-md text-gray-800 font-bold mb-2 md:text-lg lg:text-xl lg:mb-3 xl:text-2xl hover:cursor-default ${
            task.done ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </h2>
        <p className="text-gray-800 wrap-break-word text-sm mb-6 md:text-md lg:text-md lg:mb-8 hover:cursor-default">
          {task.description}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <FaCircle
            title="Priority"
            className={`text-xl md:text-2xl ${
              task.priority === 3
                ? "text-red-700"
                : task.priority === 2
                ? "text-yellow-700"
                : "text-green-700"
            }`}
          />
          <select
            name="priority"
            value={task.priority}
            onChange={handlePriorityChange}
            className="text-sm text-gray-800 cursor-pointer focus:outline-none focus:border-transparent rounded-md shadow-sm p-1"
            disabled={task.done}
          >
            <option value="3">High</option>
            <option value="2">Medium</option>
            <option value="1">Low</option>
          </select>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <FaPenToSquare
            title="Edit Task"
            className={`text-2xl text-gray-800 hover:text-gray-600 cursor-pointer transition-all duration-100 ease-in-out md:text-2xl xl:text-3xl ${
              task.done ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleEdit}
          />
          {/* Check if task is done to show the correct icon */}
          {task.done ? (
            <FaUndoAlt
              title="Undo Task"
              className="text-2xl text-gray-800 hover:text-gray-600 cursor-pointer transition-all duration-100 ease-in-out md:text-2xl xl:text-3xl"
              onClick={handleDone}
            />
          ) : (
            <IoMdDoneAll
              title="Mark as Done"
              className="text-2xl text-green-800 hover:text-green-600 cursor-pointer transition-all duration-100 ease-in-out md:text-2xl xl:text-3xl"
              onClick={handleDone}
            />
          )}

          <AiOutlineDelete
            title="Delete Task"
            className="text-red-800 text-2xl hover:text-red-600 cursor-pointer transition-all duration-100 ease-in-out md:text-2xl xl:text-4xl"
            onClick={handleDelete}
          />
        </div>
      </div>
      {/* EDIT TASK MODAL */}
      {isEditModalOpen && taskToEdit && (
        <Modal onClose={handleCloseEditModal}>
          <EditTaskForm
            task={taskToEdit}
            onSave={handleSaveEdit}
            onCancel={handleCloseEditModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Task;
