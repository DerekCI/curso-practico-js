console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}`);
const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado mide: ${perimetroCuadrado}cm`);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();

console.group("Triangulo");
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log(`Area del triangulo ${areaTriangulo}`);
console.groupEnd();

console.group("Circulo");
const arrow = (radio) => Math.PI * (radio*radio);
console.groupEnd();




//INTERACCION CON HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = value * 4;
    alert(perimetro);
    
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = value * value;
    alert(`El area es ${area}`);
}
