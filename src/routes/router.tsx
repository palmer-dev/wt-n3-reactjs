import {createBrowserRouter} from "react-router-dom";
import PostListing from "../screens/PostListing.tsx";
import UserListing from "../screens/UserListing.tsx";
import Header from "../components/Navigation/Header.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children: [
            {
                path: "/posts",
                element: <PostListing/>,
            },
            {
                path: "/users",
                element: <UserListing/>,
            },
        ]
    }
]);
