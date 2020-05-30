
import { Controller, Response, ServerRequest, ForbiddenError, Get, QueryParam, Cookie, Req, Res, Post, Body, Param, InternalServerError } from 'https://deno.land/x/alosaur/src/mod.ts';
import { BooksModel } from './books.model.ts'
@Controller('/books')
export class BooksController {
    constructor(
        private booksModel: BooksModel
    ) { }

    @Post('/create')
    async create(
        @Body() body:any
    ) {
        const data = await this.booksModel.create(body);
        return data;
    }

    @Get('/list')
    async list(){
        const data = await this.booksModel.list();
        return data;
    }

    @Post('/update/:id')
    async update(@Param('id') id:string, @Body() body:any){
        const data = await this.booksModel.update(id, body);
        return data;
    }

    @Get('/delete/:id')
    async delete(@Param('id') id:string){
        const data = await this.booksModel.delete(id);
        return data;
    }
}