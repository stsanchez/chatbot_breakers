import { addKeyword,EVENTS } from "@builderbot/bot"

const preciosFlow = addKeyword(EVENTS.ACTION)
.addAnswer('Clase de prueba: $10.000 (Si te inscribis se descuenta del precio de la inscripción)\n3 veces por semana: $20.000\nPase libre: $50.000\nClases particulares: Consultar al profe del dojo')


export {preciosFlow}