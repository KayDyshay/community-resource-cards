
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-64 h-16 bg-white border-b-2 border-black z-50 px-6 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold font-serif hover:text-[#d946ef] transition-colors">
        THE TECH TRIBUNE
      </Link>
      <Link 
        to="/about" 
        className="px-4 py-2 text-black hover:text-[#d946ef] transition-colors font-serif"
      >
        About
      </Link>
    </nav>
  )
}

export default Navbar
