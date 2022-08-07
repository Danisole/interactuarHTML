
alert("hello you");//probando si esta bien vinculado

let nav = document.querySelector("nav");

let ul = document.createElement("ul");


let navBar = ["HOME", "NOSOTROS", "LOGUEATE", "COMUNICATE"];

for(const elNavBar of navBar){

    let li = document.createElement("li");
    li.innerHTML = elNavBar
    ul.appendChild(li);
}
nav.append(ul)

ul.style.background="pink";



//segundo ejercicio

let contenedor = document.querySelector("#tarjetas");


let carpas = [
    {id:01, color: "verde", personas:4, desayuno: true},
    {id:02, color: "azul", personas:3, desayuno: true},
    {id:03, color: "amarillo", personas:2, desayuno: true},
    {id:04, color: "rosa", personas:6, desayuno: true},
]

for(carpa of carpas){
    let div = document.createElement("div");
    div.innerHTML = `
        <h4>ID: ${carpa.id}</h4><br>
        <p>carpa: ${carpa.color}</p>
        <p>ocupantes: ${carpa.personas}</p>
        <p>desayuno: ${carpa.desayuno}</p>
    `
    contenedor.appendChild(div)
}


