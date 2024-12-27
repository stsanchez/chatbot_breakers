import { addKeyword,EVENTS } from "@builderbot/bot"
import path from 'path';
import fs from 'fs';

const contactoPath = path.join(process.cwd(), 'assets', 'mensajes', 'contacto.txt'); 
const contacto = fs.readFileSync(contactoPath, 'utf-8');

const contactoFlow = addKeyword(EVENTS.ACTION)
.addAnswer(contacto)

export {contactoFlow}