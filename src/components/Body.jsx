import { createBrowserRouter,RouterProvider } from "react-router-dom"
import SignUp from "./SignUp"
import SignUpHI from "./SignUpHI"
import Login from "./Login"
const Body = () => {
 const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Login/>
    },
    {
        path:"/in/",
        element: <SignUp/>
    },
    {
        path:"/in-hi/",
        element: <SignUpHI/>
    }
])
  return (
    <RouterProvider router={appRouter}/>
   )
}

export default Body
