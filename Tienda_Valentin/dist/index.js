//**La Tienda “Exprésalo con Amor” C.A, ofrece para el día de los enamorados, 
// los más hermosos ramos de flores y frutas. Se conoce cada ramo: su código, envase 
// (1 Pequeño, 2 Mediano, 3 Grande) y costo neto. Además se sabe que si el ramo es de 
// flores tendrá un tipo (N- Natural o A-Artificial), teniendo en cuenta si artificial 
// tendrá un descuento del 10% sobre el costo neto y si las flores son naturales tendrá 
// un incremento del 8%. Por otro lado, si el ramo es de fruta se debe tomar en cuenta 
// si el mismo lleva chocolate o botella de vino (cualquiera de los dos), de ser así este tendrá 
// un descuento del 15% sobre el costo neto. La Tienda requiere determinar al final de su jornada laboral: 
// el total vendido y el porcentaje de ramos de flores naturales con envase mediano vendidos.*/
import { RamoFlores, RamoFrutas } from "./_dat.js";
import Cl_Controlador from "./Cl_Controlador.js";
import Cl_mRamoFlores from "./Cl_mRamoFlores.js";
import Cl_mRamoFrutas from "./Cl_mRamoFrutas.js";
import Cl_mTiendaValentin from "./Cl_mTiendaValentin.js";
import Cl_vTiendaValentin from "./Cl_vTiendaValentin.js";
export default class Cl_index {
    constructor() {
        let vista = new Cl_vTiendaValentin();
        let modelo = new Cl_mTiendaValentin();
        this.controlador = new Cl_Controlador(modelo, vista);
        vista.controlador = this.controlador;
        this.iniciarDatos();
    }
    iniciarDatos() {
        this.controlador.procesarRamoFlores(new Cl_mRamoFlores(RamoFlores[0]));
        this.controlador.procesarRamoFlores(new Cl_mRamoFlores(RamoFlores[1]));
        this.controlador.procesarRamoFlores(new Cl_mRamoFlores(RamoFlores[2]));
        this.controlador.procesarRamoFlores(new Cl_mRamoFlores(RamoFlores[3]));
        this.controlador.procesarRamoFrutas(new Cl_mRamoFrutas(RamoFrutas[0]));
        this.controlador.procesarRamoFrutas(new Cl_mRamoFrutas(RamoFrutas[1]));
        this.controlador.procesarRamoFrutas(new Cl_mRamoFrutas(RamoFrutas[2]));
        this.controlador.procesarRamoFrutas(new Cl_mRamoFrutas(RamoFrutas[3]));
    }
}
