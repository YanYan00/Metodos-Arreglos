let tareas = [
    {
        id:1,
        descripcion:'Sacar mascota',
        estado:false
    },
    {
        id:2,
        descripcion:'Comprar pan',
        estado:false
    },
    {
        id:3,
        descripcion:'Terminar la tarea',
        estado:false
    }
];
const lista = document.querySelector('#tareas');
const tareaInput = document.querySelector('#descripcion');
const btnAgregar = document.querySelector('#agregar');
let total = document.querySelector('#total');
let realizadas = document.querySelector('#realizadas');
let ultimaTarea = 3;

btnAgregar.addEventListener("click", () => {
    const nuevaTarea = tareaInput.value;
    if (nuevaTarea.trim() === '') {
        alert('La descripción de la tarea no puede estar vacía');
        return;
    }
    tareas.push({ id: (ultimaTarea + 1), descripcion: nuevaTarea, estado: false });
    tareaInput.value = "";
    ultimaTarea = ultimaTarea+1;
    renderizar();
});

const renderizar = function() {
    let html = '';
    for (let tarea of tareas) {
        const chequeo = tarea.estado ? 'checked' : '';
        html += `
            <div class="tarea-creada">
                <p>${tarea.id}</p>
                <p>${tarea.descripcion}</p>
                <input type="checkbox" onclick="actualizar(${tarea.id})" ${chequeo}>
                <button class="eliminar" onclick="eliminar(${tarea.id})">X</button> 
            </div>`;
    }
    lista.innerHTML = `<div class="info-tarea"> <h5><strong>ID</strong></h5> <h5><strong>Tarea</strong></h5></div>${html}`;
    total.innerHTML = `${tareas.length}`;
    realizadas.innerHTML = `${tareas.filter(elemento => elemento.estado).length}`;
};

const actualizar = (id) => {
    const index = tareas.findIndex((elemento) => elemento.id === id);
    tareas[index].estado = !tareas[index].estado;
    renderizar();
};

const eliminar = (id) => {
    const index = tareas.findIndex((elemento) => elemento.id === id);
    tareas.splice(index, 1);
    renderizar();
};

renderizar();