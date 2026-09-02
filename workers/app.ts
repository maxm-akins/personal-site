import { createRequestHandler, RouterContextProvider } from "react-router";
import { drizzle } from "drizzle-orm/d1";

import { dbContext } from "../app/context";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  fetch(request, env) {
    const context = new RouterContextProvider();
    context.set(dbContext, drizzle(env.personal_site));
    return requestHandler(request, context);
  },
} satisfies ExportedHandler<Env>;
