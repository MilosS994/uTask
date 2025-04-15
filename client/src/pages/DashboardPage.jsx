import { useState } from "react";
// React Icons
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";

import Modal from "../components/app/Modal";
import MyProfile from "../pages/MyProfile";
// Zustand store for authentication
import useAuthStore from "../store/authStore.js";

const DashboardPage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const signout = useAuthStore((state) => state.signout);
  return (
    <main className="min-w-[100vw] min-h-[100vh] flex flex-col justify-between">
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 bg-blue-900 text-white border-b-4 border-yellow-600">
        <h2 className="text-neutral-300 text-lg italic">
          Welcome,{" "}
          {user && (
            <span className="text-yellow-600 font-semibold text-2xl ml-1">
              {user.name}
            </span>
          )}
        </h2>{" "}
        <div className="flex gap-4 items-center">
          <CgProfile
            className="text-4xl hover:text-neutral-300 cursor-pointer"
            onClick={() => setIsProfileOpen(true)}
          />
          <CiLogout
            className="text-4xl hover:text-neutral-300 cursor-pointer"
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
      <section className="flex-1"></section>
      {/* FOOTER */}
      <footer>
        <div className="p-4 text-center border-t-4 border-yellow-600">
          <p className="font-light text-md text-gray-800">
            &copy; {new Date().getFullYear()} uTask. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default DashboardPage;
