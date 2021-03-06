const 
//variables globales
clase = document.getElementById("clase"),
info = document.getElementById("info"),
submit = document.getElementById("submit"), 
container = document.getElementById("container"),
respuesta = document.getElementById("respuesta"),
nombre = document.getElementById("nombre"),
apellido = document.getElementById("apellido"),
provincia = document.getElementById("provincia"),
ciudad = document.getElementById("ciudad");

//titulo y bienvenida a la pagina
clase.innerHTML = `<h3>Clase 5: DOM y Eventos</h3>`;
info.innerHTML = `<p>¬°Bienvenido/a! En esta pagina podras cotizar tu proximo departamento a alquilar. 
Para ello te pedimos que ingreses tus datos asi podemos continuar.</p>`;

//modelo para el arreglo contenedor de propiedades
class Rent {
    constructor(id, name, price, contract, fee) {
        this.id = id;
        this.name = name;
        this.price = Number(price);
        this.contract = this.price / 12 * 2;
        this.fee = 4 * this.price / 100;
    }
}

//propiedades
const opt1 = new Rent(1, "Avellaneda 24576", 57000);
const opt2 = new Rent(2, "Av. Colon 817", 58500);
const opt3 = new Rent(3, "Santamarina 11871", 60000);
const opt4 = new Rent(5, "Mitre 712", 66000);
const opt5 = new Rent(6, "Belgrano 99812", 67500);
const opt6 = new Rent(4, "Santamarina 654", 64500);

//metemos las propiedades a un arreglo
const rents = [opt1, opt2, opt3, opt4, opt5, opt6]

//mostrar propiedades
submit.addEventListener("click", () => {
    //si alguno o todos los input es igual a un string vacio
    //se solicita el ingreso de sus respectivos valores para continuar
    if (nombre.value === "" || apellido.value === "" || provincia.value === "" || ciudad.value === "") {
        respuesta.innerHTML = `
        <br>
        <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg> 
            ¬°Ha ocurrido un error!</h4>
            <p class="mb-0">Al parecer uno o mas de los datos ingresados ha sido incorrecto.</p>
            <p class="mb-0">Por favor, te pedimos que reingreses los valores correspondientes.</p>
            <p class="mb-0">Si el problema persiste, intenta reiniciar la pagina.</p>
            <p class="mb-0">¬°Gracias!</p>
        </div>
        `
    } 
    //Si el ingreso de datos es correcto, se mostrara un mensaje
    //de aprobacion y los departamentos disponibles
    else {
        respuesta.innerHTML = `
        <br>
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
            Hola ${nombre.value}!</h4>
            <p class="mb-0">Gracias por confiar en nosotros. A continuacion te dejamos un listado de las propiedades disponibles a dia de hoy.</p>
            <p class="mb-0">En cada propiedad podras encontrar sus correspondientes valores. Recorda que podes acercarte a la inmobiliaria de Lunes a Viernes.</p>
            <p class="mb-0">Nos encontramos de 9hs a 17hs.</p>
        </div>`
            //recorre el arreglo rents
            for (const iterator of rents) {
                //por cada objeto muestra un resultado distinto
                container.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="./src/img/1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${iterator.name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h5 class="badge bg-info text-dark">Valor de contrato: $${iterator.contract}</h5>
                            <h5 class="badge bg-info text-dark">Valor de Honorarios: $${iterator.fee}</h5>
                            <h5 class="badge bg-info text-dark">Precio mensual: $${iterator.price}</h5>
                        </div>
                    </div>`
            }
    }
})  