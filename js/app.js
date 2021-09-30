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

//crear los años
const max = new Date().getFullYear() -1;
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
    filtrarAutos(autos);
   
    
});
year.addEventListener('change', e =>{
    datoBusqueda.year = parseInt(e.target.value);// convertir los string en numero
    filtrarAutos();
    
});
minimo.addEventListener('change', e =>{
    datoBusqueda.minimo =e.target.value;
    filtrarAutos();
});
maximo.addEventListener('change', e =>{
    datoBusqueda.maximo =e.target.value;
    
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

function mostarAutos(autos) {
    //limpiar el html antes de para evitar duplicado
    limpiarHtml();

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

//limpiar el html
function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){
    for(let i= max; i>= min; i--){
       const option= document.createElement('option');
       option.value = i;
       option.textContent= i;
       year.appendChild(option);
    }
};

// filtrar los autos
function filtrarAutos() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    mostarAutos(resultado);
};

function filtrarMarca(auto) {
    const {marca} = datoBusqueda;// esta verifica si hay una marca que sea igual a marca busqueda
    if (marca) {
        return auto.marca === marca;
    }else{
        return auto;
    }
};

function filtrarYear(auto) {
    const {year} = datoBusqueda;// esta verifica si hay una marca que sea igual a marca busqueda
    if (year) {
        return auto.year === year;
    }else{
        return auto;
    }
};
// function filtrarMinimo(auto) {
//     const {minimo} = datoBusqueda;
//     if (precio) {
//         return auto.precio >= minimo;
//     }else{
//         return auto;
//     }
// }