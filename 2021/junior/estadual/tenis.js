var diferenca = []
var A, B, C, D; // Nivel do 4 jogadores

scanf("%d", "A")
scanf("%d", "B")
scanf("%d", "C")
scanf("%d", "D")

function calcula(a,b,c,d){
	return Math.max((a + b), (c + d)) - Math.min((a + b), (c + d))
}

diferenca.push(calcula(A, B, C, D))
diferenca.push(calcula(A, D, C, B))

diferenca.push(calcula(B, D, A, C))

printf("%d", Math.min(...diferenca))