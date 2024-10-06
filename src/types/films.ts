import { z } from 'zod';

export type Film = {
  title: string;
};

/**
 * This is an example of a zod parser
 * Point of it is to be used to parse fields coming from
 * sources that you unsure of the specificity of it.
 * We declare a type to demonstrate the body
 * We export the const with the same name to share the SCHEMA
 * property when it is being imported
 * Look in ./test-db.ts for an example of how it's used to parse data from a db
 */
export const Film = {
  SCHEMA: z.object({
    title: z.string()
    // We call transform to explicitly indicate to typescript that
    // the parsed data is actually the type for the compiler
    // this enables stronger intellisense
  }).transform((x): Film => x)
} as const;

