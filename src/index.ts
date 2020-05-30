import { App } from 'https://deno.land/x/alosaur/src/mod.ts';
import { settings } from './app.settings.ts';
import { config } from "https://deno.land/x/dotenv/mod.ts";
// create application
const app = new App(settings);
config({ safe: true });
app.listen();