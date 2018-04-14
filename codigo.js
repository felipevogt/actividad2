var btnSuma	= document.getElementById("btn-sumar");
var btnResta	= document.getElementById("btn-restar");
var btnMultiplica	= document.getElementById("btn-multiplicar");
var btnDivide	= document.getElementById("btn-dividir");
var resultado	= document.getElementById("resultado");
var inputUno	= document.getElementById("input-uno");
var inputDos	= document.getElementById("input-dos");
var n1 = 1.1;
var n2 = 1.1;

inputUno.addEventListener("blur", function(){
	if(validar(inputUno.value)){
		n1 = parseInt(inputUno.value);
		inputUno.style.color = "green";
	}else{
		inputUno.style.color = "red";
		n1 = 1.1;
	}
});

inputDos.addEventListener("blur", function(){
	if(validar(inputDos.value)){
		n2 = parseInt(inputDos.value);
		inputDos.style.color = "green";
	}else{
		inputDos.style.color = "red";
		n2 = 1.1;
	}
});

btnSuma.addEventListener("click", function(){
	if (validarEnteros(n1,n2)) {
		resultado.innerHTML = suma(n1,n2);
	}else{
		resultado.innerHTML = "Numeros invalidos, ingrese numeros enteros";
	}
});

btnResta.addEventListener("click", function(){
	if (validarEnteros(n1,n2)) {
		resultado.innerHTML = resta(n1,n2);
	}else{
		resultado.innerHTML = "Numeros invalidos, ingrese numeros enteros";
	}
});

btnMultiplica.addEventListener("click", function(){
	if (validarEnteros(n1,n2)) {
		resultado.innerHTML = multiplicar(n1,n2);
	}else{
		resultado.innerHTML = "Numeros invalidos, ingrese numeros enteros";
	}
});

btnDivide.addEventListener("click", function(){
	if (validarEnteros(n1,n2) && n2 != 0) {
		resultado.innerHTML = dividir(n1,n2);
	}else{
		resultado.innerHTML = "Numeros invalidos, ingrese numeros enteros y el segundo valor tiene que ser mayor a 0";
	}
});

function validar(numero){
	if (numero % 1 == 0) {
		return true;
	}else{
		return false;
	}
}

function validarEnteros(numero1, numero2){
	if (Number.isInteger(numero1) && Number.isInteger(numero2)) {
		return true;
	}else{
		return false;
	}
}
function suma(n1, n2){
	return n1 + n2;
}
function resta(n1, n2){
	return n1 - n2;
}
function multiplicar(n1, n2){
	return n1 * n2;
}
function dividir(n1, n2){
	return n1 / n2;
}

