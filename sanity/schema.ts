import { type SchemaTypeDefinition } from "sanity";
import clubs from "./clubs";
import events from "./events";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [clubs, events],
};
