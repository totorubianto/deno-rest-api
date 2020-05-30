import { Client } from "https://deno.land/x/postgres/mod.ts";

export class Database {
    client: Client;
    constructor() {
        this.client = new Client({
            database: Deno.env.get('DB_NAME'),
            hostname: Deno.env.get('DB_HOST'),
            port: parseInt(Deno.env.get('DB_PORT') || "5000"),
            user: Deno.env.get('DB_USER'),
            password: Deno.env.get('DB_PASSWORD'),
        });
    }
    async query(sql: string) {
        await this.client.connect();
        const result = (await this.client.query(sql)).rowsOfObjects();
        await this.client.end();
        return result;
    }
}