import { createFlow } from "@builderbot/bot";

import { flowPricipal } from "./flowPrincipal.js";
import { welcomeFlow } from "./welcomeFlow.js";
import { infoFlow } from "./infoFlow.js";
import { contactoFlow } from "./contactoFlow.js";
import { preciosFlow } from "./preciosFlow.js";
import { horariosFlow } from "./horariosFlow.js";
import { menuFlow } from "./menuFlow.js";


export default createFlow([
    flowPricipal, welcomeFlow, infoFlow, contactoFlow, preciosFlow, horariosFlow,menuFlow
])