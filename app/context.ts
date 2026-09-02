import { createContext } from "react-router";
import type { DrizzleD1Database } from "drizzle-orm/d1";

export const dbContext = createContext<DrizzleD1Database>();
