let icon = [];
let selecciones = [];

crearCuadricula()

function mostrarImg() {
    images = [
        '<img src="./images/alicia.jpg" alt="">',
        '<img src="./images/campanita.jpg" alt="">',
        '<img src="./images/edna.jpeg" alt="">',
        '<img src="./images/filopepe.png" alt="">',
        '<img src="./images/gufy.jpg" alt="">',
        '<img src="./images/mickey2.png" alt="">',
        '<img src="./images/olaf.jpg" alt="">',
        '<img src="./images/pumba.jpg" alt="">',
    ]
}

function crearCuadricula(){
    mostrarImg();
    selecciones = [];
    let cuadricula = document.getElementById("cuadricula");
    let cuadros = [];

    for (let i = 0; i < 16; i++) {
        cuadros.push(`
        <div class="contenido_tarjeta" onclick="seleccionar(${i})">
          <div class="tarjeta" id="tarjeta${i}">
            <div class="cuadro delante">
                <i class="fa-regular fa-question"></i>
            </div>
            <div class="cuadro detras" id="trasera${i}">
                ${images[0]}
            </div>
          </div>  
        </div>
        `);
        if(i % 2 == 1){
            images.splice(0,1);
        }
    }
    cuadros.sort(() => Math.random() -0.5);
    cuadricula.innerHTML = cuadros.join(" ");
}

function seleccionar(i){
    let tarjeta = document.getElementById("tarjeta" + i);
    if(tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }

    if(selecciones.length == 2){
        deseleccionar(selecciones);
        selecciones = [];
    }
}

function deseleccionar(selecciones){
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0]);
        let trasera2 = document.getElementById("trasera" + selecciones[1]);

        if(trasera1.innerHTML != trasera2.innerHTML){
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        }else{
            trasera1.style.background = "#52BE80";
            trasera2.style.background = "#52BE80";
        }
    }, 1000);
}