import { addKeyword,EVENTS } from "@builderbot/bot"


import path from 'path';
import fs from 'fs';

const preciosPath = path.join(process.cwd(), 'assets', 'mensajes', 'precios.txt'); 
const precios = fs.readFileSync(preciosPath, 'utf-8');


const preciosFlow = addKeyword(EVENTS.ACTION)
.addAnswer(precios)
//.addAnswer('El valor de la cuota adultos es:\nClase de prueba $ 12.000 (Que se descuenta del plan mensual al suscribirse\n1 vez por semana $38.000 mensual\n2 veces por semana $42.000 mensual\n3 veces por semana $46.000 mensual\nPase libre $50.000  mensual')

export {preciosFlow}