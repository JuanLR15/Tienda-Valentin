import Cl_mFlores from "./Cl_mFlores.js";
import Cl_mRamoFlores from "./Cl_mRamoFlores.js";
import Cl_mRamoFrutas from "./Cl_mRamoFrutas.js";
import Cl_mTiendaValentin from "./Cl_mTiendaValentin.js";
import {iRamoFlores} from "./Cl_vRamoFlores.js";
import {iRamoFrutas} from "./Cl_vRamoFrutas.js";
import Cl_vTiendaValentin from "./Cl_vTiendaValentin.js";

export default class Cl_Controlador {
    public modelo: Cl_mTiendaValentin;
    public vista: Cl_vTiendaValentin;

    constructor(modelo:Cl_mTiendaValentin,vista:Cl_vTiendaValentin){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarRamoFlores(datos:iRamoFlores){
        const mRamoFlores = new Cl_mRamoFlores({
            codigo: datos.codigo,
            envase: datos.envase,
            costo: datos.costo,
            tipoFlor: datos.tipoFlor,
        });
        this.modelo.procesarFlores(mRamoFlores);
        this.reportarFlores({mFlores:mRamoFlores});
    }
    procesarRamoFrutas(datos:iRamoFrutas){
        const mRamoFrutas = new Cl_mRamoFrutas({
            codigo: datos.codigo,
            envase: datos.envase,
            costo: datos.costo,
            extra: datos.extra,
        });
        this.modelo.procesarFlores(mRamoFrutas);
        this.reportarFlores({mFlores:mRamoFrutas});
    }
    reportarFlores({mFlores} : {mFlores:Cl_mFlores}){
        this.vista.reporteTiendaValentin({
            datFlores: mFlores.toJSON(),
            totalVentasTienda: this.modelo.totalPagado(),
            cantidadFloresNaturales: this.modelo.cantidadFloresNaturales(),
            cantidadFloresEnvaseMediano: this.modelo.cantidadFloresEnvaseMediano(),
            porcentajeTotalFloresNaturalesMedianos: this.modelo.porcentajeFloresNaturalesMediano(),
        });
        this.vista.show();
    }        
}