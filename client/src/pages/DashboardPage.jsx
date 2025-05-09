import { useState } from "react";
// React Icons
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

import Modal from "../components/app/Modal";
import MyProfile from "../pages/MyProfile";
import AddTaskForm from "../components/app/AddTaskForm";
// Zustand store for authentication
import useAuthStore from "../store/authStore.js";

import TasksContainer from "../components/app/TasksContainer";

const DashboardPage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const user = useAuthStore((state) => state.user);
  const signout = useAuthStore((state) => state.signout);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <main className="w-full min-h-[100vh] flex flex-col justify-between">
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-900 via-indigo-800 to-violet-700 text-white border-b-4 border-yellow-600 md:p-8 lg:p-10 hover:cursor-default">
        <h2 className="text-neutral-300 text-lg italic md:text-2xl lg:text-3xl">
          Welcome,{" "}
          {user && (
            <span className="text-yellow-600 font-semibold text-2xl ml-1 md:text-3xl lg:text-4xl">
              {user.name}
            </span>
          )}
        </h2>{" "}
        <div className="flex gap-4 items-center">
          <CgProfile
            title="Profile"
            className="text-3xl hover:text-neutral-300 cursor-pointer md:text-5xl"
            onClick={() => setIsProfileOpen(true)}
          />
          <CiLogout
            title="Logout"
            className="text-3xl hover:text-neutral-300 cursor-pointer md:text-5xl"
            onClick={() => signout()}
          />
        </div>
      </header>
      {/* PROFILE MODAL */}
      {isProfileOpen && (
        <Modal onClose={() => setIsProfileOpen(false)}>
          <MyProfile />
        </Modal>
      )}
      {/* TASKS SECTION */}
      <section className="flex-1">
        <div className="p-8 md:p-6 flex justify-evenly">
          <IoIosAddCircleOutline
            title="Add Task"
            className="text-3xl text-gray-800 hover:text-gray-600 cursor-pointer transition-all duration-100 ease-in-out md:text-5xl"
            onClick={() => setIsNewTaskOpen(true)}
          />
          {/* NEW TASK MODAL */}
          {isNewTaskOpen && (
            <Modal onClose={() => setIsNewTaskOpen(false)}>
              <AddTaskForm onClose={() => setIsNewTaskOpen(false)} />
            </Modal>
          )}
          <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6">
            <p className="text-sm font-semibold text-gray-800 lg:text-lg hover:cursor-default">
              Sort
            </p>
            <select
              name="sort"
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="text-sm text-gray-800 cursor-pointer focus:outline-none focus:border-transparent rounded-md shadow-sm p-1 lg:text-lg"
            >
              <option value="default">Default</option>
              <option value="priority-asc">Low to High</option>
              <option value="priority-desc">High to Low</option>
              <option value="done">Done</option>
              <option value="active-first">Active</option>
            </select>
          </div>
        </div>
        <TasksContainer sortBy={sortBy} />
      </section>
      {/* FOOTER */}
      <footer className="bg-gradient-to-t from-neutral-50 via-neutral-100 to-blue-100 hover:cursor-default">
        <div className="p-4 text-center border-t-4 border-yellow-600 lg:p-6">
          <p className="text-sm text-gray-800 md:text-lg">
            &copy; {new Date().getFullYear()} uTask. All rights reserved.
          </p>
          <p className="font-light text-sm text-gray-800 md:text-lg">
            Need help?{" "}
            <a
              className="text-blue-800 hover:underline font-semibold"
              href="mailto:utaskapp.support@gmail.com"
            >
              utaskapp.support@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default DashboardPage;
