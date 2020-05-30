import { Client } from "https://deno.land/x/postgres/mod.ts";

export class Database {
    client: Client;
    constructor() {
        // this.client = new Client({
        //     database: "bookstore",
        //     hostname: "postgres",
        //     port: 5432,
        //     user: "user",
        //     password: "pass",
        // });
        this.client = new Client({
          database: "bookstore",
          hostname: "localhost",
          port: 5432,
          user: "postgres",
          password: "ulum1701",
        });  
    }
    async query(sql: string) {
        await this.client.connect();
        const result = (await this.client.query(sql)).rowsOfObjects();
        await this.client.end();
        return result;
    }
}