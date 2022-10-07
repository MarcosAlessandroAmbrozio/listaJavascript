/*document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#idservico").addEventListener("change",(e)=>{
    let total = 0;
       for(let x of e.target.options){
          let val = parseFloat(x.dataset.valor.replace(',','.'));
          total += x.selected ? val : 0;
       }
       document.querySelector("#valor").value = total.toFixed(2).replace('.',',');
    });
 });*/
 function comprar() {


  var cod = parseInt(prompt("Digite o código:" ));
  var quant = parseInt(prompt("Digite a quantidade do produto: "));
  var preco = 0 ;
  switch(cod){
   case 100 :
      preco = 1.70*quant;
      break;
   case 101 :
      preco = 2.30*quant;
      break;
   case 102 :
      preco = 2.60*quant;
      break;
   case 103 :
      preco = 2.40*quant;
      break;
   case 104 :
      preco = 2.50*quant;
      break;
   case 105 :
      preco = 1.00*quant;
      break;
  }
  var total = preco.toFixed(2);
  alert("O total a pagar será de R$" + total);

};

function contar3(){
   let out3 = document.getElementById('out3');
   out3.innerHTML += `<h2> Contando de 1 até 100 - Marcando os nº pares ao quadrado</h2>`

   let cont3 = 1
   while (cont3 <= 100){
       if(cont3 % 2 == 0){
           out3.innerHTML +=  `<mark><strong>${cont3*cont3}</mark></strong>&#x1F608;`         
       }else{
           out3.innerHTML +=  `${cont3} &#x1F607;` 
       }
       cont3++;
   }
   
}
/*
for(let i = 0; i < 15; i++){
   function inserir() {
      var div = document.createElement('div');
      div.id = 'meuId';
      var quant = parseInt(prompt("Digite o código (somente 1 ou 2)"));
      var total = 0 ;

      
      var total = preco.toFixed(2);
      alert("O total a pagar será de R$" + total);
    
    };
}


     let valor = prompt('Digite um valor ');
     let codigo = prompt(`Digite a cobaia da experiência: ${valor}`);
     let registreOutraPessoa = prompt('Deseja registrar outra pessoa? (S/N)');

     let total = [valor, codigo, registreOutraPessoa]*/

     function inserir(){
      
         var coelho = 0;
         var rato = 0;
      for(let i = 0; i < 15; i++){
         
         let codigo = prompt(`Digite a cobaia da experiência`);
         
         if(codigo == 1){
             coelho ++;
         }if(codigo == 2){
            rato ++;
         }
      }
       
      alert("O total de experiências é: 15" ); 
      alert("O total de coelhos é: "+ coelho);
      alert("O total de Ratos é: "+ rato);
      
         
   };
   