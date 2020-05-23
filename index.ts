import { App } from 'https://deno.land/x/alosaur/src/mod.ts';
import { settings } from './app.settings.ts';

// create application
const app = new App(settings);
app.listen();