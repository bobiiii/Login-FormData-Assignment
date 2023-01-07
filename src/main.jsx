import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './ErrorPage'
import LoginDataUi from "./assets/Components/LoginDataUi"
import LoginPage from "./assets/Components/LoginPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
        element: <LoginPage/>
    },
      {
        path: "loginDataUi",
        element: <LoginDataUi />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <RouterProvider router={router} />

  </>,
)
