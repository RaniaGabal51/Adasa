import { useState } from "react";
import logo from "../../assets/logo-GdqARQRt.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { path: "/", label: "الرئيسية" },
    { path: "/blog", label: "المدونة" },
    { path: "/about", label: "من نحن" },
  ];

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/95 backdrop-blur-xl border-b border-transparent">
        <div className="container">
          <div className="flex justify-between items-center h-20">
            <Link className="flex items-center gap-3 group" to="/">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                <img
                  alt="Photography Logo"
                  className="w-full h-full object-cover"
                  src={logo}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  عدسة
                </span>
                <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-card rounded-full p-1.5 border border-[#262626]">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-subtext hover:text-white"
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 ">
              <button className="p-3 text-neutral-500 hover:text-primary hover:bg-card rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                <i className="fa-solid fa-magnifying-glass w-5 h-5"></i>
              </button>
              <Link
                className="text-sm px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-linear-to-r from-primary to-tertiary text-white"
                to="/blog"
              >
                ابدأ القراءة
              </Link>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-3 text-subtext hover:text-white hover:bg-card rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              {showMenu ? (
                <i className="fa-solid fa-xmark text-xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-xl"></i>
              )}
            </button>
          </div>
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              showMenu
                ? "max-h-80 opacity-100 translate-y-0 pb-6"
                : "max-h-0 opacity-0 -translate-y-3"
            }`}
          >
            <div className="bg-card backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-subtext hover:bg-[#1a1a1a] hover:text-white"
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <NavLink
                  className="text-sm text-center mt-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-linear-to-r from-primary to-tertiary text-white"
                  to="/blog"
                >
                  ابدأ القراءة
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}