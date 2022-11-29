// const direccion = prompt("Ingrese direccion");
// console.log(direccion);
// const tamano = prompt("Elija entre 1/4 KG, 1/2 KG o 1 KG");
// console.log(tamano);
// const gustos = prompt(
//   "Elija 3 de: Frutilla, Vainilla, Chocolate, Dulce de Leche, Tiramisu"
// );

// if (direccion && tamano && gustos) {
//   alert(
//     "Se está preparando el pedido para " +
//       direccion +
//       " con tamaño de " +
//       tamano +
//       " y gustos " +
//       gustos
//   );
// } else if (!direccion) {
//   alert("ingrese una dirección");
// } else if (!tamano) {
//   alert("ingrese un tamaño");
// } else if (!gustos) {
//   alert("ingrese gustos");
// }

//Guardar datos del usuario

const usuario = {
  nombre: document.getElementById("nombreApellido"),
  email: document.getElementById("email"),
};

localStorage.setItem("user", JSON.stringify(usuario));
