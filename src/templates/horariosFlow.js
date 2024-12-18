import { addKeyword,EVENTS } from "@builderbot/bot"

const horariosFlow = addKeyword(EVENTS.ACTION)
.addAnswer('Aca tenes nuestros dias y horarios⏰:\nLunes a viernes de 10 a 22hs\nSábados de 10 a 14hs\nDomingos cerrado')

export {horariosFlow}