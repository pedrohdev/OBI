var a, b, c;

scanf("%d", "a");
scanf("%d", "b");
scanf("%d", "c");

if((Math.max(a, b, c) == a && Math.min(a, b, c) == c) || (Math.max(a, b, c) == c && Math.min(a, b, c) == a)){
	printf("%d", b);
}else if((Math.max(a, b, c) == b && Math.min(a, b, c) == a) || (Math.max(a, b, c) == a && Math.min(a, b, c) == b)){
	printf("%d", c);
}else if((Math.max(a, b, c) == c && Math.min(a, b, c) == b) || (Math.max(a, b, c) == b && Math.min(a, b, c) == c)){
	printf("%d", a);
}
