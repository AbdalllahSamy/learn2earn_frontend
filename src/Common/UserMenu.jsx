import { useEffect, useRef, useState } from "react";
import Avatar from "../assets/Landing/instructor-avatar-2.png";
import { FaCrown } from "react-icons/fa";
const UserMenu = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  //TODO: implement the small design of the triangle on the top right of the menu

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <img
        src={Avatar}
        width={36}
        height={36}
        className=" rounded-full cursor-pointer"
        alt="user-avatar"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute top-10 right-1 w-32 p-2 bg-white shadow-xl flex flex-col rounded-lg  before:bg-red-600">
          <div className="px-1 items-center flex gap-2 pb-2 cursor-pointer">
            <FaCrown className="text-yellow-500" size={20} />
            <span className="text-yellow-500  whitespace-nowrap ">
              Go Premium
            </span>
          </div>
          <div className=" border-1 border-gray-200 w-full" />
          <div className=" p-2 flex gap-2 flex-col cursor-pointer">
            <div>Edit Profile</div>
            <div onClick={handleLogout}>Log Out</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
