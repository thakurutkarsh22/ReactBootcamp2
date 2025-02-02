import { Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminPage from "./pages/AdminPage";
import PageNotFound from "./pages/PageNotFound";
import MensPage from "./pages/MensPages/MensPage";
import ShirtComponent from "./Component/MenComponent/ShirtComponent";
import TiesComponent from "./Component/MenComponent/TiesComponent";

import styles from './RoutingApp.module.css'


// CONSIDER RoutingApp as App.tsx
function RoutingApp() {
    return (
        <>
            <nav style={{border: "1px solid black", padding: "10px", borderRadius: "5px"}}>
                <ul>
                    <li>
                        <NavLink   
                        className={({ isActive }) =>
                                isActive ? `${styles.activeLink}` : "text-black"
                        }
                        to={"/"}>
                                    Home
                        </NavLink>
                        
                    </li>

                    <li>
                    <NavLink 
                    className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : "text-black"
                    }
                    to={"/admin"}>Admin</NavLink>
                    </li>

                    <li>
                        <NavLink 
                        className={({ isActive }) =>
                            isActive ? `${styles.activeLink}` : "text-black"
                        }
                        to={"/men"}>Men</NavLink>
                    </li>
                </ul>
            </nav>


            {/* REGISTRATION OF ROUTES */}

            <Suspense fallback={<div>Loading....</div>}>
            
            <Routes>

                {/* 1. SIMPLE ROUTING */}
                <Route path="/" element={<HomePage />}></Route>

                <Route path="/admin" element={
                    <PrivateRoute>
                        <AdminPage />
                    </PrivateRoute>
                }></Route>

                {/* this route handles everying else  */}
                <Route path="/*" element={<PageNotFound />} />

                {/*  2. Little complex routing    */}

                <Route path="/men" element={<MensPage />}>
                    <Route path="shirt" element={<ShirtComponent />} />
                    <Route path="ties" element={<TiesComponent />} />
                </Route>





            </Routes>
            
            
            
            </Suspense>
        
        </>

    );
}

export default RoutingApp;