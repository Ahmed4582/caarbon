import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../Components/DComponents/Loading/Loading";
import AuthRedirect from "./AuthRedirect";
import AuthProtectRoute from "./AuthProtectRoute";

const MainLayout = lazy(() => import("../Layout/MainLayout"));
const Home = lazy(() => import("../Pages/Home/Home"));
const AuthLayout = lazy(() => import("../Layout/AuthLayout"));
const Login = lazy(() => import("../Pages/Login/Login"));
const Error = lazy(() => import("../Pages/Error/Error"));
const CartPage = lazy(() => import("../Pages/CartPage/CartPage"));
const UserInfo = lazy(() => import("../Pages/UserInfo/UserInfo"));

const Details = lazy(() => import("../Pages/Details/Details"));
const Register = lazy(() => import("../Pages/SignUp/SignUp"));
const Products = lazy(() => import("../Pages/Product/Product"));
const UserProduct = lazy(() => import("../Pages/UserProduct/UserProduct"));
const ForgetPassword = lazy(() =>
  import("../Pages/ForgetPassword/ForgetPassword")
);
const Wish = lazy(() => import("../Pages/Wish/Wish"));
const CheckOut = lazy(() => import("../Pages/CheckOut/CheckOut"));
const PaymentSuccessful = lazy(() => import("../Pages/PaymentSuccessful/PaymentSuccessful"));
const OTP = lazy(() => import("../Pages/OTP/OTP"));

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "user-product",
          element: (
            <AuthProtectRoute>
              <UserProduct />,
            </AuthProtectRoute>
          ),
        },

        {
          path: "cart",
          element: (
            <AuthProtectRoute>
              <CartPage />
            </AuthProtectRoute>
          ),
        },
        {
          path: "UserInfo",
          element: (
            <AuthProtectRoute>
              <UserInfo />
            </AuthProtectRoute>
          ),
        },

        {
          path: "Products",
          element: <Products />,
        },
        {
          path: "Wish",
          element: (
            <AuthProtectRoute>
              <Wish />
            </AuthProtectRoute>
          ),
        },
        {
          path: "CheckOut",
          element: (
            <AuthProtectRoute>
              <CheckOut />
            </AuthProtectRoute>
          ),
        },
        {
          path: "PaymentSuccessful",
          element: (
            <AuthProtectRoute>
              <PaymentSuccessful />
            </AuthProtectRoute>
          ),
        },
        {
          path: "Details/:id",
          element: <Details />,
        },
      ],
    },
    {
      path: "/User",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: (
            <AuthRedirect>
              <Login />
            </AuthRedirect>
          ),
        },
        {
          path: "register",
          element: (
            <AuthRedirect>
              <Register />
            </AuthRedirect>
          ),
        },
        {
          path: "forgetPassword",
          element: (
            <AuthRedirect>
              <ForgetPassword />
            </AuthRedirect>
          ),
        },
        {
          path: "OTP",
          element: (
            <AuthRedirect>
              <OTP />
            </AuthRedirect>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <Suspense
        fallback={
          <>
            <Loading />
          </>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}
