import { z } from "zod";

export { schemaJsonData, schemaJsonDataRecord } from "./json.schema";
export * from "./transforms";

export const schemaStatusResultDump = z.object({
  error: z.unknown(),
  result: z.unknown(),
});
