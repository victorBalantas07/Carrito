// Carrito
// #1 BASE DE DATOS
const db = [
  {
    id: 1,
    nombre: 'La BiBlia',
    descripcion: 'Conjunto de Escrituras Sagradas formado por el Antiguo y el Nuevo Testamento  ',
    precio: 580000.00,
    imagen: './assets/img/libro-1.png',
    categoria: 'aperitivos',
    cantidad: 10
  },
  {
    id: 2,
    nombre: 'Harry Potter - J. K. Rowling',
    descripcion: 'Harry Potter es una serie de novelas fantásticas',
    precio: 350000.00,
    imagen: './assets/img/libro-2.png',
    categoria: 'aperitivos',
    cantidad: 15
  },
  {
    id: 3,
    nombre: 'El Principito - Antoine de Saint-E',
    descripcion: 'El principito narra la historia de un piloto que, ...',
    precio: 90000.00,
    imagen: './assets/img/libro-3.png',
    categoria: 'aperitivos',
    cantidad: 13
  },
  {
    id: 4,
    nombre: 'El Alquimista Paulo Coelho',
    descripcion: 'El alquimista es un libro escrito por el escritor brasileño Paulo Coelho...',
    precio: 15000.00,
    imagen: './assets/img/libro-4.png',
    categoria: 'aperitivos',
    cantidad: 16
  },
  {
    id: 5,
    nombre: 'One Piece - Eiichiro Oda',
    descripcion: 'One Piece narra la historia de un joven llamado Monkey D. Luffy...',
    precio: 256000.00,
    imagen: './assets/img/libro-1.png',
    categoria: 'aperitivos',
    cantidad: 24
  },
  {
    id: 6,
    nombre: 'Los Vengadores',
    descripcion: 'Los Vengadores fueron un equipo compuesto por personas extraordinarias...',
    precio: 85000.00,
    imagen: './assets/img/libro-2.png',
    categoria: 'aperitivos',
    cantidad: 20
  },
  {
    id: 7,
    nombre: 'aCien años de soledad -de Gabriel García',
    descripcion: 'Muchos años después, frente al pelotón de fusilamiento, el coronel...',
    precio: 369000.00,
    imagen: './assets/img/libro-3.png',
    categoria: 'bebidas',
    cantidad: 14
  },
  {
    id: 8,
    nombre: 'Padre Rico, Padre Pobre -Robert Kiyosaki y Sharon Lechter',
    descripcion: 'Padre rico, padre pobre es fácil de leer y sus mensajes más importantes...',
    precio: 150000.00,
    imagen: './assets/img/libro-4.png',
    categoria: 'bebidas',
    cantidad: 18
  },
  {
    id: 9,
    nombre: 'El mundo de Sofía, de Jostein Gaarder',
    descripcion: 'Nuestra propia existencia contribuye a decidir cómo percibimos las cosas ...',
    precio: 50000.00,
    imagen: './assets/img/libro-1.png',
    categoria: 'bebidas',
    cantidad: 15
  }
]

// #2 Pintar los productos en el DOM
const productos = db

function pintarProductos() {
  for (let { id, nombre, precio, cantidad } of productos) {
    console.log(id, nombre, 'price', precio, 'qty:', cantidad)
  }
}

console.log('#1 pintando productos')
pintarProductos()

// #3 Carrito
let carrito = []

console.log('#Creando el carrito')

// #4 agregar al carrito
function agregarCarrito(id, cantidad = 1) {
  const productoEncontrado = productos.find((p) => p.id === id)

  if (productoEncontrado && productoEncontrado.cantidad > 0) {
    const articuloEncontrado = carrito.find((p) => p.id === id)

    if (articuloEncontrado) {
      if (checarStock(id, cantidad + articuloEncontrado.cantidad)) {
        articuloEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      carrito.push({ id: productoEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }
}

console.log('Agregando productos')
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(2)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)

function checarStock(id, cantidad) {
  const producto = productos.find((p) => p.id === id)

  return producto.cantidad - cantidad >= 0
}

// #5 remover articulos
function removerDelCarrito(id, cantidad = 1) {
  const articulo = carrito.find((p) => p.id === id)

  if (articulo && articulo.cantidad - cantidad > 0) {
    articulo.cantidad--
  } else {
    carrito = carrito.filter((p) => p.id !== id)
  }
}

console.log('Removiendo uno por uno del carrito')
removerDelCarrito(1)

// #6 Eliminar del carrito
function eliminarDelCarrito(id) {
  console.log(id)
  const articulo = carrito.find((p) => p.id === id)
  const findIndex = carrito.indexOf(articulo)

  carrito.splice(findIndex, 1)
}

console.log('Eliminando un producto del carrito')
eliminarDelCarrito(5)

// #7 Contar Articulos
function contadorDeArticulos() {
  let suma = 0

  for (let articulo of carrito) {
    suma += articulo.cantidad
  }

  return suma
}

// #8 El total
function obtenerTotal() {
  let suma = 0

  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    suma += producto.precio * articulo.cantidad
  }

  return suma
}

// #9 Limpiar carrito
function limpiarCarrito() {
  carrito = []
}

// limpiarCarrito()

// #10 Comparar
function comprar() {
  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    producto.cantidad -= articulo.cantidad
  }
  console.log('Productos actualizados')
  pintarProductos()
}


console.log('#Carrito:', carrito)
console.log('Total a pagar:', obtenerTotal())
console.log('Cantidad de articulos agregados al carrito:', contadorDeArticulos())

comprar()