//Clase consturctora
class Electrodomestico {
  constructor(id, producto, marca, tipo, precio) {
    this.id = id;
    this.producto = producto;
    this.marca = marca;
    this.tipo = tipo;
    this.precio = precio;
  }

  mostrar() {
    alert(`
    ID:${this.id}
    Producto:${this.producto}
    Marca:${this.marca}
    Tipo:${this.tipo}
    Precio:${this.precio}`);
  }

  mostrar_consola() {
    console.log(`
    ID:${this.id}
    Producto:${this.producto}
    Marca:${this.marca}
    Tipo:${this.tipo}
    Precio:${this.precio}`);
  }
}

let array = [];

function insertar(v1, v2, v3, v4, v5) {
  const ubicacion = document.getElementById("ubicar");

  let tabla = `

        
          <tr>
            <td>${v1}</td>
            <td>${v2} </td>
            <td>${v3}</td>
            <td>${v4}</td>
            <td>${v5}</td>
            
          </tr>
  `;

  ubicacion.innerHTML += tabla;
}

function agregar(id, producto, marca, tipo, precio, array) {
  let elec_agregar = new Electrodomestico(id, producto, marca, tipo, precio);
  array.push(elec_agregar);
  elec_agregar.mostrar_consola();
}

function cargarTabla() {
  let id = prompt("Ingrese el id del producto");
  let producto = prompt("Ingrese  el nombre del producto");
  let marca = prompt("Ingrese la marca del producto");
  let tipo = prompt("Ingrese el tipo del producto ");
  let precio = prompt("Ingrese el precio del producto");
  insertar(id, producto, marca, tipo, precio);
  agregar(id, producto, marca, tipo, precio, array);
}

function buscarElemento(array) {
  let boton = document.getElementById("btn_busqueda");
  let id_buscar = parseInt(prompt("Ingrese el id del producto"));

  let cont = 0;
  array.forEach((element) => {
    if (id_buscar == element.id) {
      cont++;
      element.mostrar();
    }
  });
  if (cont == 0) {
    alert("No se encontro el producto o no cargo nada");
  }
}

function eliminar(array) {
  alert(
    "Recuerde que esta por borrar todo el contenido del la tabla de y del array"
  );
  for (let i = 0; i < array.length; i++) {
    array.pop();
  }
  eliminar = document.getElementById("ubicar");

  eliminar.outerHTML = "";
  location.reload();
}
