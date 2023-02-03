document.getElementById('boton_claro').addEventListener('click',
    function(){
        document.body.style.backgroundColor = 'rgb(255, 252, 172)';
        const collection = document.getElementsByClassName('color_fondo_oscuro');
        for (let i = 0; i < collection.length; i++){
            collection[i].style.backgroundColor = 'rgb(243, 252, 118)';
            collection[i].style.border = 'rgb(191, 163, 6) solid';
            collection[i].style.color = 'black';
        }
    }
)
document.getElementById('boton_claro').addEventListener('click',
    function(){
        const collection = document.getElementsByClassName('color_texto');
        for (let i = 0; i < collection.length; i++){
            collection[i].style.color = 'black';
        }
    }
)



document.getElementById('boton_oscuro').addEventListener('click',
    function(){
        document.body.style.backgroundColor = '#424241';
        const collection = document.getElementsByClassName('color_fondo_oscuro');
        for (let i = 0; i < collection.length; i++){
            collection[i].style.backgroundColor = '#797876';
            collection[i].style.border = 'black solid';
            collection[i].style.color = 'white';
        }
    }
)
document.getElementById('boton_oscuro').addEventListener('click',
    function(){
        const collection = document.getElementsByClassName('color_texto');
        for (let i = 0; i < collection.length; i++){
            collection[i].style.color = 'white';
        }
    }
)