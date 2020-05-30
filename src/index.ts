import { App } from 'https://deno.land/x/alosaur/src/mod.ts';
import { settings } from './app.settings.ts';
import { config } from "https://deno.land/x/dotenv/mod.ts";
// create application
config({ safe: true, export: true });
const app = new App(settings);
app.listen();