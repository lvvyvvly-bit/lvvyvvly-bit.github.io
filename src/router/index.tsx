import { createHashRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Works from '../pages/Works';
import Contact from '../pages/Contact';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'works', element: <Works /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;
