import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Modal from "../components/app/Modal";
import MyProfile from "../pages/MyProfile";
// Zustand store for authentication
import useAuthStore from "../store/authStore.js";

const DashboardPage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  return (
    <main className="min-w-[100vw] min-h-[100vh] flex flex-col">
      <header className="flex justify-between items-center p-6 bg-blue-900 text-white border-b-4 border-yellow-600">
        <h2 className="text-neutral-300 text-lg italic">
          Welcome,{" "}
          {user && (
            <span className="text-yellow-600 font-semibold text-2xl ml-1">
              {user.name}
            </span>
          )}
        </h2>{" "}
        <CgProfile
          className="text-4xl hover:text-neutral-300 cursor-pointer"
          onClick={() => setIsProfileOpen(true)}
        />
      </header>
      {isProfileOpen && (
        <Modal onClose={() => setIsProfileOpen(false)}>
          <MyProfile />
        </Modal>
      )}
      <section></section>
      <footer></footer>
    </main>
  );
};

export default DashboardPage;
