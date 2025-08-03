import { Link, useNavigate } from "react-router-dom";
import { BtnBlack } from "./BtnBlack";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate('/');
    alert("You are logged out.");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 h-16 flex items-center justify-between px-6 shadow-sm">
      {/* Logo */}
      <Link to="/blogs" className="flex items-center gap-2">
        <img className="h-8" src="/logo.jpg" alt="logo" />
        <p className="text-2xl font-semibold">Medium</p>
      </Link>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link to="/publish">
          <BtnBlack label="Publish" />
        </Link>
        <button
          onClick={handleSignout}
          className="h-10 border rounded-full font-bold px-5 bg-black text-white"
        >
          LogOut
        </button>
      </div>
    </nav>
  );
};
