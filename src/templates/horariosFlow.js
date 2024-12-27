import { addKeyword,EVENTS } from "@builderbot/bot"
import path from 'path';
import fs from 'fs';

const horariosPath = path.join(process.cwd(), 'assets', 'mensajes', 'horarios.txt'); 
const horarios = fs.readFileSync(horariosPath, 'utf-8');

const horariosFlow = addKeyword(EVENTS.ACTION)
.addAnswer(horarios)

export {horariosFlow}