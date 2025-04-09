import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center flex-col gap-10">
      <div className="flex items-center justify-center flex-col gap-2 lg:gap-4 xl:gap-6">
        <h1 className="text-3xl text-gray-800 font-bold md:text-4xl lg:text-5xl xl:text-[10rem]">
          404
        </h1>
        <h2 className="text-xl text-gray-800 font-light md:text-2xl lg:text-4xl xl:text-5xl">
          Page not found
        </h2>
        <p className="text-xl text-gray-800 md:text-2xl lg:text-4xl xl:text-5xl">
          ಥ_ಥ
        </p>
      </div>
      <button
        type="button"
        className="text-gray-600 text-md font-light cursor-pointer md:text-lg lg:text-2xl hover:text-gray-950 bg-transparent border-none p-0"
        onClick={goBack}
      >
        Pick up where you left 📝
      </button>
    </div>
  );
};

export default NotFoundPage;
