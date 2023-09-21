import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

/* PAGES -------------------------------------------------------------------- */
const NotFound = lazy(() => import('./pages/NotFound'));
const Layout = lazy(() => import('./pages/Layout'));
const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/Signin'));
const SignUp = lazy(() => import('./pages/Signup'));
const Todo = lazy(() => import('./pages/Todo'));

/* ROUTES ------------------------------------------------------------------- */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/',
        element: <>main</>,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/todo',
        element: <Todo />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
export default App;
