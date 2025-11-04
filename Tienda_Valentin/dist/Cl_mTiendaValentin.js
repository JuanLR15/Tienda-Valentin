import Cl_mRamoFlores from "./Cl_mRamoFlores.js";
import Cl_mRamoFrutas from "./Cl_mRamoFrutas.js";
export default class Cl_mTiendaValentin {
    constructor() {
        this._acPrecioFinalRamoFlores = 0;
        this._acPrecioFinalRamoFrutas = 0;
        this._cntFloresNaturales = 0;
        this._cntFloresEnvaseMedianos = 0;
        this._cntTotalFlores = 0;
    }
    procesarFlores(mFlores) {
        this._cntTotalFlores++;
        if (mFlores instanceof Cl_mRamoFlores) {
            this._acPrecioFinalRamoFlores += mFlores.precioTotal();
            if (mFlores.tipoFlor === "N") {
                this._cntFloresNaturales++;
                if (mFlores.envase === "2") {
                    this._cntFloresEnvaseMedianos++;
                }
            }
        }
        else if (mFlores instanceof Cl_mRamoFrutas) {
            this._acPrecioFinalRamoFrutas += mFlores.precioTotal();
        }
    }
    precioFinalRamosFlores() {
        return this._acPrecioFinalRamoFlores;
    }
    precioFinalRamosFrutas() {
        return this._acPrecioFinalRamoFrutas;
    }
    totalPagado() {
        return this._acPrecioFinalRamoFlores + this._acPrecioFinalRamoFrutas;
    }
    cantidadFloresNaturales() {
        return this._cntFloresNaturales;
    }
    cantidadFloresEnvaseMediano() {
        return this._cntFloresEnvaseMedianos;
    }
    porcentajeFloresNaturalesMediano() {
        if (this._cntFloresNaturales === 0)
            return 0;
        return (this._cntFloresEnvaseMedianos / this._cntFloresNaturales) * 100;
    }
}
