
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { useIsMobile } from "@/hooks/use-mobile"

interface LayoutProps {
  children: React.ReactNode
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const Layout = ({ children, categories, activeCategory, onCategoryChange }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Sidebar 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
      <Navbar />
      <div className={cn(
        "transition-all duration-300 ease-in-out pt-16",
        isMobile ? "ml-0" : "ml-0 md:ml-64"
      )}>
        {children}
      </div>
    </div>
  )
}

export default Layout
