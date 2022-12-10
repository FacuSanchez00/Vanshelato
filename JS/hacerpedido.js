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
  
  // const usuario = {
    //   nombre: document.getElementById("nombreApellido").value,
    //   email: document.getElementById("email").value,
    // };
    //Guardar datos del usuario
    // localStorage.setItem("user", JSON.stringify(usuario));
    
const gustos = [
  {
    gusto: "Seleccionar",
  },
  {
    gusto: "Crema Americana",
  },
  {
    gusto: "Crema del cielo",
  },
  {
    gusto: "Vainilla",
  },
  {
    gusto: "Coco con dulce de leche",
  },
  {
    gusto: "Frutilla epecial",
  },
  {
    gusto: "Granizado",
  },
  {
    gusto: "Menta granizada",
  },
  {
    gusto: "Crema de cerezas",
  },
  {
    gusto: "Crema flan al caramelo",
  },
  {
    gusto: "Banana Split",
  },
  {
    gusto: "Frutos del bosque",
  },
  {
    gusto: "Mousse de limon",
  },
  {
    gusto: "Crema KitKat",
  },
];
var select = document.getElementById("gustosSelect"); 
for (let index = 0; index < gustos.length; index++) {
  console.log(gustos[index].gusto)
  var option = document.createElement("option");
  option.text = gustos[index].gusto;
  select.add(option);
}

