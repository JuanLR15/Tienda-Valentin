import Cl_mFlores from "./Cl_mFlores.js";

export default class Cl_mRamoFrutas extends Cl_mFlores {
    private _extra:string = ""; //A) SI B) NO
    constructor({codigo,envase,costo,extra}:{codigo:string,envase:string,costo:number,extra:string}){
        super({codigo,envase,costo});
        this.extra = extra;
    }
    set extra(extra:string){
        this._extra = extra;
    }
    get extra():string{
        return this._extra;
    }
    descuento(): number {
        if(this.extra === "Si") {
            return this.costo * 0.15;
        } else {
            return 0;
        }
    }
    precioTotal(): number {
        return this.costo - this.descuento();
    }
    toJSON(){
        return {
            ...super.toJSON(),
            extra: this.extra,
            precioTotal: this.precioTotal(),
        };
        
    }
    

}