import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { UIEditorPreview } from '../views/UIEditor';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'ui-editor',
        element: <UIEditorPreview />,
      },
      // {
      //   path: "dashboard",
      //   element: <Dashboard />,
      //   loader: ({ request }) =>
      //     fetch("/api/dashboard.json", {
      //       signal: request.signal,
      //     }),
      // },
      // {
      //   element: <AuthLayout />,
      //   children: [
      //     {
      //       path: "login",
      //       element: <Login />,
      //       loader: redirectIfUser,
      //     },
      //     {
      //       path: "logout",
      //       action: logoutUser,
      //     },
      //   ],
      // },
    ],
  },
]);
