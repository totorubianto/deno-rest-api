import { BooksArea } from './books/books.area.ts';
import { AppSettings } from 'https://deno.land/x/alosaur/src/mod.ts';
import { Log } from './global/middleware/log.middleware.ts';

export const settings: AppSettings = {
    areas: [BooksArea],
    middlewares: [Log],
    logging: false
};