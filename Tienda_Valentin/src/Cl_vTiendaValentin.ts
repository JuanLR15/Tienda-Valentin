import Cl_Controlador from "./Cl_Controlador.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_vRamoFlores from "./Cl_vRamoFlores.js";
import Cl_vRamoFrutas from "./Cl_vRamoFrutas.js";
interface iFlores{
    codigo: string,
    envase: string,
    costo: number,
    tipoFlor?: string,
    extra?: string,
    descuento: number,
    incremento: number,
    precioTotal: number,
}

export default class Cl_vTiendaValentin extends Cl_vGeneral{
    private _vRamoFlores: Cl_vRamoFlores;
    private _vRamoFrutas: Cl_vRamoFrutas;
    private datFlores: HTMLElement;
    private lbltotalVentasTienda: HTMLElement;
    private lblcantidadFloresNaturales: HTMLElement;
    private lblcantidadFloresEnvaseMediano: HTMLElement;
    private lblporcentajeTotalFloresNaturalesMediano: HTMLElement;
    private btnAgregarRamoFrutas: HTMLElement;
    private brnAgregarRamoFlores: HTMLElement;

    constructor(){
        super({formName: "mainForm"});
        this._vRamoFlores = new Cl_vRamoFlores();
        this._vRamoFrutas = new Cl_vRamoFrutas();
        this.datFlores = this.crearHTMLElement({elementName:"dataFlores"});
        this.lbltotalVentasTienda = this.crearHTMLElement({elementName:"lblMontoTotalVendido"});
        this.lblcantidadFloresNaturales = this.crearHTMLElement({elementName:"lblCantidadFloresNaturales"});
        this.lblcantidadFloresEnvaseMediano = this.crearHTMLElement({elementName:"lblCantidadFloresEnvaseMediano"});
        this.lblporcentajeTotalFloresNaturalesMediano = this.crearHTMLElement({elementName:"lblPorcentajeFloresEnvaseMedianas"});
        this.btnAgregarRamoFrutas = this.crearHTMLButtonElement({
            elementName:"btnAgregarRamoFrutas",
            onclick:() => {
                this.show({ver: false});
                this._vRamoFrutas.show();
            },
        });
        this.brnAgregarRamoFlores = this.crearHTMLButtonElement({
            elementName:"btnAgregarRamoFlores",
            onclick:() => {
                this.show({ver: false});
                this._vRamoFlores.show();
            },
        });
        this.datFlores.innerHTML = "";
        this._vRamoFlores.show({ver: false});
        this._vRamoFrutas.show({ver: false});
    }

    set controlador(controlador: Cl_Controlador) {
        super.controlador = controlador;
        this._vRamoFlores.controlador = controlador;
        this._vRamoFrutas.controlador = controlador;
    }
    get vRamoFlores(): Cl_vRamoFlores {
        return this._vRamoFlores;
    }
    get vRamoFrutas(): Cl_vRamoFrutas {
        return this._vRamoFrutas;
    }
    reporteTiendaValentin({
        datFlores,
        totalVentasTienda,
        cantidadFloresNaturales,
        cantidadFloresEnvaseMediano,
        porcentajeTotalFloresNaturalesMedianos,
    }:{
        datFlores: iFlores;
        totalVentasTienda: number;
        cantidadFloresNaturales: number;
        cantidadFloresEnvaseMediano: number;
        porcentajeTotalFloresNaturalesMedianos: number;
    }): void{
        this.datFlores.innerHTML += `
            <tr>
            <td class="colString">${datFlores.codigo}</td>
            <td class="colString">${datFlores.envase}</td>
            <td class="colNumber">${datFlores.costo.toFixed(2)}</td>
            <td class="colString">${datFlores.tipoFlor ? datFlores.tipoFlor : "--"}</td>
            <td class="colString">${datFlores.extra ? datFlores.extra : "--"}</td>
            <td class="colNumber">${datFlores.descuento.toFixed(2)}</td>
            <td class="colNumber">${datFlores.incremento.toFixed(2)}</td>
            <td class="colNumber">${datFlores.precioTotal.toFixed(2)}</td>
            </tr>
            `;

            this.lbltotalVentasTienda.innerHTML = totalVentasTienda.toFixed(2);
            this.lblcantidadFloresNaturales.innerHTML = cantidadFloresNaturales.toString();
            this.lblcantidadFloresEnvaseMediano.innerHTML = cantidadFloresEnvaseMediano.toString();
            this.lblporcentajeTotalFloresNaturalesMediano.innerHTML = porcentajeTotalFloresNaturalesMedianos.toFixed(2) + "%";
}

    show({ver = true}: {ver?: boolean} = {ver: true}){
        super.show({ver});
        if(ver){
            this._vRamoFlores.show({ver: false});
            this._vRamoFrutas.show({ver: false});
        }
    }
}
