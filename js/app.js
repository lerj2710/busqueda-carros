//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const Color = document.querySelector('#color');

//contenedor para los resultado
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;

// Generar un objecto de busqueda
const datoBusqueda = {// crear un objecto vacio para escuhar llamarlo de ota parte
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
};

//eventos
document.addEventListener('DOMContentLoaded',()=>{
 mostarAutos();// muestra los auto en html
 
 //llenar los años selecion
llenarSelect();
});

// eventos para los selectores de busqueda
marca.addEventListener('change', e =>{// change es un buen metodo par usar cuando cambia una seleccion
    datoBusqueda.marca = e.target.value;
    
});
year.addEventListener('change', e =>{
    datoBusqueda.year = e.target.value;
    
});
minimo.addEventListener('change', e =>{
    datoBusqueda.minimo = e.target.value;
    
});
maximo.addEventListener('change', e =>{
    datoBusqueda.maximo = e.target.value;
    
});
puertas.addEventListener('change', e =>{
    datoBusqueda.puertas = e.target.value;
    
});
transmision.addEventListener('change', e =>{
    datoBusqueda.transmision = e.target.value;
    
});
color.addEventListener('change', e =>{
    datoBusqueda.color = e.target.value;
    
});
//funciones

function mostarAutos() {
    autos.forEach( auto =>{
const {marca, modelo, year, precio, color, transmision, puertas }= auto
       const autoHtml = document.createElement('p');
       autoHtml.innerHTML=`
       ${modelo}  Año:${year} De:${puertas} Precio: ${precio} Color:${color} transmision: ${transmision}
       
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