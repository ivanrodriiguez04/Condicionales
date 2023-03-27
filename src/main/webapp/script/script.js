function ejercicio1(){
	let edad=prompt("¿Cuántos años tienes?");
	
	if(edad<1||edad>100){
		document.write("Numero fuera de rango");
	}
	else if(edad>=18){
		document.write("Tiene permiso para acceder");
	}
	else
		document.write("No se permite el acceso a menores de edad");
		
	
}

function ejercicio2(){
	let prenda=prompt("¿Qué tipo de prenda desea?");
	let precioPrenda;
	let precioFinal;

	switch(prenda){
		case "camisetas", "Camisetas":
			precioPrenda=prompt("¿Cuál es el precio de la prenda?");
			precioFinal=(precioPrenda-precioPrenda*0.05);
			document.write("El precio final sería de "+precioFinal);
			break;
		case "pantalones", "Pantalones":
			precioPrenda=prompt("¿Cuál es el precio de la prenda?");
			precioFinal=(precioPrenda-precioPrenda*0.10);
			document.write("El precio final sería de "+precioFinal);
			break;
		case "Ropa Interior","ropa Interior","Ropa interior", "ropa interior":
			precioPrenda=prompt("¿Cuál es el precio de la prenda?");
			precioFinal=precioPrenda;
			document.write("El precio final sería de "+precioFinal);
			break;
		case "Chaquetones", "chaquetones":
			precioPrenda=prompt("¿Cuál es el precio de la prenda?");
			precioFinal=(precioPrenda-precioPrenda*0.50);
			document.write("El precio final sería de "+precioFinal);
			break;
		default:
			precioPrenda=prompt("¿Cuál es el precio de la prenda?");
			precioFinal=(precioPrenda-precioPrenda*0.02);
			document.write("El precio final sería de "+precioFinal);
			break;	
	}
}