import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      
        <Header />

        <Outlet />

        <Footer />

    </div>
  )
}
