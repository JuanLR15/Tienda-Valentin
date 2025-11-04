export default class Cl_mFlores {
    constructor({ codigo, envase, costo }) {
        this._codigo = "";
        this._envase = ""; //1) Pequeño 2) Mediano 3) Grande
        this._costo = 0;
        this.codigo = codigo;
        this.envase = envase;
        this.costo = costo;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set envase(envase) {
        this._envase = envase;
    }
    get envase() {
        return this._envase;
    }
    set costo(costo) {
        this._costo = Number(costo) || 0;
    }
    get costo() {
        return this._costo;
    }
    descuento() {
        return 0;
    }
    incremento() {
        return 0;
    }
    precioTotal() {
        return this._costo;
    }
    toJSON() {
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
