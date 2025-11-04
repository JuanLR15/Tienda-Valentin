import Cl_mFlores from "./Cl_mFlores.js";
export default class Cl_mRamoFrutas extends Cl_mFlores {
    constructor({ codigo, envase, costo, extra }) {
        super({ codigo, envase, costo });
        this._extra = ""; //A) SI B) NO
        this.extra = extra;
    }
    set extra(extra) {
        this._extra = extra;
    }
    get extra() {
        return this._extra;
    }
    descuento() {
        if (this.extra === "Si") {
            return this.costo * 0.15;
        }
        else {
            return 0;
        }
    }
    precioTotal() {
        return this.costo - this.descuento();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { extra: this.extra, precioTotal: this.precioTotal() });
    }
}
