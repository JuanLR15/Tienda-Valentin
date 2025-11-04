import Cl_mFlores from "./Cl_mFlores.js";
export default class Cl_mRamoFlores extends Cl_mFlores {
    constructor({ codigo, envase, costo, tipoFlor }) {
        super({ codigo, envase, costo });
        this._tipoFlor = ""; //N) Natural A) Artificial
        this.tipoFlor = tipoFlor;
    }
    set tipoFlor(tipoFlor) {
        this._tipoFlor = tipoFlor;
    }
    get tipoFlor() {
        return this._tipoFlor;
    }
    descuento() {
        if (this.tipoFlor === "A") {
            return this.costo * 0.10;
        }
        else {
            return 0;
        }
        ;
    }
    incremento() {
        if (this.tipoFlor === "N") {
            return this.costo * 0.08;
        }
        else {
            return 0;
        }
    }
    precioTotal() {
        return this.costo - this.descuento() + this.incremento();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { tipoFlor: this.tipoFlor, precioTotal: this.precioTotal() });
    }
}
