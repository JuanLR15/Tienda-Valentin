import Cl_vFlores from "./Cl_vFlores.js"
interface iRamoFrutas{
    codigo: string,
    envase: string,
    costo: number,
    extra: string,
}

export default class Cl_vRamoFrutas extends Cl_vFlores{
    private inExtra: HTMLInputElement;
    private divRamoFrutas: HTMLElement;
    private btnAceptar: HTMLButtonElement;

    constructor(){
        super()
        this.inExtra = this.crearHTMLInputElement({elementName:"inExtra"});
        this.divRamoFrutas = this.crearHTMLElement({elementName:"divExtra"});
        this.btnAceptar = this.crearHTMLButtonElement({
            elementName:"btnAceptarRamoFrutas",
            onclick:()=> this.controlador?.procesarRamoFrutas({
                codigo: this.codigo,
                envase: this.envase,
                costo: this.costo,
                extra: this.extra,
            }),
        });
    }
    get extra():string{
        return this.inExtra.value
    }
    show({ver = true }: {ver?: boolean } = {ver: true }){
        super.show({ ver, nombreTipo: "Ramo de Frutas" });
        this.inExtra.value = "";
        const divTipo = document.getElementById("florForm_divTipo") as HTMLElement;
        const divExtra = document.getElementById("florForm_divExtra") as HTMLElement;
        const btnFlores = document.getElementById("florForm_btnAceptarRamoFlores") as HTMLButtonElement;
        const btnFrutas = document.getElementById("florForm_btnAceptarRamoFrutas") as HTMLButtonElement;

        if (ver) {
            divTipo.style.display = "none";
            divExtra.style.display = "block";
            btnFlores.style.display = "none";
            btnFrutas.style.display = "block";
        }
    }
}
export{iRamoFrutas}