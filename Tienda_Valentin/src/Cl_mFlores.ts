export default class Cl_mFlores {
    private _codigo:string = "";
    private _envase:string = ""; //1) Pequeño 2) Mediano 3) Grande
    private _costo:number = 0;

    constructor({codigo,envase,costo}:{codigo:string,envase:string,costo:number}){
        this.codigo = codigo;
        this.envase = envase;
        this.costo = costo;
    }
    set codigo(codigo:string){
        this._codigo = codigo;
    }
    get codigo():string{
        return this._codigo;
    }
    set envase(envase:string){
        this._envase = envase;
    }
    get envase():string{
        return this._envase;
    }
    set costo(costo:number){
        this._costo = Number(costo) || 0;
    }
    get costo():number{
        return this._costo;
    }
    descuento(){
        return 0;
    }
    incremento(){
        return 0;
    }
    precioTotal(){
        return this._costo;
    }

    toJSON(){
        return {
            codigo: this.codigo,
            envase: this.envase,
            costo: this.costo,
            descuento: this.descuento(),
            incremento: this.incremento(),
            precioTotal: this.precioTotal()

        };
    }





}