import { addKeyword,EVENTS } from "@builderbot/bot"
import { infoFlow } from "./infoFlow.js"
import { horariosFlow } from "./horariosFlow.js"
import { preciosFlow } from "./preciosFlow.js"
import { contactoFlow } from "./contactoFlow.js"


const menuFlow = addKeyword(['Menu','menu','Menú','menú'])
.addAnswer('Elegi una de las opciones:\n1- Como son las clases\n2- Ver horarios y ubicaciones\n3- Ver precios\n4- Contacto',
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