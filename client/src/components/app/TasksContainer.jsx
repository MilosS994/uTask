import Task from "./Task";
import useTaskStore from "../../store/taskStore.js";
import { useEffect } from "react";

const TasksContainer = ({ sortBy }) => {
  const { tasks, getTasks, isLoading } = useTaskStore();

  useEffect(() => {
    getTasks(`?sortBy=${sortBy}`);
  }, [getTasks, sortBy]);

  if (isLoading) {
    return (
      <div className="w-full h-[60vh] flex justify-center items-center">
        <p className="text-2xl text-gray-800">Loading...</p>
      </div>
    );
  }

  if (!isLoading && (!tasks || tasks.length === 0)) {
    return (
      <div className="w-full h-[30vh] flex justify-center items-center">
        <p className="text-3xl text-gray-500 font-semibold text-center md:text-4xl lg:text-5xl">
          No Tasks Yet
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-6 pb-6 flex flex-col gap-3 md:grid lg:grid-cols-3 lg:gap-6 lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TasksContainer;
