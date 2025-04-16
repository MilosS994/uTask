import { FaCircle } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const Task = () => {
  return (
    <div className="p-4 border-yellow-600 border-1 rounded-xl shadow-lg bg-blue-50 md:p-6">
      {/* Title and description */}
      <h2 className="text-md text-gray-800 font-bold mb-2 md:text-lg lg:text-xl lg:mb-3 xl:text-2xl">
        Do your homework
      </h2>
      <p className="text-gray-800 text-sm mb-6 md:text-md lg:text-lg lg:mb-8">
        Finish math exercises from today's class
      </p>
      {/* Commands */}
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <FaCircle className="text-2xl text-red-700 md:text-3xl xl:text-4xl" />
          <select
            name="priority"
            id="priority"
            className="text-sm text-gray-800 cursor-pointer focus:outline-none focus:border-transparent rounded-md shadow-sm p-1"
          >
            <option value="3">High</option>
            <option value="2">Medium</option>
            <option value="1">Low</option>
          </select>
        </div>
        <div className="flex gap-4">
          <FaPenToSquare className="text-2xl text-gray-800 hover:text-gray-600 cursor-pointer transition-all duration-100 ease-in-out md:text-3xl xl:text-4xl" />
          <IoMdDoneAll className="text-2xl text-green-800 hover:text-green-600 cursor-pointer transition-all duration-100 ease-in-out md:text-3xl xl:text-4xl" />
          <AiOutlineDelete className="text-red-800 text-2xl hover:text-red-600 cursor-pointer transition-all duration-100 ease-in-out md:text-3xl xl:text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Task;
