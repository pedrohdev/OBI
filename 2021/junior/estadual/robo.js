function formatter(length, format, variable) {
    return [Array(length).fill(format).join(""), ...Array(length).fill("").map((e, index) => `${variable}[${index}]`)];
}

var N, C,S; // N = NUMERO DE ESTACOES, C = NUMERO DE COMANDOS, S = ESTACAO MAIS PROXIMA A AREA DEVASTADA

var comandos = [];

var posicao = 1;

var log = [];

scanf("%d%d%d", "N", "C", "S");

scanf(...formatter(C, "%d", "comandos"));

comandos = comandos.map((comando, index) => {
   	if(comando == -1){
       
       if(posicao - 1 == 0){
       	posicao = N
       }else{
       	posicao = posicao - 1
       }
   }else {
   	if(posicao + 1 > N){
    	posicao = 1
    }else {
    	posicao = posicao + 1
    }
   }
   
   	return posicao
   
})


printf("%d", [1, ...comandos].filter((comando) => comando == S).length)