import Home from "../pages/Home";
import Root from "../pages/Root";


const routes = [
  {
    id: "root",
    path: "/",
    element: <Root />,
    children: [
      {
        id: "home",
        title: "Namangan",
        path: "/",
        element: <Home />,
      },
      {
        id: "search",
        title: "Search",
        path: "/search",
        element: <>Hello</>,
      },
      {
        id: "NotFound",
        title: "NotFound",
        path: "*",
        element: <>Hello world</>,
      },
    ],
  },
];

export default routes;
