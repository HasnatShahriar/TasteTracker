import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AllFood from "../pages/AllFood/AllFood";
import FoodDetails from "../components/FoodDetails";
import Purchase from "../pages/Purchase/Purchase";
import PrivateRoute from "./PrivateRoute";
import MyOrder from "../pages/MyOrder/MyOrder";
import AddFood from "../pages/AddFood/AddFood";
import MyAddedFood from "../pages/MyAddedFood/MyAddedFood";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Registration/>
      },
      {
        path: '/allFoods',
        element: <AllFood/>,
        loader : ()=> fetch(`${import.meta.env.VITE_API_URL}/foods`)
      },
      {
        path: '/food/:id',
        element: <FoodDetails/>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
      },
      {
        path: '/purchase/:id',
        element: <PrivateRoute><Purchase/></PrivateRoute>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
      },
      {
        path: '/myOrder',
        element: <MyOrder/>,        
      },
      {
        path: '/AddFood',
        element: <AddFood/>
      },
      {
        path: '/addedFood',
        element: <MyAddedFood/>,
        
      }
    ]
  },
]);

export default router;