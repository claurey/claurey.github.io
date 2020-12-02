const tipos = [
  { idTipo: 1, nombreTipo: "Platos" },
  { idTipo: 2, nombreTipo: "Bebidas" },
  { idTipo: 3, nombreTipo: "Postres" },
];

const categorias = [
  { idCategoria: 1, nombreCategoria: "Fondo", idTipo: 1 },
  { idCategoria: 2, nombreCategoria: "Entradas", idTipo: 1 },
  { idCategoria: 3, nombreCategoria: "Sopas", idTipo: 1 },
  { idCategoria: 4, nombreCategoria: "Cocktails", idTipo: 2 },
  { idCategoria: 5, nombreCategoria: "Refrescos", idTipo: 2 },
  { idCategoria: 6, nombreCategoria: "Jugo de Frutas", idTipo: 2 },
  { idCategoria: 7, nombreCategoria: "Helados", idTipo: 3 },
  { idCategoria: 8, nombreCategoria: "Tortas", idTipo: 3 },
];

const selectTipo = document.getElementById("selectTipo");
const selectCategoria = document.getElementById("selectCategoria");

const llenarTipos = () => {
  tipos.forEach((tipo) => {
    let miOption = document.createElement("option");
    miOption.innerText = tipo.nombreTipo;
    miOption.value = tipo.idTipo;
    selectTipo.appendChild(miOption);
  });
};


llenarTipos();


const llenarCategoriasPorId = (idTipo) => {
  if (idTipo === 0) {
    selectCategoria.innerHTML =
      "<option value='0'>-Seleccione Categoria-</option>";
    return;
  }
  selectCategoria.innerHTML = "";

  let categoriasPorTipo = categorias.filter((cat) => {
    if (cat.idTipo === idTipo) {
      return cat;
    }
  });

  categoriasPorTipo.forEach((cat) => {
    let optionCat = document.createElement("option");
    optionCat.innerText = cat.nombreCategoria;
    optionCat.value = cat.idCategoria;
    selectCategoria.appendChild(optionCat);
  });
};

/**
 * elemento.onchange Se ejecuta cada vez que un input o select
 * cambia su valor, es decir cuando se selecciona un "option"
 */

selectTipo.onchange = (e) => {
  let idTipo = +selectTipo.value;
  llenarCategoriasPorId(idTipo);
};




const inputNombre = document.getElementById("inputNombre");
let numero = 0;
let platos = [];


const platoNuevo = function(
  _numero = 0,
  _nombre = "",
  _precio = 0,
  _tipo = "",
  _categoria = ""
){
  let objPlato = {
    numero: _numero,
    nombre: _nombre,
    precio: _precio,
    tipo: tipos.find(
      (tipo)=>{
        if(tipo.idTipo===_tipo){
        return tipo}
      }
    ).nombreTipo,
    categoria: categorias.find(
      (cat)=>{
        if(cat.idCategoria===_categoria){
        return cat}
      }
    ).nombreCategoria
  }
  return objPlato;
 
};




/*Evento al registrat plato*/
const formRegistro = document.getElementById("formRegistro");
const tbody = document.getElementById("tbody");


formRegistro.onclick = (e) => {
  e.preventDefault();
  console.log("Probando");
  numero = numero +1;
  let plato = new platoNuevo(numero, inputNombre.value, inputPrecio.value, +selectTipo.value, +selectCategoria.value);
  platos.push(plato);

  console.log(platos);

  tbody.innerText="";



 platos.forEach((plat)=>{
  
  let filaTabla = document.createElement("tr");
  tbody.appendChild(filaTabla);
  
  let colNumero = document.createElement("td");
  colNumero.innerText = plat.numero;
  filaTabla.appendChild(colNumero);

  let colNombre = document.createElement("td");
  colNombre.innerText = plat.nombre;
  filaTabla.appendChild(colNombre);

  let colPrecio = document.createElement("td");
  colPrecio.innerText = plat.precio;
  filaTabla.appendChild(colPrecio);

  let colTipo = document.createElement("td");
  colTipo.innerText = plat.tipo;
  filaTabla.appendChild(colTipo);

  let colCategoria = document.createElement("td");
  colCategoria.innerText = plat.categoria;
  filaTabla.appendChild(colCategoria);

 });
};
