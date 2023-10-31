import {NavLink, Outlet} from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/users"
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/posts"
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Posts
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}

export default Header;
