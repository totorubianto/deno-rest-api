
import { Middleware } from 'https://deno.land/x/alosaur/src/decorator/Middleware.ts';
import { MiddlewareTarget } from 'https://deno.land/x/alosaur/src/models/middleware-target.ts';

@Middleware(new RegExp('/'))
export class Log implements MiddlewareTarget {
    date: Date = new Date();

    onPreRequest(request: any, responce: any) {
        return new Promise((resolve, reject) => {
            this.date = new Date();
            resolve();
        });
    }

    onPostRequest(request: any, responce: any) {
        return new Promise((resolve, reject) => {
            const req = request['method'];
            const url = request['url'];
            console.log('\x1b[36m%s\x1b[0m', `${new Date(Date.now()).toUTCString()}`, "|", "\x1b[30m", "\x1b[43m", `${new Date().getTime() - this.date.getTime()}ms`, "\x1b[0m", "|", "\x1b[30m", "\x1b[42m", req, "\x1b[0m", "|", url);
            resolve();
        });
    }
}