import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../routes/routes";

export default function RouteProvider() {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
