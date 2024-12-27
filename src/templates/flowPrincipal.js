import { addKeyword } from "@builderbot/bot"

const flowPricipal = addKeyword('hola','Hola')
.addAnswer('Hola, bienvenidos a Breakers MMA🦁')
.addAnswer(' ', {
    media: 'assets/logo.jpeg'
  })
.addAnswer('Para informacion escribi menu')

export {flowPricipal}
