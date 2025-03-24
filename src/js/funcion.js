let number;
let numberInput;//para guardar el numero
let contar = 0;
let intentos = [];//para guardar los intentos

function genumero() {//genera un numero aleatoreo
    number = Math.floor(Math.random() * 100) + 1;
    return number;
}

function guardarnumero() {//gurada el numero
    numberInput = document.getElementById("input").value;//obtiene el numero
    numberInput = parseInt(numberInput);//conversion dato a entero 
    comparanumero();
    document.getElementById('intentos').innerText = ++contar;//actualiza el contador
    console.log(numberInput);
}
function reiniciar() {
    contar = 0;//reinicia contador
    document.getElementById('intentos').innerText = contar;//actualiza el texto

    intentos = [];//reinicia vector
    document.getElementById('vector').innerText = intentos;
    //reinicia propiedades
    document.getElementsByClassName('card')[0].style.backgroundColor = 'white';
    document.getElementById('titulo').innerText = "Ingresa tu número";
    document.getElementById('numero').innerText = "?";

    genumero();//vuelve a generar numero

    document.getElementById('input').value = '';//limpiar casilla
    document.getElementsByClassName('btn-intentar')[0].disabled = false;
}

function comparanumero() {//compara los valores ingresados
    document.getElementById('input').value = '';//limpiar casilla
    intentos.push(numberInput);//agrega al vector
    document.getElementById('vector').innerText = intentos;
    if (contar >= 9) {//caso de no adivinar en 10 intentos
        document.getElementById('titulo').innerText = "Perdiste";
        document.getElementById('numero').innerText = number;
        document.getElementsByClassName('card')[0].style.backgroundColor = 'red';
        document.getElementsByClassName('btn-intentar')[0].disabled = true;
        return;
    }

    if (number == numberInput) {// caso de adivinar
        document.getElementById('titulo').innerText = "Ganaste";
        document.getElementById('numero').innerText = number;
        document.getElementsByClassName('card')[0].style.backgroundColor = 'green';
        document.getElementsByClassName('btn-intentar')[0].disabled = true;
        return;
    } else {
        if (number > numberInput) {
            document.getElementById('titulo').innerText = "El numero es mayor";
            document.getElementsByClassName('card')[0].style.backgroundColor = 'red';
        } else {
            document.getElementById('titulo').innerText = "El numero es menor";
            document.getElementsByClassName('card')[0].style.backgroundColor = 'red';
        }
    }
}
console.log(genumero());