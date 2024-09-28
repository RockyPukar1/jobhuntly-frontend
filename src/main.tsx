import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/Dashboard'
import DashboardMessagesPage from './pages/Dashboard/DashboardMessagesPage'
import DashboardSettingsPage from './pages/Dashboard/DashboardSettingsPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import NotFoundPage from './pages/NotFoundPage'
import FindJobsPage from './pages/FindJobs'
import BrowseCompaniesPage from './pages/BrowseCompanies'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/find-jobs",
    element: <FindJobsPage />,
  },
  {
    path: "/browse-companies",
    element: <BrowseCompaniesPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "/dashboard/messages",
        element: <DashboardMessagesPage />
      },
      {
        path: "/dashboard/settings",
        element: <DashboardSettingsPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
