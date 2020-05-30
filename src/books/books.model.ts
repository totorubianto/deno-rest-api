import { Database } from '../../config/postgres.ts';
import { Injectable } from 'https://deno.land/x/alosaur/src/mod.ts';

@Injectable()
export class BooksModel {
    constructor(
        private db: Database
    ) { }
    
    async getBook() {
        const data: any = await this.db.query('SELECT * FROM books;');
        return data;
    }

    async create(body: any) {
        const data: any = await this.db.query(
            `INSERT INTO books (book_author, book_name, book_description, book_published, book_cover, book_sinopsis) VALUES ('${body.book_author}','${body.book_name}','${body.book_description}','${body.book_published}', '${body.book_cover}','${body.book_sinopsis}');`
        );
        return body;
    }

    async list(){
        const data: any = await this.db.query(
            "SELECT * FROM books"
        );
        return data;
    }

    async delete(id:string){
        const deleted: any = await this.db.query(
            `SELECT * FROM books WHERE book_id=${id}`
        );
        const data: any = await this.db.query(
            `DELETE FROM books WHERE book_id=${id}`
        );
       
        return deleted;
    }

    async update(id:string, body:any){
        const data: any = await this.db.query(
            `UPDATE books SET book_id = '${body.book_id}' book_author = '${body.book_author}' book_name = '${body.name}' book_description = '${body.book_description}' book_published = '${body.book_published}' book_cover = '${body.book_cover}' book_sinopsis = '${body.book_sinopsis}';`
        );
        return data;
    }
}
