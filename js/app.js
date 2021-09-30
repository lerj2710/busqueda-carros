//variables
const resultado = document.querySelector('#resultado');


//eventos
document.addEventListener('DOMContentLoaded',()=>{
 mostarAutos();
});




//funciones

function mostarAutos() {
    autos.forEach( auto =>{
const {marca, modelo, year, precio, color, transmision, puertas }= auto
       const autoHtml = document.createElement('p');
       autoHtml.innerHTML=`
       ${marca} ${modelo}  Año:${year} De:${puertas} Precio: ${precio} Color:${color} transmision: ${transmision}
       
       `;

       //mostar en el HTML
       resultado.appendChild(autoHtml);
    });

   
}