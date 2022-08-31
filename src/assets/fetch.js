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

const mostrar = (articulos) => {
    articulos.forEach(articulo => {
        resultados += `
                    <tr>
                        <td>${articulo.id}</td>
                        <td>${articulo.Fecha}</td>
                        <td>${articulo.Producto}</td>
                        <td>${articulo.OrdenFabricacion}</td>
                    </tr> `
    })
    contenedor.innerHTML = resultados
}

// Mostrar datos
fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error) )
