import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import BlogPost from './pages/Blog/BlogPost.jsx';
import ManagePosts from './pages/Dashboard/ManagePosts.jsx';
import ManagePortfolios from './pages/Dashboard/ManagePortfolios.jsx';
import ManageMesseges from './pages/Dashboard/ManageMesseges.jsx';
import PortfolioProjects from './pages/Portfolio/PortfolioProjects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:blogId",
        element: <BlogPost />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/portfolio/:projectId",
        element: <PortfolioProjects />,
      },
      {
        path: "/manageposts",
        element: <ManagePosts />,
      },
      {
        path: "/manageportfolios",
        element: <ManagePortfolios />,
      },
      {
        path: "/managemsg",
        element: <ManageMesseges />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
