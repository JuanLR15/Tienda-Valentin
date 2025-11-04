import Cl_mFlores from "./Cl_mFlores.js";
import Cl_mRamoFlores from "./Cl_mRamoFlores.js";
import Cl_mRamoFrutas from "./Cl_mRamoFrutas.js";

export default class Cl_mTiendaValentin {
    private _acPrecioFinalRamoFlores: number = 0;
    private _acPrecioFinalRamoFrutas: number = 0;
    private _cntFloresNaturales: number = 0;
    private _cntFloresEnvaseMedianos: number = 0;
    private _cntTotalFlores: number = 0;

    procesarFlores(mFlores: Cl_mFlores) {
        this._cntTotalFlores++;
        
        if (mFlores instanceof Cl_mRamoFlores) {
            this._acPrecioFinalRamoFlores += mFlores.precioTotal();
            if (mFlores.tipoFlor === "N") {
                this._cntFloresNaturales++;
                if (mFlores.envase === "2") {
                    this._cntFloresEnvaseMedianos++;
                }
            }
            
        } else if (mFlores instanceof Cl_mRamoFrutas) {
            this._acPrecioFinalRamoFrutas += mFlores.precioTotal();
        }
    }

    precioFinalRamosFlores(): number {
        return this._acPrecioFinalRamoFlores;
    }

    precioFinalRamosFrutas(): number {
        return this._acPrecioFinalRamoFrutas;
    }

    totalPagado(): number {
        return this._acPrecioFinalRamoFlores + this._acPrecioFinalRamoFrutas;
    }

    cantidadFloresNaturales(): number {
        return this._cntFloresNaturales;
    }

    cantidadFloresEnvaseMediano(): number {
        return this._cntFloresEnvaseMedianos;
    }

    porcentajeFloresNaturalesMediano(): number {
        if (this._cntFloresNaturales === 0) return 0;
        return (this._cntFloresEnvaseMedianos / this._cntFloresNaturales) * 100;
    }
}