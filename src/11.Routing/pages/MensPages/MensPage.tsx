import { NavLink, Outlet } from "react-router-dom";
import styles from '../../RoutingApp.module.css'

function MensPage() {
    return(
        <>
            <>
                <h1>Mens wadrobe</h1>
                <nav style={{background: "lightblue"}}>
                    <ul style={{ listStyle: "none", display: "flex", gap: "10px", margin: "5px" }}>
                        <li>
                            <NavLink   
                                className={({ isActive }) =>
                                    isActive ? `${styles.activeLink}` : "text-black"
                                }
                                to={"/men/shirt"}>
                                Mens shirt
                            </NavLink>
                        </li>
                        <li>
                            <NavLink   
                                className={({ isActive }) =>
                                    isActive ? `${styles.activeLink}` : "text-black"
                                }
                                to={"/men/ties"}>
                                Mens Ties
                            </NavLink>
                        </li>
                    </ul>

                </nav>


                {/* in here we need to show CHILD routing  */}
                <Outlet></Outlet>
            </>
        </>

    );
}

export default MensPage;