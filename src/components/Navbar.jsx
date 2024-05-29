import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-2 md:p-6">
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
          } lg:flex lg:justify-evenly lg:space-x-4 lg:w-full w-60 absolute lg:relative lg:bg-transparent top-full lg:top-0 left-0 lg:left-auto lg:mt-0 p-2 lg:p-0`}
        >
          <NavLink to="/" onClick={toggleMenu} className="flex items-center">
            <img
              src="https://res.cloudinary.com/dapwniqqn/image/upload/v1716910762/Defonija/Menu/About_lqcxlw.jpg"
              alt="About Us"
              className="h-20  lg:h-16 lg:w-72"
            />
          </NavLink>
          <NavLink to="/program" onClick={toggleMenu} className="flex items-center">
            <img
              src="https://res.cloudinary.com/dapwniqqn/image/upload/v1716910763/Defonija/Menu/Events_t65c7b.jpg"
              alt="Program"
              className="h-20  lg:h-16 lg:w-72"
            />
          </NavLink>
          <NavLink to="/povezave" onClick={toggleMenu}>
        
            Povezave
          </NavLink>
          <NavLink to="/arhiv" onClick={toggleMenu}>
          <img
              src="https://res.cloudinary.com/dapwniqqn/image/upload/v1716910763/Defonija/Menu/Archive_ucwcji.jpg"
              alt="Program"
              className="h-20  lg:h-16 lg:w-72"
            />
           
          </NavLink>
          <NavLink to="/kontakt" onClick={toggleMenu}>
          <img
              src="https://res.cloudinary.com/dapwniqqn/image/upload/v1716910762/Defonija/Menu/Contact_uxnjhe.jpg"
              alt="Program"
              className="h-20  lg:h-16 lg:w-72"
            />
            
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
