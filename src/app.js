import { createBot } from "@builderbot/bot"
import { MemoryDB as Database } from "@builderbot/bot"
import { config } from "./config/index.js"
import templates from "./templates/index.js"
import { provider } from "./provider/index.js"
import 'dotenv/config'

const PORT = config.PORT

const main = async () => {
    const adapterFlow = templates
    const adapterProvider = provider
    const adapterDB = new Database()

    const {httpServer} = await createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

httpServer(+PORT)
}




    
main()
