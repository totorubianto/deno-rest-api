import { Area, container } from 'https://deno.land/x/alosaur/src/mod.ts';
import { BooksController } from './books.controller.ts';

@Area({
    controllers: [BooksController],
})

export class BooksArea {}