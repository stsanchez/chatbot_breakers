import { addKeyword,EVENTS } from "@builderbot/bot"
import { infoFlow } from "./infoFlow.js"
import { horariosFlow } from "./horariosFlow.js"
import { preciosFlow } from "./preciosFlow.js"
import { contactoFlow } from "./contactoFlow.js"

const welcomeFlow = addKeyword(EVENTS.WELCOME)
.addAnswer('Hola, bienvenidos a Breakers MMA🦁')
.addAnswer('Para informacion escribi menu')

export {welcomeFlow}
