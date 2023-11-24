//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//Generar un obj con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    transmision: '',
    color: '',
    puertas: '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); 

    llenarSelect();
})

// Event Listener para los select de búsqueda
    marca.addEventListener('change', e => {
        datosBusqueda.marca = e.target.value;

        filtrarAuto(autos);
    });
    year.addEventListener('change', e => {
        datosBusqueda.year = parseInt(e.target.value);

        filtrarAuto(autos);
    });
    minimo.addEventListener('change', e => {
        datosBusqueda.minimo = e.target.value;

        filtrarAuto();
    });
    maximo.addEventListener('change', e => {
        datosBusqueda.maximo = e.target.value;

        filtrarAuto();
    });
    puertas.addEventListener('change', e => {
        datosBusqueda.puertas = e.target.value;

        filtrarAuto();
    });
    transmision.addEventListener('change', e => {
        datosBusqueda.transmision = e.target.value;

        filtrarAuto();
    });
    color.addEventListener('change', e => {
        datosBusqueda.color = e.target.value;
        
        filtrarAuto()
    });

//Funciones 
function mostrarAutos (autos) {

    limpiarHTML(); 
    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color, imageUrl } = auto;
        const autoContainer = document.createElement('div');
        autoContainer.classList.add('div-autos')

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `${marca} ${modelo}`;
        img.classList.add('imagen-auto');

        const autoInfo = document.createElement('p');
        autoInfo.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}`;

        autoContainer.appendChild(img);
        autoContainer.appendChild(autoInfo);

        // Insertar el contenedor en el HTML
        resultado.appendChild(autoContainer);
    });
}
    

    function limpiarHTML(){
        while(resultado.firstChild){
            resultado.removeChild(resultado.firstChild)
        }
    }

//Genera los años del select
function llenarSelect(){
    for (let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

    function filtrarAuto(){
        const resultado = autos.filter( filtrarMarca ).filter( filtrarYear )
        .filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas )
        .filter(filtrarTransmision).filter( filtrarColor )
        
        if(resultado.length){
            mostrarAutos(resultado)
        } else {
            noResultado();
        }
    }

    function noResultado(){

        limpiarHTML();

        const noResultado = document.createElement('div');
        noResultado.classList.add('alerta', 'error');
        noResultado.textContent = 'No hay resultados, intenta con otros términos de búsqueda'
        resultado.appendChild(noResultado)
    }

    // Itera sobre los objetos y compara unicamente la marca
    function filtrarMarca( auto ){
        const { marca } = datosBusqueda;
        if(marca){
            return auto.marca === datosBusqueda.marca;
        }
            return auto;
    
    }

    function filtrarYear( auto ){
        const { year } = datosBusqueda;
        if(year){
            return auto.year === year;
        }
            return auto;
    }

    function filtrarMinimo(auto) {
        const { minimo } = datosBusqueda;
        if(minimo){
            return auto.precio >= minimo;
        }
            return auto;
    }

    function filtrarMaximo(auto) {
        const {  maximo } = datosBusqueda;
        if(maximo){
            return auto.precio <= maximo;
        }
            return auto;
    }

    function filtrarPuertas(auto){
        const { puertas } = datosBusqueda;
        if(puertas == 2){
            return auto.puertas == 2;
        }  else if (puertas == 4){
            return auto.puertas == 4
        }
            return auto
    }
    
    function filtrarTransmision(auto){
        const {transmision} = datosBusqueda;
        if(transmision){
            return auto.transmision === transmision;
        }
        return auto
    }

    function filtrarColor(auto){
        const {color} = datosBusqueda;
        if(color){
            return auto.color === color
        }
        return auto;
    }

