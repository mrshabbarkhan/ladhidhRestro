import { useSelector } from "react-redux";
import OrderActions from "./OrderActions";
import UserAvatar from "./UserAvatar";
import UserDetails from "./UserDetails";
import UserFooter from "./UserFooter";
// import AuthForm from "../auth/AuthForm";
import RegisterForm from "../auth/RegisterForm";
import LoginForm from "../auth/LoginForm";
import { useState } from "react";
import EditUserDetails from "./EditUserDetails";

function ProfilePage() {
  const { user } = useSelector((state) => state.userAuth);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false)

  if (user && showEditForm) {
    return <EditUserDetails user={user} seterFn={setShowEditForm} />;
  }

  return (
    <div>
      {user ? (
        <>
          <div className="flex gap-5">
            <UserAvatar />
            <UserDetails seterFn={setShowEditForm} user={user} />
          </div>
          <section className="flex items-center justify-around py-6 rounded-xl my-4 Profile_List">
            <OrderActions />
          </section>
          <section>
            <UserFooter />
          </section>
        </>
      ) : (
        <div
          // onClick={handleClick}
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overley"
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative">
            {showRegisterForm ? (
              <RegisterForm setRegister={setShowRegisterForm} />
            ) : (
              <LoginForm setRegister={setShowRegisterForm} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
