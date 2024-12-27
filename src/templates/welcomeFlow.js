import { addKeyword,EVENTS } from "@builderbot/bot"


const welcomeFlow = addKeyword(EVENTS.WELCOME)
.addAnswer('Hola! Como estas? Bienvenidos a Breakers MMA🦁')
.addAnswer(' ', {
    media: 'assets/logo.jpeg'
  })
.addAnswer('Para informacion escribi menu')


export {welcomeFlow}
