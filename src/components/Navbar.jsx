
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
    // <nav className="w-full bg-slate-100 flex py-5 px-1 h-20">
    <nav className=" p-6 bg-slate-100">

        <div className="flex justify-between mx-auto relative z-10">

        <button
          className="lg:hidden text-white text-3xl focus:outline-none bg-slate-300 p-4 justify-left"
          onClick={toggleMenu}
        >
          &#9776;
        </button>


      {/* <ul className="flex justify-between md:justify-around w-full"> */}
      <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:justify-evenly  lg:space-x-4 lg:w-full w-40 absolute lg:relative bg-slate-300 lg:bg-transparent top-full lg:top-0 left-0 lg:left-auto  lg:mt-0 p-4 lg:p-0 `}
        >
        <NavLink
          to="/"
          onClick={toggleMenu}
        >
          O nama
        </NavLink>

        <NavLink
          to="/program"
          onClick={toggleMenu}
        >
          Program
        </NavLink>

        <NavLink
          to="/linkovi"
          onClick={toggleMenu}
        >
          Linkovi
        </NavLink>

        <NavLink
          to="/Arhiva"
          onClick={toggleMenu}
        >
          Arhiva
        </NavLink>

        <NavLink
          to="/kontakt"
          onClick={toggleMenu}
        >
          Kontakt
        </NavLink>
      </ul>
      </div>
    </nav>
  );
}
