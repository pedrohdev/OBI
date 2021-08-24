var matches = [];
var score = 0;

for(var i = 0; i < 6; i++){
   scanf("%s", "matches[i]");
   if(matches[i] == "V"){
      score += 1;
   }
}

if(score == 5 || score == 6){
	printf("%d", 1);
}else if(score == 3 || score == 4){
	printf("%d", 2);
}else if(score == 1 || score == 2){
	printf("%d", 3);
}else {
	printf("%d", -1);
}