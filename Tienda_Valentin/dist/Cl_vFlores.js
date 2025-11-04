import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vFlores extends Cl_vGeneral {
    constructor() {
        super({ formName: "florForm" });
        this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
        this.inEnvase = this.crearHTMLInputElement({ elementName: "inEnvase" });
        this.inCosto = this.crearHTMLInputElement({ elementName: "inCosto" });
        this.tipoId = this.crearHTMLElement({ elementName: "lblTipo" });
        this.btnCancelar = this.crearHTMLButtonElement({ elementName: "btnCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get codigo() {
        return this.inCodigo.value.trim() || "000";
    }
    get envase() {
        return this.inEnvase.value.trim() || "1";
    }
    get costo() {
        const costo = Number(this.inCosto.value) || 0;
        return Math.max(0, costo);
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.tipoId.innerHTML = nombreTipo;
        this.inCodigo.value = "";
        this.inEnvase.value = "";
        this.inCosto.value = "";
        this.inCodigo.focus();
    }
}
