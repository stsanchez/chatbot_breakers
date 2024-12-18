import { addKeyword,EVENTS } from "@builderbot/bot";

const infoFlow = addKeyword(EVENTS.ACTION)
.addAnswer('Somos una academia de MMA. Las clases son abiertas a todo el publico tanto recreativo como profesional\nTodos los dias se entrena la parte de musculacion, se hace aerobico, luego tecnica y luego sparring.')

export {infoFlow}