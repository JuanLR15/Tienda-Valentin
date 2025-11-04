import Cl_vFlores from "./Cl_vFlores.js";
export default class Cl_vRamoFlores extends Cl_vFlores {
    constructor() {
        super();
        this.inTipoFlor = this.crearHTMLInputElement({ elementName: "inTipo" });
        this.divRamoFlores = this.crearHTMLElement({ elementName: "divTipo" });
        this.btnRamoFlores = this.crearHTMLButtonElement({
            elementName: "btnAceptarRamoFlores",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarRamoFlores({
                    codigo: this.codigo,
                    envase: this.envase,
                    costo: this.costo,
                    tipoFlor: this.tipoFlor,
                });
            },
        });
    }
    get tipoFlor() {
        return this.inTipoFlor.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Ramo de Flores" });
        this.inTipoFlor.value = "";
        const divTipo = document.getElementById("florForm_divTipo");
        const divExtra = document.getElementById("florForm_divExtra");
        const btnFlores = document.getElementById("florForm_btnAceptarRamoFlores");
        const btnFrutas = document.getElementById("florForm_btnAceptarRamoFrutas");
        if (ver) {
            divTipo.style.display = "block";
            divExtra.style.display = "none";
            btnFlores.style.display = "block";
            btnFrutas.style.display = "none";
        }
    }
}
