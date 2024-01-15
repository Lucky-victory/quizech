import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";
import config from "../../drizzle.config";
// import drizzle from "drizzle-orm";

import mysql2 from "mysql2/promise";

const connection = mysql2.createPool(config.dbCredentials.uri);
export const db = drizzle(connection, { mode: "default", schema });
