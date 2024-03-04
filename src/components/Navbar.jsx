
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <nav className="w-full bg-slate-100 flex py-5 px-1 h-20">
      <ul className="flex justify-between md:justify-around w-full">
        <Link
          to="/"
          className="text-slate-500 font-black hover:text-slate-400 text-lg"
        >
          O nama
        </Link>

        <Link
          to="/program"
          className="text-slate-500 font-black hover:text-slate-400 text-lg"
        >
          Program
        </Link>

        <Link
          to="/linkovi"
          className="text-slate-500 font-black hover:text-slate-400 text-lg"
        >
          Linkovi
        </Link>

        <Link
          to="/Arhiva"
          className="text-slate-500 font-black hover:text-slate-400 text-lg"
        >
          Arhiva
        </Link>

        <Link
          to="/kontakt"
          className="text-slate-500 font-black hover:text-slate-400 text-lg"
        >
          Kontakt
        </Link>
      </ul>
    </nav>
  );
}
