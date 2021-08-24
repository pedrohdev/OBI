var X, N, M = [], extra = 0; // X é a quota mensal e N o numero de meses e M o uso de cada mes

scanf("%d", "X");
scanf("%d", "N");

for(var i = 0; i < N; i++){
   scanf("%d", "M[i]");
   
   if(M[i] < X){
      extra += X - M[i];
   }else if(M[i] > X){
		extra -= M[i] - X;
   }
}

printf("%d", X + extra);