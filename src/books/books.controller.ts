
import { Controller, Response, ServerRequest, ForbiddenError, Get, QueryParam, Cookie, Req, Res, Post, Body, Param, InternalServerError } from 'https://deno.land/x/alosaur/src/mod.ts';
import { BooksModel } from './books.model.ts'
@Controller('/books')
export class BooksController {
    constructor(
        private booksModel: BooksModel
    ) { }

    @Post('/create')
    async create(
    ) {
        const data = await this.booksModel.create();
        return data;
    }

    @Get('/list')
    async json(
        @Req() request: ServerRequest,
        @Res() response: Response,
        @QueryParam('name') name: string
    ) {
        const data = await this.booksModel.getBook();
        return data;
    }   

    @Get('/test/:id')
    gerParamId(@Param('id') id: string) {
        return id;
    }

    @Get('/test/:id/:name')
    gerParamIdName(@Param('id') id: string, @Param('name') name: string) {
        return `${id} ${name}`;
    }

    @Get('/test/:id/:name/detail')
    gerParamIdNameDetail(@Param('id') id: string, @Param('name') name: string) {
        return `${id} ${name} this is details page`;
    }

    @Post('/post')
    post(@Body() body: any, @QueryParam('name') name: string) {
        return body;
    }
}