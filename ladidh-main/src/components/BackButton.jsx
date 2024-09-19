import { useNavigate } from "react-router-dom";

function BackButton({ children }) {
  const navigate = useNavigate();
  return (
    <button
      className="font-semibold text-lg sticky top-10 z-10 flex items-center gap-2"
      onClick={() => navigate(-1)}
    >
      <i className="fa-solid fa-arrow-left"></i>
      {children}
    </button>
  );
}

export default BackButton;
