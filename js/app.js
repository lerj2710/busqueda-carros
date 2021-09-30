//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;

//eventos
document.addEventListener('DOMContentLoaded',()=>{
 mostarAutos();// muestra los auto en html
 
 //llenar los años selecion
llenarSelect();
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

   
};

function llenarSelect(){
    for(let i= max; i>= min; i--){
       const option= document.createElement('option');
       option.value = i;
       option.textContent= i;
       year.appendChild(option);
    }
};