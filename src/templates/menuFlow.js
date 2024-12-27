import { addKeyword,EVENTS } from "@builderbot/bot"
import { infoFlow } from "./infoFlow.js"
import { horariosFlow } from "./horariosFlow.js"
import { preciosFlow } from "./preciosFlow.js"
import { contactoFlow } from "./contactoFlow.js"
import path from 'path';
import fs from 'fs';

const menuPath = path.join(process.cwd(), 'assets', 'mensajes', 'menu.txt'); 
const menu = fs.readFileSync(menuPath, 'utf-8');

const menuFlow = addKeyword(['Menu','menu','Menú','menú'])
.addAnswer(menu,
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
        if (!['1', '2', '3', '4'].includes(ctx.body)) {
            return fallBack('❌Esta opción no está en el menú. Escribí una de las opciones ');
        }
        switch (ctx.body) {
            case '1':
                return gotoFlow(infoFlow);
            case '2':
                return gotoFlow(horariosFlow);
            case '3':
                return gotoFlow(preciosFlow);
            case '4':
                return gotoFlow(contactoFlow);
        }
    })

export {menuFlow}