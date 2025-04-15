const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-blue-50 p-6 rounded-lg w-[90%] max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-5xl font-semibold text-gray-800 hover:text-gray-600 transition duration-100 cursor-pointer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
