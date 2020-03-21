let temperatura = process.argv[2]; //ejecutar e ingresar temperatura

let estado = Math.floor(Math.random() * 3) +1;

let virus="";

switch(estado){
    case 1:  virus="resfrio";
        break;
    case 2:  virus="cuarentena";
        break;
    case 3:  virus="fatal"
        break;
};

if(temperatura<38 || virus=="resfrio"){
    console.log("No tenés coronavirus");
    console.log("a casa");
}else{
    console.log("ESTADO :" + "Tenés coronavirus");
    console.log("RECOMENDACION: " + "aislamiento total");
};


console.log("Bueno definitivamente estamos en cuarentena hasta el 31/03");
console.log("Tengás coronavirus o no tenés que aislarte igual muajaja");

console.log("Ministerio de Salud");
console.log("Republica Argentina");
console.log("Agregando una línea más por Germaaaan");
