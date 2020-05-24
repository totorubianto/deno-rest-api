import { Database } from '../../config/postgres.ts';
import { Flight } from './schemas/books.schema.ts'
import { Injectable } from 'https://deno.land/x/alosaur/src/mod.ts';
export interface User {
    name: string;
    age: number;
}
@Injectable()
export class BooksModel {
    constructor(
        private db: Database
    ) { }
    // : Promise<User[]>
    async getBook() {
        const data: any = await this.db.query('SELECT * FROM books;');
        return data;
    }

    async create() {
        const data: any = await this.db.query(
            "INSERT INTO books (book_id, book_author, book_name, book_description, book_published, book_cover, book_sinopsis) VALUES ('','','','','', '','');"
        );
        return data;
    }
}
