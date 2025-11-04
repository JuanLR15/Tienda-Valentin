import Cl_mRamoFlores from "./Cl_mRamoFlores.js";
import Cl_mRamoFrutas from "./Cl_mRamoFrutas.js";
export default class Cl_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarRamoFlores(datos) {
        const mRamoFlores = new Cl_mRamoFlores({
            codigo: datos.codigo,
            envase: datos.envase,
            costo: datos.costo,
            tipoFlor: datos.tipoFlor,
        });
        this.modelo.procesarFlores(mRamoFlores);
        this.reportarFlores({ mFlores: mRamoFlores });
    }
    procesarRamoFrutas(datos) {
        const mRamoFrutas = new Cl_mRamoFrutas({
            codigo: datos.codigo,
            envase: datos.envase,
            costo: datos.costo,
            extra: datos.extra,
        });
        this.modelo.procesarFlores(mRamoFrutas);
        this.reportarFlores({ mFlores: mRamoFrutas });
    }
    reportarFlores({ mFlores }) {
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
