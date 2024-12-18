import { addKeyword,EVENTS } from "@builderbot/bot"

const contactoFlow = addKeyword(EVENTS.ACTION)
.addAnswer('Comunicarse al 123456789')

export {contactoFlow}