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
    console.log("Tenés coronavirus");
    console.log("aislamiento total");
};
