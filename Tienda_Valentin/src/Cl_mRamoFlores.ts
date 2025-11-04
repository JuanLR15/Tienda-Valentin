import Cl_mFlores from "./Cl_mFlores.js";

export default class Cl_mRamoFlores extends Cl_mFlores {
    private _tipoFlor:string = ""; //N) Natural A) Artificial
    constructor({codigo,envase,costo,tipoFlor}:{codigo:string,envase:string,costo:number,tipoFlor:string}){
        super({codigo,envase,costo});
        this.tipoFlor = tipoFlor;
    }
    set tipoFlor(tipoFlor:string){
        this._tipoFlor = tipoFlor;
    }
    get tipoFlor():string{
        return this._tipoFlor;
    }
    descuento():number {
        if(this.tipoFlor === "A") {
            return this.costo * 0.10;
        } else {
            return 0;
        };
    }
    incremento():number {
        if(this.tipoFlor === "N") {
            return this.costo * 0.08;
    } else {
        return 0;
    }
    }
    precioTotal():number {
        return this.costo - this.descuento() + this.incremento();
    }
    toJSON(){
        return {
            ...super.toJSON(),
            tipoFlor: this.tipoFlor,
            precioTotal: this.precioTotal(),
        };
    }



}