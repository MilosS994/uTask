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
  const user = useAuthStore((state) => state.user);
  const signout = useAuthStore((state) => state.signout);
  return (
    <main className="min-w-[100vw] min-h-[100vh] flex flex-col justify-between">
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 bg-blue-900 text-white border-b-4 border-yellow-600 md:p-8 lg:p-10">
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
            className="text-4xl hover:text-neutral-300 cursor-pointer md:text-5xl"
            onClick={() => setIsProfileOpen(true)}
          />
          <CiLogout
            className="text-4xl hover:text-neutral-300 cursor-pointer md:text-5xl"
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
            className="text-4xl text-gray-800 hover:text-gray-600 cursor-pointer transition-all duration-100 ease-in-out md:text-5xl"
            onClick={() => setIsNewTaskOpen(true)}
          />
          {/* NEW TASK MODAL */}
          {isNewTaskOpen && (
            <Modal onClose={() => setIsNewTaskOpen(false)}>
              <AddTaskForm onClose={() => setIsNewTaskOpen(false)} />
            </Modal>
          )}
          <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6">
            <p className="text-md font-semibold text-gray-800 lg:text-lg">
              Sort
            </p>
            <select
              name="sort"
              id="sort"
              className="text-sm text-gray-800 cursor-pointer focus:outline-none focus:border-transparent rounded-md shadow-sm p-1 lg:text-lg"
            >
              <option value="default">Default</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
              <option value="done-first">Done</option>
              <option value="active-first">Active</option>
            </select>
          </div>
        </div>
        <TasksContainer />
      </section>
      {/* FOOTER */}
      <footer className="bg-blue-50">
        <div className="p-4 text-center border-t-4 border-yellow-600 md:p-6 lg:p-8">
          <p className="text-md text-gray-800 md:text-lg lg:text-xl">
            &copy; {new Date().getFullYear()} uTask. All rights reserved.
          </p>
          <p className="font-light text-md text-gray-800 md:text-lg lg:text-xl">
            Need help?{" "}
            <a
              className="text-blue-800 hover:underline"
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
