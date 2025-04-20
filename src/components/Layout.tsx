
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const Layout = ({ children, categories, activeCategory, onCategoryChange }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Sidebar 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
      <Navbar />
      <div className="ml-64 pt-16">
        {children}
      </div>
    </div>
  )
}

export default Layout
