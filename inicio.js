//variables
let tarjdestapadas = 0;
let imagen1 = null;
let imagen2 = null;
let primer_Resultado = null;
let segundo_Resultado = null;
let movimientos = 0;
let mostrar_Movimientos = document.getElementById(`movimientos`);
let mostrar_parejas = document.getElementById(`parejas`);
let mostrar_Tiempo = document.getElementById(`t_terminar`);

let puntos = 0;

let temporizador =false;
let timer = 60;
let timerinicial = 60;
let TiempoRegresivo = null;
let parejas = 0;
//generacion numero aleatorio
let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort( ()=>{return Math.random()-0.5});
console.log(numeros);

function contarTiempo(timer)
{
    
    
    TiempoRegresivo = setInterval(()=>{
    timer--;
    mostrar_Tiempo.innerHTML = `Tiempo ${timer} segundos pv`;
    if(timer < 0)
        {
        clearInterval(TiempoRegresivo);
        bloquearImagen(numeros);
        }


},1000);
    
    
}

function bloquearImagen(numeros)
{
    for(let i = 0; i<=15; i++)
    {
     let imagenBloqueada = document.getElementById(i);
     imagenBloqueada.innerHTML = `<img src="./img/${numeros[i]}.png" alt="">`;
     imagenBloqueada.disable = true;
    }
}
//funcion principal
function girar(id)
{
    if(temporizador == false)
        {
            contarTiempo(timer);
            temporizador= true;
        }
    tarjdestapadas++;
    console.log(tarjdestapadas);

    console.log(tarjdestapadas);
        if(tarjdestapadas == 1)
        {
            imagen1 = document.getElementById(id);
            primer_Resultado = numeros[id];
            imagen1.innerHTML = `<img src="./img/${primer_Resultado}.png" alt="">`;
            //desabilitar el boton
            imagen1.disabled = true;

        }
        else if(tarjdestapadas == 2){
            imagen2 = document.getElementById(id);
            segundo_Resultado = numeros[id];
            imagen2.innerHTML = `<img src="./img/${segundo_Resultado}.png" alt="">`;
            //desabilito segundo boton
            imagen1.disabled = true;
            imagen2.disabled = true;
            movimientos ++;
            mostrar_Movimientos.innerHTML = `Movimientos: ${movimientos}`;
            

            
            if(primer_Resultado == segundo_Resultado)
                {
                tarjdestapadas = 0 ;
               imagen2.disable = true;
               parejas++;
               mostrar_parejas.innerHTML = `Parejas: ${parejas}`;
               if(parejas == 8)
                {
                   clearInterval(TiempoRegresivo);
                   mostrar_parejas.innerHTML = `Pares: ${parejas} Felicitaciones`;        
                   mostrar_Movimientos.innerHTML = `Movimientos: ${movimientos}`;
                   mostrar_Tiempo.innerHTML = `tiempo demorado ${timerinicial-timer}`;
                }   
               }
            else
                {
                 setTimeout(()=>{
                    imagen1.innerHTML = ` `;
                    imagen2.innerHTML = ` `;
                    imagen1.disabled = false;
                    imagen2.disabled = false;
                    tarjdestapadas = 0 ;},800);   
                }
        
         }
    

            }
        


