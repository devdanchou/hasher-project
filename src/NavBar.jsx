import { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-center bg-violet-50 shadow-lg">
        <div className="flex justify-between w-full max-w-6xl px-4 py-4">
          <div className="flex items-center text-2xl text-violet-900 font-ubuntu">
            <img
              src="https://static-task-assets.react-formula.com/899963.png"
              className="w-24 mr-2"
            />
            hasher
          </div>
          {
            !isMobileMenuOpen && (
          <div className="hidden md:flex items-center text-xl font-medium text-violet-800">
            <button className="p-4">Home</button>
            <button className="p-4">About</button>
            <button className="p-4">Contact</button>
            <button className="ml-8 text-2xl text-red-600">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
            )
          }
          <button
            className="flex items-center text-2xl text-violet-900 md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="flex fixed top-0 right-0">
          <div className="bg-violet-950 text-violet-200 flex flex-col items-center w-40 pt-12  pb-6 rounded-bl-lg shadow-lg">
            <button className="flex justify-start py-6 pl-8 text-xl">Home</button>
            <button className="flex justify-start py-6 pl-8 text-xl">About</button>
            <button className="flex justify-start py-6 pl-8 text-xl">Contact</button>
            <button className="text-3xl absolute top-0 right-0 m-3 text-violet-300"
            onClick={() => setIsMobileMenuOpen(false)}>
            <i class="fa-solid fa-circle-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
