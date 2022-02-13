function piso(nPiso, altura){
   let texto= "<p>"
    if(nPiso==altura){
      for( let i=0;i<2 * altura-1;i++){
        texto= texto + "#"
      }
    }else{
      nEspIzq= altura-nPiso;
      nEspDer= 2* nPiso-3;
   for(let i=0;i<nEspIzq; i++){
       texto=texto +"&nbsp;"
   }
   if(nPiso==1){
     texto= texto +"#"
   }else{
     texto=texto +"#"
     for(let i=0;i< nEspDer;i++){
       texto=texto + "&nbsp"
     }
     texto=texto + "#"
   }
  }
  texto=texto + "</p>"
   return texto;
}
 

let nPisos;
do{
//Lo que se hace
nPisos= Number(prompt("Ingrese el numero de pisos que desea"))
}while(isNaN(nPisos) || nPisos<=0 || nPisos>10 || nPisos%1 !=0) //Condicion para que se repita
let contenido = "";
for(let i=1; i<= nPisos; i++){
 contenido = contenido + piso(i, nPisos)
}
let contenedor =  document.querySelector("#contenedor")
contenedor.innerHTML = contenido;
//