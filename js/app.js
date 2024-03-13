import * as component from '../components/components.js'

let resumen = 0;
let form = document.querySelector("#formUsuarios");
let container = document.querySelector('#mainContainer');

document.querySelector('#formUsuario').addEventListener('submit',(e)=>{
    e.preventDefault();
    let form = document.querySelector("#formUsuario");
    let data = Object.fromEntries(new FormData(form).entries());
    document.querySelector("#form").style.display = "none";
    let htmlComponent = new component.CalidadCustomHtml(data);
    container.appendChild(htmlComponent)
})
