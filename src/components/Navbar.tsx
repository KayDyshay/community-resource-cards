
import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"
import { Gamepad } from "lucide-react"

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <nav className={`fixed top-0 z-50 h-16 bg-white border-b-2 border-black flex items-center justify-between px-4 sm:px-6 ${isMobile ? 'left-0 right-0' : 'left-64 right-0'}`}>
      <div className="w-10 sm:w-12 md:w-14">
        {/* Empty space for menu icon on mobile */}
      </div>
      <Link to="/" className="text-lg sm:text-xl md:text-2xl font-bold font-serif hover:text-[#d946ef] transition-colors truncate">
        THE TECH TRIBUNE
      </Link>
      <div className="flex items-center space-x-4">
        <Link 
          to="/game" 
          className="flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white hover:bg-purple-700 transition-colors rounded-md"
        >
          <Gamepad className="h-4 w-4" />
          <span>Play</span>
        </Link>
        <Link 
          to="/about" 
          className="px-3 py-1.5 sm:px-4 sm:py-2 text-black hover:text-[#d946ef] transition-colors font-serif"
        >
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
