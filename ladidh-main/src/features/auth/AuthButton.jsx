import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthButton() {
  const [showForm, setShowForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const handleClick = (e) => {
    if (e.target.className.includes("overley")) {
      setShowForm(false);
    }
  };
  return (
    <>
      <span
        onClick={() => setShowForm(!showForm)}
        className="flex items-center gap-2 text-xl"
      >
        <i className="fa-solid fa-user "></i>
        <h1>Login</h1>
      </span>
      {showForm && (
        <div
          onClick={handleClick}
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overley"
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative">
            <div
              onClick={() => setShowForm(!showForm)}
              className="text-black absolute right-10 top-5"
            >
              <i class="fa-regular fa-circle-xmark"></i>
            </div>
            {showRegisterForm ? (
              <RegisterForm setRegister={setShowRegisterForm} />
            ) : (
              <LoginForm setRegister={setShowRegisterForm} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AuthButton;
