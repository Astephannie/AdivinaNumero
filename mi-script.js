 var numeroJugadora1 = prompt (" Jugador 1: ELige un número del 1 al 10");

 if (numeroJugadora1){
 	var acierto = false;
 	do{
 		var numeroJugadora2 = prompt (" Jugador 2: Adivina el número!");
 		if (numeroJugadora1==numeroJugadora2) {
 			acierto = true;
 			alert("Acertaste!!!!");
 		} else {
 			alert("Sigue intentando!!!!");
 		}		
 	}while(acierto==false)
 }
 else{
 	alert("No ingresaste número!");
}