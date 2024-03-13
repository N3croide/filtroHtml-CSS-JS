import * as api from '../api/api.js'

let contenido = {
    "titulo":['Que nivel de calidad estas buscando?','Que tipo de app necesitas?','Que diseño quieres que tenga tu app?','Como Monetizar tu app?','Tu App necesita sitema de autenticacion?','Costo Total'],
    "imagenes":[
        ['images/1/1-1.png','images/1/1-2.png','images/1/1-3.png'],
        ['images/2/2-1.png','images/2/2-2.png','images/2/2-3.png','images/2/2-4.png'],
        ['images/3/3-1.png','images/3/3-2.png','images/3/3-3.png','images/3/3-4.png'],
        ['images/4/4-1.png','images/4/4-2.png','images/4/4-3.png','images/4/4-4.png'],
        ['images/5/5-1.png','images/5/5-2.png','images/5/5-3.png','images/5/5-4.png']
    ],
    "descripcion":[
        ['Calidad Optima','Buena Relacion Calidad/Precio','No me importa tanto la calidad'],
        ['Aplicacion Android','Aplicacion IOS','Aplicacion Windos Phone','Aplicacion Android + iOS'],
        ['Interfaz Sencilla', 'Interfaz Personalizada','Interfaz replicada de la web', 'No necesito diseño'],
        ['Aplicacion Gratuita con publicidad','Aplicacion de pago','Compras dentro de la app','Otro/No se todavia'],
        ['Si, con redes sociales y email','Si, con email','No','No lo se todavia']]
    }
let costos =[
    [300000,380000,200000],
    [2000000,3000000,800000,3500000],
    [500000,1000000,,800000,300000],
    [600000,1000000,2000000,3500000],
    [2000000,1500000,0,3500000]
]
let resumen = 0;

export class CalidadCustomHtml extends HTMLElement{
    constructor(data){
        super();
        this.data = data
        this.page = 0;
        this.contador = 0;
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        <h2>${contenido['titulo'][this.page]}</h2>
        <div id="options">
        <style rel='stylesheet'>
            @import "components/components.css";
        </style>
        ${this.generateImages()}
        </div>
        `;
        this.addFunc();
    }
    generateImages(){
        let html = ``;
        if(this.page != 5){
        contenido['imagenes'][this.page].forEach(image => {
            let i = 0;
            html += 
            `
            <div id="images">
                <img src="${image.replace(/'/g,'')}" alt="" class="imagenes">
                <span><b>${contenido['descripcion'][this.page][i]}</b></span>
            </div>
            `
        i++;
            });
        }
        else{
            html += `
            <h1>${resumen}</h1>
            <button id="botonFinal">Finalizar</button>
            `
        }
        return html;
    }
    addFunc(){
        let contador = 0
        this.querySelectorAll('.imagenes').forEach(
            img => {
                img.setAttribute('pos',contador)
                contador++;
                img.addEventListener('click',
                () => {
                    resumen += costos[this.page][parseInt(img.getAttribute('pos'))];

                    this.page++;
                    this.render();
            })   
        });
        if(this.querySelector('#botonFinal')){
            this.querySelector('#botonFinal').addEventListener('click',()=>{
                this.data['valorTotal'] = resumen;
                api.post(this.data)
            });
        }
    }
}

customElements.define('div-component',CalidadCustomHtml)