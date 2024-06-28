import { Error } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { ECommonLinkPath } from '../globalTypes';
import AboutUsPage from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
export const router = createBrowserRouter([
  {
    path: ECommonLinkPath.Error,
    element: <Error />,
  },
  {
    path: ECommonLinkPath.AboutUs,
    children: [
      {
        index: true,
        element: <AboutUsPage />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
  {
    path: ECommonLinkPath.Contact,
    children: [
      {
        index: true,
        element: <Contact />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
  {
    path: ECommonLinkPath.Home,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
