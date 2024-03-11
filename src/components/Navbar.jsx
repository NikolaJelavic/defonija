import { Link } from "react-router-dom";
import { useState } from "react";

const NavLink = ({ to, children, onClick }) => (
  <li>
    <Link
      to={to}
      className="text-2xl bg-slate-100 px-2  rounded-xl my-3 font-light text-slate-500 hover:text-slate-400"
      onClick={onClick}
      style={{
        fontFamily: "'Cormorant Unicase', sans-serif",
      }}
    >
      {children}
    </Link>
  </li>
);

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-2 md:p-6 bg-slate-100">
      <div className="flex justify-between items-center mx-auto relative z-10">
        <div className="flex items-center">
          <button
            className="lg:hidden text-white text-3xl focus:outline-none bg-slate-300 p-4 justify-left"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <img
            src="https://res.cloudinary.com/dapwniqqn/image/upload/v1710179436/Defonija/Logo/DEFONIJA_LOGO_KOLOR_FLAT_asxxmz.png"
            alt="Defonija Logo"
            className="h-16 w-screen flex justify-center items-center lg:hidden"
          />
        </div>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:justify-evenly  lg:space-x-4 lg:w-full w-40 absolute lg:relative bg-slate-300 lg:bg-transparent top-full lg:top-0 left-0 lg:left-auto  lg:mt-0 p-4 lg:p-0 `}
        >
          <NavLink to="/" onClick={toggleMenu}>
            O nas
          </NavLink>
          <NavLink to="/program" onClick={toggleMenu}>
            Program
          </NavLink>
          <NavLink to="/povezave" onClick={toggleMenu}>
            Povezave
          </NavLink>
          <NavLink to="/arhiv" onClick={toggleMenu}>
            Arhiv
          </NavLink>
          <NavLink to="/kontakt" onClick={toggleMenu}>
            Kontakt
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
