import Cl_vGeneral from "./Cl_vGeneral.js";


export default class Cl_vFlores extends Cl_vGeneral{
    private inCodigo:HTMLInputElement;
    private inEnvase:HTMLInputElement;
    private inCosto:HTMLInputElement;
    private tipoId: HTMLElement;
    private btnCancelar: HTMLButtonElement;

    constructor(){
        super({formName:"florForm"});
        this.inCodigo = this.crearHTMLInputElement({elementName:"inCodigo"});
        this.inEnvase = this.crearHTMLInputElement({elementName:"inEnvase"});
        this.inCosto = this.crearHTMLInputElement({elementName:"inCosto"});
        this.tipoId = this.crearHTMLElement({elementName:"lblTipo"});
        this.btnCancelar = this.crearHTMLButtonElement({elementName:"btnCancelar",
            onclick: () => {
                this.show({ver:false});
                this.controlador?.vista.show();
            },
        });
    }
    get codigo(): string {
        return this.inCodigo.value.trim() || "000";
    }
    get envase(): string {
        return this.inEnvase.value.trim() || "1";
    }

    get costo(): number {
        const costo = Number(this.inCosto.value) || 0;
        return Math.max(0, costo);
    }
    show({
        ver = true,
        nombreTipo = "",
    }:{
        ver?: boolean;
        nombreTipo?: string;
    }): void {
        super.show({ver});
        this.tipoId.innerHTML = nombreTipo;
        this.inCodigo.value = "";
        this.inEnvase.value = "";
        this.inCosto.value = "";
        this.inCodigo.focus();
    }
}