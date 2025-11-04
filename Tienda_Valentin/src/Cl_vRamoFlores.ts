import Cl_vFlores from "./Cl_vFlores.js";
interface iRamoFlores{
    codigo: string,
    envase: string,
    costo: number,
    tipoFlor: string,
}

export default class Cl_vRamoFlores extends Cl_vFlores{
    private inTipoFlor: HTMLInputElement;
    private divRamoFlores: HTMLElement;
    private btnRamoFlores: HTMLButtonElement;

    constructor(){
        super();
        this.inTipoFlor = this.crearHTMLInputElement({elementName: "inTipo"});
        this.divRamoFlores = this.crearHTMLElement({elementName:"divTipo"});
        this.btnRamoFlores = this.crearHTMLButtonElement({
            elementName: "btnAceptarRamoFlores",
        onclick: () => this.controlador?.procesarRamoFlores({
            codigo: this.codigo,
            envase: this.envase,
            costo: this.costo,
            tipoFlor: this.tipoFlor,
        }),
    });

}

get tipoFlor():string {
    return this.inTipoFlor.value
}
show({ ver = true }: { ver?: boolean } = { ver: true }) {
        super.show({ ver, nombreTipo: "Ramo de Flores" });
        this.inTipoFlor.value= "";
        const divTipo = document.getElementById("florForm_divTipo") as HTMLElement;
        const divExtra = document.getElementById("florForm_divExtra") as HTMLElement;
        const btnFlores = document.getElementById("florForm_btnAceptarRamoFlores") as HTMLButtonElement;
        const btnFrutas = document.getElementById("florForm_btnAceptarRamoFrutas") as HTMLButtonElement;

        if (ver) {
            divTipo.style.display = "block";
            divExtra.style.display = "none";
            btnFlores.style.display = "block";
            btnFrutas.style.display = "none";
        }
    }
}
export{iRamoFlores}