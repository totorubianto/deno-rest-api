import { DATA_TYPES, Model } from 'https://deno.land/x/denodb/mod.ts';

export class Flight extends Model {
    static table = 'users';
    // static timestamps = true;

    static fields = {
        user_id: {
            primaryKey: true,
            // autoIncrement: true,
        },
        first_name: DATA_TYPES.STRING,
        last_name: DATA_TYPES.STRING,
        email: DATA_TYPES.STRING,
        password: DATA_TYPES.STRING,
    };
}