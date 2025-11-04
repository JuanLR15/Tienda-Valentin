import Cl_vFlores from "./Cl_vFlores.js";
export default class Cl_vRamoFrutas extends Cl_vFlores {
    constructor() {
        super();
        this.inExtra = this.crearHTMLInputElement({ elementName: "inExtra" });
        this.divRamoFrutas = this.crearHTMLElement({ elementName: "divExtra" });
        this.btnAceptar = this.crearHTMLButtonElement({
            elementName: "btnAceptarRamoFrutas",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarRamoFrutas({
                    codigo: this.codigo,
                    envase: this.envase,
                    costo: this.costo,
                    extra: this.extra,
                });
            },
        });
    }
    get extra() {
        return this.inExtra.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Ramo de Frutas" });
        this.inExtra.value = "";
        const divTipo = document.getElementById("florForm_divTipo");
        const divExtra = document.getElementById("florForm_divExtra");
        const btnFlores = document.getElementById("florForm_btnAceptarRamoFlores");
        const btnFrutas = document.getElementById("florForm_btnAceptarRamoFrutas");
        if (ver) {
            divTipo.style.display = "none";
            divExtra.style.display = "block";
            btnFlores.style.display = "none";
            btnFrutas.style.display = "block";
        }
    }
}
