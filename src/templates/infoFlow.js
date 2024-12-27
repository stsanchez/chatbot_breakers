import { addKeyword,EVENTS } from "@builderbot/bot";

import path from 'path';
import fs from 'fs';

const infoPath = path.join(process.cwd(), 'assets', 'mensajes', 'info.txt'); 
const info = fs.readFileSync(infoPath, 'utf-8');

const infoFlow = addKeyword(EVENTS.ACTION)
.addAnswer(info)

export {infoFlow}