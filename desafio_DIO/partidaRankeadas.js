// Calculadora de Partidas Rankeadas



function calculadoraRankeada ( vitoria , derrota){   

    const saldovitoria  = vitoria-derrota;     
    var nivel= "";

    if (saldovitoria <= 10){
        nivel= "ferro";
      } else if (saldovitoria >= 11 && saldovitoria <= 20){
        nivel= "Bronze";
      } else if (saldovitoria >= 21 && saldovitoria <= 50){
        nivel = "Prata";
      }else if (saldovitoria >= 51 && saldovitoria <= 80){
        nivel = "ouro";
      }else if (saldovitoria >= 81 && saldovitoria <= 90){
        nivel = "Diamente";
      }else if (saldovitoria >= 91 && saldovitoria <= 100){
        nivel = "Lendario";
      } else if (saldovitoria >= 101) {
        nivel = "Imortal";
      }
    
      return `O Herói tem um saldo de ${saldovitoria}, está no nível ${nivel}`;      
};


console.log(calculadoraRankeada(12, 1));



