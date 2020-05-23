import { Area } from 'https://deno.land/x/alosaur/src/mod.ts';
import { BooksController } from './books.controller.ts';
@Area({
    baseRoute: '/app',
    controllers: [BooksController],
})
export class BooksArea {}