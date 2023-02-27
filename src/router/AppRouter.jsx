import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPages } from "../heroes/pages/DcPages"
import { MarvelPages } from "../heroes/pages/MarvelPages"

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="marvel" element={<MarvelPages />} />
            <Route path="dc" element={<DcPages />} />

            <Route path="login" element={<LoginPage />} />

            <Route path="/" element={<Navigate to="/marvel" />} />
            
        </Routes>
    </>
  )
}
