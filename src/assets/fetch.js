const url = 'http://localhost:3000/list'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'));
const formArticulo = document.querySelector('form')
const Fecha = document.getElementById('Fecha')
const Producto = document.getElementById('Producto')
const OrdenFabricacion = document.getElementById('OrdenFabricacion')
const Observacion = document.getElementById('Observacion')
let opcion = ''

btnCrear.addEventListener('click', () => {
    modalArticulo.show()
})